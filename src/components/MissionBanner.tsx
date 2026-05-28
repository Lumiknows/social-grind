"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { scaleIn } from "@/lib/motion";

export function MissionBanner() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const patternY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-brand-red px-6 py-20 text-center text-white md:py-28"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={
          reduced
            ? undefined
            : {
                y: patternY,
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }
        }
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/15"
        aria-hidden
      />

      <motion.div
        className="section-container relative"
        style={reduced ? undefined : { y: textY }}
      >
        <ScrollReveal variants={scaleIn}>
          <p className="text-xs uppercase tracking-caps text-white/60">
            Our Philosophy
          </p>
          <blockquote className="mx-auto mt-6 max-w-4xl">
            <span
              className="font-playfair text-5xl leading-none text-white/25 md:text-6xl"
              aria-hidden
            >
              &ldquo;
            </span>
            <h2 className="font-playfair text-2xl font-semibold leading-snug md:text-3xl lg:text-[2.75rem] lg:leading-tight">
              WE DON&apos;T JUST POST, WE POSITION.
            </h2>
            <p className="mx-auto mt-8 max-w-2xl font-playfair text-lg italic leading-relaxed text-white/85 md:text-xl">
              Helping brands grow with strategy, content, and connection.
            </p>
          </blockquote>
          <div className="mx-auto mt-10 h-px w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </ScrollReveal>
      </motion.div>
    </section>
  );
}
