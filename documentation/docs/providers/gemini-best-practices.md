---
sidebar_position: 6
---

# Agent Workflows & Best Practices

Gemini CLI operates autonomously through a structured lifecycle. Understanding this lifecycle ensures you get the most out of your autonomous shell companion for QA and SDET tasks.

## The Development Lifecycle

Gemini CLI operates using a **Research → Strategy → Execution** lifecycle.

### 1. Research
The agent systematically maps the codebase and validates assumptions before touching any code. 
- It uses `grep_search` and `glob` search tools extensively (often in parallel) to understand file structures, existing code patterns, and conventions. 
- It prioritizes empirical reproduction of reported issues to confirm failure states.

**Best Practice:** Encourage the agent to search broadly. Ensure your `.geminiignore` is well-configured to prevent context exhaustion from heavy execution artifacts.

### 2. Strategy
Based on its research, the agent formulates a grounded plan. It will share a concise summary of its strategy before proceeding.

### 3. Execution (Plan → Act → Validate)
For each sub-task, the agent iterates through:
- **Plan:** Define the specific implementation approach and the testing strategy.
- **Act:** Apply targeted, surgical changes strictly related to the sub-task using tools like `replace`, `write_file`, and `run_shell_command`. 
- **Validate:** Run tests and workspace standards to confirm success.

## Validation is Mandatory

Validation is not merely running tests; it is the exhaustive process of ensuring every aspect of the change is correct. 

- **Empirical Proof:** For bug fixes or flaky tests, the agent will attempt to reproduce the failure with a test case before applying the fix.
- **Terminal Execution:** The agent is mandated to use `run_shell_command` to execute build, linting, and test-checking commands (e.g., `npx playwright test <file>`). Never accept an unverified change.

## Efficiency & Context Management

- **Parallelism:** Gemini CLI executes multiple independent tool calls (like searching the codebase) in parallel.
- **Explain Before Acting:** The agent provides a concise explanation of its intent immediately before executing tool calls. This keeps you informed during long operations.
- **Non-Interactive Commands:** When executing shell commands, the agent prefers non-interactive flags (e.g., `--yes` or `--ci`) to prevent the environment from hanging. 

## Utilizing the Shell

Gemini CLI uses `bash -c <command>` for terminal execution. It can:
- Scaffold applications (`npm create playwright@latest --yes`).
- Run background processes (by setting the tool's `is_background` parameter to true) for long-running servers.
- Execute project-specific commands mapped from your `package.json` or `Makefile`.

## Security & Git Workflows

- **Credential Protection:** Gemini CLI is strictly mandated to never log, print, or commit secrets, API keys, or sensitive credentials. Ensure your `.env` files are in `.geminiignore` and `.gitignore`.
- **Git Operations:** The CLI will gather context using `git status` and `git diff` but will **never** stage or commit changes unless explicitly instructed by you. When asked to commit, it will propose a draft message focusing on the "why" and wait for your feedback before proceeding.
