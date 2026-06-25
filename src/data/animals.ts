import seaOtter from "@/assets/animal-sea-otter.jpg";
import jellyfish from "@/assets/animal-jellyfish.jpg";
import octopus from "@/assets/animal-octopus.jpg";
import shark from "@/assets/animal-shark.jpg";
import penguin from "@/assets/animal-penguin.jpg";
import seadragon from "@/assets/animal-seadragon.jpg";
import sardine from "@/assets/animal-sardine.jpg";
import ray from "@/assets/animal-ray.jpg";

export type ConservationStatus =
  | "Least Concern"
  | "Near Threatened"
  | "Vulnerable"
  | "Endangered"
  | "Critically Endangered";

export type AnimalCategory =
  | "Fish"
  | "Sharks"
  | "Rays"
  | "Octopus"
  | "Jellyfish"
  | "Penguins"
  | "Sea Otters"
  | "Sea Horses"
  | "Coral"
  | "Crustaceans"
  | "Mollusks"
  | "Birds"
  | "Reptiles"
  | "Mammals";

export interface Animal {
  slug: string;
  name: string;
  scientificName: string;
  family: string;
  category: AnimalCategory;
  habitat: string;
  status: ConservationStatus;
  lifespan: string;
  diet: string;
  size: string;
  weight: string;
  range: string;
  exhibit: string;
  difficulty: "Easy" | "Medium" | "Curious";
  image: string;
  tagline: string;
  facts: string[];
  behavior: string;
  predators: string[];
  prey: string[];
  adaptations: string[];
  threats: string[];
  conservation: string;
  related: string[];
}

export const ALL_CATEGORIES: AnimalCategory[] = [
  "Fish", "Sharks", "Rays", "Octopus", "Jellyfish", "Penguins",
  "Sea Otters", "Sea Horses", "Coral", "Crustaceans", "Mollusks",
  "Birds", "Reptiles", "Mammals",
];

export const STATUS_COLOR: Record<ConservationStatus, string> = {
  "Least Concern": "bg-kelp/15 text-kelp",
  "Near Threatened": "bg-shore/20 text-shore",
  "Vulnerable": "bg-coral/15 text-coral",
  "Endangered": "bg-destructive/15 text-destructive",
  "Critically Endangered": "bg-destructive/20 text-destructive",
};

export const animals: Animal[] = [
  {
    slug: "sea-otter",
    name: "Southern Sea Otter",
    scientificName: "Enhydra lutris nereis",
    family: "Mustelidae",
    category: "Sea Otters",
    habitat: "Kelp forests, coastal waters",
    status: "Endangered",
    lifespan: "10–20 years",
    diet: "Urchins, crabs, clams, mussels",
    size: "1.2 m",
    weight: "14–32 kg",
    range: "California coast",
    exhibit: "Sea Otter Exhibit · Level 1",
    difficulty: "Easy",
    image: seaOtter,
    tagline: "Furry keystone of the kelp forest.",
    facts: [
      "Has the densest fur of any mammal — up to 1,000,000 hairs per square inch.",
      "Uses rocks as tools to crack open shellfish.",
      "Holds paws while sleeping so they don't drift apart.",
    ],
    behavior: "Floats on its back, grooms constantly, and forages on the sea floor.",
    predators: ["Great white sharks", "Orcas"],
    prey: ["Sea urchins", "Crabs", "Abalone"],
    adaptations: ["Dense waterproof fur", "Tool use", "High metabolism"],
    threats: ["Oil spills", "Entanglement", "Climate change"],
    conservation: "The Aquarium's Sea Otter Program rescues, rehabilitates, and releases stranded pups.",
    related: ["giant-pacific-octopus", "leafy-sea-dragon"],
  },
  {
    slug: "moon-jelly",
    name: "Moon Jelly",
    scientificName: "Aurelia aurita",
    family: "Ulmaridae",
    category: "Jellyfish",
    habitat: "Coastal waters worldwide",
    status: "Least Concern",
    lifespan: "12–18 months",
    diet: "Plankton, small fish",
    size: "25–40 cm bell",
    weight: "~150 g",
    range: "Global temperate seas",
    exhibit: "Open Sea · Level 2",
    difficulty: "Easy",
    image: jellyfish,
    tagline: "Drifting luminaries of the open sea.",
    facts: [
      "Has no brain, heart, or bones.",
      "Bell is 95% water.",
      "Can regenerate damaged tissue.",
    ],
    behavior: "Pulses gently, drifting with currents.",
    predators: ["Sea turtles", "Sunfish"],
    prey: ["Zooplankton", "Larval fish"],
    adaptations: ["Bioluminescence", "Stinging cells"],
    threats: ["Ocean warming", "Pollution"],
    conservation: "Studied to understand ecosystem shifts in warming seas.",
    related: ["sardine-school", "giant-pacific-octopus"],
  },
  {
    slug: "giant-pacific-octopus",
    name: "Giant Pacific Octopus",
    scientificName: "Enteroctopus dofleini",
    family: "Enteroctopodidae",
    category: "Octopus",
    habitat: "Rocky reefs, kelp forests",
    status: "Least Concern",
    lifespan: "3–5 years",
    diet: "Crabs, clams, fish",
    size: "Up to 5 m arm span",
    weight: "15–50 kg",
    range: "North Pacific",
    exhibit: "Tentacles · Level 1",
    difficulty: "Curious",
    image: octopus,
    tagline: "Eight-armed problem solver of the Pacific.",
    facts: [
      "Has three hearts and blue blood.",
      "Can solve puzzles and open jars.",
      "Changes color and texture in milliseconds.",
    ],
    behavior: "Solitary and highly intelligent. Hunts mostly at night.",
    predators: ["Sea otters", "Sharks", "Seals"],
    prey: ["Crabs", "Clams", "Small fish"],
    adaptations: ["Camouflage", "Tool use", "Jet propulsion"],
    threats: ["Habitat loss", "Pollution"],
    conservation: "Research informs sustainable cephalopod management.",
    related: ["sea-otter", "leafy-sea-dragon"],
  },
  {
    slug: "great-white-shark",
    name: "Great White Shark",
    scientificName: "Carcharodon carcharias",
    family: "Lamnidae",
    category: "Sharks",
    habitat: "Coastal and offshore",
    status: "Vulnerable",
    lifespan: "70+ years",
    diet: "Seals, fish, rays",
    size: "4–6 m",
    weight: "680–1,800 kg",
    range: "Temperate oceans worldwide",
    exhibit: "Open Sea · Level 2",
    difficulty: "Medium",
    image: shark,
    tagline: "Apex navigator of the blue.",
    facts: [
      "Can detect a single drop of blood in 10 billion drops of water.",
      "Maintains warm body temperature for fast swimming.",
      "Juveniles use Monterey Bay as a nursery.",
    ],
    behavior: "Patrols coastlines, ambushes from below.",
    predators: ["Orcas"],
    prey: ["Sea lions", "Tuna", "Rays"],
    adaptations: ["Electroreception", "Counter-shading", "Endothermy"],
    threats: ["Bycatch", "Fin trade", "Habitat decline"],
    conservation: "The Aquarium pioneered juvenile white shark research.",
    related: ["spotted-eagle-ray", "sardine-school"],
  },
  {
    slug: "african-penguin",
    name: "African Penguin",
    scientificName: "Spheniscus demersus",
    family: "Spheniscidae",
    category: "Penguins",
    habitat: "Rocky coastal islands",
    status: "Critically Endangered",
    lifespan: "10–27 years",
    diet: "Sardines, anchovies",
    size: "60–70 cm",
    weight: "2.2–3.5 kg",
    range: "Southern Africa",
    exhibit: "Splash Zone · Level 1",
    difficulty: "Easy",
    image: penguin,
    tagline: "Tuxedoed swimmers from the South Atlantic.",
    facts: [
      "Also called the 'jackass penguin' for their donkey-like bray.",
      "Pink glands above their eyes help cool them down.",
      "Mate for life.",
    ],
    behavior: "Highly social; nest in burrows and forage in groups.",
    predators: ["Sharks", "Seals", "Gulls"],
    prey: ["Small schooling fish"],
    adaptations: ["Streamlined body", "Counter-shading", "Salt glands"],
    threats: ["Overfishing", "Oil spills", "Climate change"],
    conservation: "Part of an international breeding and recovery program.",
    related: ["sea-otter", "sardine-school"],
  },
  {
    slug: "leafy-sea-dragon",
    name: "Leafy Sea Dragon",
    scientificName: "Phycodurus eques",
    family: "Syngnathidae",
    category: "Sea Horses",
    habitat: "Kelp and seagrass beds",
    status: "Near Threatened",
    lifespan: "5–10 years",
    diet: "Mysid shrimp, plankton",
    size: "20–35 cm",
    weight: "small",
    range: "Southern Australia",
    exhibit: "Tentacles · Level 1",
    difficulty: "Curious",
    image: seadragon,
    tagline: "A drifting illusion of leaves.",
    facts: [
      "Leaf-shaped appendages are camouflage, not for swimming.",
      "Males carry the eggs until they hatch.",
      "Has no teeth or stomach.",
    ],
    behavior: "Drifts slowly, mimicking floating seaweed.",
    predators: ["Larger fish"],
    prey: ["Plankton", "Mysid shrimp"],
    adaptations: ["Leaf-like camouflage", "Independent eyes"],
    threats: ["Habitat loss", "Pollution"],
    conservation: "Protected under Australian law; bred in human care.",
    related: ["giant-pacific-octopus", "moon-jelly"],
  },
  {
    slug: "sardine-school",
    name: "Pacific Sardine",
    scientificName: "Sardinops sagax",
    family: "Clupeidae",
    category: "Fish",
    habitat: "Open ocean, near surface",
    status: "Least Concern",
    lifespan: "5–14 years",
    diet: "Plankton",
    size: "20–30 cm",
    weight: "100–200 g",
    range: "Eastern Pacific",
    exhibit: "Open Sea · Level 2",
    difficulty: "Easy",
    image: sardine,
    tagline: "A silver river in motion.",
    facts: [
      "Move as a single 'superorganism' to confuse predators.",
      "A core species in the Monterey Bay food web.",
      "Populations swing with ocean temperature cycles.",
    ],
    behavior: "Forms tight schools that turn and pulse in unison.",
    predators: ["Sharks", "Tuna", "Dolphins", "Seabirds"],
    prey: ["Plankton"],
    adaptations: ["Schooling behavior", "Mirror-like scales"],
    threats: ["Overfishing", "Climate shifts"],
    conservation: "Featured in the Seafood Watch sustainability guide.",
    related: ["great-white-shark", "spotted-eagle-ray"],
  },
  {
    slug: "spotted-eagle-ray",
    name: "Spotted Eagle Ray",
    scientificName: "Aetobatus narinari",
    family: "Myliobatidae",
    category: "Rays",
    habitat: "Tropical coastal waters",
    status: "Endangered",
    lifespan: "20+ years",
    diet: "Mollusks, crustaceans",
    size: "Up to 3 m wingspan",
    weight: "Up to 230 kg",
    range: "Tropical Atlantic & Pacific",
    exhibit: "Open Sea · Level 2",
    difficulty: "Medium",
    image: ray,
    tagline: "Soaring through liquid sky.",
    facts: [
      "Can leap fully out of the water.",
      "Each ray has a unique spot pattern.",
      "Crushes shells with plate-like teeth.",
    ],
    behavior: "Glides solo or in small groups along reefs.",
    predators: ["Large sharks"],
    prey: ["Clams", "Crabs", "Small fish"],
    adaptations: ["Pectoral 'wings'", "Crushing teeth"],
    threats: ["Bycatch", "Habitat loss"],
    conservation: "International trade now regulated to protect populations.",
    related: ["great-white-shark", "sardine-school"],
  },
];

export function getAnimal(slug: string) {
  return animals.find((a) => a.slug === slug);
}