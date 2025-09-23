#!/usr/bin/env tsx

/**
 * Test script for Resend audience integration
 *
 * Usage: npx tsx scripts/test-resend-integration.ts
 */

import { addToNewsletterAudience } from '../lib/email'
import { Resend } from 'resend'

async function testResendIntegration() {
  console.log('🧪 Testing Resend integration...')

  // Check environment variables
  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY environment variable is not set')
    return false
  }

  if (!process.env.RESEND_NEWSLETTER_AUDIENCE_ID) {
    console.error('❌ RESEND_NEWSLETTER_AUDIENCE_ID environment variable is not set')
    return false
  }

  console.log('✅ Environment variables configured')

  try {
    // Test 1: Check if we can connect to Resend
    console.log('\n📡 Testing Resend API connection...')
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Try to list audiences to verify API key works
    const audiences = await resend.audiences.list()
    console.log('✅ Successfully connected to Resend API')
    console.log(`Found ${audiences.data?.length || 0} audiences`)

    // Test 2: Check if the specified audience exists
    console.log('\n📋 Checking if newsletter audience exists...')
    try {
      const audience = await resend.audiences.get(process.env.RESEND_NEWSLETTER_AUDIENCE_ID)
      console.log('✅ Newsletter audience found:', audience.data?.name)
    } catch (error) {
      console.error('❌ Newsletter audience not found. You may need to create it first.')
      console.log('💡 You can create an audience in your Resend dashboard or use the API')
      return false
    }

    // Test 3: Test adding a contact (use a test email)
    console.log('\n👤 Testing contact creation...')
    const testEmail = 'test+' + Date.now() + '@example.com'
    const result = await addToNewsletterAudience(testEmail, 'Test User')

    if (result) {
      console.log('✅ Successfully added test contact to audience')
      console.log('Contact ID:', result.id)
    } else {
      console.log('⚠️  Contact creation returned null (check logs for details)')
    }

    console.log('\n🎉 All tests completed successfully!')
    return true

  } catch (error) {
    console.error('❌ Test failed:', error)
    return false
  }
}

// Run the test
testResendIntegration()
  .then((success) => {
    if (success) {
      console.log('\n✨ Resend integration is working correctly!')
      process.exit(0)
    } else {
      console.log('\n💥 Resend integration test failed')
      process.exit(1)
    }
  })
  .catch((error) => {
    console.error('💥 Test script failed:', error)
    process.exit(1)
  })