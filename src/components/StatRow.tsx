interface Stat {
  value: string;
  label: string;
}

interface StatRowProps {
  stats: Stat[];
  ciBadgeSrc: string;
  ciBadgeHref: string;
  ciNote: string;
}

export default function StatRow({
  stats,
  ciBadgeSrc,
  ciBadgeHref,
  ciNote,
}: StatRowProps) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-px overflow-hidden border border-ledger-line bg-ledger-line sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-1.5 bg-paper p-5 sm:p-6"
          >
            <span className="stat-figure text-3xl font-medium text-ink sm:text-4xl">
              {stat.value}
            </span>
            <span className="text-xs leading-snug text-slate">{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={ciBadgeHref}
          target="_blank"
          rel="noreferrer"
          aria-label="View live CI build status on GitHub Actions"
          className="inline-block"
        >
          <img src={ciBadgeSrc} alt="CI build status" className="h-5" />
        </a>
        <span className="font-mono text-[11px] tracking-wide text-slate-soft">
          {ciNote}
        </span>
      </div>
    </div>
  );
}
