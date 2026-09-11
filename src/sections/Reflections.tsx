import { reflections } from "../content/reflectionContent";
import SectionHeading from "../components/SectionHeading";

export default function Reflections() {
  return (
    <section id="reflections" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={reflections.eyebrow} heading={reflections.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {reflections.intro}
        </p>

        <div className="mt-10 space-y-8">
          {reflections.items.map((item) => (
            <div
              key={item.tag}
              className="border-t border-ledger-line pt-6 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-[10px] tracking-wide text-slate-soft">
                  {item.tag.toUpperCase()}
                </span>
              </div>
              <h3 className="mt-1.5 max-w-2xl font-display text-lg font-medium leading-snug text-ink">
                {item.title}
              </h3>
              <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-ink/75 sm:text-[15px]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
