import type { Metadata } from "next";
import Link from "next/link";
import {
  capabilities,
  process,
  projects,
  site,
  stats,
} from "@/lib/data";
import { SectionHeading, CTABand } from "@/components/UI";
import ProjectCard from "@/components/ProjectCard";
import {
  ArrowIcon,
  CodeIcon,
  CpuIcon,
  ShieldIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
};

const icons = {
  shield: ShieldIcon,
  cpu: CpuIcon,
  code: CodeIcon,
};

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* ---------------- hero ---------------- */}
      <section className="relative overflow-hidden border-b border-hairline">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container-x relative py-28 md:py-36">
          <p className="eyebrow">AstroSec V2.0</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            We build software that&apos;s{" "}
            <span className="text-accent">engineered to be trusted.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
            AstroSec is a security-first studio. We ship full-stack products,
            harden cloud infrastructure, and automate businesses with AI — with
            security baked into every line.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Start a project <ArrowIcon className="h-4 w-4" />
            </Link>
            <Link href="/projects" className="btn-ghost">
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- stats ---------------- */}
      <section className="border-b border-hairline">
        <div className="container-x grid grid-cols-1 divide-y divide-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 py-10 text-center sm:py-12">
              <p className="font-mono text-4xl font-medium text-accent md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm text-fg-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- capabilities ---------------- */}
      <section className="border-b border-hairline">
        <div className="container-x py-16 md:py-24">
          <SectionHeading
            eyebrow="What we do"
            title="Deep backend security. High-end execution."
            description="Three disciplines under one roof — so the people who build your product are the same people who secure it."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {capabilities.map((cap) => {
              const Icon = icons[cap.icon];
              return (
                <Link
                  key={cap.title}
                  href={cap.href}
                  className="card group p-7 transition-colors duration-200 hover:border-accent/40"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-hairline bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {cap.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    Learn more <ArrowIcon className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- process ---------------- */}
      <section className="border-b border-hairline">
        <div className="container-x py-16 md:py-24">
          <SectionHeading
            eyebrow="How we work"
            title="A process without surprises"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div key={step.step} className="border-t border-hairline pt-6">
                <p className="font-mono text-sm text-accent">{step.step}</p>
                <h3 className="mt-3 text-base font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- selected work ---------------- */}
      <section className="border-b border-hairline">
        <div className="container-x py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title="Recent highlights"
              description="A few things we've shipped lately."
            />
            <Link href="/projects" className="btn-ghost shrink-0">
              Full portfolio <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
