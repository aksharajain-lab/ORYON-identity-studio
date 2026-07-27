import { Link } from "@tanstack/react-router";
import type { Article } from "@/lib/oryon-data";

export function ArticleCard({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  const content = (
    <>
      <div className="flex items-center justify-between">
        <p className="eyebrow">{article.category}</p>
        <span className="text-xs text-muted-foreground">
          N° {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="editorial mt-6 text-2xl leading-tight transition-colors group-hover:text-[color:var(--accent-gold)] md:text-3xl">
        {article.title}
      </h3>
      <p className="mt-6 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
        {article.dek}
      </p>
      <p className="mt-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
        {article.comingSoon ? (
          <span className="text-[color:var(--accent-gold)] font-semibold">
            Coming Soon
          </span>
        ) : (
          <>
            {article.readingTime} read · {article.issue}
          </>
        )}
      </p>
    </>
  );

  if (article.comingSoon) {
    return (
      <div className="block border-t border-border pt-8 opacity-70">
        {content}
      </div>
    );
  }

  return (
    <Link
      to="/editorial/$slug"
      params={{ slug: article.slug }}
      className="group block border-t border-border pt-8"
    >
      {content}
    </Link>
  );
}
