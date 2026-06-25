import { createFileRoute, Outlet, useMatchRoute } from "@tanstack/react-router";
import {
  Binoculars,
  Filter,
  Heart,
  Leaf,
  MapPin,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { ALL_CATEGORIES, animals, type AnimalCategory } from "@/data/animals";
import { AnimalCard } from "@/components/AnimalCard";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/animals")({
  head: () => ({
    meta: [
      { title: "Animal Explorer — Monterey Bay Explorer" },
      {
        name: "description",
        content:
          "Explore Monterey Bay animals through behavior, habitat, visitor tips, and conservation stories.",
      },
      { property: "og:title", content: "Animal Explorer — Monterey Bay Explorer" },
      {
        property: "og:description",
        content:
          "A digital ocean field guide for visitors, families, and conservation learners.",
      },
    ],
  }),
  component: AnimalsLayout,
});

function AnimalsLayout() {
  const matchRoute = useMatchRoute();
  const isChild = matchRoute({ to: "/animals/$slug" });
  if (isChild) return <Outlet />;
  return <AnimalsIndex />;
}

function AnimalsIndex() {
  const [q, setQ] = useState("");
  const [cats, setCats] = useState<Set<AnimalCategory>>(new Set());

  const toggle = (c: AnimalCategory) => {
    setCats((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  };

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();

    return animals.filter((a) => {
      if (cats.size && !cats.has(a.category)) return false;
      if (!s) return true;

      return (
        a.name.toLowerCase().includes(s) ||
        a.scientificName.toLowerCase().includes(s) ||
        a.habitat.toLowerCase().includes(s) ||
        a.category.toLowerCase().includes(s)
      );
    });
  }, [q, cats]);

  const featuredAnimal = animals.find((a) => a.slug.includes("sea-otter")) ?? animals[0];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Animal Explorer
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
              A digital field guide for ocean life.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Search animals by name, habitat, or category. Each profile is
              designed to help visitors understand what they are seeing, why it
              matters, and how Monterey Bay conservation stories connect to the
              animal in front of them.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6">
            <div className="mb-4 flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-cyan-300" />
              <h2 className="text-xl font-bold">Featured animal concept</h2>
            </div>

            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Visitor story
            </p>
            <h3 className="mt-2 text-3xl font-bold">
              {featuredAnimal?.name ?? "Sea Otter"}
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              A flagship animal profile can combine quick facts, exhibit
              location, behavior prompts, conservation storytelling, and guided
              visitor questions in one mobile-friendly experience.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <MiniStat icon={MapPin} label="Find" value="Exhibit" />
              <MiniStat icon={Binoculars} label="Watch" value="Behavior" />
              <MiniStat icon={Leaf} label="Learn" value="Impact" />
            </div>
          </div>
        </div>

        <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <InsightCard
            icon={Binoculars}
            title="Observe"
            body="Help guests know what behaviors to look for at each exhibit."
          />
          <InsightCard
            icon={MapPin}
            title="Navigate"
            body="Connect animal profiles to exhibit locations and suggested routes."
          />
          <InsightCard
            icon={Leaf}
            title="Conserve"
            body="Tie each animal to ecosystem health and Monterey Bay’s mission."
          />
          <InsightCard
            icon={Heart}
            title="Remember"
            body="Let visitors save animals and build a personalized visit story."
          />
        </section>

        <div className="sticky top-16 z-30 mt-10 -mx-6 sm:mx-0">
          <div className="border-y border-white/10 bg-slate-950/90 px-6 py-4 backdrop-blur-xl sm:rounded-3xl sm:border">
            <div className="flex items-center gap-3">
              <Search className="h-5 w-5 text-slate-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search sea otters, jellies, kelp forest, sharks…"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
              {q && (
                <button
                  onClick={() => setQ("")}
                  className="text-slate-400 transition hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1">
              <div className="mr-1 inline-flex items-center gap-2 text-xs text-slate-400">
                <Filter className="h-4 w-4" />
                Filter
              </div>

              <Chip active={cats.size === 0} onClick={() => setCats(new Set())}>
                All
              </Chip>

              {ALL_CATEGORIES.map((c) => (
                <Chip key={c} active={cats.has(c)} onClick={() => toggle(c)}>
                  {c}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-6">
          <p className="text-sm text-slate-400">
            Showing <span className="font-semibold text-white">{filtered.length}</span>{" "}
            of <span className="font-semibold text-white">{animals.length}</span>{" "}
            animals
          </p>

          <p className="hidden text-sm text-slate-500 sm:block">
            Prototype animal data for demonstration.
          </p>
        </div>

        <section className="mt-6">
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-white/20 p-12 text-center text-slate-400">
              No animals match your filters.
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((a) => (
                <AnimalCard key={a.slug} animal={a} />
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

function InsightCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ElementType;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <Icon className="h-6 w-6 text-cyan-300" />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 leading-7 text-slate-300">{body}</p>
    </article>
  );
}

function MiniStat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-950/60 p-4">
      <Icon className="h-5 w-5 text-cyan-300" />
      <p className="mt-3 text-xs text-slate-400">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}

function Chip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition",
        active
          ? "border-cyan-300 bg-cyan-300 text-slate-950"
          : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-300/40 hover:text-white"
      )}
    >
      {children}
    </button>
  );
}
