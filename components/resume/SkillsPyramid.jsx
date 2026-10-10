// components/resume/SkillsPyramid.jsx
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { pyramidRows, moreSkills } from "@/components/resume/data";

const total = pyramidRows.reduce((n, row) => n + row.length, 0);

export default function SkillsPyramid() {
  const pyramidRef = useRef(null);
  const frame = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  // every box leans toward the mouse (desktop only). Values go into CSS vars, no React re-render.
  const handleMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const el = pyramidRef.current;
    if (!el) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--px", (((clientX - r.left) / r.width - 0.5) * 2).toFixed(3));
      el.style.setProperty("--py", (((clientY - r.top) / r.height - 0.5) * 2).toFixed(3));
    });
  };

  const handleLeave = () => {
    const el = pyramidRef.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.style.setProperty("--px", "0");
    el.style.setProperty("--py", "0");
  };

  return (
    <div className="relative isolate overflow-hidden rounded-3xl bg-ink shadow-lift ring-1 ring-white/10">
      {/* themed stage: grid + glow + floor light */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-night to-ink" />
        <div className="hud-grid fade-radial absolute inset-0 opacity-60" />
        <div className="absolute left-1/2 top-1/4 h-[420px] w-[620px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(var(--c-glow)/0.22),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-accent/25 to-transparent" />
      </div>

      {/* terminal title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-2.5 truncate font-mono text-[11px] text-white/40">~/skills/stack.sh</span>
        <span className="ml-auto font-mono text-[11px] text-white/30">
          <span className="text-saffron">$</span> {total} found
          <span className="term-cursor ml-1 inline-block h-[11px] w-[6px] translate-y-px bg-saffron" />
        </span>
      </div>

      <div className="pyramid-wrap px-3 pb-8 pt-10 sm:px-6 md:px-10">
        <div
          ref={pyramidRef}
          className="pyramid mx-auto flex flex-col items-center gap-y-[calc(var(--cube)*0.32)]"
          onPointerMove={handleMove}
          onPointerLeave={handleLeave}
        >
          {pyramidRows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: rowIndex * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center"
            >
              {row.map(({ name, Icon, color }, i) => (
                <div
                  key={name}
                  className="cube3d-item flex flex-col items-center"
                  style={{ width: "calc(var(--cube) + var(--gap))" }}
                >
                  {/* gentle floating, offset per box */}
                  <div
                    className="animate-bob"
                    style={{ animationDelay: `${((rowIndex * 3 + i) % 7) * -0.7}s` }}
                  >
                    <div className="cube3d-stage relative">
                      <div className="cube3d">
                        <div className="cube-top" aria-hidden="true" />
                        <div className="cube-right" aria-hidden="true" />
                        <div className="cube-front">
                          <Icon
                            aria-hidden="true"
                            style={{ color, fontSize: "calc(var(--cube) * 0.46)" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <span className="mt-[calc(var(--cube)*0.2)] whitespace-nowrap text-center font-mono text-[8.5px] font-bold text-white/85 sm:text-[11px]">
                    {name}
                  </span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* the rest of the stack */}
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-2">
          {moreSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] text-white/70"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
