// components/resume/ResumeSection.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FiBriefcase,
  FiAward,
  FiCode,
  FiUser,
  FiGlobe,
  FiDownload,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experiences = [
    {
      role: "Full-Stack Developer Intern",
      company: "Trinovatech",
      duration: "February 2026 – May 2026",
      location: "Tunisia",
      desc:
        "Designed and built a full-stack platform end-to-end, from database schema to CI/CD deployment, as a final-year engineering project. Implemented AI-powered semantic search and a real-time collaborative editing system, along with role-based access control. Integrated Stripe subscription billing and delivered a full automated test suite.",
    },
    {
      role: "Full-Stack Developer Intern",
      company: "SWConsulting",
      duration: "June 2025 – July 2025",
      location: "Monastir, Tunisia",
      desc:
        "Analyzed an existing production system and its business logic to identify improvement points. Contributed to the dynamic evolution of financial calculation and estimation rules, enabling business teams to modify financial rules without code changes. Delivered full-stack features using Next.js, NestJS, PostgreSQL, and Prisma in an Agile environment.",
    },
  ];

  const education = [
    {
      degree: "Software Engineering Degree",
      school: "EPI – International Multidisciplinary School, Sousse",
      duration: "2023 – 2026",
    },
    {
      degree: "Preparatory Cycle in Technology & Computer Science (TIC)",
      school: "EPI – International Multidisciplinary School, Sousse",
      duration: "2021 – 2023",
    },
    {
      degree: "Baccalaureate in Technical Sciences",
      school: "Lycée Bourguiba, Monastir",
      duration: "2019",
    },
  ];

  const skills = {
    Frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    Backend: ["Node.js", "NestJS", "Express.js", "REST API"],
    "Databases & ORM": ["PostgreSQL", "MongoDB", "Prisma ORM", "Firebase"],
    "Cloud & DevOps": ["AWS (Cloud Foundations)", "Docker", "GitHub Actions (CI/CD)", "Vercel", "Render", "Linux"],
    "Real-Time & AI": ["WebRTC", "Socket.IO", "AI (RAG)"],
  };

  const softSkills = [
    "Analytical & Rigorous Thinking",
    "Autonomous & Proactive",
    "Strong Team Collaboration",
    "Fast Learner & Adaptable",
    "Resilient Under Technical Challenges",
  ];

  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Advanced" },
    { name: "French", level: "Advanced" },
  ];

  const tabGradients = {
    experience: "linear-gradient(135deg, #10B981, #14B8A6)",
    education: "linear-gradient(135deg, #F59E0B, #F97316)",
    skills: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
    soft: "linear-gradient(135deg, #FB7185, #DB2777)",
    lang: "linear-gradient(135deg, #0EA5E9, #0891B2)",
  };

  const tabs = [
    { value: "experience", icon: FiBriefcase, label: "Experience" },
    { value: "education", icon: FiAward, label: "Education" },
    { value: "skills", icon: FiCode, label: "Skills" },
    { value: "soft", icon: FiUser, label: "Soft Skills" },
    { value: "lang", icon: FiGlobe, label: "Languages" },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#0a0e17] via-[#0b1426] to-[#0a0e17] overflow-hidden relative">
      {/* CINEMATIC ORBS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-32 left-10 md:left-20 w-80 h-80 md:w-96 md:h-96 bg-emerald-500/12 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-10 md:right-20 w-72 h-72 md:w-80 md:h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* EPIC HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 pt-16 sm:pt-0"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 leading-tight">
            Resume
          </h1>
          <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Full-Stack Engineer | Real-Time Systems | Secure Architecture
          </p>
        </motion.div>

        {/* DOWNLOAD CV — BIG & TAPPABLE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <a href="/Safwen-Ben-Mabrouk-CV.pdf" download>
            <Button className="bg-gradient-to-r from-violet-600 to-rose-600 hover:from-violet-700 hover:to-rose-700 text-white font-bold text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-full shadow-2xl hover:shadow-violet-600/40 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
              <FiDownload className="text-lg md:text-xl" />
              Download CV (PDF)
            </Button>
          </a>
        </motion.div>

        {/* TABS */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid grid-cols-2 sm:grid-cols-5 w-full mb-12 md:mb-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.value;
              return (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  style={isActive ? { background: tabGradients[tab.value] } : {}}
                  className={`
                    rounded-xl transition-all duration-300 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2
                    ${isActive 
                      ? "text-white shadow-lg shadow-white/30 scale-105" 
                      : "text-gray-300 bg-transparent hover:bg-white/10"
                    }
                    px-3 py-3 text-xs sm:text-sm md:text-base
                  `}
                >
                  <Icon className="text-lg sm:text-xl" />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* EXPERIENCE */}
          <TabsContent value="experience" className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:border-emerald-500/50 transition-all duration-500 shadow-xl"
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-emerald-400 group-hover:text-emerald-300 transition">
                      {exp.role}
                    </h3>
                    <p className="text-base md:text-lg text-gray-300">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <p>{exp.duration}</p>
                    <p className="flex items-center gap-1 justify-end mt-1">
                      <span className="text-emerald-400">Location</span> {exp.location}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{exp.desc}</p>
              </motion.div>
            ))}
          </TabsContent>

          {/* EDUCATION */}
          <TabsContent value="education" className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:border-amber-500/50 transition-all shadow-lg"
              >
                <h3 className="text-lg md:text-xl font-bold text-amber-400">{edu.degree}</h3>
                <p className="text-gray-300 mt-1">{edu.school}</p>
                <p className="text-sm text-gray-400 mt-2">{edu.duration}</p>
              </motion.div>
            ))}
          </TabsContent>

          {/* SKILLS — tag-based, no invented mastery percentages */}
          <TabsContent value="skills">
            <div className="space-y-10">
              {Object.entries(skills).map(([category, items], i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <h3 className="text-lg md:text-xl font-bold text-violet-400 mb-5 capitalize">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: j * 0.05 }}
                        className="px-4 py-2 bg-white/5 border border-violet-500/30 rounded-full text-sm md:text-base text-gray-200 hover:border-violet-400 hover:bg-violet-500/10 hover:text-violet-300 transition-all"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* SOFT SKILLS */}
          <TabsContent value="soft">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 text-center hover:border-rose-500/50 transition-all shadow-lg"
                >
                  <p className="text-base md:text-lg text-gray-300 font-medium">{skill}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* LANGUAGES */}
          <TabsContent value="lang">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
              {languages.map((lang, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 text-center shadow-lg"
                >
                  <h4 className="text-xl md:text-2xl font-bold text-sky-400">{lang.name}</h4>
                  <p className="text-gray-300 mt-2 text-sm md:text-base">{lang.level}</p>
                  <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${
                        lang.level === "Native"
                          ? "w-full bg-gradient-to-r from-emerald-500 to-teal-500"
                          : lang.level === "Advanced"
                          ? "w-5/6 bg-gradient-to-r from-sky-500 to-cyan-600"
                          : "w-1/2 bg-gradient-to-r from-amber-500 to-orange-500"
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 md:mt-32"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
            Let's Build Something Great Together
          </h2>
          <Button className="bg-gradient-to-r from-rose-600 to-violet-600 hover:from-rose-700 hover:to-violet-700 text-white text-lg md:text-xl px-12 md:px-16 py-7 md:py-9 rounded-full shadow-2xl hover:shadow-rose-500/50 transform hover:scale-105 transition-all duration-300 font-bold">
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
