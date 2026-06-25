import { createFileRoute } from "@tanstack/react-router";
import { Map as MapIcon } from "lucide-react";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/map")({
  head: () => ({ meta: [
    { title: "Interactive Map — Monterey Bay Explorer" },
    { name: "description", content: "Vector map of every exhibit, with feeding times, accessibility, and amenities." },
    { property: "og:title", content: "Interactive Map — Monterey Bay Explorer" },
    { property: "og:description", content: "Find exhibits, restrooms, restaurants, and quiet spaces." },
  ] }),
  component: () => (
    <ComingSoon
      eyebrow="Interactive Map"
      title="Every exhibit, one tap away."
      description="Tap any exhibit to see the animals inside, feeding times, accessibility, and the fastest walking route."
      icon={MapIcon}
      sections={[
        { title: "Exhibit details", body: "Animals on view, feeding schedules, and difficulty rating for kids." },
        { title: "Amenities", body: "Bathrooms, restaurants, water refill stations, elevators, and gift shops." },
        { title: "Accessibility", body: "Wheelchair routes, quiet spaces, nursing rooms, and sensory-friendly areas." },
        { title: "Wayfinding", body: "Optimized walking routes between your favorite exhibits." },
      ]}
    />
  ),
});