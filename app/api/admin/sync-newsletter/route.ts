import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { newsletterSubscribers } from '@/lib/db/schema'
import { addToNewsletterAudience } from '@/lib/email'
import { eq } from 'drizzle-orm'

export async function POST(request: NextRequest) {
  try {
    // Basic auth check - you might want to implement proper admin authentication
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const token = authHeader.split(' ')[1]
    if (token !== process.env.ADMIN_API_TOKEN) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      )
    }

    if (!process.env.RESEND_NEWSLETTER_AUDIENCE_ID) {
      return NextResponse.json(
        { error: 'RESEND_NEWSLETTER_AUDIENCE_ID not configured' },
        { status: 500 }
      )
    }

    // Get all active subscribers
    const subscribers = await db
      .select()
      .from(newsletterSubscribers)
      .where(eq(newsletterSubscribers.active, true))

    let successCount = 0
    let errorCount = 0
    const errors: string[] = []

    // Process in smaller batches for API endpoint
    const batchSize = 5
    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize)

      const promises = batch.map(async (subscriber) => {
        try {
          await addToNewsletterAudience(subscriber.email, subscriber.name || undefined)
          successCount++
        } catch (error) {
          errorCount++
          errors.push(`${subscriber.email}: ${error}`)
        }
      })

      await Promise.all(promises)

      // Small delay between batches
      if (i + batchSize < subscribers.length) {
        await new Promise(resolve => setTimeout(resolve, 500))
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Newsletter sync completed',
      stats: {
        total: subscribers.length,
        synced: successCount,
        failed: errorCount,
        errors: errors.slice(0, 10) // Limit error details
      }
    })

  } catch (error) {
    console.error('Newsletter sync API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}