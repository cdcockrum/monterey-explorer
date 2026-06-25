import { createFileRoute } from "@tanstack/react-router";
import {
  Accessibility,
  Baby,
  Binoculars,
  Clock,
  Heart,
  Info,
  MapPin,
  Navigation,
  Sparkles,
  Star,
  Utensils,
} from "lucide-react";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Today at the Aquarium — Monterey Bay Explorer" },
      {
        name: "description",
        content:
          "Today's feedings, talks, visitor tips, and recommended aquarium route.",
      },
      { property: "og:title", content: "Today at the Aquarium" },
      {
        property: "og:description",
        content:
          "Plan your day around feedings, talks, accessibility notes, and suggested routes.",
      },
    ],
  }),
  component: Schedule,
});

const EVENTS = [
  {
    time: "10:30",
    title: "Sea Otter Feeding",
    where: "Sea Otter Exhibit",
    tag: "Feeding",
    walk: "6 min from entrance",
    notes: ["Family friendly", "Wheelchair accessible"],
  },
  {
    time: "11:00",
    title: "Kelp Forest Dive Show",
    where: "Kelp Forest",
    tag: "Dive",
    walk: "4 min from entrance",
    notes: ["Iconic exhibit", "Great for photos"],
  },
  {
    time: "11:30",
    title: "Tide Pool Talk",
    where: "Splash Zone",
    tag: "Talk",
    walk: "8 min from entrance",
    notes: ["Hands-on learning", "Kid friendly"],
  },
  {
    time: "13:00",
    title: "Behind the Scenes Tour",
    where: "Meet at Lobby",
    tag: "Tour",
    walk: "2 min from entrance",
    notes: ["Limited capacity", "Arrive early"],
  },
  {
    time: "13:30",
    title: "Penguin Talk & Feeding",
    where: "Splash Zone",
    tag: "Feeding",
    walk: "8 min from entrance",
    notes: ["Family friendly", "Popular stop"],
  },
  {
    time: "14:00",
    title: "Sea Otter Training Demo",
    where: "Sea Otter Exhibit",
    tag: "Training",
    walk: "6 min from entrance",
    notes: ["Animal care", "Conservation story"],
  },
  {
    time: "15:00",
    title: "Open Sea Feeding",
    where: "Open Sea",
    tag: "Feeding",
    walk: "10 min from entrance",
    notes: ["Large viewing area", "Crowd friendly"],
  },
  {
    time: "16:00",
    title: "Octopus Enrichment",
    where: "Tentacles",
    tag: "Training",
    walk: "7 min from entrance",
    notes: ["Animal intelligence", "Enrichment focus"],
  },
];

const FILTERS = ["All", "Feedings", "Talks", "Tours", "Family", "Accessibility"];

const TIPS = [
  "Sea otter events fill quickly. Arrive 10–15 minutes early.",
  "The Kelp Forest is a strong first stop for first-time visitors.",
  "Open Sea is often a good mid-afternoon stop because the viewing area is larger.",
  "Build in a break before lunch if visiting with kids.",
];

function tagClass(tag: string) {
  switch (tag) {
    case "Feeding":
      return "bg-emerald-400/10 text-emerald-300 border-emerald-300/20";
    case "Dive":
      return "bg-cyan-400/10 text-cyan-300 border-cyan-300/20";
    case "Tour":
      return "bg-purple-400/10 text-purple-300 border-purple-300/20";
    case "Training":
      return "bg-orange-400/10 text-orange-300 border-orange-300/20";
    default:
      return "bg-slate-400/10 text-slate-300 border-slate-300/20";
  }
}

function Schedule() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Today · Prototype
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
            Today at the Aquarium
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Everything happening today, plus visitor-friendly recommendations
            for timing your route, finding key exhibits, and planning around
            accessibility, food, and family needs.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-sm text-slate-300">
          <div className="flex gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
            <p>
              Independent prototype. Times and visitor details are sample data
              for demonstration only.
            </p>
          </div>
        </div>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ["Open Today", "9:30 AM – 5:00 PM", Clock],
            ["Next Event", "Sea Otter Feeding · 10:30", Star],
            ["Best First Stop", "Kelp Forest", Binoculars],
            ["Crowd Estimate", "Moderate · Prototype", Navigation],
          ].map(([label, value, Icon]) => (
            <div
              key={label as string}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
            >
              <Icon className="h-6 w-6 text-cyan-300" />
              <p className="mt-4 text-sm text-slate-400">{label as string}</p>
              <p className="mt-1 text-xl font-semibold">{value as string}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-cyan-300" />
              <h2 className="text-2xl font-bold">Don’t miss today</h2>
            </div>

            <h3 className="text-3xl font-bold">Sea Otter Feeding</h3>
            <p className="mt-2 text-cyan-300">10:30 AM · Sea Otter Exhibit</p>
            <p className="mt-5 leading-8 text-slate-300">
              A visitor favorite and a strong conservation storytelling moment.
              This event can connect animal care, rescue work, ecosystem health,
              and the role sea otters play in coastal kelp forests.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-900/70 p-4">
                <p className="text-sm text-slate-400">Walking time</p>
                <p className="mt-1 font-semibold">6 minutes</p>
              </div>
              <div className="rounded-2xl bg-slate-900/70 p-4">
                <p className="text-sm text-slate-400">Best for</p>
                <p className="mt-1 font-semibold">Families</p>
              </div>
              <div className="rounded-2xl bg-slate-900/70 p-4">
                <p className="text-sm text-slate-400">Arrive early</p>
                <p className="mt-1 font-semibold">10–15 min</p>
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-cyan-300" />
              <h2 className="text-2xl font-bold">Smart route suggestion</h2>
            </div>

            <p className="leading-7 text-slate-300">
              For a 2.5-hour visit, start with Kelp Forest, continue to Sea
              Otters, take a short break, then finish with Open Sea and Jellies.
            </p>

            <div className="mt-6 space-y-3">
              {["Kelp Forest", "Sea Otters", "Break", "Open Sea", "Jellies"].map(
                (stop, index) => (
                  <div key={stop} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-slate-950">
                      {index + 1}
                    </span>
                    <span className="text-slate-200">{stop}</span>
                  </div>
                )
              )}
            </div>
          </aside>
        </section>

        <section className="mt-14">
          <div className="mb-6 flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
              >
                {filter}
              </button>
            ))}
          </div>

          <ol className="relative space-y-6 border-l border-white/10 pl-6 sm:pl-8">
            {EVENTS.map((event) => (
              <li key={event.title} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-cyan-300 ring-4 ring-slate-950 sm:-left-[39px]" />

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/40 hover:bg-white/[0.07]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </span>
                        <span
                          className={`rounded-full border px-3 py-1 text-xs font-medium ${tagClass(
                            event.tag
                          )}`}
                        >
                          {event.tag}
                        </span>
                      </div>

                      <h3 className="mt-3 text-2xl font-semibold">
                        {event.title}
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-300">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-cyan-300" />
                          {event.where}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Navigation className="h-4 w-4 text-cyan-300" />
                          {event.walk}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {event.notes.map((note) => (
                          <span
                            key={note}
                            className="rounded-full bg-slate-900/70 px-3 py-1 text-xs text-slate-300"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      aria-label="Favorite"
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-rose-300/50 hover:text-rose-300"
                    >
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <Baby className="h-6 w-6 text-cyan-300" />
            <h2 className="mt-4 text-xl font-bold">Family notes</h2>
            <p className="mt-3 leading-7 text-slate-300">
              Build in breaks between high-interest exhibits. Splash Zone,
              tide pool talks, and animal feedings are strong choices for kids.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <Accessibility className="h-6 w-6 text-cyan-300" />
            <h2 className="mt-4 text-xl font-bold">Accessibility notes</h2>
            <p className="mt-3 leading-7 text-slate-300">
              Future versions could include elevator-first routing, quieter
              route suggestions, rest points, and wheelchair-friendly exhibit
              sequencing.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <Utensils className="h-6 w-6 text-cyan-300" />
            <h2 className="mt-4 text-xl font-bold">Food & breaks</h2>
            <p className="mt-3 leading-7 text-slate-300">
              A useful planner should time meals around popular presentations
              and help guests avoid the busiest lunch window.
            </p>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <h2 className="text-2xl font-bold">Today’s visitor tips</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {TIPS.map((tip) => (
              <div
                key={tip}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-slate-300"
              >
                {tip}
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
