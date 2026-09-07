import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Decor } from "@/components/ui/Decor";
import { WaveDivider } from "@/components/ui/WaveDivider";

const ACCENTS = [
  "bg-coral/12 text-coral",
  "bg-blue/12 text-blue",
  "bg-purple/12 text-purple",
  "bg-green/12 text-green",
  "bg-orange/12 text-orange",
  "bg-[#e8b800]/15 text-[#c99500]",
];

export function Activities() {
  const { activities } = siteContent;

  return (
    <section id="activities" className="scroll-mt-20 relative overflow-hidden bg-pastel-lilac py-16 sm:py-20">
      <Decor name="star" className="absolute left-8 top-14 h-3 w-3 text-purple/45" />
      <Decor name="dot" className="absolute right-12 top-24 h-1.5 w-1.5 text-primary/30" />
      <Decor name="star" className="absolute bottom-10 right-16 h-2.5 w-2.5 text-blue/40" />

      <Container>
        <SectionHeading heading={activities.heading} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {activities.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <div className="flex flex-col items-center gap-3 rounded-2xl bg-bg px-4 py-6 text-center shadow-sm shadow-ink/5">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${ACCENTS[index % ACCENTS.length]}`}
                >
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-ink">{item.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <WaveDivider color="var(--color-bg)" />
    </section>
  );
}
