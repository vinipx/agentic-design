---
sidebar_position: 9
---

# Composer & Agent Best Practices

## Cursor Composer (`Cmd+I` / `Ctrl+I`)

Composer is Cursor's primary interface for multi-file generation and codebase-wide refactoring. QA Engineers should default to Composer rather than the standard Chat panel when writing new tests or migrating frameworks.

### Agent Mode

Toggle Agent Mode in Composer. The agent will:
1. Research the codebase for relevant Page Objects and utilities.
2. Formulate a plan before writing code.
3. Edit multiple files simultaneously (e.g., creating `LoginPage.ts` and `login.spec.ts`).
4. Wait for your review before you click "Accept All".

**Tip:** Save complex plans to `.cursor/plans/` for documentation and resuming interrupted work.

## The Agentic Build-Test-Fix Loop

Do not manually fix simple locator or syntax errors. Instead, let Cursor act as an autonomous SDET.

1. **Execute:** Run your test in the Cursor terminal (`npx playwright test`).
2. **Fail:** If the test fails, highlight the error stack trace in the terminal.
3. **Fix:** Press `Cmd+I` to open Composer and type: *"Analyze this terminal error. Fix the failing assertions or locators in the corresponding spec."*
4. **Re-run:** Once Cursor applies the fix, rerun the terminal command to verify.

## Operating with Multiple Agents

### Parallel Agents in Worktrees

- **Use case:** Run the same prompt across multiple models (e.g., Claude 3.5 Sonnet, GPT-4o) simultaneously and compare solutions.
- **Workflow:** Select worktree option from agent dropdown → submit prompt → when done, click **Apply** to merge the chosen solution back.
- **QA benefit:** Compare different test implementations for edge-case coverage or code quality.

### Cloud Agents

Delegate background tasks to cloud agents from [cursor.com/agents](https://cursor.com/agents):
- Generating test permutations for existing code
- Refactoring legacy Cypress code to Playwright
- **Flow:** Agent clones repo → creates branch → works autonomously → opens PR → you merge when ready.

## Context Management

- **Let the agent find context:** Use semantic search and `@Branch` — avoid manually tagging every file.
- **Start a new conversation when:** One logical unit is done; the agent is confused; switching to a different feature.
- **Reference past work:** Use `@Past Chats` instead of copy-pasting full conversations.

## Test-Driven Development with Composer

1. Write tests first; tell the agent not to modify them.
2. Ask the agent to implement application code that passes the tests; instruct it to iterate until all pass.
3. Use explicit TDD framing so the agent avoids creating mock implementations for non-existent functionality.
