import { admission, architecture, lifecycle, links } from "../../content/llmGatewayContent";
import SectionHeading from "../../components/SectionHeading";
import DiagramFigure from "../../components/DiagramFigure";

export default function LlmGatewayArchitecture() {
  return (
    <>
      <section id="llmgateway-architecture" className="border-b border-ledger-line py-16 sm:py-20">
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

      <section id="llmgateway-lifecycle" className="border-b border-ledger-line bg-white py-16 sm:py-20">
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

      <section id="llmgateway-admission" className="border-b border-ledger-line py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={admission.eyebrow} heading={admission.heading} />
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
            {admission.intro}
          </p>

          <div className="mt-10 grid gap-px overflow-hidden border border-ledger-line bg-ledger-line md:grid-cols-3">
            {admission.gates.map((gate) => (
              <div key={gate.name} className="flex flex-col bg-paper p-6 sm:p-7">
                <h3 className="font-display text-lg font-medium text-ink">{gate.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/80">{gate.mechanism}</p>
                <dl className="mt-5 space-y-3 border-t border-ledger-line pt-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="eyebrow !text-slate-soft">Scope</dt>
                    <dd className="text-right text-xs text-ink">{gate.scope}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="eyebrow !text-slate-soft">Default</dt>
                    <dd className="stat-figure text-right text-xs text-ink">{gate.def}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow mb-1 !text-pending">Rejection</dt>
                    <dd className="break-words font-mono text-xs text-ink">{gate.rejection}</dd>
                  </div>
                </dl>
                <a
                  href={gate.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 font-mono text-xs tracking-wide text-confirmed transition-opacity hover:opacity-70"
                >
                  View source &rarr;
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate">{admission.note}</p>
        </div>
      </section>
    </>
  );
}
