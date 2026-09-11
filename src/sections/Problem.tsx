import { problem } from "../content/kithContent";
import SectionHeading from "../components/SectionHeading";

export default function Problem() {
  return (
    <section id="problem" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={problem.eyebrow} heading={problem.heading} />
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {problem.body.map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed text-ink/75 sm:text-[15px]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
