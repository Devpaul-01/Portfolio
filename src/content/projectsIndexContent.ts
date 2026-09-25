// Card-level content for the homepage Projects section.
//
// Every line here is drawn from text that already exists in kithContent.ts,
// studyHubContent.ts, or foundersalesContent.ts. The `source` field on each
// highlight/stat names where it came from, so a copy edit in the source file
// is easy to mirror here. Nothing on a card is a new claim.
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
  title: string;
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
    // kithContent.hero.headline + hero.subhead (trimmed)
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
        // kithContent.engineeringJudgment ADR-0012 + ledger beat 2
        text: "A network retry and a person double-submitting are treated as two different problems: an idempotency key for the exact-match case, a heuristic with a visible override for the human one.",
        source: "engineeringJudgment.callouts[ADR-0012]",
      },
      {
        // kithContent.disputes.intro
        text: "Raising and resolving a dispute flip the dispute and the ledger entry together inside one database transaction, so the two can never disagree.",
        source: "disputes.intro",
      },
      {
        // kithContent.pools.beats[2].caption
        text: "Recurring pools generate cycles ahead of need, with a nightly maintenance job as a fallback if the first attempt silently fails.",
        source: "pools.beats[2].caption",
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
    // studyHubContent.hero.headline + hero.subhead (trimmed)
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
        // studyHubContent.ai.intro
        text: "Five AI product surfaces funnel into one classified retry engine instead of five hand-rolled retry loops.",
        source: "ai.intro",
      },
      {
        // studyHubContent.gamification.body[0]
        text: "Reputation is an append-only ledger with a single write path, so every point change is independently reconstructable from history.",
        source: "gamification.body[0], productModel.nodes[2]",
      },
      {
        // studyHubContent.scaling.intro
        text: "A dedicated refactor moved presence, rate limits, and scheduler coordination from single-process assumptions to Redis, making multi-worker deployment safe.",
        source: "scaling.intro, scaling.result",
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
    // foundersalesContent.hero.headline + hero.subhead (trimmed)
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
        // foundersalesContent.aiReliability.classification
        text: "Provider failures are sorted into four categories (key fault, transient, bad model, non-retryable) so each one gets the right response instead of a blanket retry.",
        source: "aiReliability.classification",
      },
      {
        // foundersalesContent.costGating.heading + intro
        text: "The decision to call the model is made before the call, and every decision, in both directions, is logged.",
        source: "costGating.heading, costGating.intro",
      },
      {
        // foundersalesContent.distributedState.failureNote
        text: "Every Redis helper fails open: an outage degrades precision but never takes down a request.",
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
