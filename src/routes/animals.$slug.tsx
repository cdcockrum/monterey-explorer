import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  Binoculars,
  Camera,
  Heart,
  Leaf,
  MapPin,
  MessageCircle,
  Network,
  Share2,
  Sparkles,
  Waves,
} from "lucide-react";
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
    meta: loaderData
      ? [
          { title: `${loaderData.animal.name} — Monterey Bay Explorer` },
          { name: "description", content: loaderData.animal.tagline },
          { property: "og:title", content: loaderData.animal.name },
          { property: "og:description", content: loaderData.animal.tagline },
          { property: "og:image", content: loaderData.animal.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl">Animal not found</h1>
      <Link to="/animals" className="mt-4 inline-block text-primary">
        ← Back to all animals
      </Link>
    </div>
  ),
  component: AnimalDetail,
});

function AnimalDetail() {
  const { animal } = Route.useLoaderData() as { animal: Animal };

  const related = animal.related
    .map((s: string) => animals.find((a: Animal) => a.slug === s))
    .filter((a): a is Animal => Boolean(a));

  const isSeaOtter =
    animal.name.toLowerCase().includes("sea otter") ||
    animal.slug.includes("sea-otter");

  return (
    <article className="min-h-screen bg-slate-950 text-white">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={animal.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-slate-950/70 to-slate-950" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-32 pt-10 md:pb-44 md:pt-14">
          <Link
            to="/animals"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-xl transition hover:bg-white/15"
          >
            <ArrowLeft className="h-4 w-4" />
            All animals
          </Link>

          <div className="mt-20 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                {animal.category}
              </span>
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-semibold backdrop-blur bg-white/90",
                  STATUS_COLOR[animal.status]
                )}
              >
                {animal.status}
              </span>
            </div>

            <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">
              {animal.name}
            </h1>

            <p className="mt-3 text-xl italic text-white/80">
              {animal.scientificName}
            </p>

            <p className="mt-6 max-w-2xl text-xl leading-9 text-white/90">
              {animal.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">
                <Heart className="h-4 w-4" />
                Save to visit
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/15">
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto -mt-20 max-w-7xl px-6">
        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
          <Fact label="Habitat" value={animal.habitat} />
          <Fact label="Lifespan" value={animal.lifespan} />
          <Fact label="Size" value={animal.size} />
          <Fact label="Diet" value={animal.diet} />
          <Fact label="Range" value={animal.range} />
          <Fact label="Family" value={animal.family} />
          <Fact label="Weight" value={animal.weight} />
          <Fact label="Exhibit" value={animal.exhibit} icon />
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-10">
          <StoryBlock
            eyebrow="Meet the animal"
            title={isSeaOtter ? "A small animal with an outsized role." : "A closer look."}
          >
            <p>
              {isSeaOtter
                ? "Few animals have shaped the California coast quite like the sea otter. Once hunted nearly to extinction, sea otters now help protect entire kelp forest ecosystems by keeping sea urchin populations in balance."
                : animal.behavior}
            </p>
            <p>
              {isSeaOtter
                ? "For visitors, they are charismatic and playful. For the ocean, they are ecosystem engineers — living reminders that conservation is not abstract. It can begin with one rescued animal, one restored habitat, and one visitor who leaves understanding why it matters."
                : animal.conservation}
            </p>
          </StoryBlock>

          <section className="grid gap-5 md:grid-cols-2">
            <FeatureCard
              icon={Binoculars}
              title="Observe today"
              items={
                isSeaOtter
                  ? [
                      "Watch for grooming behavior that keeps their fur waterproof.",
                      "Look for floating, rolling, diving, or shell-cracking behavior.",
                      "Notice how often they use their paws and whiskers while feeding.",
                      "During rest, look for relaxed floating postures near the surface.",
                    ]
                  : animal.facts
              }
            />
            <FeatureCard
              icon={Leaf}
              title="Why this animal matters"
              items={
                isSeaOtter
                  ? [
                      "Helps maintain healthy kelp forest ecosystems.",
                      "Controls sea urchin populations.",
                      "Supports biodiversity along the coast.",
                      "Connects animal care, research, and conservation storytelling.",
                    ]
                  : animal.facts
              }
            />
          </section>

          <StoryBlock eyebrow="Behavior" title="What to watch for">
            <p>{animal.behavior}</p>
          </StoryBlock>

          <section className="grid gap-5 md:grid-cols-2">
            <TagPanel title="Prey" items={animal.prey} />
            <TagPanel title="Predators" items={animal.predators} />
          </section>

          <TagPanel title="Adaptations" items={animal.adaptations} />
          <TagPanel title="Threats" items={animal.threats} tone="warn" />

          <StoryBlock eyebrow="Conservation story" title="Why protection matters">
            <p>{animal.conservation}</p>
          </StoryBlock>

          {isSeaOtter && (
            <>
              <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-cyan-300" />
                  <h2 className="text-2xl font-bold">Ask the Marine Guide</h2>
                </div>
                <p className="leading-8 text-slate-300">
                  Suggested AI prompts could help visitors ask better questions
                  while standing in front of the exhibit.
                </p>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {[
                    "Why do sea otters groom so much?",
                    "Why are sea otters important to kelp forests?",
                    "What happens if sea otters disappear?",
                    "How does the Aquarium help rescued otters?",
                  ].map((prompt) => (
                    <button
                      key={prompt}
                      className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-left text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
                    >
                      <MessageCircle className="mb-3 h-5 w-5 text-cyan-300" />
                      {prompt}
                    </button>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <Network className="h-6 w-6 text-cyan-300" />
                  <h2 className="text-2xl font-bold">Ecosystem connections</h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-5">
                  {["Sea Otter", "Sea Urchin", "Giant Kelp", "Kelp Forest", "Coastal Life"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-center"
                      >
                        <p className="text-sm font-semibold text-white">{item}</p>
                        {index < 4 && (
                          <p className="mt-2 text-xs text-cyan-300">connected to</p>
                        )}
                      </div>
                    )
                  )}
                </div>
              </section>

              <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <Camera className="h-6 w-6 text-cyan-300" />
                  <h2 className="text-2xl font-bold">Photography tips</h2>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    "Best moments: feeding, grooming, and surface floating.",
                    "Use a fast shutter speed when they dive or roll.",
                    "Avoid shooting directly into bright reflections on the glass.",
                    "For kids, look for lower viewing windows and quieter moments.",
                  ].map((tip) => (
                    <div
                      key={tip}
                      className="rounded-2xl bg-slate-900/70 p-4 text-slate-300"
                    >
                      {tip}
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Find it here
            </p>
            <div className="mt-3 flex items-center gap-2 text-lg font-semibold">
              <MapPin className="h-5 w-5 text-cyan-300" />
              {animal.exhibit}
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Future versions could include walking time, accessible route
              options, crowd estimates, and nearby exhibits.
            </p>
            <Link
              to="/map"
              className="mt-5 inline-flex w-full justify-center rounded-full bg-cyan-300 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Show on map
            </Link>
          </div>

          <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6">
            <Waves className="h-7 w-7 text-cyan-300" />
            <h3 className="mt-4 text-xl font-bold">Visitor learning moment</h3>
            <p className="mt-3 leading-7 text-slate-300">
              This profile is designed to move visitors from recognition to
              curiosity to conservation understanding.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Young explorers
            </p>
            <h3 className="mt-2 text-xl font-bold">
              Difficulty: {animal.difficulty}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Kid-friendly summaries, observation prompts, and trivia could turn
              each exhibit into a guided discovery experience.
            </p>
            <Link
              to="/kids"
              className="mt-5 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40"
            >
              Open Kids Explorer
            </Link>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="mx-auto mt-20 max-w-7xl px-6 pb-24">
          <h2 className="text-3xl font-bold">Related animals</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Explore animals connected by ecosystem, habitat, behavior, or
            conservation story.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <AnimalCard key={a.slug} animal={a} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

function Fact({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: boolean;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 inline-flex items-center gap-2 font-semibold text-white">
        {icon && <MapPin className="h-4 w-4 text-cyan-300" />}
        {value}
      </p>
    </div>
  );
}

function StoryBlock({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold">{title}</h2>
      <div className="mt-5 space-y-5 text-lg leading-9 text-slate-300">
        {children}
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <Icon className="h-6 w-6 text-cyan-300" />
      <h2 className="mt-4 text-2xl font-bold">{title}</h2>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-slate-300">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function TagPanel({
  title,
  items,
  tone = "default",
}: {
  title: string;
  items: string[];
  tone?: "default" | "warn";
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={cn(
              "rounded-full border px-3 py-1 text-sm",
              tone === "warn"
                ? "border-rose-300/30 bg-rose-300/10 text-rose-200"
                : "border-white/10 bg-slate-900/70 text-slate-300"
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
