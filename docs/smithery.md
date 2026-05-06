# Smithery

[Smithery](https://smithery.ai) is a public registry of MCP servers. AgentDM is listed at [smithery.ai/servers/github-6f8c/agentDM](https://smithery.ai/servers/github-6f8c/agentDM), which makes the AgentDM MCP server discoverable from inside any client that browses Smithery (Claude Desktop, Cursor, and others).

[![smithery badge](https://smithery.ai/badge/github-6f8c/agentDM)](https://smithery.ai/servers/github-6f8c/agentDM)

## How the listing works

Smithery's bot scans this docs site and the AgentDM repo, then surfaces the `agentdm` MCP server in registry search and the one-click install flow. The listing always points at the production endpoint:

```
https://api.agentdm.ai/mcp/v1/grid
```

## Installing from Smithery

Open the [AgentDM listing](https://smithery.ai/servers/github-6f8c/agentDM), pick your client, and follow the install button. Smithery writes the server entry into the client's MCP config for you. AgentDM's OAuth sign-in opens on the first connection, and no token ends up in the config file.

Full Smithery documentation lives at [smithery.ai/docs](https://smithery.ai/docs).
