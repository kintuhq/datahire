# Resend Newsletter Integration Setup

This guide explains how to set up the Resend audience integration for newsletter subscribers.

## Prerequisites

1. Resend account with API access
2. Existing `RESEND_API_KEY` environment variable

## Setup Steps

### 1. Create a Newsletter Audience in Resend

You can create an audience either through the Resend dashboard or via API:

#### Option A: Via Resend Dashboard
1. Log in to your Resend dashboard
2. Navigate to "Audiences"
3. Create a new audience (e.g., "Newsletter Subscribers")
4. Copy the audience ID

#### Option B: Via API
```bash
curl -X POST "https://api.resend.com/audiences" \
  -H "Authorization: Bearer YOUR_RESEND_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name": "Newsletter Subscribers"}'
```

### 2. Configure Environment Variables

Add the following environment variable to your `.env.local`:

```bash
RESEND_NEWSLETTER_AUDIENCE_ID=your_audience_id_here
```

For the admin sync API endpoint, also add:
```bash
ADMIN_API_TOKEN=your_secure_admin_token_here
```

### 3. Test the Integration

Run the test script to verify everything works:

```bash
npx tsx scripts/test-resend-integration.ts
```

### 4. Sync Existing Subscribers

If you have existing newsletter subscribers in your database, sync them to Resend:

```bash
npx tsx scripts/sync-existing-subscribers.ts
```

## How It Works

### New Subscribers
- When someone subscribes via the newsletter form, they're automatically added to both your database and the Resend audience
- Name parsing: If a full name is provided, it's split into first/last name for Resend

### Existing Subscribers
- Reactivated subscribers are automatically synced to Resend
- Use the sync script for bulk migration of existing subscribers

### API Endpoints

#### Manual Sync (Admin)
```bash
POST /api/admin/sync-newsletter
Authorization: Bearer YOUR_ADMIN_TOKEN
```

## Features

- ✅ Automatic syncing of new newsletter subscribers
- ✅ Handles subscriber reactivation
- ✅ Bulk sync script for existing subscribers
- ✅ Admin API for manual syncing
- ✅ Graceful error handling (non-blocking)
- ✅ Rate limiting and batch processing
- ✅ Comprehensive logging

## Error Handling

The integration is designed to be non-blocking:
- If Resend sync fails, the newsletter subscription still succeeds
- Errors are logged but don't prevent the core functionality
- Missing environment variables are handled gracefully

## Monitoring

Check your application logs for:
- `Successfully added contact to Resend audience: {contact_id}`
- `Resend audience sync failed (non-critical): {error}`
- `RESEND_NEWSLETTER_AUDIENCE_ID not configured, skipping audience sync`

## Troubleshooting

### Common Issues

1. **Audience not found error**
   - Verify `RESEND_NEWSLETTER_AUDIENCE_ID` is correct
   - Ensure the audience exists in your Resend account

2. **API key issues**
   - Check `RESEND_API_KEY` is valid
   - Verify API key has audience management permissions

3. **Rate limiting**
   - The scripts include built-in delays
   - For large syncs, consider running during off-peak hours

### Testing

Use the test script to diagnose issues:
```bash
npx tsx scripts/test-resend-integration.ts
```

This will verify:
- Environment variables are set
- API connection works
- Audience exists
- Contact creation works