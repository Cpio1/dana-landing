import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { Icon } from "@/components/ui/Icon";
import { Decor } from "@/components/ui/Decor";

export function Nutrition() {
  const { nutrition } = siteContent;

  return (
    <section id="nutrition" className="scroll-mt-20 relative overflow-hidden bg-pastel-yellow py-16 sm:py-20">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <Decor
              name="pencil-line"
              className="absolute -left-1 -top-6 h-4 w-16 text-primary/35"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              {nutrition.heading}
            </span>
            <h2 className="mt-2 font-heading text-2xl leading-tight text-ink sm:text-3xl">
              {nutrition.title}
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {nutrition.meals.map((meal) => (
                <li key={meal} className="flex items-center gap-3 text-ink">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-medium">{meal}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <PlaceholderPhoto
              image={nutrition.image}
              rounded="rounded-3xl"
              className="aspect-[4/3] w-full"
            />
            <Decor
              name="sun"
              className="absolute -right-4 -top-4 h-9 w-9 text-orange/45"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
