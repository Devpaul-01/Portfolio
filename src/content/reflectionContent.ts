// First-person reflection content for Kith — the layer that proves personal
// authorship and shows engineering judgment in the builder's own voice,
// rather than the system's own ADR-style voice already used in kithContent.ts.
// Kept in its own file because it's neither "who is this person generally"
// (portfolioContent.ts) nor "what does the system do" (kithContent.ts) — it's
// specifically the first-person authorship layer for this one project.

export const ownership = {
  eyebrow: "OWNERSHIP",
  heading:
    "A family coordination platform for shared money and chores \u2014 backend, frontend, and the 18 architecture decision records documenting every major call along the way.",
  body: "Kith is a solo project. Every part of it \u2014 the API, the database design, the background job system, the full frontend that consumes it, and this page \u2014 is my own work, end to end.",
};

export const motivation = {
  eyebrow: "WHY I BUILT IT",
  heading: "This came from something real, not a hypothetical startup pitch.",
  body: "My extended family actually runs something close to what Kith solves \u2014 a rotating monthly contribution toward my grandmother's care, tracked by hand in a WhatsApp group, with one person manually tallying who'd paid. I kept thinking about how easily that could quietly go wrong \u2014 a payment forgotten, a number misremembered, no record of who confirmed what. Kith is what I built instead of continuing to trust a group chat with something that actually mattered.",
  timelineNote:
    "Built over about two months. It's feature-complete for its current scope \u2014 not a live product with real users, and I'm not claiming otherwise \u2014 but the engineering underneath it is real.",
};

export const reflections = {
  eyebrow: "ENGINEERING REFLECTIONS",
  heading: "What building this actually taught me.",
  intro:
    "The Engineering Judgment section below explains Kith's decisions in the system's own terms. These four are in mine \u2014 what actually happened while I was building it.",
  items: [
    {
      title: "A bug that only existed once there were two of me.",
      body: "The rate-limiter fix documented in ADR-0006 started as my own mistake. I built the first version, ran it locally, and it looked completely correct \u2014 every manual test I ran, as one user, behaved exactly as expected. I didn't catch that per-user limiting wasn't actually doing anything until I wrote an integration test that simulated two different users hitting the same endpoint, and watched them share a limit that was supposed to be separate. The bug was never visible from a single-user test, because a single user can never expose a bug that only exists between two of them. That's the moment I stopped trusting \u201cit works when I test it\u201d as a stand-in for \u201cit's correct.\u201d",
      tag: "The bug",
    },
    {
      title: "The decision I'd point to first.",
      body: "If I had to pick the one piece of Kith's design I'm most confident about, it's the idempotency-vs-duplicate-detection split. My first version used one mechanism to catch both a network retry and a person genuinely double-submitting a payment \u2014 and it couldn't actually do either job well, because they're not the same problem. A retry needs an exact-match guarantee; a real duplicate needs a heuristic with room for a genuine second contribution to still go through. Splitting them into two separate, purpose-built checks was the point where the ledger actually started to feel trustworthy rather than just functional.",
      tag: "The decision",
    },
    {
      title: "What I'd close next.",
      body: "Kith's proof-of-payment uploads are verified against their actual file signature, not just the type a client claims \u2014 that's real and it's already built. What it isn't is a full content-safety guarantee. Before this ever handled real money for real people, I'd want a malware-scanning step on top of the signature check, closing the gap between \u201cthis file's format matches what it says it is\u201d and \u201cthis file is actually safe.\u201d It's on the roadmap for a reason \u2014 I know exactly where the current line is.",
      tag: "What's next",
    },
    {
      title: "The lesson that stuck.",
      body: "A rate limiter or a cache that doesn't throw an error isn't the same thing as a rate limiter or a cache that's correct. I only find real bugs in that category now by testing concurrent, multi-actor behavior on purpose \u2014 not by running the happy path and watching it not crash.",
      tag: "The lesson",
    },
  ],
};
