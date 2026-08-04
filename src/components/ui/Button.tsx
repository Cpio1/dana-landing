import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const BASE =
  "group inline-flex items-center gap-3 rounded-full border-2 border-ink pl-6 pr-2 py-2 font-heading text-sm font-bold transition-all duration-150 ease-out active:translate-x-[3px] active:translate-y-[3px] active:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const VARIANTS = {
  primary:
    "bg-orange text-ink shadow-[4px_4px_0_0_var(--color-ink)] hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_var(--color-ink)]",
  dark:
    "bg-ink text-cream shadow-[4px_4px_0_0_var(--color-orange)] hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_var(--color-orange)]",
  light:
    "bg-paper text-ink shadow-[4px_4px_0_0_var(--color-green)] hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_var(--color-green)]",
} as const;

const CAP_VARIANTS = {
  primary: "bg-ink text-orange",
  dark: "bg-orange text-ink",
  light: "bg-green text-paper",
} as const;

type Variant = keyof typeof VARIANTS;

interface CommonProps {
  variant?: Variant;
  className?: string;
  icon?: boolean;
}

function ArrowCap({ variant }: { variant: Variant }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-150 group-hover:rotate-45 ${CAP_VARIANTS[variant]}`}
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function ButtonLink({
  variant = "primary",
  className = "",
  icon = true,
  href,
  children,
  ...rest
}: CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode }) {
  return (
    <a href={href} className={`${BASE} ${VARIANTS[variant]} ${className}`} {...rest}>
      {children}
      {icon && <ArrowCap variant={variant} />}
    </a>
  );
}

export function Button({
  variant = "primary",
  className = "",
  icon = true,
  children,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button className={`${BASE} ${VARIANTS[variant]} ${className}`} {...rest}>
      {children}
      {icon && <ArrowCap variant={variant} />}
    </button>
  );
}
