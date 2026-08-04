"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { BeeDoodle, PencilDoodle, RainbowDoodle, StarDoodle } from "@/components/ui/Doodles";

const CHIP_ACCENTS = [
  { shadow: "var(--color-coral)", rotate: "-rotate-2" },
  { shadow: "var(--color-blue)", rotate: "rotate-1" },
  { shadow: "var(--color-green)", rotate: "-rotate-1" },
  { shadow: "var(--color-purple)", rotate: "rotate-2" },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { hero } = siteContent;

  return (
    <section className="relative overflow-hidden bg-cream pt-6">
      <Container className="grid grid-cols-1 items-center gap-12 pb-24 pt-10 lg:grid-cols-2 lg:gap-10 lg:pb-32 lg:pt-16">
        <div className="flex flex-col items-start gap-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="-rotate-2 rounded-full border-2 border-ink bg-yellow px-4 py-1.5 font-hand text-xl font-bold text-ink"
          >
            {hero.eyebrow} ✨
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl font-heading text-4xl leading-[1.15] text-ink sm:text-5xl lg:text-6xl"
          >
            {hero.title}{" "}
            <span className="relative inline-block text-coral">
              {hero.highlight}
              <svg
                aria-hidden="true"
                viewBox="0 0 200 16"
                className="absolute -bottom-2 left-0 h-3 w-full text-coral"
                fill="none"
              >
                <path
                  d="M2 10c30-9 60 3 90-2s60-8 106-3"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md text-lg text-ink-soft"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="#booking" variant="primary">
              {hero.primaryCta}
            </ButtonLink>
            <ButtonLink href="#day" variant="dark">
              {hero.secondaryCta}
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            role="list"
            aria-label="Ключевые показатели сада"
            className="mt-4 flex flex-wrap gap-3"
          >
            {hero.stats.map((stat, index) => {
              const accent = CHIP_ACCENTS[index % CHIP_ACCENTS.length];
              return (
                <div
                  key={stat.label}
                  role="listitem"
                  className={`${accent.rotate} rounded-2xl border-2 border-ink bg-paper px-4 py-2`}
                  style={{ boxShadow: `3px 3px 0 0 ${accent.shadow}` }}
                >
                  <p className="font-heading text-lg text-ink">{stat.value}</p>
                  <p className="text-[11px] font-bold uppercase tracking-wide text-ink-soft">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
          <PlaceholderPhoto
            image={hero.image}
            rounded="blob-1"
            className="aspect-[4/5] w-full"
          />

          {!shouldReduceMotion && (
            <>
              <div className="animate-float absolute -left-6 top-4 text-blue sm:-left-10">
                <BeeDoodle className="h-12 w-12" />
              </div>
              <div className="absolute -right-2 top-0 text-green sm:right-2">
                <RainbowDoodle className="h-14 w-20" />
              </div>
              <div className="animate-wiggle absolute -right-6 bottom-16 text-purple sm:-right-10">
                <PencilDoodle className="h-14 w-14" />
              </div>
              <div className="animate-float absolute -left-4 bottom-8 text-yellow">
                <StarDoodle className="h-8 w-8" />
              </div>
            </>
          )}
        </div>
      </Container>

      <WaveDivider color="var(--color-paper)" />
    </section>
  );
}
