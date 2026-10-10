// components/resume/data.js
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNestjs,
  SiNodedotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiJavascript,
  SiPython,
  SiC,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiFirebase,
  SiSocketdotio,
  SiWebrtc,
  SiExpress,
  SiDotnet,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiLinux,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { FiCpu, FiSearch, FiMessageSquare } from "react-icons/fi";

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

// Skills pyramid: ONE LINE = ONE FAMILY, widest line at the bottom.
// "currentColor" = follows light / dark mode (logos that are black or white).
export const skillRows = [
  {
    label: "Frontend",
    items: [
      { name: "Next.js", Icon: SiNextdotjs, color: "currentColor" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Three.js", Icon: SiThreedotjs, color: "currentColor" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#68B15A" },
      { name: "Express", Icon: SiExpress, color: "currentColor" },
      { name: "ASP.NET", Icon: SiDotnet, color: "#8B7CFF" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "Postgres", Icon: SiPostgresql, color: "#5B8DEF" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Prisma", Icon: SiPrisma, color: "currentColor" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFA000" },
    ],
  },
  {
    label: "Real-Time & AI",
    items: [
      { name: "Socket.IO", Icon: SiSocketdotio, color: "currentColor" },
      { name: "WebRTC", Icon: SiWebrtc, color: "#F6B03B" },
      { name: "LLMs", Icon: FiCpu, color: "#C084FC" },
      { name: "RAG", Icon: FiSearch, color: "#C084FC" },
      { name: "NLP", Icon: FiMessageSquare, color: "#C084FC" },
    ],
  },
  {
    label: "Languages",
    items: [
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3B82F6" },
      { name: "Python", Icon: SiPython, color: "#FFD43B" },
      { name: "Java", Icon: FaJava, color: "#F89820" },
      { name: "C", Icon: SiC, color: "#5C9BD6" },
      { name: "C#", Icon: TbBrandCSharp, color: "#B07CFF" },
    ],
  },
  {
    label: "DevOps & Tools",
    items: [
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Actions", Icon: SiGithubactions, color: "#4F9CFF" },
      { name: "AWS", Icon: FaAws, color: "#FF9900" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "Linux", Icon: SiLinux, color: "currentColor" },
      { name: "Vercel", Icon: SiVercel, color: "currentColor" },
      { name: "Render", Icon: SiRender, color: "currentColor" },
    ],
  },
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