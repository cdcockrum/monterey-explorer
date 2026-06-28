import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Circle, Trophy } from "lucide-react";
import { achievements } from "@/data/achievements";
import { completeMission } from "@/lib/passport";

export function MissionChecklist({
  steps,
  missionSlug,
}: {
  steps: { title: string; description: string }[];
  missionSlug: string;
}) {
  const storageKey = `mission-${missionSlug}`;

  const [completed, setCompleted] = useState<boolean[]>(() => {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      return JSON.parse(saved);
    }

    return steps.map(() => false);
  });

  const toggle = (index: number) => {
    setCompleted((current) =>
      current.map((value, i) => (i === index ? !value : value))
    );
  };

  const progress = completed.filter(Boolean).length;

  const percent = useMemo(
    () => Math.round((progress / steps.length) * 100),
    [progress, steps.length]
  );

  const isComplete = progress === steps.length;
  const reward = achievements[missionSlug];

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(completed));

    if (isComplete) {
      completeMission(missionSlug);
    }
  }, [completed, isComplete, missionSlug, storageKey]);

  return (
    <div>
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Mission Progress
            </p>

            <p className="mt-2 text-4xl font-bold">
              {progress} / {steps.length}
            </p>
          </div>

          <p className="text-sm font-semibold text-cyan-300">
            {percent}% Complete
          </p>
        </div>

        <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 transition-all duration-700"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      <div className="mt-8 space-y-5">
        {steps.map((step, index) => {
          const checked = completed[index];

          return (
            <button
              key={step.title}
              onClick={() => toggle(index)}
              className={`group flex w-full items-start gap-5 rounded-3xl border p-6 text-left transition-all duration-300 ${
                checked
                  ? "border-cyan-300/40 bg-cyan-300/10 shadow-lg shadow-cyan-500/10"
                  : "border-white/10 bg-slate-900/70 hover:-translate-y-1 hover:border-cyan-300/40"
              }`}
            >
              <div className="mt-1">
                {checked ? (
                  <CheckCircle2 className="h-7 w-7 text-cyan-300" />
                ) : (
                  <Circle className="h-7 w-7 text-slate-500 transition group-hover:text-cyan-300" />
                )}
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Step {index + 1}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {step.description}
                </p>

                <p className="mt-5 text-sm font-semibold text-cyan-300">
                  {checked ? "✓ Completed" : "Mark Complete →"}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {isComplete && reward && (
        <div className="mt-10 rounded-3xl border border-cyan-300/30 bg-gradient-to-br from-cyan-950/80 to-slate-900 p-10 text-center">
          <Trophy className="mx-auto h-12 w-12 text-cyan-300" />

          <h3 className="mt-6 text-4xl font-bold">
            Mission Complete!
          </h3>

          <div className="mt-6 text-7xl">
            {reward.badge}
          </div>

          <p className="mt-5 text-2xl font-semibold">
            {reward.title}
          </p>

          <p className="mt-2 text-xl font-bold text-cyan-300">
            +{reward.xp} XP Earned
          </p>

          <p className="mx-auto mt-6 max-w-xl text-slate-300">
            Outstanding observation. Your Explorer Passport has been updated.
          </p>
        </div>
      )}
    </div>
  );
}
