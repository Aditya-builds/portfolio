const snippets: Record<string, { caption: string; lines: string[] }> = {
  "narrative-engine": {
    caption: "Character files updated by the agent",
    lines: [
      "World/Characters/Mira/character.json",
      "Quarkus  ·  GET /characters/Mira",
      "agent     →  update_character",
    ],
  },
  "interactive-roleplay": {
    caption: "Story state, then an optional scene image",
    lines: [
      "POST /conversations/{id}/messages",
      "story JSON  →  LLM reply",
      "visual agent  →  scene image",
    ],
  },
  "agent-ecosystem": {
    caption: "Agents, Drive tools, Discord, and MCP",
    lines: [
      "Discord  →  LangGraph agents",
      "tools    →  Google Drive",
      "MCP server  ·  Render",
    ],
  },
  "gym-progress-tracker": {
    caption: "Plan, log, and volume across three clients",
    lines: [
      "plan.txt  →  Quarkus JSON API",
      "Expo · web  →  log a session",
      "JMH  ·  volume · one-rep",
    ],
  },
  "document-rag": {
    caption: "Upload, chunk, retrieve, answer",
    lines: [
      "PDF · DOCX · TXT",
      "chunk  →  FAISS",
      "question  →  retrieved context",
    ],
  },
};

export function ProjectVisual({ id }: { id: string }) {
  const snippet = snippets[id] ?? {
    caption: "Project diagram",
    lines: ["—"],
  };

  return (
    <figure
      className="border-b border-line bg-background px-5 py-5"
      aria-hidden="true"
    >
      <figcaption className="font-mono text-sm text-muted">{snippet.caption}</figcaption>
      <pre className="mt-3 overflow-x-auto font-mono text-sm leading-6 text-foreground">
        {snippet.lines.map((line) => (
          <span key={line} className="block">
            <span className="text-accent">▸ </span>
            {line}
          </span>
        ))}
      </pre>
    </figure>
  );
}
