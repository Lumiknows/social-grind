"use client";

import { useEffect, useState } from "react";

function getReducedMotionPreference() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(getReducedMotionPreference);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    function onChange() {
      setReduced(media.matches);
    }

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
