---
sidebar_position: 6
---

# Cursor Rules System & Hierarchy

Cursor has transitioned from a single `.cursorrules` file (legacy) to the modern `.cursor/rules/` directory system. Use the modern system for fine-grained control.

## Rules Precedence (highest to lowest)

| Priority | Source | Scope |
|----------|--------|-------|
| 1 | Team Rules | Organization-wide (Team/Enterprise plans) |
| 2 | Project Rules | `.cursor/rules/*.mdc` — version-controlled |
| 3 | User Rules | Cursor Settings > Rules — global preferences |
| 4 | Legacy Rules | `.cursorrules` file — deprecated but supported |
| 5 | AGENTS.md | Simple markdown in project root or subdirectories |

## Rules vs Skills vs AGENTS.md

| Mechanism | Use When | Activation |
|-----------|----------|------------|
| **Rules** (`.cursor/rules/*.mdc`) | Project conventions, coding standards, file-specific patterns | Always or when matching globs |
| **Skills** (`.cursor/skills/*/SKILL.md`) | Task-specific workflows, domain knowledge, reusable commands | Dynamic — agent loads when relevant |
| **AGENTS.md** | Simple, always-on instructions; no activation control needed | Always (project root) |

## Modern Rules Format (`.mdc`)

Rules are markdown files with YAML frontmatter stored in `.cursor/rules/`.

| Field | Type | Description |
|-------|------|-------------|
| `description` | string | Brief description (shown in rule picker) |
| `globs` | string | File pattern — rule applies when matching files are open |
| `alwaysApply` | boolean | If `true`, applies to every conversation |

## Example: Playwright Specs Rule

`.cursor/rules/playwright-specs.mdc`:

```markdown
---
description: Playwright test conventions for spec files
globs: "**/*.spec.ts,**/tests/**/*.ts"
alwaysApply: false
---

# Playwright Spec Standards

- Use `page.getByRole()` or `page.getByTestId()` for locators; avoid raw CSS selectors.
- Use Playwright's auto-retrying assertions: `expect(locator).toBeVisible()`, `.toHaveText()`.
- Never use `page.waitForTimeout()` — use `expect().toBeVisible()` or explicit waits.
- Follow Arrange-Act-Assert with blank lines between sections.
- Run `npx playwright test <file>` before considering changes complete.
```

## Example: Always-Apply Architecture Rule

`.cursor/rules/sdet-architecture.mdc`:

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
- `npx playwright test --project=chromium`: Run Chromium only
```

## AGENTS.md Alternative

For simpler projects, use `AGENTS.md` in the project root:

```markdown
# QA Agent Instructions

You are an expert SDET. When generating or modifying tests:

1. Use Playwright with TypeScript. Follow the Page Object Model.
2. Locators: prefer `getByRole()`, `getByTestId()` over CSS.
3. Assertions: use Playwright's web-first assertions; no `waitForTimeout`.
4. Before finishing, run the affected spec and verify it passes.
```
