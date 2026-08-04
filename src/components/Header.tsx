"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const { brand, nav } = siteContent;

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream/95 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between py-3 sm:h-20">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-yellow text-lg">
            🌻
          </span>
          <span className="font-heading text-xl font-bold text-ink sm:text-2xl">
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
              className="rounded-full px-4 py-2 text-sm font-bold text-ink-soft transition-colors duration-200 hover:bg-yellow/25 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="#booking" variant="primary" className="text-sm">
            Жазылу
          </ButtonLink>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-paper lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Мәзірді жабу" : "Мәзірді ашу"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Мобильді навигация"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t-2 border-ink bg-cream lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-3 py-3 text-base font-bold text-ink transition-colors duration-200 hover:bg-yellow/25"
                >
                  {link.label}
                </a>
              ))}
              <ButtonLink
                href="#booking"
                variant="primary"
                className="mt-2 w-full justify-center"
                onClick={() => setOpen(false)}
              >
                Экскурсияға жазылу
              </ButtonLink>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
