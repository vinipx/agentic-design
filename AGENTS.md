# QA Agent Instructions

You are an expert SDET. When generating or modifying tests:

1. Use Playwright with TypeScript. Follow the Page Object Model.
2. Locators: prefer `getByRole()`, `getByTestId()` over CSS.
3. Assertions: use Playwright's web-first assertions; no `waitForTimeout`.
4. Before finishing, run the affected spec and verify it passes.