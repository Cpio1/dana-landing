"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import type { ImageAsset } from "@/types/content";

/** Бастапқыда көрсетілетін фотолар саны. */
const INITIAL_COUNT = 6;

function GalleryItem({
  image,
  onOpen,
}: {
  image: ImageAsset;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Үлкейту: ${image.alt}`}
      className="block w-full text-left"
    >
      <PlaceholderPhoto
        image={image}
        rounded="rounded-2xl"
        className="aspect-[4/3] w-full transition-transform duration-300 ease-out hover:scale-[1.03]"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
    </button>
  );
}

export function Gallery() {
  const { gallery } = siteContent;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const total = gallery.images.length;
  const visibleImages = gallery.images.slice(0, INITIAL_COUNT);
  const extraImages = gallery.images.slice(INITIAL_COUNT);

  const toggleExpanded = () => {
    if (expanded) {
      // Жасырғанда бет төменде қалып қоймауы үшін галереяның басына ораламыз.
      sectionRef.current?.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }
    setExpanded((value) => !value);
  };

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

  const active = activeIndex !== null ? gallery.images[activeIndex] : null;

  return (
    <section ref={sectionRef} id="gallery" className="scroll-mt-20 bg-bg py-16 sm:py-20">
      <Container>
        <SectionHeading heading={gallery.heading} subheading={gallery.subheading} />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleImages.map((image, index) => (
            <Reveal key={image.src} delay={(index % 3) * 0.05}>
              <GalleryItem image={image} onOpen={() => setActiveIndex(index)} />
            </Reveal>
          ))}

          <AnimatePresence initial={false}>
            {expanded &&
              extraImages.map((image, i) => (
                <motion.div
                  key={image.src}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.45, delay: Math.min(i, 9) * 0.04, ease: "easeOut" }}
                >
                  <GalleryItem
                    image={image}
                    onOpen={() => setActiveIndex(INITIAL_COUNT + i)}
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {extraImages.length > 0 && (
          <div className="mt-10 flex justify-center">
            <Button
              type="button"
              onClick={toggleExpanded}
              aria-expanded={expanded}
              className="shadow-sm"
            >
              {expanded ? "Жасыру" : "Көбірек көру"}
              <Icon
                name="chevron-down"
                className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              />
            </Button>
          </div>
        )}
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
