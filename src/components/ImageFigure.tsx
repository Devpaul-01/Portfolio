import { useState } from "react";
import Lightbox from "./Lightbox";

interface ImageFigureProps {
  src: string;
  alt: string;
  caption?: string;
  variant?: "hero" | "compact";
  className?: string;
}

export default function ImageFigure({
  src,
  alt,
  caption,
  variant = "hero",
  className = "",
}: ImageFigureProps) {
  const [open, setOpen] = useState(false);

  return (
    <figure className={className}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full overflow-hidden rounded-sm border border-ledger-line bg-white text-left"
        aria-label={`Enlarge: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={
            variant === "hero"
              ? "w-full object-contain"
              : "w-full object-contain"
          }
        />
        <span className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-ink/10 bg-paper/90 px-2.5 py-1 font-mono text-[10px] tracking-wide text-slate opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          ENLARGE
        </span>
      </button>
      {caption && (
        <figcaption className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-slate">
          {caption}
        </figcaption>
      )}
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </figure>
  );
}
