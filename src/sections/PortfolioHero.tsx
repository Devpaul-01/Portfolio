import { portfolioHero, contact, identity } from "../content/portfolioContent";

export default function PortfolioHero() {
  return (
    <section
      id="portfolio-hero"
      className="border-b border-ledger-line pb-16 pt-16 sm:pb-20 sm:pt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="eyebrow">{portfolioHero.eyebrow}</p>
          <div className="flex items-center gap-4">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs tracking-wide text-slate transition-colors hover:text-ink"
            >
              GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs tracking-wide text-slate transition-colors hover:text-ink"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="font-mono text-xs tracking-wide text-slate transition-colors hover:text-ink"
            >
              Email
            </a>
          </div>
        </div>

        <p className="mt-8 font-mono text-sm tracking-wide text-confirmed">
          {portfolioHero.greeting}
          <span className="mx-2 text-slate-soft">&middot;</span>
          <span className="text-slate">{identity.title}</span>
        </p>

        <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
          {portfolioHero.headline}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
          {portfolioHero.subhead}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs tracking-wide text-slate-soft">
          <span>{identity.location}</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>{identity.workPreference}</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>{identity.level}</span>
        </div>
      </div>
    </section>
  );
}
