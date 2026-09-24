import { practice } from "../../content/foundersalesContent";
import SectionHeading from "../../components/SectionHeading";
import ImageFigure from "../../components/ImageFigure";

export default function FounderSalesPractice() {
  return (
    <section id="foundersales-practice" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={practice.eyebrow} heading={practice.heading} />

        <div className="mt-6 max-w-2xl space-y-4">
          {practice.body.map((paragraph, i) => (
            <p key={i} className="break-words text-sm leading-relaxed text-ink/75 sm:text-[15px]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {practice.images.map((img) => (
            <ImageFigure
              key={img.image}
              src={img.image}
              alt={img.imageAlt}
              caption={img.caption}
              variant="compact"
            />
          ))}
        </div>

        <div className="mt-8 max-w-2xl border-l-2 border-confirmed/40 bg-confirmed-soft/40 py-3 pl-5 pr-4">
          <p className="eyebrow mb-1.5 !text-confirmed">{practice.scoringNote.eyebrow}</p>
          <p className="text-sm leading-relaxed text-ink/80">{practice.scoringNote.body}</p>
        </div>
      </div>
    </section>
  );
}
