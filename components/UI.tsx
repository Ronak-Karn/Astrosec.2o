import Link from "next/link";

export function SectionHeading({
  title,
  description,
  align = "left",
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      <h2 className="display text-3xl text-white md:text-[2.6rem]">{title}</h2>
      {description && (
        <p className="lede mt-5">{description}</p>
      )}
    </div>
  );
}

export function CTABand() {
  return (
    <section className="bg-paper text-ink">
      <div className="container-x flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-end md:py-24">
        <div>
          <h2 className="display max-w-xl text-3xl text-ink md:text-[2.6rem]">
            Have something to build — or to secure?
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-paper-muted">
            Tell us what you&apos;re working on. We reply within one business
            day.
          </p>
        </div>
        <Link
          href="/contact"
          className="btn-invert inline-flex shrink-0 items-center gap-2 rounded-lg px-6 py-3.5 text-base font-medium"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
