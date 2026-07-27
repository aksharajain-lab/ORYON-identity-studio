import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

export function CTASection({
  eyebrow = "§ Commission",
  headline,
  supportingText,
  buttonLabel = "Begin correspondence",
  buttonTo = "/contact",
}: {
  eyebrow?: string;
  headline: ReactNode;
  supportingText?: string;
  buttonLabel?: string;
  buttonTo?: string;
}) {
  const { ref, visible } = useInView();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="section-rule bg-surface">
      <div className="container-editorial py-20 md:py-48">
        <div
          className={`in-view grid gap-12 md:gap-16 md:grid-cols-12 ${visible ? "visible" : ""}`}
        >
          <p className="eyebrow md:col-span-3">{eyebrow}</p>
          <div className="md:col-span-9">
            <p className="editorial text-4xl leading-[1.02] md:text-7xl">
              {headline}
            </p>
            {supportingText && (
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl md:max-w-2xl">
                {supportingText}
              </p>
            )}
            <div className="mt-8 md:mt-12">
              <Link
                to={buttonTo}
                className="glow-crimson inline-flex items-center gap-4 rounded-md border border-border px-8 py-5 text-[11px] uppercase tracking-[0.24em]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-crimson)]" />
                {buttonLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
