"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { navigation } from "@/content/navigation";
import type { PaletteItem } from "@/content/types";
import { CommandPalette } from "@/components/command-palette";
import { Header } from "@/components/header";

export function SiteShell({
  items,
  children,
}: {
  items: PaletteItem[];
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [paletteSession, setPaletteSession] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState("top");
  const pendingHref = useRef<string | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setMenuOpen(false);
        setPaletteSession((session) => session + 1);
        setPaletteOpen((open) => !open);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!paletteOpen && !menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen, paletteOpen]);

  useEffect(() => {
    const ids = navigation.map((item) => item.id);

    function update() {
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setCurrent(ids[ids.length - 1] ?? "top");
        return;
      }

      const line = window.scrollY + 88;
      let next = "top";
      for (const id of ids) {
        const node = document.getElementById(id);
        if (!node) continue;
        const top = node.getBoundingClientRect().top + window.scrollY;
        if (top <= line) next = id;
      }
      setCurrent(next);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  useEffect(() => {
    if (paletteOpen || menuOpen) return;
    const href = pendingHref.current;
    if (!href) return;
    pendingHref.current = null;
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;
    if (window.location.hash === href) {
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    } else {
      window.location.hash = href;
    }
    target.focus({ preventScroll: true });
  }, [menuOpen, paletteOpen, reduce]);

  return (
    <>
      <a
        href="#content"
        className="fixed left-4 top-4 z-[70] -translate-y-24 bg-accent px-4 py-2 text-sm text-background focus:translate-y-0"
      >
        Skip to content
      </a>
      <Header
        menuOpen={menuOpen}
        current={current}
        onMenuOpenChange={setMenuOpen}
        onOpenPalette={() => {
          setMenuOpen(false);
          setPaletteSession((session) => session + 1);
          setPaletteOpen(true);
        }}
      />
      <CommandPalette
        open={paletteOpen}
        session={paletteSession}
        items={items}
        onOpenChange={setPaletteOpen}
        onNavigate={(href) => {
          pendingHref.current = href;
          setPaletteOpen(false);
        }}
      />
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-30 bg-background px-5 pt-24 xl:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
          >
            <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="border-b border-line py-4 text-[2rem] tracking-[-0.03em] hover:text-accent"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
      {children}
    </>
  );
}
