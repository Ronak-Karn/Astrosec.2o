import type { Metadata } from "next";
import Link from "next/link";
import { serviceGroups } from "@/lib/data";
import { SectionHeading, CTABand } from "@/components/UI";
import { ArrowIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI agents, business automation, VAPT security audits, cloud hardening, and secure full-stack development from AstroSec.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-hairline pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Services"
            title="Three disciplines. One accountable team."
            description="From finding the holes in your infrastructure to shipping the product itself — it all happens under one roof, with security baked in from the first commit."
          />
        </div>
      </section>

      {serviceGroups.map((group) => (
        <section
          key={group.id}
          id={group.id}
          className="scroll-mt-24 border-b border-hairline"
        >
          <div className="container-x grid gap-10 py-16 md:grid-cols-[280px_1fr] md:py-20">
            <div>
              <p className="font-mono text-sm text-accent">{group.number}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {group.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                {group.summary}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.services.map((service) => (
                <div
                  key={service.title}
                  className="card p-6 transition-colors duration-200 hover:border-accent/40"
                >
                  <h3 className="text-base font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
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
          <Link href="/contact" className="btn-primary shrink-0">
            Talk to us <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTABand />
    </>
  );
}
