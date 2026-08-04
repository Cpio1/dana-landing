import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";

const ACCENTS = [
  { badge: "bg-coral text-paper", dot: "bg-coral", blob: "blob-1" },
  { badge: "bg-blue text-paper", dot: "bg-blue", blob: "blob-2" },
  { badge: "bg-green text-paper", dot: "bg-green", blob: "blob-3" },
  { badge: "bg-yellow text-ink", dot: "bg-yellow", blob: "blob-4" },
  { badge: "bg-purple text-paper", dot: "bg-purple", blob: "blob-1" },
  { badge: "bg-orange text-ink", dot: "bg-orange", blob: "blob-2" },
  { badge: "bg-coral text-paper", dot: "bg-coral", blob: "blob-3" },
];

export function DayInLife() {
  const { dayInLife } = siteContent;

  return (
    <section id="day" className="scroll-mt-20 bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Бір күн"
          heading={dayInLife.heading}
          subheading={dayInLife.subheading}
          align="center"
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-[repeating-linear-gradient(to_bottom,var(--color-ink)_0,var(--color-ink)_10px,transparent_10px,transparent_20px)] opacity-25 lg:block"
          />

          <ol className="flex list-none flex-col gap-14 lg:gap-20">
            {dayInLife.items.map((item, index) => {
              const reversed = index % 2 === 1;
              const accent = ACCENTS[index % ACCENTS.length];
              return (
                <li
                  key={item.time}
                  className={`relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-14 ${
                    reversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <Reveal className="flex-1" y={20}>
                    <PlaceholderPhoto
                      image={item.image}
                      rounded={accent.blob}
                      className="aspect-[4/3] w-full"
                    />
                  </Reveal>

                  <Reveal className="flex-1" delay={0.1} y={20}>
                    <div
                      className={`flex flex-col gap-3 ${
                        reversed ? "lg:items-end lg:text-right" : ""
                      }`}
                    >
                      <span
                        className={`inline-flex w-fit items-center rounded-full border-2 border-ink px-4 py-1 text-sm font-bold ${accent.badge}`}
                      >
                        {item.time}
                      </span>
                      <h3 className="font-heading text-2xl text-ink sm:text-3xl">
                        {item.title}
                      </h3>
                      <p className="max-w-md leading-relaxed text-ink-soft">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>

                  <span
                    aria-hidden="true"
                    className={`absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink ${accent.dot} lg:block`}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
