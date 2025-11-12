// app/resume/page.jsx
"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FiBriefcase, FiAward, FiCode, FiUser, FiMail, FiPhone, FiMapPin, FiGlobe } from "react-icons/fi";

const Resume = () => {
  const experiences = [
    {
      role: "Stagiaire Développeur Full-Stack",
      company: "SWConsulting",
      duration: "Juin 2025 – Juillet 2025",
      location: "Monastir",
      desc: "Développement d’une application web complète en Next.js, NestJS, PostgreSQL, Prisma ORM. Mise en place d’une architecture propre, authentification sécurisée (JWT), contrôle d’accès par rôles et optimisation des requêtes SQL. Collaboration en mode Agile (Git, Scrum). Résultat : un système robuste, fiable et déployé en production."
    }
  ];

  const education = [
    { degree: "Diplôme d’Ingénieur en Génie Logiciel", school: "EPI – International Multidisciplinary School, Sousse", duration: "en cours – Diplôme prévu en Juin 2026" },
    { degree: "Cycle Préparatoire en Technologie et Informatique (TIC)", school: "EPI Educational Group – Sousse", duration: "2021 – 2023" },
    { degree: "Baccalauréat Sciences Techniques", school: "Lycée Bourguiba - Monastir", duration: "2019" }
  ];

  const skills = {
    frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "NestJS", "REST API"],
    languages: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "Flutter (mobile)"],
    databases: ["PostgreSQL", "MongoDB", "Prisma ORM", "Firebase"],
    tools: ["Git", "GitHub", "Linux", "Docker", "Postman", "Agile/Scrum"]
  };

  const softSkills = [
    "Esprit analytique et rigoureux",
    "Autonome et proactif",
    "Bon communicant et travail d’équipe",
    "Apprentissage rapide et adaptabilité",
    "Persévérance face aux défis techniques"
  ];

  const languages = [
    { name: "Arabe", level: "Langue maternelle" },
    { name: "Anglais", level: "Courant" },
    { name: "Français", level: "Intermédiaire" }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-16 bg-gradient-to-b from-[#0a0e17] to-[#0b1426]"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Curriculum Vitae
        </h1>

        <Tabs defaultValue="experience" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-5 mb-12 bg-white/5 backdrop-blur-md">
            <TabsTrigger value="experience"><FiBriefcase className="mr-2" /> Expérience</TabsTrigger>
            <TabsTrigger value="education"><FiAward className="mr-2" /> Éducation</TabsTrigger>
            <TabsTrigger value="skills"><FiCode className="mr-2" /> Compétences</TabsTrigger>
            <TabsTrigger value="soft"><FiUser className="mr-2" /> Soft Skills</TabsTrigger>
            <TabsTrigger value="lang"><FiGlobe className="mr-2" /> Langues</TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-cyan-400">{exp.role}</h3>
                <p className="text-gray-300">{exp.company} • {exp.duration} • {exp.location}</p>
                <p className="text-gray-400 mt-2">{exp.desc}</p>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="education" className="space-y-8">
            {education.map((edu, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-cyan-400">{edu.degree}</h3>
                <p className="text-gray-300">{edu.school}</p>
                <p className="text-gray-400">{edu.duration}</p>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="skills">
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items], i) => (
                <div key={i}>
                  <h3 className="text-lg font-bold text-cyan-400 capitalize mb-3">{category}</h3>
                  <ul className="space-y-2 text-gray-300">
                    {items.map((skill, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="soft">
            <ul className="space-y-3 text-gray-300 max-w-2xl mx-auto">
              {softSkills.map((skill, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 text-lg">
                  <span className="text-cyan-400">→</span> {skill}
                </motion.li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="lang">
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {languages.map((lang, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
                  <h4 className="text-xl font-bold text-cyan-400">{lang.name}</h4>
                  <p className="text-gray-300 mt-2">{lang.level}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Resume;