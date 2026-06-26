import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Compass, Star, Trophy } from "lucide-react";
import { achievements } from "@/data/achievements";

export const Route = createFileRoute("/passport")({
  component: PassportPage,
});

function PassportPage() {
  const completedMissions = Object.values(achievements);
  const totalXp = completedMissions.reduce((sum, item) => sum + item.xp, 0);
  const level = Math.max(1, Math.floor(totalXp / 25) + 1);
  const nextLevelXp = level * 25;
  const progressPercent = Math.min(100, Math.round((totalXp / nextLevelXp) * 100));

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Explorer Passport
        </p>

        <h1 className="mt-3 text-5xl font-bold tracking-tight md:text-7xl">
          Your Ocean Journey
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-300">
          Track completed missions, earned badges, and your progress as a Monterey Bay Explorer.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-8">
            <Trophy className="h-10 w-10 text-cyan-300" />

            <h2 className="mt-5 text-3xl font-bold">
              Explorer Level {level}
            </h2>

            <p className="mt-3 text-slate-300">
              {totalXp} total XP earned
            </p>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-cyan-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <p className="mt-3 text-sm text-slate-400">
              {progressPercent}% toward next level
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <Award className="h-10 w-10 text-cyan-300" />

            <h2 className="mt-5 text-3xl font-bold">
              Badges Earned
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {completedMissions.map((achievement) => (
                <div
                  key={achievement.id}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
                >
                  <div className="text-5xl">{achievement.badge}</div>
                  <h3 className="mt-4 text-xl font-bold">{achievement.title}</h3>
                  <p className="mt-2 text-cyan-300">+{achievement.xp} XP</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Link
            to="/missions"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-300/40"
          >
            <Compass className="h-8 w-8 text-cyan-300" />
            <h2 className="mt-4 text-2xl font-bold">Continue Missions</h2>
            <p className="mt-2 text-slate-300">
              Complete more guided observations around the aquarium.
            </p>
          </Link>

          <Link
            to="/animals"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-300/40"
          >
            <Star className="h-8 w-8 text-cyan-300" />
            <h2 className="mt-4 text-2xl font-bold">Explore Animals</h2>
            <p className="mt-2 text-slate-300">
              Learn more about the species behind your missions.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
