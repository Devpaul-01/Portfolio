import { tests } from "../../content/agentBrokerContent";
import SectionHeading from "../../components/SectionHeading";

export default function AgentBrokerTests() {
  return (
    <section id="agentbroker-tests" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={tests.eyebrow} heading={tests.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {tests.intro}
        </p>

        <ul className="mt-10 divide-y divide-ledger-line border border-ledger-line">
          {tests.rows.map((row) => (
            <li key={row.name} className="grid gap-2 bg-paper p-5 sm:grid-cols-[14rem_1fr] sm:gap-6 sm:p-6">
              <a
                href={row.href}
                target="_blank"
                rel="noreferrer"
                className="break-all font-mono text-xs tracking-wide text-confirmed transition-opacity hover:opacity-70"
              >
                {row.name} &rarr;
              </a>
              <p className="text-sm leading-relaxed text-ink/80">{row.shows}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 max-w-2xl border-l-2 border-pending/40 bg-pending-soft/50 py-3 pl-5 pr-4">
          <p className="eyebrow mb-1.5 !text-pending">What this does and doesn&rsquo;t show</p>
          <p className="text-sm leading-relaxed text-ink/80">{tests.caveat}</p>
        </div>
      </div>
    </section>
  );
}
