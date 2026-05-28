import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      <h2 className="font-playfair text-3xl font-semibold text-brand-red md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-xs uppercase tracking-caps text-brand-dark/70">
          {subtitle}
        </p>
      )}
    </div>
  );
}
