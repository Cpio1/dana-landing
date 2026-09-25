export type DecorName =
  | "cloud"
  | "star"
  | "dot"
  | "heart"
  | "sun"
  | "pencil-line"
  | "wave"
  | "rainbow"
  | "balloon"
  | "flower"
  | "pencil"
  | "block"
  | "book"
  | "notes"
  | "apple"
  | "carrot"
  | "camera"
  | "triangle"
  | "ring";

// Flat-стиль: жұмсақ мөлдір толтыру + сол түстің жұқа контуры.
const SOFT_FILL = { fill: "currentColor", fillOpacity: 0.28 } as const;

const PATHS: Record<DecorName, React.ReactNode> = {
  // Ақ толтырылған бұлт: currentColor (жұмсақ көк) — оның контуры.
  cloud: (
    <path
      d="M7 17c-2.5 0-4.5-2-4.5-4.3 0-2.2 1.7-4 3.9-4.3.9-2 2.9-3.4 5.2-3.4 2.8 0 5.1 2 5.6 4.6H18c2.2 0 4 1.8 4 4S20.2 17 18 17H7z"
      fill="#ffffff"
    />
  ),
  star: (
    <path
      d="M12 3.5c.4 2.6 1 4.3 2 5.3s2.7 1.6 5.3 2c-2.6.4-4.3 1-5.3 2s-1.6 2.7-2 5.3c-.4-2.6-1-4.3-2-5.3s-2.7-1.6-5.3-2c2.6-.4 4.3-1 5.3-2s1.6-2.7 2-5.3z"
      fill="currentColor"
      stroke="none"
    />
  ),
  dot: <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />,
  heart: (
    <path
      d="M12 20c-4-2.7-8-6-8-10.2C4 6.7 6.1 5 8.4 5c1.5 0 2.9.8 3.6 2 .7-1.2 2.1-2 3.6-2 2.3 0 4.4 1.7 4.4 4.8 0 4.2-4 7.5-8 10.2z"
      fill="none"
    />
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4.5" fill="none" />
      <path d="M12 2.5v2.4M12 19.1v2.4M21.5 12h-2.4M4.9 12H2.5M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7M18.4 18.4l-1.7-1.7M7.3 7.3 5.6 5.6" />
    </>
  ),
  "pencil-line": <path d="M2 12c4-4 6 4 10 0s6-4 10 0" fill="none" />,
  wave: <path d="M1 8c3.5-4 7-4 10.5 0s7 4 10.5 0s7-4 10.5 0" fill="none" />,
  rainbow: (
    <g strokeWidth={2.2}>
      <path d="M3 18a9 9 0 0 1 18 0" stroke="var(--color-coral)" />
      <path d="M6.2 18a5.8 5.8 0 0 1 11.6 0" stroke="var(--color-yellow)" />
      <path d="M9.4 18a2.6 2.6 0 0 1 5.2 0" stroke="var(--color-blue)" />
    </g>
  ),
  balloon: (
    <>
      <path
        d="M12 2.8c-3.2 0-5.5 2.5-5.5 5.8 0 3.6 2.8 6.6 5.5 7.2 2.7-.6 5.5-3.6 5.5-7.2 0-3.3-2.3-5.8-5.5-5.8z"
        {...SOFT_FILL}
      />
      <path d="M11 15.8h2l-1 1.3z" fill="currentColor" />
      <path d="M12 17.2c-1.2 1.3 1.2 2.4 0 3.9" fill="none" />
      <path d="M9.2 6.8c.4-1.2 1.3-1.9 2.3-2.1" fill="none" />
    </>
  ),
  flower: (
    <>
      <g {...SOFT_FILL}>
        <circle cx="12" cy="7.6" r="3" />
        <circle cx="16.2" cy="10.6" r="3" />
        <circle cx="14.6" cy="15.5" r="3" />
        <circle cx="9.4" cy="15.5" r="3" />
        <circle cx="7.8" cy="10.6" r="3" />
      </g>
      <circle cx="12" cy="12" r="2.1" fill="var(--color-yellow)" stroke="none" />
    </>
  ),
  pencil: (
    <g transform="rotate(-35 12 12)">
      <rect x="4.5" y="9.8" width="11" height="4.4" rx=".6" {...SOFT_FILL} />
      <path d="M15.5 9.8 20 12l-4.5 2.2z" fill="none" />
      <path d="M18.6 11.3 20 12l-1.4.7z" fill="currentColor" />
      <path d="M4.5 9.8H3.4c-.5 0-.9.4-.9.9v2.6c0 .5.4.9.9.9h1.1" fill="none" />
    </g>
  ),
  block: (
    <>
      <rect x="4.5" y="4.5" width="15" height="15" rx="2.5" {...SOFT_FILL} />
      <path d="M9.4 16 12 8.6l2.6 7.4M10.3 13.4h3.4" fill="none" />
    </>
  ),
  book: (
    <>
      <path
        d="M12 7.2C10 5.8 7 5.3 3.8 5.8v11.6c3.2-.5 6.2 0 8.2 1.4 2-1.4 5-1.9 8.2-1.4V5.8C17 5.3 14 5.8 12 7.2z"
        {...SOFT_FILL}
      />
      <path d="M12 7.2v11.6" fill="none" />
    </>
  ),
  notes: (
    <>
      <path d="M9.6 17.2V6.6l9-2.2v10.4M9.6 9.4l9-2.2" fill="none" />
      <circle cx="7.4" cy="17.2" r="2.2" {...SOFT_FILL} />
      <circle cx="16.4" cy="14.8" r="2.2" {...SOFT_FILL} />
    </>
  ),
  apple: (
    <>
      <path
        d="M12 8.4c-1.6-1-4.4-1.1-5.9 1.1-1.8 2.7-.5 7.4 2 9.2 1.3.9 2.5.8 3.9.2 1.4.6 2.6.7 3.9-.2 2.5-1.8 3.8-6.5 2-9.2-1.5-2.2-4.3-2.1-5.9-1.1z"
        {...SOFT_FILL}
      />
      <path d="M12 8.4c0-1.6.4-3 1.4-4.2" fill="none" />
      <path d="M13.2 5.8c1.2-1.1 2.9-1.3 3.9-.8-.6 1.4-2.3 2-3.9.8z" fill="currentColor" stroke="none" />
    </>
  ),
  carrot: (
    <>
      <path
        d="M5.2 19.4 14.4 9.6c1.3-1.2 3.5-.4 3.6 1.4 0 .7-.3 1.3-.8 1.8L6.8 20.3c-.9.7-2.3-.1-1.6-.9z"
        {...SOFT_FILL}
      />
      <path d="M9 15.6l1.4 1.2M11.6 12.8l1.3 1.1" fill="none" />
      <path d="M16.6 9.2 17.4 5M17.8 10.4 21 8.6M15.6 9 14.2 5.6" fill="none" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="7.8" width="18" height="11.4" rx="3" {...SOFT_FILL} />
      <path d="M8.6 7.8 9.9 5.6h4.2l1.3 2.2" fill="none" />
      <circle cx="12" cy="13.5" r="3" fill="#ffffff" />
      <circle cx="17.6" cy="10.6" r=".6" fill="currentColor" stroke="none" />
    </>
  ),
  triangle: <path d="M12 5.2 19.4 18H4.6z" {...SOFT_FILL} />,
  ring: <circle cx="12" cy="12" r="6" fill="none" strokeWidth={2} />,
};

/**
 * Tiny, semi-transparent ornamental shapes (clouds, stars, dots, hearts, a sun,
 * a rainbow, balloons, flowers, school and kitchen doodles, simple geometry).
 * Purely decorative — always aria-hidden and click-through (pointer-events-none),
 * positioned and colored by the caller. Used sparingly, never over text.
 */
export function Decor({
  name,
  className = "h-6 w-6 text-primary/25",
}: {
  name: DecorName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`pointer-events-none select-none ${
        name === "cloud"
          ? `${className} drop-shadow-[0_2px_3px_rgb(47_180_229/0.18)]`
          : className
      }`}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
