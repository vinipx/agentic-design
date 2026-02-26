---
sidebar_position: 2
---

# Example: Ready-to-Use Templates

Copy-paste templates for common configurations.

## AGENTS.md (Cursor)

```markdown
# QA Agent Instructions

You are an expert SDET. When generating or modifying tests:

1. Use Playwright with TypeScript. Follow the Page Object Model.
2. Locators: prefer `getByRole()`, `getByTestId()` over CSS.
3. Assertions: use Playwright's web-first assertions; no `waitForTimeout`.
4. Before finishing, run the affected spec and verify it passes.
```

## GEMINI.md (Gemini CLI)

```markdown
# QA Workspace Mandates for Gemini CLI

1. **Test Framework:** All new web tests must use Playwright with TypeScript.
2. **Design Pattern:** Strictly adhere to the Page Object Model (POM).
3. **Assertions:** Use Playwright's auto-retrying web-first assertions.
4. **Execution:** Run `npx playwright test <changed_file>` before considering changes complete.
```

## .github/copilot-instructions.md

```markdown
# GitHub Copilot Instructions for SDETs

- **Language/Framework:** TypeScript and Playwright for frontend tests.
- **Naming:** `methodName_stateUnderTest_expectedBehavior`
- **Structure:** Arrange-Act-Assert with blank lines.
- **Mocking:** Use `page.route()` for Playwright network mocking.
```

## .cursorignore

```text
node_modules/
playwright-report/
test-results/
blob-report/
*.log
.env*
**/cypress/videos/
**/cypress/screenshots/
```

## .geminiignore

```text
playwright-report/
test-results/
.env.e2e
cypress/videos/
cypress/screenshots/
```
