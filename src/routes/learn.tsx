import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/learn")({
  head: () => ({ meta: [
    { title: "Learn — Monterey Bay Explorer" },
    { name: "description", content: "Animal comparisons, food webs, ocean zones, symbiosis, and quizzes." },
    { property: "og:title", content: "Learn" },
    { property: "og:description", content: "Interactive marine science, beautifully explained." },
  ] }),
  component: () => (
    <ComingSoon
      eyebrow="Learn"
      title="Marine science, made tangible."
      description="Interactive diagrams, food webs, and quizzes that turn ocean curiosity into understanding."
      icon={GraduationCap}
      sections={[
        { title: "Ocean zones", body: "From sunlit surface to hadal trench — explore life at every depth." },
        { title: "Food webs", body: "See how kelp, plankton, and predators are connected." },
        { title: "Adaptations", body: "Camouflage, bioluminescence, schooling, and more." },
        { title: "Quizzes", body: "Short, beautiful quizzes to test what you've learned." },
      ]}
    />
  ),
});