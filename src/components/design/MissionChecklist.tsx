import { useState } from "react";


export function MissionChecklist({
  steps,
}: {
  steps: { title: string; description: string }[];
}) {
  const [completed, setCompleted] = useState<boolean[]>(
    steps.map(() => false)
  );

  const toggle = (index: number) => {
    setCompleted((current) =>
      current.map((value, i) => (i === index ? !value : value))
    );
  };

  const progress = completed.filter(Boolean).length;

  return (
    <>
      <div className="mb-8">
        <div className="text-sm uppercase tracking-[0.25em] text-cyan-300">
          Progress
        </div>

        <div className="mt-2 text-3xl font-bold">
          {progress} / {steps.length}
        </div>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <button
            key={step.title}
            onClick={() => toggle(index)}
            className="flex w-full items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-left transition hover:border-cyan-300/30"
          >
            {completed[index] ? (
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-cyan-300" />
            ) : (
              <Circle className="mt-1 h-6 w-6 shrink-0 text-slate-500" />
            )}

            <div>
              <h3 className="font-semibold">
                {step.title}
              </h3>

              <p className="mt-2 text-slate-300">
                {step.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
