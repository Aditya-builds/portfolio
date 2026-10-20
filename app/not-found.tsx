import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-5 md:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">404</p>
      <h1 className="mt-4 font-serif text-6xl">This page is not here.</h1>
      <p className="mt-4 max-w-md text-muted">
        The portfolio is a single page. Head back to {site.name}.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 w-fit items-center border border-foreground px-4 text-sm"
      >
        Back home
      </Link>
    </main>
  );
}
