import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 text-sm leading-[1.65] sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p className="text-muted">
          {site.name}
          <span aria-hidden="true"> · </span>
          {site.role}
        </p>
        <nav aria-label="Contact links" className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            href={`mailto:${site.email}`}
            className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
          >
            Email
          </a>
          <a
            href={site.github}
            className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
          >
            GitHub
          </a>
          {site.linkedin ? (
            <a
              href={site.linkedin}
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              LinkedIn
            </a>
          ) : null}
          {site.resumeHref ? (
            <a
              href={site.resumeHref}
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              Resume
            </a>
          ) : null}
          <a
            href="#contact"
            className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
