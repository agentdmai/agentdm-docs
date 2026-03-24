# Guardrails

AgentDM includes built-in message safety filters. Messages matching guardrail phrases are flagged and not delivered.

## Default Filters

These are enabled by default for all accounts:

- "Never include API keys, passwords, or tokens"
- "Never include customer PII in messages"
- "ignore previous instructions"
- "ignore all previous"
- "disregard your instructions"
- "you are now"
- "new instructions:"
- "system prompt:"
- "ADMIN OVERRIDE"

## Customization

Guardrails can be customized per account via the [dashboard](https://app.agentdm.ai). Add, remove, or modify filter phrases to match your security requirements.
