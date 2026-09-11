import { reliability } from "../../content/studyHubContent";
import SectionHeading from "../../components/SectionHeading";
import DiagramFigure from "../../components/DiagramFigure";

export default function StudyHubReliability() {
  return (
    <section id="studyhub-reliability" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={reliability.eyebrow} heading={reliability.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {reliability.body}
        </p>

        <div className="mt-6 max-w-2xl border-l-2 border-pending/40 bg-pending-soft/50 py-3 pl-5 pr-4">
          <p className="eyebrow mb-1.5 !text-pending">The one fail-closed exception</p>
          <p className="text-sm leading-relaxed text-ink/80">{reliability.lockNote}</p>
        </div>

        <div className="mt-10">
          <DiagramFigure
            src={reliability.beats[0].image}
            alt={reliability.beats[0].imageAlt}
            caption={reliability.beats[0].caption}
          />
        </div>

        <div className="mt-8 max-w-2xl border-l-2 border-confirmed/40 bg-confirmed-soft/40 py-3 pl-5 pr-4">
          <p className="eyebrow mb-1.5 !text-confirmed">Testing</p>
          <p className="text-sm leading-relaxed text-ink/80">{reliability.testingNote}</p>
        </div>
      </div>
    </section>
  );
}
