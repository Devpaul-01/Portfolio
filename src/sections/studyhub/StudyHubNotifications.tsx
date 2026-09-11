import { notifications } from "../../content/studyHubContent";
import SectionHeading from "../../components/SectionHeading";
import DiagramFigure from "../../components/DiagramFigure";

export default function StudyHubNotifications() {
  return (
    <section id="studyhub-notifications" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={notifications.eyebrow} heading={notifications.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {notifications.body}
        </p>

        <div className="mt-10">
          <DiagramFigure
            src={notifications.image}
            alt={notifications.imageAlt}
            caption={notifications.imageCaption}
          />
        </div>
      </div>
    </section>
  );
}
