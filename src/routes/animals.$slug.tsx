import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Heart, Share2 } from "lucide-react";
import { animals, getAnimal, STATUS_COLOR, type Animal } from "@/data/animals";
import { AnimalCard } from "@/components/AnimalCard";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/animals/$slug")({
  loader: ({ params }): { animal: Animal } => {
    const animal = getAnimal(params.slug);
    if (!animal) throw notFound();
    return { animal };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.animal.name} — Monterey Bay Explorer` },
      { name: "description", content: loaderData.animal.tagline },
      { property: "og:title", content: loaderData.animal.name },
      { property: "og:description", content: loaderData.animal.tagline },
      { property: "og:image", content: loaderData.animal.image },
    ] : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl">Animal not found</h1>
      <Link to="/animals" className="mt-4 inline-block text-primary">← Back to all animals</Link>
    </div>
  ),
  errorComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl">Something went wrong</h1>
    </div>
  ),
  component: AnimalDetail,
});

function AnimalDetail() {
  const { animal } = Route.useLoaderData();
  const related = animal.related
    .map((s) => animals.find((a) => a.slug === s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <article>
      {/* Hero */}
      <header className="relative">
        <div className="absolute inset-0 -z-10">
          <img src={animal.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-background" />
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-10 pb-32 sm:pt-12 sm:pb-44 text-white">
          <Link to="/animals" className="inline-flex items-center gap-1.5 rounded-full glass border border-white/25 px-3 py-1.5 text-xs">
            <ArrowLeft className="h-3.5 w-3.5" /> All animals
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
            <span className="uppercase tracking-[0.2em] opacity-80">{animal.category}</span>
            <span className={cn("rounded-full px-2.5 py-0.5 font-medium backdrop-blur bg-white/85", STATUS_COLOR[animal.status])}>
              {animal.status}
            </span>
          </div>
          <h1 className="mt-3 font-display text-5xl sm:text-7xl leading-[1] max-w-3xl">{animal.name}</h1>
          <p className="mt-3 text-lg italic text-white/85">{animal.scientificName}</p>
          <p className="mt-6 max-w-2xl text-lg text-white/90">{animal.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <button className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-4 py-2 text-sm font-medium hover:bg-white/90 transition">
              <Heart className="h-4 w-4" /> Save to favorites
            </button>
            <button className="inline-flex items-center gap-2 rounded-full glass border border-white/25 text-white px-4 py-2 text-sm font-medium">
              <Share2 className="h-4 w-4" /> Share
            </button>
          </div>
        </div>
      </header>

      {/* Quick facts */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 -mt-20 relative">
        <div className="rounded-3xl border border-border/60 bg-card shadow-xl p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <Fact label="Habitat" value={animal.habitat} />
          <Fact label="Lifespan" value={animal.lifespan} />
          <Fact label="Size" value={animal.size} />
          <Fact label="Weight" value={animal.weight} />
          <Fact label="Diet" value={animal.diet} />
          <Fact label="Range" value={animal.range} />
          <Fact label="Family" value={animal.family} />
          <Fact label="Exhibit" value={animal.exhibit} icon />
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 mt-16 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-12">
          <Block title="Did you know?">
            <ul className="space-y-3">
              {animal.facts.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Behavior">
            <p className="text-foreground/90">{animal.behavior}</p>
          </Block>

          <div className="grid sm:grid-cols-2 gap-6">
            <Block title="Prey"><TagList items={animal.prey} /></Block>
            <Block title="Predators"><TagList items={animal.predators} /></Block>
          </div>

          <Block title="Adaptations"><TagList items={animal.adaptations} /></Block>
          <Block title="Threats"><TagList items={animal.threats} tone="warn" /></Block>

          <Block title="Conservation">
            <p className="text-foreground/90">{animal.conservation}</p>
          </Block>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-border/60 bg-card p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Find it here</div>
            <div className="mt-2 flex items-center gap-2 font-medium">
              <MapPin className="h-4 w-4 text-primary" /> {animal.exhibit}
            </div>
            <Link to="/map" className="mt-4 inline-flex w-full justify-center rounded-full bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:opacity-90 transition">
              Show on map
            </Link>
          </div>
          <div className="rounded-3xl gradient-ocean text-white p-6">
            <div className="text-xs uppercase tracking-[0.18em] opacity-80">For young explorers</div>
            <div className="mt-2 font-display text-xl">Difficulty: {animal.difficulty}</div>
            <p className="mt-2 text-sm text-white/85">Kid-friendly summary and trivia available in the Kids Explorer.</p>
            <Link to="/kids" className="mt-4 inline-flex rounded-full bg-white/95 text-foreground px-4 py-2 text-sm font-medium">
              Open Kids Explorer
            </Link>
          </div>
        </aside>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 sm:px-6 mt-20">
          <h2 className="font-display text-2xl">Related animals</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => <AnimalCard key={a.slug} animal={a} />)}
          </div>
        </section>
      )}
    </article>
  );
}

function Fact({ label, value, icon }: { label: string; value: string; icon?: boolean }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-medium inline-flex items-center gap-1.5">
        {icon && <MapPin className="h-3.5 w-3.5 text-primary" />} {value}
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl">{title}</h2>
      <div className="mt-4 text-base">{children}</div>
    </div>
  );
}

function TagList({ items, tone = "default" }: { items: string[]; tone?: "default" | "warn" }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className={cn(
            "rounded-full border px-3 py-1 text-sm",
            tone === "warn"
              ? "border-coral/30 bg-coral/10 text-coral"
              : "border-border/60 bg-muted text-foreground/80",
          )}
        >
          {t}
        </span>
      ))}
    </div>
  );
}