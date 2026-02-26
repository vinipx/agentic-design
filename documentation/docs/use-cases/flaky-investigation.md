---
sidebar_position: 3
---

# Use Case: Flaky Test Investigation

Investigate and fix flaky tests using AI agents.

## Scenario

A test randomly fails in CI. You need to identify root cause (state dependency, timing, environment) and propose a fix.

## Recommended Providers

- **Gemini CLI** — Use `codebase_investigator` sub-agent for root-cause analysis
- **Cursor** — Use semantic search and Plan Mode for systematic investigation

## Steps with Gemini CLI

1. Invoke: *"Investigate why the authentication spec is randomly failing in CI and map the state dependencies across the login module."*
2. The `codebase_investigator` will traverse the codebase and analyze:
   - Shared state between tests
   - Async timing issues
   - Environment-specific behavior
3. Review the analysis and apply suggested fixes (e.g., `test.use({ storageState })`, explicit waits, isolation)

## Steps with Cursor

1. Open the failing spec and related Page Object.
2. Ask: *"This test is flaky in CI. Analyze the login flow, state dependencies, and timing. Suggest a fix."*
3. Use `@Branch` or `@Past Chats` if the failure is in a recent change.
4. Run the test locally multiple times to validate the fix.
