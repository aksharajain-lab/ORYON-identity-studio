import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { PROJECTS, CATEGORIES } from "@/lib/oryon-data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — ORYON" },
      {
        name: "description",
        content:
          "Selected work from ORYON: identity, web design, editorial and social studies.",
      },
      { property: "og:title", content: "Portfolio — ORYON" },
      {
        property: "og:description",
        content: "Selected commissions across identity, editorial and digital.",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const filtered =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <PageShell
      eyebrow="§ Portfolio — File N° 004"
      title={
        <>
          Commissions,<br />
          <em className="italic text-[color:var(--accent-gold)]">
            catalogued.
          </em>
        </>
      }
      lede="A working index of studies made for clients who wanted to be understood before they were designed."
    >
      <div className="border-y border-border bg-[color:var(--surface)]">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-2 px-6 py-6 md:gap-4 md:px-10">
          <span className="eyebrow mr-4">Filter —</span>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors ${
                filter === c
                  ? "border-[color:var(--accent-gold)] bg-[color:var(--accent-gold)] text-background"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "entry" : "entries"}
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-x-10 gap-y-20 md:grid-cols-12">
        {filtered.map((p, i) => {
  const span =
    i % 5 === 0
      ? "md:col-span-8"
      : i % 5 === 1
        ? "md:col-span-4"
        : i % 5 === 2
          ? "md:col-span-5"
          : i % 5 === 3
            ? "md:col-span-7"
            : "md:col-span-6";

  const content = (
    <>
      <div
        className={`relative overflow-hidden rounded-lg border border-border bg-gradient-to-br ${p.gallery[0].tone} transition-all duration-700 group-hover:border-[color:var(--accent-crimson)]`}
        style={{ aspectRatio: i % 2 === 0 ? "4/5" : "3/4" }}
      >
        <div className="absolute inset-0 flex flex-col justify-between p-8">
          <div className="flex items-start justify-between">
            <p className="eyebrow">
              N° {String(i + 1).padStart(3, "0")}
            </p>
            <p className="eyebrow">{p.year}</p>
          </div>

          <div>
            <p className="eyebrow text-[color:var(--accent-gold)]">
              {p.category}
            </p>

            <h3 className="editorial mt-3 text-3xl italic leading-tight md:text-4xl">
              {p.client}
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="editorial text-xl md:text-2xl">
          {p.title}
        </h4>

        <p className="mt-3 text-sm text-muted-foreground">
          {p.summary}
        </p>

        {p.footnote && (
          <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[color:var(--accent-gold)] italic">
            {p.footnote}
          </p>
        )}
      </div>
    </>
  );

  const wrapperClass = `group block card-hover ${span}`;

  return p.link ? (
    <a
      key={p.slug}
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      className={wrapperClass}
    >
      {content}
    </a>
  ) : (
    <Link
      key={p.slug}
      to="/portfolio/$slug"
      params={{ slug: p.slug }}
      className={wrapperClass}
    >
      {content}
    </Link>
  );
})}
        </div>
      </div>
    </PageShell>
  );
}
