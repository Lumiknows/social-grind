"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Parallax } from "@/components/motion/Parallax";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { slideFromLeft, slideFromRight } from "@/lib/motion";

const portfolioItems = [
  {
    src: "/img1.jpg",
    title: "Brand Identity",
    alt: "Social Grind brand identity and logo applications",
  },
  {
    src: "/img2.jpg",
    title: "Style Guide",
    alt: "Social Grind typography and color palette style guide",
  },
  {
    src: "/img3.jpg",
    title: "Brand Collateral",
    alt: "Social Grind brand collateral and mockups",
  },
  {
    src: "/img4.png",
    title: "Digital Presence",
    alt: "Social Grind digital and social media branding",
  },
];

function PortfolioCard({
  item,
  index,
}: {
  item: (typeof portfolioItems)[0];
  index: number;
}) {
  const reduced = useReducedMotion();
  const speed = index % 2 === 0 ? 0.25 : 0.35;

  return (
    <StaggerItem>
      <ScrollReveal
        variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
        amount={0.15}
      >
        <figure className="group">
          <Parallax speed={speed}>
            <motion.div
              className="relative overflow-hidden border border-brand-beige/60 bg-brand-beige/30 p-2 shadow-sm"
              whileHover={reduced ? undefined : { scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-playfair text-xl text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-caps text-white/70">
                    View project
                  </p>
                </div>
              </div>
            </motion.div>
          </Parallax>
          <figcaption className="mt-4 flex items-center justify-between text-xs uppercase tracking-caps text-brand-dark/60">
            <span>{item.title}</span>
            <span className="text-brand-red/40 transition-colors group-hover:text-brand-red">
              0{index + 1}
            </span>
          </figcaption>
        </figure>
      </ScrollReveal>
    </StaggerItem>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-brand-cream">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeading
            label="Portfolio"
            title="Our Work"
            subtitle="A glimpse at the brand systems, campaigns, and digital experiences we craft for clients."
          />
        </ScrollReveal>

        <StaggerGrid className="grid gap-8 sm:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.src} item={item} index={index} />
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
