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
    gradient: "linear-gradient(135deg, #3B82F6, #2563EB)",
    solid: "#2563EB",
    border: "hover:border-blue-400/60",
    shadow: "hover:shadow-blue-500/10",
  },
  {
    num: "02",
    title: "Architecture & Security",
    description: "JWT, RBAC, encryption, SQL optimization, CI/CD, Docker. Solid foundations that scale safely.",
    icon: FiShield,
    gradient: "linear-gradient(135deg, #A855F7, #7C3AED)",
    solid: "#7C3AED",
    border: "hover:border-purple-400/60",
    shadow: "hover:shadow-purple-500/10",
  },
  {
    num: "03",
    title: "Real-Time & WebRTC",
    description: "Live chat, HD video calls, push notifications, instant sync — smooth experiences with low latency.",
    icon: FiZap,
    gradient: "linear-gradient(135deg, #FB923C, #EA580C)",
    solid: "#EA580C",
    border: "hover:border-orange-400/60",
    shadow: "hover:shadow-orange-500/10",
  },
  {
    num: "04",
    title: "Consulting & Innovation",
    description: "Technical audits, performance optimization, and AI integration to take your project further.",
    icon: FiGlobe,
    gradient: "linear-gradient(135deg, #14B8A6, #0D9488)",
    solid: "#0D9488",
    border: "hover:border-teal-400/60",
    shadow: "hover:shadow-teal-500/10",
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
              style={{ "--card-color": service.solid, "--card-gradient": service.gradient }}
              className={`group relative overflow-hidden bg-white border border-line rounded-2xl p-7 md:p-8 ${service.border} hover:shadow-lg ${service.shadow} transition-all duration-300`}
            >
              {/* soft color wash in the corner, fades in on hover */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                style={{ background: "var(--card-gradient)" }}
              />

              {/* top accent line, grows in on hover */}
              <div
                className="absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ease-out"
                style={{ background: "var(--card-gradient)" }}
              />

              <div className="relative flex justify-between items-start mb-6">
                <span className="text-3xl font-black text-line group-hover:text-[color:var(--card-color)] group-hover:opacity-30 transition-colors duration-300">
                  {service.num}
                </span>
                <div
                  className="w-11 h-11 rounded-xl bg-subtle flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:bg-[image:var(--card-gradient)]"
                >
                  <Icon className="text-lg text-ink group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              <h3 className="relative text-xl md:text-2xl font-bold text-ink mb-3">{service.title}</h3>
              <p className="relative text-sm md:text-base text-muted leading-relaxed mb-6">{service.description}</p>

              <Link
                href="/contact"
                className="relative inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-[color:var(--card-color)] transition-colors duration-300"
              >
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