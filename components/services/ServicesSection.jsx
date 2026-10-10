// components/services/ServicesSection.jsx
"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiCode, FiShield, FiZap, FiGlobe } from "react-icons/fi";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { CODE_MARK_CLIP } from "@/components/ornaments/CodeMark";

const services = [
  {
    num: "01",
    title: "Full-Stack Development",
    description:
      "High-performance web apps with Next.js, NestJS, PostgreSQL, and Prisma. Clean architecture and automated deployment.",
    icon: FiCode,
  },
  {
    num: "02",
    title: "Architecture & Security",
    description:
      "JWT, RBAC, encryption, SQL optimization, CI/CD, Docker. Solid foundations that scale safely.",
    icon: FiShield,
  },
  {
    num: "03",
    title: "Real-Time & WebRTC",
    description:
      "Live chat, HD video calls, push notifications, instant sync smooth experiences with low latency.",
    icon: FiZap,
  },
  {
    num: "04",
    title: "Consulting & Innovation",
    description:
      "Technical audits, performance optimization, and AI integration to take your project further.",
    icon: FiGlobe,
  },
];

// One service = one 3D block. It faces you; the depth is a solid extrusion (see .block3d in globals.css)
// and the whole block lifts on hover.
const ServiceBlock = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.09 }}
      className="block3d-wrap"
    >
      <article className="block3d group relative flex flex-col overflow-hidden border border-line bg-surface p-7">
        {/* accent bar on top + faint zellige corner */}
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-accent via-glow to-saffron" />
        <div className="fade-diagonal pointer-events-none absolute -right-6 -top-6 h-40 w-40 rotate-180">
          <div
            className="zellige-mask absolute inset-0"
            style={{ "--zellige-color": "var(--c-accent)", "--zellige-alpha": 0.25 }}
          />
        </div>

        <div className="relative mb-6 flex items-start justify-between">
          <div className="relative grid h-16 w-16 place-items-center text-deep transition-transform duration-500 group-hover:rotate-45">
            <span className="absolute inset-0 bg-saffron" style={{ clipPath: CODE_MARK_CLIP }} />
          </div>
          <Icon className="absolute left-[21px] top-[21px] text-[22px] text-deep" />
          <span className="font-display text-5xl font-semibold leading-none text-accent/20">
            {service.num}
          </span>
        </div>

        <h3 className="relative font-display text-2xl font-semibold leading-tight text-ink">
          {service.title}
        </h3>
        <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted">
          {service.description}
        </p>

        <Link
          href="/contact"
          className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-accent transition-all duration-200 group-hover:gap-2.5"
        >
          Get Started <FiArrowUpRight />
        </Link>
      </article>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-subtle py-20 md:py-28">
      {/* theme-tinted dots + glow, fading out toward the edges */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-dots fade-radial absolute inset-0" />
        <div className="absolute left-1/2 top-1/3 h-[520px] w-[820px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(var(--c-accent)/0.12),transparent)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading
          index="06"
          title="Services"
          subtitle="High-level technical solutions, ready to turn your ideas into reality."
        />

        <div className="mx-auto grid max-w-6xl gap-x-10 gap-y-14 pr-4 pt-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-9">
          {services.map((service, i) => (
            <ServiceBlock key={service.num} service={service} index={i} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button asChild className="px-8">
            <Link href="/contact">Let's Discuss Your Idea</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;