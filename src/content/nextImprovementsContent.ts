export const nextImprovements = {
  eyebrow: "WHAT I'D DO DIFFERENTLY NOW",
  heading: "Kith works. Here's what I'd change if I kept going.",
  intro:
    "Every one of these is a real gap I can point to in Kith's current design \u2014 not a hypothetical checklist.",
  items: [
    "Re-enable the integration and rate-limit Jest suites in CI \u2014 both are currently commented out of the workflow over flaky PostgREST schema-cache timing, so only the unit and frontend suites run on every push today. Running the local measurement stack surfaced a second, compounding cause: the integration suite's own cleanup helper hard-deletes confirmed ledger entries, which the newer DB-level immutability trigger now rejects \u2014 fixing that is a prerequisite, not just flipping the job back on.",
    "Add automated dependency vulnerability scanning (Dependabot or npm audit in CI) \u2014 there's currently no automated check catching a known-vulnerable transitive dependency before it ships.",
    "Replace the cycle-generation upsert's optimistic concurrency with a proper distributed lock, so two overlapping generation runs for the same container can never race.",
    "Make the contributor-target RPC resolve contention gracefully instead of just correctly \u2014 the measured results show most concurrent losers currently get a raw Postgres duplicate-key error rather than a clean retry or conflict response.",
    "Add a real push channel for in-app notifications \u2014 WebSocket or SSE \u2014 instead of the current polling-based unread count, for lower-latency delivery.",
    "Wire up structured metrics and tracing from the start of a project like this, not after the fact \u2014 right now, Bull Board and logs are the only observability Kith has.",
  ],
};
