import Image from "next/image";
import { cn } from "@/lib/cn";

const imageSizes = {
  circle: {
    sm: { width: 48, height: 48, className: "h-10 w-10 md:h-12 md:w-12" },
    md: { width: 64, height: 64, className: "h-14 w-14" },
    lg: { width: 80, height: 80, className: "h-16 w-16" },
  },
  full: {
    sm: { width: 160, height: 80, className: "h-12 w-auto md:h-14" },
    md: { width: 240, height: 120, className: "h-16 w-auto md:h-20" },
    lg: { width: 400, height: 200, className: "h-28 w-auto md:h-36 lg:h-44" },
  },
};

type LogoProps = {
  variant?: "circle" | "full";
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
};

export function Logo({
  variant = "full",
  size = "md",
  className,
  priority = false,
}: LogoProps) {
  const config = imageSizes[variant][size];
  const src = variant === "circle" ? "/logo-circle.png" : "/logo-full.png";
  const alt =
    variant === "circle"
      ? "Social Grind monogram"
      : "Social Grind";

  return (
    <Image
      src={src}
      alt={alt}
      width={config.width}
      height={config.height}
      priority={priority}
      className={cn(config.className, "object-contain", className)}
    />
  );
}
