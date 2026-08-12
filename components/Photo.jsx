"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNestjs,
} from "react-icons/si";

const badges = [
  {
    Icon: SiNextdotjs,
    label: "Next.js",
    position: "-top-2 left-1 sm:-left-5",
    delay: 0,
    color: "#000000",
  },
  {
    Icon: SiReact,
    label: "React",
    position: "top-10 -right-1 sm:-right-7",
    delay: 0.5,
    color: "#61DAFB",
  },
  {
    Icon: SiTypescript,
    label: "TypeScript",
    position: "bottom-10 -left-2 sm:-left-8",
    delay: 1,
    color: "#3178C6",
  },
  {
    Icon: SiNestjs,
    label: "NestJS",
    position: "-bottom-2 right-1 sm:-right-5",
    delay: 1.5,
    color: "#E0234E",
  },
];

const Photo = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* Outer orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-[340px] h-[340px]
          sm:w-[400px] sm:h-[400px]
          md:w-[450px] md:h-[450px]
          rounded-full
          border border-line/60
          pointer-events-none
        "
      />

      {/* Inner orbit */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-[300px] h-[300px]
          sm:w-[360px] sm:h-[360px]
          md:w-[405px] md:h-[405px]
          rounded-full
          border border-accent/15
          pointer-events-none
        "
      />

      {/* ==================== MOVING DOTS ==================== */}

      {/* Blue accent dot */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-full h-full
          pointer-events-none
        "
      >
        <span
          className="
            absolute
            top-[6%]
            right-[17%]
            w-2 h-2
            rounded-full
            bg-accent
          "
        />
      </motion.div>

      {/* Green accent dot */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-full h-full
          pointer-events-none
        "
      >
        <span
          className="
            absolute
            bottom-[8%]
            left-[15%]
            w-2 h-2
            rounded-full
            bg-emerald-500
          "
        />
      </motion.div>

      {/* Purple accent dot */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-full h-full
          pointer-events-none
        "
      >
        <span
          className="
            absolute
            top-[45%]
            left-[2%]
            w-2 h-2
            rounded-full
            bg-purple-500
          "
        />
      </motion.div>

      {/* ==================== MAIN PHOTO ==================== */}

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          z-10
          w-[270px] h-[270px]
          sm:w-[320px] sm:h-[320px]
          md:w-[360px] md:h-[360px]
        "
      >
        {/* Soft shadow */}
        <div className="absolute inset-4 rounded-full bg-accent/10 blur-2xl" />

        {/* Image */}
        <div
          className="
            relative
            w-full h-full
            rounded-full
            overflow-hidden
            border-[6px]
            border-white
            shadow-[0_20px_60px_rgba(15,23,42,0.14)]
            ring-1 ring-line
            bg-white
          "
        >
          <Image
            src="/image.png"
            alt="Safwen Ben Mabrouk"
            fill
            priority
            sizes="(max-width: 640px) 270px, (max-width: 768px) 320px, 360px"
            className="object-cover"
          />
        </div>

        {/* Technology badges */}
        {badges.map(({ Icon, label, position, delay, color }) => (
          <motion.div
            key={label}
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
            className={`absolute ${position} z-20`}
          >
            <div
              className="
                flex items-center gap-2
                rounded-full
                bg-white
                border border-line
                px-2.5 py-1.5
                shadow-[0_8px_25px_rgba(15,23,42,0.08)]
              "
            >
              <div
                className="
                  flex h-7 w-7
                  items-center justify-center
                  rounded-full
                  bg-subtle
                "
              >
                <Icon className="text-sm" style={{ color }} />
              </div>

              <span className="text-xs font-semibold text-ink whitespace-nowrap">
                {label}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Photo;