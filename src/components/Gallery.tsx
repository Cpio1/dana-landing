"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { Decor } from "@/components/ui/Decor";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import type { ImageAsset } from "@/types/content";

/** Бастапқыда көрсетілетін фотолар саны. */
const INITIAL_COUNT = 6;
const GALLERY_SIZES = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

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
        sizes={GALLERY_SIZES}
        quality={70}
        loading="lazy"
      />
    </button>
  );
}

export function Gallery() {
  const { gallery } = siteContent;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const total = gallery.images.length;
  const visibleImages = gallery.images.slice(0, INITIAL_COUNT);
  const extraImages = gallery.images.slice(INITIAL_COUNT);

  const toggleExpanded = () => {
    if (expanded) {
      // Жасырғанда бет төменде қалып қоймауы үшін галереяның басына ораламыз.
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      sectionRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
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
    <section ref={sectionRef} id="gallery" className="scroll-mt-20 relative overflow-hidden bg-bg py-16 sm:py-20">
      <Decor name="camera" className="absolute right-5 top-6 h-7 w-7 text-blue opacity-50 sm:right-12 sm:top-8 sm:h-9 sm:w-9" />
      <Decor name="heart" className="absolute right-16 top-14 h-3.5 w-3.5 text-coral/50 sm:right-28 sm:top-16" />
      <Decor name="heart" className="absolute hidden xl:block left-8 top-1/3 h-6 w-6 text-coral/40" />
      <Decor name="star" className="absolute hidden xl:block left-14 top-1/2 h-3 w-3 text-yellow/70" />
      <Decor name="heart" className="absolute hidden xl:block right-10 bottom-24 h-5 w-5 text-purple/40" />
      <Container>
        <SectionHeading heading={gallery.heading} subheading={gallery.subheading} />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleImages.map((image, index) => (
            <GalleryItem
              key={image.src}
              image={image}
              onOpen={() => setActiveIndex(index)}
            />
          ))}

          {/* Қалған фотолар батырма басылғанға дейін мүлде рендерленбейді және жүктелмейді.
              Пайда болуы — тек opacity/transform CSS-анимациясы (JS-сіз). */}
          {expanded &&
            extraImages.map((image, i) => (
              <div
                key={image.src}
                className="gallery-fade-in"
                style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}
              >
                <GalleryItem
                  image={image}
                  onOpen={() => setActiveIndex(INITIAL_COUNT + i)}
                />
              </div>
            ))}
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
