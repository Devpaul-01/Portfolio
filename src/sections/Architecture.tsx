import { architecture, links } from "../content/kithContent";
import SectionHeading from "../components/SectionHeading";
import DiagramFigure from "../components/DiagramFigure";

export default function Architecture() {
  return (
    <section id="architecture" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={architecture.eyebrow} heading={architecture.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {architecture.body}
        </p>

        <div className="mt-10">
          <DiagramFigure
            src={architecture.image}
            alt={architecture.imageAlt}
            caption={architecture.imageCaption}
          />
        </div>

        <a
          href={links.architectureDoc}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 font-mono text-xs tracking-wide text-confirmed transition-opacity hover:opacity-70"
        >
          Read ARCHITECTURE.md on GitHub &rarr;
        </a>
      </div>
    </section>
  );
}
