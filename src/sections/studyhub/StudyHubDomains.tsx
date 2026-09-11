import { domains } from "../../content/studyHubContent";
import SectionHeading from "../../components/SectionHeading";

export default function StudyHubDomains() {
  return (
    <section id="studyhub-domains" className="border-b border-ledger-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={domains.eyebrow} heading={domains.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {domains.intro}
        </p>

        <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
          {domains.groups.map((group) => (
            <div key={group.role}>
              <p className="eyebrow mb-2">{group.role}</p>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-ink/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
