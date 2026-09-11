import { useState } from "react";
import Lightbox from "./Lightbox";

interface DiagramFigureProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

// Diagrams are dense and wide at native resolution — shrinking them to a
// mobile viewport makes their labels illegible. Strategy: render at a fixed
// minimum width inside a horizontally-scrollable strip (fast-skim default),
// and make the whole thing tappable to open the lightbox at native
// resolution as the always-legible fallback.
export default function DiagramFigure({
  src,
  alt,
  caption,
  className = "",
}: DiagramFigureProps) {
  const [open, setOpen] = useState(false);

  return (
    <figure className={className}>
      <div className="relative">
        <div className="diagram-scroll overflow-x-auto rounded-sm border border-ledger-line bg-white">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group block"
            aria-label={`Enlarge diagram: ${alt}`}
          >
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="h-auto min-w-[720px] object-contain sm:min-w-0 sm:w-full"
            />
          </button>
        </div>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-r from-transparent via-transparent to-paper/60 sm:hidden"
        />
        <span className="mt-2 block font-mono text-[10px] tracking-wide text-slate-soft sm:hidden">
          SCROLL TO VIEW &middot; TAP TO ENLARGE
        </span>
      </div>
      {caption && (
        <figcaption className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-slate">
          {caption}
        </figcaption>
      )}
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </figure>
  );
}
