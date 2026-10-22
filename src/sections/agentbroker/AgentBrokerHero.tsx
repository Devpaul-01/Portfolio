import { hero, links, stats } from "../../content/agentBrokerContent";

export default function AgentBrokerHero() {
  return (
    <section
      id="agentbroker-hero"
      className="border-b border-ledger-line pb-16 pt-16 sm:pb-20 sm:pt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow mb-5">{hero.eyebrow}</p>
        <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
          {hero.subhead}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          >
            View source on GitHub
          </a>
          <a
            href={links.npm}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/50"
          >
            View on npm
          </a>
          <a
            href={links.architectureDoc}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/50"
          >
            Architecture doc
          </a>
          <a
            href={links.ciWorkflow}
            target="_blank"
            rel="noreferrer"
            className="ml-1 inline-block"
            aria-label="View live CI build status"
          >
            <img src={links.ciBadge} alt="CI build status" className="h-6" />
          </a>
        </div>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
          <div className="min-w-0 border-l-2 border-confirmed/40 bg-confirmed-soft/50 py-3 pl-5 pr-4">
            <p className="eyebrow mb-1.5 !text-confirmed">Status — published on npm</p>
            <p className="text-sm leading-relaxed text-ink/80">{hero.statusNote}</p>
            <pre className="diagram-scroll mt-3 overflow-x-auto rounded-sm border border-ledger-line bg-white p-3 font-mono text-xs leading-relaxed text-ink">
              <code>{hero.buildCommand}</code>
            </pre>
            <p className="mt-2 text-xs leading-relaxed text-slate">{hero.statusFootnote}</p>
          </div>

          <div className="min-w-0">
            <p className="eyebrow mb-2">{hero.apiHeading}</p>
            <pre className="diagram-scroll overflow-x-auto rounded-sm border border-ledger-line bg-white p-4 font-mono text-xs leading-relaxed text-ink">
              <code>{hero.apiSnippet}</code>
            </pre>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-ledger-line bg-ledger-line sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1.5 bg-paper p-5 sm:p-6">
              <span className="stat-figure text-3xl font-medium text-ink sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-xs leading-snug text-slate">{stat.label}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-xl text-xs leading-relaxed text-slate-soft">
          Skimming? Start with{" "}
          <a
            href="#agentbroker-stories"
            className="font-mono text-confirmed underline decoration-confirmed/30 underline-offset-2 transition-opacity hover:opacity-70"
          >
            the three engineering decisions
          </a>{" "}
          or{" "}
          <a
            href="#agentbroker-tests"
            className="font-mono text-confirmed underline decoration-confirmed/30 underline-offset-2 transition-opacity hover:opacity-70"
          >
            how they are tested
          </a>
          .
        </p>
      </div>
    </section>
  );
}
