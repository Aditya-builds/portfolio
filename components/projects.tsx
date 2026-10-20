import type { ProjectView } from "@/content/types";
import { formatIndex } from "@/lib/format";
import { ProjectVisual } from "@/components/project-visual";
import { Section } from "@/components/section";

function ProjectCard({
  project,
  index,
}: {
  project: ProjectView;
  index: number;
}) {
  return (
    <li id={`project-${project.id}`} className="min-w-0 outline-none" tabIndex={-1}>
      <article className="min-w-0 overflow-hidden border border-line bg-raised">
        <ProjectVisual id={project.id} />
        <div className="p-5 md:p-6">
          <p className="font-mono text-sm text-muted">
            {formatIndex(index)}
            <span> · {project.role}</span>
            {project.year ? <span> · {project.year}</span> : null}
            {project.status === "private" ? <span> · Private</span> : null}
          </p>
          <h3 className="mt-2 text-[1.75rem] tracking-[-0.03em]">{project.name}</h3>
          <p className="mt-3 text-lg leading-[1.65]">{project.outcome}</p>
          <p className="mt-3 text-base leading-[1.65] text-muted">{project.summary}</p>
          {project.stack.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.name} stack`}>
              {project.stack.map((item) => (
                <li
                  key={item}
                  className="border border-line bg-background px-2.5 py-1 font-mono text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            {project.href ? (
              <a
                href={project.href}
                className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
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
                className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
              >
                Live
                <span className="sr-only"> site for {project.name}</span>
              </a>
            ) : null}
            {project.updatedLabel ? (
              <p className="font-mono text-sm text-muted">Updated {project.updatedLabel}</p>
            ) : null}
            {project.stars !== null && project.stars > 0 ? (
              <p className="font-mono text-sm text-muted">
                {project.stars} {project.stars === 1 ? "star" : "stars"}
              </p>
            ) : null}
          </div>
        </div>
      </article>
    </li>
  );
}

export function Projects({
  projects,
  statsLabel,
}: {
  projects: ProjectView[];
  statsLabel: string | null;
}) {
  return (
    <Section
      id="projects"
      index="04"
      label="Projects"
      title="Selected work."
      lede="Five builds. Outcome first, then how each one is put together."
    >
      <p className="font-mono text-sm text-muted">
        {statsLabel
          ? `GitHub stats updated ${statsLabel}. If a refresh fails, this date stays on the last good snapshot.`
          : "GitHub stats are unavailable. The descriptions below are unchanged."}
      </p>
      <ol className="mt-6 space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index + 1} />
        ))}
      </ol>
      <p className="mt-6 text-base leading-[1.65] text-muted">
        More repositories, including smaller exercises, are on{" "}
        <a
          href="https://github.com/Aditya-builds?tab=repositories"
          className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
        >
          GitHub
        </a>
        .
      </p>
    </Section>
  );
}
