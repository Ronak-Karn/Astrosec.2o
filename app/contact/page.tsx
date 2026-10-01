import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/data";
import { SectionHeading } from "@/components/UI";
import { InstagramIcon, LinkedInIcon, MailIcon, PhoneIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with AstroSec — tell us what you're building or securing, and we'll reply within one business day.",
};

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: MailIcon,
  },
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phoneHref}`,
    icon: PhoneIcon,
  },
  {
    label: "LinkedIn",
    value: "Dhruv Karn",
    href: site.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "Instagram",
    value: "@astrosec.in",
    href: site.instagram,
    icon: InstagramIcon,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-hairline pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about your project."
            description="Fill in the form or reach out directly — we reply within one business day. NDAs available before any details are shared."
          />
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container-x grid gap-10 py-16 md:grid-cols-[1fr_340px] md:py-20">
          <ContactForm />

          <aside className="flex flex-col gap-4">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    channel.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="card group flex items-center gap-4 p-5 transition-colors duration-200 hover:border-accent/40"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-hairline bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[0.68rem] uppercase tracking-[0.14em] text-fg-muted">
                      {channel.label}
                    </span>
                    <span className="block text-sm text-white">
                      {channel.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </aside>
        </div>
      </section>
    </>
  );
}
