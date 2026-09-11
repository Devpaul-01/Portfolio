import { ownership, motivation } from "../content/reflectionContent";

export default function OwnershipAndMotivation() {
  return (
    <section id="ownership" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow mb-3">{ownership.eyebrow}</p>
            <h2 className="font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
              {ownership.heading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/75 sm:text-[15px]">
              {ownership.body}
            </p>
          </div>

          <div className="border-l-2 border-confirmed/40 pl-6">
            <p className="eyebrow mb-3 !text-confirmed">{motivation.eyebrow}</p>
            <h2 className="font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
              {motivation.heading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/75 sm:text-[15px]">
              {motivation.body}
            </p>
            <p className="mt-4 font-mono text-xs leading-relaxed text-slate-soft">
              {motivation.timelineNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
