import { dashboard } from "../content/kithContent";
import SectionHeading from "../components/SectionHeading";
import ImageFigure from "../components/ImageFigure";

export default function Dashboard() {
  return (
    <section id="dashboard" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={dashboard.eyebrow} heading={dashboard.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {dashboard.body}
        </p>

        <div className="mt-10">
          <ImageFigure
            src={dashboard.image}
            alt={dashboard.imageAlt}
            caption={dashboard.imageCaption}
            variant="hero"
          />
        </div>

        <div className="mt-8 grid gap-px overflow-hidden border border-ledger-line bg-ledger-line sm:grid-cols-3">
          {dashboard.callouts.map((callout) => (
            <div key={callout.label} className="bg-paper p-5 sm:p-6">
              <p className="font-mono text-xs font-medium tracking-wide text-confirmed">
                {callout.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate">
                {callout.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
