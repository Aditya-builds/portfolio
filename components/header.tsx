"use client";

import { useSyncExternalStore } from "react";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";

function subscribeScroll(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

function scrolledSnapshot() {
  return window.scrollY > 8;
}

function modifierSnapshot() {
  return /Mac|iPhone|iPad/.test(navigator.userAgent) ? "⌘" : "Ctrl";
}

export function Header({
  menuOpen,
  current,
  onMenuOpenChange,
  onOpenPalette,
}: {
  menuOpen: boolean;
  current: string;
  onMenuOpenChange: (open: boolean) => void;
  onOpenPalette: () => void;
}) {
  const scrolled = useSyncExternalStore(subscribeScroll, scrolledSnapshot, () => false);
  const modifier = useSyncExternalStore(subscribeScroll, modifierSnapshot, () => "Ctrl");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors ${
        scrolled || menuOpen
          ? "border-line bg-background/95 backdrop-blur"
          : "border-transparent bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-5 md:px-8">
        <a href="#top" className="shrink-0 text-base tracking-[-0.03em]">
          {site.name.split(" ")[0]}
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={current === item.id ? "true" : undefined}
              className={`text-sm transition-colors hover:text-accent ${
                current === item.id ? "text-accent" : "text-muted"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenPalette}
            aria-label="Search or jump to a section"
            className="inline-flex h-10 items-center gap-2 border border-line bg-raised px-3 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <span className="sm:hidden">Jump to</span>
            <span className="hidden sm:inline">Search / Jump to</span>
            <kbd className="hidden font-mono text-sm text-muted lg:inline">{modifier} K</kbd>
          </button>
          <a
            href="#contact"
            onClick={() => onMenuOpenChange(false)}
            className="inline-flex h-10 items-center bg-accent px-3 text-sm text-background transition-opacity hover:opacity-90"
          >
            Contact
          </a>
          <button
            type="button"
            className="inline-flex h-10 items-center border border-line px-3 text-sm xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => onMenuOpenChange(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
}
