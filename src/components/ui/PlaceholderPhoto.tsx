import type { PlaceholderImage, PlaceholderTone } from "@/types/content";
import { BlobShape } from "@/components/ui/Doodles";

const TONE_BG: Record<PlaceholderTone, string> = {
  warm: "bg-coral",
  sand: "bg-yellow",
  sage: "bg-green",
  dark: "bg-purple",
};

const TONE_TEXT: Record<PlaceholderTone, string> = {
  warm: "text-coral",
  sand: "text-yellow",
  sage: "text-green",
  dark: "text-purple",
};

interface PlaceholderPhotoProps {
  image: PlaceholderImage;
  className?: string;
  showCaption?: boolean;
  rounded?: string;
}

export function PlaceholderPhoto({
  image,
  className = "",
  showCaption = true,
  rounded = "rounded-[2rem]",
}: PlaceholderPhotoProps) {
  return (
    <div role="img" aria-label={image.alt} className={`relative ${className}`}>
      <div
        className={`absolute inset-0 overflow-hidden border-2 border-ink ${TONE_BG[image.tone]} ${rounded}`}
      >
        <BlobShape className="pointer-events-none absolute -bottom-8 -right-8 h-2/3 w-2/3 text-white/15" />
        <BlobShape className="pointer-events-none absolute -top-10 -left-10 h-1/2 w-1/2 text-white/10" />
      </div>
      {showCaption && (
        <span
          aria-hidden="true"
          className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-paper px-3 py-1 text-[11px] font-bold text-ink shadow-[2px_2px_0_0_var(--color-ink)]"
        >
          <span className={`h-1.5 w-1.5 rounded-full ${TONE_BG[image.tone]}`} />
          {image.caption}
        </span>
      )}
    </div>
  );
}

export function toneAccentText(tone: PlaceholderTone) {
  return TONE_TEXT[tone];
}
