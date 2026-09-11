import { nextImprovements } from "../content/nextImprovementsContent";
import SectionHeading from "../components/SectionHeading";

export default function NextImprovements() {
  return (
    <section id="next-improvements" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={nextImprovements.eyebrow}
          heading={nextImprovements.heading}
        />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {nextImprovements.intro}
        </p>

        <ul className="mt-8 max-w-2xl space-y-3">
          {nextImprovements.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink/80 sm:text-[15px]">
              <span aria-hidden="true" className="mt-0.5 shrink-0 font-mono text-slate-soft">
                &middot;
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
