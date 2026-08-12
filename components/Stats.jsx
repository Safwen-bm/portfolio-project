// components/Stats.jsx
"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FiClock, FiFolder, FiCpu, FiCode } from "react-icons/fi";
import { projects } from "@/components/work/projectsData";

const stats = [
  {
    icon: FiClock,
    num: 3,
    suffix: "+",
    text: "Years Coding",
    gradient: "linear-gradient(135deg, #3B82F6, #2563EB)",
  },
  {
    icon: FiFolder,
    num: 30,
    suffix: "+",
    text: "Projects Delivered",
    gradient: "linear-gradient(135deg, #A855F7, #7C3AED)",
  },
  {
    icon: FiCpu,
    num: 12,
    suffix: "+",
    text: "Core Technologies",
    gradient: "linear-gradient(135deg, #FB923C, #EA580C)",
  },
  {
    icon: FiCode,
    infinity: true,
    text: "Lines of Code",
    gradient: "linear-gradient(135deg, #14B8A6, #0D9488)",
  },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 md:gap-8 py-14 md:py-16 border-y border-line">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-center justify-center gap-3 md:gap-4"
          >
            <div
              className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl flex items-center justify-center shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
              style={{ background: stat.gradient }}
            >
              <Icon className="text-white text-xl md:text-2xl" />
            </div>

            <div className="text-left">
              <div className="flex items-center gap-0.5">
                {stat.infinity ? (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl md:text-4xl font-black text-ink leading-none"
                  >
                    ∞
                  </motion.span>
                ) : (
                  <>
                    <CountUp
                      end={stat.num}
                      duration={2.5}
                      className="text-3xl md:text-4xl font-black text-ink leading-none"
                    />
                    {stat.suffix && (
                      <span className="text-lg md:text-xl font-black text-ink leading-none self-center">
                        {stat.suffix}
                      </span>
                    )}
                  </>
                )}
              </div>

              <p className="text-xs md:text-sm text-muted mt-1">{stat.text}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Stats;