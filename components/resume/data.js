// components/resume/data.js
// All the content of the Resume section lives here (the components only render it).
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNestjs,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiSocketdotio,
  SiWebrtc,
  SiExpress,
  SiDotnet,
  SiDocker,
  SiGithubactions,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { FiCpu } from "react-icons/fi";

export const experiences = [
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

export const education = [
  {
    degree: "Engineering Degree — Software Engineering",
    school: "EPI – International Multidisciplinary School, Sousse, Tunisia",
    duration: "2021 – 2026",
    desc: "5-year engineering program, including a Preparatory Cycle in Technology & Computer Science (2021 – 2023) before specializing in Software Engineering.",
  },
  {
    degree: "Baccalaureate, Technical Sciences",
    school: "Lycée Bourguiba, Monastir, Tunisia",
    duration: "2019",
    desc: "National secondary school-leaving qualification, completed after 4 years of study (2015 – 2019).",
  },
];

// Skills pyramid, top -> bottom. Row n holds n boxes (1, 2, 3 ... 6).
export const pyramidRows = [
  [{ name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" }],
  [
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3B82F6" },
  ],
  [
    { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#68B15A" },
    { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  ],
  [
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "Python", Icon: SiPython, color: "#FFD43B" },
    { name: "Postgres", Icon: SiPostgresql, color: "#5B8DEF" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  ],
  [
    { name: "Prisma", Icon: SiPrisma, color: "#A3B1C6" },
    { name: "Express", Icon: SiExpress, color: "#FFFFFF" },
    { name: "Socket.IO", Icon: SiSocketdotio, color: "#FFFFFF" },
    { name: "WebRTC", Icon: SiWebrtc, color: "#F6B03B" },
    { name: "LLM · RAG", Icon: FiCpu, color: "#C084FC" },
  ],
  [
    { name: "ASP.NET", Icon: SiDotnet, color: "#8B7CFF" },
    { name: "C#", Icon: TbBrandCSharp, color: "#B07CFF" },
    { name: "Java", Icon: FaJava, color: "#F89820" },
    { name: "Docker", Icon: SiDocker, color: "#2496ED" },
    { name: "Actions", Icon: SiGithubactions, color: "#4F9CFF" },
    { name: "AWS", Icon: FaAws, color: "#FF9900" },
  ],
];

// everything else from the CV, shown as small chips under the pyramid
export const moreSkills = [
  "C",
  "REST API",
  "Firebase",
  "NLP",
  "Machine Learning",
  "Linux",
  "Vercel",
  "Render",
];

export const softSkills = [
  "Analytical Thinking",
  "Problem Solving & Resilience",
  "Autonomous & Proactive",
  "Team Collaboration",
  "Fast Learner & Adaptable",
  "Clear Communication",
];

// `percent` drives the level bar
export const spokenLanguages = [
  { name: "Arabic", level: "Native", percent: 100 },
  { name: "English", level: "Advanced", percent: 83 },
  { name: "French", level: "Advanced", percent: 83 },
  { name: "Italian", level: "Beginner", percent: 22 },
];
