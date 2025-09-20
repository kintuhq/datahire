import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "MathJobs - Worldwide Math Teaching Positions",
  description: "Find your perfect math teaching position worldwide. Free job board for math teachers and schools.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "MathJobs - Worldwide Math Teaching Positions",
    description: "Find your perfect math teaching position worldwide. Free job board for math teachers and schools.",
    url: "https://mathjobs.xyz",
    siteName: "MathJobs",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "MathJobs - Worldwide Math Teaching Positions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MathJobs - Worldwide Math Teaching Positions",
    description: "Find your perfect math teaching position worldwide. Free job board for math teachers and schools.",
    images: ["/og.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense
          fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}
        >
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
