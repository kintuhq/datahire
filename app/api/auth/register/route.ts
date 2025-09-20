import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { schools } from '@/lib/db/schema'
import { hashPassword, createToken, createEmailVerificationToken } from '@/lib/auth'
import { sendEmailVerificationEmail } from '@/lib/email'
import { rateLimit, rateLimitConfigs } from '@/lib/rate-limit'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting
    const limiter = rateLimit(rateLimitConfigs.auth)
    const { allowed, remaining, resetTime } = limiter(request)

    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many registration attempts. Please try again later.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': resetTime.toString(),
          }
        }
      )
    }

    const body = await request.json()
    const { email, password } = registerSchema.parse(body)

    // Check if school already exists
    const existingSchool = await db.select().from(schools).where(eq(schools.email, email)).limit(1)
    if (existingSchool.length > 0) {
      return NextResponse.json({ error: 'School already exists' }, { status: 400 })
    }

    // Create school
    const hashedPassword = await hashPassword(password)
    const [school] = await db.insert(schools).values({
      email,
      password: hashedPassword,
    }).returning()

    // Send email verification
    try {
      const verificationToken = await createEmailVerificationToken(email)
      const protocol = request.headers.get('x-forwarded-proto') || 'https'
      const host = request.headers.get('host') || 'mathjobs.xyz'
      const baseUrl = `${protocol}://${host}`
      await sendEmailVerificationEmail(email, verificationToken, baseUrl)
    } catch (error) {
      console.error('Failed to send verification email:', error)
    }

    // Create session token
    const token = createToken({ schoolId: school.id, email: school.email })

    const response = NextResponse.json({
      success: true,
      school: { id: school.id, email: school.email, name: school.name }
    })

    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return response
  } catch (error) {
    console.error('Registration error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid input data' }, { status: 400 })
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}