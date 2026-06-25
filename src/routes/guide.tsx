import { createFileRoute } from "@tanstack/react-router";
import { Send, Sparkles } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/guide")({
  head: () => ({ meta: [
    { title: "AI Marine Guide — Monterey Bay Explorer" },
    { name: "description", content: "Chat with an AI marine guide about animals, exhibits, accessibility, and your visit." },
    { property: "og:title", content: "AI Marine Guide" },
    { property: "og:description", content: "Your personal field guide, powered by AI." },
  ] }),
  component: Guide,
});

const SUGGESTIONS = [
  "What's the easiest exhibit for young kids?",
  "Which animals are nocturnal?",
  "Tell me about the kelp forest.",
  "How can I help sea otter recovery?",
];

function Guide() {
  const [q, setQ] = useState("");
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-12 pb-20">
      <div className="rounded-3xl gradient-ocean text-white p-8 sm:p-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
          <Sparkles className="h-3.5 w-3.5" /> AI Marine Guide
        </div>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05]">Ask the ocean anything.</h1>
        <p className="mt-3 text-white/85 max-w-xl">From animal behavior to wheelchair routes, your personal guide is here to help.</p>
      </div>

      <div className="mt-8 rounded-3xl border border-border/60 bg-card p-6">
        <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Try asking</div>
        <div className="mt-3 flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => setQ(s)}
              className="rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-sm text-foreground/80 hover:border-primary/40 hover:text-foreground transition"
            >
              {s}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-6 flex items-center gap-2 rounded-2xl border border-border/60 bg-background px-3 py-2"
        >
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ask about animals, exhibits, accessibility…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground py-2"
          />
          <button
            type="submit"
            disabled
            className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3.5 py-2 text-sm font-medium opacity-80"
          >
            <Send className="h-4 w-4" /> Coming soon
          </button>
        </form>
        <p className="mt-3 text-xs text-muted-foreground">
          The chatbot UI is ready — connect it to Lovable AI to power live responses.
        </p>
      </div>
    </div>
  );
}