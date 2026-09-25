export type DecorName =
  | "cloud"
  | "star"
  | "dot"
  | "heart"
  | "sun"
  | "pencil-line"
  | "wave";

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
};

/**
 * Tiny, semi-transparent ornamental shapes (clouds, stars, dots, hearts, a sun,
 * a pencil-drawn line, a soft wave). Purely decorative — always aria-hidden,
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
      className={
        name === "cloud"
          ? `${className} drop-shadow-[0_2px_3px_rgb(47_180_229/0.18)]`
          : className
      }
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
