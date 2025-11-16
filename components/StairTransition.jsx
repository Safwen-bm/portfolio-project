"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Stairs from "./Stairs";

export default function StairTransition() {
  const pathname = usePathname();
  const audioRef = useRef(null);

  // Load audio once
  useEffect(() => {
    audioRef.current = new Audio("/sounds/swoosh.mp3");
    audioRef.current.volume = 0.9;
  }, []);

  // Play audio on pathname change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 1, rotateY: 0 }}
        animate={{ opacity: 0, rotateY: 0 }}
        exit={{ opacity: 0, rotateY: 0 }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none fixed inset-0 z-[999] flex"
        style={{
          perspective: "2000px",
          transformStyle: "preserve-3d",
        }}
      >
        <Stairs steps={12} />
      </motion.div>
    </AnimatePresence>
  );
}
