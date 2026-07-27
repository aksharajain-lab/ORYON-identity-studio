import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "outline" | "solid" | "ghost";
  children: React.ReactNode;
};

const variants = {
  outline:
    "glow-crimson rounded-md border border-border px-6 py-4 text-[11px] uppercase tracking-[0.24em]",
  solid:
    "rounded-md bg-foreground px-6 py-4 text-[11px] uppercase tracking-[0.24em] text-background transition hover:bg-[color:var(--accent-gold)]",
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
