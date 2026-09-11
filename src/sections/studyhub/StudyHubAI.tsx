import { ai } from "../../content/studyHubContent";
import SectionHeading from "../../components/SectionHeading";
import DiagramFigure from "../../components/DiagramFigure";

export default function StudyHubAI() {
  return (
    <section id="studyhub-ai" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={ai.eyebrow} heading={ai.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {ai.intro}
        </p>

        <div className="mt-10 border border-ledger-line bg-white p-6 sm:p-7">
          <h3 className="font-display text-lg font-medium leading-snug text-ink">
            {ai.classification.heading}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/75">
            {ai.classification.body}
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
                {ai.classification.rows.map((row) => (
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
            src={ai.image}
            alt={ai.imageAlt}
            caption={ai.imageCaption}
          />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <p className="text-sm leading-relaxed text-ink/75 sm:text-[15px]">
            {ai.streaming}
          </p>
          <div className="border border-pending/30 bg-pending-soft/50 p-5">
            <p className="eyebrow mb-2 !text-pending">Graceful degradation</p>
            <p className="text-sm leading-relaxed text-ink/80">{ai.fallback}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
