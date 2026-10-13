import { architecture, lifecycle, links } from "../../content/agentBrokerContent";
import SectionHeading from "../../components/SectionHeading";
import DiagramFigure from "../../components/DiagramFigure";

export default function AgentBrokerArchitecture() {
  return (
    <>
      <section id="agentbroker-architecture" className="border-b border-ledger-line py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={architecture.eyebrow} heading={architecture.heading} />
          <div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-slate sm:text-base">
            {architecture.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <DiagramFigure
            className="mt-10"
            src={architecture.diagram}
            alt={architecture.alt}
            caption={architecture.caption}
          />
          <a
            href={links.architectureDoc}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block font-mono text-xs tracking-wide text-confirmed transition-opacity hover:opacity-70"
          >
            Read the full architecture doc &rarr;
          </a>
        </div>
      </section>

      <section id="agentbroker-lifecycle" className="border-b border-ledger-line bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={lifecycle.eyebrow} heading={lifecycle.heading} />
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
            {lifecycle.body}
          </p>
          <DiagramFigure
            className="mt-10"
            src={lifecycle.diagram}
            alt={lifecycle.alt}
            caption={lifecycle.caption}
          />
        </div>
      </section>
    </>
  );
}
