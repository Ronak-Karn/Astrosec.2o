import type { Metadata } from "next";
import { projects, testimonials } from "@/lib/data";
import { SectionHeading, CTABand } from "@/components/UI";
import ProjectCard from "@/components/ProjectCard";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects from AstroSec — web platforms, mobile apps, enterprise CRMs, cloud security, and VAPT audits.",
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <section className="border-b border-hairline">
        <div data-blur className="container-x pt-32 pb-16 md:pt-40 md:pb-20">
          <SectionHeading
            title="Real products. Real infrastructure. Shipped."
            description="A sample of what we've built and secured for clients across real estate, dating, education, and fintech."
          />
        </div>
      </section>

      <section className="border-b border-hairline">
        <div
          data-blur
          className="container-x grid gap-x-8 gap-y-12 py-16 sm:grid-cols-2 md:py-20"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="border-b border-hairline">
        <div data-blur className="container-x py-16 md:py-20">
          <SectionHeading title="What clients say" />

          <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="border-t border-hairline pt-6">
                <blockquote className="text-[1rem] leading-relaxed text-fg-muted">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5">
                  <span className="block text-[0.95rem] font-semibold text-white">
                    {t.name}
                  </span>
                  <span className="block text-[0.9rem] text-fg-muted">
                    {t.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </PageTransition>
  );
}
