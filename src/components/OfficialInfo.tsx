import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { Decor } from "@/components/ui/Decor";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function OfficialInfo() {
  const { officialInfo } = siteContent;

  return (
    <section id="official-info" className="scroll-mt-20 relative overflow-hidden bg-pastel-cream py-16 sm:py-20">
      <Decor name="triangle" className="absolute right-6 top-6 h-6 w-6 text-green opacity-50 sm:right-12 sm:top-8" />
      <Decor name="ring" className="absolute hidden xl:block left-8 top-1/3 h-8 w-8 text-blue/40" />
      <Decor name="dot" className="absolute hidden xl:block left-14 bottom-16 h-2.5 w-2.5 text-coral/45" />
      <Decor name="wave" className="absolute hidden xl:block right-6 bottom-20 h-5 w-14 text-purple/40" />
      <Container>
        <SectionHeading heading={officialInfo.heading} />

        <Reveal delay={0.05}>
          <dl className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-bg">
            {officialInfo.items.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-6"
              >
                <dt className="text-sm font-medium text-ink-soft">{item.label}</dt>
                <dd className="text-sm font-medium text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
