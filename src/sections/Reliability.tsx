import { reliability } from "../content/kithContent";
import SectionHeading from "../components/SectionHeading";
import ImageFigure from "../components/ImageFigure";
import DiagramFigure from "../components/DiagramFigure";

export default function Reliability() {
  return (
    <section id="reliability" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={reliability.eyebrow} heading={reliability.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {reliability.body}
        </p>

        <div className="mt-6 max-w-2xl border-l-2 border-confirmed/40 bg-confirmed-soft/40 py-3 pl-5 pr-4">
          <p className="eyebrow mb-1.5 !text-confirmed">Testing &amp; CI</p>
          <p className="text-sm leading-relaxed text-ink/80">{reliability.testingNote}</p>
        </div>

        <div className="mt-12 space-y-14">
          <div>
            <ImageFigure
              src={reliability.beats[0].image}
              alt={reliability.beats[0].imageAlt}
              variant="hero"
            />
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/80 sm:text-[15px]">
              {reliability.beats[0].caption}
            </p>
          </div>

          <div>
            <DiagramFigure
              src={reliability.beats[1].image}
              alt={reliability.beats[1].imageAlt}
            />
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/80 sm:text-[15px]">
              {reliability.beats[1].caption}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-10">
            <ImageFigure
              src={reliability.beats[2].image}
              alt={reliability.beats[2].imageAlt}
              variant="compact"
            />
            <p className="text-sm leading-relaxed text-ink/80 sm:text-[15px]">
              {reliability.beats[2].caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
