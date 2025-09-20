import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { getUploadUrl } from '@/lib/storage'
import { rateLimit, rateLimitConfigs } from '@/lib/rate-limit'
import { z } from 'zod'

const uploadSchema = z.object({
  fileType: z.string().regex(/^image\/(jpeg|jpg|png|gif|webp)$/),
  fileSize: z.number().max(5 * 1024 * 1024, 'File size must be less than 5MB'), // 5MB limit
  jobId: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting
    const limiter = rateLimit(rateLimitConfigs.api)
    const { allowed, remaining, resetTime } = limiter(request)

    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many upload requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': resetTime.toString(),
          }
        }
      )
    }

    const session = await requireAuth()
    const body = await request.json()
    const { fileType, fileSize, jobId } = uploadSchema.parse(body)

    const { uploadUrl, fileUrl } = await getUploadUrl(session.schoolId, fileType, jobId)

    return NextResponse.json({
      uploadUrl,
      fileUrl,
    })
  } catch (error) {
    console.error('Error generating upload URL:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({
        error: error.errors[0]?.message || 'Invalid file data',
        details: error.errors
      }, { status: 400 })
    }

    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}