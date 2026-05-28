"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Parallax } from "@/components/motion/Parallax";
import { slideFromLeft, slideFromRight } from "@/lib/motion";

export function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:hello@socialgrind.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-brand-dark text-brand-cream"
    >
      <Parallax speed={0.5} className="pointer-events-none absolute -right-20 top-0">
        <div className="h-80 w-80 rounded-full bg-brand-red/15 blur-3xl" aria-hidden />
      </Parallax>
      <Parallax speed={0.35} direction="down" className="pointer-events-none absolute -left-20 bottom-0">
        <div className="h-64 w-64 rounded-full bg-brand-beige/10 blur-3xl" aria-hidden />
      </Parallax>

      <div className="section-container relative grid gap-14 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal variants={slideFromLeft}>
          <div>
            <p className="text-xs uppercase tracking-caps text-brand-beige">
              Get in touch
            </p>
            <h2 className="mt-4 font-playfair text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              Ready to elevate your brand?
            </h2>
            <div className="mt-6 h-px w-16 bg-brand-red/60" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-brand-cream/75">
              Tell us about your goals and we&apos;ll craft a strategy that
              positions you for growth. We respond within 1–2 business days.
            </p>

            <ul className="mt-10 space-y-4">
              <li className="flex items-center gap-3 text-sm text-brand-cream/80">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-beige/20 bg-brand-cream/5">
                  <Mail size={16} strokeWidth={1.25} className="text-brand-beige" />
                </span>
                hello@socialgrind.com
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-cream/80">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-beige/20 bg-brand-cream/5">
                  <MapPin size={16} strokeWidth={1.25} className="text-brand-beige" />
                </span>
                Available worldwide — remote first
              </li>
            </ul>

            <div className="mt-10">
              <Button
                href="mailto:hello@socialgrind.com"
                variant="outline"
                className="border-brand-cream/50 text-brand-cream hover:border-brand-cream hover:bg-brand-cream hover:text-brand-dark"
              >
                Start Your Grind
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variants={slideFromRight} delay={0.1}>
          <div className="border border-brand-beige/15 bg-brand-cream/5 p-8 backdrop-blur-sm md:p-10">
            <h3 className="font-playfair text-xl text-white">Send a message</h3>
            <p className="mt-2 text-sm text-brand-cream/60">
              Share a few details and we&apos;ll be in touch.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-5"
              noValidate
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs uppercase tracking-caps text-brand-beige"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="input-field"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs uppercase tracking-caps text-brand-beige"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="input-field"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs uppercase tracking-caps text-brand-beige"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="input-field resize-none"
                  placeholder="Tell us about your brand and goals..."
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
              {submitted && (
                <p className="text-sm text-brand-beige" role="status">
                  Opening your email client…
                </p>
              )}
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
