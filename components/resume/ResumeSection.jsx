// components/resume/ResumeSection.jsx
"use client";

import { useEffect, useState } from "react";
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

/**
 * NOTE:
 * We apply active tab gradients using inline styles (linear-gradient)
 * because Tailwind's JIT purge can remove dynamic class names.
 * Inline gradients are static strings defined in `tabGradients`.
 */

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [skillPercents, setSkillPercents] = useState({});

  // Trigger skill bars animation when tab is active
  useEffect(() => {
    if (activeTab === "skills") {
      const percents = {
        "React.js": 92,
        "Next.js": 90,
        "TypeScript": 88,
        "Node.js": 87,
        "NestJS": 85,
        "PostgreSQL": 83,
        "Docker": 78,
        "Git": 95,
        "Tailwind CSS": 90,
        "WebRTC": 80,
        "MongoDB": 82,
        "Prisma ORM": 84,
      };
      setSkillPercents(percents);
    }
  }, [activeTab]);

  const experiences = [
    {
      role: "Full-Stack Developer Intern",
      company: "SWConsulting",
      duration: "June 2025 – July 2025",
      location: "Monastir, Tunisia",
      desc:
        "Built a production-ready web app using Next.js, NestJS, PostgreSQL, and Prisma ORM. Implemented JWT authentication, role-based access control (RBAC), and optimized SQL queries. Worked in Agile (Git, Scrum). Delivered a robust, secure, and scalable system deployed in production.",
    },
  ];

  const education = [
    {
      degree: "Software Engineering Degree",
      school: "EPI – International Multidisciplinary School",
      duration: "Expected June 2026",
    },
    {
      degree: "Preparatory Cycle in Technology & Computer Science",
      school: "EPI Educational Group – Sousse",
      duration: "2021 – 2023",
    },
    {
      degree: "Technical Baccalaureate",
      school: "Lycée Bourguiba – Monastir",
      duration: "2019",
    },
  ];

  const skills = {
    Frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    Backend: ["Node.js", "NestJS", "REST API", "Prisma ORM"],
    Database: ["PostgreSQL", "MongoDB"],
    DevOps: ["Docker", "Git", "Linux", "CI/CD"],
    "Real-Time": ["WebRTC", "Socket.IO", "Push Notifications"],
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
    { name: "English", level: "Fluent" },
    { name: "French", level: "Intermediate" },
  ];

  // Map tab value -> CSS linear-gradient string (static so it always works)
  const tabGradients = {
    experience: "linear-gradient(90deg,#10B981,#14B8A6)", // emerald -> teal
    education: "linear-gradient(90deg,#F59E0B,#F97316)", // amber -> orange
    skills: "linear-gradient(90deg,#8B5CF6,#7C3AED)", // violet -> purple
    soft: "linear-gradient(90deg,#FB7185,#DB2777)", // rose -> pink
    lang: "linear-gradient(90deg,#0EA5E9,#0891B2)", // sky -> cyan
  };

  const tabs = [
    { value: "experience", icon: FiBriefcase, label: "Experience" },
    { value: "education", icon: FiAward, label: "Education" },
    { value: "skills", icon: FiCode, label: "Skills" },
    { value: "soft", icon: FiUser, label: "Soft Skills" },
    { value: "lang", icon: FiGlobe, label: "Languages" },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[#0a0e17] via-[#0b1426] to-[#0a0e17] overflow-hidden relative">
      {/* Animated Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-32 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-7xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-violet-500 to-rose-600 leading-tight">
            Resume
          </h1>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
            Full-Stack Engineer | Real-Time Systems | Secure Architecture
          </p>
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Button className="bg-gradient-to-r from-violet-500 to-rose-600 hover:from-violet-600 hover:to-rose-700 text-white font-bold px-10 py-7 rounded-full shadow-2xl hover:shadow-violet-500/50 transform hover:scale-105 transition-all flex items-center gap-3 mx-auto">
            <FiDownload className="text-xl" />
            Download CV (PDF)
          </Button>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-5 mb-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.value;
              return (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  // style applies the gradient when active
                  style={isActive ? { background: tabGradients[tab.value] } : {}}
                  className={`rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2
                    ${isActive ? "text-white shadow-lg shadow-white/20" : "text-gray-200 bg-transparent"}
                    px-4 py-2
                  `}
                >
                  <Icon className="mr-2 text-lg" />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Experience */}
          <TabsContent value="experience" className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-400 group-hover:text-emerald-300 transition">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <p>{exp.duration}</p>
                    <p className="flex items-center gap-1 justify-end">
                      <span className="text-emerald-400">Location</span> {exp.location}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </TabsContent>

          {/* Education */}
          <TabsContent value="education" className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-amber-500/50 transition-all"
              >
                <h3 className="text-xl font-bold text-amber-400">{edu.degree}</h3>
                <p className="text-gray-300">{edu.school}</p>
                <p className="text-sm text-gray-400 mt-1">{edu.duration}</p>
              </motion.div>
            ))}
          </TabsContent>

          {/* Skills with Progress Bars */}
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
                  <h3 className="text-xl font-bold text-violet-400 mb-6 capitalize">{category}</h3>
                  <div className="space-y-5">
                    {items.map((skill, j) => (
                      <div key={j} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">{skill}</span>
                          <span className="text-violet-400 font-medium">{skillPercents[skill] || 0}%</span>
                        </div>
                        <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skillPercents[skill] || 0}%` }}
                            transition={{ duration: 1.2, delay: j * 0.1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-violet-500 to-purple-600 rounded-full shadow-lg shadow-violet-500/50"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Soft Skills */}
          <TabsContent value="soft">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-rose-500/50 transition-all"
                >
                  <p className="text-lg text-gray-300">{skill}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Languages */}
          <TabsContent value="lang">
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {languages.map((lang, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center"
                >
                  <h4 className="text-2xl font-bold text-sky-400">{lang.name}</h4>
                  <p className="text-gray-300 mt-3">{lang.level}</p>
                  <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        lang.level === "Native"
                          ? "w-full bg-gradient-to-r from-emerald-500 to-teal-500"
                          : lang.level === "Fluent"
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

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Let’s Build Something Great Together
          </h2>
          <Button className="bg-gradient-to-r from-rose-600 to-violet-600 hover:from-rose-700 hover:to-violet-700 text-white text-xl px-16 py-9 rounded-full shadow-2xl hover:shadow-rose-500/50 transform hover:scale-105 transition-all">
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
