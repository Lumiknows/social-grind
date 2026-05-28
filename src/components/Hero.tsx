"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { Parallax } from "@/components/motion/Parallax";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { easeOut } from "@/lib/motion";

const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeOut },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const watermarkScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden bg-brand-cream px-6 pb-16 pt-12 text-center"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(107,29,42,0.08),transparent)]"
        aria-hidden
      />

      <Parallax speed={0.6} className="pointer-events-none absolute -right-32 top-1/4">
        <div className="h-96 w-96 rounded-full bg-brand-beige/40 blur-3xl" aria-hidden />
      </Parallax>
      <Parallax speed={0.45} direction="down" className="pointer-events-none absolute -left-24 bottom-1/4">
        <div className="h-80 w-80 rounded-full bg-brand-red/5 blur-3xl" aria-hidden />
      </Parallax>

      <motion.div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.035]"
        style={
          reduced
            ? undefined
            : { scale: watermarkScale, y: watermarkY }
        }
        aria-hidden
      >
        <span className="font-playfair text-[18rem] font-bold leading-none text-brand-red md:text-[26rem]">
          SG
        </span>
      </motion.div>

      <motion.div
        className="relative z-10 flex max-w-3xl flex-col items-center"
        variants={reduced ? undefined : heroStagger}
        initial={reduced ? false : "hidden"}
        animate={reduced ? undefined : "visible"}
        style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          variants={heroItem}
          className="mb-8 inline-flex items-center gap-3 text-xs uppercase tracking-caps text-brand-dark/55"
        >
          <span className="h-px w-10 bg-brand-red/30" aria-hidden />
          Social Media Agency
          <span className="h-px w-10 bg-brand-red/30" aria-hidden />
        </motion.p>

        <motion.div variants={heroItem}>
          <Logo size="lg" />
        </motion.div>

        <motion.p
          variants={heroItem}
          className="mt-12 text-xs uppercase tracking-caps text-brand-dark/70 md:text-sm"
        >
          Strategy. Content. Growth.
        </motion.p>

        <motion.div
          variants={heroItem}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href="#contact">Start Your Grind</Button>
          <Button href="#portfolio" variant="outline">
            View Our Work
          </Button>
        </motion.div>

        <motion.div
          variants={heroItem}
          className="mt-14 flex items-center gap-4 text-xs uppercase tracking-caps text-brand-dark/45"
        >
          <span className="h-px w-12 bg-brand-beige" aria-hidden />
          <span>Est. 2024</span>
          <span className="h-px w-12 bg-brand-beige" aria-hidden />
        </motion.div>
      </motion.div>

      <motion.a
        href="#services"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-brand-red/50 transition-colors hover:text-brand-red"
        aria-label="Scroll to services"
        initial={reduced ? false : { opacity: 0, y: 10 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6, ease: easeOut }}
      >
        <span className="text-[10px] uppercase tracking-caps">Explore</span>
        <motion.span
          animate={reduced ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} strokeWidth={1.25} />
        </motion.span>
      </motion.a>
    </section>
  );
}
