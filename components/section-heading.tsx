type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {label ? (
        <p className="mb-3 text-sm font-medium text-accent-700">{label}</p>
      ) : null}
      <h2 className="text-balance font-display text-3xl font-semibold leading-tight text-ink-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-8 text-ink-500">{description}</p>
      ) : null}
    </div>
  );
}
