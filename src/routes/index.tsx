import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTASection } from "@/components/site/CTASection";
import { ButtonLink } from "@/components/site/ButtonLink";
import { useInView } from "@/hooks/use-in-view";

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
      <ServicesPreview />
      <MethodPreview />
      <CTASection
        eyebrow="§ 06 — Commission"
        headline={
          <>
            If you are building something you'd like to be remembered for,{" "}
            <span className="gold-italic">we should talk.</span>
          </>
        }
      />
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
        background: `radial-gradient(500px circle at ${pos.x}% ${pos.y}%, color-mix(in oklab, var(--accent-crimson) 14%, transparent), transparent 65%), radial-gradient(900px circle at 85% 15%, color-mix(in oklab, var(--accent-gold) 5%, transparent), transparent 55%), var(--background)`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="container-editorial grid h-full grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-foreground last:border-r" />
          ))}
        </div>
      </div>

      <div className="container-editorial grid w-full gap-16 pb-20 md:grid-cols-12 md:pb-32">
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
            <span className="mask-in block" style={{ animationDelay: "0.3s" }}>
              for attention.
            </span>
            <span
              className="mask-in block gold-italic"
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
              <ButtonLink to="/portfolio" variant="outline">
                View the Portfolio
              </ButtonLink>
              <ButtonLink to="/contact" variant="solid">
                Commission a study
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between container-editorial">
        <span className="eyebrow">Scroll — Enter the archive</span>
        <span className="eyebrow">N° 07</span>
      </div>
    </section>
  );
}

function ShortIntro() {
  const { ref, visible } = useInView();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="section-rule">
      <div className="container-editorial grid gap-12 py-24 md:grid-cols-12 md:py-40">
        <p className={`eyebrow md:col-span-3 in-view ${visible ? "visible" : ""}`}>
          § 01 — Introduction
        </p>
        <div className={`md:col-span-9 in-view stagger-1 ${visible ? "visible" : ""}`}>
          <p className="editorial text-3xl leading-tight md:text-5xl">
            An editorial creative studio that studies brands before it designs
            them. Identity first. Aesthetics second. Everything else,{" "}
            <span className="gold-italic">a consequence</span>.
          </p>
          <div className="mt-12">
            <ButtonLink to="/about" variant="ghost">
              Read the philosophy →
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES_PREVIEW = [
  { n: "01", name: "Brand Identity", to: "/services" as const },
  { n: "02", name: "Editorial Social", to: "/services" as const },
  { n: "03", name: "Content Strategy", to: "/services" as const },
  { n: "04", name: "Website Design", to: "/services" as const },
  { n: "05", name: "Campaigns", to: "/services" as const },
  { n: "06", name: "Creative Direction", to: "/services" as const },
];

function ServicesPreview() {
  const { ref, visible } = useInView();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="section-rule bg-surface">
      <div className="container-editorial py-24 md:py-40">
        <div className={`in-view flex items-end justify-between border-b border-border pb-8 ${visible ? "visible" : ""}`}>
          <div>
            <p className="eyebrow">§ 02 — Offerings</p>
            <h2 className="editorial mt-4 text-4xl md:text-6xl">What we do.</h2>
          </div>
          <ButtonLink to="/services" variant="ghost" className="hidden md:inline-flex">
            All services →
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {SERVICES_PREVIEW.map((s, i) => (
            <Link
              key={s.n}
              to={s.to}
              className={`in-view group bg-surface p-8 transition-colors hover:bg-surface-2 md:p-10 stagger-${Math.min(i + 1, 4)} ${visible ? "visible" : ""}`}
            >
              <p className="eyebrow">N° {s.n}</p>
              <h3 className="editorial mt-4 text-2xl transition-colors group-hover:text-[color:var(--accent-gold)] md:text-3xl">
                {s.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const METHOD_STAGES = [
  { code: "I", name: "Observe" },
  { code: "II", name: "Decode" },
  { code: "III", name: "Create" },
  { code: "IV", name: "Refine" },
  { code: "V", name: "Launch" },
];

function MethodPreview() {
  const { ref, visible } = useInView();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="section-rule bg-surface">
      <div className="container-editorial py-24 md:py-40">
        <div className={`in-view grid gap-16 md:grid-cols-12 ${visible ? "visible" : ""}`}>
          <div className="md:col-span-4">
            <p className="eyebrow">§ 04 — The Method</p>
            <h2 className="editorial mt-4 text-4xl md:text-6xl">
              Five stages.<br />
              <span className="gold-italic">One discipline.</span>
            </h2>
            <div className="mt-10">
              <ButtonLink to="/process" variant="ghost">
                Read the dossier →
              </ButtonLink>
            </div>
          </div>

          <div className="md:col-span-8">
            <ol className="divide-y divide-border border-y border-border">
              {METHOD_STAGES.map((s, i) => (
                <li
                  key={s.code}
                  className={`in-view group grid grid-cols-[auto_1fr] items-baseline gap-6 py-8 transition-colors hover:bg-background/40 md:gap-12 md:py-10 stagger-${Math.min(i + 1, 4)} ${visible ? "visible" : ""}`}
                >
                  <span className="editorial text-4xl text-[color:var(--accent-crimson)]/50 md:text-5xl">
                    {s.code}
                  </span>
                  <p className="editorial text-2xl transition-colors group-hover:text-[color:var(--accent-gold)] md:text-4xl">
                    {s.name}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}


