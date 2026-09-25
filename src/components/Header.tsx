"use client";

import { useState } from "react";
import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

// Мәзір пункттері — әрқайсысы өз түсіндегі пастель капсула (ретімен): кораллдық,
// қызғылт сары, қыша, жасыл, көк, күлгін. Мәтін түсі фонда оқылатындай қоюлау алынған.
const NAV_COLORS = [
  "text-[#bb3a36] bg-coral/12 border-coral/25 hover:bg-coral/20 hover:shadow-coral/25",
  "text-[#a64d08] bg-orange/14 border-orange/30 hover:bg-orange/22 hover:shadow-orange/25",
  "text-[#7d5d00] bg-yellow/20 border-yellow/40 hover:bg-yellow/30 hover:shadow-yellow/30",
  "text-[#18714f] bg-green/12 border-green/25 hover:bg-green/20 hover:shadow-green/25",
  "text-[#1a669c] bg-blue/12 border-blue/25 hover:bg-blue/20 hover:shadow-blue/25",
  "text-[#6a4cc4] bg-purple/12 border-purple/25 hover:bg-purple/20 hover:shadow-purple/25",
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
          className="hidden items-center gap-1 lg:flex xl:gap-1.5"
          aria-label="Негізгі навигация"
        >
          {nav.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`shrink-0 whitespace-nowrap rounded-full border px-3 py-1.5 text-[13px] font-medium transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md ${NAV_COLORS[index % NAV_COLORS.length]}`}
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
            className="border border-white/40 bg-gradient-to-r from-orange-400 via-rose-400 to-pink-400 shadow-sm shadow-rose-300/40 transition! duration-200 ease-out hover:-translate-y-0.5 hover:from-orange-500 hover:via-rose-500 hover:to-pink-500 hover:shadow-md hover:shadow-rose-300/50"
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
