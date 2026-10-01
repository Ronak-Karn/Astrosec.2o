import Link from "next/link";
import { site, nav, serviceGroups } from "@/lib/data";
import { InstagramIcon, LinkedInIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link
            href="/"
            aria-label="AstroSec home"
            className="inline-flex items-center gap-3"
          >
            <span className="logo-badge h-14 w-14">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-mark.jpg" alt="" />
            </span>
            <span className="text-xl font-semibold tracking-[0.18em] text-white">
              ASTROSEC
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">
            A security-first studio building AI systems, hardened
            infrastructure, and full-stack products.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-btn"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-btn"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="footer-heading">Navigate</h3>
          <ul className="mt-4 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="footer-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">Services</h3>
          <ul className="mt-4 space-y-3">
            {serviceGroups.map((group) => (
              <li key={group.id}>
                <Link
                  href={`/services#${group.id}`}
                  className="footer-link"
                >
                  {group.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">Get in touch</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={`mailto:${site.email}`} className="footer-link">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneHref}`} className="footer-link">
                {site.phone}
              </a>
            </li>
            <li>
              <Link href="/contact" className="footer-link">
                Start a project →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-sm text-fg-muted sm:flex-row">
          <p>
            © {site.year} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors duration-150 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors duration-150 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
