import { reliability } from "../../content/foundersalesContent";
import SectionHeading from "../../components/SectionHeading";

export default function FounderSalesReliability() {
  return (
    <section id="foundersales-reliability" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={reliability.eyebrow} heading={reliability.heading} />

        <dl className="mt-10 divide-y divide-ledger-line border-y border-ledger-line">
          {reliability.points.map((point) => (
            <div
              key={point.label}
              className="grid gap-1 py-4 sm:grid-cols-[200px_1fr] sm:gap-8"
            >
              <dt className="font-mono text-xs font-medium tracking-wide text-confirmed">
                {point.label}
              </dt>
              <dd className="break-words text-sm leading-relaxed text-ink/80 sm:text-[15px]">
                {point.detail}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 max-w-2xl border-l-2 border-confirmed/40 bg-confirmed-soft/40 py-3 pl-5 pr-4">
          <p className="eyebrow mb-1.5 !text-confirmed">Testing</p>
          <p className="text-sm leading-relaxed text-ink/80">{reliability.testingNote}</p>
        </div>
      </div>
    </section>
  );
}
