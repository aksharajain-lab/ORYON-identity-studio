import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "outline" | "solid" | "ghost";
  children: ReactNode;
};

const variants = {
  outline:
    "glow-crimson rounded-md border border-border px-6 py-4 text-[11px] uppercase tracking-[0.24em] card-hover-ghost",
  solid:
    "rounded-md bg-foreground px-6 py-4 text-[11px] uppercase tracking-[0.24em] text-background transition-all duration-500 hover:bg-[color:var(--accent-gold)] hover:-translate-y-0.5 hover:shadow-lg",
  ghost:
    "rule-hover text-xs uppercase tracking-[0.24em] text-foreground",
};

export function ButtonLink({
  variant = "outline",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={`inline-flex items-center gap-2 ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
