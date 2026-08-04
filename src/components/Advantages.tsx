import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

const ACCENTS = [
  {
    tint: "bg-yellow/20",
    circle: "bg-yellow",
    icon: "text-ink",
    shape: "rounded-tl-[2.5rem] rounded-tr-2xl rounded-br-[2.5rem] rounded-bl-2xl",
  },
  {
    tint: "bg-coral/15",
    circle: "bg-coral",
    icon: "text-paper",
    shape: "rounded-tr-[2.5rem] rounded-tl-2xl rounded-bl-[2.5rem] rounded-br-2xl",
  },
  {
    tint: "bg-blue/15",
    circle: "bg-blue",
    icon: "text-paper",
    shape: "rounded-bl-[2.5rem] rounded-tl-2xl rounded-tr-[2.5rem] rounded-br-2xl",
  },
  {
    tint: "bg-purple/15",
    circle: "bg-purple",
    icon: "text-paper",
    shape: "rounded-br-[2.5rem] rounded-tr-2xl rounded-tl-[2.5rem] rounded-bl-2xl",
  },
];

export function Advantages() {
  const { advantages } = siteContent;

  return (
    <section className="bg-paper py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Коротко"
          heading={advantages.heading}
          subheading={advantages.subheading}
        />

        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {advantages.items.map((item, index) => {
            const accent = ACCENTS[index % ACCENTS.length];
            return (
              <div key={item.title} className={index % 2 === 1 ? "sm:translate-y-6" : ""}>
                <Reveal delay={index * 0.08}>
                  <div
                    className={`group h-full border-2 border-ink p-6 transition-transform duration-300 ease-out hover:-translate-y-1 ${accent.tint} ${accent.shape}`}
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink transition-transform duration-300 group-hover:rotate-12 ${accent.circle}`}
                    >
                      <Icon name={item.icon} className={`h-6 w-6 ${accent.icon}`} />
                    </div>
                    <h3 className="mt-5 font-heading text-lg text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
