#!/usr/bin/env tsx

/**
 * Script to create a newsletter audience in Resend
 *
 * Usage: npx tsx scripts/create-newsletter-audience.ts
 */

import { Resend } from 'resend'

async function createNewsletterAudience() {
  console.log('📧 Creating newsletter audience in Resend...')

  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY environment variable is not set')
    process.exit(1)
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const { data, error } = await resend.audiences.create({
      name: 'Newsletter Subscribers',
    })

    if (error) {
      console.error('❌ Failed to create audience:', error)
      process.exit(1)
    }

    console.log('✅ Successfully created newsletter audience!')
    console.log(`📧 Audience Name: Newsletter Subscribers`)
    console.log(`🆔 Audience ID: ${data?.id}`)
    console.log('')
    console.log('💡 Add this to your .env.local:')
    console.log(`RESEND_NEWSLETTER_AUDIENCE_ID=${data?.id}`)

  } catch (error) {
    console.error('❌ Failed to create audience:', error)
    process.exit(1)
  }
}

createNewsletterAudience()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('💥 Script failed:', error)
    process.exit(1)
  })