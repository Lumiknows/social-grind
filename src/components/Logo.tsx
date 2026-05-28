import { cn } from "@/lib/cn";

const sizeClasses = {
  sm: {
    social: "text-2xl",
    grind: "text-3xl -mt-3",
  },
  md: {
    social: "text-4xl md:text-5xl",
    grind: "text-5xl md:text-6xl -mt-5",
  },
  lg: {
    social: "text-5xl md:text-7xl lg:text-8xl",
    grind: "text-6xl md:text-8xl lg:text-9xl -mt-6 md:-mt-8",
  },
};

type LogoProps = {
  size?: keyof typeof sizeClasses;
  className?: string;
};

/** Hero / footer wordmark: Playfair "Social" + script "Grind" */
export function Logo({ size = "md", className }: LogoProps) {
  const sizes = sizeClasses[size];

  return (
    <div
      className={cn("relative inline-flex flex-col items-center", className)}
      aria-label="Social Grind"
    >
      <span
        className={cn(
          "font-playfair font-semibold leading-none text-brand-red",
          sizes.social,
        )}
      >
        Social
      </span>
      <span
        className={cn(
          "font-script relative text-brand-red",
          sizes.grind,
        )}
        style={{ transform: "rotate(-2deg)" }}
      >
        Grind
      </span>
    </div>
  );
}
