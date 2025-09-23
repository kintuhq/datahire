export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto px-4 py-12" style={{ maxWidth: "1240px" }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">
            Last updated: January 1, 2025
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Data Hire ("we," "our," or "us") operates the datahire.co website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
              <p className="text-muted-foreground">
                We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
                <p className="text-muted-foreground mb-3">
                  When you create an account or use our Service, we may collect personally identifiable information, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Name and email address</li>
                  <li>Company information (for employers)</li>
                  <li>Resume and professional information (for job seekers)</li>
                  <li>Job posting details (for employers)</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Usage Data</h3>
                <p className="text-muted-foreground">
                  We may collect information about how the Service is accessed and used. This usage data may include information such as your computer's Internet Protocol address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Cookies and Tracking Technologies</h3>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-3">
                We use the collected data for various purposes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
                <li>To match job seekers with relevant job opportunities</li>
                <li>To enable employers to find qualified candidates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Sharing and Disclosure</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Job Matching</h3>
                <p className="text-muted-foreground">
                  When you apply for a job through our platform, we share your application materials (resume, cover letter, etc.) with the prospective employer. When employers post jobs, this information is visible to job seekers using our platform.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Service Providers</h3>
                <p className="text-muted-foreground">
                  We may employ third-party companies and individuals to facilitate our Service, provide the Service on our behalf, perform Service-related services, or assist us in analyzing how our Service is used. These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Legal Requirements</h3>
                <p className="text-muted-foreground">
                  We may disclose your personal data if required to do so by law or in response to valid requests by public authorities.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground">
                The security of your data is important to us. We strive to use commercially acceptable means to protect your personal data, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground">
                We will retain your personal data only for as long as necessary for the purposes set out in this Privacy Policy. We will retain and use your personal data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Data Protection Rights</h2>
              <p className="text-muted-foreground mb-3">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>The right to access, update or delete the information we have on you</li>
                <li>The right of rectification</li>
                <li>The right to object</li>
                <li>The right of restriction</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                If you wish to exercise any of these rights, please contact us through our <a href="/contact" className="text-primary hover:underline">contact page</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our Service does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from anyone under 18. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us through our <a href="/contact" className="text-primary hover:underline">contact page</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us through our <a href="/contact" className="text-primary hover:underline">contact page</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}