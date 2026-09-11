import { architecture, links } from "../../content/studyHubContent";
import SectionHeading from "../../components/SectionHeading";
import DiagramFigure from "../../components/DiagramFigure";

export default function StudyHubArchitecture() {
  return (
    <section id="studyhub-architecture" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={architecture.eyebrow} heading={architecture.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {architecture.body}
        </p>

        <div className="mt-10">
          <DiagramFigure
            src={architecture.image}
            alt={architecture.imageAlt}
            caption={architecture.imageCaption}
          />
        </div>

        <div className="mt-12 space-y-14">
          <div>
            <DiagramFigure
              src={architecture.cacheBeat.image}
              alt={architecture.cacheBeat.imageAlt}
            />
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/80 sm:text-[15px]">
              {architecture.cacheBeat.caption}
            </p>
          </div>

          <div>
            <DiagramFigure
              src={architecture.presenceBeat.image}
              alt={architecture.presenceBeat.imageAlt}
            />
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/80 sm:text-[15px]">
              {architecture.presenceBeat.caption}
            </p>
          </div>
        </div>

        <a
          href={links.architectureDoc}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 font-mono text-xs tracking-wide text-confirmed transition-opacity hover:opacity-70"
        >
          Read ARCHITECTURE.md on GitHub &rarr;
        </a>
      </div>
    </section>
  );
}
