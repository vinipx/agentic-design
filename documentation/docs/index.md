---
sidebar_position: 1
---

# AI-Augmented QA & SDET Engineering Guidelines

**Version:** 1.1.0  
**Target Audience:** QA Engineers, SDETs, DevOps Engineers

This repository establishes the foundational design patterns, prompt engineering constraints, and configuration standards for integrating Large Language Models (LLMs) and autonomous coding agents into our software testing ecosystem. As AI capabilities become intrinsic to our CI/CD pipelines and framework architectures, these unified practices ensure scalable, robust, and secure implementations.

## What You Will Find Here

- **Foundations** — Understand AI agents, agentic workflows, and the Model Context Protocol (MCP)
- **Architectural Principles** — Determinism, context bounding, idempotency, and security
- **Provider Guidelines** — Platform-specific templates for OpenAI, Gemini CLI, Claude Code, GitHub Copilot, and Cursor
- **Tutorials** — Step-by-step setup for each provider with QA/SDET use cases
- **Use Cases** — E2E scaffolding, test migration, flaky investigation, CI failure triage
- **Examples** — Ready-to-use templates and pipeline integration patterns

## Quick Navigation

| Section | Description |
|---------|-------------|
| [Foundations](/docs/foundations/agents-mcp-workflows) | Agents, MCPs, and agentic workflows |
| [Comparative Matrix](/docs/getting-started/comparative-matrix) | Best QA/SDET use case per provider |
| [Principles](/docs/principles/architectural-principles) | Architectural principles for AI in QA |
| [Providers](/docs/providers/cursor) | Cursor, Gemini, Claude, Copilot, OpenAI |
| [Tutorials](/docs/tutorials/first-run-cursor) | First-run guides per provider |
| [Use Cases](/docs/use-cases/e2e-scaffolding) | Real-world scenarios |
| [Examples](/docs/examples/pipeline-integration) | Templates and CI/CD patterns |

## Core Philosophy

AI must *generate* or *analyze* tests, but the execution and assertion mechanisms must remain **deterministic**. Never use LLMs to dynamically determine test pass/fail status without a hardcoded fallback assertion.
