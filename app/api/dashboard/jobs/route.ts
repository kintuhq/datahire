import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { jobs, schools } from '@/lib/db/schema'
import { requireAuth } from '@/lib/auth'
import { eq, desc } from 'drizzle-orm'

export async function GET() {
  try {
    const session = await requireAuth()

    // Get school info
    const [school] = await db
      .select({
        id: schools.id,
        name: schools.name,
        email: schools.email,
        bio: schools.bio,
        logo: schools.logo,
        verified: schools.verified,
      })
      .from(schools)
      .where(eq(schools.id, session.schoolId))
      .limit(1)

    // Get school's jobs
    const schoolJobs = await db
      .select()
      .from(jobs)
      .where(eq(jobs.schoolId, session.schoolId))
      .orderBy(desc(jobs.createdAt))

    return NextResponse.json({
      school,
      jobs: schoolJobs,
    })
  } catch (error) {
    console.error('Error fetching dashboard data:', error)

    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}