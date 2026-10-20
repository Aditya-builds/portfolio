import type { ExperienceEntry } from "./types";

/**
 * Professional experience.
 *
 * TODO: employer name — set `organization` on the entry below.
 * TODO: dates — replace `period` with a real range, for example "2024 — Present",
 *       once the months are confirmed. "About two years" is the only duration given.
 */
export const experience: ExperienceEntry[] = [
  {
    id: "legacy-java-ai",
    role: "AI Engineer",
    organization: null,
    period: "About two years",
    summary:
      "Professional work so far has been adding AI features to a legacy Java software product. The public description stays general until the employer name and dates can be published.",
    highlights: [
      "The role is adding AI features inside an existing Java product, not a greenfield app.",
      "Team, product name, and exact dates are left blank until they are filled in above.",
    ],
  },
];
