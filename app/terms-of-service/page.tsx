"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function TermsOfServicePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-200"
              onClick={() => router.push("/")}
            >
              <Image
                src="/logo.png"
                alt="DataHire logo"
                width={56}
                height={56}
                className="h-14 w-14 mr-2"
                priority
              />
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="text-black">Data</span> <span className="text-blue-600">Hire</span>
                </h1>
                <p className="text-muted-foreground -mt-1 text-sm">Data Analyst Jobs</p>
              </div>
            </div>
            <Button
              onClick={() => router.push("/register")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300 px-6 py-3 h-11 cursor-pointer"
            >
              Post a Job
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">
            Last updated: January 1, 2025
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Data Hire ("we," "our," or "us") and the datahire.co website (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Description of Service</h2>
              <p className="text-muted-foreground mb-4">
                Data Hire is a job board platform that connects data analysts with companies seeking to hire data professionals. Our Service includes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Job posting and application functionality</li>
                <li>User account creation and management</li>
                <li>Career resources and guidance</li>
                <li>Communication tools between employers and job seekers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">User Accounts</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Account Creation</h3>
                <p className="text-muted-foreground">
                  To use certain features of our Service, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Account Security</h3>
                <p className="text-muted-foreground">
                  You are responsible for safeguarding the password and for keeping your account information confidential. You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Account Termination</h3>
                <p className="text-muted-foreground">
                  We reserve the right to terminate or suspend your account at any time, with or without cause, and with or without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">User Content and Conduct</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Content Ownership</h3>
                <p className="text-muted-foreground">
                  You retain ownership of any content you submit, post, or display on or through the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Prohibited Conduct</h3>
                <p className="text-muted-foreground mb-3">
                  You agree not to use the Service to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Post false, misleading, or fraudulent information</li>
                  <li>Impersonate any person or entity</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Post spam or unsolicited content</li>
                  <li>Attempt to gain unauthorized access to the Service</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Use the Service for any commercial purpose other than job seeking or hiring</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Content Moderation</h3>
                <p className="text-muted-foreground">
                  We reserve the right to review, monitor, and remove any content that violates these terms or that we deem inappropriate, at our sole discretion.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Job Postings and Applications</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">For Employers</h3>
                <p className="text-muted-foreground mb-3">
                  When posting jobs, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Provide accurate and truthful job descriptions</li>
                  <li>Comply with all applicable employment laws</li>
                  <li>Not discriminate based on protected characteristics</li>
                  <li>Only post legitimate job opportunities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">For Job Seekers</h3>
                <p className="text-muted-foreground mb-3">
                  When applying for jobs, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Provide accurate and truthful information in your applications</li>
                  <li>Only apply for positions you are genuinely interested in</li>
                  <li>Respect the hiring processes of employers</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Fees and Payment</h2>
              <p className="text-muted-foreground">
                Currently, Data Hire offers its services free of charge. We reserve the right to introduce fees for certain features or services in the future, with appropriate notice to users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground">
                The Service and its original content, features, and functionality are and will remain the exclusive property of Data Hire and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Privacy</h2>
              <p className="text-muted-foreground">
                Your privacy is important to us. Please review our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>, which also governs your use of the Service, to understand our practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground mb-4">
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We expressly disclaim all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p className="text-muted-foreground">
                We do not warrant that the Service will be uninterrupted, error-free, or completely secure. We do not guarantee the accuracy, completeness, or usefulness of any information on the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                In no event shall Data Hire, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to indemnify, defend, and hold harmless Data Hire and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which Data Hire operates, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Severability</h2>
              <p className="text-muted-foreground">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us through our <a href="/contact" className="text-primary hover:underline">contact page</a>.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="mx-auto px-4 py-12" style={{ maxWidth: "1240px" }}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <a href="/" className="inline-block">
                <div className="flex items-center mb-3 hover:opacity-80 transition-opacity duration-200">
                  <Image
                    src="/logo.png"
                    alt="DataHire Logo"
                    width={32}
                    height={32}
                    className="h-8 w-8 mr-2"
                    loading="lazy"
                  />
                  <h3 className="text-2xl font-bold text-foreground">
                    Data <span className="text-primary">Hire</span>
                  </h3>
                </div>
              </a>
              <p className="text-muted-foreground mb-4 max-w-md">
                The global platform connecting talented data analysts with companies worldwide.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">For Analysts</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="/career-resources" className="hover:text-primary transition-colors">
                    Career Resources
                  </a>
                </li>
                <li>
                  <a href="/data-analysis-tips" className="hover:text-primary transition-colors">
                    Data Analysis Tips
                  </a>
                </li>
              </ul>
            </div>

            {/* For Companies */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">For Companies</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/login" className="hover:text-primary transition-colors">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/hiring-guide" className="hover:text-primary transition-colors">
                    Hiring Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Connect With Us</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 Data Hire.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="/contact" className="hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}