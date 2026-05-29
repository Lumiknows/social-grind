"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FacebookEmbed } from "@/components/FacebookEmbed";
import { Button } from "@/components/ui/Button";
import type { Client } from "@/data/clients";
import { cn } from "@/lib/cn";

type ClientShowcaseProps = {
  client: Client;
  index: number;
};

export function ClientShowcase({ client, index }: ClientShowcaseProps) {
  const hasEmbeds = client.embeds.length > 0;
  const videoEmbeds = client.embeds.filter((e) => e.type === "video");
  const postEmbeds = client.embeds.filter((e) => e.type === "post");
  const featuredVideo = videoEmbeds[0];
  const logoOnDark = client.id === "dark-side-bar";
  const clientNumber = String(index + 1).padStart(2, "0");

  return (
    <ScrollReveal amount={0.1}>
      <article
        className={cn(
          "overflow-hidden border border-brand-beige/50 bg-white/70 shadow-sm",
          index > 0 && "mt-12 md:mt-16",
        )}
      >
        {/* Client header */}
        <div className="border-b border-brand-beige/40 bg-brand-cream/40 px-6 py-6 md:px-8 md:py-7">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-5">
              <span
                className="mt-1 font-playfair text-2xl font-semibold text-brand-red/25 md:text-3xl"
                aria-hidden
              >
                {clientNumber}
              </span>
              <div
                className={cn(
                  "relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden border border-brand-beige/60 p-2 md:h-20 md:w-20",
                  logoOnDark ? "bg-brand-dark" : "bg-white",
                )}
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain object-center"
                  sizes="80px"
                />
              </div>
              <div className="min-w-0 pt-0.5">
                <h3 className="font-playfair text-xl font-semibold text-brand-red md:text-2xl">
                  {client.name}
                </h3>
                {client.location && (
                  <p className="mt-1 text-xs uppercase tracking-caps text-brand-dark/45">
                    {client.location}
                  </p>
                )}
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-brand-dark/70">
                  {client.tagline}
                </p>
              </div>
            </div>

            <a
              href={client.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 self-start border border-brand-red/20 px-4 py-2.5 text-xs font-semibold uppercase tracking-caps text-brand-red transition-all hover:border-brand-red hover:bg-brand-red hover:text-white md:self-center"
            >
              Facebook
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </div>

        {/* Campaign content */}
        {hasEmbeds ? (
          <div className="px-6 py-8 md:px-8 md:py-10">
            <p className="mb-6 text-xs uppercase tracking-caps text-brand-dark/40">
              Campaign content
            </p>

            {featuredVideo && postEmbeds.length > 0 ? (
              /* Portrait reel + posts: asymmetric layout */
              <div className="grid items-start gap-8 lg:grid-cols-[minmax(260px,340px)_1fr] lg:gap-12 xl:gap-16">
                <div className="lg:sticky lg:top-28">
                  <FacebookEmbed
                    embed={featuredVideo}
                    featured
                  />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  {postEmbeds.map((embed) => (
                    <FacebookEmbed key={embed.href} embed={embed} />
                  ))}
                </div>
              </div>
            ) : featuredVideo ? (
              /* Video only */
              <div className="flex justify-center">
                <FacebookEmbed embed={featuredVideo} featured />
              </div>
            ) : (
              /* Posts only */
              <div
                className={cn(
                  "grid gap-6",
                  postEmbeds.length > 1
                    ? "md:grid-cols-2"
                    : "mx-auto max-w-xl",
                )}
              >
                {postEmbeds.map((embed) => (
                  <FacebookEmbed key={embed.href} embed={embed} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-start gap-4 border-t border-dashed border-brand-beige/80 bg-brand-cream/30 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8">
            <p className="text-sm text-brand-dark/65">
              Follow {client.name} on Facebook for the latest updates and
              events.
            </p>
            <Button href={client.facebookUrl} variant="outline">
              View on Facebook
            </Button>
          </div>
        )}
      </article>
    </ScrollReveal>
  );
}
