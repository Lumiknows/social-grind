"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { easeOut, slideFromLeft, slideFromRight } from "@/lib/motion";

const experience = [
  {
    role: "Marketing Manager",
    description:
      "Leads creative teams, directs content strategy, develops marketing plans, and analyzes sales performance to drive growth.",
  },
  {
    role: "Social Media Manager",
    description:
      "Manages social platforms, creates and directs content, engages audiences, and analyzes performance to grow brand presence.",
  },
];

const floatingTags = ["Strategy", "Storytelling", "Community", "Growth"];

const displayText = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: easeOut },
  }),
};

function ExperienceColumn({
  role,
  description,
  index,
}: {
  role: string;
  description: string;
  index: number;
}) {
  const reduced = useReducedMotion();

  return (
    <StaggerItem>
      <div className="relative pl-8 md:pl-10">
        <motion.div
          className="absolute left-0 top-0 h-3 w-3 rounded-full bg-brand-red"
          initial={reduced ? false : { scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
            delay: index * 0.15,
          }}
        />
        <motion.div
          className="absolute left-[5px] top-3 w-px origin-top bg-brand-red/30"
          initial={reduced ? false : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2 + index * 0.15,
            ease: easeOut,
          }}
          style={{ height: "calc(100% - 12px)" }}
        />
        <ScrollReveal
          variants={index === 0 ? slideFromLeft : slideFromRight}
          amount={0.3}
        >
          <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-brand-red md:text-xl">
            {role}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-dark/75 md:text-base">
            {description}
          </p>
        </ScrollReveal>
      </div>
    </StaggerItem>
  );
}

function FounderPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [6, -6]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-6, 6]),
    springConfig,
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const scrollY = useTransform(scrollYProgress, [0, 1], [40, -20]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduced || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-lg lg:max-w-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/20 blur-[80px]"
        animate={reduced ? undefined : { scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      {/* Rotating ring */}
      <motion.div
        className="pointer-events-none absolute inset-4 rounded-[2rem] border border-brand-red/15 md:inset-6"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-8 rounded-[1.5rem] border border-dashed border-brand-red/25 md:inset-10"
        animate={reduced ? undefined : { rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />

      {/* Portrait — serves public/founder-kyla.png directly, no processing */}
      <motion.div
        className="relative flex min-h-[480px] items-end justify-center md:min-h-[560px]"
        style={
          reduced
            ? undefined
            : {
                rotateX,
                rotateY,
                transformPerspective: 1200,
              }
        }
        initial={reduced ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <motion.div
          style={reduced ? undefined : { y: scrollY }}
          className="relative w-full max-w-md"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/founder-kyla.png"
            alt="Kyla, founder of Social Grind"
            width={800}
            height={1000}
            className="relative z-10 mx-auto h-auto w-full max-h-[620px] object-contain object-bottom drop-shadow-2xl"
            draggable={false}
          />
        </motion.div>
      </motion.div>

      {/* Floating UI cards */}
      <motion.div
        className="absolute -left-2 top-8 z-10 rounded-xl border border-brand-beige/20 bg-brand-cream/95 px-4 py-3 shadow-lg backdrop-blur-md md:-left-8"
        initial={reduced ? false : { opacity: 0, x: -24, y: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        animate={reduced ? undefined : { y: [0, -8, 0] }}
        transition={
          reduced
            ? { delay: 0.4, duration: 0.6, ease: easeOut }
            : {
                opacity: { delay: 0.4, duration: 0.6, ease: easeOut },
                x: { delay: 0.4, duration: 0.6, ease: easeOut },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
              }
        }
      >
        <p className="text-[10px] uppercase tracking-caps text-brand-red/70">
          Role
        </p>
        <p className="mt-0.5 text-sm font-semibold text-brand-dark">
          Founder &amp; CD
        </p>
      </motion.div>

      <motion.div
        className="absolute -right-2 bottom-20 z-10 rounded-xl border border-brand-beige/20 bg-brand-red px-4 py-3 text-brand-cream shadow-lg md:-right-6"
        initial={reduced ? false : { opacity: 0, x: 24, y: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        animate={reduced ? undefined : { y: [0, 8, 0] }}
        transition={
          reduced
            ? { delay: 0.55, duration: 0.6, ease: easeOut }
            : {
                opacity: { delay: 0.55, duration: 0.6, ease: easeOut },
                x: { delay: 0.55, duration: 0.6, ease: easeOut },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
              }
        }
      >
        <p className="text-[10px] uppercase tracking-caps text-brand-cream/70">
          Est.
        </p>
        <p className="mt-0.5 font-display text-2xl font-bold">2024</p>
      </motion.div>

      {/* Floating tags */}
      {floatingTags.map((tag, i) => (
        <motion.span
          key={tag}
          className="absolute z-10 rounded-full border border-brand-red/20 bg-brand-cream/90 px-3 py-1 text-[10px] uppercase tracking-caps text-brand-red shadow-sm backdrop-blur-sm"
          style={{
            top: `${18 + i * 14}%`,
            right: i % 2 === 0 ? "-4%" : "auto",
            left: i % 2 === 1 ? "-6%" : "auto",
          }}
          initial={reduced ? false : { opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={reduced ? undefined : { y: [0, i % 2 === 0 ? -6 : 6, 0] }}
          transition={
            reduced
              ? { delay: 0.3 + i * 0.1, duration: 0.5 }
              : {
                  opacity: { delay: 0.3 + i * 0.1, duration: 0.5 },
                  scale: { delay: 0.3 + i * 0.1, duration: 0.5 },
                  y: {
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8 + i * 0.3,
                  },
                }
          }
        >
          {tag}
        </motion.span>
      ))}
    </div>
  );
}

export function Founder() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgTextX = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="founder" ref={sectionRef} className="overflow-hidden">
      {/* About — asymmetric editorial layout */}
      <div className="relative bg-brand-cream section-padding">
        <div
          className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-brand-beige/50 blur-3xl"
          aria-hidden
        />

        <div className="section-container relative grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Copy */}
          <div className="lg:col-span-5 lg:pr-8">
            <motion.p
              className="text-xs uppercase tracking-caps text-brand-red/70"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Meet the founder
            </motion.p>

            <motion.h2
              className="mt-4 font-display text-[clamp(3rem,10vw,5.5rem)] font-bold uppercase leading-[0.92] tracking-tight text-brand-red"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              {["About", "Kyla"].map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  variants={displayText}
                  className="block overflow-hidden"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            <motion.div
              className="mt-8 space-y-5"
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
            >
              <p className="text-sm leading-relaxed text-brand-dark/80 md:text-base md:leading-loose">
                Hi, I&apos;m{" "}
                <span className="font-playfair text-lg italic text-brand-red">
                  Kyla
                </span>
                , a registered marketing professional with a passion for
                creativity, connection, and storytelling. I founded Social Grind
                to help brands bring ideas to life — turning strategy into
                content people actually feel and engage with.
              </p>
              <p className="text-sm leading-relaxed text-brand-dark/65 md:text-base md:leading-loose">
                Whether crafting campaigns, building communities, or helping
                brands find their voice online, I create impact through
                authentic, eye-catching social media strategies.
              </p>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap gap-3"
              initial={reduced ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              {["Marketing Pro", "Content Creator", "Brand Strategist"].map(
                (skill, i) => (
                  <motion.span
                    key={skill}
                    className="rounded-full border border-brand-red/20 bg-white/60 px-4 py-2 text-xs uppercase tracking-caps text-brand-red"
                    whileHover={reduced ? undefined : { scale: 1.05, borderColor: "rgba(107,29,42,0.5)" }}
                    initial={reduced ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                  >
                    {skill}
                  </motion.span>
                ),
              )}
            </motion.div>

            <motion.p
              className="mt-10 font-script text-2xl text-brand-red/80 md:text-3xl"
              initial={reduced ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.7, ease: easeOut }}
            >
              The person behind Social Grind
            </motion.p>
          </div>

          {/* Portrait composition */}
          <div className="lg:col-span-7">
            <FounderPortrait />
          </div>
        </div>
      </div>

      {/* Work experience */}
      <div className="relative overflow-hidden bg-brand-beige/40 px-6 py-24 md:px-8 md:py-32">
        <motion.div
          className="pointer-events-none absolute -left-4 top-1/2 hidden -translate-y-1/2 select-none font-display text-[clamp(5rem,18vw,14rem)] font-bold uppercase leading-none text-brand-red/[0.06] lg:block"
          style={reduced ? undefined : { x: bgTextX }}
          aria-hidden
        >
          Work
          <br />
          Experience
        </motion.div>

        <div className="section-container relative">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-caps text-brand-red/70">
              Background
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-brand-red md:text-5xl lg:text-6xl">
              Work Experience
            </h2>
            <div className="mt-6 h-px w-20 bg-brand-red/40" />
          </ScrollReveal>

          <StaggerGrid className="mt-16 grid gap-16 md:grid-cols-2 md:gap-12 lg:mt-20 lg:gap-20">
            {experience.map((item, index) => (
              <ExperienceColumn
                key={item.role}
                role={item.role}
                description={item.description}
                index={index}
              />
            ))}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
