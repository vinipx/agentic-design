---
sidebar_position: 1
---

# Architectural Principles for AI in QA

Apply these principles when integrating AI into your testing ecosystem.

## Determinism in Verification

AI must *generate* or *analyze* tests, but the execution and assertion mechanisms must remain **deterministic**. Never use LLMs to dynamically determine test pass/fail status without a hardcoded fallback assertion.

## Context Bounding

Limit the scope of context provided to agents. Provide only relevant Page Objects, API contracts, or specific test execution logs to prevent hallucinations.

## Idempotency

Generated test scripts must be idempotent. Prompt architectures must explicitly enforce the creation of setup/teardown hooks (e.g., `beforeEach`, `afterAll`).

## Security & Data Privacy

Never pass production PII or sensitive secrets into prompts or agent context windows. Use anonymized data sets for test generation.
