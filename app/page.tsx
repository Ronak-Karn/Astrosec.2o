import type { Metadata } from "next";
import Link from "next/link";
import { capabilities, process, projects, site, stats } from "@/lib/data";
import { SectionHeading, CTABand } from "@/components/UI";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
};

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* ---------------- hero ---------------- */}
      <section className="border-b border-hairline bg-ink-deep">
        <div className="container-x hero-seq py-28 md:py-36">
          <span className="hero-badge">AstroSec 2.0</span>
          <h1 className="display mt-8 max-w-4xl text-[clamp(2.6rem,7vw,4.6rem)] text-white">
            We build software that&apos;s engineered to be trusted.
          </h1>
          <p className="lede mt-7">
            AstroSec is a security-first studio. We ship full-stack products,
            harden cloud infrastructure, and automate businesses with AI — with
            security baked into every line.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Start a project
            </Link>
            <Link href="/projects" className="btn-ghost">
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- stats: the white band ---------------- */}
      <section className="bg-paper text-ink">
        <div className="container-x grid grid-cols-1 divide-y divide-hairline-dark sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 py-12 text-center sm:py-14">
              <p className="text-5xl font-semibold tracking-tight text-ink md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-[0.95rem] text-paper-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- capabilities: open rows, no cards ---------------- */}
      <section className="border-b border-hairline">
        <div className="container-x py-20 md:py-28">
          <SectionHeading
            title="Deep backend security. High-end execution."
            description="Three disciplines under one roof — the people who build your product are the same people who secure it."
          />

          <div className="mt-12 border-t border-hairline">
            {capabilities.map((cap) => (
              <Link
                key={cap.title}
                href={cap.href}
                className="grid gap-2 border-b border-hairline py-7 transition-colors duration-150 hover:bg-white/[0.025] md:grid-cols-[minmax(220px,300px)_1fr] md:gap-10 md:px-3"
              >
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {cap.title}
                </h3>
                <p className="text-[1.02rem] leading-relaxed text-fg-muted">
                  {cap.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- process: a real sequence, so numbering is earned ---------------- */}
      <section className="border-b border-hairline">
        <div className="container-x py-20 md:py-28">
          <SectionHeading title="A process without surprises" />

          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.step} className="border-t border-hairline pt-6">
                <p className="text-[0.95rem] font-medium text-fg-muted">
                  {index + 1}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-fg-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- selected work: borderless gallery ---------------- */}
      <section className="border-b border-hairline">
        <div className="container-x py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              title="Recent highlights"
              description="A few things we've shipped lately."
            />
            <Link
              href="/projects"
              className="shrink-0 text-[0.95rem] font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors duration-150 hover:decoration-white"
            >
              Full portfolio
            </Link>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
