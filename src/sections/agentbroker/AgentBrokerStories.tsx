import { stories, type Story } from "../../content/agentBrokerContent";
import SectionHeading from "../../components/SectionHeading";

function SourceLinks({ story }: { story: Story }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-ledger-line pt-4">
      {story.sources.map((s) => (
        <li key={s.href}>
          <a
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="break-all font-mono text-xs tracking-wide text-confirmed transition-opacity hover:opacity-70"
          >
            {s.label} &rarr;
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function AgentBrokerStories() {
  return (
    <section id="agentbroker-stories" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={stories.eyebrow} heading={stories.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {stories.intro}
        </p>

        <div className="mt-10 space-y-6">
          {stories.items.map((story) => (
            <article key={story.tag} className="border border-ledger-line bg-white p-6 sm:p-8">
              <div className="mb-5 flex items-start justify-between gap-4 border-b border-ledger-line pb-5">
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
                    {story.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/80">
                    <span className="eyebrow mr-2 !text-confirmed">Invariant</span>
                    {story.invariant}
                  </p>
                </div>
                <span className="mt-1 shrink-0 font-mono text-[10px] tracking-wide text-slate-soft">
                  {story.tag}
                </span>
              </div>
              <dl className="grid gap-6 lg:grid-cols-3">
                <div>
                  <dt className="eyebrow mb-1.5 !text-pending">The naive version</dt>
                  <dd className="text-sm leading-relaxed text-ink/80">{story.naive}</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-1.5 !text-confirmed">What it does instead</dt>
                  <dd className="text-sm leading-relaxed text-ink/80">{story.mechanism}</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-1.5 !text-confirmed">Evidence</dt>
                  <dd className="text-sm leading-relaxed text-ink/80">{story.evidence}</dd>
                </div>
              </dl>
              <SourceLinks story={story} />
            </article>
          ))}
        </div>

        <h3 className="mt-14 font-display text-xl font-medium text-ink">{stories.smallerHeading}</h3>
        <div className="mt-6 grid gap-px overflow-hidden border border-ledger-line bg-ledger-line sm:grid-cols-2">
          {stories.smaller.map((item) => (
            <div key={item.title} className="flex flex-col bg-paper p-6">
              <h4 className="font-display text-base font-medium text-ink">{item.title}</h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/80">{item.body}</p>
              <a
                href={item.link.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 break-all font-mono text-xs tracking-wide text-confirmed transition-opacity hover:opacity-70"
              >
                {item.link.label} &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
