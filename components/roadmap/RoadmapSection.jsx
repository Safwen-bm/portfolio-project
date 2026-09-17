"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
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

const steps = [
  {
    num: "01",
    label: "DISCOVERY",
    title: "Understand",
    items: ["Goals", "Requirements", "User Needs"],
    icon: FiPlay,
  },
  {
    num: "02",
    label: "ARCHITECTURE",
    title: "Plan",
    items: ["System", "Data", "API"],
    icon: FiLayers,
  },
  {
    num: "03",
    label: "EXPERIENCE",
    title: "Design",
    items: ["UI / UX", "User Flow", "Responsive"],
    icon: FiLayout,
  },
  {
    num: "04",
    label: "DEVELOPMENT",
    title: "Build",
    items: ["Frontend", "Backend", "Features"],
    icon: FiCode,
  },
  {
    num: "05",
    label: "CAPABILITIES",
    title: "Integrate",
    items: ["Smart Features", "Services", "Real-time"],
    icon: FiZap,
  },
  {
    num: "06",
    label: "QUALITY",
    title: "Validate",
    items: ["Testing", "Security", "Reliability"],
    icon: FiShield,
  },
  {
    num: "07",
    label: "DELIVERY",
    title: "Ship",
    items: ["Versioning", "Automation", "Deployment"],
    icon: FiGitBranch,
  },
];

const TechTag = ({ children }) => (
  <span className="rounded-md border border-line bg-white px-2 py-1 text-[9px] font-medium text-muted">
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
      transition={{
        duration: 0.45,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-1 min-w-0 flex-col items-center pt-2"
    >
      {/* Node */}
      <div className="relative z-10 mb-5">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl border bg-white shadow-[0_6px_20px_rgba(15,23,42,0.05)] transition-all duration-300 group-hover:-translate-y-1 ${
            step.accent
              ? "border-accent/40 shadow-[0_8px_25px_rgba(37,99,235,0.12)]"
              : "border-line"
          }`}
        >
          <Icon
            size={18}
            strokeWidth={1.5}
            className={step.accent ? "text-accent" : "text-ink"}
          />
        </div>

        {/* Number badge */}
        <span
          className={`absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[8px] font-bold ${
            step.accent ? "bg-accent text-white" : "bg-ink text-white"
          }`}
        >
          {step.num}
        </span>
      </div>

      {/* Content */}
      <div className="w-full px-1 text-center">
        <p className="mb-1 text-[8px] font-bold tracking-[0.16em] text-muted">
          {step.label}
        </p>

        <h3
          className={`mb-3 text-[15px] font-bold tracking-tight ${
            step.accent ? "text-accent" : "text-ink"
          }`}
        >
          {step.title}
        </h3>

        <div className="flex flex-wrap justify-center gap-1.5">
          {step.items.map((item) => (
            <TechTag key={item}>{item}</TechTag>
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
    className="relative z-10 flex flex-col items-center pt-2"
  >
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-ink bg-ink text-white shadow-[0_10px_30px_rgba(15,23,42,0.15)]">
      <div className="relative">
        <FiGlobe size={18} strokeWidth={1.5} />
        <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500">
          <FiCheck size={10} strokeWidth={3} />
        </span>
      </div>
    </div>

    <p className="mb-1 text-[8px] font-bold tracking-[0.16em] text-muted">
      PRODUCTION
    </p>

    <h3 className="mb-3 text-[15px] font-bold tracking-tight text-ink">Live</h3>

    <div className="flex flex-wrap justify-center gap-1.5">
      <TechTag>Deployed</TechTag>
      <TechTag>Ready</TechTag>
    </div>
  </motion.div>
);

const RoadmapSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-line bg-subtle/30 py-20 md:py-24">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Soft accent glow */}
      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-blue-500/[0.035] blur-3xl" />

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
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[9px] font-bold tracking-[0.2em] text-muted">
                DEVELOPMENT PROCESS
              </span>
            </div>

            <h2 className="h2 text-ink">
              From Idea <span className="text-muted">to</span> Production
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-muted md:text-right">
            From understanding the problem to delivering a reliable product
            ready for real users.
          </p>
        </motion.div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden xl:block">
          <div className="relative mx-auto max-w-6xl">
            {/* Continuous pipeline line */}
            <div className="pointer-events-none absolute left-[24px] right-[24px] top-[36px] h-px bg-line" />

            <div className="relative flex items-start justify-between gap-2">
              {steps.map((step, index) => (
                <Step key={step.num} step={step} index={index} />
              ))}

              {/* Production node */}
              <div className="w-[120px] shrink-0">
                <Production />
              </div>
            </div>
          </div>
        </div>

        {/* ================= TABLET ================= */}
        <div className="hidden lg:block xl:hidden">
          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[9px] font-semibold tracking-[0.12em] text-muted">
                SCROLL TO EXPLORE
              </span>
              <FiArrowUpRight size={14} className="rotate-45 text-muted" />
            </div>

            <div
              className="relative -mx-4 overflow-x-auto px-4 pb-5"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Continuous line for tablet */}
              <div className="pointer-events-none absolute left-[40px] right-[40px] top-[36px] h-px bg-line" />

              <div className="relative flex w-max items-start gap-6">
                {steps.map((step, index) => (
                  <div key={step.num} className="w-[140px] shrink-0">
                    <Step step={step} index={index} />
                  </div>
                ))}

                <div className="w-[120px] shrink-0">
                  <Production />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[9px] font-semibold tracking-[0.12em] text-muted">
                SWIPE TO EXPLORE
              </span>
              <FiArrowUpRight size={14} className="rotate-45 text-muted" />
            </div>

            <div
              className="relative -mx-4 overflow-x-auto px-4 pb-5"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Continuous line for mobile */}
              <div className="pointer-events-none absolute left-[40px] right-[40px] top-[36px] h-px bg-line" />

              <div className="relative flex w-max items-start gap-5">
                {steps.map((step, index) => (
                  <div key={step.num} className="w-[130px] shrink-0">
                    <Step step={step} index={index} />
                  </div>
                ))}

                <div className="w-[110px] shrink-0">
                  <Production />
                </div>
              </div>
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
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-semibold tracking-[0.15em] text-muted">
              IDEA
            </span>
            <span className="h-px w-5 bg-line" />
            <span className="text-[9px] font-semibold tracking-[0.15em] text-muted">
              BUILD
            </span>
            <span className="h-px w-5 bg-line" />
            <span className="text-[9px] font-semibold tracking-[0.15em] text-muted">
              SHIP
            </span>
          </div>

          <div className="flex items-center gap-2 text-[9px] font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Built for production
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;