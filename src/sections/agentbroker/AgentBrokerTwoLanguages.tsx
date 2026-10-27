import { languages, links } from "../../content/agentBrokerContent";
import SectionHeading from "../../components/SectionHeading";
import { LanguagesDiagram } from "../../components/diagrams/BrokerDiagrams";

export default function AgentBrokerTwoLanguages() {
  return (
    <section id="agentbroker-languages" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={languages.eyebrow} heading={languages.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">{languages.body}</p>
        <LanguagesDiagram className="mt-10" title={languages.diagramTitle} desc={languages.diagramDesc} caption={languages.caption} />
        <div className="mt-10 grid gap-px overflow-hidden border border-ledger-line bg-ledger-line md:grid-cols-3">
          {languages.points.map((p) => (
            <div key={p.title} className="bg-paper p-6">
              <h3 className="font-display text-base font-medium text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">{p.body}</p>
            </div>
          ))}
        </div>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {[
            ["cross-language tests", links.crossLanguageDir],
            ["script byte-diff test", links.scriptEquivalenceTest],
            ["Python README", links.pythonReadme],
          ].map(([label, href]) => (
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
