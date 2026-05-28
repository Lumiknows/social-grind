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
import { SectionHeading } from "@/components/ui/SectionHeading";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: MessageCircle,
    title: "Engagement",
    description: "Build meaningful conversations that turn followers into loyal advocates.",
  },
  {
    icon: Target,
    title: "Strategy",
    description: "Data-driven plans tailored to your brand goals and audience.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Analytics and optimization to scale your reach and impact.",
  },
  {
    icon: Smartphone,
    title: "Social Media",
    description: "Platform-native content that resonates across every channel.",
  },
  {
    icon: Calendar,
    title: "Planning",
    description: "Consistent calendars and campaigns that keep your brand top of mind.",
  },
  {
    icon: Lightbulb,
    title: "Creative",
    description: "Fresh ideas and visuals that capture attention and tell your story.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Foster connections that strengthen your brand and drive loyalty.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-brand-beige px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Content That Connects"
          subtitle="What we do for your brand"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col items-center rounded-sm bg-brand-cream/60 p-8 text-center transition-shadow hover:shadow-md"
            >
              <service.icon
                className="mb-5 text-brand-red"
                size={36}
                strokeWidth={1.25}
                aria-hidden
              />
              <h3 className="text-sm font-semibold uppercase tracking-caps text-brand-red">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-dark/75">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
