// components/AmbientGlow.jsx
"use client";

import { motion } from "framer-motion";

const positions = {
  default: [
    { top: "-15%", left: "-10%", color: "var(--accent, #2563EB)", size: 480 },
    { bottom: "-15%", right: "-10%", color: "var(--accent-secondary, #4F46E5)", size: 420 },
  ],
  center: [
    { top: "-5%", left: "50%", color: "var(--accent, #2563EB)", size: 550, translate: "-translate-x-1/2" },
  ],
  right: [
    { top: "10%", right: "-15%", color: "var(--accent-secondary, #0EA5E9)", size: 450 },
  ],
  left: [
    { top: "10%", left: "-15%", color: "var(--accent-secondary, #4F46E5)", size: 450 },
  ],
};

const AmbientGlow = ({ variant = "default" }) => {
  const blobs = positions[variant] || positions.default;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[100px] ${b.translate || ""}`}
          style={{
            top: b.top,
            left: b.left,
            right: b.right,
            bottom: b.bottom,
            width: b.size,
            height: b.size,
            background: b.color,
          }}
          animate={{
            opacity: [0.1, 0.22, 0.1],
            scale: [1, 1.08, 1],
            x: i % 2 === 0 ? [0, 25, 0] : [0, -25, 0],
            y: i % 2 === 0 ? [0, -18, 0] : [0, 18, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AmbientGlow;