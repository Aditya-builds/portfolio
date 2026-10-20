import type { Achievement, Contribution, GsocStep } from "./types";

/**
 * Open source and achievements.
 *
 * Add a contribution by appending to `contributions`:
 * {
 *   id: "short-id",
 *   project: "Organization / repository",
 *   url: "https://github.com/org/repo/pull/1",
 *   summary: "What changed, in one sentence.",
 *   date: "Mar 2027",
 * }
 *
 * Add an achievement the same way in `achievements`.
 * Flip `gsoc.steps[].done` to true only when that step is actually finished.
 */
export const gsoc = {
  program: "Google Summer of Code",
  year: 2027,
  statusLabel: "Preparing",
  summary:
    "I have not been selected, and I have not listed a contribution to a GSoC organization yet. The useful work before a 2027 proposal is a few reviewed patches in a codebase I want to spend the summer in.",
  steps: [
    {
      id: "org",
      label: "Choose an organization",
      detail:
        "Prefer a project that overlaps with Java services or LLM tooling.",
      done: false,
    },
    {
      id: "patches",
      label: "Land a few real patches",
      detail: "Small, reviewed changes, recorded in the list below.",
      done: false,
    },
    {
      id: "proposal",
      label: "Write the 2027 proposal",
      detail: "Base it on problems already seen in that codebase.",
      done: false,
    },
  ] satisfies GsocStep[],
};

export const contributions: Contribution[] = [];

export const achievements: Achievement[] = [];
