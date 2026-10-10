"use client";

import { motion } from "framer-motion";
import CodeMark from "@/components/ornaments/CodeMark";

export default function SectionHeading({
  index,
  kicker,
  title,
  subtitle,
  tone = "light",
  align = "center",
  className = "",
}) {
  const dark = tone === "dark";
  const center = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-14 ${center ? "text-center" : ""} ${className}`}
    >
      <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        {index && (
          <span className="relative grid h-11 w-11 place-items-center">
            <CodeMark className="absolute inset-0 h-full w-full text-saffron" />
            <span className="relative font-mono text-[11px] font-bold text-ink">{index}</span>
          </span>
        )}
        {kicker && (
          <span className={`kicker ${dark ? "text-white/80" : "text-accent"}`}>{kicker}</span>
        )}
      </div>

      <h2 className={`h2 mt-4 ${dark ? "text-white" : "text-ink"}`}>{title}</h2>

      {center && (
        <div className="mt-5 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="h-px w-14 bg-saffron/70" />
          <CodeMark className="h-3 w-3 text-saffron" />
          <span className="h-px w-14 bg-saffron/70" />
        </div>
      )}

      {subtitle && (
        <p className={`mx-auto mt-5 max-w-xl ${dark ? "text-white/75" : "text-muted"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
