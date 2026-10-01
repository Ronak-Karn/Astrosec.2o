import type { Metadata } from "next";
import { projects, testimonials } from "@/lib/data";
import { SectionHeading, CTABand } from "@/components/UI";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects from AstroSec — web platforms, mobile apps, enterprise CRMs, cloud security, and VAPT audits.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b border-hairline pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Selected work"
            title="Real products. Real infrastructure. Shipped."
            description="A sample of what we've built and secured for clients across real estate, dating, education, and fintech."
          />
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container-x grid gap-6 py-16 sm:grid-cols-2 md:py-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              delay={(index % 2) * 90}
            />
          ))}
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container-x py-16 md:py-20">
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, index) => (
              <figure
                key={t.name}
                data-reveal
                style={{ transitionDelay: `${index * 90}ms` }}
                className="card flex flex-col p-6"
              >
                <blockquote className="flex-1 text-sm leading-relaxed text-fg-muted">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-mono text-xs text-accent">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">
                      {t.name}
                    </span>
                    <span className="block text-xs text-fg-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
