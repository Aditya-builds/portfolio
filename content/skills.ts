import type { SkillGroup } from "./types";

/**
 * Skills evidenced by the professional role or by repositories in `projects.ts`.
 * Add a tool when a project or the job actually uses it.
 */
export const skills: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript"],
  },
  {
    id: "ai",
    label: "AI and agents",
    items: [
      "LangGraph",
      "LangChain",
      "Retrieval (RAG)",
      "FAISS",
      "OpenAI API",
      "Claude API",
      "MCP",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      "Quarkus",
      "REST",
      "Hibernate",
      "H2",
      "JSON file storage",
      "Google Drive API",
    ],
  },
  {
    id: "delivery",
    label: "Clients and delivery",
    items: [
      "Angular",
      "React Native (Expo)",
      "Streamlit",
      "Discord bots",
      "Docker",
      "Render",
    ],
  },
];
