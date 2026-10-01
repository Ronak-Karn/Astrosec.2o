import type { Metadata } from "next";
import Link from "next/link";
import { serviceGroups } from "@/lib/data";
import { SectionHeading, CTABand } from "@/components/UI";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI agents, business automation, VAPT security audits, cloud hardening, and secure full-stack development from AstroSec.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="container-x pt-32 pb-16 md:pt-40 md:pb-20">
          <SectionHeading
            title="Three disciplines. One accountable team."
            description="From finding the holes in your infrastructure to shipping the product itself — it all happens under one roof, with security in mind from the first commit."
          />
        </div>
      </section>

      {serviceGroups.map((group) => (
        <section
          key={group.id}
          id={group.id}
          className="scroll-mt-24 border-b border-hairline"
        >
          <div className="container-x grid gap-8 py-16 md:grid-cols-[300px_1fr] md:gap-14 md:py-20">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-[1.75rem]">
                {group.title}
              </h2>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-fg-muted">
                {group.summary}
              </p>
            </div>

            <div className="border-t border-hairline">
              {group.services.map((service) => (
                <div
                  key={service.title}
                  className="grid gap-2 border-b border-hairline py-6 md:grid-cols-[minmax(200px,260px)_1fr] md:gap-10"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p className="text-[1rem] leading-relaxed text-fg-muted">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-b border-hairline">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <p className="max-w-xl text-lg text-fg-muted">
            Not sure what you need? Describe the problem — we&apos;ll tell you
            honestly whether we&apos;re the right fit.
          </p>
          <Link href="/contact" className="btn-ghost shrink-0">
            Talk to us
          </Link>
        </div>
      </section>

      <CTABand />
    </>
  );
}
