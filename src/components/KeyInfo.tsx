import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Decor } from "@/components/ui/Decor";

const ACCENTS = [
  "bg-coral/12 text-coral",
  "bg-blue/12 text-blue",
  "bg-[#e8b800]/15 text-[#c99500]",
  "bg-green/12 text-green",
  "bg-purple/12 text-purple",
  "bg-orange/12 text-orange",
];

export function KeyInfo() {
  const { keyInfo } = siteContent;

  return (
    <section id="key-info" className="scroll-mt-20 relative overflow-hidden bg-pastel-blue py-16 sm:py-20">
      <Decor name="cloud" className="absolute decor-float right-6 top-5 h-9 w-9 text-blue/35 sm:right-16 sm:top-8 sm:h-11 sm:w-11" />
      <Decor name="star" className="absolute right-20 top-14 h-3 w-3 text-yellow/70 sm:right-32 sm:top-16" />
      <Decor name="sun" className="absolute hidden xl:block left-8 top-10 h-10 w-10 text-orange/50" />
      <Decor name="star" className="absolute hidden xl:block left-16 bottom-14 h-3.5 w-3.5 text-purple/45" />
      <Decor name="star" className="absolute hidden xl:block right-10 bottom-16 h-2.5 w-2.5 text-coral/45" />
      <Decor name="dot" className="absolute right-8 top-10 h-2 w-2 text-blue/30" />
      <Decor name="dot" className="absolute left-10 bottom-12 h-1.5 w-1.5 text-primary/25" />

      <Container>
        <SectionHeading heading={keyInfo.heading} />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {keyInfo.items.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.04}>
              <div className="flex h-full items-start gap-3 rounded-2xl bg-bg p-5 shadow-sm shadow-ink/5">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${ACCENTS[index % ACCENTS.length]}`}
                >
                  <Icon name={item.icon} className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink">{item.value}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
