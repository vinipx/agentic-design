---
sidebar_position: 2
---

# The Universal Context Pattern

Every AI agent requires localized system instructions to operate effectively within your codebase. Without a defined set of workspace mandates, agents will default to generic, unopinionated code generation that will likely violate your repository's testing architecture and standards.

## The Problem

If you ask an AI agent to "write a test for this feature", it doesn't know:
- Which test framework to use (Jest, Playwright, Cypress).
- What naming conventions to follow.
- If it should use Page Objects or App Actions.
- How to handle assertions (web-first vs. hard sleeps).

## The Solution: Native Context Files

Every modern agentic provider supports a foundational context file. Think of this file as the "System Prompt" specifically for your repository. This file serves to establish determinism, context bounding, and strict architectural rules.

### Provider Context Mapping

You must create and commit the appropriate context file for the provider(s) your team uses:

| Provider | File Location | Scope |
|----------|---------------|-------|
| **Cursor** | `.cursor/rules/*.mdc` | Project and directory specific rules. |
| **Gemini CLI** | `GEMINI.md` | Workspace-wide architectural mandates. |
| **Claude Code** | `CLAUDE.md` | Workspace-wide directives and behaviors. |
| **GitHub Copilot** | `.github/copilot-instructions.md` | Repository-wide autocomplete and chat instructions. |

### Core Components of a Good Context File

When drafting these files, always include:
1. **Framework Strictness:** "Use Playwright with TypeScript. Do not use Cypress."
2. **Design Patterns:** "Strictly adhere to the Page Object Model."
3. **Locators & Assertions:** "Use web-first assertions. Prefer `getByRole`. Never use `waitForTimeout`."
4. **Execution Requirements (for autonomous agents):** "Run `npx playwright test` and verify tests pass before suggesting completion."

By standardizing these files, any QA engineer interacting with an agent will get consistently formatted, passing test code without needing to constantly remind the AI of the rules.
