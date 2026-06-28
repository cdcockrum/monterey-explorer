import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getMission, type Mission } from "@/data/missions";
import {
  MissionChecklist,
  MissionHero,
  OceanInsight,
} from "@/components/design";

export const Route = createFileRoute("/missions/$slug")({
  loader: ({ params }): { mission: Mission } => {
    const mission = getMission(params.slug);

    if (!mission) {
      throw notFound();
    }

    return { mission };
  },
  component: MissionDetail,
});

function MissionDetail() {
  const { mission } = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <MissionHero
        title={mission.title}
        category={mission.category}
        objective={mission.objective}
        duration={mission.duration}
        difficulty={mission.difficulty}
        image={mission.image}
      >
        <div className="mt-10 flex flex-wrap gap-4">
      
          <div className="rounded-2xl bg-black/35 backdrop-blur-md px-6 py-4 border border-white/10">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
              Mission Time
            </p>
            <p className="mt-1 text-xl font-semibold">
              {mission.duration}
            </p>
          </div>
      
          <div className="rounded-2xl bg-black/35 backdrop-blur-md px-6 py-4 border border-white/10">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
              Difficulty
            </p>
            <p className="mt-1 text-xl font-semibold">
              {mission.difficulty}
            </p>
          </div>
      
          <div className="rounded-2xl bg-black/35 backdrop-blur-md px-6 py-4 border border-white/10">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
              Category
            </p>
            <p className="mt-1 text-xl font-semibold">
              {mission.category}
            </p>
          </div>
      
        </div>
      </MissionHero>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Link
          to="/missions"
          className="inline-flex items-center gap-2 text-cyan-300 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Missions
        </Link>

        <section
          id="mission-progress"
          className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <h2 className="text-3xl font-bold">Mission Progress</h2>

          <div className="mt-8">
            <MissionChecklist
              steps={mission.steps}
              missionSlug={mission.slug}
            />
          </div>
        </section>

        <section className="mt-10">
          <OceanInsight>{mission.completionMessage}</OceanInsight>
        </section>

        {mission.animalSlug && (
          <div className="mt-10">
            <Link
              to="/animals/$slug"
              params={{ slug: mission.animalSlug }}
              className="inline-flex items-center rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              View Related Animal
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
