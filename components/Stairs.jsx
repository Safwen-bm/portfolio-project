// components/Stairs.jsx
"use client";

import { motion } from "framer-motion";

export default function Stairs({ steps = 10 }) {
  const panelBase = "absolute inset-0 w-full h-full rounded-xl origin-bottom pointer-events-none";

  return (
    <>
      <div className="stairs-chromatic pointer-events-none">
        {Array.from({ length: steps }).map((_, i) => (
          <div key={`chr-${i}`} className={`${panelBase} -z-10 stairs-chromatic-layer`} style={{ zIndex: steps - i }} />
        ))}
      </div>

      {Array.from({ length: steps }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "120%", rotateX: 60, scale: 1.6, opacity: 0, filter: "blur(10px) saturate(1.2)" }}
          animate={{ y: "-10%", rotateX: 0, scale: 1, opacity: 1, filter: "blur(0px) saturate(1)" }}
          exit={{ y: "-200%", rotateX: -30, scale: 1.05, opacity: 0, filter: "blur(14px) saturate(0.9)" }}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
          className={`${panelBase} stairs-panel`}
          style={{ zIndex: steps - i, transformStyle: "preserve-3d", perspective: 2000 }}
        />
      ))}
    </>
  );
}