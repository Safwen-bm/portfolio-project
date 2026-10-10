// components/hero/Photo.jsx
"use client";

import Image from "next/image";
import { SiNextdotjs, SiReact, SiTypescript, SiNestjs } from "react-icons/si";

const badges = [
  { Icon: SiNextdotjs, label: "Next.js", position: "top-10 -left-4 sm:-left-14", delay: "0s", color: "#FFFFFF" },
  { Icon: SiReact, label: "React", position: "top-24 -right-3 sm:-right-12", delay: "0.6s", color: "#61DAFB" },
  { Icon: SiTypescript, label: "TypeScript", position: "bottom-32 -left-4 sm:-left-16", delay: "1.2s", color: "#3B82F6" },
  { Icon: SiNestjs, label: "NestJS", position: "bottom-12 -right-3 sm:-right-10", delay: "1.8s", color: "#E0234E" },
];

const Photo = () => {
  return (
    <div className="relative aspect-[4/5] w-[260px] sm:w-[300px] md:w-[340px]">
      {/* soft light behind the box (static gradient, no blur filter) */}
      <div className="pointer-events-none absolute -inset-12 bg-[radial-gradient(closest-side,rgb(var(--c-glow)/0.35),transparent)]" />

      {/* glow that follows the notched shape */}
      <div
        className="relative h-full w-full"
        style={{ filter: "drop-shadow(0 0 18px rgb(var(--c-glow) / 0.45))" }}
      >
        {/* gradient edge = outer shape */}
        <div className="clip-hud h-full w-full rounded-br-[48px] rounded-tl-[48px] bg-gradient-to-br from-glow via-accent to-saffron p-[2px] [--s:10px] md:[--s:14px]">
          {/* inner shape (same cuts, 2px smaller) */}
          <div className="clip-hud relative h-full w-full overflow-hidden rounded-br-[46px] rounded-tl-[46px] bg-ink">
            <Image
              src="/myImage.png"
              alt="Safwen Ben Mabrouk"
              fill
              priority
              sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, 340px"
              className="object-cover object-top"
            />

            {/* color grade + HUD details */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/10" />
            <div className="hud-grid absolute inset-0 opacity-40 [-webkit-mask-image:linear-gradient(to_bottom,transparent,#000_60%)] [mask-image:linear-gradient(to_bottom,transparent,#000_60%)]" />
            <div className="absolute inset-x-0 top-0 h-1/4 animate-scan bg-gradient-to-b from-transparent via-glow/25 to-transparent" />

            <span className="absolute left-4 top-4 h-5 w-5 rounded-tl-lg border-l-2 border-t-2 border-glow/80" />
            <span className="absolute bottom-4 right-4 h-5 w-5 rounded-br-lg border-b-2 border-r-2 border-glow/80" />
          </div>
        </div>
      </div>

      {/* floating tech chips */}
      {badges.map(({ Icon, label, position, delay, color }) => (
        <div key={label} className={`absolute z-20 ${position}`}>
          <div className="animate-float" style={{ animationDelay: delay }}>
            <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-ink/80 px-3 py-1.5 shadow-glow">
              <Icon className="text-base" style={{ color }} />
              <span className="whitespace-nowrap font-mono text-[11px] font-bold text-white">
                {label}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Photo;
