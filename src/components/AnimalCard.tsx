import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useState } from "react";
import { STATUS_COLOR, type Animal } from "@/data/animals";
import { cn } from "@/lib/utils";

export function AnimalCard({ animal, priority = false }: { animal: Animal; priority?: boolean }) {
  const [fav, setFav] = useState(false);
  return (
    <Link
      to="/animals/$slug"
      params={{ slug: animal.slug }}
      className="group relative block overflow-hidden rounded-3xl bg-card border border-border/60 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={animal.image}
          alt={animal.name}
          loading={priority ? "eager" : "lazy"}
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); setFav((v) => !v); }}
          aria-label="Favorite"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full glass border border-white/30 text-white transition hover:scale-105"
        >
          <Heart className={cn("h-4 w-4", fav && "fill-coral text-coral")} />
        </button>
        <span className={cn("absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-medium backdrop-blur bg-white/80 dark:bg-black/40", STATUS_COLOR[animal.status])}>
          {animal.status}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <div className="text-[11px] uppercase tracking-[0.18em] opacity-80">{animal.category}</div>
          <div className="font-display text-xl leading-tight">{animal.name}</div>
          <div className="text-xs italic opacity-80">{animal.scientificName}</div>
        </div>
      </div>
    </Link>
  );
}