// app/page.jsx
"use client";

import { Button } from "@/components/ui/button";
import { FiDownload, FiMail } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";
import Link from "next/link";

const Home = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0a0e17] via-[#0b1426] to-[#0a0e17] text-white overflow-x-hidden">
      {/* Animated Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Moved up: py-20 instead of py-32 */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          // CHANGED: items-center to items-start to allow the photo to be manually adjusted higher
          className="grid lg:grid-cols-2 gap-12 items-start mb-32" 
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg">
                PFE 2026 — Available
              </span>
              <span className="text-sm text-cyan-300">Full-Stack + AI + DevOps</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-400 leading-tight">
              Safwen
              <br />
              <span className="text-cyan-400">Ben Mabrouk</span>
            </h1>

            {/* PROFESSIONAL PARAGRAPH */}
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Third-year <span className="text-cyan-400 font-bold">Software Engineering</span> student at <span className="text-blue-400">EPI Sousse</span>, specializing in full-stack development, AI integration, and DevOps.
              <br />
              Designed and deployed <span className="text-yellow-400">8+ production-grade applications</span> using React, Next.js, NestJS, PostgreSQL, Python ML models, Docker, and real-time systems.
              <br />
              Completed internship at <span className="text-green-400">TechStart</span> — developed responsive, high-performance UIs with React and Tailwind CSS.
            </p>

            <div className="flex flex-wrap gap-6 mb-10">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg px-8 py-7 rounded-2xl shadow-2xl hover:shadow-cyan-500/40 transition-all transform hover:scale-105">
                <FiDownload className="mr-3 text-xl" /> Download CV
              </Button>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 text-lg px-8 py-7 rounded-2xl backdrop-blur-sm">
                  <FiMail className="mr-3 text-xl" /> Let’s Talk
                </Button>
              </Link>
            </div>

            <Social
              containerStyles="flex gap-5"
              iconStyles="w-14 h-14 rounded-2xl border-2 border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-400 transition-all backdrop-blur-sm"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center **lg:-mt-24**"
          >
            <Photo />
          </motion.div>
        </motion.div>

        <Stats />

        {/* TECH STACK */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="my-40"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Tech Stack
            </h2>
            <p className="text-gray-400 text-lg">Full-Stack, AI, DevOps — I do it all</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", icon: "R" },
              { name: "Next.js", icon: "N" },
              { name: "NestJS", icon: "N" },
              { name: "PostgreSQL", icon: "P" },
              { name: "Python", icon: "Py" },
              { name: "Docker", icon: "D" },
              { name: "Git", icon: "G" },
              { name: "Tailwind", icon: "T" },
            ].map((tech, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">{tech.icon}</span>
                </div>
                <p className="text-center text-sm font-medium text-gray-300 group-hover:text-cyan-300 transition">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 8 PROJECTS */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="my-40"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              8 Real Projects
            </h2>
            <p className="text-gray-400 text-lg">From idea to production — all by me</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "AI Medical Teleconsultation", desc: "Video calls, AI diagnosis, JWT, MongoDB", tags: ["React", "WebRTC", "Python ML"], link: "https://github.com/Safwen-bm/medical-platform", live: "https://medical.safone.tn" },
              { title: "Secure Banking System", desc: "Audit logs, multi-currency, role-based access", tags: ["Next.js", "NestJS", "PostgreSQL"], link: "https://github.com/Safwen-bm/creditwin" },
              { title: "E-Learning LMS", desc: "Live classes, real-time chat, admin panel", tags: ["Next.js", "Socket.IO", "Tailwind"], link: "https://github.com/Safwen-bm/E_learning_app" },
              { title: "Real-Time Chat App", desc: "WebSockets, typing indicators, file sharing", tags: ["React", "Node.js", "Socket.IO"], link: "https://github.com/Safwen-bm/chat-app" },
              { title: "Task Management Tool", desc: "Kanban, drag & drop, Firebase auth", tags: ["React", "Firebase", "Tailwind"], link: "https://github.com/Safwen-bm/task-manager" },
              { title: "Portfolio CMS", desc: "Headless CMS with Sanity & Next.js", tags: ["Next.js", "Sanity", "Vercel"], link: "https://github.com/Safwen-bm/portfolio-cms" },
              { title: "Weather Dashboard", desc: "API integration, charts, dark mode", tags: ["React", "Chart.js", "API"], link: "https://github.com/Safwen-bm/weather-dashboard" },
              { title: "E-Commerce Store", desc: "Stripe, cart, admin dashboard", tags: ["Next.js", "Stripe", "Prisma"], link: "https://github.com/Safwen-bm/ecommerce" },
            ].map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-cyan-500/60 transition-all shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition">{proj.title}</h3>
                <p className="text-gray-300 text-sm mb-6">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map((tag, j) => (
                    <span key={j} className="text-xs px-3 py-1.5 bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/30">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href={proj.link} target="_blank" className="text-cyan-400 hover:underline text-sm font-medium">
                    GitHub
                  </Link>
                  {proj.live && (
                    <Link href={proj.live} target="_blank" className="text-blue-400 hover:underline text-sm font-medium">
                      Live
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* QUOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="my-40 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-12">
            <p className="text-2xl md:text-3xl font-medium text-cyan-300 italic">
              “I don’t just code — I build systems that scale, secure, and solve real problems.”
            </p>
            <p className="mt-6 text-gray-400">— Safwen Ben Mabrouk</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center py-32"
        >
          <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            Let’s Build the Future
          </h2>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-purple-500/40 transform hover:scale-105 transition-all">
              Start a Project
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;