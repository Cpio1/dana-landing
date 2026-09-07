import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  const { about } = siteContent;

  return (
    <section id="about" className="scroll-mt-20 bg-bg py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="font-heading text-2xl leading-tight text-ink sm:text-3xl">
            {about.heading}
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12">
          <Reveal delay={0.05}>
            <div className="max-w-md">
              <h3 className="font-heading text-lg text-ink">{about.goalTitle}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{about.goalText}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-md">
              <h3 className="font-heading text-lg text-ink">{about.principleTitle}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                {about.principleText}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
