import { site } from "@/content/site";
import { Section } from "@/components/section";
import { TodoMark } from "@/components/todo-mark";

type ContactRow = {
  id: string;
  label: string;
  value: string;
  href: string | null;
  todo: boolean;
};

function rows(): ContactRow[] {
  return [
    {
      id: "github",
      label: "GitHub",
      value: site.githubHandle,
      href: site.github,
      todo: false,
    },
    {
      id: "email",
      label: "Email",
      value: site.email ?? "To be added",
      href: site.email ? `mailto:${site.email}` : null,
      todo: !site.email,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: site.linkedin ? site.linkedin.replace(/^https?:\/\//, "") : "To be added",
      href: site.linkedin,
      todo: !site.linkedin,
    },
    {
      id: "resume",
      label: "Resume PDF",
      value: site.resumeHref ? "Download" : "To be added",
      href: site.resumeHref,
      todo: !site.resumeHref,
    },
  ];
}

export function Contact() {
  return (
    <Section
      id="contact"
      index="07"
      label="Contact"
      title="GitHub is the public inbox."
      lede="Email, LinkedIn, and a resume PDF are marked until they exist."
    >
      <ul className="divide-y divide-line border-y border-line">
        {rows().map((row) => (
          <li key={row.id} className="flex flex-wrap items-center justify-between gap-3 py-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {row.label}
            </p>
            {row.href ? (
              <a
                href={row.href}
                className="text-base underline decoration-line underline-offset-4 hover:decoration-foreground"
              >
                {row.value}
              </a>
            ) : (
              <p className="flex items-center gap-3 text-base">
                {row.todo ? <TodoMark /> : null}
                <span>{row.value}</span>
              </p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
