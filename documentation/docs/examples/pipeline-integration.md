---
sidebar_position: 1
---

# Example: Pipeline Integration

Full GitHub Actions workflow for E2E tests with AI triage.

## Workflow File

Create `.github/workflows/ai_triage.yml`:

```yaml
name: E2E Tests with AI Triage

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          
      - name: Install dependencies
        run: npm ci
        
      - name: Install Playwright browsers
        run: npx playwright install --with-deps
        
      - name: Run Playwright tests
        run: npx playwright test
        id: playwright_execution
        continue-on-error: true
        
      - name: AI Root Cause Analysis
        if: steps.playwright_execution.outcome == 'failure'
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: |
          node scripts/ai-triage.js ./test-results/failures.log
          
      - name: Fail build if tests failed
        if: steps.playwright_execution.outcome == 'failure'
        run: exit 1
```

## Required Secrets

- `OPENAI_API_KEY` — Add in repository Settings → Secrets and variables → Actions

## AI Triage Script

The `scripts/ai-triage.js` script should:

1. Read failure logs
2. Call OpenAI API with the structured prompt from [OpenAI Provider](/docs/providers/openai)
3. Output or post the JSON analysis
