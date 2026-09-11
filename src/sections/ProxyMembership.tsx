import { proxyMembership } from "../content/kithContent";
import SectionHeading from "../components/SectionHeading";
import ImageFigure from "../components/ImageFigure";

export default function ProxyMembership() {
  return (
    <section id="proxy" className="border-b border-ledger-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={proxyMembership.eyebrow} heading={proxyMembership.heading} />

        <div className="mt-6 max-w-2xl space-y-4">
          {proxyMembership.body.map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed text-ink/75 sm:text-[15px]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10">
          <ImageFigure
            src={proxyMembership.primaryImage}
            alt={proxyMembership.primaryImageAlt}
            caption={proxyMembership.primaryImageCaption}
            variant="hero"
          />
        </div>

        <div className="mt-8 max-w-md">
          <ImageFigure
            src={proxyMembership.secondaryImage}
            alt={proxyMembership.secondaryImageAlt}
            caption={proxyMembership.secondaryImageCaption}
            variant="compact"
          />
        </div>
      </div>
    </section>
  );
}
