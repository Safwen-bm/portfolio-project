"use client";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiPython,
  SiDocker,
  SiGit,
  SiTailwindcss,
} from "react-icons/si";

const techStack = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
];

export default function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-primary to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-primary to-transparent" />

      <div className="flex w-max marquee-track">
        {[...techStack, ...techStack].map(({ name, Icon, color }, i) => (
          <div
            key={i}
            className="flex items-center gap-3 mx-3 md:mx-4 px-5 py-3 bg-white border border-line rounded-2xl shrink-0 hover:border-accent/40 hover:shadow-sm transition-all"
          >
            <Icon size={22} style={{ color }} className="shrink-0" />
            <span className="text-sm font-medium text-ink whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}