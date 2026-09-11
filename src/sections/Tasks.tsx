import { tasks } from "../content/kithContent";
import SectionHeading from "../components/SectionHeading";
import ImageFigure from "../components/ImageFigure";

export default function Tasks() {
  return (
    <section id="tasks" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12">
          <div>
            <SectionHeading eyebrow={tasks.eyebrow} heading={tasks.heading} />
            <p className="mt-6 text-sm leading-relaxed text-slate sm:text-base">
              {tasks.body}
            </p>
          </div>
          <ImageFigure
            src={tasks.image}
            alt={tasks.imageAlt}
            caption={tasks.imageCaption}
            variant="compact"
          />
        </div>
      </div>
    </section>
  );
}
