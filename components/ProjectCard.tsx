import type { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  const inner = (
    <>
      <div className="aspect-[16/10] overflow-hidden rounded-xl bg-panel">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover opacity-95 transition-opacity duration-200 group-hover:opacity-100"
        />
      </div>

      <div className="pt-5">
        <p className="text-[0.85rem] text-fg-muted">{project.category}</p>
        <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-fg-muted">
          {project.description}
        </p>
        <p className="mt-3 text-[0.85rem] text-fg-muted">
          {project.tags.join(", ")}
        </p>
      </div>
    </>
  );

  const cls = "group block";

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {inner}
      </a>
    );
  }

  return (
    <article className={cls} style={{ transitionDelay: `${delay}ms` }}>
      {inner}
    </article>
  );
}
