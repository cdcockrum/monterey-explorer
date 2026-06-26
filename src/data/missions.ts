export type MissionStep = {
  title: string;
  description: string;
};

export type Mission = {
  id: number;
  slug: string;
  title: string;
  category: string;
  objective: string;
  duration: string;
  difficulty: string;
  completionMessage: string;
  animalSlug?: string;
  image: string;
  steps: MissionStep[];
};

export const missions: Mission[] = [
  {
    id: 1,
    slug: "sea-otter-detective",
    title: "Sea Otter Detective",
    category: "Keystone Species",
    objective:
      "Observe sea otters closely and discover why one small predator helps protect an entire underwater forest.",
    duration: "15–20 minutes",
    difficulty: "Easy",
    animalSlug: "sea-otter",
    image: "/images/missions/sea-otter.jpg",
    completionMessage:
    completionMessage:
      "Excellent observation! Sea otters eat sea urchins, preventing them from destroying kelp forests. Healthy kelp forests provide food, shelter, and nursery habitat for hundreds of marine species.",
    steps: [
      {
        title: "Watch quietly for one minute",
        description:
          "Spend one minute simply observing the otters before reading any signs.",
      },
      {
        title: "Look for grooming",
        description:
          "Notice how often the otters groom their fur. Their dense fur keeps them warm because they have almost no body fat.",
      },
      {
        title: "Look for tools",
        description:
          "See if an otter uses a rock or shell to crack open food. Sea otters are one of the few mammals known to use tools.",
      },
      {
        title: "Connect otters to kelp forests",
        description:
          "Think about how eating sea urchins allows kelp forests to thrive and support countless other species.",
      },
    ],
  },
];

export function getMission(slug: string): Mission | undefined {
  return missions.find((mission) => mission.slug === slug);
}
