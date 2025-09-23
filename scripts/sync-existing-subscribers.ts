#!/usr/bin/env tsx

/**
 * Script to sync existing newsletter subscribers to Resend audience
 *
 * Usage: npx tsx scripts/sync-existing-subscribers.ts
 */

import { db } from '../lib/db'
import { newsletterSubscribers } from '../lib/db/schema'
import { addToNewsletterAudience } from '../lib/email'
import { eq } from 'drizzle-orm'

async function syncExistingSubscribers() {
  console.log('Starting sync of existing subscribers to Resend audience...')

  if (!process.env.RESEND_NEWSLETTER_AUDIENCE_ID) {
    console.error('❌ RESEND_NEWSLETTER_AUDIENCE_ID environment variable is not set')
    console.log('Please set this environment variable before running the sync')
    process.exit(1)
  }

  try {
    // Get all active subscribers
    const subscribers = await db
      .select()
      .from(newsletterSubscribers)
      .where(eq(newsletterSubscribers.active, true))

    console.log(`Found ${subscribers.length} active subscribers to sync`)

    let successCount = 0
    let errorCount = 0

    // Process subscribers in batches to avoid rate limits
    const batchSize = 10
    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize)

      console.log(`Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(subscribers.length / batchSize)}...`)

      const promises = batch.map(async (subscriber) => {
        try {
          await addToNewsletterAudience(subscriber.email, subscriber.name || undefined)
          console.log(`✅ Synced: ${subscriber.email}`)
          successCount++
        } catch (error) {
          console.error(`❌ Failed to sync ${subscriber.email}:`, error)
          errorCount++
        }
      })

      await Promise.all(promises)

      // Add delay between batches to be respectful of API limits
      if (i + batchSize < subscribers.length) {
        console.log('Waiting 1 second before next batch...')
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
    }

    console.log('\n📊 Sync completed!')
    console.log(`✅ Successfully synced: ${successCount}`)
    console.log(`❌ Failed to sync: ${errorCount}`)
    console.log(`📧 Total processed: ${subscribers.length}`)

  } catch (error) {
    console.error('❌ Script failed:', error)
    process.exit(1)
  }
}

// Run the script
syncExistingSubscribers()
  .then(() => {
    console.log('✨ Script completed successfully')
    process.exit(0)
  })
  .catch((error) => {
    console.error('💥 Script failed:', error)
    process.exit(1)
  })