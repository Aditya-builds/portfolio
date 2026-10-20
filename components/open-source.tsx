import { achievements, contributions, gsoc } from "@/content/open-source";
import { Section } from "@/components/section";

function EmptyState({ children }: { children: string }) {
  return (
    <p className="border border-line bg-raised px-5 py-6 text-base leading-[1.65] text-muted">
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
      title="GSoC 2027."
      lede="A proposal comes after a few real patches."
    >
      <article className="border border-line bg-raised p-5 md:p-6" aria-labelledby="gsoc-title">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 id="gsoc-title" className="text-[1.75rem] tracking-[-0.03em]">
            {gsoc.program} {gsoc.year}
          </h3>
          <p className="font-mono text-sm text-muted">{gsoc.statusLabel}</p>
        </div>
        <p className="mt-4 max-w-2xl text-base leading-[1.65] text-muted">{gsoc.summary}</p>
        <ol className="mt-6 space-y-4">
          {gsoc.steps.map((step, index) => (
            <li key={step.id} className="grid grid-cols-[auto_1fr] gap-4">
              <span
                className={`mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border font-mono text-sm ${
                  step.done
                    ? "border-accent bg-accent text-background"
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
                <p className="mt-1 text-base leading-[1.65] text-muted">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </article>

      <div className="mt-10">
        <h3 className="font-mono text-sm text-muted">Contributions</h3>
        {contributions.length === 0 ? (
          <div className="mt-4">
            <EmptyState>No contributions listed yet.</EmptyState>
          </div>
        ) : (
          <ul className="mt-4 divide-y divide-line border-t border-line">
            {contributions.map((item) => (
              <li key={item.id} className="py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <a
                    href={item.url}
                    className="text-lg text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                  >
                    {item.project}
                  </a>
                  <p className="font-mono text-sm text-muted">{item.date}</p>
                </div>
                <p className="mt-2 text-base leading-[1.65] text-muted">{item.summary}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-10">
        <h3 className="font-mono text-sm text-muted">Achievements</h3>
        {achievements.length === 0 ? (
          <div className="mt-4">
            <EmptyState>No awards or selections listed yet.</EmptyState>
          </div>
        ) : (
          <ul className="mt-4 divide-y divide-line border-t border-line">
            {achievements.map((item) => (
              <li key={item.id} className="py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  {item.url ? (
                    <a
                      href={item.url}
                      className="text-lg text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <p className="text-lg">{item.title}</p>
                  )}
                  <p className="font-mono text-sm text-muted">{item.date}</p>
                </div>
                <p className="mt-2 text-base leading-[1.65] text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
}
