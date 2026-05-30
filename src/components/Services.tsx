"use client";

import { useRef } from "react";
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
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useServicesAnimation } from "@/components/services/useServicesAnimation";

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

const TITLE = "Content That Connects";
const TITLE_WORDS = TITLE.split(" ");

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <article
      data-service-card
      className="card-hover group relative flex h-full flex-col border border-brand-cream/80 bg-brand-cream p-8 will-change-transform"
    >
      <div className="absolute left-0 top-0 h-1 w-0 bg-brand-red transition-all duration-300 group-hover:w-full" />
      <div
        data-service-icon
        className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-brand-red/15 bg-brand-red/5 will-change-transform"
      >
        <service.icon
          className="text-brand-red"
          size={26}
          strokeWidth={1.25}
          aria-hidden
        />
      </div>
      <span className="text-[10px] font-medium uppercase tracking-caps text-brand-red/50">
        0{index + 1}
      </span>
      <h3 className="mt-2 font-playfair text-xl font-semibold text-brand-red">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-dark/70">
        {service.description}
      </p>
    </article>
  );
}

export function Services() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useServicesAnimation(
    {
      sectionRef,
      bgRef,
      labelRef,
      titleRef,
      lineRef,
      subtitleRef,
      accentLineRef,
      gridRef,
    },
    reduced,
  );

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 bg-brand-beige/80"
        aria-hidden
      />

      <div className="section-container">
        <div className="mb-14 text-center md:mb-20">
          <p
            ref={labelRef}
            className="mb-3 text-xs uppercase tracking-caps text-brand-red/80"
          >
            Services
          </p>
          <h2
            ref={titleRef}
            className="font-playfair text-3xl font-semibold leading-tight text-brand-red md:text-4xl lg:text-5xl"
          >
            {TITLE_WORDS.map((word, index) => (
              <span key={word} data-word className="inline-block">
                {word}
                {index < TITLE_WORDS.length - 1 ? "\u00A0" : ""}
              </span>
            ))}
          </h2>
          <div
            ref={lineRef}
            className="decorative-line mx-auto mt-6 h-px w-16 origin-center bg-gradient-to-r from-transparent via-brand-red/50 to-transparent"
          />
          <p
            ref={subtitleRef}
            className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-brand-dark/65"
          >
            End-to-end social media support — from strategy through execution —
            built to grow your brand with intention.
          </p>
        </div>

        <div
          ref={accentLineRef}
          className="mb-5 h-px w-full origin-left bg-gradient-to-r from-brand-red/60 via-brand-red/25 to-transparent"
          aria-hidden
        />

        <div
          ref={gridRef}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
