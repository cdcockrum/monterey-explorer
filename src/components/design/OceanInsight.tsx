import { Waves } from "lucide-react";

export function OceanInsight({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-950/60 to-slate-900 p-8">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-cyan-300/15 p-3">
          <Waves className="h-6 w-6 text-cyan-300" />
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Ocean Insight
          </div>

          <div className="text-sm text-slate-400">
            One memorable thing to take with you.
          </div>
        </div>
      </div>

      <p className="mt-6 text-lg leading-8 text-slate-100">
        {children}
      </p>
    </div>
  );
}
