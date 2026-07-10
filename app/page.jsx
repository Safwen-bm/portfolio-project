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

      <div className="container mx-auto px-4 pt-16 md:pt-24 lg:pt-32 relative z-10">
        {/* ==================== 1. HERO ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start mb-20 md:mb-32 mt-24 md:mt-0"
        >
          {/* LEFT */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-4 py-1.5 text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg whitespace-nowrap">
                Open to Opportunities
              </span>
              <span className="text-sm text-cyan-300">Full-Stack + AI</span>
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
              <span className="text-amber-400 font-medium"> complex challenges</span> with
              <span className="text-rose-400 font-medium"> clean code </span>
              <br className="hidden md:block" />
              and
              <span className="text-sky-400 font-medium"> thoughtful design</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/Safwen-Ben-Mabrouk-CV.pdf" download className="inline-block">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-base md:text-lg px-6 md:px-8 py-6 md:py-7 rounded-2xl shadow-2xl hover:shadow-cyan-500/40 transition-all transform hover:scale-105">
                  <FiDownload className="mr-2 text-lg md:text-xl" /> Download CV
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 text-base md:text-lg px-6 md:px-8 py-6 md:py-7 rounded-2xl backdrop-blur-sm">
                  <FiMail className="mr-2 text-lg md:text-xl" /> Let's Talk
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
            className="flex justify-center lg:justify-end mt-8 lg:mt-24"
          >
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-[540px] aspect-[896/1755]">
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
          className="my-20 md:my-32"
        >
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Tech Stack
            </h2>
            <p className="text-gray-400 text-sm md:text-base">Full-Stack, AI, DevOps — I do it all</p>
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

        {/* ==================== 4. QUOTE ==================== */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-20 md:my-32 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-8 md:p-12">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-cyan-300 italic">
              "I don't just code — I build
              <span className="text-emerald-400 font-bold"> systems that scale</span>,
              <span className="text-rose-400 font-bold"> secure</span>, and
              <span className="text-amber-400 font-bold"> solve real problems</span>."
            </p>
            <p className="mt-6 text-gray-400">— Safwen Ben Mabrouk</p>
          </div>
        </motion.section>

        {/* ==================== 5. RESUME (FULL) ==================== */}
        <ResumeSection />

        {/* ==================== 6. SERVICES (FULL) ==================== */}
        <ServicesSection />

        {/* ==================== 7. WORK (FULL) ==================== */}
        <WorkSection />

        {/* ==================== 8. CONTACT (AT THE VERY END) ==================== */}
        <ContactSection />

        {/* ==================== 9. NAVIGATION LINKS ==================== */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-20 md:my-32 text-center pb-10"
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