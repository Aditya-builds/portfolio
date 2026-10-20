export type ProjectStatus = "shipped" | "private" | "sketch";

export type Project = {
  id: string;
  name: string;
  /** One or two accurate sentences. */
  summary: string;
  stack: string[];
  /** Year the repository was actively worked on, when known. */
  year?: number;
  status: ProjectStatus;
  /** Public demo URL. Set this only when the deployment actually responds. */
  live?: string;
  /**
   * Repository name under github.com/Aditya-builds.
   * Omit for private work with no public URL.
   */
  repo?: string;
  featured: boolean;
};

export type ExperienceEntry = {
  id: string;
  role: string;
  /**
   * TODO: employer name. Set this when it can be public.
   * Leave null to keep the on-site TODO marker.
   */
  organization: string | null;
  /** Human label such as "About two years" or "2024 — Present". */
  period: string;
  summary: string;
  highlights: string[];
};

export type SkillGroup = {
  id: string;
  label: string;
  items: string[];
};

export type Contribution = {
  id: string;
  project: string;
  url: string;
  summary: string;
  /** Display date, for example "Mar 2027". */
  date: string;
};

export type Achievement = {
  id: string;
  title: string;
  detail: string;
  /** Display date, for example "2027". */
  date: string;
  url?: string;
};

export type GsocStep = {
  id: string;
  label: string;
  detail: string;
  done: boolean;
};

export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type PaletteItem = {
  id: string;
  group: "Navigate" | "Projects";
  label: string;
  hint: string;
  href: string;
};

export type RepoStat = {
  stars: number;
  language: string | null;
  pushedAt: string | null;
  homepage: string | null;
};

export type GithubStatsFile = {
  fetchedAt: string | null;
  repos: Record<string, RepoStat>;
};

export type ProjectView = Project & {
  href: string | null;
  stars: number | null;
  updatedLabel: string | null;
  primaryLanguage: string | null;
  homepage: string | null;
};
