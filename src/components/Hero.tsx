import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { Reveal } from "@/components/ui/Reveal";
import { Decor } from "@/components/ui/Decor";
import { WaveDivider } from "@/components/ui/WaveDivider";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative overflow-hidden bg-pastel-cream">
      <Container className="grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <Reveal>
          <div className="flex flex-col items-start gap-5">
            <h1 className="font-heading text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              {hero.title}
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-ink-soft">
              {hero.subtitle}
            </p>
            <ButtonLink href={hero.ctaHref} variant="primary">
              {hero.ctaLabel}
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-pastel-blue/70 blur-2xl sm:-inset-10"
            />
            <PlaceholderPhoto
              image={hero.image}
              rounded="rounded-3xl"
              className="aspect-[4/3] w-full lg:aspect-[4/5]"
            />
            <Decor
              name="cloud"
              className="absolute -left-5 -top-5 h-9 w-9 text-blue/40 sm:-left-8 sm:-top-6 sm:h-11 sm:w-11"
            />
            <Decor
              name="star"
              className="absolute -right-3 top-1/3 h-4 w-4 text-yellow/70"
            />
            <Decor
              name="star"
              className="absolute -bottom-4 left-1/4 h-3 w-3 text-primary/50"
            />
          </div>
        </Reveal>
      </Container>

      <WaveDivider color="var(--color-bg)" />
    </section>
  );
}
