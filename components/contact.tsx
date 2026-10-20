import { site } from "@/content/site";
import { Section } from "@/components/section";

type ContactRow = {
  id: string;
  label: string;
  value: string;
  href: string | null;
};

function rows(): ContactRow[] {
  return [
    {
      id: "email",
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: site.linkedin
        ? site.linkedin.replace(/^https?:\/\/(?:www\.)?/, "")
        : "Available on request",
      href: site.linkedin,
    },
    {
      id: "resume",
      label: "Resume",
      value: site.resumeHref ? "Download PDF" : "Available on request",
      href: site.resumeHref,
    },
    {
      id: "github",
      label: "GitHub",
      value: site.githubHandle,
      href: site.github,
    },
  ];
}

export function Contact() {
  return (
    <Section
      id="contact"
      index="07"
      label="Contact"
      title="Reach me."
      lede="Email and LinkedIn are the direct paths. A resume is available on request."
    >
      <ul className="divide-y divide-line border-y border-line">
        {rows().map((row) => (
          <li key={row.id} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-5">
            <p className="font-mono text-sm text-muted">{row.label}</p>
            {row.href ? (
              <a
                href={row.href}
                className="min-w-0 break-all text-base text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
              >
                {row.value}
              </a>
            ) : (
              <p className="min-w-0 break-words text-base">{row.value}</p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
