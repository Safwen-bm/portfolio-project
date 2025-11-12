// app/services/page.jsx
"use client";

import { motion } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";
import Link from "next/link";

const services = [
  { num: "01", title: "Développement Full-Stack", description: "Applications web robustes avec Next.js, NestJS, PostgreSQL, Prisma", href: "/contact" },
  { num: "02", title: "Architecture & Sécurité", description: "JWT, RBAC, optimisation SQL, CI/CD, Docker", href: "/contact" },
  { num: "03", title: "Temps Réel & WebRTC", description: "Chat, vidéo live, notifications push, synchronisation", href: "/contact" },
  { num: "04", title: "Stage PFE 2026", description: "Disponible pour projet de fin d’études en entreprise", href: "/contact" },
];

const Services = () => {
  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-[#0a0e17] to-[#0b1426]">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h1 className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Services
          </h1>
          <p className="text-xl text-gray-400 mt-4">Ce que je peux vous apporter</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  {service.num}
                </div>
                <Link href={service.href} className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition">
                  <FiArrowDownRight className="text-xl text-cyan-400" />
                </Link>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;