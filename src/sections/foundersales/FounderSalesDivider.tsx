// Marks the transition between project blocks on the shared portfolio page.
// Same shape as StudyHubDivider: a labeled hairline, not a second hero.
export default function FounderSalesDivider() {
  return (
    <div className="border-b border-ledger-line bg-white py-10 sm:py-12">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <span className="font-mono text-xs tracking-wide text-slate-soft">
          §03
        </span>
        <span className="h-px flex-1 bg-ledger-line" aria-hidden="true" />
        <span className="font-mono text-xs tracking-wide text-slate-soft">
          NEXT PROJECT
        </span>
      </div>
    </div>
  );
}
