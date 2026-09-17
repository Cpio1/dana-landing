import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const VARIANTS = {
  primary: "bg-primary text-white hover:bg-[#f05a48]",
  outline: "border border-border bg-transparent text-ink hover:bg-bg-alt",
} as const;

const SIZES = {
  md: "px-6 py-3 text-sm",
  sm: "px-4 py-2 text-sm",
} as const;

type Variant = keyof typeof VARIANTS;
type Size = keyof typeof SIZES;

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  href,
  children,
  ...rest
}: CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className={`${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      className={`${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
