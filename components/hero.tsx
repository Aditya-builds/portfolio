import { about } from "@/content/about";
import { site, ticker } from "@/content/site";

export function Hero() {
  const loop = [...ticker, ...ticker];

  return (
    <div id="top" tabIndex={-1} className="scroll-mt-24 outline-none">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-5 pb-14 pt-28 md:px-8 md:pb-20 md:pt-36">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
          01 — {site.role}
        </p>
        <h1 className="mt-6 font-serif text-[4.25rem] leading-[0.86] tracking-[-0.045em] sm:text-8xl lg:text-[8.75rem]">
          <span className="block">Aditya</span>
          <span className="block italic">Kumar</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-2xl md:leading-snug">
          {site.pitch}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={site.github}
            className="inline-flex h-11 items-center border border-foreground bg-foreground px-4 text-sm text-background transition-opacity hover:opacity-85"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center border border-line px-4 text-sm transition-colors hover:bg-raised"
          >
            Contact
          </a>
        </div>
        <dl className="mt-16 grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Experience
            </dt>
            <dd className="mt-2 text-sm">About two years</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Degree
            </dt>
            <dd className="mt-2 text-sm">{about.degree}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              GitHub
            </dt>
            <dd className="mt-2 text-sm">
              <a href={site.github} className="underline decoration-line underline-offset-4 hover:decoration-foreground">
                {site.githubHandle}
              </a>
            </dd>
          </div>
        </dl>
      </div>
      <div className="overflow-hidden border-y border-line" aria-hidden="true">
        <div className="marquee-track flex w-max gap-12 py-4 pr-12">
          {loop.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
