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
      <section className="border-b border-hairline">
        <div className="container-x pt-32 pb-16 md:pt-40 md:pb-20">
          <SectionHeading
            title="Security isn't a feature. It's the foundation."
            description="AstroSec closes the gap between high-performance software, strong security, and a seamless client experience. We build the product and defend it — so you only deal with one team."
          />
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container-x grid grid-cols-1 divide-y divide-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 py-10 text-center sm:py-14">
              <p className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-[0.95rem] text-fg-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container-x py-16 md:py-24">
          <SectionHeading title="The minds behind AstroSec" />

          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name}>
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-panel">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-[0.92rem] text-fg-muted">
                  {member.role}
                </p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-fg-muted">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container-x max-w-3xl py-16 md:py-20">
          <SectionHeading
            title="The extended team"
            description="Beyond our core leadership, AstroSec collaborates with a network of freelance developers, designers, and technical specialists — so every project gets exactly the expertise it needs, without compromising on standards."
          />
        </div>
      </section>

      <CTABand />
    </>
  );
}
