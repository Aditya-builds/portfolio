/**
 * Site-wide facts and contact links.
 *
 * TODO: email — set `email` to a public address.
 * TODO: LinkedIn — set `linkedin` to the full profile URL.
 * TODO: resume PDF — put the file in `public/` (for example `public/resume.pdf`)
 *       and set `resumeHref` to `/resume.pdf`.
 */
export const site = {
  name: "Aditya Kumar",
  role: "AI Engineer",
  pitch:
    "I add AI features to a legacy Java product, and I am aiming at AI, LLM, and Java + AI roles.",
  description:
    "Aditya Kumar is an AI engineer adding AI features to a legacy Java product, with public work on agents and retrieval. Preparing for Google Summer of Code 2027.",
  github: "https://github.com/Aditya-builds",
  githubHandle: "Aditya-builds",
  email: null as string | null,
  linkedin: null as string | null,
  resumeHref: null as string | null,
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://aditya-kumar.onrender.com",
} as const;

export const ticker = [
  "Java + AI",
  "Generative AI",
  "LLM systems",
  "Agents",
  "Open source",
  "GSoC 2027",
] as const;

export function publicProfiles(): string[] {
  return [site.github, site.linkedin].filter((value): value is string =>
    Boolean(value),
  );
}
