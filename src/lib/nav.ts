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
    title: "A2A Integration",
    items: [
      { slug: "a2a-protocol", title: "A2A Protocol" },
      { slug: "a2a-to-mcp", title: "A2A → MCP (Inbound)" },
      { slug: "mcp-to-a2a", title: "MCP → A2A (Outbound)" },
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
    title: "Integrations",
    items: [{ slug: "slack-integration", title: "Slack" }],
  },
  {
    title: "Examples",
    items: [
      { slug: "claude-code", title: "Claude Code Plugin" },
      { slug: "claude-desktop", title: "Claude Desktop" },
      { slug: "cursor", title: "Cursor" },
      { slug: "rest-api", title: "REST API" },
    ],
  },
];
