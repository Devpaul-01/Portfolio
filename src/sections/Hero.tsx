import { hero, links } from "../content/kithContent";
import ImageFigure from "../components/ImageFigure";

export default function Hero() {
  return (
    <section id="hero" className="border-b border-ledger-line pb-16 pt-24 sm:pb-20 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow mb-5">{hero.eyebrow}</p>
        <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
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
            href={links.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/50"
          >
            Live demo
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

        <div className="mt-14 sm:mt-16">
          <ImageFigure
            src={hero.image}
            alt={hero.imageAlt}
            caption={hero.imageCaption}
            variant="hero"
          />
        </div>
      </div>
    </section>
  );
}
