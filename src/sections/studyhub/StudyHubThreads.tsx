import { threads } from "../../content/studyHubContent";
import SectionHeading from "../../components/SectionHeading";
import ImageFigure from "../../components/ImageFigure";

export default function StudyHubThreads() {
  return (
    <section id="studyhub-threads" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={threads.eyebrow} heading={threads.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {threads.intro}
        </p>

        <div className="mt-10">
          <ImageFigure
            src={threads.beats[0].image}
            alt={threads.beats[0].imageAlt}
            caption={threads.beats[0].caption}
            variant="hero"
          />
        </div>

        <div className="mt-6 max-w-2xl border-l-2 border-confirmed/40 bg-confirmed-soft/40 py-3 pl-5 pr-4">
          <p className="eyebrow mb-1.5 !text-confirmed">Data consistency, held honestly</p>
          <p className="text-sm leading-relaxed text-ink/80">{threads.note}</p>
        </div>
      </div>
    </section>
  );
}
