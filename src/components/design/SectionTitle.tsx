export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}
