import { limits } from "../../content/agentBrokerContent";
import SectionHeading from "../../components/SectionHeading";

export default function AgentBrokerLimits() {
  return (
    <section id="agentbroker-limits" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={limits.eyebrow} heading={limits.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {limits.intro}
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {limits.items.map((item) => (
            <div key={item.title} className="border border-ledger-line bg-white p-6 sm:p-7">
              <h3 className="font-display text-lg font-medium leading-snug text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
