---
sidebar_position: 4
---

# Agent Skills in Gemini CLI

**Skills** extend Gemini CLI's capabilities with specialized knowledge, workflows, or tool integrations. When a task requires specialized expertise, Gemini can activate a skill dynamically using its `activate_skill` tool.

## Skill Activation

Once a skill is activated, its instructions and resources are returned to the agent wrapped in `<activated_skill>` tags. 

- The content within `<instructions>` acts as expert procedural guidance.
- Gemini CLI prioritizes these specialized rules and workflows over its general defaults for the duration of the task.

## The Built-in `skill-creator`

Gemini CLI has a built-in skill called `skill-creator`. You can invoke it by asking: *"Create a new skill for..."*

This skill guides the agent in generating effective custom skills tailored to your repository. It knows the exact structure and markdown/XML tags required to create a well-formed `SKILL.md` file.

## Custom Skill Structure

Custom skills are defined in your repository under `.gemini/skills/`.

```
.gemini/skills/
└── sdet-playwright/
    └── SKILL.md
```

### Example: SDET Playwright Skill

`.gemini/skills/sdet-playwright/SKILL.md`:

```markdown
<skill_name>sdet-playwright</skill_name>

<description>
Scaffold and maintain Playwright tests using Page Object Model. Use when creating new specs, migrating from Cypress, or refactoring test structure.
</description>

<instructions>
# Playwright SDET Workflow

1. **Page Objects:** Always create or update a Page Object in `pages/` using `readonly` locators.
2. **Specs:** Create the spec in `tests/` and import the appropriate Page Object.
3. **Assertions:** Rely on Playwright's web-first assertions (e.g., `expect(locator).toBeVisible()`). Never use hard timeouts like `page.waitForTimeout()`.
4. **Validation:** Execute `npx playwright test <changed_file>` using the `run_shell_command` tool to empirically verify the change passes before marking the task complete.

## Checkpoints
- Ensure locators use `getByRole` or `getByTestId` where available.
- Ensure the test is fully verified locally before concluding.
</instructions>

<available_resources>
- Playwright Documentation: https://playwright.dev/docs/intro
</available_resources>
```
