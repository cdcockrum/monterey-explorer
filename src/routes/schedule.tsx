import { createFileRoute } from "@tanstack/react-router";
import { Clock, Heart, MapPin } from "lucide-react";

export const Route = createFileRoute("/schedule")({
  head: () => ({ meta: [
    { title: "Daily Schedule — Monterey Bay Explorer" },
    { name: "description", content: "Today's feedings, talks, training demonstrations, and special events." },
    { property: "og:title", content: "Daily Schedule" },
    { property: "og:description", content: "Plan your day around feedings, talks, and shows." },
  ] }),
  component: Schedule,
});

const EVENTS = [
  { time: "10:30", title: "Sea Otter Feeding", where: "Sea Otter Exhibit", tag: "Feeding" },
  { time: "11:00", title: "Kelp Forest Dive Show", where: "Kelp Forest", tag: "Show" },
  { time: "11:30", title: "Tide Pool Talk", where: "Splash Zone", tag: "Talk" },
  { time: "13:00", title: "Behind the Scenes Tour", where: "Meet at Lobby", tag: "Tour" },
  { time: "13:30", title: "Penguin Talk & Feeding", where: "Splash Zone", tag: "Feeding" },
  { time: "14:00", title: "Sea Otter Training Demo", where: "Sea Otter Exhibit", tag: "Training" },
  { time: "15:00", title: "Open Sea Feeding", where: "Open Sea", tag: "Feeding" },
  { time: "16:00", title: "Octopus Enrichment", where: "Tentacles", tag: "Training" },
];

function Schedule() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-12 pb-20">
      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Today · Live</div>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl">Daily Schedule</h1>
      <p className="mt-3 text-muted-foreground max-w-xl">Tap the heart to follow an event. We'll remind you 15 minutes before it starts.</p>

      <ol className="mt-10 relative border-l border-border/60 pl-6 sm:pl-8 space-y-6">
        {EVENTS.map((e) => (
          <li key={e.title} className="relative">
            <span className="absolute -left-[31px] sm:-left-[37px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-primary ring-4 ring-background" />
            <div className="flex items-start justify-between gap-4 rounded-2xl border border-border/60 bg-card p-5 hover:border-primary/40 transition">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 text-xs text-primary font-medium">
                  <Clock className="h-3.5 w-3.5" /> {e.time}
                  <span className="rounded-full bg-muted px-2 py-0.5 text-muted-foreground">{e.tag}</span>
                </div>
                <div className="mt-2 font-display text-lg">{e.title}</div>
                <div className="mt-1 inline-flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {e.where}
                </div>
              </div>
              <button aria-label="Favorite" className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border/60 text-muted-foreground hover:text-coral hover:border-coral/40 transition">
                <Heart className="h-4 w-4" />
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}