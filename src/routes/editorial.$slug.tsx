import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ARTICLES } from "@/lib/oryon-data";

export const Route = createFileRoute("/editorial/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.article.title} — ORYON`
          : "Article — ORYON",
      },
      {
        name: "description",
        content: loaderData?.article.dek ?? "An ORYON editorial.",
      },
      {
        property: "og:title",
        content: loaderData
          ? `${loaderData.article.title} — ORYON`
          : "Article — ORYON",
      },
      {
        property: "og:description",
        content: loaderData?.article.dek ?? "An ORYON editorial.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: ArticleDetail,
});

function ArticleDetail() {
  const { article } = Route.useLoaderData();
  const idx = ARTICLES.findIndex((a) => a.slug === article.slug);
  const next = ARTICLES[(idx + 1) % ARTICLES.length];

  return (
    <PageShell>
      <section className="mx-auto max-w-[900px] px-6 md:px-10">
        <Link to="/editorial" className="eyebrow rule-hover mb-10 inline-block">
          ← Editorial
        </Link>
        <p className="eyebrow">
          {article.category} · {article.issue}
        </p>
        <h1 className="editorial reveal mt-8 text-4xl leading-[1.02] md:text-7xl">
          {article.title}
        </h1>
        <p
          className="reveal mt-10 text-xl leading-relaxed text-muted-foreground md:text-2xl"
          style={{ animationDelay: "0.15s" }}
          data-lovable-lede
        >
          {article.dek}
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-y border-border py-6">
          <p className="eyebrow">Estimated read — {article.readingTime}</p>
          <p className="eyebrow">By the Editors</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1200px] gap-16 px-6 py-20 md:grid-cols-[220px_minmax(0,1fr)] md:px-10 md:py-32">
        <aside className="hidden md:block">
          <div className="sticky top-32">
            <p className="eyebrow mb-6">Chapters</p>
            <ol className="space-y-3">
              {article.chapters.map((c, i) => (
                <li key={i}>
                  <a
                    href={`#ch-${i}`}
                    className="rule-hover text-sm text-muted-foreground hover:text-foreground"
                  >
                    {c.heading}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <article className="max-w-[720px]">
          {article.chapters.map((c, i) => (
            <section key={i} id={`ch-${i}`} className="mb-20 last:mb-0">
              <p className="eyebrow mb-6">Chapter {String(i + 1).padStart(2, "0")}</p>
              <h2 className="editorial mb-10 text-3xl leading-tight md:text-5xl">
                {c.heading}
              </h2>
              <div className="space-y-6 text-lg leading-[1.8] text-foreground/90 md:text-xl">
                {c.body.map((p, j) => (
                  <p
                    key={j}
                    className={j === 0 ? "first-letter:editorial first-letter:mr-3 first-letter:float-left first-letter:text-7xl first-letter:leading-[0.85] first-letter:text-[color:var(--accent-gold)]" : ""}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <div className="mt-24 border-t border-border pt-10 text-center">
            <p className="editorial text-2xl italic md:text-3xl">
              — Fin —
            </p>
            <p className="mt-4 eyebrow">
              Filed under {article.category}
            </p>
          </div>
        </article>
      </section>

      <section className="border-t border-border bg-[color:var(--surface)]">
        <Link
          to="/editorial/$slug"
          params={{ slug: next.slug }}
          className="group block"
        >
          <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-10 md:py-24">
            <div>
              <p className="eyebrow">Next entry →</p>
              <p className="editorial mt-4 text-3xl transition-colors group-hover:text-[color:var(--accent-gold)] md:text-5xl">
                {next.title}
              </p>
            </div>
            <p className="eyebrow">{next.readingTime} read</p>
          </div>
        </Link>
      </section>
    </PageShell>
  );
}
