import { about } from "@/content/about";
import { Section } from "@/components/section";

export function About() {
  return (
    <Section
      id="about"
      index="02"
      label="About"
      title={about.title}
      lede={about.lede}
    >
      <div className="space-y-5 text-base leading-relaxed text-foreground/90 md:text-lg">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <ul className="mt-10 flex flex-wrap gap-2" aria-label="Roles of interest">
        {about.focus.map((item) => (
          <li
            key={item}
            className="border border-line px-3 py-1.5 text-sm text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
