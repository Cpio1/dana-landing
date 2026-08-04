export type IconName = "heart" | "shield" | "book" | "sun";

const PATHS: Record<IconName, React.ReactNode> = {
  heart: (
    <path d="M12 20.5S3.5 15.2 3.5 9.3A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.5 3.1c0 5.9-8.5 11.2-8.5 11.2z" />
  ),
  shield: (
    <path d="M12 3l7 3v5.2c0 4.6-3 8.3-7 9.5-4-1.2-7-4.9-7-9.5V6l7-3z" />
  ),
  book: (
    <>
      <path d="M4 5.8A2.3 2.3 0 0 1 6.3 3.5H12v16.8H6.3A2.3 2.3 0 0 0 4 22.6V5.8z" />
      <path d="M20 5.8a2.3 2.3 0 0 0-2.3-2.3H12v16.8h5.7A2.3 2.3 0 0 1 20 22.6V5.8z" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.2 12H2M22 12h-2.2M6 6l1.5 1.5M16.5 16.5 18 18M6 18l1.5-1.5M16.5 7.5 18 6" />
    </>
  ),
};

export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
