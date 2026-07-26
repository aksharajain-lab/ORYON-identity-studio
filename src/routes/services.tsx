import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ORYON" },
      {
        name: "description",
        content:
          "Brand identity, editorial social media, content strategy, website design, campaigns and creative direction.",
      },
      { property: "og:title", content: "Services — ORYON" },
      {
        property: "og:description",
        content: "Premium offerings in identity, editorial and digital design.",
      },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    n: "01",
    name: "Brand Identity",
    tagline: "The argument your business makes for its own existence.",
    body: "A complete identity system: name, wordmark, typography, palette, voice, principles and usage. Not a logo package. A way of being consistent about what you value.",
    deliverables: [
      "Positioning & voice",
      "Wordmark & monogram",
      "Typographic system",
      "Palette & materials",
      "Brand book & guardrails",
    ],
  },
  {
    n: "02",
    name: "Editorial Social Media",
    tagline: "Instagram, treated the way a magazine treats its cover.",
    body: "We design a monthly editorial calendar of carousels, features and studies. Each post is a small, complete argument—typeset, paced, footnoted.",
    deliverables: [
      "Monthly issue calendar",
      "Editorial carousels",
      "Feature articles",
      "Cover systems",
      "Long-form captions",
    ],
  },
  {
    n: "03",
    name: "Content Strategy",
    tagline: "A publishing plan, not a posting plan.",
    body: "We define what your brand should be known for, in what tone, on what cadence, and to whom. Then we build the systems that keep it consistent for a decade, not a quarter.",
    deliverables: [
      "Editorial pillars",
      "Voice & tone guide",
      "Publishing rhythm",
      "Campaign architecture",
      "Content governance",
    ],
  },
  {
    n: "04",
    name: "Website Design",
    tagline: "Slow, editorial, deliberate — designed to be visited.",
    body: "We design and build websites that read like publications. Every interaction is paced. Every page has a thesis. Every visit ends somewhere the visitor did not expect to arrive.",
    deliverables: [
      "Editorial site architecture",
      "Typographic web system",
      "Motion & transitions",
      "CMS & handoff",
      "SEO & performance",
    ],
  },
  {
    n: "05",
    name: "Promotional Campaigns",
    tagline: "Restraint, deployed at scale.",
    body: "Campaigns for launches, seasons, and single moments. Concept, art direction, copy, and production—delivered as a coherent world, not a set of assets.",
    deliverables: [
      "Campaign concept",
      "Art direction",
      "Copy & voice",
      "Motion & stills",
      "Rollout planning",
    ],
  },
  {
    n: "06",
    name: "Creative Direction",
    tagline: "An external editor-in-chief for the studio you already have.",
    body: "For teams with in-house designers who need a point of view. We hold the vision, edit the work, and refuse the compromises that would blur it.",
    deliverables: [
      "Ongoing direction",
      "Weekly editorial reviews",
      "Voice enforcement",
      "Talent recommendations",
      "Portfolio curation",
    ],
  },
];

function ServicesPage() {
  return (
    <PageShell
      eyebrow="§ Services — File N° 003"
      title={
        <>
          Six offerings.<br />
          <em className="italic text-[color:var(--accent-gold)]">
            One method.
          </em>
        </>
      }
      lede="We do not sell packages. Each engagement is a small commission—researched, argued and produced with the same care an editor brings to a cover story."
    >
      <div className="border-t border-border">
        {SERVICES.map((s, i) => (
          <article
            key={s.n}
            className={`border-b border-border ${
              i % 2 === 1 ? "bg-[color:var(--surface)]" : ""
            }`}
          >
            <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-32">
              <div className="grid gap-16 md:grid-cols-12">
                <div className="md:col-span-4">
                  <p className="eyebrow">Service N° {s.n}</p>
                  <h2 className="editorial mt-6 text-4xl leading-tight md:text-6xl">
                    {s.name}
                  </h2>
                  <p className="mt-6 max-w-sm text-base italic leading-relaxed text-[color:var(--accent-gold)]">
                    {s.tagline}
                  </p>
                </div>

                <div className="md:col-span-4">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>

                <div className="md:col-span-4">
                  <p className="eyebrow mb-6">Included</p>
                  <ul className="space-y-3 border-l border-border pl-6">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-baseline gap-3 text-sm text-foreground"
                      >
                        <span className="text-[color:var(--accent-crimson)]">
                          ✦
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="mx-auto max-w-[1600px] px-6 py-32 md:px-10 md:py-48">
        <div className="grid gap-16 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">§ Enquire</p>
          <div className="md:col-span-9">
            <p className="editorial text-4xl leading-tight md:text-6xl">
              Every engagement begins with a single conversation. There is no
              intake form worth the words that come out of it.
            </p>
            <Link
              to="/contact"
              className="glow-crimson mt-12 inline-flex items-center gap-4 rounded-md border border-border px-8 py-5 text-[11px] uppercase tracking-[0.24em]"
            >
              Request a conversation
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
