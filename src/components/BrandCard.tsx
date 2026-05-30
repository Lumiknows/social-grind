"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import { LiveSitePreview } from "@/components/LiveSitePreview";
import type { Brand } from "@/data/brands";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/SocialIcons";

type BrandCardProps = {
  brand: Brand;
  index: number;
};

const platformMeta = {
  facebook: { label: "Facebook", Icon: FacebookIcon },
  instagram: { label: "Instagram", Icon: InstagramIcon },
  tiktok: { label: "TikTok", Icon: TikTokIcon },
  website: { label: "Visit site", Icon: Globe },
} as const;

function BranchStrip({ brand }: { brand: Brand }) {
  if (!brand.branches?.length) return null;

  return (
    <div className="grid grid-cols-2 gap-1.5">
      {brand.branches.map((branch) => (
        <a
          key={branch.url}
          href={branch.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-w-0 items-center gap-1.5 rounded-sm border border-brand-beige/70 bg-white/80 px-1.5 py-1 text-[9px] font-semibold uppercase tracking-caps text-brand-dark/70 transition-colors hover:border-brand-red/30 hover:bg-brand-red hover:text-white"
          aria-label={`${brand.name} — ${branch.name} on Facebook`}
        >
          {branch.avatar ? (
            <span className="relative h-5 w-5 shrink-0 overflow-hidden rounded-full border border-brand-beige/60">
              <Image
                src={branch.avatar}
                alt=""
                fill
                className="object-cover"
                sizes="20px"
              />
            </span>
          ) : null}
          <span className="truncate">{branch.name}</span>
        </a>
      ))}
    </div>
  );
}

export function BrandCard({ brand, index }: BrandCardProps) {
  const reduced = useReducedMotion();
  const hasSocials = brand.socials.length > 0;
  const hasLivePreview = Boolean(brand.websiteUrl);

  if (hasLivePreview && brand.websiteUrl) {
    return (
      <motion.article
        className="col-span-2 flex flex-col sm:col-span-3 lg:col-span-4"
        initial={reduced ? false : { opacity: 0, y: 24 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: index * 0.04 }}
      >
        <LiveSitePreview url={brand.websiteUrl} name={brand.name} />
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="font-playfair text-lg font-semibold text-brand-red md:text-xl">
              {brand.name}
            </h3>
            <p className="mt-1 text-[10px] uppercase tracking-caps text-brand-dark/45">
              {brand.category}
            </p>
          </div>
          <a
            href={brand.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start border border-brand-red/25 px-4 py-2.5 text-xs font-semibold uppercase tracking-caps text-brand-red transition-all hover:border-brand-red hover:bg-brand-red hover:text-white sm:self-auto"
          >
            <Globe className="h-3.5 w-3.5" aria-hidden />
            Visit live site
            <ExternalLink className="h-3 w-3 opacity-60" aria-hidden />
          </a>
        </div>
      </motion.article>
    );
  }

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

        <BranchStrip brand={brand} />
      </div>
    </motion.article>
  );
}
