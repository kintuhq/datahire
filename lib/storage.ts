import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const s3Client = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT,
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
})

const BUCKET_NAME = process.env.R2_BUCKET_NAME || 'datahire'

export async function uploadLogo(file: File, companyId: string): Promise<string> {
  const fileExtension = file.name.split('.').pop()
  const fileName = `logos/${companyId}.${fileExtension}`

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: fileName,
    Body: await file.arrayBuffer(),
    ContentType: file.type,
  })

  await s3Client.send(command)

  return `${process.env.R2_PUBLIC_URL}/${fileName}`
}

export async function deleteLogo(logoUrl: string): Promise<void> {
  if (!logoUrl.startsWith(process.env.R2_PUBLIC_URL!)) return

  const fileName = logoUrl.replace(`${process.env.R2_PUBLIC_URL}/`, '')

  const command = new DeleteObjectCommand({
    Bucket: BUCKET_NAME,
    Key: fileName,
  })

  await s3Client.send(command)
}

export async function getUploadUrl(companyId: string, fileType: string, jobId?: string): Promise<{ uploadUrl: string; fileUrl: string }> {
  console.log('=== STORAGE: getUploadUrl called ===')
  console.log('Inputs:', { companyId, fileType, jobId })
  console.log('BUCKET_NAME:', BUCKET_NAME)
  console.log('R2_PUBLIC_URL:', process.env.R2_PUBLIC_URL)

  const fileExtension = fileType.split('/')[1]
  console.log('File extension:', fileExtension)

  // Use job-specific filename if jobId is provided, otherwise use company-based filename
  const fileName = jobId
    ? `logos/job-${jobId}.${fileExtension}`
    : `logos/${companyId}.${fileExtension}`

  console.log('Generated filename:', fileName)

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: fileName,
    ContentType: fileType,
  })

  console.log('PutObjectCommand created:', {
    Bucket: BUCKET_NAME,
    Key: fileName,
    ContentType: fileType
  })

  try {
    console.log('Generating signed URL...')
    const uploadUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 })
    console.log('Signed URL generated successfully')
    console.log('Upload URL preview:', uploadUrl.substring(0, 100) + '...')

    const fileUrl = `${process.env.R2_PUBLIC_URL}/${fileName}`
    console.log('File URL:', fileUrl)

    console.log('=== STORAGE: getUploadUrl SUCCESS ===')
    return { uploadUrl, fileUrl }
  } catch (error) {
    console.error('=== STORAGE: getUploadUrl ERROR ===')
    console.error('Error generating signed URL:', error)
    console.error('S3Client config:', {
      region: 'auto',
      endpoint: process.env.R2_ENDPOINT,
      forcePathStyle: true,
      hasCredentials: !!(process.env.R2_ACCESS_KEY_ID && process.env.R2_SECRET_ACCESS_KEY)
    })
    throw error
  }
}