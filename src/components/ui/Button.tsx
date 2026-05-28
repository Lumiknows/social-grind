import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variants = {
  primary:
    "bg-brand-red text-white hover:bg-brand-red/90 border border-brand-red",
  outline:
    "bg-transparent text-brand-red border border-brand-red hover:bg-brand-red hover:text-white",
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
    "inline-flex items-center justify-center rounded-sm px-6 py-3 text-xs font-medium uppercase tracking-caps transition-colors duration-200",
    variants[variant],
    className,
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} className={classes}>
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
