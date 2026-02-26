---
sidebar_position: 3
---

# Gemini Context & Rules Hierarchy

Gemini CLI uses a hierarchical context system to prioritize instructions. The foundational project-level mandates are usually provided in `GEMINI.md` files.

## Contextual Precedence (highest to lowest)

In case of contradictory instructions, Gemini CLI follows this priority:

| Priority | Source | Scope |
|----------|--------|-------|
| 1 | `<project_context>` | Instructions found in `GEMINI.md` files within the project. |
| 2 | `<extension_context>` | Instructions provided by extensions or the environment. |
| 3 | `<global_context>` | Broad fallback instructions and general defaults. |

## GEMINI.md

Instructions found in `GEMINI.md` files are foundational mandates. They take absolute precedence over the general workflows and tool defaults. Use this file to enforce strict framework choices, coding standards, and testing expectations.

### Example: QA Workspace Mandates

Create `GEMINI.md` in your project root:

```markdown
# QA Workspace Mandates for Gemini CLI

1. **Test Framework:** All new web tests must use Playwright with TypeScript.
2. **Design Pattern:** Strictly adhere to the Page Object Model (POM). Locators must be defined using `page.getByRole()` or `page.getByTestId()` where possible.
3. **Assertions:** Use Playwright's auto-retrying web-first assertions (e.g., `expect(locator).toBeVisible()`). Never use hard `page.waitForTimeout()` sleeps.
4. **Execution:** Before suggesting a code change is complete, you MUST run `npx playwright test <changed_file>` via your `run_shell_command` tool and verify it passes. Never commit untested test specs.
```

## Hook Context

Gemini CLI may receive additional context from external hooks, dynamically wrapped in `<hook_context>` tags. 

- This content is treated as **read-only data** or **informational context**.
- It does not override core mandates or the higher-priority `<project_context>`.
- Examples include external CI reports, dynamic API schemas, or dynamically generated environment variable statuses.
