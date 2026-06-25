import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Fish, Waves, Trash2, Sprout, ShieldCheck, Microscope, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/conservation")({
  head: () => ({ meta: [
    { title: "Conservation — Monterey Bay Explorer" },
    { name: "description", content: "Sea otter recovery, sustainable seafood, ocean climate, plastic pollution, and more." },
    { property: "og:title", content: "Conservation" },
    { property: "og:description", content: "How the Monterey Bay Aquarium protects the ocean." },
  ] }),
  component: Conservation,
});

const INITIATIVES = [
  { icon: Fish, title: "Sea Otter Recovery", body: "Rescuing, rehabilitating, and releasing southern sea otters along the California coast.", stat: "800+ otters rescued" },
  { icon: Leaf, title: "Sustainable Seafood", body: "Seafood Watch helps consumers and businesses choose ocean-friendly seafood.", stat: "30+ countries" },
  { icon: Waves, title: "Ocean Climate", body: "Tracking how warming, acidification, and oxygen loss reshape Pacific ecosystems.", stat: "1.5°C threshold" },
  { icon: Trash2, title: "Plastic Pollution", body: "Working with policy, science, and design to reduce plastic at the source.", stat: "11M tons / year" },
  { icon: Sprout, title: "Kelp Forest Restoration", body: "Restoring a foundational habitat that supports more than 800 species.", stat: "95% lost in regions" },
  { icon: ShieldCheck, title: "Marine Protected Areas", body: "Supporting science behind California's network of marine reserves.", stat: "124 MPAs" },
  { icon: Microscope, title: "Research Projects", body: "From white shark nurseries to deep-sea exploration.", stat: "50+ active studies" },
];

function Conservation() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-10">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Conservation</div>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl leading-[1.03]">
            A <span className="text-gradient-ocean">healthier ocean</span> for every generation.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            For more than 40 years, the Monterey Bay Aquarium has worked to inspire conservation of the ocean. These are some of the initiatives shaping that future.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INITIATIVES.map((i) => {
            const Icon = i.icon;
            return (
              <div key={i.title} className="group rounded-3xl border border-border/60 bg-card p-6 hover:shadow-lg transition">
                <div className="grid h-11 w-11 place-items-center rounded-2xl gradient-ocean text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5 font-display text-xl">{i.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{i.body}</p>
                <div className="mt-5 flex items-center justify-between text-xs">
                  <span className="rounded-full bg-muted px-2.5 py-1 font-medium">{i.stat}</span>
                  <Link to="/learn" className="inline-flex items-center gap-1 text-primary font-medium">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}