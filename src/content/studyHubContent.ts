// All copy, stats, and image references for the StudyHub showcase live here.
// Section components stay presentational — this is the single file to edit
// when revising copy. Every claim here is sourced from README.md,
// ARCHITECTURE.md, PRODUCT_OVERVIEW.md, and BACKGROUND_JOBS.md — nothing
// invented. Mirrors the shape of kithContent.ts so the two projects read as
// one consistent portfolio, and so StudyHub can be split into its own
// project file later without restructuring.

import studyhubSystemArchitecture from "../assets/studyhub-system-architecture.png";
import studyhubOnboardingMatchPreview from "../assets/studyhub-onboarding-match-preview.png";
import studyhubConnectionsCompatibility from "../assets/studyhub-connections-compatibility.png";
import studyhubThreadAiMention from "../assets/studyhub-thread-ai-mention.png";
import studyhubHomeworkMarketplace from "../assets/studyhub-homework-marketplace.png";
import studyhubLeaderboardRank from "../assets/studyhub-leaderboard-rank.png";
import studyhubReputationHistory from "../assets/studyhub-reputation-history.png";
import studyhubRefreshTokenRotation from "../assets/studyhub-refresh-token-rotation.png";
import studyhubAnnotatedReputationLedger from "../assets/studyhub-annotated-reputation-ledger.png";
import studyhubNotificationFanout from "../assets/studyhub-notification-fanout.png";
import studyhubAiProviderRouting from "../assets/studyhub-ai-provider-routing.png";
import studyhubCacheSplitPattern from "../assets/studyhub-cache-split-pattern.png";
import studyhubAnnotatedLeaderboardCache from "../assets/studyhub-annotated-leaderboard-cache.png";
import studyhubWebsocketPresence from "../assets/studyhub-websocket-presence.png";
import studyhubReliabilityLockingReconciliation from "../assets/studyhub-reliability-locking-reconciliation.png";

// -- links --------------------------------------------------------------

export const links = {
  github: "https://github.com/Devpaul-01/StudyHub",
  liveDemo: "https://studyhub-two-psi.vercel.app/",
  architectureDoc:
    "https://github.com/Devpaul-01/StudyHub/blob/main/ARCHITECTURE.md",
  productDoc:
    "https://github.com/Devpaul-01/StudyHub/blob/main/PRODUCT_OVERVIEW.md",
  backgroundJobsDoc:
    "https://github.com/Devpaul-01/StudyHub/blob/main/BACKGROUND_JOBS.md",
};

// -- hero -----------------------------------------------------------------

export const hero = {
  eyebrow: "ENGINEERING CASE STUDY",
  headline: "Peer tutoring, made discoverable.",
  subhead:
    "StudyHub is a peer-to-peer academic platform built around one idea: reputation earned by helping other students should be the platform's actual currency. A Q&A feed, a connections-based social graph, group chat, a homework help marketplace, live co-study sessions, and a multi-provider AI assistant, all reinforcing the same reputation system. This page is a walk-through of the engineering behind it.",
  statusNote:
    "Actively in development \u2014 core systems are functional and used daily while building, though the product is not yet feature-complete.",
  image: studyhubSystemArchitecture,
  imageAlt:
    "StudyHub system architecture: client, request perimeter, auth chain, application layer, async processing, real-time layer, data layer, and external services",
  imageCaption:
    "One Flask monolith, three deployable roles \u2014 API process, RQ workers, and an embedded scheduler \u2014 sharing one Postgres database and one Redis instance used for four distinct purposes.",
};

// -- problem ----------------------------------------------------------------

export const problem = {
  eyebrow: "\u00a701 \u00b7 THE PROBLEM",
  heading: "The person who could explain it is in the same building. There's no way to find them.",
  body: [
    "A student stuck on a problem set at 11pm has no reliable way to find a classmate who already understands the material, is online right now, and is willing to help \u2014 outside of scattered group chats with no structure, no accountability, and no way to reward the people who actually show up.",
    "Course forums are asynchronous and often dead by the time an answer would help. Group chats lose useful answers the moment the conversation scrolls past them. AI chat tools have no idea what course you're in, who your study partners are, or what you already asked yesterday.",
    "StudyHub's bet is that peer tutoring is abundant but undiscoverable: every class has students who are strong in a subject and students who need help in that same subject, but there's no matching layer, no reputation signal for who's reliable, and no lightweight tooling to make an ad hoc study session productive.",
  ],
};

// -- product model ----------------------------------------------------------

export const productModel = {
  eyebrow: "\u00a702 \u00b7 THE MODEL",
  heading: "Almost every feature either produces reputation, consumes it, or reinforces the behavior that generates it.",
  intro:
    "A Domain is one of thirteen product areas \u2014 the feed, threads, homework, gamification, and so on. A Service is the zero-Flask-dependency business logic layer every domain funnels through. Reputation is the currency the whole system is denominated in.",
  nodes: [
    {
      label: "Domains",
      description:
        "Thirteen product areas \u2014 identity, social graph, feed, threads, homework, live sessions, AI, gamification \u2014 each with a real UI surface.",
    },
    {
      label: "Services",
      description:
        "Business logic with zero Flask dependency, CI-enforced. Called identically from routes, WebSocket handlers, and background jobs.",
    },
    {
      label: "Reputation",
      description:
        "One write path, an append-only ledger. Every point change is independently reconstructable from history, never a bare mutable counter.",
    },
  ],
  satellites: [
    "Connections",
    "Threads",
    "Homework marketplace",
    "Live study sessions",
    "Learnora (AI)",
    "Badges & leaderboards",
    "Notifications",
  ],
};

// -- domains overview (StudyHub-specific: the 13-domain table) --------------

export const domains = {
  eyebrow: "\u00a703 \u00b7 THE SURFACE",
  heading: "Thirteen product domains, a comparatively small number of shared mechanisms.",
  intro:
    "The product surface is intentionally broad \u2014 social, content, homework, gamification, AI, real-time \u2014 but it's built on shared mechanisms reused consistently across domains, rather than each feature reinventing its own caching, notification delivery, or failure handling.",
  groups: [
    {
      role: "Identity & social",
      items: ["Identity & Auth", "Onboarding & Matching", "Social Graph"],
    },
    {
      role: "Content & collaboration",
      items: ["Content Feed", "Threads", "Direct Messages", "Live Study Sessions"],
    },
    {
      role: "Work & reward",
      items: ["Homework", "Gamification"],
    },
    {
      role: "Platform",
      items: ["Learnora (AI)", "Notifications", "Search", "Administration"],
    },
  ],
};

// -- onboarding & matching ---------------------------------------------------

export const matching = {
  eyebrow: "\u00a704 \u00b7 ONBOARDING \u2192 INSTANT MATCHES",
  heading: "Ranked study partners on day one, not an empty profile.",
  body: [
    "Onboarding captures department, year, subjects, learning style, weekly availability \u2014 and, distinctly, subjects you need help with versus subjects you're strong in. That split is what powers the \u201ccomplementary skills\u201d half of compatibility scoring: matching isn't just \u201csame interests,\u201d it's \u201cyou can help each other.\u201d",
    "Compatibility scoring runs on four inputs \u2014 shared subjects, complementary skills, schedule overlap, and department match \u2014 combined into a single 0\u2013100 score. A match scoring \u226570% compatible auto-accepts on the first connection request, because forcing an accept step on an obviously strong match is friction without a real purpose.",
  ],
  image: studyhubOnboardingMatchPreview,
  imageAlt:
    "Onboarding's final step showing ranked study-partner matches computed immediately from the just-completed onboarding data",
  imageCaption:
    "The onboarding flow ends by surfacing ranked matches computed from that data, not a blank slate.",
};

// -- social graph -------------------------------------------------------------

export const socialGraph = {
  eyebrow: "\u00a705 \u00b7 THE TRUST BOUNDARY",
  heading: "Connections gate messaging by design \u2014 not by convention.",
  body: [
    "Connections are the platform's actual trust boundary, not just a friends list. You cannot DM a stranger cold: a mutual-accept connection is required first, enforced in the service layer rather than only the UI. Being in the same group thread as someone does not count as being connected.",
    "Blocking is a first-class, unambiguous state \u2014 a dedicated column records exactly who initiated a block, rather than overloading the existing requester/receiver columns to also encode that, which is what makes \u201cis this connection blocked, and by whom\u201d answerable without ambiguity anywhere else in the codebase that reads a connection row.",
  ],
  image: studyhubConnectionsCompatibility,
  imageAlt:
    "Ranked study-partner and mentor suggestions, each showing the specific compatibility signals behind the match percentage",
  imageCaption:
    "Discovery surfaces four distinct views \u2014 Suggestions, Discovery, Received/Sent requests, and connected \u2014 all pulling from the same underlying compatibility and mutual-connection-count machinery.",
};

// -- threads ------------------------------------------------------------------

export const threads = {
  eyebrow: "\u00a706 \u00b7 THREADS",
  heading: "Delivery status that's real, not simulated.",
  intro:
    "A thread is a longer-lived space than a post's comment section \u2014 a course study group, a project team \u2014 with real membership (creator/moderator/member roles), join requests, pinned messages, and reply threading.",
  beats: [
    {
      image: studyhubThreadAiMention,
      imageAlt:
        "A thread @mention getting a live, streamed Learnora response grounded in the thread's own conversation",
      caption:
        "Every thread message shows a genuine sent/delivered/read indicator, computed at send time from live cross-instance presence data \u2014 is the recipient's socket connected, are they actively viewing this specific thread right now \u2014 not a fixed delay or a guess. Status only ever moves forward, so a delivery event racing a read event for the same message can't visually downgrade something the recipient already saw.",
    },
  ],
  note:
    "Thread member counts are a case study in the platform's honest approach to data consistency: denormalized for read performance, but a detected drift here is never silently auto-corrected \u2014 because the count gates a real capacity check, and auto-fixing it risks masking an active bug that's letting the thread over-admit members past its stated cap.",
};

// -- homework -----------------------------------------------------------------

export const homework = {
  eyebrow: "\u00a707 \u00b7 HOMEWORK \u2014 TRACKING PLUS A MARKETPLACE",
  heading: "Personal tracking, and a request \u2192 offer \u2192 submit \u2192 review loop on top of it.",
  body: [
    "Personal tracking: assignments with due dates, difficulty, estimated hours, and status, surfaced with a computed priority score that blends urgency, difficulty, and status into one sort order \u2014 not just \u201csort by due date.\u201d",
    "The peer-help marketplace: any assignment can be shared for help, at which point it becomes visible to connections, who can offer to help, submit a solution, and receive feedback \u2014 a full loop, not a one-shot \u201cpost a question\u201d flow. Priority scoring is a pure function of due date, difficulty, status, and estimated hours \u2014 it takes no database session and mutates nothing, computed fresh on every read rather than written as a side effect of simply viewing the list.",
  ],
  image: studyhubHomeworkMarketplace,
  imageAlt:
    "The homework peer-help marketplace showing assignments shared by connections, each showing subject, difficulty, and how many helpers are already involved",
  imageCaption:
    "Smart suggestions \u2014 an urgent-and-hard assignment due soon, an easy win, a nudge toward the peer-help flow \u2014 run as a pure function over already-loaded data, cheap to compute on every homework-feed load.",
};

// -- learnora / AI --------------------------------------------------------

export const ai = {
  eyebrow: "\u00a708 \u00b7 LEARNORA \u2014 ONE AI LAYER, FIVE ENTRY POINTS",
  heading: "Not five integrations. One classified retry engine behind all of them.",
  intro:
    "Five product surfaces \u2014 standalone chat, post-context Q&A, thread @mentions, meeting-notes generation, and per-message AI actions \u2014 funnel into one engine rather than five hand-rolled retry loops with quietly drifting retry counts and timeouts.",
  classification: {
    heading: "Not every provider failure means the same thing.",
    body: "classify_provider_error() looks at real structured failure data \u2014 an HTTP status code, the provider's own parsed error body, a network-level exception type \u2014 and sorts every failure into exactly one of four categories, rather than treating a dead API key the same as a temporarily-down provider.",
    rows: [
      { category: "KEY_FAULT", trigger: "401 / 402 / 403 / 429", action: "Cool this specific key for an hour, advance the queue" },
      { category: "PROVIDER_TRANSIENT", trigger: "5xx / network failure", action: "Advance the queue \u2014 do NOT cool the key" },
      { category: "BAD_MODEL", trigger: "400 + a structured model-not-found signal", action: "Evict just that model from the shared cache" },
      { category: "NON_RETRYABLE", trigger: "Anything else", action: "Stop the fallback chain immediately" },
    ],
  },
  streaming:
    "Chat responses stream token-by-token. If a provider fails mid-stream, the system switches providers without the user noticing \u2014 no dropped connection, no resubmitted message, just a brief provider-switch signal the client already knows how to display.",
  fallback:
    "One feature is worth calling out for its failure-mode design: the AI-generated \u201cwhy you two might connect well\u201d overview has a fully-functional template fallback built from the exact same compatibility data the AI prompt would have used. If every provider is down at once, the feature still works \u2014 it just isn't AI-written that moment.",
  image: studyhubAiProviderRouting,
  imageAlt:
    "AI provider routing, classification, and failover diagram — entry points, call queue, and the four-way error classification",
  imageCaption:
    "Six providers back the system, with automatic model discovery keeping the ranked model list current without a manual config update.",
};

// -- gamification / reputation ------------------------------------------------

export const gamification = {
  eyebrow: "\u00a709 \u00b7 REPUTATION \u2014 ONE WRITE PATH",
  heading: "An append-only ledger, not a mutable number.",
  body: [
    "Every point change is backed by an auditable reputation-history row recording the before/after value and the action that caused it. This is what makes \u201cwhy did my reputation change\u201d answerable after the fact, and what makes the reputation total trustworthy as something other than a bare mutable counter that could silently drift.",
    "18 badges span engagement, helpfulness, and consistency, each with explicit criteria checked against real activity counts \u2014 not manually awarded. Streaks (login and help-giving) track both a current value and a longest-ever value, and can be frozen, a deliberate design choice that keeps a genuinely engaged user from losing a long streak over a single missed day.",
  ],
  image: studyhubReputationHistory,
  imageAlt:
    "Reputation history showing individual point-change events with before/after totals",
  imageCaption:
    "The +189 / -0 / 189 totals shown in the profile UI aren't read from a stored field \u2014 they're computed live by summing history rows, which is what makes the running total independently auditable.",
  secondaryImage: studyhubLeaderboardRank,
  secondaryImageAlt:
    "Personal rank view showing global/department position, weekly points, streaks, and nearby competitors",
  secondaryImageCaption:
    "Leaderboards are cached for 60 seconds since the ranking is identical for every viewer \u2014 but your rank, your connection to each name shown, and your \u201cis this you\u201d flag are viewer-specific and layered on top of that shared cache on every request, never cached themselves.",
};

// -- notifications --------------------------------------------------------

export const notifications = {
  eyebrow: "\u00a710 \u00b7 NOTIFICATIONS",
  heading: "A notification is never lost because a real-time push failed.",
  body: "Nearly everything that happens to you \u2014 a connection request, a badge earned, a homework help offer, a thread @mention \u2014 funnels through one notification service that does three things every time, in the same call: writes a durable database row, atomically increments a Redis-backed unread counter, and attempts a best-effort real-time WebSocket push. The row and the counter both already exist by the time you're back online \u2014 the live push is a nice-to-have on top of a durable write, never a requirement for the notification to exist at all.",
  image: studyhubNotificationFanout,
  imageAlt:
    "Notification fan-out diagram — single funnel point, three synchronized writes, self-healing unread counter",
  imageCaption:
    "The unread counter is self-healing: if it's ever wrong for any reason, the next read silently recomputes and repairs it, bounding how long any drift can persist.",
};

// -- reliability / background processing ---------------------------------

export const reliability = {
  eyebrow: "\u00a711 \u00b7 THREE BACKGROUND-PROCESSING MECHANISMS, CHOSEN DELIBERATELY",
  heading: "A cron job, a durable queue, and a bounded thread pool \u2014 not one tool for every job.",
  body: "APScheduler with a Redis distributed lock for scheduled work where duplicate execution is a real correctness bug (leaderboard snapshots, counter reconciliation). RQ for durable, retryable work that needs to survive a process restart (transactional email, activity-feed cleanup). A bounded ThreadPoolExecutor for AI dispatch that needs to not block a WebSocket event loop but doesn't need queue durability.",
  lockNote:
    "The distributed lock is the one deliberate fail-closed exception in an otherwise fail-open codebase: if Redis is unreachable when a scheduler tick fires, the job is skipped for that cycle rather than executed unprotected \u2014 duplicate leaderboard-snapshot writes or duplicate email sends are judged worse than a missed tick.",
  beats: [
    {
      image: studyhubReliabilityLockingReconciliation,
      imageAlt:
        "Distributed scheduler locking and denormalized-counter reconciliation diagram — assume failure, detect drift, recover without duplicating work",
      caption:
        "Every process that loses the lock race logs the skip and increments a consecutive-skip counter for that job. Five consecutive skips triggers an alert \u2014 the signal that something is wrong with the instance that keeps winning the lock, not a routine \u201canother instance was faster\u201d log line.",
    },
  ],
  testingNote:
    "The unit suite runs under pytest against fakeredis and an in-memory SQLite database. distributed_lock.py's Lua-scripted release is tested against real Lua execution via fakeredis + lupa, not mocked around \u2014 confirmed necessary empirically while writing that test, not a defensive addition. freezegun backs deterministic time-dependent tests (streaks, token expiry, cooldown windows).",
};

// -- security ---------------------------------------------------------------

export const security = {
  eyebrow: "\u00a712 \u00b7 AUTH & SECURITY",
  heading: "Rotation-on-use, reuse detection, and a real multi-tab grace window.",
  body: [
    "Access tokens are short-lived (30 minute) stateless JWTs. Refresh tokens are the opposite: 7-day-lived, DB-backed, hashed at rest (SHA-256, the raw value never stored), rotated on every use, with reuse detection. If an already-revoked token is presented again, that's either a genuine replay of a stolen token, or two browser tabs racing on the same cookie.",
    "A 10-second grace window on a revoked token's immediate successor distinguishes the two: within the window, the caller gets a working access token without re-rotating; outside it, the entire token family is revoked immediately, forcing every session descended from that login to re-authenticate.",
  ],
  tradeoff:
    "File uploads are validated by construction, not by trusting the extension: every image is opened with Pillow, structurally verified, fully decoded, and re-encoded into a fresh buffer before ever reaching storage \u2014 the re-encode step is what strips any embedded polyglot payload, since the output bytes are freshly generated from decoded pixels, not copied from the original file.",
  image: studyhubRefreshTokenRotation,
  imageAlt:
    "Refresh token rotation and reuse detection diagram — DB-backed, hashed at rest, rotated on every use, with a multi-tab grace window",
  imageCaption:
    "google_id is stored separately from email specifically so an account created via Google and an account created via password with the same address are never silently merged \u2014 closing an OAuth account-hijack path a naive email-match would leave open.",
};

// -- architecture -----------------------------------------------------------

export const architecture = {
  eyebrow: "\u00a713 \u00b7 FULL ARCHITECTURE",
  heading: "One Flask monolith, one Postgres database, Redis in four distinct roles.",
  body: "A Flask API process (routes \u2192 services \u2192 models, real-time over Flask-SocketIO), RQ worker processes, and an in-process APScheduler, sharing one PostgreSQL database and one Redis instance used for cache, distributed locks, presence tracking, and job queueing \u2014 four structurally different purposes, each with a different failure posture, not one caching layer. The services \u2192 routes boundary is enforced by CI: a static-analysis script parses every service file's AST and fails the build if a service ever imports a Flask request-scoped object.",
  image: studyhubSystemArchitecture,
  imageAlt:
    "Full StudyHub system architecture diagram: client, request perimeter, three-stage auth chain, application layer, async processing with APScheduler and RQ, real-time layer, Postgres, Redis's four roles, and external services",
  imageCaption:
    "Redis's four roles have four different failure postures: fail-open for cache and presence, fail-closed for the distributed lock (the one deliberate exception), and no fallback at all for the durable job queue \u2014 conflating them under one \u201ccaching layer\u201d label would understate what's actually happening.",
  cacheBeat: {
    image: studyhubCacheSplitPattern,
    imageAlt:
      "Shared cached page plus per-viewer live overlay diagram — the pattern behind the leaderboard, badges, and top-earners rankings",
    caption:
      "The leaderboard's ranked list and point totals come from a 60-second shared cache; the \u201cYour rank\u201d card, connection status on each row, and highlighted \u201cyou are here\u201d position are computed per request and never touch that cache.",
  },
  presenceBeat: {
    image: studyhubWebsocketPresence,
    imageAlt:
      "WebSocket presence diagram — per-socket TTL keys cross-checked against a per-user index set, self-healing on read, multi-device aware",
    caption:
      "A user can have multiple simultaneous sockets \u2014 several tabs, a phone and a laptop at once \u2014 so presence is a TTL'd key per socket cross-checked against an untimed per-user index set, self-healing stale entries on the same read that answers an \u201cis this user online\u201d query.",
  },
};

// -- horizontal scaling refactor (StudyHub-specific highlight) ---------------

export const scaling = {
  eyebrow: "\u00a714 \u00b7 THE HORIZONTAL-SCALING REFACTOR",
  heading: "From a single-process assumption to a Redis-coordinated multi-instance one.",
  intro:
    "This application originally assumed a single process. WebSocket presence lived in process-local dicts, the scheduler had no cross-process coordination, and the per-message AI-action rate limiter was declared but never actually wired to anything \u2014 meaning those actions had no rate limit at all before the fix. A dedicated refactor closed each of these.",
  table: [
    { subsystem: "WebSocket presence / active-thread", before: "Process-local dict", after: "Redis, TTL + self-healing index" },
    { subsystem: "Thread-message rate limit", before: "In-memory sliding window", after: "Redis, cross-instance" },
    { subsystem: "Per-message AI-action rate limit", before: "Declared, never read or written \u2014 no limit existed", after: "Redis, cross-instance" },
    { subsystem: "Scheduler job execution", before: "No coordination \u2014 every instance fires every job", after: "Redis distributed lock, fail-closed, exactly once per tick" },
    { subsystem: "HTTP-layer rate limiting", before: "Config variable defined, unused", after: "Fully wired, Redis-backed in production, fail-open" },
    { subsystem: "Email delivery", before: "In-request send / untracked daemon thread", after: "RQ job with real retry" },
  ],
  honesty:
    "Not everything moved, and it's flagged rather than glossed over: the sliding-window limiter gating Learnora's auto-reply-without-@mention behavior is explicitly named in the code's own migration notes as the one item still genuinely deferred \u2014 a real, working, process-local limiter whose cap can still be bypassed by an instance change under multiple Gunicorn workers.",
  result:
    "gunicorn -w N is now a supported deployment shape as a result \u2014 previously this required -w 1 specifically to avoid the scheduler and presence-tracking bugs the refactor closed.",
};

// -- honest gaps (StudyHub-specific: directly mirrors the docs' own framing) --

export const honestGaps = {
  eyebrow: "\u00a715 \u00b7 WHAT'S HONESTLY NOT FINISHED",
  heading: "Two tables that exist but aren't load-bearing \u2014 named rather than hidden.",
  intro:
    "The documentation is explicit about this rather than presenting every defined table as working infrastructure: a table's presence in the schema is not the same claim as a table being load-bearing.",
  callouts: [
    {
      title: "SearchIndex \u2014 defined, never populated.",
      problem: "A dedicated full-text search table exists in the schema with a docstring stating its intent.",
      decision:
        "It is never populated and never queried anywhere in the codebase. Every search endpoint runs unindexed ILIKE pattern matching against the live tables instead.",
      reason:
        "The table hasn't been dropped because doing so is a destructive schema change that needs a real migration and a product decision on whether full-text search is still planned.",
      tag: "Honest gap 1",
    },
    {
      title: "WeeklyChampion \u2014 UI-complete, write path missing.",
      problem:
        "The homework dashboard renders a real \u201cThis Week's Champions\u201d panel, and the read path genuinely queries this table.",
      decision:
        "No code anywhere \u2014 not a scheduled job, not a route, not another service \u2014 ever inserts a row into it. It isn't one of the five scheduled jobs, despite being exactly the shape of work that belongs there.",
      reason:
        "The feature is UI-complete and schema-complete; the computation step that would make it live is the missing piece, not a hidden one.",
      tag: "Honest gap 2",
    },
  ],
};

// -- stack --------------------------------------------------------------------

export const stack = {
  eyebrow: "\u00a716 \u00b7 STACK",
  heading: "Chosen to support the story above.",
  groups: [
    { role: "Backend", items: ["Flask (Python)", "services/ + routes/ layering"] },
    { role: "Database", items: ["PostgreSQL (SQLAlchemy)"] },
    { role: "Real-time", items: ["Flask-SocketIO", "Redis pub/sub"] },
    { role: "AI", items: ["Gemini", "Groq", "Cohere", "Cloudflare Workers AI", "Mistral", "OpenRouter"] },
    { role: "Background jobs", items: ["APScheduler", "RQ"] },
    { role: "Storage & media", items: ["Cloudinary"] },
    { role: "Email & push", items: ["Flask-Mail", "Firebase Cloud Messaging"] },
    { role: "Auth", items: ["JWT (PyJWT)", "Google OAuth (Flask-Dance)"] },
    { role: "Ops", items: ["Sentry (fail-open)", "pytest", "fakeredis + lupa", "freezegun"] },
    { role: "Frontend", items: ["Vanilla JavaScript"] },
  ],
};

// -- numbers ------------------------------------------------------------------

export const numbers = {
  eyebrow: "\u00a717 \u00b7 BY THE NUMBERS",
  stats: [
    { value: "55", label: "SQLAlchemy models across the schema" },
    { value: "13", label: "major product domains" },
    { value: "6", label: "LLM providers behind one failover engine" },
    { value: "5", label: "scheduled jobs, each Redis-lock guarded" },
    { value: "18", label: "gamification badges" },
    { value: "4", label: "distinct roles Redis serves \u2014 cache, lock, presence, queue" },
  ],
};

// -- closing --------------------------------------------------------------

export const closing = {
  eyebrow: "\u00a718 \u00b7 CLOSING",
  heading: "The interesting part wasn't any one feature.",
  body: "It was making reputation trustworthy as a single write path, making presence and rate limits correct once more than one process was running, and being honest in the documentation itself about exactly which pieces \u2014 like WeeklyChampion or the auto-reply rate limiter \u2014 are still unfinished, rather than letting a defined schema stand in for a working feature.",
};
