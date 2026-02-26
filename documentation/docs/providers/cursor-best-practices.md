---
sidebar_position: 9
---

# Plan Mode & Agent Best Practices

## Plan Mode (`Shift+Tab`)

Toggle in the agent input. The agent will:

1. Create a detailed implementation plan before coding
2. Ask clarifying questions
3. Research the codebase for relevant files
4. Wait for your approval before building

**Use for:** Framework migrations, large refactors, new test suite scaffolding.

**Tip:** Save plans to `.cursor/plans/` for documentation and resuming interrupted work.

## Operating with Multiple Agents

### Parallel Agents in Worktrees

- **Use case:** Run the same prompt across multiple models (e.g., Claude, GPT) simultaneously and compare solutions.
- **Workflow:** Select worktree option from agent dropdown → submit prompt → when done, click **Apply** to merge the chosen solution back.
- **QA benefit:** Compare different test implementations for edge-case coverage or code quality.

### Run Multiple Models at Once

- Select multiple models from the dropdown, submit one prompt.
- Cursor suggests which solution it believes is best.
- Useful for: finding edge cases one model might miss, comparing approaches on hard problems.

### Cloud Agents

Delegate tasks to cloud agents:

- Documentation updates
- Generating tests for existing code
- Refactors of recent changes
- Bug fixes discovered while working elsewhere

**Start from:** [cursor.com/agents](https://cursor.com/agents), Cursor editor, or mobile.

**Flow:** Agent clones repo → creates branch → works autonomously → opens PR → you merge when ready.

## Context Management

- **Let the agent find context:** Use semantic search and `@Branch` — avoid manually tagging every file.
- **Start a new conversation when:** One logical unit is done; the agent is confused; switching to a different feature.
- **Continue when:** Debugging recent changes; iterating on the same feature.
- **Reference past work:** Use `@Past Chats` instead of copy-pasting full conversations.

## Verifiable Goals

Use typed languages, linters, and tests. Agents iterate best when success is measurable.

## Test-Driven Development with Cursor Agents

1. Write tests first; tell the agent not to modify them.
2. Ask the agent to implement code that passes the tests; instruct it to iterate until all pass.
3. Alternatively: have the agent run tests and confirm they fail before implementation.
4. Use explicit TDD framing so the agent avoids creating mock implementations for non-existent functionality.
