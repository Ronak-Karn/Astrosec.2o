import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/data";
import { SectionHeading } from "@/components/UI";
import PageTransition from "@/components/PageTransition";
import {
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/Icons";

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
    <PageTransition>
      <section className="border-b border-hairline">
        <div data-blur className="container-x pt-32 pb-16 md:pt-40 md:pb-20">
          <SectionHeading
            title="Let's talk about your project."
            description="Fill in the form or reach out directly — we reply within one business day. NDAs available before any details are shared."
          />
        </div>
      </section>

      <section className="border-b border-hairline">
        <div
          data-blur
          className="container-x grid gap-12 py-16 md:grid-cols-[1fr_320px] md:py-20"
        >
          <ContactForm />

          <aside className="border-t border-hairline md:border-t-0">
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
                  className="flex items-center gap-4 border-b border-hairline py-5 transition-colors duration-150 hover:bg-white/[0.025] md:px-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center text-fg-muted">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[0.85rem] text-fg-muted">
                      {channel.label}
                    </span>
                    <span className="block text-[0.98rem] text-white">
                      {channel.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </aside>
        </div>
      </section>
    </PageTransition>
  );
}
