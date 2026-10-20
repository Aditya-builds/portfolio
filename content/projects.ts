import type { Project } from "./types";

/**
 * Projects shown on the site.
 *
 * Add an entry here. If `repo` is set to a repository name under
 * github.com/Aditya-builds, `npm run build` refreshes stars, language,
 * and last push from the GitHub API into `content/github-stats.json`.
 *
 * Leave `repo` unset when there is no public URL (see agent-ecosystem).
 * Set `featured` to false for notes, empty repos, or work you want quieter.
 *
 * Inspected and left out on purpose:
 * - Forks of other people's projects: colibri, VoiceStudio, ECC, freellmapi,
 *   skills, awesome-system-design, OOPS-, upshift, and Agentic-Design-Patterns
 *   (fork of evoiz/Agentic-Design-Patterns with no original commits).
 * - Course-note and practice repos: Basics-of-AI, Basics-of-Machine-Learning,
 *   NLP-Basics, Deep-learning, Image-Processing-and-Computer-Vision, DBMS,
 *   system-design, Operating-system-Notes, neetcode-submissions.
 */
export const projects: Project[] = [
  {
    id: "narrative-engine",
    name: "Narrative Engine",
    summary:
      "File-based character and persona engine. A Quarkus API stores each character as JSON, an Angular app walks from character to chat, and a FastAPI + LangGraph agent can call Quarkus tools to update those files.",
    stack: ["Java", "Quarkus", "Angular", "Python", "LangGraph"],
    year: 2026,
    status: "shipped",
    repo: "Narrative-Engine",
    featured: true,
  },
  {
    id: "interactive-roleplay",
    name: "Interactive AI Roleplay",
    summary:
      "Local-first text roleplay app. Angular talks to a Quarkus API that keeps stories, characters, and conversations as JSON and replies through an LLM. An optional Python visual agent plans scene images.",
    stack: ["Java", "Quarkus", "Angular", "Python", "LangGraph"],
    year: 2026,
    status: "shipped",
    repo: "Interactive-ai-roleplay-agent",
    featured: true,
  },
  {
    id: "agent-ecosystem",
    name: "Agent Ecosystem",
    summary:
      "LangGraph multi-agent system with Google Drive tools, a Discord front end, and an MCP server, deployed on Render. The repository is private, so there is no public link.",
    stack: ["LangGraph", "MCP", "Discord", "Google Drive", "Render"],
    status: "private",
    featured: true,
  },
  {
    id: "gym-tracking-api",
    name: "Gym Tracking API",
    summary:
      "Quarkus service for logging workouts. It parses a written training plan from a local file or Google Drive, stores sets in H2 through Hibernate, and exposes week and month summaries.",
    stack: ["Java", "Quarkus", "Hibernate", "H2", "Google Drive API"],
    year: 2026,
    status: "shipped",
    repo: "Gym-tracking-app-",
    featured: true,
  },
  {
    id: "gym-progress-tracker",
    name: "Gym Progress Tracker",
    summary:
      "An 8-week gym tracker with a Quarkus API that stores workouts as JSON, a React Native (Expo) app, a small web client, and JMH benchmarks for plan parsing, one-rep estimates, and volume.",
    stack: ["Java", "Quarkus", "TypeScript", "React Native", "Expo"],
    year: 2026,
    status: "shipped",
    repo: "Gym-tracking-",
    featured: true,
  },
  {
    id: "document-rag",
    name: "Document RAG",
    summary:
      "Final-year Streamlit app for questions about uploaded PDF, DOCX, and TXT files. It chunks documents, embeds them with OpenAI, stores vectors in FAISS, and answers through a LangChain conversational retrieval chain.",
    stack: ["Python", "Streamlit", "LangChain", "FAISS", "OpenAI"],
    year: 2025,
    status: "shipped",
    repo: "final-year-project",
    featured: true,
  },
  {
    id: "resume-helper",
    name: "Resume Helper",
    summary:
      "Streamlit job-application portal where uploaded resumes are scored against a job description and the results are written to JSON. Some formatting and scoring helpers call the OpenAI API.",
    stack: ["Python", "Streamlit", "OpenAI"],
    year: 2025,
    status: "shipped",
    repo: "resume-helper-ai-",
    featured: true,
  },
  {
    id: "discord-claude-bot",
    name: "Discord Claude Bot",
    summary:
      "A learning project that connects code to Discord. The bot replies when it is mentioned, keeps the last few messages per channel on disk, calls Claude, and includes unit tests plus a Render worker blueprint.",
    stack: ["Python", "Discord", "Claude", "Render"],
    year: 2026,
    status: "shipped",
    repo: "Discord-code-learning",
    featured: true,
  },
  {
    id: "self-learning-rag",
    name: "Self-learning Retrieval",
    summary:
      "Public note for a retrieval learning exercise. The repository currently contains a short README that calls it a learning project, and no implementation.",
    stack: ["RAG"],
    year: 2026,
    status: "sketch",
    repo: "self-learning-retrieval-RAG",
    featured: false,
  },
  {
    id: "agent-communication-protocol",
    name: "Agent Communication Protocol",
    summary:
      "A public repository reserved for an agent communication protocol. It has no commits yet.",
    stack: [],
    year: 2025,
    status: "sketch",
    repo: "Agent-communication-protocol",
    featured: false,
  },
];
