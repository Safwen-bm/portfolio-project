// components/techstack/TechMarquee.jsx
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

// brand colors; "currentColor" (follows light / dark mode) for the logos that are black or white
const techStack = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "currentColor" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#68B15A" },
  { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3B82F6" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#5B8DEF" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Prisma", Icon: SiPrisma, color: "#A3B1C6" },
  { name: "Python", Icon: SiPython, color: "#FFD43B" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
];

export default function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-1 [-webkit-mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)] [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
      <div className="marquee-track flex w-max">
        {[...techStack, ...techStack].map(({ name, Icon, color }, i) => (
          <div
            key={i}
            aria-hidden={i >= techStack.length}
            className="mx-1.5 flex shrink-0 items-center gap-2.5 rounded-xl border border-line bg-surface px-4 py-2 text-ink transition-all duration-200 hover:border-accent/60 md:mx-2"
          >
            <Icon size={18} style={{ color }} className="shrink-0" />
            <span className="whitespace-nowrap font-mono text-[13px] font-semibold text-ink">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}