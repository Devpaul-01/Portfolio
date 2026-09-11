import { useEffect, useRef } from "react";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        ref={closeBtnRef}
        type="button"
        onClick={onClose}
        aria-label="Close enlarged image"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 text-paper/80 transition-colors hover:border-paper/60 hover:text-paper sm:right-6 sm:top-6"
      >
        <span aria-hidden="true" className="text-xl leading-none">
          &times;
        </span>
      </button>
      <div
        className="max-h-full max-w-full overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="mx-auto max-h-[88vh] w-auto rounded-sm shadow-2xl"
        />
      </div>
      <p className="absolute bottom-4 left-1/2 hidden max-w-xl -translate-x-1/2 px-4 text-center font-mono text-[11px] tracking-wide text-paper/50 sm:block">
        Press Esc or tap outside the image to close
      </p>
    </div>
  );
}
