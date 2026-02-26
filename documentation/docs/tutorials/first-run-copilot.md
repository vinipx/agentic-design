---
sidebar_position: 4
---

# Tutorial: First Run with GitHub Copilot for SDET

Configure GitHub Copilot for real-time test authoring and PR validation.

## Prerequisites

- GitHub Copilot subscription
- Copilot extension installed in VS Code or JetBrains IDE

## Step 1: Create Copilot Instructions

Create `.github/copilot-instructions.md` in the repository root:

```markdown
# GitHub Copilot Instructions for SDETs

When generating tests or test-related code in this repository:

- **Language/Framework:** Assume Java 17+ and JUnit 5 for backend tests. Assume TypeScript and Playwright for frontend tests.
- **Naming Conventions:** Test methods must follow the `methodName_stateUnderTest_expectedBehavior` convention (e.g., `login_invalidCredentials_throwsUnauthorizedException`).
- **Structure:** Strictly adhere to the Arrange-Act-Assert (AAA) pattern. Use blank lines to separate the three sections within the test method.
- **Data:** Prefer parameterized tests (`@ParameterizedTest` in JUnit) for testing multiple input variations over writing redundant single-case tests.
- **Mocking:** Use Mockito for Java. Use `page.route()` for Playwright network mocking.
```

## Step 2: Use Descriptive Comments

When generating tests, use clear comments above the target code:

```typescript
// Test: login form validates invalid email format and shows error message
// Arrange: user enters "invalid-email"
// Act: user submits form
// Assert: error message "Invalid email format" is visible
```

## Step 3: Inline Completion

- Start typing a test method name following the convention.
- Use `Tab` to accept Copilot suggestions.
- Review and adjust as needed.

## Best Practices

- **Comment-first:** Write the test intent as a comment, then let Copilot generate the body.
- **Repository instructions:** Keep `.github/copilot-instructions.md` updated for team consistency.
- **Review:** Always review generated code before committing.

## Next Steps

- [GitHub Copilot Provider Guide](/docs/providers/copilot)
- [Use Case: CI Failure Triage](/docs/use-cases/ci-failure-triage)
