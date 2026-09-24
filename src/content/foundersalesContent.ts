// FounderSales case-study content.
// Extracted verbatim from FOUNDERSALES_PORTFOLIO_INTEGRATION.md §6.
// Image files must exist in src/assets/ with the exact names imported below.

import fsHomeDashboard from "../assets/home-dashboard.png";
import fsVoiceProfile from "../assets/voice-profile-detail.png";
import fsOpportunitiesList from "../assets/opportunities-list.png";
import fsOpportunityIntel from "../assets/opportunity-detail-ai-intel.png";
import fsPipelineKanban from "../assets/pipeline-kanban.png";
import fsPracticeLive from "../assets/practice-live-session.png";
import fsPracticeMonologue from "../assets/practice-session-replay-monologue.png";
import fsCalendarPrep from "../assets/calendar-event-prep-tab.png";
import fsCalendarSignals from "../assets/calendar-event-signals-tab.png";
import fsMetricsOverview from "../assets/metrics-overview.png";
import fsMetricsPipeline from "../assets/metrics-pipeline.png";
import fsInsightsPatterns from "../assets/insights-patterns.png";

import fsSystemOverview from "../assets/fs-system-overview.png";
import fsAiFallbackChain from "../assets/fs-ai-fallback-chain.png";
import fsCrossInstance from "../assets/fs-cross-instance-coordination.png";
import fsCostGating from "../assets/fs-calendar-cost-gating.png";
import fsQueueTopology from "../assets/fs-queue-topology.png";
import fsVoiceMemoPipeline from "../assets/fs-voice-memo-pipeline.png";

export const links = {
  github: "https://github.com/Devpaul-01/Foundersales",
  ciBadge: "https://github.com/Devpaul-01/Foundersales/actions/workflows/tests.yml/badge.svg",
  ciWorkflow: "https://github.com/Devpaul-01/Foundersales/actions/workflows/tests.yml",
  architectureDoc: "https://github.com/Devpaul-01/Foundersales/blob/main/ARCHITECTURE.md",
  backgroundJobsDoc: "https://github.com/Devpaul-01/Foundersales/blob/main/BACKGROUND_JOBS.md",
  productDoc: "https://github.com/Devpaul-01/Foundersales/blob/main/PRODUCT_OVERVIEW.md",
};

export const hero = {
  eyebrow: "ENGINEERING CASE STUDY",
  headline: "An AI sales coach that decides whether an AI call is worth making.",
  subhead:
    "FounderSales is a multi-tenant sales coaching and outreach platform for founders who have never done outbound before. Discovery, drafted outreach, a simulated buyer to rehearse against, meeting prep and coaching all draw on one voice profile. This page walks through the backend that makes that reliable: a four-provider AI fallback chain, Redis-coordinated state, three purpose-built job queues, and a cost gate that runs before the model call.",
  statusNote:
    "Actively in development, built solo. Large parts of the backend are solid and documented; some pieces are still half-wired, and this page names them in the Honest Gaps section. There is no live deployment linked yet, and no billing system.",
  image: fsHomeDashboard,
  imageAlt:
    "FounderSales home dashboard with momentum score, 30-day activity chart, growth feed, active goals, and quick-start chat prompts",
  imageCaption:
    "The home dashboard. The momentum score is computed deterministically in code (streak, volume, reply rate, pipeline stage, goals, practice); only the narrative sentence above it is AI-written.",
};

export const problem = {
  eyebrow: "§01 · THE PROBLEM",
  heading: "A first-time founder doing cold outreach has a blank CRM and a chatbot. That is not coaching.",
  body: [
    "Most sales tools assume you already know how to sell and only need somewhere to log activity. A founder doing outbound for the first time does not know what a good message sounds like, and has nobody to rehearse a hard conversation against before having it for real.",
    "Generic AI tools make this worse. They have no idea what you sell, who you sell to, or what happened the last three times you messaged someone, so every answer is advice that could apply to a hundred other people.",
    "FounderSales' premise is that everything it generates should come from the same understanding of who you are and what you are selling, and that understanding should sharpen the longer you use it. A voice profile built at onboarding feeds opportunity scoring, outreach drafting, the personality of the simulated buyer, and calendar prep, rather than four AI features that happen to share a login.",
  ],
};

export const productModel = {
  eyebrow: "§02 · THE MODEL",
  heading: "One profile, five surfaces, and a coaching loop that reads from real outcomes.",
  intro:
    "A Workspace is the tenant boundary. A voice profile lives per (workspace, user). Every AI-relevant table is keyed the same way, because one person can belong to several workspaces with legitimately different products and audiences.",
  nodes: [
    {
      label: "Voice profile",
      description:
        "Synthesised at onboarding from three rounds of AI-generated questions: differentiator, ICP trigger, objection reframe, opening hooks, and a personalised avoid-phrase list.",
    },
    {
      label: "Surfaces",
      description:
        "Discovery, outreach, practice simulation, calendar intelligence, and coaching/insights. All read the same profile.",
    },
    {
      label: "Outcome loop",
      description:
        "Logged feedback on real messages, plus scored practice sessions, blend weekly into one skill trend that drives drills and insights.",
    },
  ],
  satellites: [
    "Opportunity discovery",
    "Pipeline",
    "Practice simulation",
    "Calendar prep and debrief",
    "Voice memos",
    "Prospect dedup",
    "Coaching and growth cards",
    "Team manager layer",
  ],
  image: fsVoiceProfile,
  imageAlt:
    "Voice profile detail page showing unique value prop, target customer, ICP trigger, main objection and reframe, best proof point, voice style, and phrases to avoid",
  imageCaption:
    "The synthesised voice profile. It is editable after onboarding (deep-merged) or can be rebuilt from the original answers.",
};

export const surface = {
  eyebrow: "§03 · THE SURFACE",
  heading: "From 'who do I message' to 'here is the message', in one flow.",
  intro:
    "Cold outreach starts with finding people worth messaging. Discovery finds them, scores them, and drafts the message before the user ever sees the card.",
  beats: [
    {
      image: fsOpportunitiesList,
      imageAlt:
        "Opportunities feed with fit, timing, and intent scores across LinkedIn, Reddit, Product Hunt, and Indie Hackers",
      caption:
        "Discovery runs Exa neural search per preferred platform, then scores the whole batch on fit, timing, and intent in one AI call. Anything below the composite threshold is discarded. Every qualifying result gets a drafted message, checked against the user's own avoid-phrase list and regenerated once if it violates it.",
    },
    {
      image: fsOpportunityIntel,
      imageAlt:
        "Opportunity detail with pain points, talking points, risks, and a generated outreach message",
      caption:
        "The detail view runs a live search plus two parallel Groq calls (research brief, outreach specifics) and caches the snapshot on the row for 7 days, so repeat views cost nothing.",
    },
    {
      image: fsPipelineKanban,
      imageAlt: "Pipeline kanban with Contacted, Replied, Call/Demo, and Closed Won columns",
      caption:
        "Logging positive feedback auto-advances a new deal to contacted, and a contacted deal to replied. marked_sent_at is stamped the first time a deal reaches a sent-or-later stage and never overwritten, so it means 'when outreach actually started'.",
    },
  ],
  searchGateNote:
    "Before spending an Exa credit, a cheap AI router decides whether a live search has a good chance of finding anything. If it says no, or the workspace's daily quota is spent, the system falls back to Groq-generated practice examples, clearly flagged is_example: true and never presented as real leads.",
};

export const aiReliability = {
  eyebrow: "§04 · AI RELIABILITY",
  heading: "Not one API call with a try/catch. A fallback chain that knows whose fault a failure is.",
  intro:
    "Every AI feature routes through one function, callWithFallback(messages, tier). It builds a queue of (provider, model, key) entries in fixed priority order (Cerebras, Groq, Mistral, OpenRouter, chosen by free-tier throughput), and tries them until one succeeds. Each provider carries multiple keys from separate accounts, so one account hitting its limit does not take the provider out of rotation.",
  classification: {
    heading: "Four categories, because 'retryable or not' is the wrong question.",
    body:
      "classifyProviderError() reads the real structured failure data (HTTP status, the provider's parsed error body, a network error code) captured when a typed ProviderCallError is thrown. It replaced substring matching on a formatted message, which could not distinguish an actual HTTP 500 from a token count that happened to contain those digits.",
    rows: [
      { category: "KEY_FAULT", trigger: "401 / 403 / 429", action: "Cool this specific key for an hour and move to the next key or provider" },
      { category: "PROVIDER_TRANSIENT", trigger: "500 / 502 / 503 / 504, or network error", action: "Move on, and do NOT cool the key. Cooling it would leave it unavailable for an hour over an outage unrelated to it" },
      { category: "BAD_MODEL", trigger: "400 with a model-not-found signal in the response body", action: "Evict just that model from the shared Redis model cache; the key stays healthy" },
      { category: "NON_RETRYABLE", trigger: "Anything else", action: "Report to Sentry and stop the chain. Retrying a malformed request against three more providers only reproduces the bug" },
    ],
  },
  image: fsAiFallbackChain,
  imageAlt:
    "AI provider fallback chain flow: callWithFallback builds a provider queue, attempts each provider/model/key, and classifies failures into key fault, provider transient, bad model, and non-retryable",
  imageCaption:
    "The queue loop. KEY_FAULT, PROVIDER_TRANSIENT and BAD_MODEL all return to the loop; only NON_RETRYABLE aborts.",
  extras: [
    {
      title: "Selective vision routing",
      body:
        "Only two models in the whole priority list can read images. The request is restructured into a multipart payload only when the model about to be called on this attempt is vision-capable; every other model gets the plain-text request with a placeholder. A fallback landing on a non-vision model degrades gracefully instead of sending a malformed request.",
    },
    {
      title: "Structured output, two strategies on purpose",
      body:
        "Most features parse model JSON through a six-step cascade with hardcoded defaults (a malformed reply degrades one feature, not a request). Calendar outputs are validated against real Zod schemas, and the raw model output is logged on failure so prompt drift is observable.",
    },
  ],
};

export const distributedState = {
  eyebrow: "§05 · DISTRIBUTED STATE",
  heading: "One instance discovers a bad key. Every other instance already knows.",
  body: [
    "Without shared state, an instance that sees a key return 429 has no way to tell any other instance, so every one of them keeps sending traffic to a key already known to be failing until each independently rediscovers the same failure. Key cooldowns are stored as a Redis hash per (provider, keyIndex) with a one-hour expiry, and the cooldown check is a key-existence test rather than timestamp arithmetic.",
    "The same module, providerCooldown.js, is generic over an arbitrary provider string, which is why Exa's search-key rotation shares the exact mechanism instead of keeping a structurally identical copy that could drift.",
    "Model discovery works the same way: cached in Redis for six hours and refreshed by whichever instance wins a short-lived distributed lock (SET NX PX with a Lua compare-and-delete release, 15s TTL), rather than every instance hitting every provider's /models endpoint on every boot.",
  ],
  image: fsCrossInstance,
  imageAlt:
    "Sequence diagram: Instance 1 sees a Groq key return 429 and writes a cooldown hash to Redis; Instance 2 later reads it and excludes the key from its queue with no wasted request",
  imageCaption:
    "Instance 2 never attempts key #3. The wasted 429 is avoided, not just retried.",
  redisRoles: {
    heading: "Redis serves six different roles here, not one 'caching layer'.",
    rows: [
      { role: "Caching", detail: "30s auth profile and workspace context, 4-24h report caches, 6h model lists" },
      { role: "Queues", detail: "BullMQ over a separate ioredis connection, isolated from the client used for everything else" },
      { role: "Rate limiting", detail: "Namespaced stores wrapping the shared client, one key prefix per limiter" },
      { role: "Distributed locks", detail: "Model-discovery refresh, with Lua compare-and-delete release" },
      { role: "Cross-instance coordination", detail: "Provider and Exa key cooldowns" },
      { role: "Concurrency guard", detail: "Sorted set of in-flight calls scored by timestamp; abandoned slots age out via a staleness sweep instead of a shared TTL" },
    ],
  },
  failureNote: {
    eyebrow: "Fail-open by design",
    body:
      "Every Redis helper returns a safe empty value on any error instead of throwing. An outage degrades precision (rate limits become per-instance, caching becomes a no-op) but never takes down a request. The degraded-mode alert is throttled to once per condition per five minutes and is deliberately in-memory: coordinating 'Redis is down' alerts through Redis would be circular.",
  },
  killSwitch: {
    eyebrow: "Reversible rollout",
    body:
      "MULTIPROVIDER_REDIS_STATE_ENABLED reverts the AI layer to the original in-memory cooldown and discovery behaviour with no deploy. This is the highest-traffic file in the codebase, so the in-memory path was kept as a deliberate escape hatch rather than deleted.",
  },
};

export const backgroundJobs = {
  eyebrow: "§06 · BACKGROUND WORK",
  heading: "Three shapes of 'not right now' work, three separate queues.",
  intro:
    "A practice session alone can trigger four AI calls after the user has moved on. None of that belongs in the request that ended the session. The work comes in three shapes, and each got its own BullMQ queue and worker instead of one generic job table.",
  queues: [
    { name: "scheduled-jobs", concurrency: "1", detail: "21 cron-registered jobs (daily tips, weekly pattern detection, nightly metrics, calendar sweeps). Concurrency 1 and a 10-minute lock, because these are aggregate scans that would double-count if run in parallel." },
    { name: "practice-jobs", concurrency: "10", detail: "Event-driven follow-up work with deliberate delays: delivered/seen ticks at 500ms/1.5s, skill scoring at 2s, coaching annotations at 5s, playbook at 2 hours." },
    { name: "background", concurrency: "5", detail: "Durable replacements for what used to be fire-and-forget IIFEs in route handlers: calendar prep and research, voice memo transcription, dedup scans, chat summarisation. Default retry of 3 attempts with exponential backoff." },
  ],
  image: fsQueueTopology,
  imageAlt:
    "Queue topology: HTTP routes and the cron scheduler enqueue onto scheduled-jobs, practice-jobs and background queues in Redis, each consumed by its own worker",
  imageCaption:
    "Every cron entry is registered directly on the queue its own worker consumes. registerSchedules() clears and re-registers the whole list on every boot, so the array is the schedule and it cannot drift.",
  idempotencyHeading: "Idempotency matched to each job's write shape",
  idempotency: [
    { mechanism: "Stable jobId (BullMQ dedup)", usedBy: "Calendar prep, research, extraction, follow-up, transcription, dedup-scan" },
    { mechanism: "Database re-check before spending an AI call", usedBy: "Calendar prep handler, chat summarisation" },
    { mechanism: "Atomic UPDATE ... WHERE flag = false", usedBy: "Calendar reminder scan (a DB-level compare-and-swap; no BullMQ job per event)" },
    { mechanism: "Row-existence check before insert", usedBy: "Weekly plan, first-time cards, daily tip" },
    { mechanism: "Upsert on a composite conflict key", usedBy: "Skill progression, communication patterns, adaptive curriculum" },
  ],
  idempotencyNote:
    "jobId dedup only protects against duplicate enqueues under the same ID. It does not protect against two different job IDs (one from event creation, one from the daily sweep) racing to generate prep for the same event, which is why the handler also re-checks prep_generated in the database before doing any AI work.",
  failureHandling:
    "There is no generic dead-letter queue. Failed jobs stay in BullMQ's failed set (bounded by removeOnFail) and are inspectable and retryable in Bull Board, which is mounted behind a shared-secret header and its own rate limiter. Calendar prep is the one job with an automated recovery path: on final failure the worker writes prep_failed back to the event row, which stops the daily sweep re-enqueueing a permanently broken event and gives the UI a real failure state instead of an endless spinner.",
};

export const costGating = {
  eyebrow: "§07 · COST GATING",
  heading: "The decision to call the model is made before the call, and logged.",
  intro:
    "Calendar AI is the feature most deliberately engineered around not spending calls reflexively. Every trigger passes through calendarAiGate.js, which returns proceed or skip with a reason, and every decision, in both directions, is written to calendar_ai_events.",
  gates: [
    { fn: "shouldGeneratePrep", checks: "Has attendee context? Low-stakes event type with no linked deal?", outcome: "Skip yields a non-AI placeholder that still flips prep_generated so the UI never spins. Proceed picks the 'quality' tier if tied to a deal or a demo, otherwise 'fast'." },
    { fn: "shouldRunResearch", checks: "Already researched? Researched under 14 days ago for this same prospect on any event? Workspace quota available?", outcome: "Reuse existing research at zero cost, skip on quota, or run Exa search plus Groq synthesis." },
    { fn: "shouldExtractCommitmentsSignals", checks: "Notes at least 20 characters?", outcome: "One call extracts commitments AND signals. This replaced two separate calls on the same input text, and debrief submission is the highest-frequency AI trigger in the feature." },
    { fn: "shouldGenerateFollowUp", checks: "Outcome is 'dead' with no next-step recommendation?", outcome: "Skip, or generate three variants: brief, substantive, re-engagement." },
  ],
  image: fsCostGating,
  imageAlt:
    "Calendar cost-gating diagram: four triggers each pass through their own gate to a skip or proceed outcome, with every decision logged to calendar_ai_events",
  imageCaption:
    "Every lane ends at the same sink. 'AI cost was optimised here' becomes a checkable query against calendar_ai_events instead of a claim.",
  outputs: [
    {
      image: fsCalendarPrep,
      imageAlt: "Meeting prep tab with opening line, talking points, key question, anticipated objection, and follow-up drafts",
      caption: "The prep brief: built from prospect timeline, prior signals, open commitments, and live research.",
    },
    {
      image: fsCalendarSignals,
      imageAlt: "Signals tab showing buying, risk, timing, and engagement signals with confidence scores",
      caption: "Signals and commitments from the debrief's single merged extraction call.",
    },
  ],
  consolidationNote:
    "Prep generation used to exist in three places: inline in a route, re-implemented in the worker, and a third helper that a comment claimed was called but never was. All three trigger paths (creation, reschedule, daily sweep) now converge on one function, generateAndPersistPrep().",
};

export const practice = {
  eyebrow: "§08 · PRACTICE ENGINE",
  heading: "The one AI feature that has to run inside the request. So it is one call, not four.",
  body: [
    "A practice conversation has to feel like live chat, so the buyer's reply is generated synchronously in the HTTP request. An earlier design made the reply, the private monologue, the outcome check, and the coaching tip as four sequential calls. generatePracticeProspectReplyV3 bundles all of it, plus the state delta, into a single response, cutting latency and cost per turn.",
    "The trade-off is a tightly constrained prompt and JSON schema that must produce every field in one shot. parseV3Reply() supplies field-by-field defaults if the response is malformed, so one bad generation degrades a single turn instead of failing it. The older V1/V2 functions are kept for reference rather than deleted.",
    "A ghost scenario is gated by a separate quality-scoring call. A message scoring 40 or more breaks the silence for one turn; below that the buyer stays silent and the user gets a coaching hint explaining why.",
  ],
  images: [
    {
      image: fsPracticeLive,
      imageAlt: "Live practice session with interest, trust, and confusion meters alongside the buyer chat",
      caption: "Buyer state (interest, trust, confusion) shifts turn by turn from the bundled call's state delta.",
    },
    {
      image: fsPracticeMonologue,
      imageAlt: "Session replay showing the buyer's hidden internal monologue next to each message",
      caption:
        "Internal monologues are scrubbed from active-session endpoints and only returned from the replay endpoint once the session is completed.",
    },
  ],
  scoringNote: {
    eyebrow: "Two sources, one trend line",
    body:
      "Real sent messages are scored 0-10 on hook, clarity, value, personalisation, CTA and tone. Practice sessions are scored 0-100 on six axes including discovery and objection handling, which only exist across a multi-turn conversation. The weekly skillProgressionJob normalises practice down by 10 before blending. Getting that normalisation backwards (averaging a 0-100 with a 0-10 number) was a real bug, fixed and documented inline.",
  },
};

export const metricsVsInsights = {
  eyebrow: "§09 · METRICS VS INSIGHTS",
  heading: "The model interprets numbers. It does not invent them.",
  intro:
    "The analytics surface is deliberately split in two. Metrics are computed in code from queries. Insights are where AI does synthesis, over data the system already computed.",
  columns: [
    {
      label: "Metrics (deterministic)",
      points: [
        "Momentum score is arithmetic: streak, 30-day volume, positive rate, pipeline stage, goal completion, practice count.",
        "Relationship health is a base of 50 adjusted by recency, last outcome, recent buying/risk signals and overdue commitments, clamped 0-100. Arithmetic keeps it explainable.",
        "Objection type on a short feedback note is regex pattern matching with positive and negative signals per type, not a second model call.",
        "metrics.js contains zero LLM calls anywhere in the file.",
      ],
    },
    {
      label: "Insights (AI over computed data)",
      points: [
        "Pattern detection compares pre-computed winning-versus-losing message statistics and asks the model to name 2-4 patterns from them.",
        "The 'why you're losing' report is generated from aggregated scores, failure categories and objection counts, then cached for 4 hours.",
        "Mood-vs-performance uses a real Pearson correlation and requires 5 or more active days before it surfaces anything.",
        "Practice ROI compares outcome rates across weeks with and without practice, and requires 3 or more weeks in each bucket.",
        "Skill persistence is called 'persistent' only after 3 or more consecutive weeks of the same weakness.",
      ],
    },
  ],
  images: [
    { image: fsMetricsOverview, imageAlt: "Metrics overview tab with momentum breakdown and pipeline, response, and win-rate cards", caption: "Metrics: aggregation and arithmetic." },
    { image: fsMetricsPipeline, imageAlt: "Metrics pipeline tab with funnel chart, stage distribution, and at-risk deals", caption: "Metrics: funnel counts and at-risk lists computed in code." },
    { image: fsInsightsPatterns, imageAlt: "Insights patterns tab with evidence-cited observations and suggested actions", caption: "Insights: AI interpretation, each with a concrete suggested action." },
  ],
  grounding: {
    eyebrow: "Grounding the model",
    body:
      "Word count and self-referential ratio for a sent message are pre-computed in code and handed to the model as grounding data, rather than asking it to count. That is the same principle applied one level down.",
  },
  thresholdNote:
    "The minimum-sample thresholds are the honest part: below them, the endpoint returns has_data: false instead of presenting a weak correlation as insight.",
};

export const dataArchitecture = {
  eyebrow: "§10 · DATA ARCHITECTURE",
  heading: "Scoped to the workspace, atomic where it has to be, and paged without offsets where it matters.",
  callouts: [
    {
      title: "Every AI-relevant table is keyed by (workspace_id, user_id).",
      problem:
        "One person can hold membership in several workspaces, each with a different product, voice profile and practice history. Keying by user_id alone lets one workspace's context contaminate another's.",
      decision:
        "workspace_profiles, practice_sessions, conversation_analyses, skill_progression and communication_patterns are all workspace-scoped. When Supabase's workspace_profiles!inner joins started returning arrays, the fix everywhere was to find the element matching active_workspace_id instead of trusting index 0. A separate refactor removed archetype from the global users table because a shared value was silently overwritten by whichever workspace's detection ran last.",
      reason:
        "The 'wrong workspace's data' bug is invisible in single-workspace testing. It only exists between two contexts.",
      tag: "Multi-tenancy",
    },
    {
      title: "Race boundaries live in Postgres RPCs, not sequential JS.",
      problem:
        "Creating a workspace, accepting an invite, transferring ownership and incrementing counters are each several steps that can interleave under concurrent requests.",
      decision:
        "create_workspace_for_user, accept_workspace_invite, transfer_workspace_ownership, increment_chat_stats, increment_performance_stats, increment_goal_progress, record_ai_usage and upsert_objection_count are stored procedures. record_ai_usage writes the append-only usage row and upserts the daily rollup in one operation.",
      reason:
        "A workspace can never exist with no owning member, ownership can never sit on two members at once, and an increment cannot lose an update under concurrent writes.",
      tag: "Atomicity",
    },
    {
      title: "Keyset pagination and aggregate queries.",
      problem:
        "Offset pagination degrades and can skip or repeat rows as data changes; loading every row to compute a total does not scale.",
      decision:
        "Calendar list and search use cursor pagination on (event_date, seq), backed by a composite index that matches the query shape. Chat messages page backward on a monotonic seq column. The practice sessions endpoint replaced a 500-row fetch with three targeted aggregate queries.",
      reason:
        "The index-backed keyset comparison is stable under inserts. The chat-list endpoint stays on offset, and the docs say why: last_message_at is nullable, which makes a clean keyset comparison materially more complex for limited benefit at that scale.",
      tag: "Scale-aware access",
    },
    {
      title: "Prospect dedup that refuses to merge automatically.",
      problem:
        "Auto-merging two prospects with a similar name risks silently combining two different real people's histories.",
      decision:
        "Layer 1 exact email or LinkedIn match, layer 2 normalised-name exact match (both auto-reuse). Layer 3 trigram similarity at a 0.45 threshold writes into a review table for a human. Merging repoints every referencing table, then deletes the duplicate.",
      reason:
        "A genuine duplicate left unmerged for a few days is a cheaper failure than combining two different real people.",
      tag: "Data integrity",
    },
  ],
  usageNote:
    "Every AI call carrying workspaceId and userId is recorded through record_ai_usage. An earlier single-id parameter meant 'user' in some call sites and 'workspace' in others, which made cost reporting unreliable; requiring both removed the ambiguity. Global daily totals are summed from the same rollup instead of maintaining a separate counter that could drift.",
};

export const bugStories = {
  eyebrow: "§11 · BUGS I FOUND",
  heading: "Three failures that only existed in the gaps between components.",
  intro:
    "These are documented in the code comments and docs. Each one is a bug where nothing threw an obvious error.",
  stories: [
    {
      title: "A successful transcription that was relabelled as a failure.",
      body:
        "The voice-memo enrich job was enqueued from inside the transcription job's try block with a jobId containing a colon. BullMQ rejects colons in custom job IDs, so every transcription that completed then immediately threw on the enqueue call. The surrounding catch mistook that for a transcription failure, marked the memo failed, and retried transcription from scratch up to three times per memo, for a bug unrelated to transcription. The fix moved the enqueue outside the try/catch, used a colon-free ID, and downgraded its failure to a logged warning, so a failure to schedule enrichment can no longer retroactively mark a completed transcription as failed.",
      tag: "Job pipeline",
    },
    {
      title: "Rate limiters that quietly shared counters.",
      body:
        "Several limiters called createRateLimitStore() with no namespace, silently defaulting to one shared 'default' Redis key space. Limiters keyed on the same value (user id or IP) therefore incremented the same counter, so an onboarding burst and a goals check-in decremented the same budget. The fix was config/limiters.js: a buildLimiter() factory that requires an explicit unique namespace and has no default, plus a loud warning if the default namespace is ever requested again.",
      tag: "Rate limiting",
    },
    {
      title: "An endpoint that could never have returned a 200.",
      body:
        "GET /intelligence referenced a TTL constant that was never defined or imported, which threw after every successful AI generation, inside its own try/catch, so it was treated as an AI failure. Its catch block then called a fallback function that did not exist anywhere in the codebase, throwing a second, uncaught error. The handler's real behaviour was a 500 on every request. Extracting it into intelligenceReport.js fixed both, and the rule-based fallback is a new implementation, not a relocation.",
      tag: "Error handling",
    },
  ],
  image: fsVoiceMemoPipeline,
  imageAlt:
    "Voice memo pipeline sequence: upload route enqueues transcribe, worker fetches audio and transcribes via Groq Whisper, commits status, then enqueues enrich as a separate job",
  imageCaption:
    "The corrected flow. Transcription is committed before the enrich job is scheduled, so an enqueue failure cannot undo it.",
};

export const reliability = {
  eyebrow: "§12 · RELIABILITY AND SECURITY",
  heading: "Failure modes considered, and stated where they are not covered.",
  points: [
    { label: "Auth", detail: "Supabase JWT verified live; the raw token is never attached to req.user. Profile (30s) and workspace context (30s) cached in Redis, with explicit invalidation on role change and workspace switch." },
    { label: "Invites", detail: "32-byte random tokens, SHA-256 hashed before storage, so the plaintext is never persisted." },
    { label: "Uploads", detail: "MIME validated in the multer filter and against received bytes; chat attachments capped by an aggregate 16,000-character budget so a large file cannot balloon what is sent to the model." },
    { label: "Boot ordering", detail: "The HTTP server starts before background jobs. If Redis is unreachable the API still serves traffic; each of the four job-startup steps is wrapped independently." },
    { label: "Graceful shutdown", detail: "An earlier scheduled-worker handler called process.exit(0) right after worker.close(), killing the process before the practice worker could drain. That call was removed so shutdown is cooperative; the worker-only entry point adds a bounded 10-second force-exit." },
    { label: "Sentry placement", detail: "Most AI failures never reach automatic Express capture because feature functions catch their own errors. Explicit capture sits at two choke points: NON_RETRYABLE and ALL_PROVIDERS_FAILED. Key faults and transient errors are deliberately not sent, since the chain exists to absorb them." },
  ],
  testingNote:
    "Tests use Vitest on the pure or extractable logic: pagination, provider error classification, momentum scoring, and workspace-profile array resolution. CI runs on every push. The README does not claim broader coverage.",
};

export const architecture = {
  eyebrow: "§13 · FULL ARCHITECTURE",
  heading: "One process by default, splittable into two, sharing one service layer.",
  body:
    "A layered Express API (routes, middleware, controllers, services) on Supabase Postgres, with three BullMQ workers. It runs as a single combined process (app.js, what npm start runs) or as two independent processes: server.js for the API only, and workers/index.js for the scheduler and all three workers with no HTTP server. Both entry points are fully wired. The combined process remains the default. The split topology is available and correct, but adopting it as the deployment shape is a decision that has not been made yet.",
  image: fsSystemOverview,
  imageAlt:
    "System architecture: client, request perimeter, auth chain, application layer, asynchronous processing, Postgres, Redis, the four-provider AI layer, and external services",
  imageCaption:
    "The full frame. The reason it is not microservices: the domain is a small number of tightly related entities with cross-cutting AI concerns, cheaper to share as one process's library code. The one genuine seam is synchronous requests versus asynchronous work.",
};

export const honestGaps = {
  eyebrow: "§14 · WHAT IS HONESTLY NOT FINISHED",
  heading: "Named here before someone finds them.",
  intro:
    "The repo's README and ARCHITECTURE.md list these themselves. A defined table or an enqueued job is not the same claim as a working feature.",
  callouts: [
    {
      title: "pattern_insights fails every weekly run.",
      problem: "pattern_detection enqueues a job named pattern_insights when it finishes.",
      decision:
        "No handler is registered for that name in scheduledWorker.js. The real implementation exists (runPatternInsightsJob) and is imported, but deliberately not wired in, because registering it as both a direct cron and a self-enqueue would double-execute. The job retries twice and lands in the failed set.",
      reason: "Scoped and understood. The fix is a decision between two wiring options, not a guess, and it has not been made yet.",
      tag: "Known gap 1",
    },
    {
      title: "Service-role access, not RLS, is the enforcement boundary.",
      problem: "The backend uses Supabase's service-role client, which bypasses Row-Level Security.",
      decision:
        "Authorisation is enforced by the middleware chain (authenticate, workspace membership, rate limit). That is correct as long as the chain is never bypassed.",
      reason: "There is no independent database-layer backstop today. A route that forgot its membership check would have nothing underneath it.",
      tag: "Known gap 2",
    },
    {
      title: "Booking pages exist at schema level only.",
      problem: "booking_pages and availability_windows are defined in migrations and schema.sql.",
      decision: "No route or service uses them yet.",
      reason: "Planned, not shipped. It should not be read as a working feature.",
      tag: "Planned",
    },
    {
      title: "No billing system.",
      problem: "Tier values (free, pro, enterprise) exist.",
      decision:
        "They gate a few things (Exa daily quota, market-intel eligibility) but there is no payment provider, plan enforcement or subscription lifecycle behind them.",
      reason: "This is a solo project, not a business. There are no customers or revenue behind it.",
      tag: "Not built",
    },
  ],
  deadCodeNote:
    "Two practice-reply job handlers (PRACTICE_REPLY, PRACTICE_GHOST) remain registered though nothing enqueues them since the reply path went synchronous. They were kept as a fallback rather than deleted mid-migration. The default deployment shape is still the combined process, and the frontend source is not part of the documented backend.",
};

export const stack = {
  eyebrow: "§15 · STACK",
  heading: "What the story above actually runs on.",
  groups: [
    { role: "Runtime", items: ["Node.js", "Express 4", "ESM modules"] },
    { role: "Data", items: ["Supabase Postgres", "supabase-js query builder", "Postgres RPCs", "pg_trgm"] },
    { role: "Cache and queues", items: ["Redis", "BullMQ", "ioredis", "rate-limit-redis"] },
    { role: "AI", items: ["Cerebras", "Groq (chat + Whisper)", "Mistral", "OpenRouter", "Exa search"] },
    { role: "Auth and validation", items: ["Supabase Auth", "JWT bearer + cookie refresh", "Zod"] },
    { role: "Storage and delivery", items: ["Cloudinary", "Firebase Cloud Messaging", "Resend / SMTP"] },
    { role: "Ops", items: ["Sentry", "Bull Board", "Helmet", "Vitest + GitHub Actions"] },
  ],
};

export const numbers = {
  eyebrow: "§16 · BY THE NUMBERS",
  stats: [
    { value: "4", label: "AI providers in one fallback chain" },
    { value: "4", label: "failure categories, classified from structured status and body" },
    { value: "3", label: "BullMQ queues, each with its own worker and concurrency" },
    { value: "21", label: "cron-registered scheduled jobs" },
    { value: "6", label: "distinct roles Redis serves" },
    { value: "9", label: "atomic Postgres RPCs for race-prone writes" },
  ],
  ciNote: "Live build status from the repository's own CI workflow, not a static badge.",
};

export const closing = {
  eyebrow: "§17 · CLOSING",
  heading: "The interesting part was deciding when not to call the model.",
  body:
    "It was making a failure mean the right thing (whose fault, and what to do next), making shared state correct once more than one process runs, keeping the model's job to interpretation rather than arithmetic, and writing the unfinished parts down instead of letting a defined table or an enqueued job stand in for a working feature.",
};
