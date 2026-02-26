---
sidebar_position: 1
---

# Use Case: E2E Framework Scaffolding

Scaffold a new Playwright E2E framework from scratch using Cursor or Gemini CLI.

## Scenario

You need to create a new test repository with:

- Page Object Model structure
- Playwright config
- Sample specs and fixtures
- CI/CD workflow

## Recommended Provider

**Cursor** — Best for zero-to-one framework scaffolding with multi-file generation and deep codebase indexing.

## Steps

### 1. Create Project Structure

Ask the agent: *"Create a Playwright E2E framework with the following structure: /tests for specs, /pages for Page Objects, /fixtures for custom fixtures, /utils for helpers. Use TypeScript and strict POM."*

### 2. Add Rules/Skills

Ensure `.cursor/rules/sdet-architecture.mdc` and `AGENTS.md` are in place (see [First Run Cursor](/docs/tutorials/first-run-cursor)).

### 3. Use Plan Mode

For large scaffolding, enable **Plan Mode** (`Shift+Tab`) so the agent proposes a plan before creating files.

### 4. Validate

Run `npx playwright test` and iterate until all specs pass.

## Example Output Structure

```
project/
├── tests/
│   └── login.spec.ts
├── pages/
│   └── LoginPage.ts
├── fixtures/
│   └── test.ts
├── utils/
│   └── test-data.ts
├── playwright.config.ts
├── AGENTS.md
└── .cursor/
    └── rules/
        └── sdet-architecture.mdc
```
