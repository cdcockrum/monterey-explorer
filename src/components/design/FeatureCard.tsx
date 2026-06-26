import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  to: string;
  className?: string;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  to,
  className,
}: FeatureCardProps) {
  return (
    <Link
      to={to}
      className={cn(
        "group block rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl transition-all duration-300",
        "hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.08] hover:shadow-2xl",
        className
      )}
    >
      <Icon className="h-8 w-8 text-cyan-300 transition-transform group-hover:scale-110" />

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-300">
        {description}
      </p>

      <div className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-300">
        Explore
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
