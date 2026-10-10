// components/hero/TopBand.jsx
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// loaded on its own: if the 3D chunk ever fails, the page still works
const ThreeBackground = dynamic(
  () => import("@/components/hero/ThreeBackground").catch(() => () => null),
  { ssr: false }
);

export default function TopBand({ children }) {
  const [show3d, setShow3d] = useState(false);

  // The 3D scene is mounted when the browser is idle, so text and photo paint first (better LCP).
  // It is skipped completely when the visitor asked the browser to save data.
  useEffect(() => {
    if (navigator.connection?.saveData) return;

    const start = () => setShow3d(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start, { timeout: 1200 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = setTimeout(start, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative isolate bg-ink text-white">
      {/* sticky 3D layer: stays on screen while you scroll through Hero, Stats and Tech Stack */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="sticky top-0 h-svh w-full overflow-hidden bg-gradient-to-b from-ink via-night to-ink">
          {show3d && <ThreeBackground />}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgb(var(--c-ink)/0.85)_100%)]" />
        </div>
      </div>

      {children}
    </div>
  );
}
