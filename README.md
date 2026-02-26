# Agentic Design — AI-Augmented QA & SDET Engineering Guidelines

[![Documentation Website](https://img.shields.io/badge/docs-live-blue.svg)](https://vinipx.github.io/agentic-design/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Version:** 1.1.0  
**Target Audience:** QA Engineers, SDETs, DevOps Engineers

---

## 📚 Read the Full Documentation

This repository has transitioned from a single markdown file to a full Docusaurus documentation site. 

**👉 Visit the live documentation site: [Agentic Design Documentation](https://vinipx.github.io/agentic-design/)**

---

## What is Agentic Design?

This repository establishes the foundational design patterns, prompt engineering constraints, and configuration standards for integrating Large Language Models (LLMs) and autonomous coding agents into our software testing ecosystem. 

As AI capabilities become intrinsic to our CI/CD pipelines and framework architectures, these unified practices ensure scalable, robust, and secure implementations across all major AI tooling providers.

### Supported Providers
We offer precise, standardized configurations and workflows for:
- 🤖 **Cursor** (Composer, Rules, Skills, MCP)
- ✨ **Gemini CLI** (Terminal Agents, Workspace Mandates, Sub-agents)
- 🧠 **Claude Code** (Interactive Refactoring, Repository Auditing)
- 🐙 **GitHub Copilot** (Inline generation, Edits, Workspace Queries)
- ⚡ **OpenAI** (Stateless API inference for CI/CD failures via Structured Outputs)

### Core Architectural Principles
1. **Determinism in Verification:** AI must *generate* or *analyze* tests, but the execution and assertion mechanisms must remain deterministic.
2. **Context Bounding:** Limit the scope of context provided to agents using Native Context Files (e.g., `.cursor/rules/*.mdc`, `GEMINI.md`, `CLAUDE.md`).
3. **Idempotency:** Generated test scripts must be idempotent using structured setup/teardown hooks.
4. **Security & Data Privacy:** Never pass production PII or sensitive secrets into prompts or agent context windows.

---

## Repository Structure

- `/documentation` — The Docusaurus site source code containing all guides, provider templates, and tutorials.
- `README.md` — This entry point.

## Contributing to the Docs

To run the documentation site locally:

```bash
cd documentation
npm install
npm start
```

The site will be available at `http://localhost:3000`. Changes to the `main` branch automatically deploy via GitHub Actions.
