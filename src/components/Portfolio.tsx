"use client";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ClientShowcase } from "@/components/ClientShowcase";
import { clients } from "@/data/clients";

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-brand-cream">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeading
            label="Portfolio"
            title="Our Work"
            subtitle="Social campaigns and content we've crafted for Cebu brands — see the live posts and reels on Facebook."
          />
        </ScrollReveal>

        <div className="mx-auto max-w-5xl">
          {clients.map((client, index) => (
            <ClientShowcase key={client.id} client={client} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
