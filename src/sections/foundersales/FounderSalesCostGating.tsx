import { costGating } from "../../content/foundersalesContent";
import SectionHeading from "../../components/SectionHeading";
import ImageFigure from "../../components/ImageFigure";
import DiagramFigure from "../../components/DiagramFigure";

export default function FounderSalesCostGating() {
  return (
    <section id="foundersales-costgate" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={costGating.eyebrow} heading={costGating.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {costGating.intro}
        </p>

        <div className="mt-10">
          <DiagramFigure
            src={costGating.image}
            alt={costGating.imageAlt}
            caption={costGating.imageCaption}
          />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {costGating.gates.map((gate) => (
            <div key={gate.fn} className="border border-ledger-line bg-white p-5 sm:p-6">
              <p className="break-words font-mono text-xs font-medium tracking-wide text-confirmed">
                {gate.fn}
              </p>
              <p className="eyebrow mb-1 mt-4">Checks</p>
              <p className="text-sm leading-relaxed text-ink/80">{gate.checks}</p>
              <p className="eyebrow mb-1 mt-4">Outcome</p>
              <p className="text-sm leading-relaxed text-ink/80">{gate.outcome}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {costGating.outputs.map((output) => (
            <ImageFigure
              key={output.image}
              src={output.image}
              alt={output.imageAlt}
              caption={output.caption}
              variant="compact"
            />
          ))}
        </div>

        <div className="mt-8 max-w-2xl border-l-2 border-confirmed/40 bg-confirmed-soft/40 py-3 pl-5 pr-4">
          <p className="eyebrow mb-1.5 !text-confirmed">One code path</p>
          <p className="break-words text-sm leading-relaxed text-ink/80">
            {costGating.consolidationNote}
          </p>
        </div>
      </div>
    </section>
  );
}
