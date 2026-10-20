import { about } from "@/content/about";
import { experience } from "@/content/experience";
import { Section } from "@/components/section";
import { TodoMark } from "@/components/todo-mark";

export function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      label="Experience"
      title="The professional work."
      lede="One role, described only as far as the facts go."
    >
      <ol className="space-y-10">
        {experience.map((entry) => (
          <li key={entry.id} className="border-t border-line pt-6">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-serif text-3xl">{entry.role}</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {entry.period}
              </p>
            </div>
            <p className="mt-3 flex flex-wrap items-center gap-3 text-sm">
              {entry.organization ? (
                entry.organization
              ) : (
                <>
                  <TodoMark />
                  <span>Employer name</span>
                </>
              )}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {entry.summary}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed">
              {entry.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-foreground/50" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li className="border-t border-line pt-6">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="font-serif text-3xl">Education</h3>
          </div>
          <p className="mt-3 text-base">{about.degree}</p>
          {about.school ? (
            <p className="mt-1 text-sm text-muted">{about.school}</p>
          ) : null}
        </li>
      </ol>
    </Section>
  );
}
