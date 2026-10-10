"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Touch devices keep native scrolling (fast + natural).
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    window.__lenis = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  // On every route change: go to the #hash target if there is one, otherwise back to the top.
  useEffect(() => {
    const timer = setTimeout(() => {
      const hash = window.location.hash.replace("#", "");
      const target = hash ? document.getElementById(hash) : null;
      const lenis = window.__lenis;

      if (target) {
        if (lenis) lenis.scrollTo(target, { offset: -80 });
        else target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
