"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Brand } from "@/data/brands";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

type BrandCardProps = {
  brand: Brand;
  index: number;
};

const platformMeta = {
  facebook: { label: "Facebook", Icon: FacebookIcon },
  instagram: { label: "Instagram", Icon: InstagramIcon },
} as const;

export function BrandCard({ brand, index }: BrandCardProps) {
  const reduced = useReducedMotion();
  const hasSocials = brand.socials.length > 0;

  return (
    <motion.article
      className="group flex flex-col"
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
    >
      <div
        className={cn(
          "relative aspect-square overflow-hidden border border-brand-beige/50 transition-all duration-300",
          brand.logoOnDark ? "bg-brand-dark" : "bg-white",
          hasSocials &&
            "group-hover:-translate-y-1 group-hover:border-brand-red/30 group-hover:shadow-lg group-hover:shadow-brand-red/10",
        )}
      >
        {brand.logo ? (
          <div className="absolute inset-0 p-5 md:p-6">
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              fill
              className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 45vw, 220px"
            />
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-brand-cream via-white to-brand-beige/30 p-4">
            <span className="font-display text-3xl font-semibold uppercase tracking-wider text-brand-red/80 md:text-4xl">
              {brand.monogram}
            </span>
          </div>
        )}

        {hasSocials && (
          <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-brand-dark/75 via-brand-dark/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
            <div className="flex flex-wrap justify-center gap-2">
              {brand.socials.map((social) => {
                const { label, Icon } = platformMeta[social.platform];
                return (
                  <a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-caps text-brand-dark transition-colors hover:bg-brand-red hover:text-white"
                    aria-label={`${brand.name} on ${label}`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="mt-3 space-y-2">
        <div>
          <h3 className="font-playfair text-sm font-semibold leading-snug text-brand-red md:text-base">
            {brand.name}
          </h3>
          <p className="mt-0.5 text-[10px] uppercase tracking-caps text-brand-dark/45">
            {brand.category}
          </p>
        </div>

        {hasSocials && (
          <div className="flex flex-wrap gap-2 md:hidden">
            {brand.socials.map((social) => {
              const { label, Icon } = platformMeta[social.platform];
              return (
                <a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 border border-brand-red/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-caps text-brand-red transition-colors hover:bg-brand-red hover:text-white"
                >
                  <Icon className="h-3 w-3" />
                  {label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </motion.article>
  );
}
