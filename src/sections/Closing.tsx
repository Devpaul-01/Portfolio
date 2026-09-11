import { closing, links } from "../content/kithContent";

export default function Closing() {
  return (
    <section id="closing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="eyebrow mb-4">{closing.eyebrow}</p>
        <h2 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
          {closing.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate sm:text-base">
          {closing.body}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          >
            View source on GitHub
          </a>
          <a
            href={links.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/50"
          >
            Open the live demo
          </a>
        </div>
      </div>
    </section>
  );
}
