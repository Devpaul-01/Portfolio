import { metricsVsInsights } from "../../content/foundersalesContent";
import SectionHeading from "../../components/SectionHeading";
import ImageFigure from "../../components/ImageFigure";

export default function FounderSalesMetricsVsInsights() {
  return (
    <section id="foundersales-metrics" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={metricsVsInsights.eyebrow} heading={metricsVsInsights.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {metricsVsInsights.intro}
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {metricsVsInsights.columns.map((column, i) => (
            <div
              key={column.label}
              className={`border-t-2 pt-5 ${i === 0 ? "border-confirmed/50" : "border-pending/50"}`}
            >
              <p className={`eyebrow mb-4 ${i === 0 ? "!text-confirmed" : "!text-pending"}`}>
                {column.label}
              </p>
              <ul className="space-y-3">
                {column.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-sm leading-relaxed text-ink/80 sm:text-[15px]"
                  >
                    <span aria-hidden="true" className="mt-0.5 shrink-0 font-mono text-slate-soft">
                      &middot;
                    </span>
                    <span className="break-words">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {metricsVsInsights.images.map((img) => (
            <ImageFigure
              key={img.image}
              src={img.image}
              alt={img.imageAlt}
              caption={img.caption}
              variant="compact"
            />
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="border-l-2 border-confirmed/40 bg-confirmed-soft/40 py-3 pl-5 pr-4">
            <p className="eyebrow mb-1.5 !text-confirmed">{metricsVsInsights.grounding.eyebrow}</p>
            <p className="text-sm leading-relaxed text-ink/80">{metricsVsInsights.grounding.body}</p>
          </div>
          <div className="border-l-2 border-pending/40 bg-pending-soft/50 py-3 pl-5 pr-4">
            <p className="eyebrow mb-1.5 !text-pending">Minimum sample sizes</p>
            <p className="break-words text-sm leading-relaxed text-ink/80">
              {metricsVsInsights.thresholdNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
