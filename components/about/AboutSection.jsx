// components/about/AboutSection.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Caveat } from "next/font/google";
import {
  FiLayers,
  FiCode,
  FiCpu,
  FiTarget,
  FiPenTool,
  FiCompass,
  FiBox,
} from "react-icons/fi";
import CodeMark from "@/components/ornaments/CodeMark";

// handwritten font, only for the quote
const caveat = Caveat({ subsets: ["latin"], weight: ["500", "600"], display: "swap" });

const enjoy = [
  { icon: FiLayers, label: "Software Engineering" },
  { icon: FiCode, label: "Web Development" },
  { icon: FiCpu, label: "AI & Machine Learning" },
  { icon: FiTarget, label: "Problem Solving" },
  { icon: FiPenTool, label: "Design & Creativity" },
  { icon: FiCompass, label: "Exploring Technology" },
  { icon: FiBox, label: "Building Real Projects" },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-subtle py-20 text-ink md:py-28"
    >
      {/* ============ BACKGROUND IMAGE ============ */}
      <div
        className="absolute inset-0 -z-10 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="relative w-full">
          <Image
            src="/about-bg.png"
            alt=""
            width={1909}
            height={824}
            sizes="100vw"
            quality={85}
            className="h-auto w-full max-w-none opacity-30 dark:opacity-45"
          />
          {/* re-colors the photo with the active theme (hue only, details stay) */}
          <div className="absolute inset-0 bg-accent opacity-70 mix-blend-color" />
          <div className="absolute inset-0 bg-primary/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/60 to-primary/10" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-subtle to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-subtle to-transparent" />
        </div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ============ LEFT ============ */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="relative grid h-11 w-11 place-items-center">
                  <CodeMark className="absolute inset-0 h-full w-full text-saffron" />
                  <span className="relative font-mono text-[11px] font-bold text-ink">02</span>
                </span>
                <span className="kicker text-ink/80">
                  Get to know me <span className="text-accent">/</span> About Me
                </span>
              </div>

              <h2 className="font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-6xl xl:text-[78px]">
                More than
                <br />
                just a{" "}
                <span className="bg-gradient-to-r from-accent from-40% to-saffron bg-clip-text pr-1 italic text-transparent">
                  developer.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted md:text-lg"
            >
              <p className="text-ink/90">
                I enjoy turning complex ideas into software that solves real problems. Whether it's building a full-stack application, working with AI, or figuring out how different parts of a system fit together, I'm interested in understanding the problem and building the right solution.
              </p>
              <p>
                I work across frontend, backend, databases, and AI, which helps me see a project as a complete system rather than just a collection of features. I care about writing maintainable code, making thoughtful technical decisions, and building things that are genuinely useful.
              </p>
              <p>
                I'm always exploring new technologies, experimenting with ideas, and looking for better ways to build.
              </p>
            </motion.div>

            {/* QUOTE */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`${caveat.className} relative mt-10 max-w-xl pl-5 text-3xl leading-snug text-ink md:text-4xl`}
            >
              <span className="absolute bottom-1 left-0 top-1 w-0.5 rounded-full bg-gradient-to-b from-glow to-saffron" />
              “Think deeply. Build thoughtfully. Keep improving.”
            </motion.blockquote>
          </div>

          {/* ============ RIGHT — WHAT I ENJOY ============ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 lg:-translate-x-10 xl:-translate-x-20"
          >
            <div className="rounded-3xl border border-line bg-surface/75 p-5 shadow-soft md:p-6 lg:backdrop-blur-sm">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-2xl font-semibold text-ink">What I Enjoy</h3>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-light ring-1 ring-accent/20">
                  <CodeMark className="h-4 w-4 text-accent" />
                </span>
              </div>

              <ul className="space-y-3">
                {enjoy.map(({ icon: Icon, label }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.06 }}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-primary/70 px-4 py-3.5 transition-all duration-300 hover:translate-x-1 hover:border-accent/40 hover:bg-surface"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-light text-accent ring-1 ring-accent/20 transition-colors duration-300 group-hover:bg-accent group-hover:text-onaccent">
                      <Icon size={18} />
                    </span>
                    <span className="font-semibold text-ink">{label}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;