import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/plan")({
  head: () => ({ meta: [
    { title: "Plan My Visit — Monterey Bay Explorer" },
    { name: "description", content: "Build an itinerary, save favorites, and get walking-time estimates." },
    { property: "og:title", content: "Plan My Visit" },
    { property: "og:description", content: "A personal itinerary for your day at the aquarium." },
  ] }),
  component: () => (
    <ComingSoon
      eyebrow="Plan My Visit"
      title="Your day, your way."
      description="Save favorite animals and events, optimize your walking route, and choose accessibility preferences."
      icon={Heart}
      sections={[
        { title: "Favorites", body: "Heart any animal or event to add it to your itinerary." },
        { title: "Walking route", body: "We'll order your stops to minimize backtracking." },
        { title: "Dining", body: "Plan around meals at the Cafe or Restaurant." },
        { title: "Accessibility", body: "Wheelchair routes, quiet times, and rest spots." },
      ]}
    />
  ),
});