import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function OfficialInfo() {
  const { officialInfo } = siteContent;

  return (
    <section id="official-info" className="scroll-mt-20 bg-pastel-cream py-16 sm:py-20">
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
