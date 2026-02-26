import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HeroBanner() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>AI-Augmented QA & SDET</div>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <p className={styles.heroDescription}>
            Unified design patterns, prompt engineering constraints, and configuration standards for integrating
            LLMs and autonomous coding agents into your software testing ecosystem. Cursor, Gemini, Claude,
            Copilot, and OpenAI — one consistent approach.
          </p>
          <div className={styles.heroButtons}>
            <Link className={styles.heroPrimary} to="/docs/getting-started/introduction">
              Get Started →
            </Link>
            <Link className={styles.heroSecondary} to="/docs/foundations/agents-mcp-workflows">
              Foundations
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

const providerFeatures = [
  {
    badge: "CURSOR",
    color: "#f4a261",
    title: "AI-First IDE",
    description: "Zero-to-one framework scaffolding, Skills, Rules, MCP integrations, Plan Mode, parallel agents.",
  },
  {
    badge: "GEMINI",
    color: "#4285F4",
    title: "Terminal Agent",
    description: "Research → Strategy → Execution. CI/CD augmentation, rapid test scaffolding, sub-agents.",
  },
  {
    badge: "CLAUDE",
    color: "#d97757",
    title: "Framework Refactoring",
    description: "Deep codebase understanding. Migrate Cypress to Playwright, audit coverage across microservices.",
  },
  {
    badge: "COPILOT",
    color: "#2b3137",
    title: "Pair Programmer",
    description: "Inline test completion, unit test generation, PR descriptions. Repository-level instructions.",
  },
  {
    badge: "OPENAI",
    color: "#10a37f",
    title: "CI/CD Inference",
    description: "Stateless API for log analysis, bug triage, zero-shot test generation in pipelines.",
  },
];

const corePrinciples = [
  {
    icon: "✓",
    title: "Determinism",
    description: "AI generates or analyzes; execution and assertions remain deterministic.",
  },
  {
    icon: "📦",
    title: "Context Bounding",
    description: "Limit scope to relevant Page Objects, API contracts, and logs.",
  },
  {
    icon: "🔄",
    title: "Idempotency",
    description: "Generated tests use setup/teardown hooks (beforeEach, afterAll).",
  },
  {
    icon: "🔒",
    title: "Security",
    description: "No production PII or secrets in prompts. Use anonymized data.",
  },
];

function ProvidersSection() {
  return (
    <section className={styles.capabilities}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Provider Guidelines</h2>
          <p>Platform-specific templates and best practices for each AI provider</p>
        </div>
        <div className={styles.capabilityGrid}>
          {providerFeatures.map((item, idx) => (
            <div key={idx} className={styles.capabilityCard}>
              <span className={styles.capabilityBadge} style={{ backgroundColor: item.color }}>
                {item.badge}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Architectural Principles</h2>
          <p>Foundational rules for AI in QA</p>
        </div>
        <div className={styles.featuresGrid}>
          {corePrinciples.map((item, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  return (
    <section className={styles.quickStart}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Quick Start</h2>
          <p>Pick your provider and follow the tutorial</p>
        </div>
        <div className={styles.quickStartGrid}>
          <Link to="/docs/tutorials/first-run-cursor" className={styles.quickStartCard}>
            <strong>Cursor</strong>
            <span>AI-first IDE for QA workflows</span>
          </Link>
          <Link to="/docs/tutorials/first-run-gemini" className={styles.quickStartCard}>
            <strong>Gemini CLI</strong>
            <span>Terminal-based test scaffolding</span>
          </Link>
          <Link to="/docs/tutorials/first-run-claude" className={styles.quickStartCard}>
            <strong>Claude Code</strong>
            <span>Framework migration</span>
          </Link>
          <Link to="/docs/tutorials/first-run-copilot" className={styles.quickStartCard}>
            <strong>GitHub Copilot</strong>
            <span>Inline test authoring</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="AI-Augmented QA & SDET"
      description={`${siteConfig.tagline}. Unified guidelines for Cursor, Gemini, Claude, Copilot, and OpenAI.`}
    >
      <HeroBanner />
      <main>
        <ProvidersSection />
        <PrinciplesSection />
        <QuickStartSection />
      </main>
    </Layout>
  );
}
