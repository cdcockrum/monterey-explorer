import { ReactNode } from "react";
import { Clock, Compass, Star } from "lucide-react";

type MissionHeroProps = {
  title: string;
  category: string;
  objective: string;
  duration: string;
  difficulty: string;
  image?: string;
  xp?: number;
  children?: ReactNode;
};

export function MissionHero({
  title,
  category,
  objective,
  duration,
  difficulty,
  image,
  xp = 25,
  children,
}: MissionHeroProps) {
  return (
    <section className="relative isolate flex min-h-[78vh] items-end overflow-hidden bg-slate-950 text-white">
      {image ? (
        <div className="absolute inset-0 -z-10">
          <img
            src={image}
            alt=""
            className="h-full w-full scale-105 object-cover animate-[slowZoom_18s_ease-in-out_infinite_alternate]"
          />
        </div>
      ) : (
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950" />
      )}

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-slate-950/45 to-slate-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_25%,rgba(34,211,238,0.28),transparent_35%)]" />

      <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-40">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Ocean Mission
          </p>

          <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur">
            {category}
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-white/90">
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

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur">
              <Star className="h-4 w-4 text-cyan-300" />
              +{xp} XP
            </div>
          </div>

          <a
            href="#mission-progress"
            className="mt-10 inline-flex rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Begin Mission ↓
          </a>

          {children && <div className="mt-10">{children}</div>}
        </div>
      </div>
    </section>
  );
}
