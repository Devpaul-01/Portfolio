import { links, measured } from "../../content/agentBrokerContent";
import SectionHeading from "../../components/SectionHeading";

const SCALE_MAX = 6; // ms; every p99 in the data is below this

function Bar({ value, tone }: { value: number; tone: "confirmed" | "pending" }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 flex-1 bg-paper">
        <div
          className={tone === "confirmed" ? "h-2 bg-confirmed" : "h-2 bg-pending"}
          style={{ width: `${Math.max(1.5, (value / SCALE_MAX) * 100)}%` }}
        />
      </div>
      <span className="stat-figure w-12 shrink-0 text-right text-xs text-ink">{value.toFixed(2)}</span>
    </div>
  );
}

export default function AgentBrokerMeasured() {
  const rows = [...measured.runs, { label: measured.baseline.label, median: measured.baseline.median, p99: measured.baseline.p99 }];
  return (
    <section id="agentbroker-measured" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={measured.eyebrow} heading={measured.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">{measured.intro}</p>

        <div className="mt-10 border border-ledger-line bg-paper p-5 sm:p-7">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="font-display text-lg font-medium text-ink">{measured.latencyHeading}</h3>
            <p className="flex gap-4 font-mono text-[10px] tracking-wide text-slate">
              <span className="flex items-center gap-1.5"><i className="inline-block h-2 w-2 bg-confirmed" />MEDIAN</span>
              <span className="flex items-center gap-1.5"><i className="inline-block h-2 w-2 bg-pending" />P99</span>
            </p>
          </div>
          <ul className="mt-6 space-y-5">
            {rows.map((r) => (
              <li key={r.label} className="grid gap-2 sm:grid-cols-[14rem_1fr] sm:gap-6">
                <span className="font-mono text-xs text-slate">{r.label}</span>
                <div className="space-y-1.5">
                  <Bar value={r.median} tone="confirmed" />
                  <Bar value={r.p99} tone="pending" />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink/80">{measured.baseline.note}</p>
        </div>

        <div className="mt-6 grid gap-px overflow-hidden border border-ledger-line bg-ledger-line md:grid-cols-2">
          {measured.extra.map((e) => (
            <div key={e.title} className="bg-paper p-6 sm:p-7">
              <p className="stat-figure text-3xl font-medium text-ink">{e.value}</p>
              <h3 className="mt-3 font-display text-base font-medium text-ink">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">{e.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-2xl border-l-2 border-pending/40 bg-pending-soft/50 py-3 pl-5 pr-4">
          <p className="eyebrow mb-1.5 !text-pending">What this does and doesn&rsquo;t show</p>
          <p className="text-sm leading-relaxed text-ink/80">{measured.caveat}</p>
        </div>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {[["results summary", links.measurementSummary], ["M3 latency report", links.m3Report], ["M4 concurrency", links.m4Report], ["M5 crash recovery", links.m5Report]].map(([label, href]) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noreferrer"
                className="font-mono text-xs tracking-wide text-confirmed transition-opacity hover:opacity-70">
                {label} &rarr;
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
