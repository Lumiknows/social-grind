"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
};

export function Parallax({
  children,
  className,
  speed = 0.4,
  direction = "up",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const distance = 80 * speed;
  const output =
    direction === "up"
      ? [distance, -distance]
      : [-distance, distance];

  const y = useTransform(scrollYProgress, [0, 1], output);

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} style={{ y }} className={cn(className)}>
      {children}
    </motion.div>
  );
}

type ParallaxFadeProps = ParallaxProps & {
  fade?: boolean;
};

export function ParallaxFade({
  children,
  className,
  speed = 0.3,
  fade = true,
}: ParallaxFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40 * speed, -40 * speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0, 1, 1, 0]);

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity: fade ? opacity : 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
