import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
import { db } from './db'
import { schools, emailVerificationTokens, passwordResetTokens } from './db/schema'
import { eq, lt } from 'drizzle-orm'
import crypto from 'crypto'

const JWT_SECRET = process.env.JWT_SECRET
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required')
}

export interface SessionData {
  schoolId: string
  email: string
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export function createToken(payload: SessionData): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
}

export function verifyToken(token: string): SessionData | null {
  try {
    return jwt.verify(token, JWT_SECRET) as SessionData
  } catch {
    return null
  }
}

export async function getSession(): Promise<SessionData | null> {
  const cookieStore = cookies()
  const token = cookieStore.get('auth-token')

  if (!token) return null

  const session = verifyToken(token.value)
  if (!session) return null

  // Verify school still exists
  const school = await db.select({ id: schools.id }).from(schools).where(eq(schools.id, session.schoolId)).limit(1)
  if (school.length === 0) return null

  return session
}

export async function requireAuth(): Promise<SessionData> {
  const session = await getSession()
  if (!session) {
    throw new Error('Authentication required')
  }
  return session
}

export async function requireVerifiedAuth(): Promise<SessionData> {
  const session = await requireAuth()

  // Check if the school is verified
  const [school] = await db
    .select({ verified: schools.verified })
    .from(schools)
    .where(eq(schools.id, session.schoolId))
    .limit(1)

  if (!school || !school.verified) {
    throw new Error('Email verification required')
  }

  return session
}

export async function createEmailVerificationToken(email: string): Promise<string> {
  // Generate a secure random token
  const token = crypto.randomBytes(32).toString('hex')

  // Set expiration to 24 hours from now
  const expiresAt = new Date()
  expiresAt.setHours(expiresAt.getHours() + 24)

  // Delete any existing tokens for this email
  await db.delete(emailVerificationTokens).where(eq(emailVerificationTokens.email, email))

  // Create new token
  await db.insert(emailVerificationTokens).values({
    email,
    token,
    expiresAt,
  })

  return token
}

export async function verifyEmailToken(token: string): Promise<string | null> {
  // Clean up expired tokens first
  await db.delete(emailVerificationTokens).where(lt(emailVerificationTokens.expiresAt, new Date()))

  // Find the token
  const [tokenRecord] = await db
    .select()
    .from(emailVerificationTokens)
    .where(eq(emailVerificationTokens.token, token))
    .limit(1)

  if (!tokenRecord) {
    return null
  }

  // Delete the token after use
  await db.delete(emailVerificationTokens).where(eq(emailVerificationTokens.token, token))

  // Mark the school as verified
  await db.update(schools)
    .set({ verified: true, updatedAt: new Date() })
    .where(eq(schools.email, tokenRecord.email))

  return tokenRecord.email
}

export async function createPasswordResetToken(email: string): Promise<string> {
  // Generate a secure random token
  const token = crypto.randomBytes(32).toString('hex')

  // Set expiration to 1 hour from now
  const expiresAt = new Date()
  expiresAt.setHours(expiresAt.getHours() + 1)

  // Delete any existing tokens for this email
  await db.delete(passwordResetTokens).where(eq(passwordResetTokens.email, email))

  // Create new token
  await db.insert(passwordResetTokens).values({
    email,
    token,
    expiresAt,
  })

  return token
}

export async function verifyPasswordResetToken(token: string): Promise<string | null> {
  // Clean up expired tokens first
  await db.delete(passwordResetTokens).where(lt(passwordResetTokens.expiresAt, new Date()))

  // Find the token
  const [tokenRecord] = await db
    .select()
    .from(passwordResetTokens)
    .where(eq(passwordResetTokens.token, token))
    .limit(1)

  if (!tokenRecord) {
    return null
  }

  return tokenRecord.email
}

export async function consumePasswordResetToken(token: string): Promise<string | null> {
  const email = await verifyPasswordResetToken(token)

  if (email) {
    // Delete the token after use
    await db.delete(passwordResetTokens).where(eq(passwordResetTokens.token, token))
  }

  return email
}