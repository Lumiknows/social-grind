import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const portfolioItems = [
  {
    src: "/img1.jpg",
    title: "Brand Identity",
    alt: "Social Grind brand identity and logo applications",
  },
  {
    src: "/img2.jpg",
    title: "Style Guide",
    alt: "Social Grind typography and color palette style guide",
  },
  {
    src: "/img3.jpg",
    title: "Brand Collateral",
    alt: "Social Grind brand collateral and mockups",
  },
  {
    src: "/img4.png",
    title: "Digital Presence",
    alt: "Social Grind digital and social media branding",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-brand-cream px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Our Work"
          subtitle="Brands we've helped position and grow"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {portfolioItems.map((item) => (
            <figure
              key={item.src}
              className="group overflow-hidden rounded-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-beige transition-transform duration-300 group-hover:scale-[1.01]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs uppercase tracking-caps text-brand-dark/70">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
