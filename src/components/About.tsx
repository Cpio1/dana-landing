import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { Decor } from "@/components/ui/Decor";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  const { about } = siteContent;

  return (
    <section id="about" className="scroll-mt-20 relative overflow-hidden bg-bg py-16 sm:py-20">
      <Decor name="flower" className="absolute right-5 top-6 h-7 w-7 text-coral opacity-50 sm:right-10 sm:top-8" />
      <Decor name="star" className="absolute right-14 top-12 h-2.5 w-2.5 text-yellow/70 sm:right-20 sm:top-14" />
      <Decor name="flower" className="absolute hidden xl:block left-8 bottom-16 h-9 w-9 text-purple opacity-45" />
      <Decor name="dot" className="absolute hidden xl:block left-16 bottom-32 h-2 w-2 text-green/40" />
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
