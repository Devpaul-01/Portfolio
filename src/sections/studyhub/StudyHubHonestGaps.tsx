import { honestGaps } from "../../content/studyHubContent";
import SectionHeading from "../../components/SectionHeading";
import EngineeringCallout from "../../components/EngineeringCallout";

export default function StudyHubHonestGaps() {
  return (
    <section id="studyhub-honest-gaps" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={honestGaps.eyebrow} heading={honestGaps.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {honestGaps.intro}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {honestGaps.callouts.map((callout) => (
            <EngineeringCallout key={callout.tag} {...callout} />
          ))}
        </div>
      </div>
    </section>
  );
}
