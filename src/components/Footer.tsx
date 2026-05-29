"use client";

import { Logo } from "@/components/Logo";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/SocialIcons";
import { fadeUp } from "@/lib/motion";

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram", icon: InstagramIcon },
  { href: "https://facebook.com", label: "Facebook", icon: FacebookIcon },
  { href: "https://linkedin.com", label: "LinkedIn", icon: LinkedInIcon },
];

const footerLinks = [
  { href: "#founder", label: "Founder" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-beige bg-brand-cream">
      <div className="section-container section-padding !py-16">
        <ScrollReveal variants={fadeUp} amount={0.3}>
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <Logo size="sm" />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-dark/60">
                A social media agency helping brands grow through strategy,
                content, and connection.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-center">
              <p className="text-xs uppercase tracking-caps text-brand-red/80">
                Navigate
              </p>
              <nav className="mt-5 flex flex-col gap-3" aria-label="Footer">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-brand-dark/70 transition-colors hover:text-brand-red"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <p className="text-xs uppercase tracking-caps text-brand-red/80">
                Follow
              </p>
              <div className="mt-5 flex gap-4">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-beige/80 text-brand-red transition-all hover:border-brand-red/30 hover:bg-brand-red/5 hover:shadow-md"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-brand-beige/80 pt-8 sm:flex-row">
            <p className="text-xs text-brand-dark/50">
              &copy; {new Date().getFullYear()} Social Grind. All rights reserved.
            </p>
            <a
              href="#"
              className="text-xs uppercase tracking-caps text-brand-dark/50 transition-colors hover:text-brand-red"
            >
              Back to top
            </a>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
