import { ReactNode } from "react";
import { Clock, Compass } from "lucide-react";

type MissionHeroProps = {
  title: string;
  category: string;
  objective: string;
  duration: string;
  difficulty: string;
  image?: string;
  children?: ReactNode;
};

export function MissionHero({
  title,
  category,
  objective,
  duration,
  difficulty,
  image,
  children,
}: MissionHeroProps) {
  return (
    <section className="relative isolate flex min-h-[72vh] items-end overflow-hidden bg-slate-950 text-white">
      {image && (
        <div className="absolute inset-0 -z-10">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/25 via-slate-950/50 to-slate-950" />

      <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-36">
        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            {category}
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            {title}
          </h1>

          <p className="mt-6 text-xl leading-9 text-white/90">
            {objective}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur">
              <Clock className="h-4 w-4 text-cyan-300" />
              {duration}
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur">
              <Compass className="h-4 w-4 text-cyan-300" />
              {difficulty}
            </div>

          </div>

          {children && (
            <div className="mt-10">
              {children}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
