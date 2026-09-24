import { surface } from "../../content/foundersalesContent";
import SectionHeading from "../../components/SectionHeading";
import ImageFigure from "../../components/ImageFigure";

export default function FounderSalesSurface() {
  return (
    <section id="foundersales-surface" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={surface.eyebrow} heading={surface.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {surface.intro}
        </p>

        <div className="mt-12 space-y-14">
          {surface.beats.map((beat, i) => (
            <div key={i} className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-10">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <ImageFigure src={beat.image} alt={beat.imageAlt} variant="compact" />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="stat-figure text-xs text-slate-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-ink/80 sm:text-[15px]">
                  {beat.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl border-l-2 border-confirmed/40 bg-confirmed-soft/40 py-3 pl-5 pr-4">
          <p className="eyebrow mb-1.5 !text-confirmed">Search gate</p>
          <p className="text-sm leading-relaxed text-ink/80">{surface.searchGateNote}</p>
        </div>
      </div>
    </section>
  );
}
