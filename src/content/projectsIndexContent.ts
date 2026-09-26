// Card-level content for the homepage Projects section.
//
// Every line here is drawn from text that already exists in kithContent.ts,
// studyHubContent.ts, or foundersalesContent.ts. The `source` field on each
// highlight/stat names where it came from, so a copy edit in the source file
// is easy to mirror here. Nothing on a card is a new claim or a new metric —
// every number here also appears in the project's own `numbers.stats`.
//
// `title` is an engineering-framed subtitle ("Kith — High-Concurrency
// Ledger & Async Job Pipeline") aimed at a backend/distributed-systems
// hiring manager skimming the homepage: it leads with the hard technical
// problem, not the consumer pitch. `tagline` is the one-line "how I built
// X" hook under it. `summary` is the fuller product-framed paragraph from
// each project's own hero — kept as the secondary line so the card still
// says what the thing actually does, just not first.
//
// Where a project has no live demo, `liveDemo` is omitted and the card
// renders no dead button.

import { links as kithLinks } from "./kithContent";
import { links as studyHubLinks, hero as studyHubHero } from "./studyHubContent";
import { links as founderSalesLinks } from "./foundersalesContent";

import kithHeroImage from "../assets/dashboard-full-overview.png";
import studyHubHeroImage from "../assets/system-architecture.png";
import founderSalesHeroImage from "../assets/home-dashboard.png";

export interface ProjectHighlight {
  text: string;
  // Where this sentence comes from, for future copy edits. Not rendered.
  source: string;
}

export interface ProjectStat {
  value: string;
  label: string;
  source: string;
}

export interface ProjectSummary {
  slug: "kith" | "studyhub" | "foundersales";
  index: string; // "01"
  featured: boolean;
  eyebrow: string;
  // Short project name only ("Kith"), rendered as the h3.
  title: string;
  // Engineering-framed subtitle, shown as a smaller line directly under
  // `title`. e.g. "High-Concurrency Ledger & Async Job Pipeline."
  engineeringSubtitle: string;
  // The "how I built X" hook sentence, shown under the subtitle. e.g.
  // "How I engineered an append-only ledger with zero race conditions
  // under concurrent writes, across a 9-queue async job pipeline."
  tagline: string;
  // The fuller product-framed paragraph, from the project's own hero.
  // Secondary to `tagline` on the card — still true, just not the lead.
  summary: string;
  image: string;
  imageAlt: string;
  stack: string[];
  highlights: ProjectHighlight[];
  stats: ProjectStat[];
  // Shown in the existing "pending" callout style. Omitted for Kith, which
  // states its own scope in reflectionContent.motivation.timelineNote.
  status?: string;
  // Optional second line under `status`.
  statusDetail?: string;
  github: string;
  liveDemo?: string;
  ciBadge?: string;
  ciWorkflow?: string;
}

export const projectsSection = {
  eyebrow: "§00 PROJECTS",
  heading: "Three systems, built solo. Each one a different kind of hard.",
  intro:
    "Each case study goes into the architecture, the decisions behind it, and the parts that are honestly not finished.",
};

export const projects: ProjectSummary[] = [
  {
    slug: "kith",
    index: "01",
    featured: true,
    eyebrow: "CASE STUDY 01",
    title: "Kith",
    engineeringSubtitle: "Concurrent Financial Ledger & Async Job Pipeline",
    // Hook: reliability.body ("Nine Redis-backed BullMQ queues... move
    // notifications, cycle generation, reminders, and exports out of the
    // HTTP request/response cycle") + numbers.stats[2] (18 ADRs) +
    // disputes.intro (atomic transaction) + ledger.beats[1] (idempotency).
    tagline:
      "How I built an append-only ledger with atomic dispute transactions, idempotency-key duplicate detection, and a 9-queue async job pipeline \u2014 backed by 18 documented architecture decisions.",
    // kithContent.hero.headline + hero.subhead (trimmed) \u2014 kept as the
    // secondary line so the card still says what the product actually is.
    summary:
      "A family's shared money, kept honest. A backend-heavy coordination platform for household finance: a ledger that survives disputes, recurring pools that run themselves, and a permission model built for people who will never log in.",
    image: kithHeroImage,
    imageAlt:
      "The Kith workspace dashboard showing members, overdue contributions, an open dispute, pending confirmations, active events, a recurring pool, tasks, milestones, and recent activity",
    // kithContent.stack
    stack: [
      "Node.js",
      "Express",
      "Postgres (Supabase)",
      "Redis",
      "BullMQ",
      "React",
      "TypeScript",
    ],
    highlights: [
      {
        // kithContent.engineeringJudgment ADR-0012 + ledger.beats[1].caption
        text: "State integrity: an idempotency key gives retries an exact-match guarantee, while a separate ten-minute heuristic catches genuine human duplicates \u2014 closing both the network-retry and double-submit failure modes without blocking a real second contribution.",
        source: "engineeringJudgment.callouts[ADR-0012], ledger.beats[1].caption",
      },
      {
        // kithContent.disputes.intro + disputes.beats[1].caption
        text: "Atomic concurrency: dispute and correction state changes run as single, all-or-nothing Postgres transactions, so a confirmed ledger entry can never be left half-updated under concurrent access.",
        source: "disputes.intro, disputes.beats[1].caption",
      },
      {
        // kithContent.reliability.body + reliability.beats[1].caption (outbox scan)
        text: "Fault-tolerant queues: 9 dedicated BullMQ queues move notifications, cycle generation, and reminders off the request path, with a 5-minute outbox scanner that re-enqueues any delivery an enqueue() failure silently dropped.",
        source: "reliability.body, reliability.beats[1].caption",
      },
    ],
    stats: [
      {
        value: "9",
        label: "background job queues, each with a dedicated worker",
        source: "numbers.stats[0]",
      },
      {
        value: "18",
        label: "documented architecture decision records",
        source: "numbers.stats[2]",
      },
      {
        value: "3",
        label: "Jest test projects: unit, integration, and rate-limiting",
        source: "numbers.stats[5]",
      },
    ],
    github: kithLinks.github,
    liveDemo: kithLinks.liveDemo,
    ciBadge: kithLinks.ciBadge,
    ciWorkflow: kithLinks.ciWorkflow,
  },
  {
    slug: "studyhub",
    index: "02",
    featured: false,
    eyebrow: "CASE STUDY 02",
    title: "StudyHub",
    engineeringSubtitle: "Multi-Worker Refactor & Classified AI Failover",
    // Hook: scaling.intro/result (single-process -> Redis-coordinated,
    // gunicorn -w 1 -> -w N) + numbers.stats[2] (6 LLM providers) +
    // ai.classification (four-category failure classification).
    tagline:
      "How I refactored a single-process backend into a Redis-coordinated architecture safe to run on multiple workers, behind a 6-provider LLM failover engine that classifies failures instead of retrying blindly.",
    // studyHubContent.hero.headline + hero.subhead (trimmed) \u2014 kept as
    // the secondary line so the card still says what the product is.
    summary:
      "Peer tutoring, made discoverable. A peer-to-peer academic platform built around one idea: reputation earned by helping other students should be the platform's actual currency.",
    image: studyHubHeroImage,
    imageAlt:
      "StudyHub system architecture: client, request perimeter, auth chain, application layer, async processing, real-time layer, data layer, and external services",
    // studyHubContent.stack
    stack: [
      "Flask",
      "PostgreSQL",
      "Redis",
      "Flask-SocketIO",
      "RQ",
      "APScheduler",
    ],
    highlights: [
      {
        // studyHubContent.scaling.table + scaling.result (gunicorn -w 1 -> -w N)
        text: "Horizontal scaling: migrated WebSocket presence, thread-message rate limits, and scheduler job locks from process-local state to Redis, moving the supported deployment shape from a forced gunicorn -w 1 to gunicorn -w N.",
        source: "scaling.table, scaling.result",
      },
      {
        // studyHubContent.ai.intro + ai.classification
        text: "AI resilience: five AI product surfaces funnel into one engine that classifies every provider failure into one of four categories (key fault, provider transient, bad model, non-retryable) instead of retrying blindly.",
        source: "ai.intro, ai.classification",
      },
      {
        // studyHubContent.reliability.body (ThreadPoolExecutor)
        text: "Latency isolation: AI dispatch runs inside a bounded thread pool specifically so a slow model response can't block the WebSocket event loop \u2014 one of three background-processing mechanisms chosen deliberately for the job it does.",
        source: "reliability.body",
      },
    ],
    stats: [
      {
        value: "55",
        label: "SQLAlchemy models across the schema",
        source: "numbers.stats[0]",
      },
      {
        value: "13",
        label: "major product domains",
        source: "numbers.stats[1]",
      },
      {
        value: "6",
        label: "LLM providers behind one failover engine",
        source: "numbers.stats[2]",
      },
    ],
    status: studyHubHero.statusNote,
    github: studyHubLinks.github,
    liveDemo: studyHubLinks.liveDemo,
  },
  {
    slug: "foundersales",
    index: "03",
    featured: false,
    eyebrow: "CASE STUDY 03",
    title: "FounderSales",
    engineeringSubtitle: "Cost-Gated AI Pipeline & Distributed Failover",
    // Hook: costGating.heading/intro (decision made before the call) +
    // aiReliability.intro (4-provider fallback chain, fixed priority order)
    // + practice.body[0] (4 sequential calls consolidated into 1).
    tagline:
      "How I built a cost gate that decides whether to call the model before spending the call, behind a 4-provider fallback chain (Cerebras \u2192 Groq \u2192 Mistral \u2192 OpenRouter) with cross-instance Redis cooldown state.",
    // foundersalesContent.hero.headline + hero.subhead (trimmed) \u2014
    // kept as the secondary line so the card still says what the product is.
    summary:
      "An AI sales coach that decides whether an AI call is worth making. A multi-tenant coaching and outreach platform for founders who have never done outbound before.",
    image: founderSalesHeroImage,
    imageAlt:
      "FounderSales home dashboard with momentum score, 30-day activity chart, growth feed, active goals, and quick-start chat prompts",
    // foundersalesContent.stack
    stack: [
      "Node.js",
      "Express",
      "Supabase Postgres",
      "Redis",
      "BullMQ",
    ],
    highlights: [
      {
        // foundersalesContent.practice.body[0] (4 sequential calls -> 1)
        text: "Cost and latency: an earlier design made the buyer reply, internal monologue, outcome check, and coaching tip as four sequential calls; generatePracticeProspectReplyV3 bundles all of it, plus the state delta, into one response.",
        source: "practice.body[0]",
      },
      {
        // foundersalesContent.aiReliability.intro (fixed priority order) + classification
        text: "Distributed cooldowns: a 4-provider fallback chain (Cerebras \u2192 Groq \u2192 Mistral \u2192 OpenRouter) classifies every failure into one of four categories, and key cooldowns are shared across instances via Redis so no node keeps hitting a key already known to be failing.",
        source: "aiReliability.intro, distributedState.body[0]",
      },
      {
        // foundersalesContent.distributedState.failureNote
        text: "Graceful degradation: every Redis helper fails open \u2014 an outage degrades precision (per-instance rate limits, no caching) but never takes down a request.",
        source: "distributedState.failureNote",
      },
    ],
    stats: [
      {
        value: "4",
        label: "AI providers in one fallback chain",
        source: "numbers.stats[0]",
      },
      {
        value: "3",
        label: "BullMQ queues, each with its own worker and concurrency",
        source: "numbers.stats[2]",
      },
      {
        value: "21",
        label: "cron-registered scheduled jobs",
        source: "numbers.stats[3]",
      },
    ],
    // First sentence of foundersalesContent.hero.statusNote, verbatim. The
    // rest of that note refers to "this page" and its Honest Gaps section,
    // which only makes sense inside the case study itself.
    status: "Actively in development, built solo.",
    statusDetail:
      "No live deployment yet, and no billing system. Unfinished pieces are named in the case study's Honest Gaps section.",
    github: founderSalesLinks.github,
    // No liveDemo: foundersalesContent.hero.statusNote states there is no
    // live deployment yet.
    ciBadge: founderSalesLinks.ciBadge,
    ciWorkflow: founderSalesLinks.ciWorkflow,
  },
];
