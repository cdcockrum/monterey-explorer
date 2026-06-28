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
        <img
          src={image}
          alt=""
          className="h-full w-full scale-105 object-cover animate-[slowZoom_22s_ease-in-out_infinite_alternate]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-slate-950/45 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(34,211,238,0.24),transparent_38%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(255,255,255,0.12),transparent_30%)]" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-[12%] top-[25%] h-1 w-1 rounded-full bg-cyan-200" />
        <div className="absolute left-[45%] top-[18%] h-1.5 w-1.5 rounded-full bg-white" />
        <div className="absolute left-[72%] top-[34%] h-1 w-1 rounded-full bg-cyan-100" />
        <div className="absolute left-[83%] top-[58%] h-1.5 w-1.5 rounded-full bg-white" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pb-32 pt-40 md:pb-40">
        <div className="max-w-4xl animate-[fadeUp_900ms_ease-out_both]">
          {eyebrow && (
            <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-md">
              {eyebrow}
            </p>
          )}

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            {title}
          </h1>

          {description && (
            <p className="mt-7 max-w-2xl text-xl leading-9 text-white/90">
              {description}
            </p>
          )}

          {children && (
            <div className="mt-10 flex flex-wrap gap-3 animate-[fadeUp_1100ms_ease-out_both]">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}