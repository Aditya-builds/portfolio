/**
 * Site-wide facts and contact links.
 *
 * Email comes from public commits on github.com/Aditya-builds.
 * `linkedin` is the public profile, without share-tracking query parameters.
 * For a resume, add `public/resume.pdf` and set `resumeHref` to "/resume.pdf".
 * Until then the site says the resume is available on request.
 */
export const site = {
  name: "Aditya Kumar",
  role: "AI Engineer",
  pitch: "Building LLM features inside legacy Java systems.",
  description:
    "Aditya Kumar is an AI engineer building LLM features inside legacy Java systems, with public work on agents, retrieval, and Quarkus services.",
  github: "https://github.com/Aditya-builds",
  githubHandle: "Aditya-builds",
  email: "aditya.rebuild@gmail.com",
  linkedin: "https://www.linkedin.com/in/aditya-kumar-601538350" as string | null,
  resumeHref: null as string | null,
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://aditya-kumar.onrender.com",
} as const;

export function publicProfiles(): string[] {
  return [site.github, site.linkedin].filter((value): value is string =>
    Boolean(value),
  );
}
