// components/resume/ResumeSection.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FiBriefcase, FiAward, FiCode, FiUser, FiGlobe, FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experiences = [
    {
      role: "Full-Stack Developer Intern",
      company: "Trinovatech",
      duration: "February 2026 – May 2026",
      location: "Monastir, Tunisia",
      desc: "Designed and built a full-stack platform end-to-end, from database schema to CI/CD deployment, as a final-year engineering project. Implemented AI-powered semantic search and a real-time collaborative editing system, along with role-based access control. Integrated Stripe subscription billing and delivered a full automated test suite.",
    },
    {
      role: "Full-Stack Developer Intern",
      company: "SWConsulting",
      duration: "June 2025 – July 2025",
      location: "Monastir, Tunisia",
      desc: "Analyzed an existing production system and its business logic to identify improvement points. Contributed to the dynamic evolution of financial calculation and estimation rules, enabling business teams to modify financial rules without code changes. Delivered full-stack features using Next.js, NestJS, PostgreSQL, and Prisma in an Agile environment.",
    },
  ];

  const education = [
    { degree: "Software Engineering Degree", school: "EPI – International Multidisciplinary School, Sousse, Tunisia", duration: "2023 – 2026" },
    { degree: "Preparatory Cycle in Technology & Computer Science (TIC)", school: "EPI – International Multidisciplinary School, Sousse, Tunisia", duration: "2021 – 2023" },
    { degree: "Baccalaureate in Technical Sciences", school: "Lycée Bourguiba, Monastir, Tunisia", duration: "2019" },
  ];

  const skills = {
    "Programming Languages": ["C", "Python", "Java", "JavaScript", "TypeScript"],
    Frontend: ["React.js", "Next.js", "Tailwind CSS"],
    Backend: ["Node.js", "NestJS", "Express.js", "REST API"],
    "Databases & ORM": ["PostgreSQL", "MongoDB", "Prisma ORM", "Firebase"],
    "AI & Machine Learning": ["RAG", "NumPy", "Machine Learning", "KNN", "SVM", "XGBoost"],
    "Real-Time": ["WebRTC", "Socket.IO"],
    "Cloud & DevOps": ["AWS (Cloud Foundations)", "Docker", "GitHub Actions (CI/CD)", "Vercel", "Render", "Linux"],
  };

  const softSkills = [
    "Analytical Thinking",
    "Problem Solving & Resilience",
    "Autonomous & Proactive",
    "Team Collaboration",
    "Fast Learner & Adaptable",
    "Clear Communication",
  ];

  const spokenLanguages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Advanced" },
    { name: "French", level: "Advanced" },
  ];

  const tabGradients = {
    experience: "linear-gradient(135deg, #A855F7, #7C3AED)",
    education: "linear-gradient(135deg, #22C55E, #16A34A)",
    skills: "linear-gradient(135deg, #3B82F6, #2563EB)",
    soft: "linear-gradient(135deg, #FB923C, #EA580C)",
    lang: "linear-gradient(135deg, #14B8A6, #0D9488)",
  };

  const tabSolid = {
    experience: "#7C3AED",
    education: "#16A34A",
    skills: "#2563EB",
    soft: "#EA580C",
    lang: "#0D9488",
  };

  const tabs = [
    { value: "experience", icon: FiBriefcase, label: "Experience" },
    { value: "education", icon: FiAward, label: "Education" },
    { value: "skills", icon: FiCode, label: "Skills" },
    { value: "soft", icon: FiUser, label: "Soft Skills" },
    { value: "lang", icon: FiGlobe, label: "Languages" },
  ];

  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32 bg-primary">
      {/* COLORFUL ORBS — scoped to this section only */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 md:left-20 w-80 h-80 md:w-96 md:h-96 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 md:right-10 w-72 h-72 md:w-80 md:h-80 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h1 className="h2 text-ink">
            Resume
          </h1>
          <p className="text-muted mt-2">
            Full-Stack Engineer · Real-Time Systems · Secure Architecture
          </p>
        </motion.div>

        {/* DOWNLOAD CV */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <a href="/Safwen-Ben-Mabrouk-CV.pdf" download>
            <Button className="w-full sm:w-auto
                bg-ink hover:bg-ink/90
                text-white
                font-semibold
                text-base
                px-7 py-5
                rounded-xl
                transition-all duration-200
                hover:-translate-y-0.5">
              <FiDownload className="text-lg" />
              Download CV (PDF)
            </Button>
          </a>
        </motion.div>

        {/* TABS */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 sm:grid-cols-5 w-full mb-12 bg-subtle border border-line rounded-2xl p-1.5 gap-1.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.value;
              return (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  style={isActive ? { background: tabGradients[tab.value] } : {}}
                  className={`rounded-xl transition-all duration-300 flex flex-col sm:flex-row items-center justify-center gap-1.5 px-3 py-2.5 text-xs sm:text-sm font-medium ${
                    isActive ? "text-white shadow-md scale-[1.03]" : "text-muted hover:bg-white"
                  }`}
                >
                  <Icon className="text-base" />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* EXPERIENCE */}
          <TabsContent value="experience" className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group bg-white border border-line rounded-3xl p-6 md:p-8 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: tabGradients.experience }}
                    >
                      <FiBriefcase className="text-white" size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-ink">{exp.role}</h3>
                      <p className="text-sm md:text-base font-medium" style={{ color: tabSolid.experience }}>
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted shrink-0">
                    <p>{exp.duration}</p>
                    <p className="mt-1">{exp.location}</p>
                  </div>
                </div>
                <p className="text-muted leading-relaxed text-sm md:text-base">{exp.desc}</p>
              </motion.div>
            ))}
          </TabsContent>

          {/* EDUCATION */}
          <TabsContent value="education" className="space-y-5">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-start gap-4 bg-white border border-line rounded-3xl p-6 md:p-8 hover:border-green-400/60 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
              >
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: tabGradients.education }}
                >
                  <FiAward className="text-white" size={18} />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-ink">{edu.degree}</h3>
                  <p className="text-muted mt-1">{edu.school}</p>
                  <p className="text-sm mt-2 font-medium" style={{ color: tabSolid.education }}>
                    {edu.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </TabsContent>

          {/* SKILLS */}
          <TabsContent value="skills">
            <div className="space-y-9">
              {Object.entries(skills).map(([category, items], i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <h3 className="text-sm font-bold uppercase tracking-wide mb-4" style={{ color: tabSolid.skills }}>
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {items.map((skill, j) => (
                      <span
                        key={j}
                        className="px-4 py-2 bg-white border border-blue-200 rounded-full text-sm text-ink font-medium hover:text-white hover:border-transparent transition-all duration-200"
                        onMouseEnter={(e) => (e.currentTarget.style.background = tabGradients.skills)}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* SOFT SKILLS */}
          <TabsContent value="soft">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 bg-white border border-line rounded-2xl p-5 hover:border-orange-400/60 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
                >
                  <span
                    className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: tabGradients.soft }}
                  >
                    <FiUser className="text-white" size={14} />
                  </span>
                  <p className="text-ink font-medium text-sm md:text-base text-left">{skill}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* LANGUAGES */}
          <TabsContent value="lang">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
              {spokenLanguages.map((lang, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="bg-white border border-line rounded-3xl p-6 text-center hover:border-teal-400/60 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-ink">{lang.name}</h4>
                  <p className="text-muted mt-1 text-sm">{lang.level}</p>
                  <div className="mt-4 h-1.5 bg-subtle rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${
                        lang.level === "Native"
                          ? "w-full bg-gradient-to-r from-teal-500 to-emerald-600"
                          : "w-5/6 bg-gradient-to-r from-teal-400 to-cyan-600"
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResumeSection;