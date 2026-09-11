import { numbers, links } from "../content/kithContent";
import StatRow from "../components/StatRow";

export default function Numbers() {
  return (
    <section id="numbers" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow mb-6">{numbers.eyebrow}</p>
        <StatRow
          stats={numbers.stats}
          ciBadgeSrc={links.ciBadge}
          ciBadgeHref={links.ciWorkflow}
          ciNote={numbers.ciNote}
        />
      </div>
    </section>
  );
}
