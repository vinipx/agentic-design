---
sidebar_position: 2
---

# Tutorial: First Run with Gemini CLI for Tests

Set up Gemini CLI for terminal-based test scaffolding and CI/CD augmentation.

## Prerequisites

- Gemini CLI installed ([gemini.google.com](https://gemini.google.com))
- A Playwright or similar test project

## Step 1: Install Gemini CLI

Follow the official installation guide for your platform.

## Step 2: Create GEMINI.md

Create `GEMINI.md` in the project root:

```markdown
# QA Workspace Mandates for Gemini CLI

1. **Test Framework:** All new web tests must use Playwright with TypeScript.
2. **Design Pattern:** Strictly adhere to the Page Object Model (POM). Locators must be defined using `page.getByRole()` or `page.getByTestId()` where possible.
3. **Assertions:** Use Playwright's auto-retrying web-first assertions (e.g., `expect(locator).toBeVisible()`). Never use hard `page.waitForTimeout()` sleeps.
4. **Execution:** Before suggesting a code change is complete, you MUST run `npx playwright test <changed_file>` via your `run_shell_command` tool and verify it passes. Never commit untested test specs.
```

## Step 3: Create .geminiignore

Create `.geminiignore`:

```text
playwright-report/
test-results/
.env.e2e
cypress/videos/
cypress/screenshots/
```

## Step 4: Try Your First Agent Task

1. Open a terminal in the project root.
2. Type: *"Create a new Playwright spec for the checkout flow. Use the existing checkout page object in pages/."*
3. The CLI will Research → Strategy → Execute, then run tests to validate.

## Core Agentic Flow

1. **Research:** Use `grep_search` and `glob` to map the test architecture.
2. **Strategy:** Formulate an execution plan before touching code.
3. **Execution:** Edit files, run commands, validate with `npx playwright test`.

## Next Steps

- [Create a Skill](/docs/providers/gemini-skills) for SDET-specific workflows
- Learn about the [codebase_investigator](/docs/providers/gemini-subagents) for flaky test root-cause analysis
- Understand the [Context Management](/docs/providers/gemini-context) hierarchy
