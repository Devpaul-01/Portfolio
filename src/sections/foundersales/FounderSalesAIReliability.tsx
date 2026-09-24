import { aiReliability } from "../../content/foundersalesContent";
import SectionHeading from "../../components/SectionHeading";
import DiagramFigure from "../../components/DiagramFigure";

export default function FounderSalesAIReliability() {
  return (
    <section id="foundersales-ai" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={aiReliability.eyebrow} heading={aiReliability.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {aiReliability.intro}
        </p>

        <div className="mt-10 border border-ledger-line bg-white p-6 sm:p-7">
          <h3 className="font-display text-lg font-medium leading-snug text-ink">
            {aiReliability.classification.heading}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/75">
            {aiReliability.classification.body}
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-ledger-line">
                  <th className="py-2 pr-4 font-mono text-[11px] font-medium tracking-wide text-slate-soft">
                    CATEGORY
                  </th>
                  <th className="py-2 pr-4 font-mono text-[11px] font-medium tracking-wide text-slate-soft">
                    TRIGGER
                  </th>
                  <th className="py-2 font-mono text-[11px] font-medium tracking-wide text-slate-soft">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {aiReliability.classification.rows.map((row) => (
                  <tr key={row.category} className="border-b border-ledger-line last:border-b-0">
                    <td className="py-3 pr-4 font-mono text-xs font-medium text-confirmed">
                      {row.category}
                    </td>
                    <td className="py-3 pr-4 text-ink/75">{row.trigger}</td>
                    <td className="py-3 text-ink/75">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10">
          <DiagramFigure
            src={aiReliability.image}
            alt={aiReliability.imageAlt}
            caption={aiReliability.imageCaption}
          />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {aiReliability.extras.map((extra) => (
            <div key={extra.title} className="border border-ledger-line bg-paper p-5 sm:p-6">
              <h3 className="font-display text-base font-medium leading-snug text-ink">
                {extra.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{extra.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
