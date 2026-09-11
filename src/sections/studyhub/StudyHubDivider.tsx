// Marks the transition between project blocks on the shared portfolio page.
// Deliberately plain — a labeled hairline, not a second hero — so it reads
// as "next case study" rather than competing with either project's own
// hero. Framed as a project index entry (§02) since Kith already ends its
// own arc with a Closing section; this is the seam between the two, not
// part of either project's narrative.
export default function StudyHubDivider() {
  return (
    <div className="border-b border-ledger-line bg-white py-10 sm:py-12">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <span className="font-mono text-xs tracking-wide text-slate-soft">
          §02
        </span>
        <span className="h-px flex-1 bg-ledger-line" aria-hidden="true" />
        <span className="font-mono text-xs tracking-wide text-slate-soft">
          NEXT PROJECT
        </span>
      </div>
    </div>
  );
}
