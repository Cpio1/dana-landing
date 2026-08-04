"use client";

import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { useDragScroll } from "@/components/ui/useDragScroll";

const BLOBS = ["blob-1", "blob-2", "blob-3", "blob-4"];
const ROTATIONS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-0"];

export function Teachers() {
  const { teachers } = siteContent;
  const { ref, onPointerDown, onPointerMove, onPointerUp, scrollByAmount } =
    useDragScroll<HTMLUListElement>();

  return (
    <section id="teachers" className="scroll-mt-20 bg-paper py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Команда"
            heading={teachers.heading}
            subheading={teachers.subheading}
          />
          <div className="hidden gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollByAmount(-320)}
              aria-label="Прокрутить список воспитателей влево"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-paper transition-colors duration-200 hover:bg-yellow"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount(320)}
              aria-label="Прокрутить список воспитателей вправо"
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
          className="no-scrollbar mt-10 flex list-none cursor-grab gap-6 overflow-x-auto px-5 pb-6 snap-x snap-mandatory active:cursor-grabbing sm:px-8 lg:px-10"
        >
          {teachers.items.map((teacher, index) => (
            <li
              key={teacher.name}
              className={`w-[230px] shrink-0 snap-start ${ROTATIONS[index % ROTATIONS.length]}`}
            >
              <div className="group rounded-[1.75rem] border-2 border-ink bg-cream p-3 transition-transform duration-300 ease-out hover:-translate-y-1 hover:rotate-0">
                <PlaceholderPhoto
                  image={teacher.image}
                  rounded={BLOBS[index % BLOBS.length]}
                  className="aspect-[4/5] w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="px-1 pt-4 pb-1">
                  <h3 className="font-heading text-lg text-ink">
                    {teacher.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-coral">
                    {teacher.role}
                  </p>
                  <p className="mt-3 text-sm italic leading-relaxed text-ink-soft">
                    {teacher.bio}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
