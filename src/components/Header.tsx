"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-beige/60 bg-brand-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="shrink-0" aria-label="Social Grind home">
          <Logo variant="circle" size="sm" priority />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-caps text-brand-dark transition-colors hover:text-brand-red"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" className="py-2.5">
            Let&apos;s Talk
          </Button>
        </nav>

        <button
          type="button"
          className="flex items-center justify-center text-brand-red md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-brand-beige/60 bg-brand-cream transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-4 px-6 py-6" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-caps text-brand-dark"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" className="w-full text-center">
            Let&apos;s Talk
          </Button>
        </nav>
      </div>
    </header>
  );
}
