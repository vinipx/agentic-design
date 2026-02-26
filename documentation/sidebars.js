/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "doc",
      id: "index",
      label: "Introduction",
    },
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: ["getting-started/introduction", "getting-started/comparative-matrix"],
    },
    {
      type: "category",
      label: "Foundations",
      collapsed: false,
      items: ["foundations/agents-mcp-workflows"],
    },
    {
      type: "category",
      label: "Architectural Principles",
      items: ["principles/architectural-principles"],
    },
    {
      type: "category",
      label: "Provider Guidelines",
      collapsed: false,
      items: [
        "providers/openai",
        {
          type: "category",
          label: "Gemini CLI",
          collapsed: true,
          items: [
            "providers/gemini",
            "providers/gemini-context",
            "providers/gemini-skills",
            "providers/gemini-subagents",
            "providers/gemini-best-practices",
          ],
        },
        "providers/claude",
        "providers/copilot",
        {
          type: "category",
          label: "Cursor",
          collapsed: true,
          items: [
            "providers/cursor",
            "providers/cursor-rules",
            "providers/cursor-skills",
            "providers/cursor-mcp",
            "providers/cursor-best-practices",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      items: [
        "tutorials/first-run-cursor",
        "tutorials/first-run-gemini",
        "tutorials/first-run-claude",
        "tutorials/first-run-copilot",
        "tutorials/ai-triage-pipeline",
      ],
    },
    {
      type: "category",
      label: "Use Cases",
      items: [
        "use-cases/e2e-scaffolding",
        "use-cases/test-migration",
        "use-cases/flaky-investigation",
        "use-cases/ci-failure-triage",
      ],
    },
    {
      type: "category",
      label: "Examples",
      items: ["examples/pipeline-integration", "examples/templates"],
    },
    {
      type: "category",
      label: "References",
      items: ["references/links"],
    },
  ],
};

export default sidebars;
