import React from 'react';
import Link from 'next/link';

// Helper component for styling sections
const PolicySection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h2>
    <div className="space-y-4 text-gray-700 leading-relaxed">
      {children}
    </div>
  </div>
);

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white pt-32 pb-20"> {/* Add padding to offset header/footer */}
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none">
          <PolicySection title="Introduction">
            <p>
              Welcome to Proudly Laikipian. We are committed to protecting your personal information and
              your right to privacy. If you have any questions or concerns about this privacy notice or
              our practices with regard to your personal information, please contact us at
              info@proudlylaikipian.com.
            </p>
            <p>
              This privacy notice describes how we might use your information if you visit our
              website at <Link href="/" className="text-brand-blue hover:underline">proudlylaikipian.com</Link> or
              engage with us in other related ways, including any sales, marketing, or events.
            </p>
          </PolicySection>

          <PolicySection title="1. What Information Do We Collect?">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Personal Information You Disclose to Us</h3>
            <p>
              We collect personal information that you voluntarily provide to us when you express an
              interest in obtaining information about us or our services, or when you contact us.
            </p>
            <p>
              The personal information we collect may include the following:
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Name and Contact Data:</strong> We collect your first and last name, email address,
                phone number, and other similar contact data.</li>
              <li><strong>Inquiry Data:</strong> We collect information related to your travel preferences,
                group size, desired dates, and any other information you provide when you
                fill out our "Book Now" or inquiry forms.</li>
            </ul>
          </PolicySection>

          <PolicySection title="2. How Do We Use Your Information?">
            <p>
              We use personal information collected via our website for a variety of business
              purposes described below:
            </p>
            <ul className="list-disc pl-6">
              <li><strong>To respond to inquiries:</strong> We use your information to respond to your
                inquiries and to fulfill your requests for travel planning and quotes.</li>
              <li><strong>To send administrative information:</strong> We may use your personal information
                to send you information about our services, changes to our terms, and
                other transactional information.</li>
              <li><strong>To send marketing communications:</strong> We may use your personal information
                for our marketing purposes, if this is in accordance with your marketing
                preferences. You can opt-out of our marketing emails at any time.</li>
            </ul>
          </PolicySection>

          <PolicySection title="3. Will Your Information Be Shared?">
            <p>
              We only share information with your consent, to comply with laws, to provide you with
              services, to protect your rights, or to fulfill business obligations.
            </p>
            <p>
              Specifically, we may need to share your data with third-party service providers,
              such as hotels, safari lodges, or transport operators, to fulfill the travel
              bookings you have requested.
            </p>
          </PolicySection>

          <PolicySection title="4. Do We Use Cookies?">
            <p>
              We may use cookies and similar tracking technologies to access or store information.
              Our website uses cookies to help us analyze web traffic and improve our site to
              tailor it to customer needs. You can choose to accept or decline cookies.
            </p>
          </PolicySection>

          <PolicySection title="5. How Do We Keep Your Information Safe?">
            <p>
              We have implemented appropriate technical and organizational security measures
              designed to protect the security of any personal information we process.
              However, despite our safeguards, no electronic transmission over the internet
              can be guaranteed to be 100% secure.
            </p>
          </PolicySection>
          
          <PolicySection title="6. What Are Your Privacy Rights?">
            <p>
              In some regions, you have certain rights under applicable data protection laws.
              These may include the right (i) to request access and obtain a copy of your
              personal information, (ii) to request rectification or erasure; (iii) to
              restrict the processing of your personal information; and (iv) if applicable,
              to data portability.
            </p>
          </PolicySection>
          
          <PolicySection title="7. Changes to This Privacy Notice">
            <p>
              We may update this privacy notice from time to time. The updated version will be
              indicated by an updated "Last updated" date. We encourage you to review this
              privacy notice frequently to be informed of how we are protecting your information.
            </p>
            <p>Last updated: November 14, 2025</p>
          </PolicySection>

          <PolicySection title="8. How Can You Contact Us?">
            <p>
              If you have questions or comments about this notice, you may email us at
              <a href="mailto:info@proudlylaikipian.com" className="text-brand-blue hover:underline"> info@proudlylaikipian.com</a> or
              contact us by post at:
            </p>
            <p>
              Proudly Laikipian<br />
              [Your Business Address, e.g., Nairobi, Kenya]
            </p>
          </PolicySection>
        </div>
      </div>
    </main>
  );
}