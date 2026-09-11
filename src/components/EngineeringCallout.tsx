interface EngineeringCalloutProps {
  title: string;
  problem: string;
  decision: string;
  reason: string;
  tag: string;
}

export default function EngineeringCallout({
  title,
  problem,
  decision,
  reason,
  tag,
}: EngineeringCalloutProps) {
  return (
    <div className="border border-ledger-line bg-white p-6 sm:p-7">
      <div className="mb-4 flex items-start justify-between gap-4 border-b border-ledger-line pb-4">
        <h3 className="font-display text-lg font-medium leading-snug text-ink">
          {title}
        </h3>
        <span className="mt-1 shrink-0 font-mono text-[10px] tracking-wide text-slate-soft">
          {tag}
        </span>
      </div>
      <dl className="space-y-4">
        <div>
          <dt className="eyebrow mb-1.5 !text-confirmed">Problem</dt>
          <dd className="text-sm leading-relaxed text-ink/80">{problem}</dd>
        </div>
        <div>
          <dt className="eyebrow mb-1.5 !text-confirmed">Decision</dt>
          <dd className="text-sm leading-relaxed text-ink/80">{decision}</dd>
        </div>
        <div>
          <dt className="eyebrow mb-1.5 !text-confirmed">Why</dt>
          <dd className="text-sm leading-relaxed text-ink/80">{reason}</dd>
        </div>
      </dl>
    </div>
  );
}
