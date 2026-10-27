import { useId, type ReactNode } from "react";

interface InlineDiagramProps {
  title: string;
  desc: string;
  viewBox: string;
  minWidth?: number;
  caption?: string;
  className?: string;
  children: ReactNode;
}

// Code-drawn diagrams use the site's own colour tokens (Tailwind classes on SVG
// nodes), stay sharp at any zoom, and carry a real title/description for screen
// readers. Same mobile strategy as DiagramFigure: keep a readable minimum width and
// scroll horizontally rather than shrinking labels.
export default function InlineDiagram({
  title,
  desc,
  viewBox,
  minWidth = 720,
  caption,
  className = "",
  children,
}: InlineDiagramProps) {
  const uid = useId();
  return (
    <figure className={className}>
      <div className="diagram-scroll overflow-x-auto rounded-sm border border-ledger-line bg-white">
        <svg
          viewBox={viewBox}
          role="img"
          aria-labelledby={`${uid}-t ${uid}-d`}
          className="block h-auto w-full"
          style={{ minWidth }}
        >
          <title id={`${uid}-t`}>{title}</title>
          <desc id={`${uid}-d`}>{desc}</desc>
          <defs>
            <marker id="arrow-marker" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 z" className="fill-slate" />
            </marker>
          </defs>
          {children}
        </svg>
      </div>
      <span className="mt-2 block font-mono text-[10px] tracking-wide text-slate-soft sm:hidden">
        SCROLL SIDEWAYS TO VIEW
      </span>
      {caption && (
        <figcaption className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">{caption}</figcaption>
      )}
    </figure>
  );
}
