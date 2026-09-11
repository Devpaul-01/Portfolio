import { closingContact, contact, identity } from "../content/portfolioContent";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="eyebrow mb-4">{closingContact.eyebrow}</p>
        <h2 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
          {closingContact.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate sm:text-base">
          {closingContact.body}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          >
            {contact.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/50"
          >
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/50"
          >
            GitHub
          </a>
          {contact.resumeAvailable ? (
            <a
              href={contact.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/50"
            >
              Resume
            </a>
          ) : (
            <span
              aria-disabled="true"
              title="Resume coming soon"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-sm border border-dashed border-ink/20 px-6 py-3 font-mono text-xs tracking-wide text-slate-soft"
            >
              Resume &mdash; coming soon
            </span>
          )}
        </div>

        <p className="mt-12 font-mono text-[11px] tracking-wide text-slate-soft">
          {identity.fullName} &middot; {identity.location}
        </p>
      </div>
    </section>
  );
}
