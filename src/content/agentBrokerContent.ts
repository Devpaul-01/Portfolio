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

const ts = (path: string) => blob(`typescript/${path}`);

export const links = {
  github: REPO,
  npm: "https://www.npmjs.com/package/agent-broker",
  // The repo is a monorepo (typescript/, python/, test/cross-language/), so there is no
  // single ci.yml any more: one workflow per language plus one for the cross-language suite.
  ciBadge: `${REPO}/actions/workflows/typescript.yml/badge.svg`,
  ciWorkflow: `${REPO}/actions/workflows/typescript.yml`,
  ciBadges: [
    { label: "TypeScript", badge: `${REPO}/actions/workflows/typescript.yml/badge.svg`, workflow: `${REPO}/actions/workflows/typescript.yml` },
    { label: "Python", badge: `${REPO}/actions/workflows/python.yml/badge.svg`, workflow: `${REPO}/actions/workflows/python.yml` },
    { label: "Cross-language", badge: `${REPO}/actions/workflows/cross-language.yml/badge.svg`, workflow: `${REPO}/actions/workflows/cross-language.yml` },
  ],
  pythonCiBadge: `${REPO}/actions/workflows/python.yml/badge.svg`,
  pythonCiWorkflow: `${REPO}/actions/workflows/python.yml`,
  crossLanguageCiBadge: `${REPO}/actions/workflows/cross-language.yml/badge.svg`,
  crossLanguageCiWorkflow: `${REPO}/actions/workflows/cross-language.yml`,
  architectureDoc: blob("docs/ARCHITECTURE.md"),
  positioningDoc: `${REPO}#project-status-and-roadmap`,
  adrIndex: `${REPO}/tree/main/docs/adr`,
  requestPermission: ts("src/admission/request-permission.ts"),
  resolveReservation: ts("src/admission/resolve-reservation.ts"),
  cleanup: ts("src/admission/cleanup.ts"),
  registerChild: ts("src/agents/register-child.ts"),
  register: ts("src/agents/register.ts"),
  keys: ts("src/redis/keys.ts"),
  harness: ts("test/helpers/harness.ts"),
  raceDemo: ts("examples/race-demo.ts"),
  budgetContentionTest: ts("test/integration/failure-modes/budget-contention.test.ts"),
  depthSpoofingTest: ts("test/integration/failure-modes/depth-spoofing.test.ts"),
  correlatedRetriesTest: ts("test/integration/failure-modes/correlated-retries.test.ts"),
  cleanupTest: ts("test/integration/cleanup.test.ts"),
  reportOutcomeTest: ts("test/integration/report-outcome.test.ts"),
  adr0006: blob("docs/adr/0006-no-owned-redis-connection.md"),
  adr0008: blob("docs/adr/0008-length-prefixed-key-segments.md"),
  adr0010: blob("docs/adr/0010-single-probe-circuit-recovery.md"),
  adr0016: blob("docs/adr/0016-no-cross-instance-sharing-mechanism.md"),
  adr0023: blob("docs/adr/0023-single-combined-admission-script.md"),
  ciYml: blob(".github/workflows/typescript.yml"),
  crossLanguageDir: `${REPO}/tree/main/test/cross-language`,
  scriptEquivalenceTest: blob("python/tests/unit/test_script_equivalence.py"),
  pythonReadme: blob("python/README.md"),
  measurementSummary: ts("measurement/RESULTS_SUMMARY.md"),
  m3Report: ts("measurement/reports/M3-admission-latency.md"),
  m4Report: ts("measurement/reports/M4-concurrency-exhaustion.md"),
  m5Report: ts("measurement/reports/M5-crash-recovery.md"),
};

// -- hero -----------------------------------------------------------------

export const hero = {
  eyebrow: "ENGINEERING CASE STUDY",
  headline: "One shared answer to: is this agent call allowed right now?",
  subhead:
    "agent-broker is a Redis-backed admission gate that coordinates budget, delegation depth, concurrency and circuit-breaker state across independent processes. It ships in TypeScript and Python, both running the same Lua scripts against the same Redis, and it is tested by racing real OS processes against one Redis, not by mocking it.",
  // Published to npm as `agent-broker`, version 0.1.1 (package.json on main).
  statusNote:
    "Published on npm as agent-broker, currently at v0.1.1. Install it directly:",
  buildCommand: "npm install agent-broker ioredis",
  statusFootnote: "TypeScript: Node.js 22+, ioredis as a peer dependency. A Python port (3.10+, redis-py) lives in the same repository and is not yet on PyPI. Both need a reachable Redis.",
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
  { value: "2", label: "languages (TypeScript, Python) coordinating through one Redis, tested together in CI" },
];

// -- problem ----------------------------------------------------------------

export const problem = {
  eyebrow: "§01 · THE PROBLEM",
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
  eyebrow: "§01 · ARCHITECTURE",
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
  eyebrow: "§01 · REQUEST LIFECYCLE",
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
  eyebrow: "§01 · THREE ENGINEERING DECISIONS",
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
  eyebrow: "§01 · CORRECTNESS",
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
  eyebrow: "§01 · HONEST LIMITS",
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
      body: "No framework-protocol adapters (MCP or similar) and no built-in observability beyond four hooks yet. A LangGraph-native integration is in development and not released; the README roadmap lays out the plan.",
    },
  ],
};

// -- closing --------------------------------------------------------------------

export const closing = {
  eyebrow: "§01 · SOURCE",
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

// -- atomicity ---------------------------------------------------------------

export const atomicity = {
  eyebrow: "§01 · ATOMICITY",
  heading: "Why check-then-spend has to be one step",
  body:
    "The obvious design reads the budget, decides, then writes the new balance. Two processes can both read 300 before either writes, and both spend it. Admission here is a single Lua script: agent, circuit, budget and concurrency are checked and reserved inside one Redis command, so there is no gap between the check and the spend for another process to slip into.",
  diagramTitle: "Admission as one atomic script",
  diagramDesc:
    "A request enters one Lua script that checks the agent, then the circuit, then budget, then concurrency, and reserves budget and a concurrency slot only if every check passes.",
  caption: "Checks run in a fixed order inside one script. If any fails, nothing is reserved.",
  demoHeading: "Race it",
  demoNote:
    "A browser simulation of the same shape as the real test: the budget covers three calls. In naive mode, read and write are separate steps and processes interleave. In atomic mode each decision is indivisible. The real version forks OS processes against Redis (see the test and demo below).",
};

// -- mechanisms --------------------------------------------------------------

export const mechanisms = {
  eyebrow: "§01 · MECHANISMS",
  heading: "Three mechanisms that keep the books straight",
  resolutionBody:
    "Every admitted call holds a reservation: budget taken up front and a concurrency slot. reportOutcome settles it by refunding the difference between estimate and actual cost and releasing the slot. If the caller crashes and never reports, a lazy sweep on a later call (from any process) finds expired reservations, refunds them, and releases the slot. A late report after the sweep is refused, so nothing is refunded twice.",
  resolutionTitle: "Reservation resolution",
  resolutionDesc:
    "A reservation is resolved exactly once, either by the caller's report or by the expiry sweep, and whichever arrives second is refused.",
  resolutionCaption: "Two paths to resolve a reservation; the second to arrive is a no-op.",
  circuitBody:
    "The circuit breaker keeps a failure window per target. Past a threshold the circuit opens and most calls are denied before they reserve anything. A small fraction are admitted as probes, and one successful probe closes it. The original design had a third 'recovering' state needing several successes; I dropped it and recorded why in ADR-0010, because trickle-rate probes make consecutive-success tracking weak evidence for extra state.",
  circuitTitle: "Circuit breaker",
  circuitDesc:
    "Closed admits calls and records failures. Past the threshold it opens and denies most calls, admitting occasional probes. One successful probe closes it again.",
  circuitCaption: "Two states in Redis. ADR-0010 explains why there is no 'recovering' state.",
  keysHeading: "What lives in Redis",
  keysIntro: "Every key is built in one file, keys.ts, and nowhere else.",
  keys: [
    { key: "agent:{id}", type: "hash", holds: "Agent record: budget key, depth, last heartbeat" },
    { key: "budget:{len}:{budgetKey}", type: "string", holds: "Shared balance for everyone on that budget key" },
    { key: "reservation:{id}", type: "hash", holds: "One in-flight call: cost, target, probe flag" },
    { key: "reservations:expiring", type: "sorted set", holds: "Reservations ordered by expiry, scanned by the sweep" },
    { key: "concurrency:{target}{budget}", type: "string", holds: "In-flight counter per target and budget" },
    { key: "circuit:{target}", type: "sorted set", holds: "Recent failures inside the window" },
    { key: "circuit:{target}:state", type: "string", holds: "open, or absent (closed)" },
  ],
  collision: {
    heading: "Why keys are length-prefixed",
    a: { pair: 'target "a:b", budget "c"', naive: "concurrency:a:b:c", prefixed: "concurrency:3:a:b1:c" },
    b: { pair: 'target "a", budget "b:c"', naive: "concurrency:a:b:c", prefixed: "concurrency:1:a3:b:c" },
  },
};

// -- measured ----------------------------------------------------------------

// Source: typescript/measurement/reports/M3-admission-latency.md (local Redis 7.0.15,
// single core, N=1000 per run, 50-call warm-up; runs 1-3 plus follow-up runs 4 and 5).
export const measured = {
  eyebrow: "§01 · MEASURED",
  heading: "Measured, with the limits stated",
  intro:
    "One requestPermission plus reportOutcome pair, which fuses the budget, concurrency and circuit checks into one Redis round trip, timed over 1,000 sequential calls per run on a local Redis.",
  latencyHeading: "Admission latency (ms)",
  runs: [
    { label: "Run 1", median: 0.25, p99: 4.08 },
    { label: "Run 2", median: 0.22, p99: 4.31 },
    { label: "Run 3", median: 0.23, p99: 3.93 },
    { label: "Run 4 (later session)", median: 0.3, p99: 5.22 },
    { label: "Run 5 (after restructure)", median: 0.27, p99: 5.16 },
  ],
  baseline: {
    label: "3 plain GETs (not atomic)",
    median: 0.04,
    p99: 0.18,
    note:
      "The reference bar is three separate GETs with no writes and no atomicity, there only to show that round trips, not script size, dominate cost. The atomic script does about ten commands, including writes, and stays well under a millisecond at the median.",
  },
  extra: [
    {
      value: "3 of 30",
      title: "Budget race",
      body: "Thirty processes, budget for three calls: exactly three admitted, in every run of the integration test.",
    },
    {
      value: "20 procs",
      title: "Concurrency limit",
      body: "Under 20-process contention the limit admits exactly as many as it allows, not one more. Three independent runs, zero failures.",
    },
  ],
  caveat:
    "These are localhost, single-client, sequential numbers: a best case, not a production figure. They say nothing about latency under concurrent load or over a real network to a managed Redis, and no before/after improvement is claimed because no earlier version was benchmarked. Occasional 15-20 ms maxima appear in every run and are reported, not trimmed.",
};

// -- two languages -----------------------------------------------------------

export const languages = {
  eyebrow: "§01 · TWO LANGUAGES",
  heading: "One protocol, two implementations, one Redis",
  body:
    "The Python port is not a re-imagining. It runs the same Lua scripts against the same keys, so a TypeScript process and a Python process can draw from one budget pool and one circuit breaker. That claim is tested, not asserted: real workers in each language run against one Redis and read each other's results.",
  diagramTitle: "TypeScript and Python sharing one Redis",
  diagramDesc:
    "A TypeScript broker and a Python broker both send the same Lua scripts to one Redis. A test fails if the two copies of the scripts differ.",
  caption: "Same scripts, same keys, same state.",
  points: [
    {
      title: "Cooperation tests",
      body: "A TypeScript worker registers an agent and a Python worker is admitted against that budget, and the reverse. Workers speak JSON lines over stdin/stdout, so neither language needs the other's runtime.",
    },
    {
      title: "Shared behavior cases",
      body: "One language-neutral file of operation sequences with expected results and final Redis state runs through both implementations, so behavior cannot quietly diverge.",
    },
    {
      title: "Script equivalence",
      body: "A Python unit test compares the Lua scripts used by the two implementations and fails if they drift apart, so the shared-script claim is enforced by CI.",
    },
  ],
};
