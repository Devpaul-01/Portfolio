import { bugStories } from "../../content/foundersalesContent";
import SectionHeading from "../../components/SectionHeading";
import DiagramFigure from "../../components/DiagramFigure";

export default function FounderSalesBugStories() {
  return (
    <section id="foundersales-bugs" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={bugStories.eyebrow} heading={bugStories.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {bugStories.intro}
        </p>

        <div className="mt-10 space-y-8">
          {bugStories.stories.map((story) => (
            <div
              key={story.tag}
              className="border-t border-ledger-line pt-6 first:border-t-0 first:pt-0"
            >
              <span className="font-mono text-[10px] tracking-wide text-slate-soft">
                {story.tag.toUpperCase()}
              </span>
              <h3 className="mt-1.5 max-w-2xl font-display text-lg font-medium leading-snug text-ink">
                {story.title}
              </h3>
              <p className="mt-2.5 max-w-2xl break-words text-sm leading-relaxed text-ink/75 sm:text-[15px]">
                {story.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <DiagramFigure
            src={bugStories.image}
            alt={bugStories.imageAlt}
            caption={bugStories.imageCaption}
          />
        </div>
      </div>
    </section>
  );
}
