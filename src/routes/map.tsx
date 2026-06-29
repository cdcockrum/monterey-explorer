import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Accessibility,
  Clock,
  Compass,
  MapPin,
  Sparkles,
  Star,
  Utensils,
  Waves,
} from "lucide-react";
import { EXHIBITS } from "@/data/mapData";
import { MiniFact } from "@/components/map/MiniFact";
import { InfoCard } from "@/components/map/InfoCard";
import { AquariumMap } from "@/components/map/AquariumMap";



export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Interactive Map — Monterey Bay Explorer" },
      {
        name: "description",
        content:
          "Interactive aquarium map with exhibits, missions, amenities, and suggested routes.",
      },
    ],
  }),
  component: MapPage,
});


function MapPage() {
  const [selectedId, setSelectedId] = useState("sea-otters");

  const selected = useMemo(
    () => EXHIBITS.find((exhibit) => exhibit.id === selectedId) ?? EXHIBITS[0],
    [selectedId]
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Interactive Map
          </p>

          <h1 className="mt-4 text-6xl font-bold tracking-tight">
            Explore the Aquarium
          </h1>

          <p className="mt-6 text-xl leading-8 text-white/70">
            Follow a personalized route through exhibits, feeding times,
            amenities, and Ocean Missions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
          <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-4 shadow-2xl shadow-cyan-950/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.18),transparent_35%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.08),transparent_30%)]" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
              <AquariumMap selectedId={selectedId} onSelect={setSelectedId} />
            </div>
          </section>

          <aside className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />

              <div className="relative text-5xl">{selected.icon}</div>

              <p className="relative mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                {selected.category}
              </p>

              <h2 className="relative mt-2 text-3xl font-bold">
                {selected.title}
              </h2>

              <p className="relative mt-4 leading-7 text-slate-300">
                {selected.body}
              </p>

              <div className="relative mt-6 grid gap-3">
                <MiniFact
                  icon={<Clock className="h-4 w-4" />}
                  label="Next Feeding"
                  value={selected.feeding}
                />
                <MiniFact
                  icon={<Star className="h-4 w-4" />}
                  label="Mission"
                  value={`${selected.mission} • +${selected.xp} XP`}
                />
                <MiniFact
                  icon={<Accessibility className="h-4 w-4" />}
                  label="Access"
                  value={selected.accessibility}
                />
              </div>

              <div className="relative mt-6 flex flex-wrap gap-3">
                <Link
                  to="/missions/$slug"
                  params={{ slug: selected.missionSlug }}
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  Start Mission
                  <Sparkles className="h-4 w-4" />
                </Link>

                <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 font-semibold text-white transition hover:border-cyan-300/40">
                  Navigate Here
                  <Compass className="h-4 w-4" />
                </button>
              </div>
            </div>

            <InfoCard
              icon={<Utensils className="h-6 w-6 text-cyan-300" />}
              title="Nearby Amenities"
              body={selected.amenities}
            />

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <MapPin className="h-6 w-6 text-cyan-300" />
              <h2 className="mt-4 text-2xl font-bold">Suggested Route</h2>
              <p className="mt-3 leading-7 text-slate-300">
                Start with Sea Otters, continue to Kelp Forest, then finish at
                Open Sea.
              </p>

              <div className="mt-5 space-y-3">
                {["Sea Otters", "Kelp Forest", "Open Sea"].map(
                  (stop, index) => (
                    <div
                      key={stop}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-3"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-slate-950">
                        {index + 1}
                      </div>

                      <div>
                        <div className="font-semibold">{stop}</div>
                        <div className="text-sm text-slate-400">
                          {index === 0 ? "Start here" : `${index * 4 + 2} min walk`}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

