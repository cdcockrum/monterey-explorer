import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/kids")({
  head: () => ({ meta: [
    { title: "Kids Explorer — Monterey Bay Explorer" },
    { name: "description", content: "Scavenger hunts, badges, and digital stickers for young ocean explorers." },
    { property: "og:title", content: "Kids Explorer" },
    { property: "og:description", content: "Earn badges and become a Junior Marine Explorer." },
  ] }),
  component: () => (
    <ComingSoon
      eyebrow="Kids Explorer"
      title="Become a Junior Marine Explorer."
      description="Collect digital stickers, take on photo challenges, and level up by spotting animals around the aquarium."
      icon={Sparkles}
      sections={[
        { title: "Badges", body: "Earn a sticker each time you spot a new animal." },
        { title: "Scavenger hunt", body: "A guided trail through the aquarium with surprises." },
        { title: "Marine trivia", body: "Quick questions designed for curious kids." },
        { title: "Photo challenges", body: "Capture the right moment to level up." },
      ]}
    />
  ),
});