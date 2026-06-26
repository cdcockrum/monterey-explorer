import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Clock, ArrowRight } from "lucide-react";
import { missions } from "@/data/missions";
import { GlassCard } from "@/components/design";

export const Route = createFileRoute("/missions")({
  component: MissionsPage,
});

function MissionsPage() {
  const featured = missions[0];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Ocean Missions
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight md:text-7xl">
            Explore Like a Marine Biologist
          </h1>

          <p className="mt-6 text-xl leading-9 text-slate-300">
            Missions transform your visit into guided observation. Instead of
            simply reading signs, you'll investigate animal behavior and
            discover the science behind Monterey Bay's remarkable ecosystem.
          </p>
        </div>

        {featured && (
          <GlassCard className="mt-16 p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  Featured Mission
                </p>

                <h2 className="mt-3 text-4xl font-bold">
                  {featured.title}
                </h2>

                <p className="mt-4 text-slate-300">
                  {featured.objective}
                </p>

                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    <Clock className="mr-2 inline h-4 w-4 text-cyan-300" />
                    {featured.duration}
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    <Compass className="mr-2 inline h-4 w-4 text-cyan-300" />
                    {featured.difficulty}
                  </span>
                </div>
              </div>

              <a
                href={`/missions/${featured.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Start Mission
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </GlassCard>
        )}

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {missions.map((mission) => (
            <GlassCard key={mission.slug} className="p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                {mission.category}
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {mission.title}
              </h3>

              <p className="mt-3 text-slate-300">
                {mission.objective}
              </p>

              <a
                href={`/missions/${mission.slug}`}
                className="mt-6 inline-flex items-center font-semibold text-cyan-300 hover:underline"
              >
                Begin Mission
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </GlassCard>
          ))}
        </div>
      </section>
    </main>
  );
}
