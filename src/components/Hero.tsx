import Image from "next/image";
import { Logo } from "@/components/Logo";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-brand-cream px-6 py-20 text-center">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]"
        aria-hidden
      >
        <Image
          src="/logo-circle.png"
          alt=""
          width={480}
          height={480}
          className="h-[28rem] w-[28rem] object-contain md:h-[36rem] md:w-[36rem]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <p className="mb-6 text-xs uppercase tracking-caps text-brand-dark/60">
          Social Media Agency
        </p>

        <Logo variant="full" size="lg" priority />

        <p className="mt-10 text-xs uppercase tracking-caps text-brand-dark md:text-sm">
          Strategy. Content. Growth.
        </p>

        <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-caps text-brand-dark/50">
          <span className="h-px w-8 bg-brand-beige" aria-hidden />
          <span>Est. 2024</span>
          <span className="h-px w-8 bg-brand-beige" aria-hidden />
        </div>
      </div>
    </section>
  );
}
