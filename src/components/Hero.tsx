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
      <Decor name="rainbow" className="absolute hidden xl:block left-6 top-10 h-12 w-12 opacity-50" />
      <Decor name="sun" className="absolute right-4 top-4 h-7 w-7 text-yellow opacity-70 sm:right-8 sm:top-6 sm:h-9 sm:w-9" />
      <Decor name="cloud" className="absolute hidden xl:block decor-float left-10 bottom-24 h-10 w-10 text-blue/35" />
      <Decor name="balloon" className="absolute hidden xl:block decor-float right-8 bottom-28 h-10 w-10 text-coral opacity-50" />
      <Decor name="star" className="absolute hidden xl:block right-16 top-24 h-3 w-3 text-purple/50" />
      <Container className="grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <Reveal>
          <div className="flex flex-col items-start gap-5">
            <h1 className="font-heading text-2xl leading-tight text-ink sm:text-3xl lg:text-4xl">
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
              className="w-full"
              fit="contain"
              width={1179}
              height={717}
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
