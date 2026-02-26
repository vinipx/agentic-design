---
sidebar_position: 3
---

# Tutorial: First Run with Claude Code for Migration

Use Claude Code for framework migration (e.g., Cypress → Playwright).

## Prerequisites

- Claude Code installed ([claude.ai](https://claude.ai))
- A project with existing Cypress tests to migrate

## Step 1: Create a Migration Directive

Create `docs/claude_migration_directive.md`:

```markdown
# Task: Migrate Authentication Specs to Playwright

**Objective:** Migrate existing Cypress tests in `cypress/e2e/auth/` to the new Playwright framework in `tests/e2e/auth/`.

**Constraints:**
1. **Analyze First:** Review `tests/support/auth_helpers.ts` to understand our custom login fixtures in Playwright before writing any tests.
2. **Translation:** Convert Cypress `cy.get()` calls to appropriate Playwright locators. Avoid direct CSS selectors if semantic locators (roles, text) are viable.
3. **State Management:** Ensure Playwright tests utilize `test.use({ storageState: 'state.json' })` for tests that do not require explicit login flows.
4. **Validation:** Do not consider the migration complete until you have executed the new Playwright spec via the terminal and confirmed it passes.
```

## Step 2: Invoke Claude Code

1. Open Claude Code in your project directory.
2. Paste or reference the migration directive.
3. Claude will traverse the file system, analyze the structure, and propose multi-file changes.
4. Review and approve before execution.

## Best Practices

- **Be specific:** Include file paths, naming conventions, and validation criteria.
- **Analyze first:** Ask Claude to review existing helpers before writing new code.
- **Validate:** Always require terminal execution and verification.

## Next Steps

- [Claude Code Provider Guide](/docs/providers/claude)
- [Test Migration Use Case](/docs/use-cases/test-migration)
