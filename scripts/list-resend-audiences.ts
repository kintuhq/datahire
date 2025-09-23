#!/usr/bin/env tsx

/**
 * Script to list all Resend audiences and their IDs
 *
 * Usage: npx tsx scripts/list-resend-audiences.ts
 */

import { Resend } from 'resend'

async function listAudiences() {
  console.log('📋 Fetching Resend audiences...')

  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY environment variable is not set')
    process.exit(1)
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const response = await resend.audiences.list()

    if (!response.data || response.data.length === 0) {
      console.log('📭 No audiences found.')
      console.log('\n💡 To create an audience:')
      console.log('1. Go to https://resend.com/audiences')
      console.log('2. Click "Create Audience"')
      console.log('3. Name it "Newsletter Subscribers"')
      console.log('4. Copy the audience ID from the URL')
      return
    }

    console.log(`\n📧 Found ${response.data.length} audience(s):\n`)

    response.data.forEach((audience, index) => {
      console.log(`${index + 1}. ${audience.name}`)
      console.log(`   ID: ${audience.id}`)
      console.log(`   Created: ${new Date(audience.created_at).toLocaleDateString()}`)
      console.log('')
    })

    console.log('💡 Copy the ID of the audience you want to use for newsletters')
    console.log('   and add it to your .env.local as RESEND_NEWSLETTER_AUDIENCE_ID')

  } catch (error) {
    console.error('❌ Failed to fetch audiences:', error)
    process.exit(1)
  }
}

listAudiences()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('💥 Script failed:', error)
    process.exit(1)
  })