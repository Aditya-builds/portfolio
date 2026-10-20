import statsFile from "@/content/github-stats.json";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import type { GithubStatsFile, PaletteItem, ProjectView } from "@/content/types";
import { navigation } from "@/content/navigation";
import { formatMonthYear } from "@/lib/format";

const stats = statsFile as GithubStatsFile;

export function statsUpdatedLabel(): string | null {
  return stats.fetchedAt ? formatMonthYear(stats.fetchedAt) : null;
}

export function projectViews(): ProjectView[] {
  return projects.filter((project) => project.featured).map((project) => {
    const repoUrl = project.repo ? `${site.github}/${project.repo}` : null;
    const live = project.repo ? stats.repos[project.repo] : undefined;

    return {
      ...project,
      href: repoUrl,
      stars: live ? live.stars : null,
      updatedLabel: live?.pushedAt ? formatMonthYear(live.pushedAt) : null,
      primaryLanguage: live?.language ?? null,
      homepage: project.live ?? null,
    };
  });
}

export function paletteItems(views: ProjectView[]): PaletteItem[] {
  const sections: PaletteItem[] = [
    {
      id: "nav-home",
      group: "Navigate",
      label: "Home",
      hint: "Top of the page",
      href: "#top",
    },
    ...navigation.map((item) => ({
      id: `nav-${item.id}`,
      group: "Navigate" as const,
      label: item.label,
      hint: "Section",
      href: item.href,
    })),
  ];

  const projectItems: PaletteItem[] = views.map((project) => ({
    id: `project-${project.id}`,
    group: "Projects",
    label: project.name,
    hint: project.status === "private" ? "Private" : project.repo ?? "Project",
    href: `#project-${project.id}`,
  }));

  return [...sections, ...projectItems];
}
