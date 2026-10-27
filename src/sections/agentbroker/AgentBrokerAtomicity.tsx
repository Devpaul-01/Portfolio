import { atomicity, links } from "../../content/agentBrokerContent";
import SectionHeading from "../../components/SectionHeading";
import { AdmissionDiagram } from "../../components/diagrams/BrokerDiagrams";
import RaceDemo from "../../components/diagrams/RaceDemo";

export default function AgentBrokerAtomicity() {
  return (
    <section id="agentbroker-atomicity" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={atomicity.eyebrow} heading={atomicity.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">{atomicity.body}</p>
        <AdmissionDiagram
          className="mt-10"
          title={atomicity.diagramTitle}
          desc={atomicity.diagramDesc}
          caption={atomicity.caption}
        />
        <h3 className="mt-14 font-display text-xl font-medium text-ink">{atomicity.demoHeading}</h3>
        <div className="mt-5">
          <RaceDemo note={atomicity.demoNote} />
        </div>
        <a
          href={links.budgetContentionTest}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block break-all font-mono text-xs tracking-wide text-confirmed transition-opacity hover:opacity-70"
        >
          budget-contention.test.ts &rarr;
        </a>
      </div>
    </section>
  );
}
