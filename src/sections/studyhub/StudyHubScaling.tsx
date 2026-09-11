import { scaling } from "../../content/studyHubContent";
import SectionHeading from "../../components/SectionHeading";

export default function StudyHubScaling() {
  return (
    <section id="studyhub-scaling" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={scaling.eyebrow} heading={scaling.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {scaling.intro}
        </p>

        <div className="mt-10 overflow-x-auto border border-ledger-line bg-white">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-ledger-line">
                <th className="px-5 py-3 font-mono text-[11px] font-medium tracking-wide text-slate-soft sm:px-6">
                  SUBSYSTEM
                </th>
                <th className="px-5 py-3 font-mono text-[11px] font-medium tracking-wide text-slate-soft sm:px-6">
                  BEFORE
                </th>
                <th className="px-5 py-3 font-mono text-[11px] font-medium tracking-wide text-slate-soft sm:px-6">
                  AFTER
                </th>
              </tr>
            </thead>
            <tbody>
              {scaling.table.map((row) => (
                <tr key={row.subsystem} className="border-b border-ledger-line last:border-b-0">
                  <td className="px-5 py-3 text-ink/85 sm:px-6">{row.subsystem}</td>
                  <td className="px-5 py-3 text-ink/60 sm:px-6">{row.before}</td>
                  <td className="px-5 py-3 text-confirmed sm:px-6">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 max-w-2xl border-l-2 border-pending/40 bg-pending-soft/50 py-3 pl-5 pr-4">
          <p className="eyebrow mb-1.5 !text-pending">What's still deferred</p>
          <p className="text-sm leading-relaxed text-ink/80">{scaling.honesty}</p>
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink/75 sm:text-[15px]">
          {scaling.result}
        </p>
      </div>
    </section>
  );
}
