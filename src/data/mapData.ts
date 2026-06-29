export type Exhibit = {
  id: string;
  title: string;
  icon: string;
  category: string;
  body: string;
  feeding: string;
  mission: string;
  missionSlug: string;
  xp: number;
  amenities: string;
  accessibility: string;
  color: string;
};

export const EXHIBITS: Exhibit[] = [
  {
    id: "sea-otters",
    title: "Sea Otters",
    icon: "🦦",
    category: "Marine Mammals",
    body: "Observe tool use, grooming behavior, and kelp forest connections.",
    feeding: "10:30 AM",
    mission: "Sea Otter Detective",
    missionSlug: "sea-otter-detective",
    xp: 25,
    amenities: "Restrooms, café, stroller parking, and water refill nearby.",
    accessibility: "Wheelchair-friendly route available with elevator access.",
    color: "cyan",
  },
  {
    id: "kelp-forest",
    title: "Kelp Forest",
    icon: "🌿",
    category: "Ecosystem",
    body: "A living underwater forest filled with fish, swaying kelp, and ecosystem connections.",
    feeding: "11:00 AM",
    mission: "Kelp Forest Keeper",
    missionSlug: "kelp-forest-keeper",
    xp: 25,
    amenities: "Nearby seating and water refill station.",
    accessibility: "Accessible viewing area available.",
    color: "emerald",
  },
  {
    id: "open-sea",
    title: "Open Sea",
    icon: "🦈",
    category: "Large Habitat",
    body: "Watch sharks, tuna, turtles, and schooling fish move through open water.",
    feeding: "3:00 PM",
    mission: "Shark Tracker",
    missionSlug: "shark-tracker",
    xp: 30,
    amenities: "Café and restrooms nearby.",
    accessibility: "Wide pathways and accessible viewing area.",
    color: "blue",
  },
  {
    id: "jellies",
    title: "Jellies",
    icon: "🪼",
    category: "Drifters",
    body: "Explore drifting, glowing animals that move with the currents.",
    feeding: "Ongoing",
    mission: "Jellyfish Drift",
    missionSlug: "jellyfish-drift",
    xp: 20,
    amenities: "Quiet seating nearby.",
    accessibility: "Low-light exhibit with accessible pathways.",
    color: "violet",
  },
  {
    id: "penguins",
    title: "Splash Zone",
    icon: "🐧",
    category: "Family Favorite",
    body: "Observe penguin social behavior, swimming patterns, and feeding interactions.",
    feeding: "1:30 PM",
    mission: "Penguin Pathfinder",
    missionSlug: "penguin-pathfinder",
    xp: 20,
    amenities: "Family restrooms and stroller parking nearby.",
    accessibility: "Accessible viewing area available.",
    color: "amber",
  },
];