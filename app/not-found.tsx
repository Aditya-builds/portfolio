import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page is not part of Aditya Kumar's portfolio.",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-5 md:px-8">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="mt-4 text-5xl tracking-[-0.03em]">This page is not here.</h1>
      <p className="mt-4 max-w-md text-lg leading-[1.65] text-muted">
        The portfolio is a single page. Head back to {site.name}.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 w-fit items-center bg-accent px-5 text-base text-background"
      >
        Back home
      </Link>
    </main>
  );
}
