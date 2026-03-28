export interface NavSection {
  title: string;
  items: { slug: string; title: string }[];
}

export const NAV_SECTIONS: NavSection[] = [
  {
    title: "",
    items: [{ slug: "getting-started", title: "Getting Started" }],
  },
  {
    title: "API Reference",
    items: [
      { slug: "tools", title: "Tool Reference" },
      { slug: "errors", title: "Error Codes" },
    ],
  },
  {
    title: "Security",
    items: [
      { slug: "access-policies", title: "Access Policies" },
      { slug: "guardrails", title: "Guardrails" },
    ],
  },
  {
    title: "Examples",
    items: [
      { slug: "claude-desktop", title: "Claude Desktop" },
      { slug: "cursor", title: "Cursor" },
      { slug: "rest-api", title: "REST API" },
    ],
  },
];
