import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  image: string;
  children?: ReactNode;
  className?: string;
};

export function Hero({
  eyebrow,
  title,
  description,
  image,
  children,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative isolate flex min-h-[92vh] items-end overflow-hidden bg-slate-950 text-white",
        className
      )}
    >
      <div className="absolute inset-0 -z-10">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-slate-950/60 to-slate-950" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pb-32 pt-40 md:pb-40">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              {eyebrow}
            </p>
          )}

          <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            {title}
          </h1>

          {description && (
            <p className="mt-7 max-w-2xl text-xl leading-9 text-white/90">
              {description}
            </p>
          )}

          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}
