import { createFileRoute, Link } from "@tanstack/react-router";
import { Binoculars, Clock, Compass, Sparkles } from "lucide-react";
import { missions } from "@/data/missions";
import { CTAButton, GlassCard } from "@/components/design";

export const Route = createFileRoute("/missions")({
  head: () => ({
    meta: [
      { title: "Ocean Missions — Monterey Bay Explorer" },
      {
        name: "description",
        content:
          "Guided aquarium missions that encourage observation, learning, and conservation awareness.",
      },
    ],
  }),
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
            Explore like a marine biologist.
          </h1>

          <p className="mt-6 text-xl leading-9 text-slate-300">
            Missions turn your visit into guided observation. Instead of only
            reading facts, you'll watch animal behavior, connect species to
            ecosystems, and leave with a deeper understanding of the ocean.
          </p>
        </div>

        <section className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-8 md:p-10">
            <div className="flex items-center gap-3">
              <Sparkles className="h-7 w-7 text-cyan-300" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Featured Mission
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-bold">
              {featured.title}
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {featured.objective}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-sm">
                {featured.category}
              </span>

              <span className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-sm">
                {featured.duration}
              </span>

              <span className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-sm">
                {featured.difficulty}
              </span>
            </div>

            <div className="mt-8">
              <Link
                to="/missions/$slug"
                params={{ slug: featured.slug }}
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Start Mission
              </Link>
            </div>
          </div>

          <GlassCard>
            <Binoculars className="h-7 w-7 text-cyan-300" />

            <h3 className="mt-5 text-2xl font-bold">
              How missions work
            </h3>

            <div className="mt-6 space-y-4 text-slate-300">
              <p>1. Choose a mission based on your interests.</p>
              <p>2. Visit the suggested exhibit.</p>
              <p>3. Complete simple observation steps.</p>
              <p>4. Leave with one memorable ocean insight.</p>
            </div>
          </GlassCard>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold">
            Choose a Mission
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {missions.map((mission) => (
              <Link
                key={mission.id}
                to="/missions/$slug"
                params={{ slug: mission.slug }}
                className="group rounded-3xl border border-white/10 bg-white/[0.05] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.08]"
              >
                <Compass className="h-7 w-7 text-cyan-300" />

                <h3 className="mt-5 text-2xl font-bold">
                  {mission.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {mission.objective}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-cyan-300">
                  <Clock className="h-4 w-4" />
                  {mission.duration}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
