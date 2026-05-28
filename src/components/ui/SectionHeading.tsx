import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  label?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  title,
  subtitle,
  label,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14 md:mb-20",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {label && (
        <p
          className={cn(
            "mb-3 text-xs uppercase tracking-caps",
            light ? "text-brand-beige" : "text-brand-red/80",
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-playfair text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl",
          light ? "text-white" : "text-brand-red",
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "decorative-line mt-6",
          align === "left" && "mx-0",
        )}
      />
      {subtitle && (
        <p
          className={cn(
            "mt-5 max-w-xl text-sm leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-brand-cream/70" : "text-brand-dark/65",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
