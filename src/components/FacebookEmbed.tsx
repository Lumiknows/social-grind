"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import type { ClientEmbed } from "@/data/clients";
import { cn } from "@/lib/cn";

type FacebookEmbedProps = {
  embed: ClientEmbed;
  className?: string;
  /** Featured portrait reels get the phone-frame treatment. */
  featured?: boolean;
};

function isPortrait(embed: ClientEmbed) {
  if (embed.type === "post") return false;
  return embed.orientation !== "landscape";
}

function buildEmbedSrc(embed: ClientEmbed) {
  const encoded = encodeURIComponent(embed.href);
  const portrait = isPortrait(embed);
  const width = embed.type === "video" ? (portrait ? 320 : 560) : 500;
  const base =
    embed.type === "video"
      ? "https://www.facebook.com/plugins/video.php"
      : "https://www.facebook.com/plugins/post.php";

  return `${base}?href=${encoded}&show_text=false&width=${width}`;
}

function EmbedFallback({
  embed,
  className,
}: {
  embed: ClientEmbed;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex min-h-[200px] flex-col items-center justify-center gap-4 border border-brand-beige/60 bg-brand-beige/20 p-8 text-center",
        className,
      )}
    >
      {embed.label && (
        <p className="text-xs uppercase tracking-caps text-brand-dark/50">
          {embed.label}
        </p>
      )}
      <p className="text-sm text-brand-dark/70">
        Preview unavailable. View this content on Facebook.
      </p>
      <a
        href={embed.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-caps text-brand-red transition-colors hover:text-brand-red/80"
      >
        View on Facebook
        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
      </a>
    </div>
  );
}

function PortraitFrame({
  children,
  featured,
}: {
  children: React.ReactNode;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        featured ? "max-w-[300px] sm:max-w-[320px]" : "max-w-[280px]",
      )}
    >
      <div
        className={cn(
          "overflow-hidden rounded-[1.75rem] border border-brand-dark/15 bg-brand-dark shadow-xl shadow-brand-dark/15",
          featured ? "p-2.5" : "p-2",
        )}
      >
        <div className="relative aspect-[9/16] overflow-hidden rounded-[1.35rem] bg-black">
          {children}
        </div>
      </div>
      <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-brand-dark/10" aria-hidden />
    </div>
  );
}

export function FacebookEmbed({
  embed,
  className,
  featured = false,
}: FacebookEmbedProps) {
  const [failed, setFailed] = useState(false);
  const portrait = isPortrait(embed);

  if (failed) {
    return <EmbedFallback embed={embed} className={className} />;
  }

  const iframe = (
    <iframe
      title={embed.label ?? "Facebook embed"}
      src={buildEmbedSrc(embed)}
      className="absolute inset-0 h-full w-full border-0"
      scrolling="no"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );

  return (
    <div className={cn("flex flex-col", className)}>
      {embed.label && (
        <p className="mb-3 text-xs uppercase tracking-caps text-brand-dark/50">
          {embed.label}
        </p>
      )}

      {embed.type === "video" && portrait ? (
        <PortraitFrame featured={featured}>{iframe}</PortraitFrame>
      ) : (
        <div
          className={cn(
            "relative w-full overflow-hidden border border-brand-beige/60 bg-brand-cream/30",
            embed.type === "video"
              ? "aspect-video"
              : "mx-auto aspect-[4/5] max-w-md bg-white",
          )}
        >
          {iframe}
        </div>
      )}

      <a
        href={embed.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "mt-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-caps text-brand-dark/45 transition-colors hover:text-brand-red",
          embed.type === "video" && portrait && "justify-center",
        )}
      >
        Open on Facebook
        <ExternalLink className="h-3 w-3" aria-hidden />
      </a>
    </div>
  );
}
