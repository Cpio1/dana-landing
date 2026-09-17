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

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          <Reveal delay={0.05}>
            <div className="h-full rounded-3xl bg-pastel-mint p-6 sm:p-8">
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green" />
                <h3 className="font-heading text-lg text-ink">{about.goalTitle}</h3>
              </div>
              <p className="mt-4 leading-relaxed text-ink-soft">{about.goalText}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-pastel-yellow p-6 sm:p-8">
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-orange" />
                <h3 className="font-heading text-lg text-ink">{about.principleTitle}</h3>
              </div>
              <p className="mt-4 leading-relaxed text-ink-soft">
                {about.principleText}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
