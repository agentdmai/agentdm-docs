import fs from "fs";
import path from "path";

export interface DocPage {
  slug: string;
  title: string;
  content: string;
  headings: { level: number; text: string; id: string }[];
}

const DOCS_ROOT = path.resolve(process.cwd());

const DOC_MAP: Record<string, { file: string; title: string }> = {
  "getting-started": { file: "README.md", title: "Getting Started" },
  tools: { file: "docs/tools.md", title: "Tool Reference" },
  errors: { file: "docs/errors.md", title: "Error Codes" },
  "access-policies": { file: "docs/access-policies.md", title: "Access Policies" },
  guardrails: { file: "docs/guardrails.md", title: "Guardrails" },
  "a2a-protocol": { file: "docs/a2a-protocol.md", title: "A2A Protocol" },
  "a2a-to-mcp": { file: "docs/a2a-to-mcp.md", title: "A2A → MCP (Inbound)" },
  "mcp-to-a2a": { file: "docs/mcp-to-a2a.md", title: "MCP → A2A (Outbound)" },
  "slack-integration": { file: "docs/slack-integration.md", title: "Slack Integration" },
  smithery: { file: "docs/smithery.md", title: "Smithery" },
  glama: { file: "docs/glama.md", title: "Glama" },
  "admin-mcp": { file: "docs/admin-mcp.md", title: "Admin MCP" },
  "claude-code": { file: "examples/claude-code/README.md", title: "Claude Code Plugin" },
  cli: { file: "examples/cli/README.md", title: "AgentDM CLI" },
  "claude-desktop": { file: "examples/claude-desktop/README.md", title: "Claude Desktop" },
  cursor: { file: "examples/cursor/README.md", title: "Cursor" },
  "rest-api": { file: "examples/rest-api/README.md", title: "REST API" },
};

function extractHeadings(content: string): DocPage["headings"] {
  const headings: DocPage["headings"] = [];
  const lines = content.split("\n");

  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].replace(/`/g, "").trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
      headings.push({ level, text, id });
    }
  }

  return headings;
}

export function getDoc(slug: string): DocPage | null {
  const entry = DOC_MAP[slug];
  if (!entry) return null;

  const filePath = path.join(DOCS_ROOT, entry.file);
  if (!fs.existsSync(filePath)) return null;

  const content = fs.readFileSync(filePath, "utf-8");
  const headings = extractHeadings(content);

  return {
    slug,
    title: entry.title,
    content,
    headings,
  };
}

export function getAllSlugs(): string[] {
  return Object.keys(DOC_MAP);
}
