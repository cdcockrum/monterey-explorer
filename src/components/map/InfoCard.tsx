import type { ReactNode } from "react";

type InfoCardProps = {
  icon: ReactNode;
  title: string;
  body: string;
};

export function InfoCard({ icon, title, body }: InfoCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      {icon}
      <h2 className="mt-4 text-2xl font-bold">{title}</h2>
      <p className="mt-3 leading-7 text-slate-300">{body}</p>
    </div>
  );
}