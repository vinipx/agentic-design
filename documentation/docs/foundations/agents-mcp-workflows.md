---
sidebar_position: 1
---

# Foundations: Agents, MCPs, and Agentic Workflows

Before diving into specific platforms, understand the foundational concepts powering this shift in software engineering and testing.

## What is an AI Agent?

An **AI Agent** is an autonomous system driven by a Large Language Model (LLM) that goes beyond simple chat completions. Agents can:

- **Perceive:** Read files, analyze logs, and understand workspace context.
- **Plan:** Break down complex tasks into manageable steps (Research → Strategy → Execution).
- **Act:** Execute shell commands, write code, run tests, and interact with external APIs.
- **Learn/Correct:** Analyze the results of their actions (e.g., test failures) and self-correct their approach.

## What are Agentic Workflows?

**Agentic Workflows** refer to the structured patterns in which we deploy AI agents to achieve reliable, iterative results rather than relying on one-shot prompts. Key workflow patterns include:

- **Reflection:** The agent reviews its own code or test plan before execution.
- **Tool Use:** The agent dynamically selects the right tool (e.g., `grep` for search, `npx playwright` for testing) to accomplish a task.
- **Planning:** The agent creates a multi-step plan and asks for human approval before making massive codebase changes.
- **Multi-Agent Collaboration:** Different specialized agents (e.g., a "Code Architect" and a "Test Reviewer") working together to solve a problem.

## Model Context Protocol (MCP)

The **Model Context Protocol (MCP)** is an open standard that allows AI agents to securely connect to local and remote data sources or tools. Instead of hardcoding integrations into every LLM, MCP provides a universal interface.

- **Servers:** Expose specific capabilities (e.g., a Playwright MCP server to run tests, a GitHub MCP server to read PRs, a Postgres MCP server to query test data).
- **Clients:** AI IDEs (like Cursor) or agents (like Claude Desktop) act as clients that can seamlessly invoke these servers to expand their context and capabilities dynamically.
