"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const AVATAR_ACCENTS = ["bg-coral", "bg-blue", "bg-green", "bg-purple"];

export function Testimonials() {
  const { testimonials } = siteContent;
  const total = testimonials.items.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused || shouldReduceMotion) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [paused, shouldReduceMotion, next]);

  const current = testimonials.items[index];
  const avatarAccent = AVATAR_ACCENTS[index % AVATAR_ACCENTS.length];

  return (
    <section id="testimonials" className="scroll-mt-20 bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Отзывы"
          heading={testimonials.heading}
          subheading={testimonials.subheading}
          align="center"
        />

        <Reveal delay={0.1}>
          <div
            className="relative mx-auto mt-14 max-w-3xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div
              className="relative min-h-[240px] overflow-hidden rounded-[2rem] border-2 border-ink bg-paper p-8 shadow-[6px_6px_0_0_var(--color-orange)] sm:p-12"
              aria-live="polite"
            >
              <span
                aria-hidden="true"
                className="absolute right-6 top-4 font-heading text-6xl text-yellow/60 sm:text-7xl"
              >
                “
              </span>
              <AnimatePresence mode="wait">
                <motion.figure
                  key={current.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <blockquote className="relative text-lg leading-relaxed text-ink sm:text-xl">
                    {current.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink font-heading text-lg text-paper ${avatarAccent}`}
                    >
                      {current.name.charAt(0)}
                    </span>
                    <span className="text-sm text-ink-soft">
                      <span className="block font-bold text-ink">{current.name}</span>
                      {current.meta}
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={prev}
                aria-label="Предыдущий отзыв"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-paper transition-colors duration-200 hover:bg-yellow"
              >
                ←
              </button>
              <div
                className="flex gap-2"
                role="tablist"
                aria-label="Выбор отзыва"
              >
                {testimonials.items.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Отзыв ${i + 1} из ${total}`}
                    onClick={() => setIndex(i)}
                    className={`h-3 w-3 rounded-full border-2 border-ink transition-colors duration-200 ${
                      i === index ? "bg-orange" : "bg-paper"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                aria-label="Следующий отзыв"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-paper transition-colors duration-200 hover:bg-yellow"
              >
                →
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
