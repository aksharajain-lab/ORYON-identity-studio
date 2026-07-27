import type { CSSProperties, ReactNode } from "react";

export function PlateImage({
  tone,
  aspectRatio = "4/5",
  children,
  className = "",
}: {
  tone: string;
  aspectRatio?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`plate relative overflow-hidden bg-gradient-to-br ${tone} transition-all duration-700 group-hover:border-[color:var(--accent-crimson)] ${className}`}
      style={{ aspectRatio } as CSSProperties}
    >
      {children}
    </div>
  );
}
