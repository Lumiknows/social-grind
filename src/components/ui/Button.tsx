import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variants = {
  primary:
    "bg-brand-red text-white border border-brand-red shadow-md shadow-brand-red/20 hover:bg-brand-red/90 hover:shadow-lg hover:shadow-brand-red/25 hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "bg-transparent text-brand-red border border-brand-red hover:bg-brand-red hover:text-white hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "bg-transparent text-brand-dark border border-transparent hover:text-brand-red",
};

export function Button({
  children,
  variant = "primary",
  href,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-none px-7 py-3.5 text-xs font-semibold uppercase tracking-caps transition-all duration-300",
    variants[variant],
    className,
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
