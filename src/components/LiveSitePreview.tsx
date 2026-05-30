"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type LiveSitePreviewProps = {
  url: string;
  name: string;
  className?: string;
};

function hostFromUrl(url: string) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

function microlinkScreenshotUrl(url: string) {
  const params = new URLSearchParams({
    url,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
    "viewport.width": "1280",
    "viewport.height": "800",
    "viewport.deviceScaleFactor": "1",
  });
  return `https://api.microlink.io/?${params.toString()}`;
}

const IFRAME_TIMEOUT_MS = 12_000;

export function LiveSitePreview({ url, name, className }: LiveSitePreviewProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [shouldMount, setShouldMount] = useState(false);
  const [status, setStatus] = useState<"loading" | "loaded" | "blocked">(
    "loading",
  );
  const host = hostFromUrl(url);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldMount(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldMount || status !== "loading") return;
    const timer = window.setTimeout(() => {
      setStatus((prev) => (prev === "loading" ? "blocked" : prev));
    }, IFRAME_TIMEOUT_MS);
    return () => window.clearTimeout(timer);
  }, [shouldMount, status]);

  const handleLoad = () => {
    const savedScroll = window.scrollY;
    setStatus("loaded");
    requestAnimationFrame(() => {
      if (Math.abs(window.scrollY - savedScroll) > 1) {
        window.scrollTo(0, savedScroll);
      }
    });
  };

  return (
    <div
      className={cn(
        "overflow-hidden border border-brand-beige/60 bg-white shadow-sm",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-brand-beige/50 bg-brand-cream/80 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-brand-beige" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-brand-beige" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-brand-beige" aria-hidden />
        <span className="ml-2 truncate font-mono text-[10px] text-brand-dark/50">
          {host}
        </span>
        {status === "loaded" && (
          <span className="ml-auto text-[9px] uppercase tracking-caps text-brand-red/70">
            Live
          </span>
        )}
      </div>

      <div
        ref={wrapperRef}
        className="relative aspect-[16/10] overflow-hidden bg-brand-cream/40"
      >
        {status === "blocked" ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={microlinkScreenshotUrl(url)}
            alt={`${name} website preview`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        ) : (
          shouldMount && (
            <iframe
              src={url}
              title={`${name} live preview`}
              sandbox="allow-scripts allow-same-origin allow-forms"
              referrerPolicy="no-referrer"
              loading="lazy"
              tabIndex={-1}
              onLoad={handleLoad}
              className={cn(
                "pointer-events-none absolute left-0 top-0 origin-top-left border-0 transition-opacity duration-500",
                status === "loaded" ? "opacity-100" : "opacity-0",
              )}
              style={{
                width: "200%",
                height: "200%",
                transform: "scale(0.5)",
              }}
            />
          )
        )}
      </div>
    </div>
  );
}
