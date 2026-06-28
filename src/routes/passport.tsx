import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Compass, Star, Trophy } from "lucide-react";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";
import { getPassportProgress } from "@/lib/passport";

export const Route = createFileRoute("/passport")({
  component: PassportPage,
});

function PassportPage() {
  const passport = useMemo(() => getPassportProgress(), []);

  const completedMissions = passport.completedMissions
    .map((slug) => achievements[slug])
    .filter(Boolean);

  const totalXp = passport.xp;
  const level = Math.max(1, Math.floor(totalXp / 25) + 1);
  const nextLevelXp = level * 25;
  const progressPercent = Math.min(
    100,
    Math.round((totalXp / nextLevelXp) * 100)
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
            Monterey Bay Aquarium
          </p>

          <h1 className="mt-4 text-6xl font-bold">Explorer Passport</h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Complete missions throughout the aquarium, earn badges, and advance
            your Explorer Level while learning about Monterey Bay&apos;s
            incredible marine life.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Missions Completed", completedMissions.length],
            ["Total XP", totalXp],
            ["Badges", completedMissions.length],
            ["Explorer Rank", `Level ${level}`],
          ].map(([label, value], index) => (
            <motion.div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="text-4xl font-bold text-cyan-300">{value}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.2em] text-white/60">
                {label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 via-slate-900 to-slate-950 p-8 shadow-2xl shadow-cyan-950/40">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

            <Trophy className="relative h-12 w-12 text-cyan-300" />

            <h2 className="relative mt-5 text-3xl font-bold">
              Explorer Level {level}
            </h2>

            <p className="relative mt-3 text-slate-300">
              {totalXp} total XP earned
            </p>

            <div className="relative mt-6 h-3 overflow-hidden rounded-full bg-slate-800">
              <motion.div
                className="h-full rounded-full bg-cyan-300"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{
                  duration: 1.4,
                  ease: "easeOut",
                }}
              />
            </div>

            <p className="relative mt-3 text-sm text-slate-400">
              {progressPercent}% toward next level
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <Award className="h-10 w-10 text-cyan-300" />

            <h2 className="mt-5 text-3xl font-bold">Badges Earned</h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {completedMissions.length > 0 ? (
                completedMissions.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-xl hover:shadow-cyan-950/40"
                    initial={{
                      opacity: 0,
                      y: 20,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.45,
                    }}
                  >
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl transition group-hover:bg-cyan-300/20" />

                    <motion.div
                      className="relative text-6xl"
                      whileHover={{
                        scale: 1.2,
                        rotate: 8,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                      }}
                    >
                      {achievement.badge}
                    </motion.div>

                    <h3 className="relative mt-4 text-xl font-bold">
                      {achievement.title}
                    </h3>

                    <div className="relative mt-3 inline-flex rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
                      Rare
                    </div>

                    <p className="relative mt-3 text-cyan-300">
                      +{achievement.xp} XP
                    </p>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full rounded-2xl border border-dashed border-white/10 p-8 text-center text-slate-400">
                  <p className="text-lg font-semibold">
                    No badges earned yet.
                  </p>

                  <p className="mt-3">
                    Complete your first Ocean Mission to begin your Explorer
                    Passport.
                  </p>
                </div>
              )}
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