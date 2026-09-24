import { distributedState } from "../../content/foundersalesContent";
import SectionHeading from "../../components/SectionHeading";
import DiagramFigure from "../../components/DiagramFigure";

export default function FounderSalesDistributedState() {
  return (
    <section id="foundersales-redis" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={distributedState.eyebrow} heading={distributedState.heading} />

        <div className="mt-6 max-w-2xl space-y-4">
          {distributedState.body.map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed text-ink/75 sm:text-[15px]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10">
          <DiagramFigure
            src={distributedState.image}
            alt={distributedState.imageAlt}
            caption={distributedState.imageCaption}
          />
        </div>

        <div className="mt-12 border border-ledger-line bg-white p-6 sm:p-7">
          <h3 className="font-display text-lg font-medium leading-snug text-ink">
            {distributedState.redisRoles.heading}
          </h3>
          <dl className="mt-5 divide-y divide-ledger-line">
            {distributedState.redisRoles.rows.map((row) => (
              <div
                key={row.role}
                className="grid gap-1 py-3 sm:grid-cols-[220px_1fr] sm:gap-6"
              >
                <dt className="font-mono text-xs font-medium tracking-wide text-confirmed">
                  {row.role}
                </dt>
                <dd className="text-sm leading-relaxed text-ink/75">{row.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="border-l-2 border-pending/40 bg-pending-soft/50 py-3 pl-5 pr-4">
            <p className="eyebrow mb-1.5 !text-pending">{distributedState.failureNote.eyebrow}</p>
            <p className="text-sm leading-relaxed text-ink/80">{distributedState.failureNote.body}</p>
          </div>
          <div className="border-l-2 border-confirmed/40 bg-confirmed-soft/40 py-3 pl-5 pr-4">
            <p className="eyebrow mb-1.5 !text-confirmed">{distributedState.killSwitch.eyebrow}</p>
            <p className="break-words text-sm leading-relaxed text-ink/80">
              {distributedState.killSwitch.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
