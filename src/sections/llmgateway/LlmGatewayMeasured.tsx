import { measured } from "../../content/llmGatewayContent";
import SectionHeading from "../../components/SectionHeading";

export default function LlmGatewayMeasured() {
  return (
    <section id="llmgateway-measured" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={measured.eyebrow} heading={measured.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {measured.intro}
        </p>

        <div className="mt-10 grid gap-px overflow-hidden border border-ledger-line bg-ledger-line sm:grid-cols-2 lg:grid-cols-4">
          {measured.rows.map((row) => (
            <div key={row.title} className="bg-paper p-6 sm:p-7">
              <p className="stat-figure text-3xl font-medium text-ink">{row.value}</p>
              <h3 className="mt-3 font-display text-base font-medium text-ink">{row.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">{row.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-2xl border-l-2 border-pending/40 bg-pending-soft/50 py-3 pl-5 pr-4">
          <p className="eyebrow mb-1.5 !text-pending">What this does and doesn&rsquo;t show</p>
          <p className="text-sm leading-relaxed text-ink/80">{measured.caveat}</p>
        </div>

        <h3 className="mt-14 font-display text-xl font-medium text-ink">{measured.chaosHeading}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {measured.chaosBody}
        </p>
        <pre className="diagram-scroll mt-5 overflow-x-auto rounded-sm border border-ledger-line bg-paper p-4 font-mono text-xs leading-relaxed text-ink">
          <code>{measured.chaosCommand}</code>
        </pre>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {measured.sources.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs tracking-wide text-confirmed transition-opacity hover:opacity-70"
              >
                {s.label} &rarr;
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
