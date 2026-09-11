import { gamification } from "../../content/studyHubContent";
import SectionHeading from "../../components/SectionHeading";
import ImageFigure from "../../components/ImageFigure";

export default function StudyHubGamification() {
  return (
    <section id="studyhub-gamification" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={gamification.eyebrow} heading={gamification.heading} />

        <div className="mt-6 max-w-2xl space-y-4">
          {gamification.body.map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed text-ink/75 sm:text-[15px]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 space-y-14">
          <div>
            <ImageFigure
              src={gamification.image}
              alt={gamification.imageAlt}
              caption={gamification.imageCaption}
              variant="hero"
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-10">
            <ImageFigure
              src={gamification.secondaryImage}
              alt={gamification.secondaryImageAlt}
              variant="compact"
            />
            <p className="text-sm leading-relaxed text-ink/80 sm:text-[15px]">
              {gamification.secondaryImageCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
