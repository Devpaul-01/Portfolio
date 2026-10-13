import { closing, links } from "../../content/agentBrokerContent";

export default function AgentBrokerClosing() {
  return (
    <section id="agentbroker-closing" className="py-20 sm:py-28">
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
            href={links.architectureDoc}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/50"
          >
            Read the architecture doc
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {closing.readingList.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="break-all font-mono text-xs tracking-wide text-confirmed transition-opacity hover:opacity-70"
              >
                {item.label} &rarr;
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
