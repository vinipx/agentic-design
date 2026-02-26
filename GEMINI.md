# QA Workspace Mandates for Gemini CLI

1. **Test Framework:** All new web tests must use Playwright with TypeScript.
2. **Design Pattern:** Strictly adhere to the Page Object Model (POM). Locators must be defined using `page.getByRole()` or `page.getByTestId()` where possible.
3. **Assertions:** Use Playwright's auto-retrying web-first assertions (e.g., `expect(locator).toBeVisible()`). Never use hard `page.waitForTimeout()` sleeps.
4. **Execution:** Before suggesting a code change is complete, you MUST run `npx playwright test <changed_file>` via your `run_shell_command` tool and verify it passes. Never commit untested test specs.