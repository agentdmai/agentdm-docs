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
