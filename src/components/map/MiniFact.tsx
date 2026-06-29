import type { ReactNode } from "react";

type MiniFactProps = {
  icon: ReactNode;
  label: string;
  value: string;
};

export function MiniFact({ icon, label, value }: MiniFactProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
      <div className="flex items-center gap-2 text-cyan-300">
        {icon}
        <span className="text-xs font-semibold uppercase tracking-[0.2em]">
          {label}
        </span>
      </div>

      <p className="mt-2 text-sm leading-6 text-slate-300">{value}</p>
    </div>
  );
}