import { Link, Navigate, useParams } from "react-router-dom";
import { useMemo, type ComponentType } from "react";
import LedgerRule from "../components/LedgerRule";
import KithProject from "../projects/KithProject";
import StudyHubProject from "../projects/StudyHubProject";
import FounderSalesProject from "../projects/FounderSalesProject";
import Contact from "../sections/Contact";
import { contact, identity } from "../content/portfolioContent";
import { projects } from "../content/projectsIndexContent";
import {
  kithSectionIds,
  studyHubSectionIds,
  founderSalesSectionIds,
  type SectionEntry,
} from "../content/sectionIds";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type Slug = "kith" | "studyhub" | "foundersales";

// One entry per case study. The Project components are the existing
// fragments, unchanged; this map is the only place that pairs a route with
// its content and its scroll-tracker ids.
const registry: Record<
  Slug,
  { Component: ComponentType; sectionIds: SectionEntry[] }
> = {
  kith: { Component: KithProject, sectionIds: kithSectionIds },
  studyhub: { Component: StudyHubProject, sectionIds: studyHubSectionIds },
  foundersales: {
    Component: FounderSalesProject,
    sectionIds: founderSalesSectionIds,
  },
};

function isSlug(value: string | undefined): value is Slug {
  return value !== undefined && value in registry;
}

export default function ProjectPage() {
  const { slug } = useParams();

  // Hooks must run unconditionally, so title handling tolerates a bad slug.
  const summary = projects.find((p) => p.slug === slug);
  useDocumentTitle(
    summary
      ? `${summary.title} — ${identity.fullName}`
      : `${identity.fullName} — Software Engineer`,
  );

  // Contact renders below every case study, so the header tracks it too.
  // Without this the label would stay on the last project section.
  // Memoized because LedgerRule re-binds its scroll listener whenever this
  // array's identity changes.
  const sectionIds = useMemo<SectionEntry[]>(
    () =>
      isSlug(slug)
        ? [...registry[slug].sectionIds, { id: "contact", label: "§00 CONTACT" }]
        : [],
    [slug],
  );

  if (!isSlug(slug)) return <Navigate to="/" replace />;

  const { Component } = registry[slug];

  const position = projects.findIndex((p) => p.slug === slug);
  const next = projects[(position + 1) % projects.length];

  return (
    <div className="min-h-screen bg-paper font-body text-ink">
      <LedgerRule
        sectionIds={sectionIds}
        githubHref={contact.github}
        statementLine={{
          primary: identity.handle.toUpperCase(),
          secondary: identity.title.toUpperCase(),
          tertiary: identity.location.toUpperCase(),
        }}
      />

      {/* Back link sits under the fixed header (h-11). Each project's own
          hero already has top padding, so this is a slim strip rather than
          extra whitespace. */}
      <nav
        aria-label="Case study navigation"
        className="border-b border-ledger-line bg-paper pt-11"
      >
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wide text-slate transition-colors hover:text-ink"
          >
            <span aria-hidden="true">&larr;</span> Back to portfolio
          </Link>
        </div>
      </nav>

      <main>
        <Component />

        {/* Next-project footer. Replaces the "§0N NEXT PROJECT" dividers,
            which marked a seam between stacked projects that no longer
            exists. */}
        <section
          aria-label="Continue exploring"
          className="border-t border-ledger-line bg-white py-14 sm:py-16"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-3">
                NEXT CASE STUDY &middot; {next.index}
              </p>
              <Link
                to={`/projects/${next.slug}`}
                className="group inline-block font-display text-3xl font-medium leading-tight text-ink sm:text-4xl"
              >
                {next.title}{" "}
                <span
                  aria-hidden="true"
                  className="inline-block font-mono text-2xl text-confirmed transition-transform group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </Link>
            </div>
            <Link
              to="/#projects"
              className="font-mono text-xs tracking-wide text-confirmed transition-opacity hover:opacity-70"
            >
              &larr; All projects
            </Link>
          </div>
        </section>
      </main>

      <Contact />
    </div>
  );
}
