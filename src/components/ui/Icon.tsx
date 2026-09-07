import type { IconName } from "@/types/content";

const PATHS: Record<IconName, React.ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 20c0-3.6 2.5-6.2 5.5-6.2s5.5 2.6 5.5 6.2" />
      <circle cx="17" cy="9.5" r="2.3" />
      <path d="M15.5 13.7c2.4.3 4.2 2.6 4.2 5.6" />
    </>
  ),
  language: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.3 2.3 3.5 5.4 3.5 8.5s-1.2 6.2-3.5 8.5c-2.3-2.3-3.5-5.4-3.5-8.5S9.7 5.8 12 3.5z" />
    </>
  ),
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    </>
  ),
  camera: (
    <>
      <rect x="2.5" y="6.5" width="13" height="11" rx="2" />
      <path d="M15.5 10.5l6-3v9l-6-3z" />
    </>
  ),
  utensils: (
    <>
      <path d="M6.5 3v7.5a2 2 0 0 0 4 0V3M8.5 10.5V21M17.5 3c-1.7 0-3 2-3 5s1.3 5 3 5V3zM17.5 13v8" />
    </>
  ),
  music: (
    <>
      <circle cx="7" cy="18" r="2.5" />
      <circle cx="17" cy="16" r="2.5" />
      <path d="M9.5 18V5.5L19.5 3.5v12.5" />
    </>
  ),
  dance: (
    <>
      <circle cx="12" cy="4.5" r="1.8" />
      <path d="M12 8v6M12 8l-4.5 3M12 8l4.5 3M12 14l-3.5 6M12 14l3.5 6" />
    </>
  ),
  puzzle: (
    <>
      <path d="M12 2.5a6 6 0 0 0-6 6c0 2.6 1.6 4 2.5 5 .6.6 1 1.2 1 2h5c0-.8.4-1.4 1-2 .9-1 2.5-2.4 2.5-5a6 6 0 0 0-6-6z" />
      <path d="M9 21h6M10 18h4" />
    </>
  ),
  cap: (
    <>
      <path d="M2.5 9.5L12 5l9.5 4.5-9.5 4.5-9.5-4.5z" />
      <path d="M6.5 11.5v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4M21.5 9.5v5.5" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3.5a8.5 8.5 0 1 0 0 17c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2c1.7 0 3-1.3 3-3 0-4.1-3.6-7.4-8-7.4z" />
      <circle cx="7.5" cy="10.5" r="1.1" />
      <circle cx="9.5" cy="7" r="1.1" />
      <circle cx="14.5" cy="7" r="1.1" />
      <circle cx="16.8" cy="10.5" r="1.1" />
    </>
  ),
  truck: (
    <>
      <rect x="2" y="7" width="12" height="9" rx="1.2" />
      <path d="M14 10.5h4l3 3V16h-7z" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </>
  ),
  file: (
    <>
      <path d="M6.5 2.5h8l4 4V21a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1z" />
      <path d="M14.5 2.5v4h4" />
    </>
  ),
  "external-link": (
    <>
      <path d="M9 6H5.5a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2H16a2 2 0 0 0 2-2V15" />
      <path d="M13.5 3.5H20.5V10.5" />
      <path d="M20 4L11 13" />
    </>
  ),
  phone: (
    <path d="M4.5 3.5h3.3l1.4 4.6-2.2 1.9a13 13 0 0 0 6.6 6.6l1.9-2.2 4.6 1.4v3.3c0 1-.9 1.8-1.9 1.7C10 20 4 14 3.4 6.4c-.1-1 .7-1.9 1.7-1.9z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M3 6.5l9 6.5 9-6.5" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M12 21.5s7-6.4 7-12A7 7 0 0 0 5 9.5c0 5.6 7 12 7 12z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </>
  ),
  whatsapp: (
    <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.9L3.5 20.5l4.2-1.1A8.5 8.5 0 1 0 12 3.5zm4.8 12.1c-.2.6-1.2 1.1-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.8-.3-1.5-.6-2.6-1.1-4.3-3.7-4.4-3.9-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.1c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .5.4.2.5.7 1.8.8 1.9.1.1.1.3 0 .4-.1.2-.1.3-.3.4-.1.2-.3.3-.4.4-.1.1-.3.3-.1.5.1.3.6 1.1 1.4 1.7.9.8 1.7 1.1 2 1.2.3.1.4.1.5-.1.2-.2.6-.7.8-1 .2-.2.3-.2.6-.1.2.1 1.5.7 1.7.8.2.1.4.2.4.3.1.1.1.5-.1 1z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  close: <path d="M5 5l14 14M19 5L5 19" />,
  "chevron-left": <path d="M15 5l-7 7 7 7" />,
  "chevron-right": <path d="M9 5l7 7-7 7" />,
  "arrow-right": <path d="M4 12h16M13 6l6 6-6 6" />,
  check: <path d="M4.5 12.5l5 5 10-11" />,
};

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  const isFilled = name === "whatsapp";
  return (
    <svg
      viewBox="0 0 24 24"
      fill={isFilled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
