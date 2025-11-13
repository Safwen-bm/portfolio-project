// components/services/ServicesSection.jsx
"use client";

import { motion } from "framer-motion";
import { FiArrowDownRight, FiCode, FiShield, FiZap, FiGlobe } from "react-icons/fi";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    num: "01",
    title: "Développement Full-Stack",
    description: "Applications web ultra-performantes avec Next.js, NestJS, PostgreSQL, Prisma. Architecture moderne, code propre, déploiement automatisé.",
    icon: FiCode,
    gradient: "from-cyan-400 to-blue-500",
    hover: "hover:from-cyan-500 hover:to-blue-600",
  },
  {
    num: "02",
    title: "Architecture & Sécurité",
    description: "JWT, RBAC, chiffrement, optimisation SQL, CI/CD, Docker. Sécurité renforcée, scalabilité garantie, audits inclus.",
    icon: FiShield,
    gradient: "from-purple-400 to-pink-500",
    hover: "hover:from-purple-500 hover:to-pink-600",
  },
  {
    num: "03",
    title: "Temps Réel & WebRTC",
    description: "Chat en direct, vidéoconférence HD, notifications push, synchronisation instantanée. Expériences fluides, zéro latence.",
    icon: FiZap,
    gradient: "from-green-400 to-teal-500",
    hover: "hover:from-green-500 hover:to-teal-600",
  },
  {
    num: "04",
    title: "Consulting & Innovation",
    description: "Audit technique, optimisation de performance, intégration IA, conseil stratégique. Votre projet passe au niveau supérieur.",
    icon: FiGlobe,
    gradient: "from-orange-400 to-red-500",
    hover: "hover:from-orange-500 hover:to-red-600",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-[#0a0e17] via-[#0b1426] to-[#0a0e17] overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-7xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 leading-tight">
            Services
          </h1>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl miele mx-auto">
            Des solutions techniques de haut niveau, prêtes à transformer vos idées en réalité.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 overflow-hidden shadow-2xl transition-all duration-500"
              >
                {/* Gradient Border Glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <div className="flex justify-between items-start mb-8">
                  <div className={`text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r ${service.gradient} drop-shadow-lg`}>
                    {service.num}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:border-cyan-500/50 transition-all">
                    <Icon className="text-2xl text-cyan-400" />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-8">
                  {service.description}
                </p>

                <Link href="/contact">
                  <Button
                    className={`bg-gradient-to-r ${service.gradient} ${service.hover} text-white font-bold px-8 py-6 rounded-full shadow-xl transform group-hover:scale-105 transition-all flex items-center gap-3`}
                  >
                    Démarrer
                    <FiArrowDownRight className="text-xl" />
                  </Button>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Prêt à lancer votre projet ?
          </h2>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white text-xl px-16 py-9 rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all">
              Discutons de votre idée
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;