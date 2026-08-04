"use client";

import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { useDragScroll } from "@/components/ui/useDragScroll";

const SIZE_PATTERN = [
  "aspect-[3/4] w-[240px] sm:w-[280px]",
  "aspect-[4/3] w-[300px] sm:w-[360px]",
  "aspect-[1/1] w-[240px] sm:w-[280px]",
];

const BLOBS = ["blob-1", "blob-2", "blob-3", "blob-4"];

export function Gallery() {
  const { gallery } = siteContent;
  const { ref, onPointerDown, onPointerMove, onPointerUp, scrollByAmount } =
    useDragScroll<HTMLUListElement>();

  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Галерея"
            heading={gallery.heading}
            subheading={gallery.subheading}
          />
          <div className="hidden gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollByAmount(-360)}
              aria-label="Прокрутить галерею влево"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-paper transition-colors duration-200 hover:bg-yellow"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount(360)}
              aria-label="Прокрутить галерею вправо"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-paper transition-colors duration-200 hover:bg-yellow"
            >
              →
            </button>
          </div>
        </div>
      </Container>

      <Reveal delay={0.1}>
        <ul
          ref={ref}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          className="no-scrollbar mt-10 flex list-none cursor-grab gap-6 overflow-x-auto px-5 pb-4 snap-x snap-mandatory active:cursor-grabbing sm:px-8 lg:px-10"
        >
          {gallery.images.map((image, index) => (
            <li
              key={image.caption + index}
              className={`shrink-0 snap-start ${SIZE_PATTERN[index % SIZE_PATTERN.length]}`}
            >
              <PlaceholderPhoto
                image={image}
                rounded={BLOBS[index % BLOBS.length]}
                className="h-full w-full transition-transform duration-500 ease-out hover:scale-[1.03] hover:rotate-1"
              />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
