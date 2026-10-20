import { skills } from "@/content/skills";
import { Section } from "@/components/section";

export function Skills() {
  return (
    <Section
      id="skills"
      index="05"
      label="Skills"
      title="What the work is built with."
      lede="Taken from the job and the repositories, not a wishlist."
    >
      <ul className="grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <li key={group.id} className="border-t border-line pt-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {group.label}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-base">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
