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
      className="border-t border-line py-16 outline-none md:py-24"
    >
      <Reveal className="mx-auto grid w-full max-w-6xl gap-8 px-5 md:grid-cols-12 md:px-8">
        <div className="min-w-0 md:col-span-4">
          <p className="font-mono text-sm text-muted">
            {index} — {label}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-3 max-w-xs text-[2rem] leading-tight tracking-[-0.03em]"
          >
            {title}
          </h2>
          {lede ? (
            <p className="mt-3 max-w-xs text-base leading-[1.65] text-muted">{lede}</p>
          ) : null}
        </div>
        <div className="min-w-0 md:col-span-8">{children}</div>
      </Reveal>
    </section>
  );
}
