import type { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

export function Section({
  eyebrow,
  heading,
  children,
  alt,
  className = "",
}: {
  eyebrow: string;
  heading?: ReactNode;
  children: ReactNode;
  alt?: boolean;
  className?: string;
}) {
  const { ref, visible } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-rule ${alt ? "bg-surface" : ""} ${className}`}
    >
      <div className="container-editorial py-24 md:py-32">
        <div
          className={`in-view mb-16 grid gap-6 md:grid-cols-12 md:gap-10 ${visible ? "visible" : ""}`}
        >
          <p className="eyebrow md:col-span-3">{eyebrow}</p>
          {heading && (
            <h2 className="editorial text-3xl leading-tight md:col-span-9 md:text-6xl">
              {heading}
            </h2>
          )}
        </div>
        <div className={`in-view stagger-1 ${visible ? "visible" : ""}`}>
          {children}
        </div>
      </div>
    </section>
  );
}
