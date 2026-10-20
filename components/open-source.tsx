import { achievements, contributions, gsoc } from "@/content/open-source";
import { Section } from "@/components/section";

function EmptyState({ children }: { children: string }) {
  return (
    <p className="border border-dashed border-line px-5 py-8 text-sm leading-relaxed text-muted">
      {children}
    </p>
  );
}

export function OpenSource() {
  return (
    <Section
      id="open-source"
      index="06"
      label="Open source"
      title="Nothing accepted yet."
      lede="Contributions and achievements stay empty until there is something real to put here."
    >
      <article className="border-t border-line pt-6" aria-labelledby="gsoc-title">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 id="gsoc-title" className="font-serif text-3xl">
            {gsoc.program} {gsoc.year}
          </h3>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {gsoc.statusLabel}
          </p>
        </div>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{gsoc.summary}</p>
        <ol className="mt-6 space-y-4">
          {gsoc.steps.map((step, index) => (
            <li key={step.id} className="grid grid-cols-[auto_1fr] gap-4">
              <span
                className={`mt-1 flex h-6 w-6 items-center justify-center rounded-full border text-[11px] ${
                  step.done
                    ? "border-foreground bg-foreground text-background"
                    : "border-line text-muted"
                }`}
                aria-hidden="true"
              >
                {String(index + 1)}
              </span>
              <div>
                <p className="text-base">
                  <span className="sr-only">{step.done ? "Done. " : "Not started. "}</span>
                  {step.label}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </article>

      <div className="mt-12">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Contributions
        </h3>
        {contributions.length === 0 ? (
          <div className="mt-4">
            <EmptyState>
              No public contributions are listed yet. Merged patches and reviews will show up here as they happen.
            </EmptyState>
          </div>
        ) : (
          <ul className="mt-4 divide-y divide-line border-t border-line">
            {contributions.map((item) => (
              <li key={item.id} className="py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <a
                    href={item.url}
                    className="text-lg underline decoration-line underline-offset-4 hover:decoration-foreground"
                  >
                    {item.project}
                  </a>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    {item.date}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.summary}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-12">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Achievements
        </h3>
        {achievements.length === 0 ? (
          <div className="mt-4">
            <EmptyState>
              No awards, publications, or program selections to list yet.
            </EmptyState>
          </div>
        ) : (
          <ul className="mt-4 divide-y divide-line border-t border-line">
            {achievements.map((item) => (
              <li key={item.id} className="py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  {item.url ? (
                    <a
                      href={item.url}
                      className="text-lg underline decoration-line underline-offset-4 hover:decoration-foreground"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <p className="text-lg">{item.title}</p>
                  )}
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    {item.date}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
}
