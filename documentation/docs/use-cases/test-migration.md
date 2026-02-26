---
sidebar_position: 2
---

# Use Case: Test Migration (Cypress → Playwright)

Migrate existing Cypress tests to Playwright using Claude Code or Cursor.

## Scenario

You have a Cypress test suite and need to migrate to Playwright for better performance and maintainability.

## Recommended Provider

**Claude Code** — Best for deep contextual understanding of large codebases and multi-file refactoring.

## Steps

### 1. Create Migration Directive

Create `docs/claude_migration_directive.md` with:

- Source paths (e.g., `cypress/e2e/auth/`)
- Target paths (e.g., `tests/e2e/auth/`)
- Constraints (locator translation, state management, validation)

See [Claude Provider](/docs/providers/claude) for the full template.

### 2. Analyze First

Instruct the agent to review:

- `tests/support/auth_helpers.ts` (or equivalent)
- Existing Playwright fixtures and config

### 3. Translation Rules

- `cy.get()` → `page.getByRole()`, `page.getByTestId()`, or `page.locator()`
- `cy.intercept()` → `page.route()`
- `cy.fixture()` → `fs.readFileSync` or test data modules
- `cy.session()` → `test.use({ storageState: 'state.json' })`

### 4. Validate

Do not consider migration complete until:

- `npx playwright test tests/e2e/auth/` passes
- No `page.waitForTimeout()` in migrated code
