<skill_name>sdet-playwright</skill_name>
<description>Guide for creating and refactoring Playwright test specs using the POM standard.</description>

<instructions>
When generating Playwright tests:
1. Research the codebase to locate the target page object models in `/pages`.
2. Ensure you use Playwright fixtures and `page.route` to mock network conditions for stability.
3. Upon completing the script, execute `npx playwright test <file_path>` using `run_shell_command`.
4. If the test fails, do not ask the user for help; instead, read the stdout, analyze the failure, correct the locator or assertion, and retry.
</instructions>