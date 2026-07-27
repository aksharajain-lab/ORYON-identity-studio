import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ORYON" },
      {
        name: "description",
        content:
          "ORYON began as an editorial publication. Today we apply editorial thinking to identity, brand and digital design.",
      },
      { property: "og:title", content: "About ORYON" },
      { property: "og:description", content: "The philosophy behind ORYON." },
    ],
  }),
  component: AboutPage,
});

const PRINCIPLES = [
  {
    n: "01",
    title: "Design is communication.",
    body: "Every visual decision tells your audience who you are before they read a single word.",
  },
  {
    n: "02",
    title: "Psychology shapes perception.",
    body: "People rarely remember features. They remember how something made them feel.",
  },
  {
    n: "03",
    title: "Consistency builds trust.",
    body: "Brands aren't remembered because they post more. They're remembered because they feel unmistakably themselves.",
  },
  {
    n: "04",
    title: "Simplicity is powerful.",
    body: "Luxury isn't excess. Luxury is restraint.",
  },
];

const MANIFESTO = [
  "We treat every brand as a subject of study before it becomes a subject of design.",
  "We believe restraint is a form of respect for the reader, the viewer, the customer.",
  "We refuse work that would date within a year.",
  "We write copy that could stand alone without the image, and design that could stand alone without the copy.",
  "We measure our work by how many people remember it, not by how many people see it.",
  "We believe an identity is not a logo. It is a way of being consistent about what you value.",
];

function AboutPage() {
  return (
    <PageShell
      eyebrow="§ About — File N° 002"
      title={
        <>
          A studio built on{" "}
          <em className="gold-italic">observation</em> before ornament.
        </>
      }
      lede="ORYON began as an editorial publication. Not to chase trends, but to study them. Everything we design still begins with the same question we started with: why do certain things stay with us while others disappear?"
    >
      <Section eyebrow="§ 01 — Philosophy" heading="Identity before aesthetics.">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="editorial text-3xl leading-[1.15] md:text-4xl">
              Beautiful design attracts attention. Meaningful design earns trust.
            </p>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-6">
            <p>
              We believe every brand already has a story. Our role isn't to
              invent it—it's to uncover it, refine it, and express it through
              visuals, language, and digital experiences that feel unmistakably
              authentic.
            </p>
            <p>
              Every color, typeface, sentence and interaction exists for a
              reason. Nothing is decorative without purpose.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="§ 02 — Why Identity Matters"
        heading="A business can exist without an identity."
        alt
      >
        <div className="grid gap-10 md:grid-cols-12">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-7">
            <p>
              You can trade, invoice, and grow without one. What you cannot do
              is be remembered. Memory requires a consistent voice, a consistent
              posture, a consistent set of refusals.
            </p>
            <p>
              Identity is the argument your brand makes for its own existence. A
              weak argument produces a weak memory.
            </p>
          </div>
          <div className="md:col-span-5">
            <blockquote className="editorial text-3xl italic leading-tight text-[color:var(--accent-gold)] md:text-4xl">
              "A memorable one cannot."
            </blockquote>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="§ 03 — Our Vision"
        heading="Editorial thinking, applied to identity."
      >
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          We are building a small, opinionated studio that treats brand work
          the way a serious magazine treats a feature story—researched, argued,
          edited, and set with intention. We would rather ship one project a
          quarter that is remembered than twelve that are forgotten.
        </p>
      </Section>

      <Section
        eyebrow="§ 04 — What We Believe"
        heading="Four principles, held closely."
        alt
      >
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <div
              key={p.n}
              className="group bg-surface p-10 transition-colors hover:bg-surface-2 md:p-14"
            >
              <div className="flex items-start justify-between">
                <p className="eyebrow">N° {p.n}</p>
                <span className="h-2 w-2 rounded-full bg-[color:var(--accent-crimson)] opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="editorial mt-8 text-3xl leading-tight md:text-4xl">
                {p.title}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="§ 05 — The ORYON Manifesto" heading="The house rules.">
        <ol className="mt-4 divide-y divide-border border-y border-border">
          {MANIFESTO.map((line, i) => (
            <li
              key={i}
              className="group grid grid-cols-[auto_1fr] items-baseline gap-6 py-8 transition-colors hover:bg-surface md:gap-12 md:py-12"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="editorial text-2xl leading-tight md:text-4xl">
                {line}
              </p>
            </li>
          ))}
        </ol>
      </Section>
    </PageShell>
  );
}
