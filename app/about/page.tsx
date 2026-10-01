import type { Metadata } from "next";
import { team, stats } from "@/lib/data";
import { SectionHeading, CTABand } from "@/components/UI";

export const metadata: Metadata = {
  title: "About",
  description:
    "AstroSec is a collective of cybersecurity specialists, strategic operators, and digital creators building secure, high-performance software.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-hairline pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="About us"
            title="Security isn't a feature. It's the foundation."
            description="AstroSec closes the gap between high-performance software, impenetrable security, and seamless client experience. We build the product and defend it — so you only deal with one team."
          />
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container-x grid grid-cols-1 divide-y divide-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              data-reveal
              style={{ transitionDelay: `${index * 90}ms` }}
              className="px-2 py-10 text-center sm:py-14"
            >
              <p className="font-mono text-4xl font-medium text-accent md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm text-fg-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container-x py-16 md:py-20">
          <SectionHeading eyebrow="The team" title="The minds behind AstroSec" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={member.name}
                data-reveal
                style={{ transitionDelay: `${index * 90}ms` }}
                className="card card-lift overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden bg-panel">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container-x max-w-3xl py-16 md:py-20">
          <SectionHeading
            eyebrow="Extended network"
            title="The extended team"
            description="Beyond our core leadership, AstroSec collaborates with a global network of freelance developers, designers, and technical specialists — so every project gets exactly the expertise it needs, without compromising on standards."
          />
        </div>
      </section>

      <CTABand />
    </>
  );
}
