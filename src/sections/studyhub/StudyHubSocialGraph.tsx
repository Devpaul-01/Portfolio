import { socialGraph } from "../../content/studyHubContent";
import SectionHeading from "../../components/SectionHeading";
import ImageFigure from "../../components/ImageFigure";

export default function StudyHubSocialGraph() {
  return (
    <section id="studyhub-social" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12">
          <div>
            <SectionHeading eyebrow={socialGraph.eyebrow} heading={socialGraph.heading} />
            <div className="mt-6 space-y-4">
              {socialGraph.body.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-ink/75 sm:text-[15px]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <ImageFigure
            src={socialGraph.image}
            alt={socialGraph.imageAlt}
            caption={socialGraph.imageCaption}
            variant="compact"
          />
        </div>
      </div>
    </section>
  );
}
