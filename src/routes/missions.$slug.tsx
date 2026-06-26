import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Circle, Clock, Compass } from "lucide-react";
import { getMission, type Mission } from "@/data/missions";
import { CTAButton, OceanInsight } from "@/components/design";

export const Route = createFileRoute("/missions/$slug")({
  loader: ({ params }): { mission: Mission } => {
    const mission = getMission(params.slug);
    if (!mission) throw notFound();
    return { mission };
  },
  component: MissionDetail,
});

function MissionDetail() {
  const { mission } = Route.useLoaderData() as { mission: Mission };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Link
          to="/missions"
          className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to missions
        </Link>

        <div className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            {mission.category}
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight md:text-7xl">
            {mission.title}
          </h1>
          <p className="mt-6 text-xl leading-9 text-slate-300">
            {mission.objective}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
            <Clock className="mr-2 inline h-4 w-4 text-cyan-300" />
            {mission.duration}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
            <Compass className="mr-2 inline h-4 w-4 text-cyan-300" />
            {mission.difficulty}
          </span>
        </div>

        <section className="mt-14 rounded-3xl border border-white/10 bg-white/[0.05] p-6 md:p-8">
          <h2 className="text-3xl font-bold">Mission Steps</h2>

          <div className="mt-8 space-y-5">
            {mission.steps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5"
              >
                {index === 0 ? (
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-cyan-300" />
                ) : (
                  <Circle className="mt-1 h-6 w-6 shrink-0 text-slate-500" />
                )}

                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 leading-7 text-slate-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <OceanInsight>{mission.completionMessage}</OceanInsight>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          {mission.animalSlug && (
            <CTAButton to={`/animals/${mission.animalSlug}`}>
              View Related Animal
            </CTAButton>
          )}

          <CTAButton to="/missions" variant="secondary">
            Choose Another Mission
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
