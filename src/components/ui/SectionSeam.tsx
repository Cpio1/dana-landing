import type { CSSProperties } from "react";
import { Decor, type DecorName } from "@/components/ui/Decor";

type SeamItem = [name: DecorName, className: string, delay?: number];

/** Only on md+ — the bigger, richer part of each composition. */
const WIDE = "absolute hidden md:block";
/** The single small item that stays on phones. */
const PHONE = "absolute md:hidden";

/**
 * Decorative compositions that sit exactly on the border between two sections.
 * The wrapper has zero height, so it never moves the sections around; items are
 * positioned relative to the seam and stay within the sections' vertical
 * padding (≈ ±56px), so they never cover text, cards or buttons.
 */
const SEAMS: Record<string, SeamItem[]> = {
  "hero-about": [
    ["heart", `${WIDE} left-[42%] -top-2 h-3.5 w-3.5 text-coral/45`],
    ["star", `${WIDE} decor-twinkle left-[58%] top-2 h-2.5 w-2.5 text-purple/55`, 0.9],
    ["cloud", `${WIDE} decor-float left-[3%] -top-12 h-16 w-16 text-blue/35`],
    ["cloud", `${WIDE} decor-float left-[8.5%] -top-3 h-9 w-9 text-blue/30`, 1.6],
    ["star", `${WIDE} decor-twinkle left-[13%] -top-9 h-3 w-3 text-yellow/80`],
    ["plane", `${WIDE} decor-drift right-[6%] -top-9 h-10 w-10 text-blue opacity-55`],
    ["wave", `${WIDE} right-[10.5%] -top-1 h-4 w-14 text-blue/35`],
    ["cloud", `${PHONE} decor-float left-2 -top-7 h-10 w-10 text-blue/35`],
  ],
  "about-keyinfo": [
    ["cloud", `${WIDE} decor-float left-[33%] -top-3 h-7 w-7 text-blue/30`, 1.8],
    ["rainbow", `${WIDE} right-[4.5%] -top-11 h-16 w-16 opacity-55`],
    ["cloud", `${WIDE} decor-float right-[3%] -top-3 h-10 w-10 text-blue/35`, 0.8],
    ["cloud", `${WIDE} decor-float right-[10%] -top-1 h-6 w-6 text-blue/30`, 2.2],
    ["butterfly", `${WIDE} decor-sway left-[6%] -top-6 h-9 w-9 text-purple opacity-55`],
    ["star", `${WIDE} decor-twinkle left-[10.5%] top-2 h-2.5 w-2.5 text-coral/60`, 1],
    ["butterfly", `${PHONE} decor-sway left-3 -top-4 h-7 w-7 text-purple opacity-55`],
  ],
  "keyinfo-nutrition": [
    ["sun", `${WIDE} decor-spin left-[3%] -top-9 h-14 w-14 text-yellow opacity-80`],
    ["leaf", `${WIDE} decor-sway left-[8.5%] -top-1 h-7 w-7 text-green opacity-55`, 0.7],
    ["star", `${WIDE} decor-twinkle left-[37%] -top-3 h-3 w-3 text-yellow/80`, 0.4],
    ["star", `${WIDE} decor-twinkle left-[62%] top-1 h-2.5 w-2.5 text-orange/60`, 1.5],
    ["blob", `${WIDE} -right-6 -top-12 h-24 w-24 text-green/10`],
    ["dot", `${WIDE} right-[7%] -top-5 h-2 w-2 text-green/50`],
    ["leaf", `${PHONE} decor-sway left-3 -top-3 h-6 w-6 text-green opacity-55`],
  ],
  "nutrition-activities": [
    ["notes", `${WIDE} decor-sway left-[46%] -top-4 h-6 w-6 text-purple opacity-45`, 0.4],
    ["pencil", `${WIDE} decor-sway right-[4.5%] -top-8 h-12 w-12 text-orange opacity-60`],
    ["brush", `${WIDE} right-[9%] -top-5 h-11 w-11 text-purple opacity-55`],
    ["block", `${WIDE} right-[2.5%] top-1 h-8 w-8 rotate-12 text-blue opacity-55`],
    ["flower", `${WIDE} decor-spin left-[4%] -top-6 h-9 w-9 text-coral opacity-55`],
    ["flower", `${WIDE} left-[7.5%] top-0 h-5 w-5 text-yellow opacity-70`],
    ["brush", `${PHONE} left-2 -top-5 h-8 w-8 text-purple opacity-55`],
  ],
  "activities-gallery": [
    ["balloon", `${WIDE} decor-float left-[3%] -top-14 h-14 w-14 text-coral opacity-55`],
    ["balloon", `${WIDE} decor-float left-[6.5%] -top-9 h-11 w-11 text-blue opacity-55`, 1.2],
    ["balloon", `${WIDE} decor-float left-[9.5%] -top-5 h-9 w-9 text-yellow opacity-75`, 2.4],
    ["butterfly", `${WIDE} decor-sway right-[5%] -top-6 h-8 w-8 text-coral opacity-50`, 0.5],
    ["heart", `${WIDE} right-[9%] top-0 h-4 w-4 text-purple/50`],
    ["heart", `${WIDE} right-[3%] top-3 h-3 w-3 text-coral/50`],
    ["balloon", `${PHONE} decor-float left-1 -top-8 h-10 w-10 text-coral opacity-55`],
  ],
  "gallery-official": [
    ["tree", `${WIDE} left-[3%] -top-11 h-14 w-14 text-green opacity-55`],
    ["leaf", `${WIDE} decor-sway left-[8%] -top-2 h-6 w-6 text-green opacity-50`, 1.1],
    ["plane", `${WIDE} decor-drift right-[5%] -top-7 h-10 w-10 text-blue opacity-55`, 0.9],
    ["wave", `${WIDE} right-[9.5%] -top-1 h-4 w-14 text-blue/35`],
    ["star", `${WIDE} decor-twinkle right-[3%] top-2 h-3 w-3 text-yellow/80`, 0.3],
    ["plane", `${PHONE} decor-drift left-2 -top-4 h-7 w-7 text-blue opacity-55`],
  ],
  "official-documents": [
    ["flower", `${WIDE} left-[40%] -top-2 h-5 w-5 text-coral opacity-50`],
    ["star", `${WIDE} decor-twinkle left-[64%] -top-3 h-3 w-3 text-yellow/80`, 1.7],
    ["blob", `${WIDE} -left-6 -top-10 h-20 w-20 text-yellow/15`],
    ["book", `${WIDE} decor-sway left-[4%] -top-6 h-10 w-10 text-purple opacity-55`],
    ["ball", `${WIDE} decor-spin right-[4%] -top-6 h-11 w-11 text-coral opacity-55`],
    ["star", `${WIDE} decor-twinkle right-[9%] -top-5 h-3 w-3 text-yellow/80`, 0.8],
    ["dot", `${WIDE} right-[7%] top-3 h-2 w-2 text-purple/50`],
    ["ball", `${PHONE} left-2 -top-4 h-7 w-7 text-coral opacity-55`],
  ],
  "documents-contacts": [
    ["balloon", `${WIDE} decor-float left-[52%] -top-8 h-8 w-8 text-purple opacity-45`, 0.7],
    ["rainbow", `${WIDE} left-[6%] -top-11 h-12 w-12 opacity-55`],
    ["cloud", `${WIDE} decor-float left-[3.5%] -top-5 h-12 w-12 text-blue/35`],
    ["star", `${WIDE} decor-twinkle right-[6%] -top-4 h-4 w-4 text-yellow/80`],
    ["star", `${WIDE} decor-twinkle right-[9%] top-1 h-2.5 w-2.5 text-purple/60`, 1.3],
    ["heart", `${WIDE} right-[3.5%] top-0 h-4 w-4 text-coral/50`],
    ["cloud", `${PHONE} decor-float left-2 -top-5 h-9 w-9 text-blue/35`],
  ],
  "contacts-footer": [
    ["flower", `${WIDE} left-[5%] -top-6 h-9 w-9 text-purple opacity-55`],
    ["leaf", `${WIDE} decor-sway left-[3%] -top-1 h-6 w-6 text-green opacity-55`, 0.6],
    ["butterfly", `${WIDE} decor-sway left-[9%] -top-9 h-8 w-8 text-blue opacity-55`, 1.4],
    ["balloon", `${WIDE} decor-float right-[4%] -top-12 h-10 w-10 text-coral opacity-55`],
    ["flower", `${PHONE} left-2 -top-3 h-6 w-6 text-coral opacity-55`],
  ],
};

export type SeamName = keyof typeof SEAMS;

export function SectionSeam({ name }: { name: SeamName }) {
  return (
    <div aria-hidden="true" className="pointer-events-none relative z-10 h-0 overflow-x-clip select-none">
      {SEAMS[name].map(([decor, className, delay], i) => (
        <Decor
          key={i}
          name={decor}
          className={className}
          style={delay ? ({ animationDelay: `${delay}s` } as CSSProperties) : undefined}
        />
      ))}
    </div>
  );
}
