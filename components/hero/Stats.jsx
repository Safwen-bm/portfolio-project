// components/hero/Stats.jsx
"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FiClock, FiFolder, FiCpu, FiCode } from "react-icons/fi";

const stats = [
  { icon: FiClock, num: 5, suffix: "+", text: "Years Studying & Building" },
  { icon: FiFolder, num: 30, suffix: "+", text: "Projects Built" },
  { icon: FiCpu, num: 12, suffix: "+", text: "Core Technologies" },
  { icon: FiCode, infinity: true, text: "Lines of Code" },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group"
          >
            {/* gradient edge */}
            <div className="clip-hud h-full rounded-br-2xl rounded-tl-2xl bg-gradient-to-br from-white/35 via-white/10 to-glow/50 p-px transition-all duration-300 [--s:6px] group-hover:from-glow group-hover:to-saffron md:[--s:8px]">
              {/* card */}
              <div className="clip-hud relative flex h-full items-center gap-3 overflow-hidden rounded-br-[15px] rounded-tl-[15px] bg-ink/60 p-4 md:gap-4 md:p-5">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgb(var(--c-glow)/0.2),transparent_55%)]" />

                <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-glow/15 text-glow ring-1 ring-glow/30 md:h-12 md:w-12">
                  <Icon className="text-lg md:text-xl" />
                </span>

                <div className="relative text-left">
                  <div className="flex items-center gap-0.5 font-display text-white">
                    {stat.infinity ? (
                      <span className="text-4xl font-semibold leading-none md:text-5xl">∞</span>
                    ) : (
                      <>
                        <CountUp
                          end={stat.num}
                          duration={2.5}
                          enableScrollSpy
                          scrollSpyOnce
                          className="text-4xl font-semibold leading-none md:text-5xl"
                        />
                        {stat.suffix && (
                          <span className="self-center text-xl font-semibold leading-none text-glow md:text-2xl">
                            {stat.suffix}
                          </span>
                        )}
                      </>
                    )}
                  </div>

                  <p className="mt-1.5 font-mono text-[10px] uppercase leading-snug tracking-[0.12em] text-white/60 md:text-[11px]">
                    {stat.text}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Stats;
