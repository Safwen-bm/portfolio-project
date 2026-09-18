"use client";

import { motion } from "framer-motion";
import AmbientGlow from "@/components/AmbientGlow";
import { FiLayers, FiCode, FiCpu } from "react-icons/fi";

const highlights = [
  {
    icon: FiLayers,
    label: "Software Engineering",
    desc: "Designing and building reliable software solutions",
  },
  {
    icon: FiCode,
    label: "Full-Stack Development",
    desc: "Frontend, backend, APIs, and databases",
  },
  {
    icon: FiCpu,
    label: "AI Development",
    desc: "NLP, machine learning, RAG, and LLMs",
  },
];

const AboutSection = () => {
  return (
    <section className="relative isolate overflow-hidden py-20 md:py-28">
      <AmbientGlow variant="center" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-accent">
            Get to know me
          </span>
          <h2 className="h2 text-ink mt-3">About Me</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-stretch">
          {/* LEFT — story + highlight cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 space-y-5"
          >
            <p className="text-muted leading-relaxed text-base md:text-lg">
              After my Technical Baccalaureate, I chose software engineering
              because I wanted to understand how software actually gets built
              how an idea becomes architecture, then code, then a real product.
              That curiosity is what pulled me into this field.
            </p>
            <p className="text-muted leading-relaxed text-base md:text-lg">
              Over five years at EPI Sousse, including two years of preparatory
              studies in Technology and Computer Science, I built a strong base
              in algorithms and data structures, then grew into software
              architecture and design patterns, full-stack web development,
              DevOps and cloud, and AI machine learning, deep learning, NLP,
              and big data.
            </p>
            <p className="text-muted leading-relaxed text-base md:text-lg">
              Today, I'm looking to bring that experience into a team, keep
              learning fast, and help build software that people actually rely
              on.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className="flex flex-col gap-2 bg-white border border-line rounded-2xl p-4 hover:border-accent/40 hover:shadow-md transition-all duration-300"
                >
                  <Icon className="text-accent" size={18} />
                  <p className="text-sm font-semibold text-ink leading-tight">
                    {label}
                  </p>
                  <p className="text-xs text-muted leading-snug">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — quote card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="relative bg-ink rounded-3xl p-7 md:p-8 h-full flex flex-col justify-center overflow-hidden">
              <span className="absolute top-3 left-5 text-7xl font-black text-white/10 leading-none select-none">
                "
              </span>
              <p className="relative text-white text-lg md:text-xl font-medium leading-relaxed">
                I don&apos;t just write code. I build systems that scale, stay
                secure, and solve real problems.
              </p>
              <div className="relative mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <p className="text-white/60 text-sm">Safwen Ben Mabrouk</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
