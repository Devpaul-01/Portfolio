import { useEffect, useState } from "react";

interface LedgerRuleProps {
  sectionIds: { id: string; label: string }[];
  githubHref: string;
  statementLine: { primary: string; secondary: string; tertiary?: string };
}

// The page's signature element: a fixed statement-header bar styled like a
// running ledger line, tracking which section is in view and updating its
// label live. Quiet everywhere else on the page; bold here.
export default function LedgerRule({
  sectionIds,
  githubHref,
  statementLine,
}: LedgerRuleProps) {
  const [activeLabel, setActiveLabel] = useState(sectionIds[0]?.label ?? "");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const elements = sectionIds
      .map(({ id, label }) => {
        const el = document.getElementById(id);
        return el ? { el, label } : null;
      })
      .filter((v): v is { el: HTMLElement; label: string } => v !== null);

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // pick the last section whose top has scrolled past a fixed offset
      let current = elements[0]?.label ?? "";
      for (const { el, label } of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) current = label;
      }
      setActiveLabel(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "border-ledger-line bg-paper/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-11 max-w-6xl items-center justify-between overflow-hidden px-4 sm:px-6 lg:px-8">
        <span className="truncate font-mono text-[11px] tracking-wide text-ink sm:text-xs">
          <span className="font-medium">{statementLine.primary}</span>
          <span className="mx-2 hidden text-slate-soft sm:inline">&middot;</span>
          <span className="hidden text-slate sm:inline">{statementLine.secondary}</span>
          {statementLine.tertiary && (
            <>
              <span className="mx-2 hidden text-slate-soft lg:inline">&middot;</span>
              <span className="hidden text-slate lg:inline">{statementLine.tertiary}</span>
            </>
          )}
        </span>
        <div className="flex items-center gap-4">
          <span className="truncate font-mono text-[11px] tracking-wide text-confirmed sm:text-xs">
            {activeLabel}
          </span>
          <a
            href={githubHref}
            target="_blank"
            rel="noreferrer"
            className="hidden shrink-0 rounded-sm border border-ink/15 px-2.5 py-1 font-mono text-[10px] tracking-wide text-ink transition-colors hover:border-ink/40 sm:inline-block"
          >
            GITHUB
          </a>
        </div>
      </div>
    </div>
  );
}
