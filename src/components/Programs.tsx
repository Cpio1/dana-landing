import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const ACCENTS = [
  { tint: "bg-yellow/20", tag: "bg-yellow text-ink" },
  { tint: "bg-coral/15", tag: "bg-coral text-paper" },
  { tint: "bg-blue/15", tag: "bg-blue text-paper" },
  { tint: "bg-green/15", tag: "bg-green text-paper" },
  { tint: "bg-purple/15", tag: "bg-purple text-paper" },
  { tint: "bg-orange/20", tag: "bg-orange text-ink" },
];

const ROTATIONS = ["-rotate-1", "rotate-0", "rotate-1"];

export function Programs() {
  const { programs } = siteContent;
  const marqueeSequence = Array.from({ length: 6 });

  return (
    <section id="programs" className="scroll-mt-20 bg-cream py-20 sm:py-24">
      <div className="overflow-hidden border-y-2 border-ink bg-ink py-3">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-8 pr-8">
              {marqueeSequence.map((_, i) => (
                <span
                  key={i}
                  className="flex items-center gap-3 whitespace-nowrap font-heading text-xl text-cream sm:text-2xl"
                >
                  {programs.heading}
                  <span aria-hidden="true" className="text-yellow">
                    ☀
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Container className="mt-14">
        <Reveal>
          <div className="flex max-w-2xl flex-col gap-2">
            <span className="-rotate-2 inline-block w-fit font-hand text-2xl font-bold text-coral">
              Программы
            </span>
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              {programs.subheading}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.items.map((program, index) => {
            const accent = ACCENTS[index % ACCENTS.length];
            const rotate = ROTATIONS[index % ROTATIONS.length];
            return (
              <div
                key={program.title}
                className={`${rotate} transition-transform duration-300 ease-out hover:rotate-0`}
              >
                <Reveal delay={(index % 3) * 0.08}>
                  <div
                    className={`h-full rounded-[1.75rem] border-2 border-ink p-6 transition-transform duration-300 ease-out hover:-translate-y-1 ${accent.tint}`}
                  >
                    <span
                      className={`inline-flex rounded-full border-2 border-ink px-3 py-1 text-xs font-bold uppercase tracking-wide ${accent.tag}`}
                    >
                      {program.tag}
                    </span>
                    <h3 className="mt-4 font-heading text-xl text-ink">
                      {program.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {program.description}
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
