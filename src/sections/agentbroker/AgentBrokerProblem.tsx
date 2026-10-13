import { problem } from "../../content/agentBrokerContent";
import SectionHeading from "../../components/SectionHeading";

export default function AgentBrokerProblem() {
  return (
    <section id="agentbroker-problem" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={problem.eyebrow} heading={problem.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {problem.intro}
        </p>

        <div className="mt-10 grid gap-px overflow-hidden border border-ledger-line bg-ledger-line md:grid-cols-3">
          {problem.items.map((item, i) => (
            <div key={item.title} className="bg-paper p-6 sm:p-7">
              <p className="stat-figure mb-3 text-xs text-slate-soft">0{i + 1}</p>
              <h3 className="font-display text-lg font-medium leading-snug text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-2xl border-l-2 border-pending/40 bg-pending-soft/50 py-3 pl-5 pr-4">
          <p className="eyebrow mb-1.5 !text-pending">Scope</p>
          <p className="text-sm leading-relaxed text-ink/80">{problem.notNote}</p>
        </div>
      </div>
    </section>
  );
}
