---
sidebar_position: 7
---

# Specializing Cursor Agents (Skills)

**Skills** extend agent capabilities with domain-specific knowledge and workflows. Unlike Rules (always-on context), Skills are loaded dynamically when the agent decides they're relevant.

## Skill Structure

```
.cursor/skills/
└── sdet-playwright/
    ├── SKILL.md          # Required — main instructions
    ├── reference.md      # Optional — detailed docs
    └── examples.md       # Optional — usage examples
```

## SKILL.md Frontmatter

```yaml
---
name: sdet-playwright
description: Scaffold and maintain Playwright tests using Page Object Model. Use when creating new specs, migrating from Cypress, or refactoring test structure.
---
```

## Example: SDET Playwright Skill

`.cursor/skills/sdet-playwright/SKILL.md`:

```markdown
---
name: sdet-playwright
description: Scaffold Playwright tests with Page Object Model. Use when creating specs, migrating tests, or refactoring test structure.
---

# Playwright SDET Skill

## Quick Start

1. Create Page Object in `pages/` with `readonly` locators.
2. Create spec in `tests/` importing the Page Object.
3. Use `expect(locator).toBeVisible()` — never `waitForTimeout`.
4. Run `npx playwright test <file>` to verify.

## Validation Checklist

- [ ] Locators use `getByRole` or `getByTestId`
- [ ] No `any` types in data models
- [ ] Spec passes before marking complete
```

## Hooks for Iterative QA Loops

`.cursor/hooks.json`:

```json
{
  "version": 1,
  "hooks": {
    "stop": [{ "command": "node .cursor/hooks/verify-tests.js" }]
  }
}
```

## Custom Commands

Store reusable workflows in `.cursor/commands/` as Markdown. Trigger with `/` in the agent input.

`.cursor/commands/run-tests.md`:

```markdown
Run the Playwright test suite and report results.

1. Execute `npx playwright test`
2. If failures occur, summarize failure types and affected files
3. Suggest next steps for triage
```
