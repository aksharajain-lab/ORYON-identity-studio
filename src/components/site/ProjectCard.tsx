import { Link } from "@tanstack/react-router";
import type { Project } from "@/lib/oryon-data";
import { PlateImage } from "./PlateImage";

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

        {project.footnote && (
          <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[color:var(--accent-gold)] italic">
            {project.footnote}
          </p>
        )}
      </div>
    </>
  );

  const wrapperClass = `group block card-hover ${span ?? ""}`;

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={wrapperClass}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      to="/portfolio/$slug"
      params={{ slug: project.slug }}
      className={wrapperClass}
    >
      {content}
    </Link>
  );
}

/** Alias used by the featured section on the landing page. */
export const ProjectCardFeatured = ProjectCard;
