import { dataArchitecture } from "../../content/foundersalesContent";
import SectionHeading from "../../components/SectionHeading";
import EngineeringCallout from "../../components/EngineeringCallout";

export default function FounderSalesDataArchitecture() {
  return (
    <section id="foundersales-data" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={dataArchitecture.eyebrow} heading={dataArchitecture.heading} />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {dataArchitecture.callouts.map((callout) => (
            <EngineeringCallout key={callout.tag} {...callout} />
          ))}
        </div>

        <p className="mt-8 max-w-2xl break-words text-sm leading-relaxed text-ink/75 sm:text-[15px]">
          {dataArchitecture.usageNote}
        </p>
      </div>
    </section>
  );
}
