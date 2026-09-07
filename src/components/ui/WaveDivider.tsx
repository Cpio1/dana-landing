interface WaveDividerProps {
  /** Fill color of the wave — usually the section coming after it. */
  color: string;
  flip?: boolean;
  className?: string;
}

/** A single calm, low-amplitude curve. Used sparingly between a few sections. */
export function WaveDivider({ color, flip = false, className = "" }: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="h-[28px] w-full sm:h-[42px]"
      >
        <path
          d="M0,30 C240,55 480,10 720,25 C960,40 1200,55 1440,25 L1440,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
