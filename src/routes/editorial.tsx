import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { ARTICLES, ARTICLE_CATEGORIES } from "@/lib/oryon-data";

export const Route = createFileRoute("/editorial")({
  head: () => ({
    meta: [
      { title: "Editorial Archive — ORYON" },
      {
        name: "description",
        content:
          "ORYON's editorial archive: field notes, minor studies, magazine issues, character analyses and psychology essays.",
      },
      { property: "og:title", content: "Editorial Archive — ORYON" },
      {
        property: "og:description",
        content: "An evolving archive of essays, field notes and issues.",
      },
    ],
  }),
  component: EditorialIndex,
});

function EditorialIndex() {
  const [filter, setFilter] = useState<(typeof ARTICLE_CATEGORIES)[number]>(
    "All",
  );
  const filtered =
    filter === "All"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === filter);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <PageShell
      eyebrow="§ Editorial Archive — File N° 005"
      title={
        <>
          The Archive.<br />
          <em className="italic text-[color:var(--accent-gold)]">
            An evolving journal.
          </em>
        </>
      }
      lede="Long-form essays, field notes, magazine issues, and psychological studies. The private thinking behind the studio's public work."
    >
      <div className="border-y border-border bg-[color:var(--surface)]">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-2 px-6 py-6 md:gap-3 md:px-10">
          <span className="eyebrow mr-4">Sections —</span>
          {ARTICLE_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors ${
                filter === c
                  ? "border-[color:var(--accent-crimson)] bg-[color:var(--accent-crimson)] text-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {featured && (
        <section className="border-b border-border">
          <a
  href="https://heyzine.com/flip-book/d16cb564cc.html"
  target="_blank"
  rel="noopener noreferrer"
  className="group block"
>
            <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-32">
              <div className="md:col-span-5">
                <div
                  className="relative overflow-hidden rounded-lg border border-border bg-gradient-to-br from-neutral-950 via-neutral-900 to-red-950/40"
                  style={{ aspectRatio: "3/4" }}
                >
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <p className="eyebrow text-[color:var(--accent-gold)]">
                      Featured Issue
                    </p>
                    <p className="editorial text-3xl italic md:text-5xl">
                      {featured.category}
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7 md:pt-8">
                <p className="eyebrow">{featured.issue}</p>
                <h2 className="editorial mt-6 text-4xl leading-tight transition-colors group-hover:text-[color:var(--accent-gold)] md:text-7xl">
                  {featured.title}
                </h2>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {featured.dek}
                </p>
                <p className="mt-10 eyebrow">
                  {featured.readingTime} read · Read the issue →
                </p>
              </div>
            </div>
            </a>
        </section>
      )}

      <section>
        <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-x-10 gap-y-16 md:grid-cols-3">
            {rest.map((a, i) => (
              <Link
                key={a.slug}
                to="/editorial/$slug"
                params={{ slug: a.slug }}
                className="group block border-t border-border pt-8"
              >
                <div className="flex items-center justify-between">
                  <p className="eyebrow">{a.category}</p>
                  <span className="text-xs text-muted-foreground">
                    N° {String(i + 2).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="editorial mt-6 text-2xl leading-tight transition-colors group-hover:text-[color:var(--accent-gold)] md:text-3xl">
                  {a.title}
                </h3>
                <p className="mt-6 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {a.dek}
                </p>
                <p className="mt-8 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  {a.readingTime} · {a.issue}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
