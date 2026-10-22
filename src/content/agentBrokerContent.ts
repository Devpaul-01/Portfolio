// All copy, stats, links and diagram references for the Agent Broker showcase
// live here. Section components stay presentational — same convention as
// kithContent.ts / foundersalesContent.ts.
//
// Every factual claim below was checked against the repository at
// github.com/Devpaul-01/agent-broker (source, tests, ADRs, CI config) and,
// for the test counts, by running the suite. Where a claim rests on a test, the
// test file is linked next to it. Nothing here is a benchmark or an adoption
// figure — the repository does not contain either.

import diagramArchitecture from "../assets/agent-broker-architecture.svg";
import diagramLifecycle from "../assets/agent-broker-lifecycle.svg";

const REPO = "https://github.com/Devpaul-01/agent-broker";
const blob = (path: string) => `${REPO}/blob/main/${path}`;

// -- links --------------------------------------------------------------

export const links = {
  github: REPO,
  npm: "https://www.npmjs.com/package/agent-broker",
  ciBadge: `${REPO}/actions/workflows/ci.yml/badge.svg`,
  ciWorkflow: `${REPO}/actions/workflows/ci.yml`,
  architectureDoc: blob("docs/agent-broker-architecture.md"),
  positioningDoc: blob("docs/positioning.md"),
  adrIndex: `${REPO}/tree/main/docs/adr`,
  requestPermission: blob("src/admission/request-permission.ts"),
  resolveReservation: blob("src/admission/resolve-reservation.ts"),
  cleanup: blob("src/admission/cleanup.ts"),
  registerChild: blob("src/agents/register-child.ts"),
  register: blob("src/agents/register.ts"),
  keys: blob("src/redis/keys.ts"),
  harness: blob("test/helpers/harness.ts"),
  budgetContentionTest: blob("test/integration/failure-modes/budget-contention.test.ts"),
  depthSpoofingTest: blob("test/integration/failure-modes/depth-spoofing.test.ts"),
  correlatedRetriesTest: blob("test/integration/failure-modes/correlated-retries.test.ts"),
  cleanupTest: blob("test/integration/cleanup.test.ts"),
  reportOutcomeTest: blob("test/integration/report-outcome.test.ts"),
  adr0006: blob("docs/adr/0006-no-owned-redis-connection.md"),
  adr0008: blob("docs/adr/0008-length-prefixed-key-segments.md"),
  adr0010: blob("docs/adr/0010-single-probe-circuit-recovery.md"),
  adr0016: blob("docs/adr/0016-no-cross-instance-sharing-mechanism.md"),
  adr0023: blob("docs/adr/0023-single-combined-admission-script.md"),
  ciYml: blob(".github/workflows/ci.yml"),
};

// -- hero -----------------------------------------------------------------

export const hero = {
  eyebrow: "ENGINEERING CASE STUDY",
  headline: "One shared answer to: is this agent call allowed right now?",
  subhead:
    "agent-broker is a TypeScript library that uses Redis to coordinate budget, delegation depth, concurrency and circuit-breaker state across independent Node.js processes — and checks that coordination by racing real forked processes against one Redis, not by mocking it.",
  // Published to npm as `agent-broker`, version 0.1.1 (package.json on main).
  statusNote:
    "Published on npm as agent-broker, currently at v0.1.1. Install it directly:",
  buildCommand: "npm install agent-broker ioredis",
  statusFootnote: "Requires Node.js 22+ and a reachable Redis. ioredis is a peer dependency.",
  apiHeading: "The whole API shape, from the README quick start",
  apiSnippet: `const broker = createBroker({ redis });

const root = await broker.register({
  budgetKey: "user-123",
  initialBudget: 5000,
});

// Ask before spending...
const decision = await broker.requestPermission({
  agentId: root.agentId,
  target: "groq:llama-3.3-70b-versatile",
  estimatedCost: 800,
});
if (!decision.allowed) throw new Error(decision.reason);

// ...make your own call, however you normally would...

// ...then report back so the reservation is reconciled.
await broker.reportOutcome({
  reservationId: decision.reservationId,
  success: true,
  actualCost: response.usage.totalTokens,
});`,
};

// Verified: 188 tests / 27 files pass against Redis 7.0.15 (npm test);
// 4 defineScript() calls in src/; 26 files in docs/adr; no "dependencies"
// key in package.json (ioredis is a peerDependency, "^5.0.0 || ^6.0.0").
export const stats = [
  { value: "188", label: "passing tests across 27 files, run against a real Redis 7" },
  { value: "4", label: "Lua scripts — each a single atomic Redis operation" },
  { value: "3", label: "failure-mode suites that drive real forked OS processes" },
  { value: "26", label: "ADRs recording decisions and rejected alternatives" },
  { value: "0", label: "runtime dependencies (ioredis is a peer you provide)" },
  { value: "2", label: "ioredis majors (^5, ^6) smoke-tested from the packed tarball in CI" },
];

// -- problem ----------------------------------------------------------------

export const problem = {
  eyebrow: "§03 · THE PROBLEM",
  heading: "Three failures that no single process can fix",
  intro:
    "Each one looks fine from inside any one process. They only appear in aggregate — which is exactly the situation a multi-agent system creates by default, so the fix has to live somewhere every process can see.",
  items: [
    {
      title: "Correlated retries",
      body: "Ten processes that each retry twice send a downstream service a burst of twenty near-simultaneous requests. Every process behaved sensibly; the sum did not.",
    },
    {
      title: "Budget races",
      body: "Two processes check the remaining budget a few milliseconds apart, both see enough, and both spend. The shared pool goes negative and neither did anything wrong.",
    },
    {
      title: "Unbounded delegation",
      body: "Depth is a property of the whole agent tree, not of any node in it. A sub-agent cannot know how deep its ancestors already are unless something outside the process remembers.",
    },
  ],
  notNote:
    "What it deliberately is not: an LLM gateway. It never sits in the request path and never touches the provider. And it is not a security boundary against a caller willing to lie to it — it prevents accidental and architectural bypass.",
};

// -- architecture ------------------------------------------------------------

export const architecture = {
  eyebrow: "§03 · ARCHITECTURE",
  heading: "A library per process, one Redis in the middle",
  body: [
    "There is no broker service to deploy. Each process imports the library and points it at the same Redis; anything that can see the same keys is, by construction, already coordinating. Sharing is explicit: processes that pass the same budgetKey draw from one pool.",
    "You bring the connection — the library never opens or closes a Redis client. And because the broker never sees your downstream call, everything it knows about a call's result comes from what you report.",
  ],
  diagram: diagramArchitecture,
  alt: "Architecture diagram: several application processes each embed the agent-broker library; every library instance talks to the same Redis through atomic Lua scripts, which hold agent tree, budget pools, reservations, concurrency counters and circuit-breaker state. Each application calls the downstream target directly, outside the broker.",
  caption:
    "Green is shared state; orange is in-process; the dashed grey path is the caller's own call, which the broker never observes.",
};

// -- lifecycle ----------------------------------------------------------------

export const lifecycle = {
  eyebrow: "§03 · REQUEST LIFECYCLE",
  heading: "Two atomic steps around a call the broker never sees",
  body: "requestPermission reserves, the caller does its own work, reportOutcome reconciles. Both ends are single Lua scripts, which Redis executes as one uninterrupted unit. If the caller crashes before reporting, a TTL'd reservation and a lazy sweep put the budget and the concurrency slot back.",
  diagram: diagramLifecycle,
  alt: "Lifecycle diagram: requestPermission is one atomic script that checks agent existence, circuit state, budget and concurrency, then reserves. The caller makes its own downstream call. reportOutcome is a second atomic script that checks for prior resolution, reconciles budget, releases concurrency and updates the circuit. A lazy sweep resolves abandoned reservations through the same second script.",
  caption:
    "Denial paths write nothing. The sweep and reportOutcome share one script, so only one of them can ever resolve a given reservation.",
};

// -- engineering stories ---------------------------------------------------------

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
  eyebrow: "§03 · THREE ENGINEERING DECISIONS",
  heading: "Where the hard parts actually are",
  intro:
    "Each decision below is a place where the obvious implementation is wrong only under concurrency or failure — the kind of bug a single-process test never finds.",
  items: [
    {
      tag: "ADMISSION",
      title: "Admission is one atomic script, not a check followed by a write",
      invariant:
        "Admitted calls never exceed the budget or concurrency limit, however many processes race.",
      naive:
        "Read the pool, compare it to the cost, then decrement. Two processes read the same balance between the read and the write, both pass, and the pool goes negative. Splitting the checks across several Redis calls reopens the same window.",
      mechanism:
        "A single Lua script checks that the agent exists, the circuit state, the budget and the concurrency limit, in that order. Only if every check passes does it decrement the pool, increment the in-flight counter, write a reservation and index its expiry. Redis runs it as one unit, so nothing can interleave. ADR-0023 records why admission was deliberately kept as one script.",
      evidence:
        "The budget-contention suite forks real OS processes against one Redis: 10 processes exhaust a shared budget with exactly as many admissions as it covers, and a tighter race of 30 processes for a budget covering exactly 3 calls produces exactly 3 admissions — both ending at a balance of zero. That demonstrates the invariant under this workload on one Redis — it is not a proof and not a throughput benchmark.",
      sources: [
        { label: "request-permission.ts", href: links.requestPermission },
        { label: "budget-contention.test.ts", href: links.budgetContentionTest },
        { label: "ADR-0023", href: links.adr0023 },
      ],
    },
    {
      tag: "RECONCILIATION",
      title: "One script closes every reservation, whoever asks",
      invariant: "A reservation is refunded and released exactly once.",
      naive:
        "Reconcile in the client: report the outcome, refund the difference, free the slot. A duplicate report, or a cleanup sweep racing a late report, refunds twice or frees the same slot twice — and a crashed caller leaks budget and a concurrency slot forever.",
      mechanism:
        "One script marks the reservation resolved and refunds the difference between estimate and actual cost; a second attempt is a no-op. Both reportOutcome and the lazy sweep go through it, so a single idempotency check covers both paths. The sweep resolves abandoned reservations as failures with a full refund but never feeds the circuit breaker: a crashed caller is evidence about the caller, not about the target.",
      evidence:
        "report-outcome.test.ts covers the refund arithmetic, overruns, and concurrent duplicate reports where exactly one succeeds. cleanup.test.ts covers a cleanup-versus-reportOutcome race where exactly one resolution wins, and checks the circuit's failure window is untouched by cleanup.",
      sources: [
        { label: "resolve-reservation.ts", href: links.resolveReservation },
        { label: "cleanup.ts", href: links.cleanup },
        { label: "cleanup.test.ts", href: links.cleanupTest },
        { label: "report-outcome.test.ts", href: links.reportOutcomeTest },
      ],
    },
    {
      tag: "IDENTITY",
      title: "Depth and lineage are derived by the broker, not asserted by the caller",
      invariant:
        "An agent's depth, parent, root and budget lineage always come from stored state.",
      naive:
        "Let a sub-agent pass its own depth and parent when it registers. Any bug — or a careless caller — resets the tree, and the depth limit stops meaning anything.",
      mechanism:
        "Registration and child registration accept no identity fields at all, and unknown keys are rejected loudly rather than ignored. Delegation runs in one script that reads the parent's stored depth, root and budget key at the moment it creates the child, and enforces the depth limit there — so a parent deleted mid-delegation cannot be delegated to.",
      evidence:
        "depth-spoofing.test.ts runs four cases across real processes: depth derived correctly for a cross-process delegation, depth_exceeded at maxDepth with no state written, a parent deleted by one process while another delegates to it, and a process that asserts its own fabricated depth, rootId or budgetKey failing to bypass the limit. It does not claim to stop a caller who skips the delegation API and registers a fresh root — the limits section says so plainly.",
      sources: [
        { label: "register-child.ts", href: links.registerChild },
        { label: "register.ts", href: links.register },
        { label: "depth-spoofing.test.ts", href: links.depthSpoofingTest },
      ],
    },
  ] as Story[],
  smallerHeading: "Smaller decisions worth a look",
  smaller: [
    {
      title: "Length-prefixed Redis keys",
      body: "Targets contain colons (groq:llama-3.3-70b), so a plain separator would map (\"a:b\", \"c\") and (\"a\", \"b:c\") to the same key and silently merge two unrelated concurrency counters. Every caller-supplied segment is prefixed with its length.",
      link: { label: "keys.ts · ADR-0008", href: links.keys },
    },
    {
      title: "Circuit state shared across processes",
      body: "Failure history lives in Redis, so a process with no failures of its own is denied because of another process's. A test asserts exactly that. Recovery admits a single probe rather than reopening the floodgates (ADR-0010).",
      link: { label: "correlated-retries.test.ts", href: links.correlatedRetriesTest },
    },
    {
      title: "Fail closed when Redis is down",
      body: "onRedisUnavailable defaults to 'deny'. 'allow' exists, but admits calls as degraded with no reservation — an explicit opt-in, never a silent fallback.",
      link: { label: "README · Failure behavior", href: `${REPO}#failure-behavior` },
    },
    {
      title: "No owned Redis connection",
      body: "The caller passes an ioredis client; the library never opens or closes one (ADR-0006). Scripts run via EVALSHA and fall back to EVAL on NOSCRIPT, which is safe because NOSCRIPT means nothing executed.",
      link: { label: "ADR-0006", href: links.adr0006 },
    },
  ],
};

// -- tests ----------------------------------------------------------------------

export const tests = {
  eyebrow: "§03 · CORRECTNESS",
  heading: "How the claims are checked",
  intro:
    "Concurrency bugs hide from single-process tests. The failure-mode suites fork real Node processes through an IPC harness and race them against one Redis, asserting the exact counts and balances an atomic implementation must produce.",
  rows: [
    {
      name: "budget-contention",
      shows:
        "10 processes exhaust a shared budget with exactly as many admissions as it covers; a tighter race of 30 processes for a budget covering 3 calls admits exactly 3. Balance ends at zero.",
      href: links.budgetContentionTest,
    },
    {
      name: "depth-spoofing",
      shows:
        "Depth is derived across processes, depth_exceeded writes no state, a parent deleted mid-delegation cannot gain a child, and fabricated depth, rootId or budgetKey cannot bypass the limit.",
      href: links.depthSpoofingTest,
    },
    {
      name: "correlated-retries",
      shows:
        "A process with zero failure history of its own is denied purely because another process's failures opened the circuit.",
      href: links.correlatedRetriesTest,
    },
    {
      name: "CI packaging check",
      shows:
        "Runs the suite on Node 22 against redis:7-alpine, then packs the tarball, installs it into a clean project with ioredis ^5 and ^6, and runs a consumer smoke test.",
      href: links.ciYml,
    },
  ],
  caveat:
    "What this establishes: the stated invariants hold under real process contention on a single Redis. What it does not: formal proof, throughput or latency numbers, or behavior at production load. The many-process tests also need a longer timeout than Vitest's default on a slow single-core machine.",
};

// -- limits ---------------------------------------------------------------------

export const limits = {
  eyebrow: "§03 · HONEST LIMITS",
  heading: "What it does not do",
  intro:
    "The README states its trust model plainly instead of overselling it. These are the boundaries worth knowing before relying on it.",
  items: [
    {
      title: "Not a security boundary",
      body: "It guards against accidental and architectural bypass. A caller that registers a fresh root to reset its own depth, or misreports success, retryable or actualCost, is outside what the broker can observe.",
    },
    {
      title: "Reporting is cooperative",
      body: "The broker never sees the downstream call. A caller that never reports is bounded by the reservation TTL, not prevented from leaking until it expires.",
    },
    {
      title: "Reconciliation can overrun",
      body: "An actual cost above the estimate is allowed to push the pool below what was reserved, because the spend already happened. Admission cannot overspend; reconciliation can reveal that it did.",
    },
    {
      title: "Early surface area",
      body: "No framework-protocol adapters (MCP or similar) and no built-in observability beyond four hooks yet. docs/positioning.md lays out the plan and why it is a layer on top rather than a rewrite.",
    },
  ],
};

// -- closing --------------------------------------------------------------------

export const closing = {
  eyebrow: "§03 · SOURCE",
  heading: "Read the code, not just the description",
  body: "Start with the architecture doc, then the three Lua scripts. The tests are written to be read as documentation of the invariants.",
  readingList: [
    { label: "request-permission.ts", href: links.requestPermission },
    { label: "resolve-reservation.ts", href: links.resolveReservation },
    { label: "register-child.ts", href: links.registerChild },
    { label: "budget-contention.test.ts", href: links.budgetContentionTest },
    { label: "ADR index", href: links.adrIndex },
  ],
};
