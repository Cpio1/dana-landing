import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const subheadingColor = tone === "dark" ? "text-cream/75" : "text-ink-soft";
  const headingColor = tone === "dark" ? "text-cream" : "text-ink";

  return (
    <Reveal>
      <div className={`flex max-w-2xl flex-col gap-2 ${alignClass}`}>
        {eyebrow && (
          <span
            className="-rotate-2 font-hand text-2xl font-bold text-coral sm:text-3xl"
          >
            {eyebrow}
          </span>
        )}
        <h2
          className={`font-heading text-3xl leading-tight sm:text-4xl lg:text-5xl ${headingColor}`}
        >
          {heading}
        </h2>
        {subheading && (
          <p className={`mt-2 max-w-xl text-base leading-relaxed sm:text-lg ${subheadingColor}`}>
            {subheading}
          </p>
        )}
      </div>
    </Reveal>
  );
}
