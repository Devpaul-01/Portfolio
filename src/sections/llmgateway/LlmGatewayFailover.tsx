import { failover } from "../../content/llmGatewayContent";
import SectionHeading from "../../components/SectionHeading";

export default function LlmGatewayFailover() {
  return (
    <section id="llmgateway-failover" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={failover.eyebrow} heading={failover.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {failover.intro}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {failover.categories.map((cat) => {
            const abort = cat.name === "NonRetryable";
            return (
              <div key={cat.name} className="border border-ledger-line bg-paper p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4 border-b border-ledger-line pb-4">
                  <h3
                    className={`font-mono text-sm font-medium ${abort ? "text-pending" : "text-confirmed"}`}
                  >
                    {cat.name}
                  </h3>
                  <span className="stat-figure shrink-0 text-xs text-slate-soft">{cat.signal}</span>
                </div>
                <dl className="mt-4 space-y-3">
                  <div>
                    <dt className="eyebrow mb-1">Reaction</dt>
                    <dd className="text-sm leading-relaxed text-ink/80">{cat.reaction}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow mb-1">Recorded effect</dt>
                    <dd className="text-sm leading-relaxed text-ink/80">{cat.effect}</dd>
                  </div>
                </dl>
              </div>
            );
          })}
        </div>

        <h3 className="mt-14 font-display text-xl font-medium text-ink">{failover.chainHeading}</h3>
        <ol className="mt-6 divide-y divide-ledger-line border border-ledger-line">
          {failover.chain.map((step, i) => {
            const [lead, ...rest] = step.split(". ");
            return (
              <li key={lead} className="grid gap-2 bg-paper p-5 sm:grid-cols-[9rem_1fr] sm:gap-6 sm:p-6">
                <p className="font-mono text-xs tracking-wide text-confirmed">
                  <span className="stat-figure mr-2 text-slate-soft">0{i + 1}</span>
                  {lead}
                </p>
                <p className="text-sm leading-relaxed text-ink/80">{rest.join(". ")}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
