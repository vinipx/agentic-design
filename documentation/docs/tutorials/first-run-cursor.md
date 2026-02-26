---
sidebar_position: 1
---

# Tutorial: First Run with Cursor for QA

Set up Cursor as your primary AI IDE for SDET workflows.

## Prerequisites

- Cursor installed ([cursor.com](https://cursor.com))
- A Playwright or similar test project (or create a new one)

## Step 1: Install Cursor

Download and install Cursor from [cursor.com](https://cursor.com). Sign in with your account.

## Step 2: Create Project Rules

Create `.cursor/rules/sdet-architecture.mdc`:

```markdown
---
description: Core SDET architecture and directory structure
alwaysApply: true
---

# SDET Framework Architecture

## Directory Structure
- `/tests`: Only spec files (`*.spec.ts`).
- `/pages`: Page Object classes.
- `/fixtures`: Custom Playwright fixtures.
- `/utils`: Helper functions (data generation, API clients).

## Commands
- `npm run test`: Run full suite
- `npx playwright test <file>`: Run single file (prefer for iteration)
```

## Step 3: Add AGENTS.md

Create `AGENTS.md` in the project root:

```markdown
# QA Agent Instructions

You are an expert SDET. When generating or modifying tests:

1. Use Playwright with TypeScript. Follow the Page Object Model.
2. Locators: prefer `getByRole()`, `getByTestId()` over CSS.
3. Assertions: use Playwright's web-first assertions; no `waitForTimeout`.
4. Before finishing, run the affected spec and verify it passes.
```

## Step 4: Configure .cursorignore

Create `.cursorignore` to exclude heavy artifacts:

```text
node_modules/
playwright-report/
test-results/
blob-report/
*.log
.env*
```

## Step 5: Try Your First Agent Task

1. Open a spec file or create a new one.
2. In the agent chat, type: *"Create a new Playwright spec for the login page using the Page Object in pages/LoginPage.ts"*
3. Verify the agent runs `npx playwright test` before considering the task complete.

## Next Steps

- [Add Skills](/docs/providers/cursor-skills) for specialized SDET workflows
- [Configure MCP](/docs/providers/cursor-mcp) for Playwright integration
- [Use Plan Mode](/docs/providers/cursor-best-practices) for framework migrations
