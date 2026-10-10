// components/roadmap/RoadmapSection.jsx
"use client";

import { motion } from "framer-motion";
import {
  FiCheck,
  FiCode,
  FiGitBranch,
  FiGlobe,
  FiLayers,
  FiLayout,
  FiPlay,
  FiShield,
  FiZap,
} from "react-icons/fi";
import CodeMark, { CODE_MARK_CLIP } from "@/components/ornaments/CodeMark";
import SectionBackdrop from "@/components/ornaments/SectionBackdrop";

const steps = [
  { num: "01", label: "DISCOVERY", title: "Understand", items: ["Goals", "Requirements", "User Needs"], icon: FiPlay },
  { num: "02", label: "ARCHITECTURE", title: "Plan", items: ["System", "Data", "API"], icon: FiLayers },
  { num: "03", label: "EXPERIENCE", title: "Design", items: ["UI / UX", "User Flow", "Responsive"], icon: FiLayout },
  { num: "04", label: "DEVELOPMENT", title: "Build", items: ["Frontend", "Backend", "Features"], icon: FiCode },
  { num: "05", label: "CAPABILITIES", title: "Integrate", items: ["Smart Features", "Services", "Real-time"], icon: FiZap },
  { num: "06", label: "QUALITY", title: "Validate", items: ["Testing", "Security", "Reliability"], icon: FiShield },
  { num: "07", label: "DELIVERY", title: "Ship", items: ["Versioning", "Automation", "Deployment"], icon: FiGitBranch },
];

const Tag = ({ children }) => (
  <span className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-muted">
    {children}
  </span>
);

const Step = ({ step, index }) => {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex w-full flex-col items-center pt-2"
    >
      <div className="relative z-10 mb-5">
        <div className="relative grid h-16 w-16 place-items-center text-accent transition-colors duration-300 group-hover:text-deep">
          <span
            className="absolute inset-0 bg-accent/15 transition-colors duration-300 group-hover:bg-saffron"
            style={{ clipPath: CODE_MARK_CLIP }}
          />
          <Icon size={20} strokeWidth={1.6} className="relative" />
        </div>
        <span className="absolute -right-3 -top-1 rounded-full bg-saffron px-1.5 py-0.5 font-mono text-[10px] font-bold text-deep">
          {step.num}
        </span>
      </div>

      <div className="w-full px-1 text-center">
        <p className="mb-1 font-mono text-[10px] font-bold tracking-[0.16em] text-muted">
          {step.label}
        </p>
        <h3 className="mb-3 font-display text-2xl font-semibold tracking-tight text-ink">
          {step.title}
        </h3>
        <div className="flex flex-wrap justify-center gap-1.5">
          {step.items.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Production = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.35 }}
    className="relative z-10 flex w-full flex-col items-center pt-2"
  >
    <div className="relative mb-5 grid h-16 w-16 place-items-center text-deep">
      <span className="absolute inset-0 bg-saffron" style={{ clipPath: CODE_MARK_CLIP }} />
      <FiGlobe size={20} strokeWidth={1.6} className="relative" />
      <span className="absolute -right-2 -top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-primary bg-emerald-400 text-deep">
        <FiCheck size={10} strokeWidth={4} />
      </span>
    </div>

    <p className="mb-1 font-mono text-[10px] font-bold tracking-[0.16em] text-muted">
      PRODUCTION
    </p>
    <h3 className="mb-3 font-display text-2xl font-semibold tracking-tight text-ink">Live</h3>
    <div className="flex flex-wrap justify-center gap-1.5">
      <Tag>Deployed</Tag>
      <Tag>Ready</Tag>
    </div>
  </motion.div>
);

const RoadmapSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-20 text-ink md:py-24">
      <SectionBackdrop />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="relative grid h-11 w-11 place-items-center">
                <CodeMark className="absolute inset-0 h-full w-full text-saffron" />
                <span className="relative font-mono text-[11px] font-bold text-ink">03</span>
              </span>
              <span className="kicker text-accent">DEVELOPMENT PROCESS</span>
            </div>

            <h2 className="h2 text-ink">
              From Idea <span className="italic text-saffron">to</span> Production
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-muted md:text-right">
            From understanding the problem to delivering a reliable product
            ready for real users.
          </p>
        </motion.div>

        <div className="mb-5 flex items-center justify-between xl:hidden">
          <span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-muted lg:hidden">
            SWIPE TO EXPLORE
          </span>
          <span className="hidden font-mono text-[10px] font-semibold tracking-[0.12em] text-muted lg:block">
            SCROLL TO EXPLORE
          </span>
        </div>

        {/* Pipeline — rendered ONCE: row on xl, swipeable on smaller screens */}
        <div className="no-scrollbar -mx-4 overflow-x-auto px-4 pb-5 xl:mx-0 xl:overflow-visible xl:px-0">
          <div className="relative mx-auto flex w-max items-start gap-5 xl:w-full xl:max-w-6xl xl:justify-between xl:gap-2">
            <div className="pointer-events-none absolute left-8 right-8 top-[40px] border-t-2 border-dashed border-saffron/30" />

            {steps.map((step, index) => (
              <div key={step.num} className="w-[132px] shrink-0 xl:min-w-0 xl:flex-1">
                <Step step={step} index={index} />
              </div>
            ))}

            <div className="w-[112px] shrink-0 xl:w-[120px]">
              <Production />
            </div>
          </div>
        </div>

        {/* Bottom metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5"
        >
          <div className="flex items-center gap-3 font-mono text-[11px] font-semibold tracking-[0.15em] text-muted">
            <span>IDEA</span>
            <span className="h-px w-5 bg-saffron/60" />
            <span>BUILD</span>
            <span className="h-px w-5 bg-saffron/60" />
            <span>SHIP</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] font-medium text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Built for production
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;