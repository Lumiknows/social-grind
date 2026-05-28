"use client";

import {
  Calendar,
  Lightbulb,
  MessageCircle,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Target,
    title: "Strategy",
    description:
      "Data-driven plans tailored to your brand goals and audience.",
  },
  {
    icon: MessageCircle,
    title: "Engagement",
    description:
      "Build meaningful conversations that turn followers into loyal advocates.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Analytics and optimization to scale your reach and impact.",
  },
  {
    icon: Smartphone,
    title: "Social Media",
    description:
      "Platform-native content that resonates across every channel.",
  },
  {
    icon: Calendar,
    title: "Planning",
    description:
      "Consistent calendars and campaigns that keep your brand top of mind.",
  },
  {
    icon: Lightbulb,
    title: "Creative",
    description:
      "Fresh ideas and visuals that capture attention and tell your story.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Foster connections that strengthen your brand and drive loyalty.",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const reduced = useReducedMotion();

  return (
    <StaggerItem>
      <motion.article
        className="card-hover group relative flex h-full flex-col border border-brand-cream/80 bg-brand-cream p-8"
        whileHover={reduced ? undefined : { y: -6 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <div className="absolute left-0 top-0 h-1 w-0 bg-brand-red transition-all duration-300 group-hover:w-full" />
        <motion.div
          className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-brand-red/15 bg-brand-red/5"
          whileHover={reduced ? undefined : { scale: 1.08, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <service.icon
            className="text-brand-red"
            size={26}
            strokeWidth={1.25}
            aria-hidden
          />
        </motion.div>
        <span className="text-[10px] font-medium uppercase tracking-caps text-brand-red/50">
          0{index + 1}
        </span>
        <h3 className="mt-2 font-playfair text-xl font-semibold text-brand-red">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-dark/70">
          {service.description}
        </p>
      </motion.article>
    </StaggerItem>
  );
}

export function Services() {
  return (
    <section id="services" className="section-padding bg-brand-beige/80">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeading
            label="Services"
            title="Content That Connects"
            subtitle="End-to-end social media support — from strategy through execution — built to grow your brand with intention."
          />
        </ScrollReveal>

        <StaggerGrid className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
