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
import diagramArchitecture from "../assets/llm-gateway-architecture.svg";
import diagramLifecycle from "../assets/llm-gateway-lifecycle.svg";

const REPO = "https://github.com/Devpaul-01/llm-gateway";
const blob = (path: string) => `${REPO}/blob/main/${path}`;

// The public, token-free /demo page of the deployed Gateway Console. Kept as
// one constant so it can be swapped for a stable production URL in one place.
export const LIVE_DEMO =
  "https://llm-gateway-studyhubplatform.vercel.app/demo";

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
    "All captures show demo data from a mock-upstream run, to document what the console renders. The live demo's 'Live' badge reflects whether the metrics endpoint has any recorded requests at all, not whether traffic is current, so a past demo run can still show as 'Live' later. None of this is production traffic.",
  demoNote:
    "The console's public /demo page is the only view that needs no token: it renders the same metrics report from the public endpoint, and falls back to a recorded run of the failover demo, clearly labelled as recorded, if the live endpoint is unreachable.",
};

// -- architecture -----------------------------------------------------------------

export const architecture = {
  eyebrow: "SYSTEM DESIGN",
  heading: "One binary, two dependencies, no background workers",
  body: [
    "The backend is a single Go binary with two external dependencies. Postgres is the system of record: projects, gateway-key hashes, AES-256-GCM-encrypted provider credentials and a full request log. Redis holds every piece of state read on the hot path: auth lookups, rate limits, budgets, concurrency slots, circuit breakers, credential cooldowns and the response cache.",
    "There is no queue, no worker process and no message broker. The whole request lifecycle happens inline in the handler that served the request, and request-log persistence is a fire-and-forget goroutine with its own bounded timeout, so the hot path never blocks on a Postgres write.",
  ],
  diagram: diagramArchitecture,
  alt: "System architecture: an OpenAI-SDK application calls the gateway, where a request passes gateway-key auth, a response cache, admission control, a candidate resolver and a failover engine before reaching one of twelve upstream providers. Redis holds hot-path state and Postgres is the system of record. A React console uses the admin and public metrics APIs.",
  caption:
    "The request pipeline inside the single Go binary, the two stores behind it, and the admin surface that the React console consumes.",
};

// -- request lifecycle ---------------------------------------------------------------

export const lifecycle = {
  eyebrow: "REQUEST LIFECYCLE",
  heading: "The order of the gates is a design decision",
  body: "Parsing happens before any Redis call, so a malformed request is cheap and touches no external state. The cache is consulted before admission, because a hit costs no provider tokens and holds no connection, so it should consume neither a concurrency slot nor budget. Concurrency is acquired before budget, so a budget rejection, which is the likelier transient one, can never leak a slot.",
  diagram: diagramLifecycle,
  alt: "Request lifecycle: parse and validate, auth and rate limit, cache lookup, concurrency slot, budget reserve and candidate resolution, each rejecting with its own HTTP status; then a failover loop classifying upstream errors into four categories; then cache write, budget settle, slot release and asynchronous logging.",
  caption:
    "Each gate rejects with its own status and error code. A cache hit skips every gate after it.",
};

// -- admission -------------------------------------------------------------------------

export const admission = {
  eyebrow: "ADMISSION CONTROL",
  heading: "Three gates, each atomic, each counted",
  intro:
    "All three are enforced before a provider is contacted, are configurable per project, and fall back to a server-wide default when unset.",
  gates: [
    {
      name: "Rate limit",
      mechanism: "Sliding-window log in a Redis sorted set, one Lua script",
      scope: "Per gateway key",
      def: "60 / min",
      rejection: "429 rate_limit_exceeded",
      href: links.ratelimit,
    },
    {
      name: "Concurrency",
      mechanism: "Self-expiring counter (15-minute TTL), one Lua script per acquire and release",
      scope: "Per project",
      def: "10 streams",
      rejection: "429 too_many_concurrent_requests",
      href: links.concurrency,
    },
    {
      name: "Token budget",
      mechanism: "Reserve-then-settle counter on a UTC-day key, one Lua script",
      scope: "Per project",
      def: "100,000 / day",
      rejection: "429 daily_token_budget_exceeded, with Retry-After",
      href: links.budget,
    },
  ],
  note: "Every rejection is counted into hourly Redis stats buckets that feed the dashboard's protection panel. The concurrency counter's own TTL reclaims a slot within 15 minutes if the process is killed between acquire and release, so a crash cannot wedge a project at zero.",
};

// -- failover ----------------------------------------------------------------------------

export const failover = {
  eyebrow: "FAILOVER ENGINE",
  heading: "Classify the failure, then decide what to do",
  intro:
    "Every provider failure is sorted into exactly one of four categories before the engine reacts. A bare network error that is not already classified is treated as transient, the conservative choice, since failing over beats giving up.",
  categories: [
    {
      name: "KeyFault",
      signal: "401, 402, 403, 429",
      reaction: "Try the next candidate: another key, or another provider.",
      effect: "That credential is excluded from selection for 60 seconds.",
    },
    {
      name: "ProviderTransient",
      signal: "408, 5xx, connection error",
      reaction: "Try the next candidate.",
      effect: "Counts toward the provider's Redis-shared circuit breaker.",
    },
    {
      name: "BadModel",
      signal: "404",
      reaction: "Try the next candidate.",
      effect: "The model is evicted from that provider's cached model list.",
    },
    {
      name: "NonRetryable",
      signal: "other 4xx",
      reaction: "Abort the whole chain immediately.",
      effect: "Another provider cannot fix a request the client sent wrong.",
    },
  ],
  chainHeading: "How the candidate chain is built",
  chain: [
    "Choice list. With no model, a fixed default priority (Groq, Mistral, OpenRouter) is used. With a model, it resolves by explicit provider field, then a provider:model prefix (honoured only for known provider names, so IDs with a legitimate colon are not misparsed), then a bare-name table. An unresolvable fallback is logged and skipped, not fatal.",
    "Credentials. One Redis MGET plus a batched SQL query on a miss, not a round trip per provider per request.",
    "Cooldown. Credentials that key-faulted in the last 60 seconds are excluded for now, not deleted.",
    "Load spreading. With several usable keys on one provider, the starting offset is randomised so a single key does not absorb all the rate-limit load.",
    "Breaker demotion. Providers with an open circuit move to the back of the list and are never removed, so a recovered provider is still tried and self-heals.",
    "Vision filter. If a message contains an image, candidates narrow to vision-capable models; if none remain the request fails with a clear client error rather than silently dropping the image.",
  ],
};

// -- engineering decisions ----------------------------------------------------------------

export interface SourceLink {
  label: string;
  href: string;
}

export interface Story {
  tag: string;
  title: string;
  invariant: string;
  naive: string;
  mechanism: string;
  evidence: string;
  sources: SourceLink[];
}

export const stories = {
  eyebrow: "THREE ENGINEERING DECISIONS",
  heading: "Where the hard parts actually are",
  intro:
    "Each decision below is a place where the obvious implementation is wrong only under concurrency or failure, the kind of bug a single-request test never finds.",
  items: [
    {
      tag: "ADMISSION",
      title: "Admission is one atomic script, not a read followed by a write",
      invariant:
        "Concurrent requests cannot push a project past its rate, concurrency or token limit.",
      naive:
        "Read the counter, compare, then write. Two concurrent requests both read 'under limit' and both proceed. An earlier INCR-then-DECR budget in this codebase could transiently exceed the limit under load, and was replaced.",
      mechanism:
        "Rate limiting, slot acquisition and budget reservation are each a single Redis Lua script. The budget reserves max_tokens plus an estimated prompt size before the request is sent, then settles to actual usage afterwards, from the provider's report or an estimate if the stream died. An early finish is refunded, and a request that dies with no output settles to near zero.",
      evidence:
        "The concurrency gate is raced by 20 goroutines against a real Redis with a limit of 5 and must admit exactly 5. Budget tests cover reservation, denial at the limit and refund of an unused reservation, and an end-to-end test checks the budget settles to actual usage.",
      sources: [
        { label: "budget.go", href: links.budget },
        { label: "concurrency_test.go", href: links.concurrencyTest },
        { label: "budget_test.go", href: links.budgetTest },
        { label: "e2e: budget settles", href: links.e2eTest },
      ],
    },
    {
      tag: "CACHE",
      title: "The cache refuses to store a degraded answer",
      invariant:
        "A cached response is always a clean answer from one model on one attempt.",
      naive:
        "Cache every successful response. A failed-over or continued answer would then be replayed indefinitely as if it were the primary model's clean output, and a request that merely omits temperature would be treated as deterministic.",
      mechanism:
        "Only requests with temperature explicitly 0, no images and under 256 KB qualify. A response is stored only if it took exactly one attempt, ended with finish_reason stop and used a single model. Invalidation is epoch-based: a per-project integer is bumped on flush and embedded in every key, so all old entries become unreachable in O(1) with no SCAN or DEL storm, and an in-flight response cannot write a stale entry back because the write re-checks the epoch.",
      evidence:
        "Unit tests cover what is cacheable, that the key includes everything that changes the answer, and epoch invalidation with in-flight write protection. An end-to-end test covers the hit, miss, bypass and flush lifecycle.",
      sources: [
        { label: "respcache.go", href: links.respcache },
        { label: "respcache_test.go", href: links.respcacheTest },
        { label: "e2e: cache lifecycle", href: links.e2eTest },
      ],
    },
    {
      tag: "STREAMS",
      title: "A stream with no clean ending is a failure, not a success",
      invariant:
        "A truncated answer is never served as complete, and two models' output is never spliced without being asked for.",
      naive:
        "Count any stream that produced tokens as a success. A dropped connection then returns and bills a partial answer, and a blind mid-stream retry appends a second model's phrasing to a truncated first.",
      mechanism:
        "A stream without a terminal finish_reason is a failure. A non-retryable error mid-stream aborts, and by default a broken stream fails with an explicit 502 rather than guessing. A caller can opt in with continue_on_failure, which sends the partial text plus an instruction to continue exactly where it left off to the next candidate.",
      evidence:
        "Handler tests drive the failover loop against a hand-written fake provider, with no network: abort on non-retryable, failover after a pre-stream error, stop on a mid-stream failure, continue when opted in, and a continuation that then fails falls through to the next candidate.",
      sources: [
        { label: "handler_test.go", href: links.handlerTest },
        { label: "errors.go", href: links.errors },
        { label: "chat.go", href: links.chat },
      ],
    },
  ] as Story[],
  smallerHeading: "Smaller decisions worth a look",
  smaller: [
    {
      title: "Fail open on availability, fail closed on correctness",
      body: "A Redis outage degrades the gateway toward slower and more permissive (caches miss, breakers never open), never toward wrong answers or leaked credentials. It does weaken rate, budget and concurrency protection, and that tradeoff is written down rather than hidden.",
      link: { label: "SECURITY.md", href: links.securityDoc },
    },
    {
      title: "Circuit-breaker state is shared, not per instance",
      body: "Five transient failures in a 30-second window open a provider's circuit, tracked in Redis so every gateway instance agrees. An open breaker demotes a provider rather than removing it, and one success closes it.",
      link: { label: "breaker.go", href: links.breaker },
    },
    {
      title: "Credentials encrypted, and shown once",
      body: "Provider keys are encrypted with AES-256-GCM and a random nonce, and only ciphertext is ever cached in Redis. No API returns a stored key. Gateway-key plaintext is shown once and only its SHA-256 hash is stored.",
      link: { label: "crypto_test.go", href: links.cryptoTest },
    },
    {
      title: "Four adapters collapsed into one",
      body: "Four near-identical provider adapters were replaced by one OpenAI-compatible adapter, parameterised by base URL and two behaviour flags. Adding a provider is now a registry entry, not a new file.",
      link: { label: "registry.go", href: links.registry },
    },
    {
      title: "Errors are real HTTP statuses, in OpenAI's shape",
      body: "A failure before the first token is never a 200 with an error in the body, so SDKs that parse error JSON surface a readable message. Mid-stream, a terminal SSE event carries the error instead.",
      link: { label: "e2e: error shapes", href: links.e2eTest },
    },
    {
      title: "Log persistence is best-effort, on purpose",
      body: "request_logs rows are inserted by a detached goroutine with a 5-second timeout, so a crash can lose one row. The alternative put a Postgres round trip into every request. The metric and the log row are written from the same defer block, so they cannot disagree.",
      link: { label: "ARCHITECTURE.md", href: links.architectureDoc },
    },
  ],
};

// -- measured -----------------------------------------------------------------------------

export const measured = {
  eyebrow: "MEASURED",
  heading: "The failover demo, with the limits stated",
  intro:
    "The repository ships a mock upstream with a chaos endpoint and a load generator, so failover can be demonstrated without provider keys. These figures are from one run of the README's recipe: the primary mock provider killed, 300 fresh prompts, 20 concurrent.",
  rows: [
    {
      value: "100%",
      title: "Requests succeeded with the primary dead",
      body: "Every request still completed, routed to the healthy provider.",
    },
    {
      value: "18 of 470",
      title: "Requests that touched the dead provider",
      body: "Only these reached it before the circuit breaker opened. The other 452 went straight to the healthy one.",
    },
    {
      value: "1-5 ms",
      title: "Cache hit latency",
      body: "Against roughly 400 ms for a miss on the mock upstream.",
    },
    {
      value: "~1 ms",
      title: "Gateway overhead",
      body: "The latency the gateway itself adds on that run.",
    },
  ],
  caveat:
    "One laptop run against a mock upstream, not a benchmark suite and not a production figure. Real providers add network latency and messier failure shapes. The recipe is in the README so the run can be repeated and checked.",
  chaosHeading: "Break it yourself",
  chaosBody:
    "The mock provider exposes a /chaos endpoint with four modes: ok, down (always 503), ratelimit (always 429) and flaky (fails a configurable fraction). Kill the primary mid-run and watch the dashboard's rescued-by-failover count climb.",
  chaosCommand: `docker compose -f docker-compose.yml -f docker-compose.demo.yml up --build
docker compose exec gateway /app/loadtest run -url http://localhost:8080 -key <gateway_key> -n 400 -c 20
curl -XPOST localhost:9001/chaos -d '{"mode":"down"}'   # kill the primary
docker compose exec gateway /app/loadtest run -url http://localhost:8080 -key <gateway_key> -n 400 -c 20`,
  sources: [
    { label: "demo recipe in the README", href: links.demoSection },
    { label: "mockprovider", href: links.mockprovider },
    { label: "loadtest", href: links.loadtest },
    { label: "docker-compose.demo.yml", href: links.demoCompose },
  ],
};

// -- tests --------------------------------------------------------------------------------

export const tests = {
  eyebrow: "CORRECTNESS",
  heading: "How the claims are checked",
  intro:
    "Much of this codebase's correctness lives in concurrent access to shared Redis counters, so CI runs go test and go test -race against real Postgres 16 and Redis 7 service containers rather than mocks.",
  rows: [
    {
      name: "e2e_test.go",
      shows:
        "Boots the full mux against real Postgres and Redis with a fake SSE upstream and asserts observable behaviour across 11 tests: usage and timing on every response, failover invisible to the client but recorded, cache hit/miss/bypass, OpenAI-shaped streaming, budget settling to actual usage, real HTTP error statuses, revocation and PATCH taking effect on the next request, and the breaker routing around a down provider.",
      href: links.e2eTest,
    },
    {
      name: "concurrency_test.go",
      shows:
        "20 goroutines race for 5 slots on a real Redis. Exactly 5 are admitted.",
      href: links.concurrencyTest,
    },
    {
      name: "handler_test.go",
      shows:
        "The failover loop against a hand-written fake provider: abort on non-retryable, failover after a pre-stream error, stop on a mid-stream failure, and continue only when the caller opted in.",
      href: links.handlerTest,
    },
    {
      name: "resolve_test.go",
      shows:
        "Candidate-chain construction: fallback expansion, skipping a cooling credential, and vision-model filtering.",
      href: links.resolveTest,
    },
    {
      name: "crypto_test.go",
      shows:
        "AES-GCM round trip, and explicit detection of a tampered ciphertext, a tampered nonce and a wrong key.",
      href: links.cryptoTest,
    },
    {
      name: "ci.yml",
      shows:
        "On every push and PR: go build, go vet, a gofmt check, go test and go test -race, then a Docker image build that is not pushed.",
      href: links.ciYml,
    },
  ],
  caveat:
    "What this establishes: the stated behaviour holds against real Postgres and Redis, and the concurrency gate holds under a real race. What it does not: the budget and rate-limit tests are sequential, so their atomicity rests on each being a single Lua script rather than on a race test; the circuit breaker and credential cooldown have no dedicated unit tests and are exercised through the end-to-end failover tests; live provider tests for Groq, Mistral, Gemini and OpenRouter are skipped unless a real key is present; and CI runs the Go suite only, so the 24 frontend test cases run locally.",
};

// -- limits ---------------------------------------------------------------------------------

export const limits = {
  eyebrow: "LIMITS",
  heading: "What this deliberately does not do",
  intro:
    "These are documented tradeoffs from the project's own security policy, not gaps I am hoping nobody notices.",
  items: [
    {
      title: "No multi-user model and no admin audit log",
      body: "One static admin token gates every /admin route, with no accounts, sessions or RBAC. Administrative writes are not recorded anywhere beyond the operator's own infrastructure logs.",
    },
    {
      title: "No key rotation",
      body: "Changing ENCRYPTION_KEY makes stored credentials permanently undecryptable, and there is no re-encryption path. Gateway keys and the admin token do not expire on their own.",
    },
    {
      title: "The admin token is not rate limited",
      body: "There is no login endpoint to throttle, so the token relies entirely on being long and random. The .env.example recommends openssl rand -hex 32.",
    },
    {
      title: "Redis is a single point of failure for cost protection",
      body: "Rate limits, budgets and concurrency live in Redis. An outage keeps answers correct but makes the gateway more permissive about cost and load.",
    },
    {
      title: "Chat completions only",
      body: "The proxied surface is POST /v1/chat/completions and GET /v1/models. There are no embeddings, image generation or other endpoints.",
    },
    {
      title: "Self-hosted, with no production claims",
      body: "The project is not run as a hosted service handling third-party traffic, so this page makes no uptime or adoption claims. The metrics shown are demo and test data.",
    },
  ],
};

// -- closing --------------------------------------------------------------------------------

export const closing = {
  eyebrow: "NEXT",
  heading: "Read it, run it, or kill the primary provider yourself",
  body: "The architecture and security documents are written to be checked against the code, and the failover demo needs no API keys. The live demo page shows the console's public metrics view with no login.",
  readingList: [
    { label: "ARCHITECTURE.md", href: links.architectureDoc },
    { label: "SECURITY.md: known limitations", href: links.securityDoc },
    { label: "PRODUCT_OVERVIEW.md", href: links.productOverview },
    { label: "e2e_test.go", href: links.e2eTest },
    { label: "budget.go", href: links.budget },
    { label: "respcache.go", href: links.respcache },
  ],
};
