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