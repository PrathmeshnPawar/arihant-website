export default function PrivacyAndSecurityPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-bold text-arihant-violet">
          Privacy and Security Policy · Disclaimer
        </h1>

        <div className="mt-10 space-y-10 text-gray-700 leading-relaxed">
          
          <PolicyBlock title="Privacy and Security Policy">
            <p>
              Arihant Capital Markets Limited understands that you have entrusted
              us with personal information that is both important and confidential.
              We take our responsibility to protect your information extremely
              seriously. We are committed to keeping non-public personal
              information about you secure and confidential.
            </p>

            <p>
              We thank you for entrusting us with your financial affairs, and we
              are committed to safeguarding the privacy of our online customers,
              mobile and site visitors.
            </p>
          </PolicyBlock>

          <PolicyBlock title="Refund & Cancellation Policy">
            <p>
              No refund of account opening charges shall be made once the Trading
              and Demat account is opened. Once your account is opened, payments
              made thereafter will be credited towards your account.
            </p>

            <p>
              All refunds, if applicable, will be processed within 7–10 working
              days after acceptance of the refund request.
            </p>
          </PolicyBlock>

          <PolicyBlock title="How We Collect Information">
            <ul className="list-disc pl-5 space-y-2">
              <li>Information provided on applications and forms</li>
              <li>Transaction-related information</li>
              <li>Website usage through cookies and similar technologies</li>
            </ul>
          </PolicyBlock>

          <PolicyBlock title="How Information Is Used">
            <p>
              The personal information you provide is kept confidential and used
              to support our customer relationship with you, improve services,
              and provide relevant communications.
            </p>
          </PolicyBlock>

          <PolicyBlock title="Information Sharing">
            <p>
              Arihant does not sell your personal information. Information may be
              shared only as permitted by law or to support operational services.
            </p>
          </PolicyBlock>

          <PolicyBlock title="Safeguarding Your Information">
            <p>
              We take precautions to ensure that information collected is
              protected and accessed only by authorized parties.
            </p>
          </PolicyBlock>

          <PolicyBlock title="Authentication & Password Security">
            <ul className="list-disc pl-5 space-y-2">
              <li>Passwords must be at least 6 characters</li>
              <li>Must include letters and numbers</li>
              <li>Repeated failed logins will disable access</li>
            </ul>
          </PolicyBlock>

          <PolicyBlock title="Cookies & Tracking">
            <p>
              Cookies are used to enhance website performance and security.
              Cookies do not store sensitive personal data.
            </p>
          </PolicyBlock>

          <PolicyBlock title="Phishing Awareness">
            <p>
              Phishing attempts may impersonate legitimate institutions. Never
              share passwords or sensitive information via email links.
            </p>
          </PolicyBlock>

          <PolicyBlock title="General Disclaimer">
            <p>
              The content of this website is for informational purposes only.
              Users should rely on their own judgment before making investment
              decisions.
            </p>

            <p>
              Arihant Capital Markets Ltd and its affiliates are not liable for
              any losses arising from reliance on website content.
            </p>
          </PolicyBlock>

          <PolicyBlock title="Limitation of Liability">
            <p>
              Arihant makes no guarantees regarding completeness or accuracy of
              information. We are not liable for direct or indirect losses.
            </p>
          </PolicyBlock>

          <PolicyBlock title="Investments and Decisions">
            <p>
              Investments in securities are subject to market risks. This website
              does not constitute investment advice or solicitation.
            </p>
          </PolicyBlock>

          <PolicyBlock title="Research Reports">
            <p>
              Research reports are for informational purposes only and do not
              represent guarantees or recommendations suitable for all investors.
            </p>
          </PolicyBlock>

        </div>
      </section>
    </main>
  );
}

/* Reusable Block Component */

function PolicyBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-arihant-violet mb-3">
        {title}
      </h2>
      <div className="space-y-3 text-sm">{children}</div>
    </div>
  );
}
