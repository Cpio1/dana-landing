import { Reveal } from "@/components/ui/Reveal";

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
        <h2 className="font-heading text-2xl leading-tight text-ink sm:text-3xl">
          {heading}
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
