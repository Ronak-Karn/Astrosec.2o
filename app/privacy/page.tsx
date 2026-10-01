import type { Metadata } from "next";
import { site } from "@/lib/data";
import { SectionHeading } from "@/components/UI";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How AstroSec collects, uses, and protects your personal and corporate information.",
};

const sections = [
  {
    title: "1. Information we collect",
    body: [
      "Contact information: name, work email, phone number, and company details provided via our contact forms.",
      "Project data: technical requirements, infrastructure details, and proprietary code shared during consultations, VAPT audits, or development scopes.",
      "Usage data: standard analytics regarding how you interact with our website (IP addresses, browser types, and navigation paths) to improve our digital presence.",
    ],
  },
  {
    title: "2. How we use your data",
    body: [
      "AstroSec explicitly does not sell, rent, or trade your data. We use your information strictly to deliver customized development, AI, and cybersecurity solutions; communicate project updates, technical reports, and security alerts; execute Vulnerability Assessments and Penetration Testing safely and legally; and comply with legal and regulatory obligations.",
    ],
  },
  {
    title: "3. Data security & protection",
    body: [
      "As a cybersecurity firm, our internal infrastructure is hardened. We employ enterprise-grade encryption, strict Identity and Access Management roles, and secure communication protocols to ensure your data remains confidential and protected against unauthorized access, alteration, or destruction.",
    ],
  },
  {
    title: "4. Third-party disclosures",
    body: [
      "We share information with trusted third parties only when necessary to execute our services (for example, deploying infrastructure on AWS, Vercel, or Supabase). All third-party providers are vetted for strict security compliance, and we do not authorize them to use your data for independent purposes.",
    ],
  },
  {
    title: "5. Confidentiality and NDAs",
    body: [
      "For clients engaging in penetration testing, cloud hardening, or custom application development, all data sharing is governed by strict, mutually agreed Non-Disclosure Agreements prior to project commencement.",
    ],
  },
  {
    title: "6. Your rights",
    body: [
      "You may request access to, correction of, or deletion of your personal data stored on our systems at any time. To exercise these rights, contact our administrative team using the details below.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40">
      <div className="container-x max-w-3xl">
        <SectionHeading
          eyebrow="Legal"
          title="Privacy Policy"
          description="Last updated: October 2026"
        />

        <div className="mt-10 space-y-10">
          <p className="text-sm leading-relaxed text-fg-muted">
            Because our core business revolves around securing infrastructure,
            we take data privacy with the utmost seriousness. This policy
            explains how we collect, use, and protect your personal and
            corporate information when you use our website or engage our
            services.
          </p>

          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-white">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="text-sm leading-relaxed text-fg-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h2 className="text-lg font-semibold text-white">
              7. Contact us
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">
              Questions about this policy or our security protocols? Email{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-accent hover:underline"
              >
                {site.email}
              </a>{" "}
              or call{" "}
              <a
                href={`tel:${site.phoneHref}`}
                className="text-accent hover:underline"
              >
                {site.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
