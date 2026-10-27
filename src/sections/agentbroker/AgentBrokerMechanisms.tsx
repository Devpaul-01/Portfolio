import { links, mechanisms as m } from "../../content/agentBrokerContent";
import SectionHeading from "../../components/SectionHeading";
import { CircuitDiagram, ResolutionDiagram } from "../../components/diagrams/BrokerDiagrams";

export default function AgentBrokerMechanisms() {
  return (
    <section id="agentbroker-mechanisms" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={m.eyebrow} heading={m.heading} />

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">{m.resolutionBody}</p>
        <ResolutionDiagram className="mt-8" title={m.resolutionTitle} desc={m.resolutionDesc} caption={m.resolutionCaption} />

        <p className="mt-14 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">{m.circuitBody}</p>
        <CircuitDiagram className="mt-8" title={m.circuitTitle} desc={m.circuitDesc} caption={m.circuitCaption} />

        <h3 className="mt-14 font-display text-xl font-medium text-ink">{m.keysHeading}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">{m.keysIntro}</p>
        <div className="diagram-scroll mt-6 overflow-x-auto border border-ledger-line">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-ledger-line bg-paper">
                {["Key", "Type", "Holds"].map((h) => (
                  <th key={h} className="eyebrow px-4 py-3 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ledger-line">
              {m.keys.map((k) => (
                <tr key={k.key} className="bg-paper align-top">
                  <td className="px-4 py-3 font-mono text-xs text-ink">{k.key}</td>
                  <td className="px-4 py-3 font-mono text-xs text-slate">{k.type}</td>
                  <td className="px-4 py-3 text-sm text-ink/80">{k.holds}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden border border-ledger-line bg-ledger-line md:grid-cols-2">
          {[m.collision.a, m.collision.b].map((c) => (
            <div key={c.pair} className="bg-paper p-5 sm:p-6">
              <p className="mb-3 font-mono text-[11px] text-slate">{c.pair}</p>
              <p className="font-mono text-xs text-pending line-through decoration-pending/60">{c.naive}</p>
              <p className="mt-1 font-mono text-xs text-confirmed">{c.prefixed}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs leading-relaxed text-slate-soft">
          {m.collision.heading}: the plain separator gives both pairs one key and silently merges two counters.
        </p>
        <a
          href={links.keys}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block font-mono text-xs tracking-wide text-confirmed transition-opacity hover:opacity-70"
        >
          keys.ts · ADR-0008 &rarr;
        </a>
      </div>
    </section>
  );
}
