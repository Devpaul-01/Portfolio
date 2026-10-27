import { measured } from "../content/kithContent";
import SectionHeading from "../components/SectionHeading";
import EngineeringCallout from "../components/EngineeringCallout";

export default function Measured() {
  return (
    <section id="measured" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={measured.eyebrow} heading={measured.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {measured.intro}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {measured.callouts.map((callout) => (
            <EngineeringCallout key={callout.tag} {...callout} />
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-slate-soft">
          {measured.note}
        </p>
      </div>
    </section>
  );
}
