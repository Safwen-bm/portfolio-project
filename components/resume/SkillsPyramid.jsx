// components/resume/SkillsPyramid.jsx
"use client";

import { motion } from "framer-motion";
import { skillRows } from "@/components/resume/data";

// top to bottom. Anything not listed here is added after, in its original order.
const ORDER = ["Frontend", "Backend", "AI", "Databases"];

const orderedRows = [...skillRows].sort((a, b) => {
  const ia = ORDER.indexOf(a.label);
  const ib = ORDER.indexOf(b.label);
  return (ia === -1 ? ORDER.length : ia) - (ib === -1 ? ORDER.length : ib);
});

export default function SkillsPyramid() {
  // the capstone is as wide as the top plate (tiles + gaps + padding)
  const topCount = orderedRows[0]?.items.length ?? 3;
  const capWidth = `calc(var(--tile) * ${(topCount * 1.1 + 0.1).toFixed(2)})`;

  return (
    <div className="pyramid-wrap">
      {/* --tile is overridden here so the widest row leaves room for the side labels on large screens */}
      <div className="pyramid mx-auto flex flex-col items-center gap-[calc(var(--tile)*0.1)] py-4 [--tile:clamp(36px,9cqw,92px)]">
        {/* CAPSTONE: the point of the pyramid (decorative) */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, y: -16, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-b from-saffron via-accent/60 to-accent/15"
          style={{
            width: capWidth,
            height: "calc(var(--tile) * 2)",
            clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
          }}
        />

        {orderedRows.map((row, rowIndex) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: rowIndex * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex w-max flex-col items-center gap-[calc(var(--tile)*0.08)]"
          >
            {/* label: above the row on small screens, beside the row (following the slope) on lg+ */}
            <div className="flex items-center gap-2 whitespace-nowrap font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-muted sm:text-[10px] lg:absolute lg:left-full lg:top-1/2 lg:ml-5 lg:-translate-y-1/2">
              <span className="h-px w-5 bg-accent/50 sm:w-8 lg:w-6" />
              {row.label}
              <span className="h-px w-5 bg-accent/50 sm:w-8 lg:hidden" />
            </div>

            {/* the plate is what makes each row read as a step of the pyramid */}
            <div className="flex justify-center gap-[calc(var(--tile)*0.1)] rounded-[calc(var(--tile)*0.3)] border border-line bg-subtle/70 p-[calc(var(--tile)*0.1)] shadow-soft">
              {row.items.map(({ name, Icon, color }) => (
                <div
                  key={name}
                  className="group flex flex-col items-center justify-center gap-[calc(var(--tile)*0.07)] rounded-[calc(var(--tile)*0.2)] border border-line bg-surface/90 text-ink shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-lift"
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