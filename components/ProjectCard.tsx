import type { Project } from "@/lib/data";
import { ArrowUpRightIcon } from "@/components/Icons";

export default function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden bg-panel">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <p className="eyebrow">{project.category}</p>
        <h3 className="mt-3 flex items-center gap-2 text-lg font-semibold text-white">
          {project.title}
          {project.href && (
            <ArrowUpRightIcon className="h-4 w-4 text-fg-muted transition-colors duration-150 group-hover:text-accent" />
          )}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const cls = "card group block overflow-hidden transition-colors duration-200 hover:border-accent/40";

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
      >
        {inner}
      </a>
    );
  }

  return <article className={cls}>{inner}</article>;
}
