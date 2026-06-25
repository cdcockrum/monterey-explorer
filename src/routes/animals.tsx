import { createFileRoute, Outlet, useMatchRoute } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { ALL_CATEGORIES, animals, type AnimalCategory } from "@/data/animals";
import { AnimalCard } from "@/components/AnimalCard";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/animals")({
  head: () => ({
    meta: [
      { title: "Animals — Monterey Bay Explorer" },
      { name: "description", content: "Explore the animals of Monterey Bay, from sea otters to giant Pacific octopus." },
      { property: "og:title", content: "Animals — Monterey Bay Explorer" },
      { property: "og:description", content: "An ocean Pokédex of Monterey Bay residents." },
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
      if (next.has(c)) next.delete(c); else next.add(c);
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
        a.habitat.toLowerCase().includes(s)
      );
    });
  }, [q, cats]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-16">
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Animal Explorer</div>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">
          An ocean <span className="text-gradient-ocean">field guide</span>.
        </h1>
        <p className="mt-3 text-muted-foreground">
          Browse {animals.length}+ residents. Tap a card to dive deeper into behavior, habitat, and conservation.
        </p>
      </div>

      {/* Search + filters */}
      <div className="mt-8 sticky top-16 z-30 -mx-4 sm:mx-0">
        <div className="glass border-y sm:border sm:rounded-2xl border-border/60 px-4 sm:px-5 py-3">
          <div className="flex items-center gap-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search animals…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            {q && (
              <button onClick={() => setQ("")} className="text-muted-foreground hover:text-foreground">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
            <Chip active={cats.size === 0} onClick={() => setCats(new Set())}>All</Chip>
            {ALL_CATEGORIES.map((c) => (
              <Chip key={c} active={cats.has(c)} onClick={() => toggle(c)}>{c}</Chip>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mt-8">
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border/60 p-12 text-center text-muted-foreground">
            No animals match your filters.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((a) => <AnimalCard key={a.slug} animal={a} />)}
          </div>
        )}
      </div>
    </div>
  );
}

function Chip({ children, active, onClick }: { children: React.ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-medium transition",
        active
          ? "bg-foreground text-background border-foreground"
          : "bg-background/60 border-border/60 text-muted-foreground hover:text-foreground hover:border-foreground/40",
      )}
    >
      {children}
    </button>
  );
}