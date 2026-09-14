"use client";

import { useState } from "react";
import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const { brand, nav, header } = siteContent;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a href="#" className="flex min-w-0 items-center gap-2">
          <span className="h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
          <span className="truncate font-heading text-sm font-semibold text-ink sm:text-lg lg:text-xl">
            {brand.name}
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Негізгі навигация"
        >
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={header.ctaHref} variant="primary" className="text-sm">
            {header.ctaLabel}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Мәзірді жабу" : "Мәзірді ашу"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-3.5 w-4" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 bg-ink transition-transform duration-200 ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-4 bg-ink transition-transform duration-200 ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      <nav
        id="mobile-nav"
        aria-label="Мобильді навигация"
        className={`overflow-hidden border-t border-border bg-bg transition-[grid-template-rows] duration-300 ease-out lg:hidden grid ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-base font-medium text-ink transition-colors duration-200 hover:bg-bg-alt"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink
              href={header.ctaHref}
              variant="primary"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              {header.ctaLabel}
            </ButtonLink>
          </Container>
        </div>
      </nav>
    </header>
  );
}
