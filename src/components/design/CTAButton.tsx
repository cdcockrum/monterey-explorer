import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function CTAButton({
  to,
  children,
  variant = "primary",
  className,
}: CTAButtonProps) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold transition",
        variant === "primary"
          ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          : "border border-white/15 bg-white/10 text-white backdrop-blur hover:border-cyan-300/40 hover:bg-white/15",
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
