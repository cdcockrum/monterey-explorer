import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
};

export function PageSection({
  eyebrow,
  title,
  description,
  children,
  className,
  dark = true,
}: PageSectionProps) {
  return (
    <section
      className={cn(
        dark
          ? "bg-slate-950 text-white"
          : "bg-white text-slate-900",
        "px-6 py-28",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          {eyebrow && (
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              {eyebrow}
            </div>
          )}

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            {title}
          </h2>

          {description && (
            <p className="mt-6 text-lg leading-8 text-slate-400">
              {description}
            </p>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}
