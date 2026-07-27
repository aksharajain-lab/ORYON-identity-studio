export function ProjectCard({
  project,
  index,
  span,
  aspectRatio,
}: {
  project: Project;
  index: number;
  span?: string;
  aspectRatio?: string;
}) {
  const content = (
    <>
      <PlateImage
        tone={project.gallery[0].tone}
        aspectRatio={aspectRatio ?? (index % 2 === 0 ? "4/5" : "3/4")}
      >
        <div className="absolute inset-0 flex flex-col justify-between p-8">
          <div className="flex items-start justify-between">
            <p className="eyebrow">
              N° {String(index + 1).padStart(3, "0")}
            </p>
            <p className="eyebrow">{project.year}</p>
          </div>

          <div>
            <p className="eyebrow text-[color:var(--accent-gold)]">
              {project.category}
            </p>

            <h3 className="editorial mt-3 text-3xl italic leading-tight md:text-4xl">
              {project.client}
            </h3>
          </div>
        </div>
      </PlateImage>

      <div className="mt-6">
        <h4 className="editorial text-xl md:text-2xl">
          {project.title}
        </h4>

        <p className="mt-3 text-sm text-muted-foreground">
          {project.summary}
        </p>
      </div>
    </>
  );

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block ${span ?? ""}`}
      >
        {content}
      </a>
    );
  }

  return (
    <a
    key={p.slug}
    href={p.link ?? `/portfolio/${p.slug}`}
    target={p.link ? "_blank" : undefined}
    rel={p.link ? "noopener noreferrer" : undefined}
    className={`group block ${span}`}
    >
      {content}
    </a>
  );
}