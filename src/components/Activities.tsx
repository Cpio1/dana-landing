import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { Decor } from "@/components/ui/Decor";
import { WaveDivider } from "@/components/ui/WaveDivider";

const ACCENT_DOTS = ["bg-coral", "bg-blue", "bg-purple", "bg-green", "bg-orange", "bg-[#c99500]"];

export function Activities() {
  const { activities } = siteContent;

  return (
    <section id="activities" className="scroll-mt-20 relative overflow-hidden bg-pastel-lilac py-16 sm:py-20">
      <Decor name="notes" className="absolute right-5 top-6 h-7 w-7 text-purple opacity-55 sm:right-12 sm:top-8 sm:h-8 sm:w-8" />
      <Decor name="pencil" className="absolute hidden xl:block left-6 top-1/3 h-11 w-11 text-orange opacity-60" />
      <Decor name="book" className="absolute hidden xl:block right-6 top-1/2 h-10 w-10 text-blue opacity-55" />
      <Decor name="block" className="absolute hidden xl:block left-10 bottom-24 h-8 w-8 text-green opacity-50" />
      <Decor name="star" className="absolute left-8 top-6 h-3 w-3 text-purple/45 sm:top-14" />
      <Decor name="dot" className="absolute right-12 top-24 h-1.5 w-1.5 text-primary/30" />
      <Decor name="star" className="absolute bottom-10 right-16 h-2.5 w-2.5 text-blue/40" />

      <Container>
        <SectionHeading heading={activities.heading} />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <div className="overflow-hidden rounded-2xl bg-bg shadow-sm shadow-ink/5 transition-transform duration-300 ease-out hover:scale-[1.03]">
                <PlaceholderPhoto
                  image={item.image}
                  rounded="rounded-t-2xl"
                  className="aspect-[4/3] w-full"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="flex flex-col gap-1 px-4 py-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${ACCENT_DOTS[index % ACCENT_DOTS.length]}`}
                      aria-hidden="true"
                    />
                    <h3 className="font-heading text-base text-ink">{item.title}</h3>
                  </div>
                  {item.caption && (
                    <p className="truncate text-xs text-ink-soft">{item.caption}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <WaveDivider color="var(--color-bg)" />
    </section>
  );
}
