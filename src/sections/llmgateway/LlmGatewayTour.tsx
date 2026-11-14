import { links, tour } from "../../content/llmGatewayContent";
import SectionHeading from "../../components/SectionHeading";
import ImageFigure from "../../components/ImageFigure";

export default function LlmGatewayTour() {
  return (
    <section id="llmgateway-tour" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={tour.eyebrow} heading={tour.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {tour.intro}
        </p>

        <div className="mt-10">
          <ImageFigure
            src={tour.hero.src}
            alt={tour.hero.alt}
            caption={tour.hero.caption}
            variant="hero"
          />
        </div>

        <div className="mt-8 grid gap-px overflow-hidden border border-ledger-line bg-ledger-line sm:grid-cols-3">
          {tour.callouts.map((callout) => (
            <div key={callout.label} className="bg-paper p-5 sm:p-6">
              <p className="font-mono text-xs font-medium tracking-wide text-confirmed">
                {callout.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate">{callout.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {tour.gallery.map((img) => (
            <ImageFigure
              key={img.src}
              src={img.src}
              alt={img.alt}
              caption={img.caption}
              variant="compact"
            />
          ))}
        </div>

        <h3 className="mt-16 font-display text-xl font-medium text-ink">{tour.flowHeading}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {tour.flowIntro}
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {tour.flow.map((img) => (
            <ImageFigure
              key={img.src}
              src={img.src}
              alt={img.alt}
              caption={img.caption}
              variant="compact"
            />
          ))}
        </div>

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[1fr_1.2fr]">
          <ImageFigure
            src={tour.gate.src}
            alt={tour.gate.alt}
            caption={tour.gate.caption}
            variant="compact"
          />
          <div className="space-y-5">
            <div className="border-l-2 border-confirmed/40 bg-confirmed-soft/50 py-3 pl-5 pr-4">
              <p className="eyebrow mb-1.5 !text-confirmed">The public demo page</p>
              <p className="text-sm leading-relaxed text-ink/80">{tour.demoNote}</p>
              <a
                href={links.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block font-mono text-xs tracking-wide text-confirmed transition-opacity hover:opacity-70"
              >
                Open the live demo &rarr;
              </a>
            </div>
            <div className="border-l-2 border-pending/40 bg-pending-soft/50 py-3 pl-5 pr-4">
              <p className="eyebrow mb-1.5 !text-pending">About these screenshots</p>
              <p className="text-sm leading-relaxed text-ink/80">{tour.provenance}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
