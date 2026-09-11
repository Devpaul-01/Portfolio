import { about } from "../content/portfolioContent";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={about.eyebrow} heading="A little about me." />
        <div className="mt-8 max-w-2xl space-y-4">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-ink/80 sm:text-[15px]">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
