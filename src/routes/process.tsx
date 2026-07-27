import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { DossierStrip } from "@/components/site/FormField";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "The ORYON Method — Process" },
      {
        name: "description",
        content:
          "Observe. Decode. Create. Refine. Launch. A five-stage method borrowed from editorial practice.",
      },
      { property: "og:title", content: "The ORYON Method" },
      {
        property: "og:description",
        content: "Our five-stage method for building identities that last.",
      },
    ],
  }),
  component: ProcessPage,
});

const STAGES = [
  {
    code: "I",
    slug: "OBS-01",
    name: "Observe",
    tagline: "Understand the people behind the brand.",
    body: "Every commission begins in silence. We interview, we read, we sit inside your space. Before a single sketch, we build a small ethnography of who you are, who you serve, and what you refuse.",
    notes: [
      "Founder interviews",
      "Team & customer conversations",
      "Environmental audit",
      "Vocabulary collection",
    ],
  },
  {
    code: "II",
    slug: "DEC-02",
    name: "Decode",
    tagline: "Study competitors, audience and positioning.",
    body: "We map the neighbourhood. What do your competitors say? What do they avoid saying? Where is the empty space? Positioning is not invented—it is located.",
    notes: [
      "Competitive landscape",
      "Semiotic study",
      "Audience psychographics",
      "White-space identification",
    ],
  },
  {
    code: "III",
    slug: "CRE-03",
    name: "Create",
    tagline: "Identity. Content. Web experiences. Systems.",
    body: "Only now do we design. Wordmark, typography, palette, voice, layouts, motion. Each artefact answers a question we asked in the first two stages. Nothing is decorative without reason.",
    notes: [
      "Identity system",
      "Editorial voice",
      "Web architecture",
      "Motion language",
    ],
  },
  {
    code: "IV",
    slug: "REF-04",
    name: "Refine",
    tagline: "Every detail serves a purpose.",
    body: "The most important stage, and the one most studios skip. We edit. We remove. We defend the argument against everyone who wants to soften it. What remains is stronger than what we began with.",
    notes: [
      "Editorial reviews",
      "Reduction passes",
      "Consistency audit",
      "Guardrail definition",
    ],
  },
  {
    code: "V",
    slug: "LAU-05",
    name: "Launch",
    tagline: "Create work designed to remain relevant long after trends fade.",
    body: "We deliver, we set the guardrails, we teach your team to hold the line. Then we quietly watch what the work does in the world. Longevity is the only metric that matters.",
    notes: [
      "Production & handoff",
      "Team training",
      "Guidelines & governance",
      "Six-month review",
    ],
  },
];

function ProcessPage() {
  return (
    <PageShell
      eyebrow="§ Process — Classified Dossier N° 006"
      title={
        <>
          The Method.
          <br />
          <em className="gold-italic">Five stages.</em>
        </>
      }
      lede="Not a timeline. A dossier. Every project moves through the same five phases, in the same order, with the same discipline."
    >
      <DossierStrip
        items={[
          { label: "Classification — Internal" },
          { label: "Volume — II" },
          { label: "File — 006 / Method" },
          { label: "Status — Active", align: "right" },
        ]}
      />

      {STAGES.map((s, i) => (
        <section
          key={s.code}
          className={`border-b border-border ${i % 2 === 1 ? "bg-surface" : ""}`}
        >
          <div className="container-editorial py-24 md:py-40">
            <div className="grid gap-16 md:grid-cols-12">
              <div className="md:col-span-4">
                <span className="editorial text-[8rem] leading-none text-[color:var(--accent-crimson)]/40 md:text-[12rem]">
                  {s.code}
                </span>
                <p className="eyebrow mt-6">File Ref — {s.slug}</p>
              </div>

              <div className="md:col-span-5">
                <p className="eyebrow">Stage {i + 1} of 5</p>
                <h2 className="editorial mt-6 text-5xl leading-tight md:text-7xl">
                  {s.name}
                </h2>
                <p className="mt-6 text-xl italic text-[color:var(--accent-gold)]">
                  {s.tagline}
                </p>
                <p className="mt-10 text-lg leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>

              <div className="md:col-span-3">
                <p className="eyebrow mb-6">Contents</p>
                <ul className="space-y-3 border-l border-border pl-6">
                  {s.notes.map((n) => (
                    <li key={n} className="text-sm text-foreground">
                      — {n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {i < STAGES.length - 1 && (
              <div className="mt-24 flex items-center gap-6 text-muted-foreground">
                <span className="eyebrow">Continued →</span>
                <div className="h-px flex-1 bg-border" />
                <span className="eyebrow">
                  {STAGES[i + 1].name} — {STAGES[i + 1].slug}
                </span>
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="container-editorial py-32 md:py-48">
        <p className="editorial text-4xl leading-tight md:text-6xl">
          Every project we take on is a small study.
          <br />
          <em className="gold-italic">This is how we make sure it lasts.</em>
        </p>
      </section>
    </PageShell>
  );
}
