import type { ProjectView } from "@/content/types";
import { formatIndex } from "@/lib/format";
import { Section } from "@/components/section";

function statusLabel(status: ProjectView["status"]): string | null {
  if (status === "private") return "Private";
  if (status === "sketch") return "Early";
  return null;
}

function ProjectRow({
  project,
  index,
}: {
  project: ProjectView;
  index: number;
}) {
  const badge = statusLabel(project.status);

  return (
    <li id={`project-${project.id}`} className="scroll-mt-28 outline-none" tabIndex={-1}>
      <article className="group py-7 transition-colors hover:bg-raised/80">
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {formatIndex(index)}
            {project.year ? <span> · {project.year}</span> : null}
          </p>
          {badge ? (
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              {badge}
            </p>
          ) : null}
        </div>
        <h3 className="mt-3 font-serif text-3xl tracking-[-0.03em] md:text-4xl">
          {project.name}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          {project.stack.length > 0 ? (
            <p className="text-foreground/80">{project.stack.join(" · ")}</p>
          ) : null}
          {project.primaryLanguage &&
          !project.stack.some(
            (item) => item.toLowerCase() === project.primaryLanguage?.toLowerCase(),
          ) ? (
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {project.primaryLanguage}
            </p>
          ) : null}
          {project.updatedLabel ? (
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              Updated {project.updatedLabel}
            </p>
          ) : null}
          {project.stars !== null && project.stars > 0 ? (
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {project.stars} {project.stars === 1 ? "star" : "stars"}
            </p>
          ) : null}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          {project.href ? (
            <a
              href={project.href}
              className="underline decoration-line underline-offset-4 transition-colors hover:decoration-foreground"
            >
              GitHub
              <span className="sr-only">: {project.name}</span>
            </a>
          ) : (
            <p className="text-muted">No public link</p>
          )}
          {project.homepage ? (
            <a
              href={project.homepage}
              className="underline decoration-line underline-offset-4 transition-colors hover:decoration-foreground"
            >
              Live
              <span className="sr-only"> site for {project.name}</span>
            </a>
          ) : null}
        </div>
      </article>
    </li>
  );
}

export function Projects({ projects }: { projects: ProjectView[] }) {
  const featured = projects.filter((project) => project.featured);
  const early = projects.filter((project) => !project.featured);

  return (
    <Section
      id="projects"
      index="04"
      label="Projects"
      title="Selected work."
      lede="Descriptions come from the repositories themselves. Stats refresh from GitHub at build time."
    >
      <ol className="-my-7 divide-y divide-line">
        {featured.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index + 1} />
        ))}
      </ol>
      {early.length > 0 ? (
        <div className="mt-12">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Early and empty repositories
          </h3>
          <ol className="mt-2 divide-y divide-line border-t border-line">
            {early.map((project, index) => (
              <ProjectRow
                key={project.id}
                project={project}
                index={featured.length + index + 1}
              />
            ))}
          </ol>
        </div>
      ) : null}
    </Section>
  );
}
