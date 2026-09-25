"use client";

import { useState } from "react";
import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

// Мәзір пункттерінің түстері (ретімен): кораллдық, қызғылт сары, қыша, жасыл, көк, күлгін.
// Мәтін түстері ақ фонда оқылатындай қоюлау алынған; hover — сол түстің жеңіл фоны.
const NAV_COLORS = [
  "text-[#c8403c] hover:bg-coral/10",
  "text-[#b8570c] hover:bg-orange/10",
  "text-[#8a6700] hover:bg-yellow/15",
  "text-[#1c7f5c] hover:bg-green/10",
  "text-[#1f72ad] hover:bg-blue/10",
  "text-[#7556d0] hover:bg-purple/10",
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { brand, nav, header } = siteContent;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a href="#" className="flex shrink-0 items-center gap-2">
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-primary ring-4 ring-primary/15"
            aria-hidden="true"
          />
          <span className="whitespace-nowrap font-heading text-sm font-semibold text-ink sm:text-lg lg:text-xl">
            {brand.shortName}
          </span>
        </a>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Негізгі навигация"
        >
          {nav.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-medium transition-colors duration-200 ${NAV_COLORS[index % NAV_COLORS.length]}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <ButtonLink
            href={header.ctaHref}
            variant="primary"
            size="sm"
            className="bg-gradient-to-r from-orange-400 via-rose-400 to-pink-400 hover:from-orange-500 hover:via-rose-500 hover:to-pink-500"
          >
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
