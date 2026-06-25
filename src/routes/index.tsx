import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Fish, Map, Heart, CalendarDays, ArrowRight, Clock, Leaf, Sparkles } from "lucide-react";
import hero from "@/assets/hero-kelp.jpg";
import { animals } from "@/data/animals";
import { AnimalCard } from "@/components/AnimalCard";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Monterey Bay Explorer — A field guide to the ocean" },
      { name: "description", content: "Plan your visit, meet the animals, and follow the daily schedule at the Monterey Bay Aquarium." },
      { property: "og:title", content: "Monterey Bay Explorer" },
      { property: "og:description", content: "A premium field guide to the Monterey Bay Aquarium." },
    ],
  }),
  component: Home,
});

const QUICK = [
  { to: "/animals", label: "Explore Animals", icon: Fish },
  { to: "/map", label: "Interactive Map", icon: Map },
  { to: "/plan", label: "Plan My Visit", icon: Heart },
  { to: "/schedule", label: "Daily Schedule", icon: CalendarDays },
] as const;

const HIGHLIGHTS = [
  { time: "10:30", title: "Sea Otter Feeding", where: "Sea Otter Exhibit" },
  { time: "11:00", title: "Kelp Forest Dive Show", where: "Kelp Forest" },
  { time: "13:30", title: "Penguin Talk", where: "Splash Zone" },
  { time: "15:00", title: "Open Sea Feeding", where: "Open Sea" },
];

const EXHIBITS = [
  { name: "Kelp Forest", body: "A 28-foot-tall living forest of golden kelp." },
  { name: "Open Sea", body: "Tuna, sharks, and sea turtles in 1.2 million gallons." },
  { name: "Tentacles", body: "Meet the most intelligent invertebrates on Earth." },
  { name: "Splash Zone", body: "Family favorites — penguins, otters, and tide pools." },
];

function Home() {
  const [q, setQ] = useState("");
  const featured = animals.slice(0, 4);
  const results = useMemo(() => {
    if (!q.trim()) return [];
    const s = q.toLowerCase();
    return animals.filter((a) =>
      a.name.toLowerCase().includes(s) ||
      a.scientificName.toLowerCase().includes(s) ||
      a.category.toLowerCase().includes(s),
    ).slice(0, 6);
  }, [q]);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={hero} alt="" width={1920} height={1280} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-background" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-28 sm:pt-28 sm:pb-40">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 rounded-full glass border border-white/20 px-3 py-1 text-xs font-medium tracking-wide">
              <Sparkles className="h-3.5 w-3.5" /> A field guide to Monterey Bay
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02]">
              The ocean,<br />beautifully explained.
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-white/85">
              Meet the animals of Monterey Bay, follow today's feedings, and plan a visit that fits the way you like to explore.
            </p>

            {/* Search */}
            <div className="relative mt-8 max-w-xl">
              <div className="flex items-center gap-3 rounded-2xl glass border border-white/25 px-4 py-3 shadow-2xl">
                <Search className="h-5 w-5 text-white/80" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search animals — sea otter, jellyfish, octopus…"
                  className="w-full bg-transparent text-white placeholder:text-white/60 outline-none"
                />
              </div>
              {results.length > 0 && (
                <div className="absolute z-20 left-0 right-0 mt-2 rounded-2xl border border-border/60 bg-popover text-popover-foreground shadow-2xl overflow-hidden animate-fade-in">
                  {results.map((a) => (
                    <Link
                      key={a.slug}
                      to="/animals/$slug"
                      params={{ slug: a.slug }}
                      className="flex items-center gap-3 px-3 py-2.5 hover:bg-muted transition"
                    >
                      <img src={a.image} alt="" className="h-10 w-10 rounded-xl object-cover" />
                      <div className="min-w-0">
                        <div className="truncate text-sm font-medium">{a.name}</div>
                        <div className="truncate text-xs italic text-muted-foreground">{a.scientificName}</div>
                      </div>
                      <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Quick actions */}
            <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {QUICK.map((q) => {
                const I = q.icon;
                return (
                  <Link
                    key={q.to}
                    to={q.to}
                    className="inline-flex items-center gap-2 rounded-full glass border border-white/25 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/15 transition"
                  >
                    <I className="h-4 w-4" /> {q.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Today */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 -mt-16 sm:-mt-24 relative z-10">
        <div className="rounded-3xl border border-border/60 bg-card shadow-xl p-6 sm:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Today at the Aquarium</div>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl">Upcoming highlights</h2>
            </div>
            <Link to="/schedule" className="text-sm font-medium text-primary hover:underline">Full schedule →</Link>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="rounded-2xl border border-border/60 bg-background/60 p-4 hover:border-primary/40 transition">
                <div className="inline-flex items-center gap-1.5 text-xs text-primary font-medium">
                  <Clock className="h-3.5 w-3.5" /> {h.time}
                </div>
                <div className="mt-2 font-medium">{h.title}</div>
                <div className="text-sm text-muted-foreground">{h.where}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured animals */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Featured</div>
            <h2 className="mt-1 font-display text-3xl sm:text-4xl">Meet the residents</h2>
          </div>
          <Link to="/animals" className="text-sm font-medium text-primary hover:underline">All animals →</Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((a, i) => (
            <AnimalCard key={a.slug} animal={a} priority={i < 2} />
          ))}
        </div>
      </section>

      {/* Exhibits */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Current exhibits</div>
        <h2 className="mt-1 font-display text-3xl sm:text-4xl">Step inside the bay</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EXHIBITS.map((e) => (
            <div key={e.name} className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-6 hover:shadow-lg transition">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full gradient-ocean opacity-20 blur-2xl transition group-hover:opacity-40" />
              <div className="font-display text-xl">{e.name}</div>
              <p className="mt-2 text-sm text-muted-foreground">{e.body}</p>
              <Link to="/map" className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                Find on map <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Conservation banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-24 mb-8">
        <div className="relative overflow-hidden rounded-3xl gradient-ocean p-8 sm:p-12 text-white">
          <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{backgroundImage:"radial-gradient(800px 300px at 20% 0%, white, transparent)"}} />
          <div className="relative grid gap-6 sm:grid-cols-[1fr_auto] items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
                <Leaf className="h-3.5 w-3.5" /> Conservation
              </div>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl leading-tight">A healthier ocean for everyone.</h3>
              <p className="mt-3 text-white/85">Learn how Sea Otter recovery, Seafood Watch, and kelp restoration are reshaping the Pacific.</p>
            </div>
            <Link to="/conservation" className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-5 py-3 font-medium hover:bg-white/90 transition">
              Explore initiatives <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
