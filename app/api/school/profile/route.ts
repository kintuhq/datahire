import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { schools } from '@/lib/db/schema'
import { requireAuth } from '@/lib/auth'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

const schoolUpdateSchema = z.object({
  name: z.string().min(1).optional(),
  url: z.string().url().optional().or(z.literal("")),
})

// GET /api/school/profile - Get school profile
export async function GET(request: NextRequest) {
  try {
    const session = await requireAuth()

    const [school] = await db
      .select({
        id: schools.id,
        name: schools.name,
        url: schools.url,
        bio: schools.bio,
        logo: schools.logo,
      })
      .from(schools)
      .where(eq(schools.id, session.schoolId))
      .limit(1)

    if (!school) {
      return NextResponse.json({ error: 'School not found' }, { status: 404 })
    }

    return NextResponse.json(school)
  } catch (error) {
    console.error('Error fetching school profile:', error)

    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT /api/school/profile - Update school profile
export async function PUT(request: NextRequest) {
  try {
    const session = await requireAuth()
    const body = await request.json()
    const updateData = schoolUpdateSchema.parse(body)

    // Remove empty strings for optional fields
    const cleanedData = Object.fromEntries(
      Object.entries(updateData).filter(([_, value]) => value !== "")
    )

    const [updatedSchool] = await db
      .update(schools)
      .set({
        ...cleanedData,
        updatedAt: new Date(),
      })
      .where(eq(schools.id, session.schoolId))
      .returning()

    if (!updatedSchool) {
      return NextResponse.json({ error: 'School not found' }, { status: 404 })
    }

    return NextResponse.json(updatedSchool)
  } catch (error) {
    console.error('Error updating school profile:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({
        error: 'Invalid input data',
        details: error.errors
      }, { status: 400 })
    }

    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}