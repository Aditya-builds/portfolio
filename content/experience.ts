import type { ExperienceEntry } from "./types";

/**
 * Professional experience.
 * Replace `organization` with the employer name when it can be public.
 * Replace `period` with a confirmed range, for example "2024 — Present".
 */
export const experience: ExperienceEntry[] = [
  {
    id: "legacy-java-ai",
    role: "AI Engineer",
    organization: "Available on request",
    period: "About two years",
    summary:
      "Adding AI features to a legacy Java software product. The work sits in the existing codebase.",
    highlights: [
      "Language-model behavior is added inside the product, not shipped as a separate demo.",
      "The public repositories are separate builds: services, retrieval, and agents.",
    ],
  },
];
