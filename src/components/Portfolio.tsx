"use client";

import { ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { BrandCard } from "@/components/BrandCard";
import { InstagramIcon } from "@/components/SocialIcons";
import { brands, socialGrindInstagram } from "@/data/brands";

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-brand-cream">
      {/* PDF-inspired red title band */}
      <div className="bg-brand-red px-6 py-14 text-center md:py-20">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-caps text-brand-cream/55">
            Portfolio Highlights
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-[0.95] tracking-wide text-brand-cream md:text-6xl lg:text-7xl">
            Brands We&apos;ve
            <br />
            Worked With
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-brand-cream/30" />
        </ScrollReveal>
      </div>

      <div className="section-padding !pt-14 !pb-20">
        <div className="section-container">
          <ScrollReveal>
            <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-brand-dark/65">
              Past collaborations we&apos;ve supported across web, hospitality,
              food, entertainment, and lifestyle — explore live sites and
              social channels below.
            </p>
          </ScrollReveal>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 lg:gap-7">
            {brands.map((brand, index) => (
              <BrandCard key={brand.id} brand={brand} index={index} />
            ))}
          </div>

          <ScrollReveal>
            <div className="mx-auto mt-16 max-w-xl border border-brand-beige/60 bg-white/70 p-8 text-center shadow-sm">
              <p className="text-xs uppercase tracking-caps text-brand-dark/45">
                More work
              </p>
              <p className="mt-3 font-playfair text-xl text-brand-red">
                See campaigns &amp; reels on Instagram
              </p>
              <a
                href={socialGrindInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 border border-brand-red/25 px-5 py-3 text-xs font-semibold uppercase tracking-caps text-brand-red transition-all hover:border-brand-red hover:bg-brand-red hover:text-white"
              >
                <InstagramIcon className="h-4 w-4" />
                @socialgrind.ceb
                <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
