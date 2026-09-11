import { productModel } from "../../content/studyHubContent";
import SectionHeading from "../../components/SectionHeading";

export default function StudyHubProductModel() {
  return (
    <section id="studyhub-model" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={productModel.eyebrow} heading={productModel.heading} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          {productModel.intro}
        </p>

        <div className="mt-12">
          <div className="grid gap-0 sm:grid-cols-3">
            {productModel.nodes.map((node, i) => (
              <div key={node.label} className="relative">
                <div className="border border-ledger-line bg-white p-6 sm:p-7">
                  <span className="eyebrow">{`NODE ${i + 1}`}</span>
                  <h3 className="mt-2 font-display text-2xl font-medium text-ink">
                    {node.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {node.description}
                  </p>
                </div>
                {i < productModel.nodes.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 font-mono text-lg text-slate-soft sm:block"
                  >
                    &rarr;
                  </span>
                )}
                {i < productModel.nodes.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="mx-auto block w-fit rotate-90 font-mono text-lg text-slate-soft sm:hidden"
                  >
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-dashed border-ledger-line pt-6">
            <p className="eyebrow mb-3">Reinforced by</p>
            <div className="flex flex-wrap gap-2">
              {productModel.satellites.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-ledger-line px-3 py-1 font-mono text-[11px] tracking-wide text-slate"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
