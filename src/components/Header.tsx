"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavbarLogo } from "@/components/NavbarLogo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const navLinks = [
  { href: "#founder", label: "Founder" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Brands" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-brand-beige/80 bg-brand-cream/98 shadow-sm shadow-brand-dark/5 backdrop-blur-md"
          : "border-b border-transparent bg-brand-cream/80 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#"
          className="group flex shrink-0 items-center gap-3"
          aria-label="Social Grind home"
        >
          <NavbarLogo className="transition-transform duration-300 group-hover:scale-105" />
          <span className="hidden font-playfair text-lg font-semibold text-brand-red sm:block">
            Social Grind
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <Button href="#contact" className="py-2.5 px-5">
            Let&apos;s Talk
          </Button>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-beige/80 text-brand-red transition-colors hover:border-brand-red/30 hover:bg-brand-beige/30 md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-brand-beige/60 bg-brand-cream/98 backdrop-blur-md transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-6" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm px-3 py-3 text-xs uppercase tracking-caps text-brand-dark transition-colors hover:bg-brand-beige/40 hover:text-brand-red"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 border-t border-brand-beige/60 pt-4">
            <Button href="#contact" className="w-full justify-center">
              Let&apos;s Talk
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
