"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export type ServicesAnimationRefs = {
  sectionRef: RefObject<HTMLElement | null>;
  bgRef: RefObject<HTMLDivElement | null>;
  labelRef: RefObject<HTMLParagraphElement | null>;
  titleRef: RefObject<HTMLHeadingElement | null>;
  lineRef: RefObject<HTMLDivElement | null>;
  subtitleRef: RefObject<HTMLParagraphElement | null>;
  accentLineRef: RefObject<HTMLDivElement | null>;
  gridRef: RefObject<HTMLDivElement | null>;
};

export function useServicesAnimation(
  refs: ServicesAnimationRefs,
  reduced: boolean,
) {
  useGSAP(
    () => {
      if (reduced || !refs.sectionRef.current) return;

      const section = refs.sectionRef.current;
      const words = refs.titleRef.current?.querySelectorAll("[data-word]");
      const cards = refs.gridRef.current?.querySelectorAll("[data-service-card]");
      const icons = refs.gridRef.current?.querySelectorAll("[data-service-icon]");

      if (!words?.length || !cards?.length || !icons?.length) return;

      gsap.set(refs.labelRef.current, { autoAlpha: 0, y: 24 });
      gsap.set(words, { autoAlpha: 0, y: 36 });
      gsap.set(refs.lineRef.current, {
        scaleX: 0,
        transformOrigin: "center center",
      });
      gsap.set(refs.subtitleRef.current, { autoAlpha: 0, y: 20 });
      gsap.set(cards, { autoAlpha: 0, y: 48, scale: 0.96 });
      gsap.set(icons, { autoAlpha: 0, scale: 0.6 });
      gsap.set(refs.accentLineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      const hoverCleanups: (() => void)[] = [];
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          const { isDesktop } = context.conditions!;

          if (isDesktop && refs.bgRef.current) {
            gsap.to(refs.bgRef.current, {
              y: -36,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            });
          }

          const cardStagger = isDesktop ? 0.1 : 0.06;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 72%",
              once: true,
            },
          });

          tl.to(refs.labelRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
          })
            .to(
              words,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.65,
                stagger: 0.09,
                ease: "power3.out",
              },
              "-=0.28",
            )
            .to(
              refs.lineRef.current,
              {
                scaleX: 1,
                duration: 0.75,
                ease: "power2.inOut",
              },
              "-=0.35",
            )
            .to(
              refs.subtitleRef.current,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.55,
                ease: "power3.out",
              },
              "-=0.25",
            )
            .to(
              cards,
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: cardStagger,
                ease: "power3.out",
              },
              "-=0.15",
            )
            .to(
              icons,
              {
                autoAlpha: 1,
                scale: 1,
                duration: 0.45,
                stagger: cardStagger * 0.85,
                ease: "back.out(1.6)",
              },
              "-=0.35",
            )
            .to(
              refs.accentLineRef.current,
              {
                scaleX: 1,
                duration: isDesktop ? 1.1 : 0.7,
                ease: "power2.inOut",
              },
              "-=0.45",
            );

          if (isDesktop) {
            cards.forEach((card) => {
              const icon = card.querySelector("[data-service-icon]");
              const onEnter = () => {
                gsap.to(card, { y: -6, duration: 0.32, ease: "power2.out" });
                if (icon) {
                  gsap.to(icon, {
                    scale: 1.05,
                    duration: 0.32,
                    ease: "power2.out",
                  });
                }
              };
              const onLeave = () => {
                gsap.to(card, { y: 0, duration: 0.38, ease: "power2.out" });
                if (icon) {
                  gsap.to(icon, {
                    scale: 1,
                    duration: 0.38,
                    ease: "power2.out",
                  });
                }
              };
              card.addEventListener("mouseenter", onEnter);
              card.addEventListener("mouseleave", onLeave);
              hoverCleanups.push(() => {
                card.removeEventListener("mouseenter", onEnter);
                card.removeEventListener("mouseleave", onLeave);
              });
            });
          }

          return () => {
            hoverCleanups.forEach((fn) => fn());
          };
        },
      );

      return () => {
        mm.revert();
      };
    },
    { scope: refs.sectionRef, dependencies: [reduced] },
  );
}
