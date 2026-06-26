import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Award,
  Fish,
  Map,
  CalendarDays,
  Sparkles,
  Leaf,
  GraduationCap,
  Heart,
  Menu,
  Moon,
  Sun,
  Waves,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/animals", label: "Animals", icon: Fish },
  { to: "/map", label: "Map", icon: Map },
  { to: "/schedule", label: "Schedule", icon: CalendarDays },
  { to: "/conservation", label: "Conservation", icon: Leaf },
  { to: "/learn", label: "Learn", icon: GraduationCap },
  { to: "/plan", label: "Plan Visit", icon: Heart },
  { to: "/passport", label: "Passport", icon: Award },
  { to: "/guide", label: "AI Guide", icon: Sparkles },
] as const;

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("mba-theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("mba-theme", next ? "dark" : "light");
  };
  return { dark, toggle };
}

export function SiteShell({ children }: { children: ReactNode }) {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-50 glass border-b border-border/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
            <span className="grid h-9 w-9 place-items-center rounded-2xl gradient-ocean text-white shadow-sm">
              <Waves className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Monterey Bay
              <span className="ml-1 text-muted-foreground font-normal">Explorer</span>
            </span>
          </Link>
          <nav className="ml-6 hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                activeProps={{ className: "bg-muted text-foreground" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-full border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted transition"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
              className="grid h-9 w-9 lg:hidden place-items-center rounded-full border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
        {open && (
          <nav className="lg:hidden border-t border-border/60 px-4 py-3 grid grid-cols-2 gap-2 animate-fade-in">
            {NAV.map((n) => {
              const Icon = n.icon;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-2xl bg-muted/60 px-3 py-2.5 text-sm font-medium text-foreground"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {n.label}
                </Link>
              );
            })}
          </nav>
        )}
      </header>

      <main className={cn("min-h-[60vh]")}>{children}</main>

      <footer className="mt-24 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-xl gradient-ocean text-white">
                <Waves className="h-4 w-4" />
              </span>
              <span className="font-display font-semibold">Monterey Bay Explorer</span>
            </div>
            <p className="mt-3 text-muted-foreground">
              A field guide to the ocean — built for visitors, learners, and the curious.
            </p>
          </div>
          <FooterCol title="Explore" links={[["/animals","Animals"],["/map","Map"],["/schedule","Daily Schedule"]]} />
          <FooterCol title="Learn" links={[["/conservation","Conservation"],["/learn","Learn"],["/kids","Kids Explorer"]]} />
          <FooterCol title="Visit" links={[["/plan","Plan My Visit"],["/guide","AI Marine Guide"]]} />
        </div>
        <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
          A demo experience. Not affiliated with the Monterey Bay Aquarium.
        </div>
      </footer>
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="text-foreground font-medium">{title}</div>
      <ul className="mt-3 space-y-2">
        {links.map(([to, label]) => (
          <li key={to}>
            <Link to={to} className="text-muted-foreground hover:text-foreground transition">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
