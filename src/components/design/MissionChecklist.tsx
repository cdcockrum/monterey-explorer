import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Circle, Trophy } from "lucide-react";

export function MissionChecklist({
  steps,
}: {
  steps: { title: string; description: string }[];
}) {
  const storageKey = `mission-${steps[0]?.title}`;

  const [completed, setCompleted] = useState<boolean[]>(() => {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      return JSON.parse(saved);
    }
  
    return steps.map(() => false);
  });
  
    useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify(completed)
    );
  }, [completed]);

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

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              Progress
            </div>
            <div className="mt-2 text-3xl font-bold">
              {progress} / {steps.length}
            </div>
          </div>

          <div className="text-right text-sm text-slate-400">
            {percent}% complete
          </div>
        </div>

        <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-cyan-300 transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <button
            key={step.title}
            onClick={() => toggle(index)}
            className={`flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition ${
              completed[index]
                ? "border-cyan-300/40 bg-cyan-300/10"
                : "border-white/10 bg-slate-900/60 hover:border-cyan-300/30"
            }`}
          >
            {completed[index] ? (
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-cyan-300" />
            ) : (
              <Circle className="mt-1 h-6 w-6 shrink-0 text-slate-500" />
            )}

            <div>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="mt-2 text-slate-300">{step.description}</p>
            </div>
          </button>
        ))}
      </div>

      {isComplete && (
        <div className="mt-8 rounded-3xl border border-cyan-300/30 bg-cyan-300/10 p-6">
          <Trophy className="h-8 w-8 text-cyan-300" />
          <h3 className="mt-4 text-2xl font-bold">Mission Complete</h3>
          <p className="mt-3 text-slate-300">
            You completed every observation step and earned the Sea Otter
            Detective badge.
          </p>
        </div>
      )}
    </div>
  );
}
