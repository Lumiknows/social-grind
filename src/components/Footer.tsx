import { Logo } from "@/components/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/SocialIcons";

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram", icon: InstagramIcon },
  { href: "https://facebook.com", label: "Facebook", icon: FacebookIcon },
  { href: "https://linkedin.com", label: "LinkedIn", icon: LinkedInIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-beige bg-brand-cream px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <Logo variant="full" size="sm" />
          <p className="mt-4 text-xs uppercase tracking-caps text-brand-dark/60">
            Strategy. Content. Growth.
          </p>
        </div>

        <div className="flex gap-6">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-brand-red transition-colors hover:text-brand-red/70"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl text-center text-xs text-brand-dark/50">
        &copy; {new Date().getFullYear()} Social Grind. All rights reserved.
      </p>
    </footer>
  );
}
