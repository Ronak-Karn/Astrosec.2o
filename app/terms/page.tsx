import type { Metadata } from "next";
import { site } from "@/lib/data";
import { SectionHeading } from "@/components/UI";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing your use of the AstroSec website and our professional services.",
};

const sections = [
  {
    title: "1. Scope of services",
    paragraphs: [
      "AstroSec provides professional digital services, including but not limited to full-stack web and mobile development, AI system architecture, cybersecurity consulting, cloud infrastructure hardening, and enterprise VAPT (Vulnerability Assessment and Penetration Testing).",
    ],
  },
  {
    title: "2. Ethical cybersecurity & authorization",
    paragraphs: [
      "For any engagement involving security auditing, penetration testing, or vulnerability scanning, the client must provide explicit, written authorization. The client guarantees they hold the legal right and ownership of the networks, applications, or servers being tested. AstroSec assumes no liability for engagements where the client has misrepresented their authority over a system.",
    ],
  },
  {
    title: "3. Client responsibilities",
    paragraphs: [
      "Clients are expected to provide timely feedback, necessary credentials (via secure channels), and accurate project requirements. Delays in client communication may result in adjusted project timelines.",
      "The client agrees not to use any solutions provided by AstroSec for illegal, unethical, or malicious purposes.",
    ],
  },
  {
    title: "4. Intellectual property",
    paragraphs: [
      "Custom development: upon full and final payment, the intellectual property rights of the specific application, website, or CRM developed for the client transfer to the client.",
      "AstroSec tools: AstroSec retains all ownership of pre-existing, proprietary algorithms, testing scripts, and internal frameworks utilized during the development or auditing process.",
    ],
  },
  {
    title: "5. Payment terms",
    paragraphs: [
      "Service fees, milestone schedules, and deliverables will be clearly outlined in individual project proposals or Statements of Work (SOW). Work commences only after the agreed-upon initial deposit is received. AstroSec reserves the right to halt development or withhold final deployment if payment terms are breached.",
    ],
  },
  {
    title: "6. Limitation of liability",
    paragraphs: [
      "While AstroSec implements the highest industry standards for security and code performance, digital environments are constantly evolving. AstroSec shall not be held liable for any indirect, incidental, or consequential damages, including data loss or business interruption, arising from the use or inability to use our services or deliverables.",
    ],
  },
  {
    title: "7. Governing law",
    paragraphs: [
      "These terms shall be governed by and construed in accordance with the laws of New Delhi, India. Any disputes arising out of or related to these Terms of Service or AstroSec's engagements shall be subject to the exclusive jurisdiction of the courts located in New Delhi.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40">
      <div className="container-x max-w-3xl">
        <SectionHeading
          eyebrow="Legal"
          title="Terms of Service"
          description="Last updated: October 2026"
        />

        <div className="mt-10 space-y-10">
          <p className="text-sm leading-relaxed text-fg-muted">
            By accessing our website or engaging our services, you agree to be
            bound by these Terms of Service. Please read them carefully.
          </p>

          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-white">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((paragraph) => (
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
              8. Contact information
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">
              For legal inquiries, contract discussions, or questions regarding
              these terms, email{" "}
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
