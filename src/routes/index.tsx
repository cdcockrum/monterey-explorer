import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Fish, Map, Heart, CalendarDays, ArrowRight, Clock, Leaf, Sparkles } from "lucide-react";
import hero from "@/assets/hero-kelp.jpg";
import { animals } from "@/data/animals";
import { AnimalCard } from "@/components/AnimalCard";
import { useMemo, useState } from "react";
import { Hero, CTAButton } from "@/components/design";

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
      <Hero
        eyebrow="Monterey Bay Aquarium"
        image={hero}
        title={
          <>
            Discover the Ocean
            <br />
            Through New Eyes
          </>
        }
        description="Interactive field guides, personalized visitor journeys, and conservation stories designed to deepen every visit."
      >
        <CTAButton to="/animals">Begin Exploring</CTAButton>
        <CTAButton to="/plan" variant="secondary">
          Plan My Visit
        </CTAButton>
      </Hero>

      {/* Today */}
      <section className="bg-slate-950 px-6 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Today at the Aquarium
            </div>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Don’t miss this.
            </h2>
          </div>
      
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-8 md:p-10">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Staff Favorite
              </div>
      
              <h3 className="mt-4 text-4xl font-bold md:text-5xl">
                Sea Otter Feeding
              </h3>
      
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div>
                  <div className="text-sm text-slate-400">Time</div>
                  <div className="mt-1 text-xl font-semibold">10:30 AM</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Location</div>
                  <div className="mt-1 text-xl font-semibold">Sea Otter Exhibit</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Walk</div>
                  <div className="mt-1 text-xl font-semibold">6 minutes</div>
                </div>
              </div>
      
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                A visitor favorite and a powerful conservation story. Watch how animal care,
                rescue work, and kelp forest health connect through one of Monterey Bay’s
                most beloved animals.
              </p>
      
              <div className="mt-8">
                <CTAButton to="/schedule">Build My Route</CTAButton>
              </div>
            </div>
      
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                More Today
              </div>
      
              <div className="mt-5 space-y-4">
                {HIGHLIGHTS.slice(1).map((h) => (
                  <Link
                    key={h.title}
                    to="/schedule"
                    className="block rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition hover:border-cyan-300/40"
                  >
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                      <Clock className="h-4 w-4" />
                      {h.time}
                    </div>
                    <div className="mt-2 font-semibold">{h.title}</div>
                    <div className="text-sm text-slate-400">{h.where}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Ocean Ambassador */}
      <section className="bg-slate-900 px-6 py-28 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Today’s Ocean Ambassador
            </div>
      
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
              Sea Otter
            </h2>
      
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              A tiny predator with an enormous role. Discover how sea otters help
              protect kelp forests, support biodiversity, and connect visitors to
              Monterey Bay’s conservation story.
            </p>
      
            <div className="mt-8">
              <CTAButton to="/animals/sea-otter">
                Explore the Sea Otter
              </CTAButton>
            </div>
          </div>
      
          <Link
            to="/animals/sea-otter"
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 transition hover:border-cyan-300/40"
          >
            <img
              src={featured[0]?.image}
              alt="Sea otter"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover transition duration-500 group-hover:scale-[1.03]"
            />
      
            <div className="p-4">
              <div className="text-sm text-cyan-300">Keystone Species</div>
              <div className="mt-1 text-2xl font-bold">Protects kelp forests</div>
            </div>
          </Link>
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
