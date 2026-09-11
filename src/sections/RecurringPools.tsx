import { pools } from "../content/kithContent";
import SectionHeading from "../components/SectionHeading";
import ImageFigure from "../components/ImageFigure";
import DiagramFigure from "../components/DiagramFigure";

export default function RecurringPools() {
  return (
    <section id="pools" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={pools.eyebrow} heading={pools.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {pools.intro}
        </p>

        <div className="mt-12 space-y-14">
          <div>
            <ImageFigure src={pools.beats[0].image} alt={pools.beats[0].imageAlt} variant="hero" />
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/80 sm:text-[15px]">
              {pools.beats[0].caption}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-10">
            <ImageFigure src={pools.beats[1].image} alt={pools.beats[1].imageAlt} variant="compact" />
            <p className="text-sm leading-relaxed text-ink/80 sm:text-[15px]">
              {pools.beats[1].caption}
            </p>
          </div>

          <div>
            <DiagramFigure src={pools.beats[2].image} alt={pools.beats[2].imageAlt} />
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/80 sm:text-[15px]">
              {pools.beats[2].caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
