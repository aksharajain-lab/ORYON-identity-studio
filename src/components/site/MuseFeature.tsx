import { useInView } from "@/hooks/use-in-view";
import { ORYON_MUSE } from "@/lib/oryon-data";

/**
 * ORYON Muse — the studio's flagship AI product, presented as a featured
 * case study rather than a standard portfolio card. Rendered at the top of
 * the homepage Selected Work section and the /portfolio page.
 */
export function MuseFeature({ className = "" }: { className?: string }) {
  const { ref, visible } = useInView();
  const { title, subtitle, description, tags, link } = ORYON_MUSE;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`in-view overflow-hidden rounded-lg border border-border bg-surface ${
        visible ? "visible" : ""
      } ${className}`}
    >
      <div className="grid md:grid-cols-12">
        {/* Editorial copy */}
        <div className="flex flex-col justify-between gap-10 p-8 md:col-span-7 md:p-12 lg:p-16">
          <div>
            <div className="flex items-start justify-between gap-4">
              <p className="eyebrow text-[color:var(--accent-gold)]">
                Featured — Digital Experience
              </p>
              <p className="label-sm">N° 001</p>
            </div>

            <h3 className="editorial mt-8 text-4xl leading-[0.95] md:text-6xl">
              ORYON <span className="gold-italic">Muse</span>
            </h3>
            <p className="editorial mt-4 text-xl leading-snug text-foreground/80 md:text-2xl">
              {subtitle}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>

            <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:text-[11px]">
              {tags.map((tag, i) => (
                <li key={tag} className="flex items-center gap-x-3">
                  {i > 0 && (
                    <span aria-hidden className="text-[color:var(--accent-gold)]">
                      ·
                    </span>
                  )}
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-md bg-foreground px-7 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-background transition-colors hover:bg-[color:var(--accent-gold)]"
            >
              Launch Muse
              <span aria-hidden>→</span>
            </a>
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Live — opens in a new tab
            </p>
          </div>
        </div>

        {/* Visual plate */}
        <div className="relative min-h-[280px] overflow-hidden border-t border-border md:col-span-5 md:min-h-full md:border-l md:border-t-0">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #0B0B0B 0%, #141414 45%, #1B1712 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(320px circle at 80% 12%, color-mix(in oklab, var(--accent-gold) 14%, transparent), transparent 65%)",
            }}
          />

          <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
            <div className="flex items-start justify-between">
              <p className="eyebrow">ORYON Product</p>
              <p className="eyebrow">MMXXVI</p>
            </div>

            <div className="py-6 text-center">
              <p className="editorial text-7xl italic leading-none text-foreground/95 md:text-8xl">
                Muse<span className="text-[color:var(--accent-gold)]">.</span>
              </p>
            </div>

            <p className="text-center text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Discover · Analyze · Refine
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
