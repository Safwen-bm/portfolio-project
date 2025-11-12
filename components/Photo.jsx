// components/Photo.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative w-72 h-72 md:w-80 md:h-80"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-cyan-500/40 shadow-2xl"
        whileHover={{ rotateX: 10, rotateY: -10 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src="/image.png"
          alt="Safwen Ben Mabrouk"
          fill
          priority
          className="object-contain"
        />
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 -m-6 rounded-3xl border-4 border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-70"
        style={{ filter: "blur(2px)" }}
      />
    </motion.div>
  );
};

export default Photo;