import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const projectsPath = path.join(root, "content", "projects.ts");
const statsPath = path.join(root, "content", "github-stats.json");
const owner = "Aditya-builds";

async function readPrevious() {
  try {
    const raw = await readFile(statsPath, "utf8");
    const parsed = JSON.parse(raw);
    return {
      fetchedAt: typeof parsed?.fetchedAt === "string" ? parsed.fetchedAt : null,
      repos: parsed?.repos && typeof parsed.repos === "object" ? parsed.repos : {},
    };
  } catch {
    return { fetchedAt: null, repos: {} };
  }
}

function repoNames(source) {
  return [...source.matchAll(/repo:\s*"([^"]+)"/g)].map((match) => match[1]);
}

async function fetchRepo(name) {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "aditya-kumar-portfolio",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${encodeURIComponent(name)}`,
    { headers },
  );

  if (!response.ok) {
    console.warn(`GitHub ${response.status} for ${name}; keeping previous stats.`);
    return null;
  }

  const data = await response.json();
  return {
    stars: typeof data.stargazers_count === "number" ? data.stargazers_count : 0,
    language: typeof data.language === "string" ? data.language : null,
    pushedAt: typeof data.pushed_at === "string" ? data.pushed_at : null,
    homepage: typeof data.homepage === "string" ? data.homepage : null,
  };
}

async function main() {
  const source = await readFile(projectsPath, "utf8");
  const names = [...new Set(repoNames(source))];
  const previous = await readPrevious();
  const repos = previous.repos;
  let complete = names.length > 0;

  for (const name of names) {
    try {
      const stat = await fetchRepo(name);
      if (stat) {
        repos[name] = stat;
      } else {
        complete = false;
      }
    } catch (error) {
      complete = false;
      const message = error instanceof Error ? error.message : "unknown error";
      console.warn(`GitHub request failed for ${name}: ${message}`);
    }
  }

  const payload = {
    fetchedAt: complete ? new Date().toISOString() : previous.fetchedAt,
    repos,
  };

  await writeFile(statsPath, `${JSON.stringify(payload, null, 2)}\n`);
  console.log(`Wrote stats for ${Object.keys(repos).length} repos.`);
}

main().catch((error) => {
  console.warn("GitHub stats refresh failed; leaving the existing file in place.");
  console.warn(error instanceof Error ? error.message : error);
  process.exit(0);
});
