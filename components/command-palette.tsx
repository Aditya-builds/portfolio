"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { PaletteItem } from "@/content/types";

function matches(item: PaletteItem, query: string): boolean {
  return `${item.label} ${item.hint} ${item.group}`.toLowerCase().includes(query);
}

export function CommandPalette({
  open,
  session,
  items,
  onOpenChange,
  onNavigate,
}: {
  open: boolean;
  session: number;
  items: PaletteItem[];
  onOpenChange: (open: boolean) => void;
  onNavigate: (href: string) => void;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <PaletteDialog
          key={session}
          items={items}
          onOpenChange={onOpenChange}
          onNavigate={onNavigate}
        />
      ) : null}
    </AnimatePresence>
  );
}

function PaletteDialog({
  items,
  onOpenChange,
  onNavigate,
}: {
  items: PaletteItem[];
  onOpenChange: (open: boolean) => void;
  onNavigate: (href: string) => void;
}) {
  const reduce = useReducedMotion();
  const titleId = useId();
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return items;
    return items.filter((item) => matches(item, trimmed));
  }, [items, query]);

  const boundedActive = results.length === 0 ? 0 : Math.min(active, results.length - 1);

  const visit = useCallback(
    (item: PaletteItem) => {
      onNavigate(item.href);
    },
    [onNavigate],
  );

  useEffect(() => {
    const frame = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onOpenChange(false);
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActive((current) =>
          results.length === 0 ? 0 : (Math.min(current, results.length - 1) + 1) % results.length,
        );
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActive((current) => {
          const index = Math.min(current, Math.max(results.length - 1, 0));
          return results.length === 0 ? 0 : (index - 1 + results.length) % results.length;
        });
        return;
      }

      if (event.key === "Home") {
        event.preventDefault();
        setActive(0);
        return;
      }

      if (event.key === "End") {
        event.preventDefault();
        setActive(Math.max(results.length - 1, 0));
        return;
      }

      const current = results[boundedActive];
      if (event.key === "Enter" && current) {
        event.preventDefault();
        visit(current);
        return;
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = [
          ...dialogRef.current.querySelectorAll<HTMLElement>(
            'button, input, [href], [tabindex]:not([tabindex="-1"])',
          ),
        ];
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [boundedActive, onOpenChange, results, visit]);

  const activeId = results[boundedActive]
    ? `${listId}-${results[boundedActive].id}`
    : undefined;

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/70 px-4 pt-[12vh]"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduce ? undefined : { opacity: 0 }}
      transition={{ duration: 0.18 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onOpenChange(false);
      }}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="w-full max-w-xl border border-line bg-modal shadow-2xl"
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? undefined : { opacity: 0, y: 8 }}
        transition={{ duration: 0.18 }}
      >
        <h2 id={titleId} className="sr-only">
          Command palette
        </h2>
        <label htmlFor={`${listId}-input`} className="sr-only">
          Search sections and projects
        </label>
        <input
          id={`${listId}-input`}
          ref={inputRef}
          role="combobox"
          aria-expanded="true"
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={activeId}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActive(0);
          }}
          placeholder="Jump to a section or project"
          className="w-full border-b border-line bg-transparent px-4 py-4 text-base outline-none placeholder:text-muted"
        />
        <ul
          id={listId}
          role="listbox"
          aria-label="Results"
          className="max-h-[50vh] overflow-auto py-2"
        >
          {results.length === 0 ? (
                <li className="px-4 py-6 text-base text-muted">
                  No matches. Try a section or project name.
                </li>
          ) : (
            results.map((item, index) => {
              const selected = index === boundedActive;
              return (
                <li key={item.id} role="presentation">
                  <button
                    id={`${listId}-${item.id}`}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    className={`flex w-full items-baseline justify-between gap-4 px-4 py-3 text-left ${
                      selected ? "bg-raised" : "hover:bg-raised"
                    }`}
                    onMouseEnter={() => setActive(index)}
                    onClick={() => visit(item)}
                  >
                    <span>
                      <span className="block text-sm">{item.label}</span>
                      <span className="mt-1 block font-mono text-sm text-muted">
                        {item.group}
                      </span>
                    </span>
                        <span className="font-mono text-sm text-muted">{item.hint}</span>
                  </button>
                </li>
              );
            })
          )}
        </ul>
      </motion.div>
    </motion.div>
  );
}
