import { backgroundJobs, links } from "../../content/foundersalesContent";
import SectionHeading from "../../components/SectionHeading";
import DiagramFigure from "../../components/DiagramFigure";

export default function FounderSalesBackgroundJobs() {
  return (
    <section id="foundersales-jobs" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={backgroundJobs.eyebrow} heading={backgroundJobs.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {backgroundJobs.intro}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {backgroundJobs.queues.map((queue) => (
            <div key={queue.name} className="border border-ledger-line bg-paper p-5 sm:p-6">
              <p className="break-words font-mono text-xs font-medium tracking-wide text-confirmed">
                {queue.name}
              </p>
              <p className="mt-3 flex items-baseline gap-2">
                <span className="stat-figure text-3xl font-medium text-ink">
                  {queue.concurrency}
                </span>
                <span className="font-mono text-[10px] tracking-wide text-slate-soft">
                  CONCURRENCY
                </span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{queue.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <DiagramFigure
            src={backgroundJobs.image}
            alt={backgroundJobs.imageAlt}
            caption={backgroundJobs.imageCaption}
          />
        </div>

        <div className="mt-12 border border-ledger-line bg-white p-6 sm:p-7">
          <h3 className="font-display text-lg font-medium leading-snug text-ink">
            {backgroundJobs.idempotencyHeading}
          </h3>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-ledger-line">
                  <th className="py-2 pr-4 font-mono text-[11px] font-medium tracking-wide text-slate-soft">
                    MECHANISM
                  </th>
                  <th className="py-2 font-mono text-[11px] font-medium tracking-wide text-slate-soft">
                    USED BY
                  </th>
                </tr>
              </thead>
              <tbody>
                {backgroundJobs.idempotency.map((row) => (
                  <tr key={row.mechanism} className="border-b border-ledger-line last:border-b-0">
                    <td className="py-3 pr-4 font-mono text-xs font-medium text-confirmed">
                      {row.mechanism}
                    </td>
                    <td className="py-3 text-ink/75">{row.usedBy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink/75">
            {backgroundJobs.idempotencyNote}
          </p>
        </div>

        <div className="mt-8 max-w-2xl border-l-2 border-pending/40 bg-pending-soft/50 py-3 pl-5 pr-4">
          <p className="eyebrow mb-1.5 !text-pending">Failure handling</p>
          <p className="text-sm leading-relaxed text-ink/80">{backgroundJobs.failureHandling}</p>
        </div>

        <a
          href={links.backgroundJobsDoc}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 font-mono text-xs tracking-wide text-confirmed transition-opacity hover:opacity-70"
        >
          Read BACKGROUND_JOBS.md on GitHub &rarr;
        </a>
      </div>
    </section>
  );
}
