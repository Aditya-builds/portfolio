# Aditya Kumar — portfolio

Personal site for Aditya Kumar, an AI engineer. Dark, single-page, and statically exported.

The stack is Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. Copy and lists live in typed files under `content/`, so new work is a data change rather than a layout change.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

`npm run build` runs `scripts/fetch-github.mjs` first. That script reads repository names from `content/projects.ts`, calls the public GitHub API, and writes `content/github-stats.json`. If GitHub is unreachable, the previous stats file is kept and the build still runs. The static site is written to `out/`.

Optional: set `GITHUB_TOKEN` in the environment for a higher API rate limit. The token is read only by the Node script.

Preview the export:

```bash
npx --yes serve out
```

## Adding content

### A project

Append an object to the array in `content/projects.ts`.

```ts
{
  id: "short-id",
  name: "Project name",
  outcome: "What someone can do with it, in one sentence.",
  summary: "How it is built, in one or two sentences.",
  role: "Solo build", // or "Full stack", "Full stack + agent", "Backend"
  stack: ["Java", "Quarkus"],
  year: 2027,
  status: "shipped", // "shipped" | "private" | "sketch"
  repo: "repository-name", // under github.com/Aditya-builds; omit if there is no public repo
  live: "https://example.com", // optional; only when a demo actually responds
  featured: true, // false keeps the entry in the file and off the page
}
```

`npm run build` (or `npm run stats`) refreshes stars, primary language, and last push for every `repo`. A GitHub homepage field is stored in the stats file but not linked, because an old homepage can 404. Set `live` yourself when a deployment is up. A private project with no public URL, like Agent Ecosystem, simply omits `repo`.

Forks of other people's projects and course-note repos are listed in the comment at the top of that file so they are not added back by accident.

### Experience

Edit `content/experience.ts`. Each entry has `role`, `organization`, `period`, `summary`, and `highlights`.

`organization` is `"Available on request"` until the employer name can be public. Replace `period` (`"About two years"`) with a confirmed range such as `"2024 — Present"`.

### Open source and achievements

Edit `content/open-source.ts`.

```ts
// contributions
{
  id: "short-id",
  project: "Organization / repository",
  url: "https://github.com/org/repo/pull/1",
  summary: "What changed, in one sentence.",
  date: "Mar 2027",
}

// achievements
{
  id: "short-id",
  title: "Selection or award",
  detail: "One sentence of context.",
  date: "2027",
  url: "https://example.com", // optional
}
```

Empty arrays render an empty state. Do not add a contribution or achievement until it is real.

Google Summer of Code 2027 is the `gsoc` object in the same file. Set a step's `done` flag to `true` only after that step is finished.

### About, skills, and the one-line pitch

- Pitch and description: `content/site.ts`
- About paragraphs, degree, and optional school name: `content/about.ts` (`school` is `null` until you want it public)
- Skill groups: `content/skills.ts`
- Navigation labels: `content/navigation.ts`

### Contact

In `content/site.ts`:

| Field | What to set |
| --- | --- |
| `email` | Already a `mailto:` link from the public commit address. Change it if you use a different inbox. |
| `linkedin` | Full profile URL. Currently `https://www.linkedin.com/in/aditya-kumar-601538350`. Set it to `null` to show "Available on request" instead of a link. |
| `resumeHref` | Currently `"/resume.pdf"` (`public/resume.pdf`). Set it to `null` to show "Available on request" instead of a download. |

In `content/experience.ts`, replace `organization` (`"Available on request"`) with the employer name when it can be public.

## Deploy on Render

The repo includes a [Render Blueprint](https://render.com/docs/blueprint-spec) at `render.yaml` for a static site.

1. Push this repository to GitHub.
2. In the Render dashboard, choose **New → Blueprint**.
3. Select the repository. Render reads `render.yaml`.
4. The blueprint creates a static site named `aditya-kumar`:
   - Build command: `npm ci && npm run build`
   - Publish directory: `out`
5. The default URL is `https://aditya-kumar.onrender.com`. `NEXT_PUBLIC_SITE_URL` is set to that value so the canonical URL and Open Graph tags match. If you rename the service or add a custom domain, change the env var and redeploy.
6. `GITHUB_TOKEN` is optional and marked `sync: false`, so Render asks for it only if you want a higher API rate limit during the build. It is not inlined into the site.

Static hosting does not keep a Node server running after the build. Pull request previews are enabled in the blueprint.

## Keyboard and motion

- `Cmd+K` or `Ctrl+K` opens the command palette. Arrow keys move, Enter jumps, Escape closes. A Search button does the same on mobile.
- Entrance motion and the ticker pause when the visitor prefers reduced motion.
