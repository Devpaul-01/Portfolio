import { security } from "../../content/studyHubContent";
import SectionHeading from "../../components/SectionHeading";
import DiagramFigure from "../../components/DiagramFigure";

export default function StudyHubSecurity() {
  return (
    <section id="studyhub-security" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={security.eyebrow} heading={security.heading} />

        <div className="mt-6 max-w-2xl space-y-4">
          {security.body.map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed text-ink/75 sm:text-[15px]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10">
          <DiagramFigure
            src={security.image}
            alt={security.imageAlt}
            caption={security.imageCaption}
          />
        </div>

        <div className="mt-8 max-w-2xl border-l-2 border-confirmed/40 bg-confirmed-soft/40 py-3 pl-5 pr-4">
          <p className="eyebrow mb-1.5 !text-confirmed">Beyond auth</p>
          <p className="text-sm leading-relaxed text-ink/80">{security.tradeoff}</p>
        </div>
      </div>
    </section>
  );
}
