// components/resume/ResumeSection.jsx
"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import KnowledgeNetworkBg from "@/components/resume/KnowledgeNetworkBg";
import SkillsPyramid from "@/components/resume/SkillsPyramid";
import { experiences, education, softSkills, spokenLanguages } from "@/components/resume/data";
import { FiBriefcase, FiAward, FiCode, FiUser, FiGlobe } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";
import ViewCvButton from "@/components/cv/ViewCvButton";

const tabs = [
  { value: "skills", icon: FiCode, label: "Skills" },
  { value: "experience", icon: FiBriefcase, label: "Experience" },
  { value: "education", icon: FiAward, label: "Education" },
  { value: "soft", icon: FiUser, label: "Soft Skills" },
  { value: "lang", icon: FiGlobe, label: "Languages" },
];

const ResumeSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-24 md:py-32">
      <KnowledgeNetworkBg />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <SectionHeading
          index="05"
          title="Resume"
          subtitle="Full-Stack Engineer · Real-Time Systems · Secure Architecture"
          className="!mb-8"
        />

        {/* VIEW CV */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex justify-center md:mb-16"
        >
          <ViewCvButton />
        </motion.div>

        {/* TABS */}
        <Tabs defaultValue="skills" className="mx-auto max-w-5xl">
          <TabsList className="mb-12 grid w-full grid-cols-2 gap-3 sm:grid-cols-5">
            {tabs.map(({ value, icon: Icon, label }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="flex-col gap-1.5 rounded-2xl border border-line bg-surface px-3 py-3 text-xs font-semibold text-ink shadow-soft last:col-span-2 hover:border-accent/40 hover:bg-accent-light data-[state=active]:border-accent data-[state=active]:bg-accent data-[state=active]:text-onaccent data-[state=active]:shadow-lift sm:flex-row sm:text-sm sm:last:col-span-1"
              >
                <Icon className="text-base" />
                <span className="whitespace-nowrap">{label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* SKILLS — 3D pyramid */}
          <TabsContent value="skills">
            <SkillsPyramid />
          </TabsContent>

          {/* EXPERIENCE */}
          <TabsContent value="experience" className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="rounded-3xl border border-line bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 md:p-8"
              >
                <div className="mb-4 flex flex-col items-start justify-between gap-4 md:flex-row">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent text-onaccent">
                      <FiBriefcase size={18} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-accent md:text-base">{exp.company}</p>
                    </div>
                  </div>

                  <div className="shrink-0 md:text-right">
                    <p className="inline-block rounded-full bg-saffron/25 px-3 py-1 font-mono text-xs font-bold text-ink">
                      {exp.duration}
                    </p>
                    <p className="mt-2 text-sm text-muted">{exp.location}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted md:text-base">{exp.desc}</p>
              </motion.div>
            ))}
          </TabsContent>

          {/* EDUCATION */}
          <TabsContent value="education" className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex items-start gap-4 rounded-3xl border border-line bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 md:p-8"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-saffron text-deep">
                  <FiAward size={18} />
                </div>
                <div>
                  <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between md:gap-4">
                    <h3 className="font-display text-lg font-semibold text-ink md:text-xl">
                      {edu.degree}
                    </h3>
                    <p className="shrink-0 font-mono text-sm font-bold text-accent">{edu.duration}</p>
                  </div>
                  <p className="mt-1 text-muted">{edu.school}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{edu.desc}</p>
                </div>
              </motion.div>
            ))}
          </TabsContent>

          {/* SOFT SKILLS */}
          <TabsContent value="soft">
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-5 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-accent/40"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-light text-accent">
                    <FiUser size={14} />
                  </span>
                  <p className="text-left text-sm font-semibold text-ink md:text-base">{skill}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* LANGUAGES */}
          <TabsContent value="lang">
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {spokenLanguages.map((lang, i) => {
                const native = lang.level === "Native";
                return (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="rounded-3xl border border-line bg-surface p-6 text-center shadow-soft"
                  >
                    <h4 className="font-display text-xl font-semibold text-ink">{lang.name}</h4>
                    <p className="mt-1 text-sm text-muted">{lang.level}</p>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-subtle">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        style={{ width: `${lang.percent}%`, originX: 0 }}
                        className={`h-full rounded-full ${native ? "bg-saffron" : "bg-accent"}`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResumeSection;