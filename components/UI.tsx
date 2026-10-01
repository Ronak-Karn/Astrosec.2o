import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-fg-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export function CTABand() {
  return (
    <section className="border-t border-hairline">
      <div className="container-x flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-20">
        <div>
          <p className="eyebrow">Start a project</p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Have something to build — or to secure?
          </h2>
          <p className="mt-3 max-w-xl text-base text-fg-muted">
            Tell us what you&apos;re working on. We reply within one business
            day.
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <Link href="/contact" className="btn-primary">
            Get in touch <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
