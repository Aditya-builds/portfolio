import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function Section({
  id,
  index,
  label,
  title,
  lede,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      tabIndex={-1}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 border-t border-line py-20 outline-none md:py-28"
    >
      <Reveal className="mx-auto grid w-full max-w-6xl gap-10 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            {index} — {label}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-4 max-w-xs font-serif text-4xl leading-[1.05] md:text-5xl"
          >
            {title}
          </h2>
          {lede ? (
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{lede}</p>
          ) : null}
        </div>
        <div className="md:col-span-8">{children}</div>
      </Reveal>
    </section>
  );
}
