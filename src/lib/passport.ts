import { achievements } from "@/data/achievements";

export type PassportProgress = {
  completedMissions: string[];
  xp: number;
};

const PASSPORT_KEY = "monterey-explorer-passport";

export function getPassportProgress(): PassportProgress {
  if (typeof window === "undefined") {
    return {
      completedMissions: [],
      xp: 0,
    };
  }

  const saved = localStorage.getItem(PASSPORT_KEY);

  if (!saved) {
    return {
      completedMissions: [],
      xp: 0,
    };
  }

  return JSON.parse(saved);
}

export function completeMission(missionSlug: string) {
  const current = getPassportProgress();

  if (current.completedMissions.includes(missionSlug)) {
    return current;
  }

  const achievement = achievements[missionSlug];

  const next: PassportProgress = {
    completedMissions: [...current.completedMissions, missionSlug],
    xp: current.xp + (achievement?.xp ?? 0),
  };

  localStorage.setItem(PASSPORT_KEY, JSON.stringify(next));

  return next;
}
