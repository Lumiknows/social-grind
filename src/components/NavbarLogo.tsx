import { cn } from "@/lib/cn";

type NavbarLogoProps = {
  className?: string;
};

/** Compact circular seal — distinct from the hero wordmark */
export function NavbarLogo({ className }: NavbarLogoProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-10 shrink-0 md:h-11 md:w-11", className)}
      aria-hidden
    >
      <circle cx="40" cy="40" r="38" stroke="#6B1D2A" strokeWidth="1.25" />
      <path
        id="topArc"
        d="M 14 40 A 26 26 0 0 1 66 40"
        fill="none"
      />
      <path
        id="bottomArc"
        d="M 66 40 A 26 26 0 0 1 14 40"
        fill="none"
      />
      <text
        fill="#6B1D2A"
        fontSize="6.5"
        fontFamily="var(--font-montserrat), sans-serif"
        fontWeight="500"
        letterSpacing="0.12em"
      >
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          SOCIAL
        </textPath>
      </text>
      <text
        fill="#6B1D2A"
        fontSize="6.5"
        fontFamily="var(--font-montserrat), sans-serif"
        fontWeight="500"
        letterSpacing="0.12em"
      >
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          GRIND
        </textPath>
      </text>
      <circle cx="16" cy="40" r="1.75" fill="#6B1D2A" />
      <circle cx="64" cy="40" r="1.75" fill="#6B1D2A" />
      <text
        x="40"
        y="44"
        textAnchor="middle"
        fill="#6B1D2A"
        fontSize="22"
        fontFamily="var(--font-playfair-display), Georgia, serif"
        fontWeight="600"
      >
        SG
      </text>
    </svg>
  );
}
