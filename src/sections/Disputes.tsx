import { disputes } from "../content/kithContent";
import SectionHeading from "../components/SectionHeading";
import ImageFigure from "../components/ImageFigure";
import DiagramFigure from "../components/DiagramFigure";

export default function Disputes() {
  return (
    <section id="disputes" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={disputes.eyebrow} heading={disputes.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {disputes.intro}
        </p>

        <div className="mt-12 space-y-14">
          {disputes.beats.map((beat, i) =>
            beat.isDiagram ? (
              <div key={i}>
                <DiagramFigure src={beat.image} alt={beat.imageAlt} />
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/80 sm:text-[15px]">
                  {beat.caption}
                </p>
              </div>
            ) : (
              <div key={i}>
                <ImageFigure src={beat.image} alt={beat.imageAlt} variant="hero" />
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/80 sm:text-[15px]">
                  {beat.caption}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
