interface DoodleProps {
  className?: string;
}

/* Decorative hand-drawn line-art. All purely ornamental (aria-hidden by parent usage). */

export function BeeDoodle({ className = "h-10 w-10" }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <ellipse cx="20" cy="22" rx="9" ry="7" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 22h18M13 18.5h14M13 25.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14 16c1-4 4-6 6-6s5 2 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13 12c2-1.5 4 0 4 2M27 12c-2-1.5-4 0-4 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="16.5" cy="20.5" r="1" fill="currentColor" />
      <circle cx="23.5" cy="20.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function RainbowDoodle({ className = "h-12 w-16" }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 44" fill="none" className={className}>
      <path d="M4 40C4 20 16 6 32 6s28 14 28 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 40C13 24 21 13 32 13s19 11 19 27" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
      <circle cx="8" cy="38" r="2.5" fill="currentColor" opacity="0.5" />
      <circle cx="56" cy="38" r="2.5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function CloudDoodle({ className = "h-10 w-16" }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 36" fill="none" className={className}>
      <path
        d="M16 28c-6 0-11-4.5-11-10S10 8 16 8c1.6-3.8 5.6-6.5 10.3-6.5 5.5 0 10.1 3.6 11.4 8.5H39c5 0 9 3.8 9 8.5s-4 9.5-9 9.5H16z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarDoodle({ className = "h-6 w-6" }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3l2.1 5.7L20 11l-5.9 2.3L12 19l-2.1-5.7L4 11l5.9-2.3L12 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PencilDoodle({ className = "h-12 w-12" }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M30 8l10 10-18 18-11 2 2-11 17-19z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M27 11l10 10" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 6c4 2 2 6 6 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ScribbleUnderline({ className = "h-4 w-28 text-orange" }: DoodleProps) {
  return (
    <svg viewBox="0 0 140 16" fill="none" className={className}>
      <path
        d="M2 10c20-9 40 3 46-2s18-8 30-3 30 4 60-2"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BlobShape({ className = "h-full w-full text-yellow" }: DoodleProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="currentColor">
      <path d="M45.2,-58.3C57.9,-49.7,66.3,-33.9,70.4,-16.7C74.6,0.5,74.5,19.1,66.6,33.7C58.6,48.4,42.8,59.1,25.6,65.5C8.4,71.9,-10.2,73.9,-27.1,68.7C-44,63.5,-59.2,51,-67.2,35.1C-75.2,19.1,-76,-0.4,-70.1,-17.1C-64.2,-33.8,-51.6,-47.7,-37,-56.2C-22.4,-64.7,-11.2,-67.8,3.9,-73C19,-78.1,32.5,-66.9,45.2,-58.3Z" transform="translate(100 100)" />
    </svg>
  );
}
