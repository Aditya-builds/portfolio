import type { Project } from "./types";

/**
 * Projects shown on the site.
 *
 * `featured: true` projects render as the main list (keep this to about five).
 * Set `featured: false` to keep an entry in the file without putting it on the page.
 *
 * If `repo` is set, `npm run build` refreshes stars, language, and last push
 * from the GitHub API into `content/github-stats.json`. A failed refresh keeps
 * the previous snapshot. Leave `repo` unset when there is no public URL.
 *
 * Inspected and left out on purpose:
 * - Forks: colibri, VoiceStudio, ECC, freellmapi, skills, awesome-system-design,
 *   OOPS-, upshift, and Agentic-Design-Patterns (fork of evoiz/Agentic-Design-Patterns
 *   with no original commits).
 * - Course-note repos: Basics-of-AI, Basics-of-Machine-Learning, NLP-Basics,
 *   Deep-learning, Image-Processing-and-Computer-Vision, DBMS, system-design,
 *   Operating-system-Notes, neetcode-submissions.
 */
export const projects: Project[] = [
  {
    id: "narrative-engine",
    name: "Narrative Engine",
    outcome:
      "A character stays consistent because the agent writes back into that character's files.",
    summary:
      "Quarkus stores each character and persona as JSON on disk. Angular walks from character to chat. A FastAPI and LangGraph agent can call Quarkus tools to update those files.",
    role: "Full stack + agent",
    stack: ["Java", "Quarkus", "Angular", "Python", "LangGraph"],
    year: 2026,
    status: "shipped",
    repo: "Narrative-Engine",
    featured: true,
  },
  {
    id: "interactive-roleplay",
    name: "Interactive AI Roleplay",
    outcome:
      "A roleplay session keeps its story, then can turn the current moment into a scene image.",
    summary:
      "Angular talks to a Quarkus API that stores stories, characters, and conversations as JSON and replies through an LLM. An optional Python visual agent plans the scene.",
    role: "Full stack + agent",
    stack: ["Java", "Quarkus", "Angular", "Python", "LangGraph"],
    year: 2026,
    status: "shipped",
    repo: "Interactive-ai-roleplay-agent",
    featured: true,
  },
  {
    id: "agent-ecosystem",
    name: "Agent Ecosystem",
    outcome:
      "Several agents share Google Drive tools, take requests from Discord, and expose an MCP server.",
    summary:
      "A LangGraph multi-agent system deployed on Render. The repository is private, so there is no public link.",
    role: "Solo build",
    stack: ["LangGraph", "MCP", "Discord", "Google Drive", "Render"],
    status: "private",
    featured: true,
  },
  {
    id: "gym-progress-tracker",
    name: "Gym Progress Tracker",
    outcome:
      "An eight-week training block can be logged from a phone, a browser, or the API.",
    summary:
      "Quarkus stores workouts as JSON. React Native (Expo) and a small web client sit on that API. JMH benchmarks cover plan parsing, one-rep estimates, and volume.",
    role: "Full stack",
    stack: ["Java", "Quarkus", "TypeScript", "React Native", "Expo"],
    year: 2026,
    status: "shipped",
    repo: "Gym-tracking-",
    featured: true,
  },
  {
    id: "document-rag",
    name: "Document RAG",
    outcome:
      "Questions about an uploaded PDF, DOCX, or TXT are answered from that file.",
    summary:
      "Final-year Streamlit app. It chunks the upload, embeds it with OpenAI, stores vectors in FAISS, and answers through a LangChain conversational retrieval chain.",
    role: "Solo build",
    stack: ["Python", "Streamlit", "LangChain", "FAISS", "OpenAI"],
    year: 2025,
    status: "shipped",
    repo: "final-year-project",
    featured: true,
  },
  {
    id: "gym-tracking-api",
    name: "Gym Tracking API",
    outcome:
      "A written training plan becomes structured workout logs with week and month summaries.",
    summary:
      "Quarkus parses the plan from a local file or Google Drive, stores sets in H2 through Hibernate, and exposes the summaries over REST.",
    role: "Backend",
    stack: ["Java", "Quarkus", "Hibernate", "H2", "Google Drive API"],
    year: 2026,
    status: "shipped",
    repo: "Gym-tracking-app-",
    featured: false,
  },
  {
    id: "resume-helper",
    name: "Resume Helper",
    outcome: "Uploaded resumes are scored against a job description and saved as JSON.",
    summary:
      "Streamlit portal. Some formatting and scoring helpers call the OpenAI API. Results land under scores/.",
    role: "Solo build",
    stack: ["Python", "Streamlit", "OpenAI"],
    year: 2025,
    status: "shipped",
    repo: "resume-helper-ai-",
    featured: false,
  },
  {
    id: "discord-claude-bot",
    name: "Discord Claude Bot",
    outcome: "A Discord mention gets a Claude reply, with recent channel memory kept on disk.",
    summary:
      "Learning project. Includes unit tests and a Render worker blueprint with a persistent disk.",
    role: "Solo build",
    stack: ["Python", "Discord", "Claude", "Render"],
    year: 2026,
    status: "shipped",
    repo: "Discord-code-learning",
    featured: false,
  },
];
