import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PROJECTS } from "@/lib/oryon-data";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.project.client} — ORYON Portfolio`
          : "Project — ORYON",
      },
      {
        name: "description",
        content: loaderData?.project.summary ?? "An ORYON commission.",
      },
      {
        property: "og:title",
        content: loaderData
          ? `${loaderData.project.client} — ORYON`
          : "Project — ORYON",
      },
      {
        property: "og:description",
        content: loaderData?.project.summary ?? "An ORYON commission.",
      },
    ],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: (typeof import("@/lib/oryon-data").PROJECTS)[number] };
  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <PageShell>
      {/* Cover */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid gap-10 pb-16 md:grid-cols-12 md:pb-20">
            <div className="md:col-span-8">
              <Link
                to="/portfolio"
                className="eyebrow rule-hover mb-10 inline-block"
              >
                ← Portfolio
              </Link>
              <p className="eyebrow">
                {project.category} · {project.year} · {project.client}
              </p>
              <h1 className="editorial reveal mt-6 text-4xl leading-[0.98] md:text-8xl">
                {project.title}
              </h1>
              <p
                className="reveal mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
                style={{ animationDelay: "0.15s" }}
              >
                {project.summary}
              </p>
            </div>
            <aside className="md:col-span-4">
              <dl className="space-y-6 border-l border-border pl-6">
                <Meta k="Client" v={project.client} />
                <Meta k="Discipline" v={project.category} />
                <Meta k="Year" v={project.year} />
                <Meta k="Status" v="Delivered" />
              </dl>
            </aside>
          </div>

          <div
            className={`mask-in relative overflow-hidden rounded-lg border border-border bg-gradient-to-br ${project.gallery[0].tone}`}
            style={{ aspectRatio: "16/9" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="editorial text-6xl italic md:text-8xl">
                {project.client}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Objective */}
      <section className="border-b border-border bg-[color:var(--surface)]">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-6">
            <p className="eyebrow">§ Overview</p>
            <p className="editorial mt-6 text-2xl leading-relaxed md:text-3xl">
              {project.overview}
            </p>
          </div>
          <div className="md:col-span-6">
            <p className="eyebrow">§ Objective</p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {project.objective}
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
          <p className="eyebrow">§ Design Process</p>
          <h2 className="editorial mt-6 text-3xl md:text-6xl">
            How it was made.
          </h2>
          <ol className="mt-16 divide-y divide-border border-y border-border">
            {project.process.map((step, i) => (
              <li
                key={i}
                className="grid grid-cols-[auto_1fr] items-baseline gap-8 py-10 md:gap-16"
              >
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--accent-gold)]">
                  Step 0{i + 1}
                </span>
                <p className="editorial text-2xl leading-tight md:text-3xl">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-b border-border bg-[color:var(--surface)]">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
          <p className="eyebrow">§ Visual Gallery</p>
          <h2 className="editorial mt-6 text-3xl md:text-6xl">Selected plates.</h2>
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {project.gallery.map((g, i) => (
              <figure
                key={i}
                className={`${i === 0 ? "md:col-span-2" : ""} group`}
              >
                <div
                  className={`relative overflow-hidden rounded-lg border border-border bg-gradient-to-br ${g.tone}`}
                  style={{ aspectRatio: i === 0 ? "21/9" : "4/3" }}
                >
                  <div className="absolute inset-0 flex items-end p-8">
                    <p className="editorial text-2xl italic md:text-5xl">
                      Plate {String(i + 1).padStart(2, "0")}
                    </p>
                  </div>
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-6">
                  <p className="text-sm text-foreground">{g.label}</p>
                  <p className="text-xs text-muted-foreground">{g.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-40">
          <div className="grid gap-16 md:grid-cols-12">
            <p className="eyebrow md:col-span-3">§ Final Result</p>
            <p className="editorial md:col-span-9 text-2xl leading-tight md:text-5xl">
              {project.result}
            </p>
          </div>
        </div>
      </section>

      {/* Next */}
      <section className="bg-[color:var(--surface)]">
        <Link
          to="/portfolio/$slug"
          params={{ slug: next.slug }}
          className="group block"
        >
          <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-10 md:py-24">
            <div>
              <p className="eyebrow">Next commission →</p>
              <p className="editorial mt-4 text-3xl transition-colors group-hover:text-[color:var(--accent-gold)] md:text-6xl">
                {next.title}
              </p>
            </div>
            <p className="eyebrow">
              {next.category} · {next.year}
            </p>
          </div>
        </Link>
      </section>
    </PageShell>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
        {k}
      </dt>
      <dd className="mt-1 text-base text-foreground">{v}</dd>
    </div>
  );
}
