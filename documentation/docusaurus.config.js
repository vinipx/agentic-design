// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Agentic Design",
  tagline: "AI-Augmented QA & SDET Engineering Guidelines",
  favicon: "img/favicon.svg",

  url: process.env.DOCS_URL || "https://vinipx.github.io",
  baseUrl: process.env.DOCS_BASE_URL || "/agentic-design/",

  organizationName: "vinipx",
  projectName: "agentic-design",
  trailingSlash: false,

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/vinipx/agentic-design/tree/main/documentation/",
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo.svg",

      mermaid: {
        theme: {
          light: "base",
          dark: "dark",
        },
        options: {
          themeVariables: {
            primaryColor: "#1a1a2e",
            primaryTextColor: "#e2e8f0",
            primaryBorderColor: "#3b82f6",
            lineColor: "#60a5fa",
            secondaryColor: "#1e1e2e",
            tertiaryColor: "#eff6ff",
          },
        },
      },

      announcementBar: {
        id: "agentic_design_v1",
        content:
          '🤖 Agentic Design — Unified AI patterns for QA/SDETs across Cursor, Gemini, Claude, Copilot & OpenAI. <a target="_blank" rel="noopener noreferrer" href="https://github.com/vinipx/agentic-design">Star us on GitHub</a>',
        backgroundColor: "#111111",
        textColor: "#d4d4d8",
        isCloseable: true,
      },

      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: "Agentic Design",
        logo: {
          alt: "Agentic Design Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
          width: 36,
          height: 36,
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docs",
            position: "left",
            label: "Documentation",
          },
          {
            to: "/docs/getting-started/introduction",
            label: "Getting Started",
            position: "left",
          },
          {
            to: "/docs/foundations/agents-mcp-workflows",
            label: "Foundations",
            position: "left",
          },
          {
            type: "dropdown",
            label: "Providers",
            position: "left",
            items: [
              { label: "OpenAI", to: "/docs/providers/openai" },
              { label: "Gemini CLI", to: "/docs/providers/gemini" },
              { label: "Claude Code", to: "/docs/providers/claude" },
              { label: "GitHub Copilot", to: "/docs/providers/copilot" },
              { label: "Cursor", to: "/docs/providers/cursor" },
            ],
          },
          {
            type: "dropdown",
            label: "Tutorials",
            position: "left",
            items: [
              { label: "Setup Cursor for QA", to: "/docs/tutorials/first-run-cursor" },
              { label: "Setup Gemini for Tests", to: "/docs/tutorials/first-run-gemini" },
              { label: "Setup Claude for Migration", to: "/docs/tutorials/first-run-claude" },
              { label: "Setup Copilot for SDET", to: "/docs/tutorials/first-run-copilot" },
              { label: "AI Triage in CI/CD", to: "/docs/tutorials/ai-triage-pipeline" },
            ],
          },
          {
            type: "dropdown",
            label: "Use Cases",
            position: "left",
            items: [
              { label: "E2E Framework Scaffolding", to: "/docs/use-cases/e2e-scaffolding" },
              { label: "Test Migration", to: "/docs/use-cases/test-migration" },
              { label: "Flaky Test Investigation", to: "/docs/use-cases/flaky-investigation" },
              { label: "CI Failure Triage", to: "/docs/use-cases/ci-failure-triage" },
            ],
          },
          {
            type: "dropdown",
            label: "Resources",
            position: "left",
            items: [
              { to: "/docs/examples/pipeline-integration", label: "Examples" },
              { to: "/docs/references/links", label: "References" },
            ],
          },
          {
            href: "https://github.com/vinipx/agentic-design",
            label: "GitHub",
            position: "right",
          },
        ],
      },

      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              { label: "Getting Started", to: "/docs/getting-started/introduction" },
              { label: "Foundations", to: "/docs/foundations/agents-mcp-workflows" },
              { label: "Principles", to: "/docs/principles/architectural-principles" },
            ],
          },
          {
            title: "Providers",
            items: [
              { label: "Cursor", to: "/docs/providers/cursor" },
              { label: "Gemini CLI", to: "/docs/providers/gemini" },
              { label: "Claude Code", to: "/docs/providers/claude" },
              { label: "GitHub Copilot", to: "/docs/providers/copilot" },
              { label: "OpenAI", to: "/docs/providers/openai" },
            ],
          },
          {
            title: "Guides",
            items: [
              { label: "Tutorials", to: "/docs/tutorials/first-run-cursor" },
              { label: "Use Cases", to: "/docs/use-cases/e2e-scaffolding" },
              { label: "Examples", to: "/docs/examples/pipeline-integration" },
            ],
          },
          {
            title: "Links",
            items: [
              { label: "GitHub", href: "https://github.com/vinipx/agentic-design" },
              { label: "References", to: "/docs/references/links" },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Agentic Design — AI-Augmented QA & SDET Engineering Guidelines`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          "java",
          "groovy",
          "bash",
          "json",
          "yaml",
          "typescript",
          "markdown",
        ],
      },

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

export default config;
