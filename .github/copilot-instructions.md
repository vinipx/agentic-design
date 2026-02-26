# GitHub Copilot Instructions for SDETs

When generating tests or test-related code in this repository:

- **Language/Framework:** Assume Java 17+ and JUnit 5 for backend tests. Assume TypeScript and Playwright for frontend tests.
- **Naming Conventions:** Test methods must follow the `methodName_stateUnderTest_expectedBehavior` convention (e.g., `login_invalidCredentials_throwsUnauthorizedException`).
- **Structure:** Strictly adhere to the Arrange-Act-Assert (AAA) pattern. Use blank lines to separate the three sections within the test method.
- **Data:** Prefer parameterized tests (`@ParameterizedTest` in JUnit) for testing multiple input variations over writing redundant single-case tests.
- **Mocking:** Use Mockito for Java. Use `page.route()` for Playwright network mocking.