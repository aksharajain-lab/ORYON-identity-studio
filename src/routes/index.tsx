import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { PROJECTS, ARTICLES } from "@/lib/oryon-data";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ORYON — We design for memory" },
      {
        name: "description",
        content:
          "ORYON is an editorial creative studio. Branding, psychology and digital experiences designed to be remembered.",
      },
      { property: "og:title", content: "ORYON — We design for memory" },
      {
        property: "og:description",
        content:
          "An editorial creative studio combining branding, storytelling and digital design.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="noise min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <ShortIntro />
      <FeaturedProjects />
      <FeaturedEditorial />
      <ClosingCTA />
      <Footer />
    </div>
  );
}

function Hero() {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      setPos({
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden pt-32"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, rgba(139,30,45,0.18), transparent 60%), radial-gradient(1200px circle at 80% 20%, rgba(201,177,140,0.06), transparent 55%), var(--background)`,
      }}
    >
      {/* Ambient grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="mx-auto grid h-full max-w-[1600px] grid-cols-12 px-6 md:px-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-foreground last:border-r" />
          ))}
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1600px] gap-16 px-6 pb-20 md:grid-cols-12 md:px-10 md:pb-32">
        <div className="md:col-span-2">
          <p className="eyebrow reveal">Vol. II · Issue 07</p>
          <p
            className="mt-6 text-xs uppercase tracking-[0.24em] text-muted-foreground reveal"
            style={{ animationDelay: "0.1s" }}
          >
            MMXXVI
            <br />
            The Memory Issue
          </p>
        </div>

        <div className="md:col-span-10">
          <h1 className="editorial text-6xl leading-[0.92] md:text-[9.5rem]">
            <span className="mask-in block">We don't design</span>
            <span
              className="mask-in block"
              style={{ animationDelay: "0.3s" }}
            >
              for attention.
            </span>
            <span
              className="mask-in block italic text-[color:var(--accent-gold)]"
              style={{ animationDelay: "0.6s" }}
            >
              We design for memory.
            </span>
          </h1>

          <div
            className="mt-16 grid gap-10 md:grid-cols-12 reveal"
            style={{ animationDelay: "1s" }}
          >
            <p className="text-lg leading-relaxed text-muted-foreground md:col-span-6 md:text-xl">
              ORYON is an editorial creative studio combining branding,
              psychology, storytelling and digital design. A business can exist
              without an identity. A memorable one cannot.
            </p>
            <div className="flex items-end justify-end gap-4 md:col-span-6">
              <Link
                to="/portfolio"
                className="glow-crimson rounded-md border border-border px-6 py-4 text-[11px] uppercase tracking-[0.24em]"
              >
                View the Portfolio
              </Link>
              <Link
                to="/contact"
                className="rounded-md bg-foreground px-6 py-4 text-[11px] uppercase tracking-[0.24em] text-background transition hover:bg-[color:var(--accent-gold)]"
              >
                Commission a study
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-6 md:px-10">
        <span className="eyebrow">Scroll — Enter the archive</span>
        <span className="eyebrow">N° 07</span>
      </div>
    </section>
  );
}

function ShortIntro() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-40">
        <p className="eyebrow md:col-span-3">§ 01 — Introduction</p>
        <div className="md:col-span-9">
          <p className="editorial text-3xl leading-tight md:text-5xl">
            An editorial creative studio that studies brands before it designs
            them. Identity first. Aesthetics second. Everything else,{" "}
            <span className="italic text-[color:var(--accent-gold)]">
              a consequence
            </span>
            .
          </p>
          <div className="mt-12">
            <Link
              to="/about"
              className="rule-hover text-xs uppercase tracking-[0.24em] text-foreground"
            >
              Read the philosophy →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const featured = PROJECTS.slice(0, 3);
  return (
    <section className="border-t border-border bg-[color:var(--surface)]">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-40">
        <div className="flex items-end justify-between border-b border-border pb-8">
          <div>
            <p className="eyebrow">§ 02 — Selected Work</p>
            <h2 className="editorial mt-4 text-4xl md:text-6xl">
              Recent studies.
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="rule-hover hidden text-xs uppercase tracking-[0.24em] md:inline-block"
          >
            All projects →
          </Link>
        </div>

        <div className="mt-16 grid gap-16 md:grid-cols-12">
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              to="/portfolio/$slug"
              params={{ slug: p.slug }}
              className={`group block ${
                i === 0 ? "md:col-span-8" : "md:col-span-4"
              } ${i === 2 ? "md:col-start-9" : ""}`}
            >
              <div
                className={`relative overflow-hidden rounded-lg border border-border bg-gradient-to-br ${p.gallery[0].tone} transition-all duration-700 group-hover:border-[color:var(--accent-crimson)]`}
                style={{ aspectRatio: i === 0 ? "16/10" : "4/5" }}
              >
                <div className="absolute inset-0 flex items-end p-8">
                  <div>
                    <p className="eyebrow">{p.category} · {p.year}</p>
                    <p className="editorial mt-3 text-2xl italic md:text-3xl">
                      {p.client}
                    </p>
                  </div>
                </div>
                <div className="absolute right-6 top-6 h-8 w-8 rounded-full border border-foreground/40 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="mt-6 flex items-start justify-between gap-6">
                <h3 className="editorial text-xl md:text-2xl">{p.title}</h3>
                <span className="mt-1 shrink-0 text-xs text-muted-foreground">
                  N° 0{i + 1}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedEditorial() {
  const featured = ARTICLES.slice(0, 3);
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-40">
        <div className="flex items-end justify-between border-b border-border pb-8">
          <div>
            <p className="eyebrow">§ 03 — The Archive</p>
            <h2 className="editorial mt-4 text-4xl md:text-6xl">
              From the Editorial.
            </h2>
          </div>
          <Link
            to="/editorial"
            className="rule-hover hidden text-xs uppercase tracking-[0.24em] md:inline-block"
          >
            Enter the archive →
          </Link>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-3">
          {featured.map((a, i) => (
            <Link
              key={a.slug}
              to="/editorial/$slug"
              params={{ slug: a.slug }}
              className="group block border-t border-border pt-8"
            >
              <div className="flex items-center justify-between">
                <p className="eyebrow">{a.category}</p>
                <span className="text-xs text-muted-foreground">
                  N° {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="editorial mt-6 text-2xl leading-tight transition-colors group-hover:text-[color:var(--accent-gold)] md:text-3xl">
                {a.title}
              </h3>
              <p className="mt-6 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {a.dek}
              </p>
              <p className="mt-8 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                {a.readingTime} read · {a.issue}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="border-t border-border bg-[color:var(--surface)]">
      <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-10 md:py-48">
        <div className="grid gap-16 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">§ 04 — Commission</p>
          <div className="md:col-span-9">
            <p className="editorial text-4xl leading-[1.02] md:text-7xl">
              If you are building something you'd like to be remembered for,{" "}
              <span className="italic text-[color:var(--accent-gold)]">
                we should talk.
              </span>
            </p>
            <div className="mt-12">
              <Link
                to="/contact"
                className="glow-crimson inline-flex items-center gap-4 rounded-md border border-border px-8 py-5 text-[11px] uppercase tracking-[0.24em]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-crimson)]" />
                Begin correspondence
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
