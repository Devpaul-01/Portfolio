// All copy, stats, links and image references for the LLM Gateway showcase
// live here. Section components stay presentational — same convention as
// kithContent.ts / agentBrokerContent.ts.
//
// Every factual claim below was checked against the repository at
// github.com/Devpaul-01/llm-gateway (source, tests, ARCHITECTURE.md,
// SECURITY.md, CI config). Where a claim rests on a test, the test file is
// linked next to it. Nothing here is an adoption figure or a production
// benchmark: the project is self-hosted, is not run as a hosted service, and
// the numbers it does report come from a local demo harness against a mock
// upstream, labelled as such wherever they appear.

import shotDashboard from "../assets/llmgw-dashboard.png";
import shotProviders from "../assets/llmgw-providers.png";
import shotRequests from "../assets/llmgw-requests.png";
import shotProjects from "../assets/llmgw-projects.png";
import shotProjectDetail from "../assets/llmgw-project-detail.png";
import shotTokenGate from "../assets/llmgw-token-gate.png";
import shotNewProject from "../assets/llmgw-new-project-modal.png";
import shotAddCredential from "../assets/llmgw-add-credential-modal.png";
import shotNewKey from "../assets/llmgw-new-gateway-key-modal.png";

const REPO = "https://github.com/Devpaul-01/llm-gateway";
const blob = (path: string) => `${REPO}/blob/main/${path}`;

// The public, token-free /demo page of the deployed Gateway Console. Kept as
// one constant so it can be swapped for a stable production URL in one place.
export const LIVE_DEMO =
  "https://llm-gateway-bx27zp9oo-studyhubplatform.vercel.app/demo";

// -- links --------------------------------------------------------------

export const links = {
  github: REPO,
  liveDemo: LIVE_DEMO,
  ciBadge: `${REPO}/actions/workflows/ci.yml/badge.svg`,
  ciWorkflow: `${REPO}/actions/workflows/ci.yml`,
  ciYml: blob(".github/workflows/ci.yml"),
  architectureDoc: blob("ARCHITECTURE.md"),
  productOverview: blob("PRODUCT_OVERVIEW.md"),
  securityDoc: blob("SECURITY.md"),
  changelog: blob("CHANGELOG.md"),
  // admission + cache + failover source
  budget: blob("internal/budget/budget.go"),
  ratelimit: blob("internal/ratelimit/ratelimit.go"),
  concurrency: blob("internal/concurrency/concurrency.go"),
  respcache: blob("internal/respcache/respcache.go"),
  breaker: blob("internal/breaker/breaker.go"),
  cooldown: blob("internal/cooldown/cooldown.go"),
  crypto: blob("internal/crypto/crypto.go"),
  errors: blob("internal/providers/errors.go"),
  resolve: blob("internal/providers/resolve.go"),
  registry: blob("internal/providers/registry.go"),
  chat: blob("internal/httpserver/chat.go"),
  // tests
  e2eTest: blob("internal/httpserver/e2e_test.go"),
  budgetTest: blob("internal/budget/budget_test.go"),
  concurrencyTest: blob("internal/concurrency/concurrency_test.go"),
  ratelimitTest: blob("internal/ratelimit/ratelimit_test.go"),
  respcacheTest: blob("internal/respcache/respcache_test.go"),
  cryptoTest: blob("internal/crypto/crypto_test.go"),
  resolveTest: blob("internal/providers/resolve_test.go"),
  handlerTest: blob("internal/providers/handler_test.go"),
  // demo tooling
  mockprovider: blob("cmd/mockprovider/main.go"),
  loadtest: blob("cmd/loadtest/main.go"),
  demoCompose: blob("docker-compose.demo.yml"),
  seedSql: blob("scripts/seed_demo_data.sql"),
  demoSection: `${REPO}#try-the-failover-demo-no-api-keys`,
};

// -- hero -----------------------------------------------------------------

export const hero = {
  eyebrow: "ENGINEERING CASE STUDY",
  headline: "An OpenAI-compatible gateway that keeps answering when a provider doesn't.",
  subhead:
    "llm-gateway is a self-hostable Go reverse proxy between an application and twelve LLM providers. Change one thing, base_url, and the app gains automatic failover across models, providers and API keys; a correctness-first response cache; and per-project rate, concurrency and token-budget limits enforced atomically in Redis before any provider is contacted. It ships with a React admin console and a no-API-key demo mode that lets you kill the primary provider on purpose.",
  statusNote:
    "Open source (MIT) and self-hosted. It is not run as a hosted service, so there are no production traffic figures here. The numbers on this page come from the test suite and a local demo harness against a mock upstream, and are labelled as such.",
  buildCommand:
    "docker compose -f docker-compose.yml -f docker-compose.demo.yml up --build",
  statusFootnote:
    "Brings up Postgres, Redis, the gateway and two mock providers. No provider API keys needed. Migrations run on boot.",
  apiHeading: "The whole integration surface: one base_url, one key",
  apiSnippet: `from openai import OpenAI

client = OpenAI(base_url="http://localhost:8080/v1", api_key=KEY)
client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[...],
    stream=True,
    extra_body={"fallback_models": ["mistral-large-latest",
                                    "cerebras:llama3.1-8b"]},
)`,
};

export const stats = [
  { value: "12", label: "built-in providers, all driven through one OpenAI-compatible adapter" },
  { value: "3", label: "independent admission gates, each one atomic Redis Lua script" },
  { value: "84", label: "Go test functions in 22 files, run with -race against real Postgres and Redis in CI" },
  { value: "4", label: "upstream error categories, each with its own failover reaction" },
  { value: "2", label: "external dependencies: Postgres and Redis. No queue, no broker, no worker" },
  { value: "~1 ms", label: "gateway overhead in the local mock-upstream demo (laptop, not a production figure)" },
];

// -- problem ----------------------------------------------------------------

export const problem = {
  eyebrow: "WHY IT EXISTS",
  heading: "Every team calling an LLM re-implements the same fragile layer",
  intro:
    "Whichever provider you pick, it will have a bad minute eventually, and your app's reliability is then only as good as the retry code you remembered to write in each service that calls a model. Three problems in particular are easy to get subtly wrong.",
  items: [
    {
      title: "A provider's bad hour becomes your outage",
      body: "Rate limits, exhausted keys, 5xx errors and dropped streams all land on the caller. Failover scattered across services is inconsistent, and nothing remembers that a provider is already down.",
    },
    {
      title: "Cost control that only works in the happy path",
      body: "A budget checked against max_tokens, or counted after the fact, is not a real budget. Two concurrent requests can both read 'under limit' and both proceed. A runaway loop burns money in minutes.",
    },
    {
      title: "Retries and caches that serve the wrong answer",
      body: "Treating 'it streamed something' as success serves truncated answers, and a naive mid-stream retry splices two models' text together. Caching a failed-over answer replays degraded output forever.",
    },
  ],
  notNote:
    "Scope: chat completions only (POST /v1/chat/completions, plus GET /v1/models). Self-hosted and single-operator by design: one admin token, no user accounts, no RBAC. The limits section lists what is deliberately missing.",
};

// -- console tour ---------------------------------------------------------------

export interface TourImage {
  src: string;
  alt: string;
  caption: string;
}

export const tour = {
  eyebrow: "THE GATEWAY CONSOLE",
  heading: "A dashboard built to show what failover actually saved",
  intro:
    "The gateway's metrics API is shaped to drive a dashboard, not just dump counters. The Gateway Console is a Vite + React + TypeScript single-page app that is a pure client of the gateway's own /admin and /public/metrics routes. It adds no backend and no new routes to the Go service.",
  hero: {
    src: shotDashboard,
    alt: "Gateway Console dashboard showing requests, success rate, requests rescued by failover, requests blocked before a provider, request volume, latency percentiles, cache hit rate, token usage and traffic by provider",
    caption:
      "Dashboard over a 24-hour window: 4.8k requests at 99.0% success, and 91 of the 96 requests that hit a provider failure were rescued by failover (94.8%). Demo data.",
  } as TourImage,
  callouts: [
    {
      label: "Rescued by failover",
      detail:
        "Counts requests that hit at least one provider failure and still succeeded. A plain success rate hides exactly this.",
    },
    {
      label: "Blocked before provider",
      detail:
        "Rate-limit, budget and concurrency rejections are counted, so an operator sees how much traffic was stopped before it cost anything.",
    },
    {
      label: "null is not zero",
      detail:
        "Fields that can mean 'no data' stay null end to end. A provider with no requests shows dashes, not a fabricated 0 ms latency.",
    },
  ],
  gallery: [
    {
      src: shotProviders,
      alt: "Providers page: per-provider requests, share, success rate, p50 and p95 latency, time to first token, tokens, attempts and a failure breakdown",
      caption:
        "Providers: a live per-provider scoreboard with attempts ok/failed and a failure breakdown. The dead mock-primary row shows 0 requests and dashes, not zero latency.",
    },
    {
      src: shotRequests,
      alt: "Requests page: the most recent requests with time, provider, model, status, total time, time to first token, tokens, attempts, cache and stream",
      caption:
        "Requests: the latest requests with status, attempts and cache result. Attempts above 1 means the gateway failed over; the 3-4 ms cache hits against ~400 ms misses are the cache working.",
    },
    {
      src: shotProjects,
      alt: "Projects page: cards for each project with rate limit, max concurrent streams, token budget and active or suspended status",
      caption:
        "Projects: rate limit, concurrency and token budget per project, with 'default' where the server-wide default applies.",
    },
    {
      src: shotProjectDetail,
      alt: "Project detail page: settings form, provider credentials list and gateway keys list with revoke buttons",
      caption:
        "Project detail: settings, provider credentials and gateway keys in one place. Revocation takes effect on the very next request.",
    },
  ] as TourImage[],
  flowHeading: "The operator workflow",
  flowIntro:
    "Create a project, attach a provider credential, issue a gateway key. Credentials are encrypted at rest and never shown again; a gateway key's plaintext is shown exactly once.",
  flow: [
    {
      src: shotNewProject,
      alt: "New project dialog with a single name field",
      caption: "1. Create a project",
    },
    {
      src: shotAddCredential,
      alt: "Add provider credential dialog with provider, label and API key fields",
      caption: "2. Add a provider credential",
    },
    {
      src: shotNewKey,
      alt: "New gateway key dialog with an optional label field",
      caption: "3. Issue a gateway key",
    },
  ] as TourImage[],
  gate: {
    src: shotTokenGate,
    alt: "Admin token gate: a single field for the ADMIN_TOKEN, kept only for this browser tab",
    caption:
      "The one credential the console asks for. The admin token is held only for the browser tab and compared in constant time on the server.",
  } as TourImage,
  provenance:
    "All captures show demo data generated with mock upstreams and seeded rows, to document what the console renders. They are not traffic from a production deployment.",
  demoNote:
    "The console's public /demo page is the only view that needs no token: it renders the same metrics report from the public endpoint, and falls back to a recorded run of the failover demo, clearly labelled as recorded, if the live endpoint is unreachable.",
};
