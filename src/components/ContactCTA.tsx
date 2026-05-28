"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

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
    <section id="contact" className="bg-brand-dark px-6 py-20 text-brand-cream md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs uppercase tracking-caps text-brand-beige">
            Get in touch
          </p>
          <h2 className="mt-4 font-playfair text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            Ready to elevate your brand?
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-brand-cream/80">
            Tell us about your goals and we&apos;ll craft a strategy that
            positions you for growth. We respond within 1–2 business days.
          </p>
          <div className="mt-8">
            <Button href="mailto:hello@socialgrind.com" variant="outline" className="border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-dark">
              Start Your Grind
            </Button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
          noValidate
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-caps text-brand-beige">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border border-brand-beige/30 bg-brand-dark px-4 py-3 text-sm text-brand-cream placeholder:text-brand-cream/40 focus:border-brand-red focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-caps text-brand-beige">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-brand-beige/30 bg-brand-dark px-4 py-3 text-sm text-brand-cream placeholder:text-brand-cream/40 focus:border-brand-red focus:outline-none"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-caps text-brand-beige">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full resize-none border border-brand-beige/30 bg-brand-dark px-4 py-3 text-sm text-brand-cream placeholder:text-brand-cream/40 focus:border-brand-red focus:outline-none"
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
    </section>
  );
}
