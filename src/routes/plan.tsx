import { createFileRoute } from "@tanstack/react-router";
import {
  Accessibility,
  Baby,
  Binoculars,
  Clock,
  Compass,
  Heart,
  Leaf,
  MapPin,
  Sparkles,
  Waves,
} from "lucide-react";

export const Route = createFileRoute("/plan")({
  head: () => ({
    meta: [
      { title: "Plan My Visit — Monterey Bay Explorer" },
      {
        name: "description",
        content:
          "Choose a visitor path, build a sample itinerary, and explore aquarium-friendly routes.",
      },
      { property: "og:title", content: "Plan My Visit" },
      {
        property: "og:description",
        content:
          "A visitor-focused planning prototype for Monterey Bay Aquarium.",
      },
    ],
  }),
  component: PlanVisitPage,
});

const visitPaths = [
  {
    title: "First-Time Visitor",
    icon: Compass,
    time: "2–3 hours",
    description:
      "A balanced route through the most iconic exhibits for someone visiting for the first time.",
    stops: ["Kelp Forest", "Sea Otters", "Open Sea", "Jellies", "Gift Shop"],
  },
  {
    title: "Sea Otter Experience",
    icon: Heart,
    time: "60–90 minutes",
    description:
      "A route centered around sea otters, rescue stories, animal care, and conservation impact.",
    stops: ["Sea Otters", "Coastal Habitats", "Conservation Story", "Live Cam"],
  },
  {
    title: "Family Adventure",
    icon: Baby,
    time: "2 hours",
    description:
      "Kid-friendly pacing with hands-on moments, breaks, restrooms, snacks, and shorter walking segments.",
    stops: ["Splash Zone", "Jellies", "Cafe Break", "Kelp Forest", "Touch Pools"],
  },
  {
    title: "Accessible Visit",
    icon: Accessibility,
    time: "Flexible",
    description:
      "A route designed around elevators, seating, restrooms, lower walking distance, and quieter spaces.",
    stops: ["Accessible Entry", "Elevator Route", "Seating Areas", "Restrooms", "Quiet Stops"],
  },
  {
    title: "Into the Deep",
    icon: Waves,
    time: "90 minutes",
    description:
      "Explore deep-sea animals, jellies, strange adaptations, and the mysteries of ocean life.",
    stops: ["Into the Deep", "Jellies", "Open Sea", "Deep-Sea Adaptations"],
  },
  {
    title: "Conservation Explorer",
    icon: Leaf,
    time: "2 hours",
    description:
      "A mission-centered route focused on ocean conservation, research, sustainable seafood, and recovery programs.",
    stops: ["Sea Otter Recovery", "Kelp Forest", "Sustainable Seafood", "Ocean Climate"],
  },
];

const practicalNeeds = [
  "Hours & admission",
  "Parking & arrival",
  "Restrooms",
  "Elevators",
  "Dining",
  "Quiet spaces",
  "Stroller-friendly stops",
  "Gift shop",
];

function PlanVisitPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Plan My Visit
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Build a better day at the aquarium.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Choose a visitor path based on time, interests, accessibility needs,
            and conservation goals. This prototype shows how a mobile-first
            planning tool could help guests make the most of their visit.
          </p>
        </div>

        <div className="mb-12 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6">
          <div className="flex items-start gap-4">
            <Sparkles className="mt-1 h-6 w-6 text-cyan-300" />
            <div>
              <h2 className="text-xl font-semibold">Prototype concept</h2>
              <p className="mt-2 text-slate-300">
                This is an independent visitor-experience prototype and is not
                affiliated with Monterey Bay Aquarium. The goal is to demonstrate
                how itinerary planning, accessibility guidance, and conservation
                education could be brought together in one useful interface.
              </p>
            </div>
          </div>
        </div>

        <section>
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Visitor Paths
              </p>
              <h2 className="mt-2 text-3xl font-bold">What kind of visit are you planning?</h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visitPaths.map((path) => {
              const Icon = path.icon;

              return (
                <article
                  key={path.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="rounded-2xl bg-cyan-300/10 p-3">
                      <Icon className="h-6 w-6 text-cyan-300" />
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-300">
                      {path.time}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold">{path.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{path.description}</p>

                  <div className="mt-6">
                    <p className="mb-3 text-sm font-semibold text-slate-200">
                      Suggested stops
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {path.stops.map((stop) => (
                        <span
                          key={stop}
                          className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300"
                        >
                          {stop}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="mt-6 w-full rounded-2xl bg-cyan-300 px-4 py-3 font-semibold text-slate-950 transition group-hover:bg-cyan-200">
                    Build this itinerary
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <MapPin className="h-6 w-6 text-cyan-300" />
              <h2 className="text-2xl font-bold">Sample 2-hour route</h2>
            </div>

            <div className="space-y-5">
              {[
                ["Start", "Arrive, check schedule, choose must-see animal"],
                ["Stop 1", "Kelp Forest — iconic Monterey Bay ecosystem"],
                ["Stop 2", "Sea Otters — rescue, care, and recovery story"],
                ["Break", "Restrooms, water, seating, cafe option"],
                ["Stop 3", "Open Sea — large animals, movement, scale"],
                ["Stop 4", "Jellies or Into the Deep — immersive final exhibit"],
              ].map(([label, text]) => (
                <div key={label} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-300 font-bold text-slate-950">
                    {label === "Start" ? <Clock className="h-5 w-5" /> : label.replace("Stop ", "")}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{label}</p>
                    <p className="text-slate-300">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <Binoculars className="h-6 w-6 text-cyan-300" />
              <h2 className="text-2xl font-bold">Visitor needs</h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {practicalNeeds.map((need) => (
                <div
                  key={need}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-300"
                >
                  {need}
                </div>
              ))}
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}
