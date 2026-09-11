interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  heading,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="max-w-3xl font-display text-3xl font-medium leading-[1.15] text-ink sm:text-4xl">
        {heading}
      </h2>
    </div>
  );
}
