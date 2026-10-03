"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/data";
import { CloseIcon, MenuIcon } from "@/components/Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-ink/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="AstroSec home"
          className="group flex shrink-0 items-center gap-3"
        >
          <span className="logo-badge h-12 w-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-mark.jpg" alt="" />
          </span>
          <span className="text-lg font-semibold tracking-[0.18em] text-white">
            ASTROSEC
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base font-medium transition-colors duration-150 ${
                isActive(item.href)
                  ? "text-white"
                  : "text-fg-muted hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn-primary hidden md:inline-flex">
            Contact us
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-hairline text-fg transition-colors duration-150 hover:border-white/25 hover:text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-hairline bg-ink px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {[...nav, { label: "Contact", href: "/contact" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-base transition-colors duration-150 ${
                    isActive(item.href)
                      ? "bg-white/5 text-white"
                      : "text-fg-muted hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
