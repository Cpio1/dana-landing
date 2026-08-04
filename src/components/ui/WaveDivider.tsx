interface WaveDividerProps {
  color: string;
  flip?: boolean;
  className?: string;
}

export function WaveDivider({ color, flip = false, className = "" }: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="h-[50px] w-full sm:h-[80px]"
      >
        <path
          d="M0,40 C240,100 480,0 720,30 C960,60 1200,100 1440,40 L1440,100 L0,100 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
