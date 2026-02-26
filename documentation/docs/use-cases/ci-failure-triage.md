---
sidebar_position: 4
---

# Use Case: CI Failure Triage

Automatically analyze CI test failures and produce actionable triage reports.

## Scenario

Tests fail in CI. Instead of manually parsing logs, an AI agent analyzes them and produces:

- Failure type (ENVIRONMENT, LOCATOR_CHANGED, TIMEOUT, FLAKY, BUG)
- Root cause summary
- Suggested fix
- Affected files

## Recommended Provider

**OpenAI API** — Stateless inference in CI/CD via custom scripts.

## Implementation

1. **Workflow:** See [AI Triage Pipeline Tutorial](/docs/tutorials/ai-triage-pipeline)
2. **Prompt:** Use the structured JSON schema from [OpenAI Provider](/docs/providers/openai)
3. **Output:** Post to Slack, Jira, or GitHub PR comment

## Example Output

```json
{
  "failure_type": "LOCATOR_CHANGED",
  "root_cause_summary": "Login button selector '#login-btn' no longer matches. DOM structure changed in recent deploy.",
  "suggested_fix": "Update LoginPage.ts to use getByRole('button', { name: 'Sign in' }) instead of locator('#login-btn').",
  "affected_files": ["pages/LoginPage.ts", "tests/login.spec.ts"]
}
```
