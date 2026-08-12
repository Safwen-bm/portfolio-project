// components/services/ServicesSection.jsx
"use client";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCode, FiShield, FiZap, FiGlobe } from "react-icons/fi";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AmbientGlow from "@/components/AmbientGlow";

const services = [
  {
    num: "01",
    title: "Full-Stack Development",
    description: "High-performance web apps with Next.js, NestJS, PostgreSQL, and Prisma. Clean architecture and automated deployment.",
    icon: FiCode,
  },
  {
    num: "02",
    title: "Architecture & Security",
    description: "JWT, RBAC, encryption, SQL optimization, CI/CD, Docker. Solid foundations that scale safely.",
    icon: FiShield,
  },
  {
    num: "03",
    title: "Real-Time & WebRTC",
    description: "Live chat, HD video calls, push notifications, instant sync — smooth experiences with low latency.",
    icon: FiZap,
  },
  {
    num: "04",
    title: "Consulting & Innovation",
    description: "Technical audits, performance optimization, and AI integration to take your project further.",
    icon: FiGlobe,
  },
];

const ServicesSection = () => {
  return (
    <section className="relative isolate overflow-hidden py-20 md:py-28 border-t border-line">
      <AmbientGlow variant="left" />
      <div className="relative z-10">
      <div className="text-center mb-14">
        <h2 className="h2 text-ink">Services</h2>
        <p className="mt-3 text-muted max-w-xl mx-auto">
          High-level technical solutions, ready to turn your ideas into reality.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-line rounded-2xl p-7 md:p-8 hover:border-ink/20 hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-3xl font-black text-line group-hover:text-accent/20 transition-colors">
                  {service.num}
                </span>
                <div className="w-11 h-11 rounded-xl bg-subtle flex items-center justify-center group-hover:bg-accent-light transition-colors">
                  <Icon className="text-lg text-ink group-hover:text-accent transition-colors" />
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-ink mb-3">{service.title}</h3>
              <p className="text-sm md:text-base text-muted leading-relaxed mb-6">{service.description}</p>

              <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-accent transition-colors">
                Get Started <FiArrowUpRight />
              </Link>
            </motion.article>
          );
        })}
      </div>

      <div className="text-center mt-16">
        <Link href="/contact">
          <Button className="bg-ink hover:bg-ink/90 text-white font-semibold text-base px-8 py-6 rounded-xl">
            Let's Discuss Your Idea
          </Button>
        </Link>
      </div>
      </div>
    </section>
  );
};

export default ServicesSection;