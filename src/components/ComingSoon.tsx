import { Link } from "@tanstack/react-router";
import { ArrowRight, type LucideIcon } from "lucide-react";

export function ComingSoon({
  eyebrow,
  title,
  description,
  icon: Icon,
  sections,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  sections: { title: string; body: string }[];
}) {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-12 pb-20">
      <div className="rounded-3xl gradient-ocean text-white p-8 sm:p-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
          <Icon className="h-3.5 w-3.5" /> {eyebrow}
        </div>
        <h1 className="mt-4 font-display text-4xl sm:text-6xl leading-[1.05] max-w-3xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-white/85 text-lg">{description}</p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {sections.map((s) => (
          <div key={s.title} className="rounded-3xl border border-border/60 bg-card p-6">
            <div className="font-display text-xl">{s.title}</div>
            <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex items-center justify-between rounded-2xl border border-dashed border-border/60 p-4 text-sm text-muted-foreground">
        <span>This section is being built. The structure and data model are in place.</span>
        <Link to="/animals" className="inline-flex items-center gap-1 text-primary font-medium">
          Explore animals <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}