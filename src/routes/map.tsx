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

function AquariumMap({
  selectedId,
  onSelect,
}: {
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <svg
      viewBox="0 0 1000 700"
      className="h-[680px] w-full"
      role="img"
      aria-label="Stylized Monterey Bay Aquarium map"
    >
      <defs>
        <linearGradient id="water" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="50%" stopColor="#083344" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="1000" height="700" fill="url(#water)" />

      <path
        d="M100 140 C250 40, 520 70, 700 120 C860 165, 920 300, 860 460 C790 640, 520 660, 320 610 C130 560, 35 430, 70 260 C80 215, 88 175, 100 140Z"
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="2"
      />

      <path
        d="M165 505 C285 420, 390 430, 515 500 C615 556, 720 552, 825 485"
        fill="none"
        stroke="rgba(34,211,238,0.55)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="14 18"
      />

      <MapRegion
        id="open-sea"
        selectedId={selectedId}
        onSelect={onSelect}
        label="Open Sea"
        icon="🦈"
        d="M515 115 C660 85, 805 155, 840 285 C875 420, 730 480, 595 430 C470 384, 415 270, 515 115Z"
        labelX={650}
        labelY={270}
      />

      <MapRegion
        id="kelp-forest"
        selectedId={selectedId}
        onSelect={onSelect}
        label="Kelp Forest"
        icon="🌿"
        d="M285 120 C405 80, 520 145, 505 285 C490 420, 325 420, 250 330 C175 240, 190 155, 285 120Z"
        labelX={365}
        labelY={265}
      />

      <MapRegion
        id="sea-otters"
        selectedId={selectedId}
        onSelect={onSelect}
        label="Sea Otters"
        icon="🦦"
        d="M120 320 C190 255, 310 285, 330 395 C350 510, 210 555, 125 490 C45 430, 55 375, 120 320Z"
        labelX={205}
        labelY={420}
      />

      <MapRegion
        id="jellies"
        selectedId={selectedId}
        onSelect={onSelect}
        label="Jellies"
        icon="🪼"
        d="M650 410 C755 365, 860 425, 855 540 C850 630, 715 650, 635 585 C560 525, 575 445, 650 410Z"
        labelX={735}
        labelY={530}
      />

      <MapRegion
        id="penguins"
        selectedId={selectedId}
        onSelect={onSelect}
        label="Splash Zone"
        icon="🐧"
        d="M270 455 C370 420, 510 470, 520 570 C528 650, 375 670, 280 620 C195 575, 190 490, 270 455Z"
        labelX={390}
        labelY={565}
      />

      <g>
        <circle cx="165" cy="505" r="11" fill="#22d3ee" filter="url(#glow)" />
        <text x="185" y="511" fill="#cffafe" fontSize="18" fontWeight="700">
          You are here
        </text>
      </g>

      <text
        x="50"
        y="55"
        fill="#cffafe"
        fontSize="28"
        fontWeight="800"
        letterSpacing="2"
      >
        MONTEREY BAY AQUARIUM
      </text>
    </svg>
  );
}

function MapRegion({
  id,
  selectedId,
  onSelect,
  label,
  icon,
  d,
  labelX,
  labelY,
}: {
  id: string;
  selectedId: string;
  onSelect: (id: string) => void;
  label: string;
  icon: string;
  d: string;
  labelX: number;
  labelY: number;
}) {
  const selected = selectedId === id;

  return (
    <g
      role="button"
      tabIndex={0}
      onClick={() => onSelect(id)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onSelect(id);
        }
      }}
      className="cursor-pointer outline-none"
    >
      <path
        d={d}
        fill={selected ? "rgba(34,211,238,0.22)" : "rgba(255,255,255,0.07)"}
        stroke={selected ? "#22d3ee" : "rgba(255,255,255,0.18)"}
        strokeWidth={selected ? 4 : 2}
        className="transition-all duration-300 hover:fill-cyan-300/15"
      />

      {selected && (
        <path
          d={d}
          fill="none"
          stroke="rgba(34,211,238,0.45)"
          strokeWidth="10"
          filter="url(#glow)"
        />
      )}

      <text x={labelX} y={labelY - 18} textAnchor="middle" fontSize="34">
        {icon}
      </text>

      <text
        x={labelX}
        y={labelY + 18}
        textAnchor="middle"
        fill="#f8fafc"
        fontSize="22"
        fontWeight="800"
      >
        {label}
      </text>

      <text
        x={labelX}
        y={labelY + 45}
        textAnchor="middle"
        fill="#67e8f9"
        fontSize="14"
        fontWeight="700"
        letterSpacing="1"
      >
        MISSION
      </text>
    </g>
  );
}

