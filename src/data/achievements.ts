export type Achievement = {
  id: string;
  title: string;
  xp: number;
  badge: string;
};

export const achievements: Record<string, Achievement> = {
  "sea-otter-detective": {
    id: "sea-otter-detective",
    title: "Sea Otter Detective",
    xp: 25,
    badge: "🦦",
  },
};
