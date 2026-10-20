import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>
          {site.name}
          <span aria-hidden="true"> · </span>
          <span>{site.role}</span>
        </p>
        <a
          href={site.github}
          className="underline decoration-line underline-offset-4 hover:decoration-foreground"
        >
          {site.githubHandle}
        </a>
      </div>
    </footer>
  );
}
