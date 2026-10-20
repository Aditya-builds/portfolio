import { skills } from "@/content/skills";
import { Section } from "@/components/section";

export function Skills() {
  return (
    <Section
      id="skills"
      index="05"
      label="Skills"
      title="The toolkit."
      lede="Languages and tools from the job and the public repositories."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <li key={group.id} className="border border-line bg-raised p-5">
            <h3 className="font-mono text-sm text-muted">
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
