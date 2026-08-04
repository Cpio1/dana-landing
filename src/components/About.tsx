import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { ButtonLink } from "@/components/ui/Button";
import { StarDoodle } from "@/components/ui/Doodles";

const HIGHLIGHT_ACCENTS = ["bg-yellow", "bg-coral", "bg-blue", "bg-green"];

export function About() {
  const { about, contacts } = siteContent;

  return (
    <section id="about" className="scroll-mt-20 bg-cream py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative mx-auto max-w-md">
            <PlaceholderPhoto
              image={about.image}
              rounded="blob-3"
              className="aspect-[4/5] w-full"
            />
            <div className="animate-float absolute -right-5 -top-5 text-yellow">
              <StarDoodle className="h-10 w-10" />
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-5">
          <Reveal>
            <span className="-rotate-2 inline-block w-fit font-hand text-2xl font-bold text-coral">
              {about.subheading}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-heading text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              {about.heading}
            </h2>
          </Reveal>

          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={0.1 + index * 0.06}>
              <p className="leading-relaxed text-ink-soft">{paragraph}</p>
            </Reveal>
          ))}

          <Reveal delay={0.25}>
            <ul className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {about.highlights.map((highlight, index) => (
                <li
                  key={highlight}
                  className="flex items-center gap-3 rounded-full border-2 border-ink bg-paper px-4 py-2.5 text-sm font-bold text-ink shadow-[3px_3px_0_0_var(--color-ink)]"
                >
                  <span
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${HIGHLIGHT_ACCENTS[index % HIGHLIGHT_ACCENTS.length]}`}
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-2 flex flex-wrap items-center gap-4">
              <ButtonLink href="#booking" variant="primary">
                Экскурсияға жазылу
              </ButtonLink>
              <a
                href={`tel:${contacts.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-3 font-bold text-ink transition-colors duration-200 hover:text-coral"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-green text-paper">
                  ☎
                </span>
                {contacts.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
