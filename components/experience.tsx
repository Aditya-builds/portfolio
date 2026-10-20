import { about } from "@/content/about";
import { experience } from "@/content/experience";
import { Section } from "@/components/section";

export function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      label="Experience"
      title="One role."
      lede="Language-model features inside a Java product that already existed."
    >
      <ol className="space-y-8">
        {experience.map((entry) => (
          <li key={entry.id} className="border border-line bg-raised p-5 md:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-[1.75rem] tracking-[-0.03em]">{entry.role}</h3>
              <p className="font-mono text-sm text-muted">{entry.period}</p>
            </div>
            <p className="mt-2 text-base">Employer: {entry.organization}</p>
            <p className="mt-4 text-base leading-[1.65] text-muted">{entry.summary}</p>
            <ul className="mt-4 space-y-2 text-base leading-[1.65]">
              {entry.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li className="border border-line bg-raised p-5 md:p-6">
          <h3 className="text-[1.75rem] tracking-[-0.03em]">Education</h3>
          <p className="mt-3 text-base leading-[1.65]">{about.degree}</p>
          {about.school ? <p className="mt-1 text-base text-muted">{about.school}</p> : null}
        </li>
      </ol>
    </Section>
  );
}
