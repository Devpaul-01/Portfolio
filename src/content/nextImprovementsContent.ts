export const nextImprovements = {
  eyebrow: "WHAT I'D DO DIFFERENTLY NOW",
  heading: "Kith works. Here's what I'd change if I kept going.",
  intro:
    "Every one of these is a real gap I can point to in Kith's current design \u2014 not a hypothetical checklist.",
  items: [
    "Add automated dependency vulnerability scanning (Dependabot or npm audit in CI) \u2014 there's currently no automated check catching a known-vulnerable transitive dependency before it ships.",
    "Replace the cycle-generation upsert's optimistic concurrency with a proper distributed lock, so two overlapping generation runs for the same container can never race.",
    "Add a real push channel for in-app notifications \u2014 WebSocket or SSE \u2014 instead of the current polling-based unread count, for lower-latency delivery.",
    "Wire up structured metrics and tracing from the start of a project like this, not after the fact \u2014 right now, Bull Board and logs are the only observability Kith has.",
  ],
};
