import { Reveal } from "@/components/ui/Reveal";
import { Decor } from "@/components/ui/Decor";

// Тақырып соңындағы кішкентай жұлдызша — әр бөлімде әртүрлі түс.
const HEADING_ACCENTS = [
  "text-yellow/80",
  "text-coral/60",
  "text-blue/60",
  "text-purple/60",
  "text-green/60",
  "text-orange/60",
];

function accentFor(text: string) {
  let sum = 0;
  for (const ch of text) sum += ch.codePointAt(0) ?? 0;
  return HEADING_ACCENTS[sum % HEADING_ACCENTS.length];
}

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal>
      <div className={`flex max-w-2xl flex-col gap-2 ${alignClass}`}>
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            {eyebrow}
          </span>
        )}
        <h2 className="relative font-heading text-2xl leading-tight text-ink sm:text-3xl">
          {heading}
          <Decor
            name="star"
            className={`absolute -right-5 -top-1.5 hidden h-3.5 w-3.5 sm:block ${accentFor(heading)}`}
          />
        </h2>
        {subheading && (
          <p className="mt-1 max-w-xl whitespace-pre-line text-base leading-relaxed text-ink-soft">
            {subheading}
          </p>
        )}
      </div>
    </Reveal>
  );
}
