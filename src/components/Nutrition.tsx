"use client";

import { useCallback, useEffect, useState } from "react";
import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { Icon } from "@/components/ui/Icon";
import { Decor } from "@/components/ui/Decor";

export function Nutrition() {
  const { nutrition } = siteContent;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const total = nutrition.images.length;

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % total)),
    [total],
  );
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + total) % total)),
    [total],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, close, next, prev]);

  const active = activeIndex !== null ? nutrition.images[activeIndex] : null;

  return (
    <section id="nutrition" className="scroll-mt-20 relative overflow-hidden bg-pastel-yellow py-16 sm:py-20">
      <Decor name="apple" className="absolute left-5 top-5 h-7 w-7 text-coral opacity-55 sm:left-10 sm:top-8 sm:h-8 sm:w-8" />
      <Decor name="carrot" className="absolute hidden xl:block left-8 bottom-16 h-10 w-10 text-orange opacity-55" />
      <Decor name="apple" className="absolute hidden xl:block right-8 bottom-20 h-8 w-8 text-green opacity-50" />
      <Decor name="dot" className="absolute hidden xl:block right-14 top-16 h-2 w-2 text-orange/45" />
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <Decor
              name="pencil-line"
              className="absolute -left-1 -top-6 h-4 w-16 text-primary/35"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              {nutrition.heading}
            </span>
            <h2 className="mt-2 font-heading text-2xl leading-tight text-ink sm:text-3xl">
              {nutrition.title}
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {nutrition.meals.map((meal) => (
                <li key={meal} className="flex items-center gap-3 text-ink">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-medium">{meal}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2">
              {nutrition.images.map((image, index) => (
                <button
                  key={image.src ?? image.alt + index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Үлкейту: ${image.alt}`}
                  className="block w-full text-left"
                >
                  <PlaceholderPhoto
                    image={image}
                    rounded="rounded-2xl"
                    className="aspect-square w-full transition-transform duration-300 ease-out hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                </button>
              ))}
            </div>
            <Decor
              name="sun"
              className="absolute -right-4 -top-4 h-9 w-9 text-orange/45"
            />
          </div>
        </Reveal>
      </Container>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Жабу"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-bg/90 text-ink sm:right-8 sm:top-8"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Алдыңғы фотосурет"
            className="absolute left-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-bg/90 text-ink sm:left-6 sm:flex"
          >
            <Icon name="chevron-left" className="h-5 w-5" />
          </button>

          <div
            className="relative aspect-[4/3] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <PlaceholderPhoto
              image={active}
              rounded="rounded-2xl"
              className="h-full w-full"
              sizes="90vw"
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Келесі фотосурет"
            className="absolute right-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-bg/90 text-ink sm:right-6 sm:flex"
          >
            <Icon name="chevron-right" className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
