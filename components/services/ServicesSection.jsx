// components/services/ServicesSection.jsx
"use client";

import { useRef } from "react";
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

// One service = one 3D box (front + right + top faces, see .box3d in globals.css).
// On desktop the box leans toward the mouse; on touch screens it stays in its resting pose.
const ServiceBox = ({ service, index }) => {
  const boxRef = useRef(null);
  const Icon = service.icon;

  const handleMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const el = boxRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--tx", (nx * 16).toFixed(2));
    el.style.setProperty("--ty", (ny * -12).toFixed(2));
  };

  const handleLeave = () => {
    const el = boxRef.current;
    if (!el) return;
    el.style.setProperty("--tx", "0");
    el.style.setProperty("--ty", "0");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.09 }}
      className="box3d-wrap relative"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <div className="box3d-shadow" aria-hidden="true" />

      <article ref={boxRef} className="box3d">
        <div className="box3d-top" aria-hidden="true" />
        <div className="box3d-right" aria-hidden="true" />

        <div className="box3d-front relative flex flex-col items-center overflow-hidden bg-gradient-to-br from-accent via-accent to-accent-hover px-6 pb-8 pt-10 text-center text-white">
          {/* nail studs (fade in from the middle of the box) */}
          <div className="studs pointer-events-none absolute inset-0 [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,#000_60%)] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_60%)]" />
          {/* corner light */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgb(255_255_255/0.22),transparent_55%)]" />
          {/* inner frame */}
          <div className="pointer-events-none absolute inset-2 rounded-md border border-white/30" />

          <div className="relative mb-2 grid h-16 w-16 place-items-center text-ink transition-transform duration-500 [.box3d-wrap:hover_&]:rotate-45">
            <span className="absolute inset-0 bg-saffron" style={{ clipPath: CODE_MARK_CLIP }} />
          </div>
          <Icon className="relative -mt-[54px] mb-6 text-xl text-ink" />

          <span className="relative font-mono text-xs font-bold text-white/60">{service.num}</span>
          <h3 className="relative mt-2 font-display text-2xl font-semibold leading-tight">
            {service.title}
          </h3>
          <p className="relative mt-3 flex-1 text-sm leading-relaxed text-white/80">
            {service.description}
          </p>

          <Link
            href="/contact"
            className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-saffron transition-all duration-200 [.box3d-wrap:hover_&]:gap-2.5"
          >
            Get Started <FiArrowUpRight />
          </Link>
        </div>
      </article>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-20 md:py-28">
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

        <div className="mx-auto grid max-w-6xl gap-x-10 gap-y-14 pt-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
          {services.map((service, i) => (
            <ServiceBox key={service.num} service={service} index={i} />
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
