// components/resume/SkillsPyramid.jsx
"use client";

import { motion } from "framer-motion";
import { skillRows } from "@/components/resume/data";

export default function SkillsPyramid() {
  return (
    <div className="pyramid-wrap">
      <div className="pyramid mx-auto flex flex-col items-center gap-y-[calc(var(--tile)*0.3)] py-4">
        {skillRows.map((row, rowIndex) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: rowIndex * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-[calc(var(--tile)*0.14)]"
          >
            {/* what this line is about */}
            <div className="flex items-center gap-2.5 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-muted sm:text-[10px]">
              <span className="h-px w-5 bg-accent/50 sm:w-8" />
              {row.label}
              <span className="h-px w-5 bg-accent/50 sm:w-8" />
            </div>

            <div className="flex justify-center gap-[calc(var(--tile)*0.12)]">
              {row.items.map(({ name, Icon, color }) => (
                <div
                  key={name}
                  className="group flex flex-col items-center justify-center gap-[calc(var(--tile)*0.07)] rounded-[calc(var(--tile)*0.2)] border border-line bg-surface/85 text-ink shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-lift"
                  style={{ width: "var(--tile)", height: "calc(var(--tile) * 1.06)" }}
                >
                  <Icon
                    aria-hidden="true"
                    className="transition-[filter] duration-300 group-hover:[filter:drop-shadow(0_0_8px_currentColor)]"
                    style={{ color, fontSize: "calc(var(--tile) * 0.42)" }}
                  />
                  <span className="max-w-full whitespace-nowrap font-primary text-[8px] font-semibold tracking-tight text-ink/90 sm:text-[11px]">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}