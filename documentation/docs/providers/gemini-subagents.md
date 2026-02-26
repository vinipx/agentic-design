---
sidebar_position: 5
---

# Available Sub-Agents

Sub-agents in Gemini CLI are specialized expert agents. They are available as tools and allow the main agent to delegate specific, complex tasks to an entity with specialized expertise.

## `codebase_investigator`

The `codebase_investigator` is the specialized tool for codebase analysis, architectural mapping, and understanding system-wide dependencies. 

**Use Cases:**
- **Bug Root-Cause Analysis:** Invoke it when investigating flaky tests or regressions. It returns a structured report with key file paths, symbols, and actionable architectural insights.
- **System Refactoring:** Use it to map out tight couplings or widespread test fixture usage before making changes.
- **Comprehensive Feature Implementation:** Delegate to it when you need to understand the ripple effects of a new feature across the test suite.

**How it works:**
The main agent provides the `codebase_investigator` with a comprehensive objective (including the original request and extra context). The investigator explores the workspace autonomously and returns an actionable report.

## `cli_help`

The `cli_help` sub-agent specializes in answering questions about Gemini CLI itself: its features, documentation, and current runtime configuration.

**Use Cases:**
- Asking how to configure specific flags or settings.
- Understanding current workspace contexts loaded by the CLI.
- Finding the right syntax for advanced tool usages.
