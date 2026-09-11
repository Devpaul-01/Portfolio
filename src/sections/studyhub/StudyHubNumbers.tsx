import { numbers } from "../../content/studyHubContent";

export default function StudyHubNumbers() {
  return (
    <section id="studyhub-numbers" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow mb-6">{numbers.eyebrow}</p>
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-ledger-line bg-ledger-line sm:grid-cols-3 lg:grid-cols-6">
          {numbers.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1.5 bg-paper p-5 sm:p-6"
            >
              <span className="stat-figure text-3xl font-medium text-ink sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-xs leading-snug text-slate">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
