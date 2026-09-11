import { homework } from "../../content/studyHubContent";
import SectionHeading from "../../components/SectionHeading";
import ImageFigure from "../../components/ImageFigure";

export default function StudyHubHomework() {
  return (
    <section id="studyhub-homework" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={homework.eyebrow} heading={homework.heading} />

        <div className="mt-6 max-w-2xl space-y-4">
          {homework.body.map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed text-ink/75 sm:text-[15px]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10">
          <ImageFigure
            src={homework.image}
            alt={homework.imageAlt}
            caption={homework.imageCaption}
            variant="hero"
          />
        </div>
      </div>
    </section>
  );
}
