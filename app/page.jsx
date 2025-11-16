// app/page.jsx
"use client";

import { Button } from "@/components/ui/button";
import { FiDownload, FiMail } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";
import Link from "next/link";

// Import Components
import ServicesSection from "@/components/services/ServicesSection";
import WorkSection from "@/components/work/WorkSection";
import ResumeSection from "@/components/resume/ResumeSection";
import ContactSection from "@/components/contact/ContactSection";

const Home = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0a0e17] via-[#0b1426] to-[#0a0e17] text-white overflow-x-hidden">
      {/* Animated Orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 pt-24 md:pt-32 relative z-10">
        {/* ==================== 1. HERO ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start mb-20 md:mb-32"
        >
          {/* LEFT */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-4 py-1.5 text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg">
                PFE 2026 — Available
              </span>
              <span className="text-sm text-cyan-300">Full-Stack + AI + DevOps</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
              Safwen
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Ben Mabrouk
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              <span className="text-cyan-400 font-semibold">Focused.</span> 
              <span className="text-purple-400 font-semibold">Driven.</span> 
              <span className="text-pink-400 font-semibold">Always learning.</span>
              <br className="hidden md:block" />
              Turning 
              <span className="text-emerald-400 font-medium"> ideas into fast, scalable, intuitive</span> digital products.
              <br className="hidden md:block" />
              Solving 
              <span className="text-amber-400 font-medium">complex challenges</span> with 
              <span className="text-rose-400 font-medium">clean code</span> and 
              <span className="text-sky-400 font-medium">thoughtful design</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-base md:text-lg px-6 md:px-8 py-6 md:py-7 rounded-2xl shadow-2xl hover:shadow-cyan-500/40 transition-all transform hover:scale-105">
                <FiDownload className="mr-2 text-lg md:text-xl" /> Download CV
              </Button>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 text-base md:text-lg px-6 md:px-8 py-6 md:py-7 rounded-2xl backdrop-blur-sm">
                  <FiMail className="mr-2 text-lg md:text-xl" /> Let’s Talk
                </Button>
              </Link>
            </div>

            <Social
              containerStyles="flex gap-4 md:gap-5"
              iconStyles="w-12 h-12 md:w-14 md:h-14 rounded-2xl border-2 border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-400 transition-all backdrop-blur-sm"
            />
          </div>

          {/* RIGHT: PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end mt-8 lg:mt-16"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Photo />
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl rounded-full scale-150" />
            </div>
          </motion.div>
        </motion.div>

        {/* ==================== 2. STATS ==================== */}
        <Stats />

        {/* ==================== 3. TECH STACK ==================== */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-24 md:my-32"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Tech Stack
            </h2>
            <p className="text-gray-400 text-base md:text-lg">Full-Stack, AI, DevOps — I do it all</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
            {[
              { name: "React", icon: "R", color: "from-cyan-400 to-blue-500" },
              { name: "Next.js", icon: "N", color: "from-purple-400 to-pink-500" },
              { name: "Node.js", icon: "N", color: "from-green-400 to-emerald-500" },
              { name: "NestJS", icon: "N", color: "from-emerald-400 to-teal-500" },
              { name: "TypeScript", icon: "TS", color: "from-blue-500 to-cyan-400" },
              { name: "PostgreSQL", icon: "P", color: "from-blue-400 to-indigo-500" },
              { name: "MongoDB", icon: "M", color: "from-lime-400 to-green-600" },
              { name: "Prisma", icon: "P", color: "from-indigo-400 to-purple-500" },
              { name: "Python", icon: "Py", color: "from-amber-400 to-orange-500" },
              { name: "Docker", icon: "D", color: "from-sky-400 to-cyan-500" },
              { name: "Git", icon: "G", color: "from-rose-400 to-pink-500" },
              { name: "Tailwind", icon: "T", color: "from-violet-400 to-purple-500" },
            ].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-4 md:p-6 hover:border-cyan-500/50 transition-all"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-3 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <span className="text-xl md:text-2xl font-bold text-white">{tech.icon}</span>
                </div>
                <p className="text-center text-xs md:text-sm font-medium text-gray-300 group-hover:text-cyan-300 transition">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ==================== 4. 8 PROJECTS GRID ==================== */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-24 md:my-32"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              8 Real Projects
            </h2>
            <p className="text-gray-400 text-base md:text-lg">From idea to production — all by me</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {[
              { title: "AI Medical Teleconsultation", desc: "Video calls, AI diagnosis, JWT, MongoDB", tags: ["React", "WebRTC", "Python ML"], link: "https://github.com/Safwen-bm/medical-platform", live: "https://medical.safone.tn" },
              { title: "Secure Banking System", desc: "Audit logs, multi-currency, RBAC", tags: ["Next.js", "NestJS", "PostgreSQL"], link: "https://github.com/Safwen-bm/creditwin" },
              { title: "E-Learning LMS", desc: "Live classes, real-time chat, admin panel", tags: ["Next.js", "Socket.IO", "Tailwind"], link: "https://github.com/Safwen-bm/E_learning_app" },
              { title: "Real-Time Chat App", desc: "WebSockets, typing indicators, file sharing", tags: ["React", "Node.js", "Socket.IO"], link: "https://github.com/Safwen-bm/chat-app" },
              { title: "Task Management Tool", desc: "Kanban, drag & drop, Firebase auth", tags: ["React", "Firebase", "Tailwind"], link: "https://github.com/Safwen-bm/task-manager" },
              { title: "Portfolio CMS", desc: "Headless CMS with Sanity & Next.js", tags: ["Next.js", "Sanity", "Vercel"], link: "https://github.com/Safwen-bm/portfolio-cms" },
              { title: "Weather Dashboard", desc: "API integration, charts, dark mode", tags: ["React", "Chart.js", "API"], link: "https://github.com/Safwen-bm/weather-dashboard" },
              { title: "E-Commerce Store", desc: "Stripe, cart, admin dashboard", tags: ["Next.js", "Stripe", "Prisma"], link: "https://github.com/Safwen-bm/ecommerce" },
            ].map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-lg border border-white/10 rounded-3xl p-6 md:p-8 hover:border-cyan-500/60 transition-all shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-cyan-400 transition">{proj.title}</h3>
                <p className="text-gray-300 text-sm md:text-base mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map((tag, j) => (
                    <span key={j} className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/30">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 text-sm">
                  <Link href={proj.link} target="_blank" className="text-cyan-400 hover:underline font-medium">GitHub</Link>
                  {proj.live && <Link href={proj.live} target="_blank" className="text-blue-400 hover:underline font-medium">Live</Link>}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/work">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-base md:text-lg px-8 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all">
                View All Projects
              </Button>
            </Link>
          </div>
        </motion.section>

        {/* ==================== 5. QUOTE ==================== */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-24 md:my-32 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-8 md:p-12">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-cyan-300 italic">
              “I don’t just code — I build 
              <span className="text-emerald-400 font-bold"> systems that scale</span>, 
              <span className="text-rose-400 font-bold"> secure</span>, and 
              <span className="text-amber-400 font-bold"> solve real problems</span>.”
            </p>
            <p className="mt-6 text-gray-400">— Safwen Ben Mabrouk</p>
          </div>
        </motion.section>

        {/* ==================== 6. RESUME (FULL) ==================== */}
        <ResumeSection />

        {/* ==================== 7. SERVICES (FULL) ==================== */}
        <ServicesSection />

        {/* ==================== 8. WORK (FULL) ==================== */}
        <WorkSection />

        {/* ==================== 9. CONTACT (AT THE VERY END) ==================== */}
        <ContactSection />

        {/* ==================== 10. NAVIGATION LINKS ==================== */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-24 md:my-32 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-cyan-300">Explore More</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/services"><Button variant="outline" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 px-6 md:px-8 py-5 md:py-6 rounded-2xl">Services</Button></Link>
            <Link href="/resume"><Button variant="outline" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 px-6 md:px-8 py-5 md:py-6 rounded-2xl">Resume</Button></Link>
            <Link href="/work"><Button variant="outline" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 px-6 md:px-8 py-5 md:py-6 rounded-2xl">Featured Work</Button></Link>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Home;