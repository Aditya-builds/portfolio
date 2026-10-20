"use client";

import { useEffect, useState } from "react";
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
    const nodes = navigation
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setCurrent(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a
        href="#content"
        className="absolute left-4 top-4 z-[70] -translate-y-24 bg-foreground px-4 py-2 text-sm text-background focus:translate-y-0"
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
      />
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-30 bg-background px-5 pt-24 lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
          >
            <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="border-b border-line py-4 font-serif text-4xl"
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
