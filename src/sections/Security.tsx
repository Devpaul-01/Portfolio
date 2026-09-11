import { security, links } from "../content/kithContent";
import SectionHeading from "../components/SectionHeading";

export default function Security() {
  return (
    <section id="security" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={security.eyebrow} heading={security.heading} />

        <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-10">
          <p className="text-sm leading-relaxed text-ink/75 sm:text-[15px]">
            {security.body[0]}
          </p>
          <div className="border border-pending/30 bg-pending-soft/50 p-5">
            <p className="eyebrow mb-2 !text-pending">Stated trade-off</p>
            <p className="text-sm leading-relaxed text-ink/80">{security.body[1]}</p>
          </div>
        </div>

        <a
          href={links.securityDoc}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 font-mono text-xs tracking-wide text-confirmed transition-opacity hover:opacity-70"
        >
          Read SECURITY.md on GitHub &rarr;
        </a>
      </div>
    </section>
  );
}
