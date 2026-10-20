import { site } from "@/content/site";

export function Hero() {
  return (
    <div id="top" tabIndex={-1} className="outline-none">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
        <p className="font-mono text-sm text-muted">01 — {site.role}</p>
        <h1 className="mt-4 max-w-4xl text-5xl tracking-[-0.03em] text-balance sm:text-6xl">
          {site.name}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-[1.65] text-muted">
          {site.pitch}
        </p>
        <a
          href="#projects"
          className="mt-8 inline-flex h-11 w-fit items-center bg-accent px-5 text-base text-background transition-opacity hover:opacity-90"
        >
          View work
        </a>
      </div>
    </div>
  );
}
