import { Link } from "react-router-dom";
import type { ProjectSummary } from "../content/projectsIndexContent";

interface ProjectCardProps {
  project: ProjectSummary;
}

// One card, two layouts. The featured variant (Kith) puts the screenshot
// beside the text on large screens; the compact variant stacks everything.
// Both share the same anatomy so the three projects read as a set, but the
// featured one is deliberately larger so they don't all carry equal weight.
export default function ProjectCard({ project }: ProjectCardProps) {
  const featured = project.featured;
  const caseStudyHref = `/projects/${project.slug}`;

  return (
    <article
      aria-labelledby={`project-${project.slug}-title`}
      className={`border border-ledger-line bg-white ${
        featured ? "lg:grid lg:grid-cols-[1.15fr_1fr]" : "flex flex-col"
      }`}
    >
      {/* screenshot */}
      <Link
        to={caseStudyHref}
        tabIndex={-1}
        aria-hidden="true"
        className={`group relative block overflow-hidden border-ledger-line bg-paper ${
          featured ? "border-b lg:border-b-0 lg:border-r" : "border-b"
        }`}
      >
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className={`w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] ${
            featured ? "aspect-[16/10] lg:aspect-auto lg:h-full" : "aspect-[16/10]"
          }`}
        />
      </Link>

      {/* text */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-baseline justify-between gap-4">
          <p className="eyebrow">{project.eyebrow}</p>
          <span className="stat-figure text-xs text-slate-soft">
            {project.index}
          </span>
        </div>

        <h3
          id={`project-${project.slug}-title`}
          className={`mt-3 font-display font-medium leading-tight text-ink ${
            featured ? "text-3xl sm:text-4xl" : "text-2xl"
          }`}
        >
          {project.title}
        </h3>

        {/* Engineering-framed subtitle, right under the project name. */}
        <p
          className={`mt-1.5 font-mono tracking-wide text-slate ${
            featured ? "text-sm sm:text-base" : "text-xs"
          }`}
        >
          {project.engineeringSubtitle}
        </p>

        {/* The hook sentence. This is what a backend/distributed-systems
            reader scans for first — specific mechanisms, not a product
            pitch. Leads with "How I..." per project. */}
        <p
          className={`mt-3 leading-relaxed text-ink ${
            featured ? "text-base sm:text-lg" : "text-sm"
          }`}
        >
          {project.tagline}
        </p>

        {/* Product-framed summary, secondary. Still true, just not first. */}
        <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-[15px]">
          {project.summary}
        </p>

        {project.status && (
          <div className="mt-5 border-l-2 border-pending/40 bg-pending-soft/50 py-2.5 pl-4 pr-3">
            <p className="eyebrow mb-1 !text-pending">Status</p>
            <p className="text-xs leading-relaxed text-ink/80 sm:text-sm">
              {project.status}
              {project.statusDetail && (
                <span className="mt-1 block text-ink/70">
                  {project.statusDetail}
                </span>
              )}
            </p>
          </div>
        )}

        <ul className="mt-5 space-y-2.5">
          {project.highlights.map((h) => (
            <li
              key={h.source}
              className="flex gap-3 text-sm leading-relaxed text-ink/80"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 shrink-0 font-mono text-slate-soft"
              >
                &middot;
              </span>
              <span>{h.text}</span>
            </li>
          ))}
        </ul>

        {/* stats */}
        <dl className="mt-6 grid grid-cols-3 gap-px overflow-hidden border border-ledger-line bg-ledger-line">
          {project.stats.map((s) => (
            <div key={s.source} className="flex flex-col gap-1 bg-paper p-3 sm:p-4">
              <dd className="stat-figure order-1 text-xl font-medium text-ink sm:text-2xl">
                {s.value}
              </dd>
              <dt className="order-2 text-[11px] leading-snug text-slate">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>

        {/* stack */}
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-ledger-line px-2.5 py-0.5 font-mono text-[11px] tracking-wide text-slate"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* actions — pushed to the bottom so cards of unequal text length
            still align their buttons in the two-column grid */}
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
          <Link
            to={caseStudyHref}
            className="inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          >
            View case study <span aria-hidden="true">&rarr;</span>
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/50"
          >
            GitHub
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/50"
            >
              Live demo
            </a>
          )}
          {project.ciBadge && project.ciWorkflow && (
            <a
              href={project.ciWorkflow}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} CI build status`}
              className="inline-block"
            >
              <img src={project.ciBadge} alt="" className="h-5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
