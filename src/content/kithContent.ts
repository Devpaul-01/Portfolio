// All copy, stats, and image references for the Kith showcase live here.
// Section components stay presentational — this is the single file to edit
// when revising copy or moving this page into another portfolio.

import dashboardFullOverview from "../assets/dashboard-full-overview.png";
import membersProxyRoles from "../assets/members-proxy-roles.png";
import recordContributionProxy from "../assets/record-contribution-proxy.png";
import ledgerMultiCurrency from "../assets/ledger-multi-currency.png";
import duplicateDetection from "../assets/duplicate-detection.png";
import proofVerification from "../assets/proof-verification.png";
import tasksList from "../assets/tasks-list.png";
import disputeResolutionDetail from "../assets/dispute-resolution-detail.png";
import diagramLedgerLifecycle from "../assets/diagram-ledger-lifecycle.png";
import auditLog from "../assets/audit-log.png";
import recurringPoolCycles from "../assets/recurring-pool-cycles.png";
import cycleOverrideModal from "../assets/cycle-override-modal.png";
import diagramRecurringPoolLifecycle from "../assets/diagram-recurring-pool-lifecycle.png";
import bullBoard from "../assets/bull-board.png";
import diagramNotificationOutbox from "../assets/diagram-notification-outbox.png";
import notificationInbox from "../assets/notification-inbox.png";
import diagramSystemOverview from "../assets/diagram-system-overview.png";

// -- links --------------------------------------------------------------

export const links = {
  github: "https://github.com/Devpaul-01/Kith",
  liveDemo: "https://kith-self.vercel.app",
  ciBadge:
    "https://github.com/Devpaul-01/Kith/actions/workflows/test.yml/badge.svg",
  ciWorkflow: "https://github.com/Devpaul-01/Kith/actions/workflows/test.yml",
  architectureDoc: "https://github.com/Devpaul-01/Kith/blob/main/ARCHITECTURE.md",
  securityDoc: "https://github.com/Devpaul-01/Kith/blob/main/SECURITY.md",
  adrIndex: "https://github.com/Devpaul-01/Kith/blob/main/README.md",
};

// -- hero -----------------------------------------------------------------

export const hero = {
  eyebrow: "ENGINEERING CASE STUDY",
  headline: "A family's shared money, kept honest.",
  subhead:
    "Kith is a backend-heavy coordination platform for household finance — a ledger that survives disputes, recurring pools that run themselves, and a permission model built for people who will never log in. This page is a walk-through of the engineering behind it.",
  image: dashboardFullOverview,
  imageAlt:
    "The full JANS workspace dashboard showing member counts, overdue contributions, an open dispute, pending confirmations, active events, a recurring pool, tasks, milestones, and recent activity all in one view",
  imageCaption:
    "One workspace, one screen — ledger, tasks, disputes, and audit history assembled from a single request.",
};

// -- problem ----------------------------------------------------------------

export const problem = {
  eyebrow: "§01 · THE PROBLEM",
  heading: "Families run on group chats. Money doesn't forgive that.",
  body: [
    "Splitting a parent's medical bills, running a rotating savings pool, organizing who pays for what at a wedding — every extended family eventually manages shared money and shared responsibility without any of the tooling a company would use by default.",
    "Rent gets split in a group chat. A savings pool lives in someone's notes app. A relative who isn't tech-literate gets left out of the system entirely, even though they're still part of the obligation.",
    "Kith gives a household the structure a company gets for free: a real ledger instead of \u201cdid you send that already?\u201d, scheduled automation instead of one person remembering to open a pool every month, and a dispute workflow instead of an argument in the family thread.",
  ],
};

// -- product model ----------------------------------------------------------

export const productModel = {
  eyebrow: "§02 · THE MODEL",
  heading: "Three nouns. Everything else is a verb applied to them.",
  intro:
    "A Workspace is a household. A Container is something it's coordinating — a one-off event or a recurring pool. The Ledger is the system of record for every dollar that moves.",
  nodes: [
    {
      label: "Workspace",
      description: "A family's tenant space — members, roles, shared history.",
    },
    {
      label: "Container",
      description: "An event or a recurring pool. Can track money, tasks, or both.",
    },
    {
      label: "Ledger",
      description: "Contributions, corrections, disputes — the trust boundary.",
    },
  ],
  satellites: ["Participants", "Tasks", "Milestones", "Notifications", "Audit Log"],
};

// -- dashboard ----------------------------------------------------------------

export const dashboard = {
  eyebrow: "§03 · PRODUCT IN ACTION",
  heading: "One screen answers \u201cwhat needs my attention right now?\u201d",
  body: "The dashboard is assembled from six independent, parallel queries — members, containers, pools, targets, activity, and unread count — rather than one round trip per widget. It's the screen a family admin opens most often, so it's built to stay fast as a workspace grows.",
  image: dashboardFullOverview,
  imageAlt:
    "Kith dashboard for the JANS workspace: 9 members, 2 admins, 2 proxies, overdue contributions for Uncle Bayo and Segun, one open dispute, pending confirmations queue, active events with funding progress, a recurring pool's open cycle, task summary, recent milestones, and a human-readable activity feed",
  imageCaption:
    "Every widget here reads from the ledger, the task tracker, the dispute system, or the audit log — live, not mocked.",
  callouts: [
    {
      label: "Financial state",
      detail: "overdue balances, pending confirmations, a recurring pool's live cycle",
    },
    {
      label: "Coordination state",
      detail: "active events, task counts, upcoming deadlines",
    },
    {
      label: "Accountability",
      detail: "an open dispute, recent activity rendered as plain sentences",
    },
  ],
};

// -- proxy membership ---------------------------------------------------------

export const proxyMembership = {
  eyebrow: "§04 · NOT EVERYONE CAN LOG IN",
  heading: "Representation without an account.",
  body: [
    "Most group-payment tools assume every participant installs the app. Kith doesn't. A proxy member \u2014 a baby, an elderly relative \u2014 can hold a contribution target and have money recorded on their behalf, without ever authenticating.",
    "This isn't a cosmetic profile flag. Proxy status changes who's allowed to record a contribution for that member (admin-only, enforced in the service layer, not just the route), and it removes them from every external notification channel automatically \u2014 there's no device or inbox to reach. Every action taken on a proxy's behalf is separately logged to its own audit table, naming both the proxy and the acting admin.",
  ],
  primaryImage: membersProxyRoles,
  primaryImageAlt:
    "Kith members list for JANS: 9 total members including two admins tagged Household Head, and at the bottom two members explicitly tagged Proxy — Baby Kayode managed by Mom, and Grandma Adaeze managed by Dad",
  primaryImageCaption:
    "Baby Kayode and Grandma Adaeze — first-class members with a named, accountable manager.",
  secondaryImage: recordContributionProxy,
  secondaryImageAlt:
    "Record Contribution modal recording GHS 15,000 in cash for Grandma Adaeze, a proxy member managed by Dad, with a note that Dad recorded it on her behalf",
  secondaryImageCaption:
    "Only an admin can submit this form \u2014 and it still supports its own currency, since the money may have changed hands in a different country first.",
};

// -- ledger ---------------------------------------------------------------

export const ledger = {
  eyebrow: "§05 · THE LEDGER",
  heading: "Where the product has to be trustworthy.",
  intro:
    "Every contribution carries the amount actually paid, in whatever currency that happened in, converted into the workspace's base currency for consistent totals. Confirmed entries are never edited \u2014 only corrected, by a new linked row.",
  beats: [
    {
      image: ledgerMultiCurrency,
      imageAlt:
        "Ledger for the Monthly Family Support Fund showing six entries: contributions confirmed by different admins, one converted from £15.20 to ₦30,000, and a ₦10,000 entry recorded 8 days ago \u201cby System\u201d and \u201cconfirmed by System\u201d, noted as carried forward from the July cycle",
      caption: "Six rows, three provenances: a member's own submission, an admin recording for someone else, and a system-generated carry-forward \u2014 each labeled honestly, not disguised as a person's action.",
    },
    {
      image: duplicateDetection,
      imageAlt:
        "Possible Duplicate modal warning that a similar ₦30,000 contribution from Chidi was recorded 4 minutes earlier, showing the existing entry it's comparing against, explaining the likely cause, with Cancel and Submit anyway buttons",
      caption:
        "A network retry and a person genuinely double-tapping look identical from the outside \u2014 Kith treats them as two different problems. An idempotency key gives retries an exact-match guarantee; a ten-minute, same-amount heuristic catches the human case, with a visible, unblocked override rather than a hard rejection.",
    },
    {
      image: proofVerification,
      imageAlt:
        "Proof of Contribution modal for Aunt Grace's ₦25,000 entry showing a Pending \u2192 Proof Uploaded \u2192 Confirmed stepper, an uploaded receipt file marked Verified with the note \u201cFile signature checked against its declared type on upload\u201d",
      caption:
        "A client can declare any content type it wants at upload time. Before a proof is trusted, the server re-downloads the file and checks its actual byte signature against what was declared \u2014 the \u201cVerified\u201d badge is that check, made visible.",
    },
  ],
};

// -- tasks ------------------------------------------------------------------

export const tasks = {
  eyebrow: "§06 · NOT JUST MONEY",
  heading: "The same rigor, for chores.",
  body: "Tasks sit alongside the ledger with the same participant and permission model \u2014 an assignee can only move their own task between in-progress and completed; everything else (reassignment, due dates, hard status overrides) is admin-only. A nightly sweep flags anything still pending past its due date, and completion proof runs through the same file-signature verification as a payment receipt.",
  image: tasksList,
  imageAlt:
    "Task list for the JANS workspace with one task awaiting confirmation, showing tasks in completed, in-progress, and pending states, one with an attached proof photo and a confirmation note",
  imageCaption:
    "Confirmed, awaiting confirmation, in progress, pending \u2014 the same lifecycle discipline as a financial entry, applied to a chore.",
};

// -- disputes -----------------------------------------------------------------

export const disputes = {
  eyebrow: "§07 · DISPUTES & THE PERMANENT RECORD",
  heading: "A disagreement gets a process, not another argument in the family thread.",
  intro:
    "Raising and resolving a dispute both flip the dispute's status and the underlying ledger entry's status together, inside one database transaction \u2014 there's no window where the two could disagree, even under concurrent access.",
  beats: [
    {
      image: disputeResolutionDetail,
      imageAlt:
        "Resolved dispute detail page: Uncle Bayo disputed a ₦10,000 carry-forward entry, claiming he'd already sent it in July; Mom's resolution note reads \u201cConfirmed with Uncle Bayo that the ₦10,000 carry-forward is accurate based on his July bank transfer history. No changes needed to the ledger.\u201d A two-message notes thread shows Uncle Bayo checking his bank app and confirming his own recollection was wrong.",
      caption:
        "The strongest case for a dispute workflow isn't one that ends in a correction \u2014 it's this one. The investigation happened, the conversation is preserved, and the outcome was \u201cthe ledger was right all along.\u201d",
    },
    {
      image: diagramLedgerLifecycle,
      imageAlt:
        "Diagram of the ledger entry lifecycle: submission with idempotency and duplicate checks, admin confirmation, then a confirmed and immutable entry branching into two atomic paths — raise_dispute_atomic/resolve_dispute_atomic, or a new correction row referencing the original",
      caption:
        "Once confirmed, an entry is never mutated again. A dispute or a correction are the only two ways its effective state can change \u2014 both are single, all-or-nothing Postgres transactions, not sequential application code.",
      isDiagram: true,
    },
    {
      image: auditLog,
      imageAlt:
        "Full activities audit log for JANS with filters for action, actor, and date range, listing entries including Contribution Confirmed, Task Completed, Dispute Raised, Dispute Resolved, Cycle Override Applied, Correction Added, and Member Removed, each attributed to a named actor with a timestamp",
      caption:
        "Every action in this section \u2014 the confirmation, the dispute, the resolution \u2014 left a permanent, filterable, exportable trace here. This is what makes \u201cwho changed this?\u201d always answerable.",
    },
  ],
};

// -- recurring pools --------------------------------------------------------

export const pools = {
  eyebrow: "§08 · POOLS THAT RUN THEMSELVES",
  heading: "The family shouldn't have to operate the family savings pool.",
  intro:
    "A recurring pool keeps roughly three months of upcoming cycles ready at all times \u2014 generated the moment it's created, with a nightly maintenance job as a fallback if that first attempt silently fails for infrastructure reasons.",
  beats: [
    {
      image: recurringPoolCycles,
      imageAlt:
        "Cycles view for the Monthly Family Support Fund showing Cycle 9 closed at ₦190,000 of ₦200,000, Cycle 10 open with a per-participant paid/pending/overdue breakdown including Uncle Bayo's ₦10,000 carried forward from last cycle, and Cycle 11 upcoming with ₦0 collected",
      caption:
        "Closed, open, and upcoming, visible at once \u2014 direct evidence the horizon is generated ahead of need, not created reactively when someone tries to pay.",
    },
    {
      image: cycleOverrideModal,
      imageAlt:
        "Override Cycle 10 modal with three options — Skip Member, Adjust Target, Pause Pool — a member selector, and an optional reason field",
      caption:
        "Three exception types, not one on/off toggle. Pausing corrects the cycle record immediately; skipping a member or adjusting their target waits for the next generation pass, because there's nothing to modify until that cycle's per-participant targets actually exist.",
    },
    {
      image: diagramRecurringPoolLifecycle,
      imageAlt:
        "Diagram of the recurring pool lifecycle: on-demand cycle generation at creation with a nightly 03:00 UTC maintenance fallback, a nightly 00:01 UTC open/close sweep with carry-forward, and the three admin override types with their differing timing",
      caption:
        "The fallback path is the detail worth noticing: if the on-demand generation call fails silently at creation time, the nightly maintenance job catches and extends the horizon regardless. Automation designed with a recovery path, not just a happy path.",
      isDiagram: true,
    },
  ],
};

// -- engineering judgment -----------------------------------------------------

export const engineeringJudgment = {
  eyebrow: "§09 · ENGINEERING JUDGMENT",
  heading: "The decisions, not just the technologies.",
  intro:
    "Eighteen numbered architecture decision records back this system \u2014 each with rejected alternatives and a stated trade-off. Four of the more differentiated ones, in the system's own terms.",
  callouts: [
    {
      title: "Could an attacker learn which workspaces exist without ever logging in?",
      problem:
        "A 403 on a real-but-inaccessible workspace confirms it exists, distinguishing it from an ID that never existed at all.",
      decision:
        "A non-member requesting a workspace gets the identical 404 whether that workspace is real or not. The same shape applies to invite-token lookups \u2014 not-found, expired, and already-used all return one generic \u201cinvalid invite,\u201d never a distinguishing code.",
      reason:
        "The workspace ID is the outermost trust boundary in the whole authorization model. Leaking its validity is the single highest-value reconnaissance step available to an unauthenticated caller \u2014 which is why this specific boundary gets the enumeration-resistant treatment, while ordinary role checks one layer in stay ordinary 403s.",
      tag: "ADR-0009",
    },
    {
      title: "A rate limiter that quietly wasn't doing its job.",
      problem:
        "An earlier design keyed one global limiter to fall back from a user ID to an IP address \u2014 mounted before authentication ever resolved.",
      decision:
        "req.user didn't exist yet at that point in the request chain, so the fallback fired on every single request. A limiter meant to throttle per-user was, in practice, protecting nothing but the shared IP baseline, for all traffic, indefinitely.",
      reason:
        "The fix wasn't a smarter key generator \u2014 it was recognizing that a rate limiter is only as correct as its position in the middleware chain relative to auth, and splitting into two limiter instances, each mounted exactly where its key actually exists.",
      tag: "ADR-0006",
    },
    {
      title: "How stale is \u201ccached,\u201d precisely?",
      problem:
        "The workspace-membership check runs on nearly every authenticated request. Caching it removes two Postgres round trips from the hottest path in the app \u2014 but the cached fields (role, active status) are authorization-relevant.",
      decision:
        "A centrally-configured 30-second ceiling, explicit invalidation on every write that changes role or active status, and fail-open behavior if Redis itself is unreachable \u2014 a cache miss always means \u201cquery Postgres,\u201d never a wrongly-granted request.",
      reason:
        "A longer TTL (5 minutes) was considered and rejected specifically because it would widen the acceptable-staleness window on data that gates access \u2014 30 seconds is a stated number, not an implicit assumption.",
      tag: "ADR-0007",
    },
    {
      title: "A retry and a mistake look identical \u2014 but they aren't the same problem.",
      problem:
        "A client retrying after a network timeout and a person genuinely double-submitting both produce two identical-looking contributions.",
      decision:
        "An idempotency key gives an exact-match guarantee for the retry case \u2014 the same key always returns the original entry. A separate ten-minute, same-amount heuristic catches the human case, with a visible \u201csubmit anyway\u201d override rather than a hard block.",
      reason:
        "Solving only one of these would either block real retries or miss real duplicates \u2014 and a false positive on a genuine second contribution was judged more harmful than an occasional true duplicate needing manual correction.",
      tag: "ADR-0012",
    },
  ],
};

// -- reliability --------------------------------------------------------------

export const reliability = {
  eyebrow: "§10 · RELIABILITY INFRASTRUCTURE",
  heading: "Slow work stays off the request path \u2014 and failures leave a trace.",
  body: "Nine Redis-backed BullMQ queues, each with a dedicated worker and its own concurrency tuning, move notifications, cycle generation, reminders, and exports out of the HTTP request/response cycle. A separate scheduler registers six cron-based jobs directly onto the queues their workers already listen on \u2014 by construction, not convention.",
  testingNote:
    "Three Jest projects (unit, integration, rate-limiting) run in CI on every push. The integration suite goes further than a local Docker Compose setup: it stands up PostgREST in front of test Postgres specifically because the app talks to Supabase through a PostgREST-compatible client in production \u2014 testing against raw Postgres would quietly miss that gap.",
  beats: [
    {
      image: bullBoard,
      imageAlt:
        "Bull Dashboard showing all nine BullMQ queues with live job counts — most queues showing 1 job from a just-fired cron schedule, and notification-outbox-queue showing 2 jobs split across active and waiting states",
      caption:
        "Not a diagram of what the background system is supposed to do \u2014 a live capture of it running. The two jobs in the outbox queue here are a delivery-recovery cycle caught mid-flight.",
    },
    {
      image: diagramNotificationOutbox,
      imageAlt:
        "Diagram of notification fan-out per recipient and channel, showing the dedup check, immediate in-app delivery, push/email queuing, an explicit branch for enqueue() throwing, and a five-minute outbox scan that re-enqueues stuck deliveries",
      caption:
        "The outbox scan exists for one named failure mode: the enqueue() call itself throwing, before a job exists for BullMQ's own retry logic to ever pick up. Anything stuck pending or failed for five minutes gets re-enqueued, guarded by the same delivered-status idempotency check a fresh send would use.",
      isDiagram: true,
    },
    {
      image: notificationInbox,
      imageAlt:
        "Mobile notification inbox showing a mix of unread and read notifications: a contribution confirmation, a new task assignment, a dispute raised alert, a payment reminder, a task confirmation, and a pool-completed notice",
      caption:
        "The backend design and the result it produces \u2014 the outbox pattern's payoff is a recipient's inbox that never silently drops an event.",
    },
  ],
};

// -- security -------------------------------------------------------------

export const security = {
  eyebrow: "§11 · SECURITY & AUTHORIZATION",
  heading: "Three composable checks, and an honest boundary.",
  body: [
    "Every workspace-scoped request passes through three distinct middleware layers in order: authentication (a live Supabase JWT verification, not just a local signature check), workspace membership (Redis-cached, 404-not-403), and role authorization. Services re-check fine-grained, data-dependent rules underneath \u2014 a member editing their own profile can't smuggle in a role change through the same endpoint an admin uses.",
    "One trade-off is stated plainly rather than glossed over: the backend uses Supabase's service-role client, which bypasses Row-Level Security, for nearly all operations. That means application middleware \u2014 not the database \u2014 is the real enforcement boundary. It's a deliberate choice, documented as one, with the consequence spelled out: a route that forgot its membership check would have no RLS backstop underneath it.",
  ],
};

// -- architecture -----------------------------------------------------------

export const architecture = {
  eyebrow: "§12 · FULL ARCHITECTURE",
  heading: "The whole system, in one frame.",
  body: "A layered Express API \u2014 routes, middleware, controllers, services \u2014 backed by Supabase Postgres, with Redis serving three distinct roles (BullMQ's job store, fleet-wide rate limiting, and the membership cache) and no overlap between them. The API and the worker fleet can run as separate, independently-scaled processes or one combined process for local development, sharing the exact same service layer either way.",
  image: diagramSystemOverview,
  imageAlt:
    "Full system architecture diagram: React client, request perimeter (Helmet, CORS, rate limiting), a three-stage auth chain (requireAuth, requireMembership, requireAdmin), application layer, core domain hierarchy, atomic financial operations, asynchronous processing with 9 BullMQ queues and 6 scheduled jobs, Postgres, Redis's three roles, audit trail, and external services (Supabase, Sentry, Bull Board, Firebase Cloud Messaging, Resend) — with an explicit legend noting no WebSockets and no AI/LLM integration",
  imageCaption:
    "Worth reading closely: the legend states, plainly, what isn't here \u2014 no WebSocket layer (unread counts are polled), no AI/LLM integration anywhere in the backend. Stated as scope, not as a gap.",
};

// -- stack --------------------------------------------------------------------

export const stack = {
  eyebrow: "§13 · STACK",
  heading: "Chosen to support the story above, not to fill a grid.",
  groups: [
    { role: "Backend", items: ["Node.js", "Express 4"] },
    { role: "Database", items: ["Postgres (Supabase)", "Zod validation"] },
    { role: "Caching & queues", items: ["Redis", "BullMQ"] },
    { role: "Auth", items: ["Supabase Auth", "JWT bearer + cookie refresh"] },
    { role: "Storage", items: ["Supabase Storage", "signed URLs"] },
    { role: "Notifications", items: ["Firebase Cloud Messaging", "Resend"] },
    { role: "Frontend", items: ["React 18", "Vite", "TypeScript"] },
    { role: "Ops", items: ["Sentry", "Bull Board", "Winston", "Jest + GitHub Actions"] },
  ],
};

// -- numbers ------------------------------------------------------------------

export const numbers = {
  eyebrow: "§14 · BY THE NUMBERS",
  stats: [
    { value: "9", label: "background job queues, each with a dedicated worker" },
    { value: "6", label: "cron-scheduled jobs, registered directly onto their queues" },
    { value: "18", label: "documented architecture decision records" },
    { value: "15", label: "REST resource groups in the versioned API" },
    { value: "16", label: "notification templates across in-app, push, and email" },
    { value: "3", label: "Jest test projects: unit, integration, and rate-limiting" },
  ],
  ciNote: "Live build status from the repository's own CI workflow \u2014 not a static badge.",
};

// -- closing --------------------------------------------------------------

export const closing = {
  eyebrow: "§15 · CLOSING",
  heading: "The interesting part wasn't the screens.",
  body: "It was making the rules hold \u2014 across concurrent writes, scheduled automation, and a permission model with real consequences \u2014 as the product got more complex, not less.",
};
