// components/work/WorkSection.jsx
"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { projects } from "./projectsData";
import AmbientGlow from "@/components/AmbientGlow";

gsap.registerPlugin(ScrollTrigger);

const WorkSection = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDots, setShowDots] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    onResize();
    window.addEventListener("resize", onResize);

    if (!isMobile && containerRef.current) {
      const ctx = gsap.context(() => {
        const panels = gsap.utils.toArray(".project-panel", containerRef.current);
        if (!panels || panels.length === 0) return;

        const containerHeight = containerRef.current.offsetHeight || window.innerHeight;
        const rawOffset = Math.round(containerHeight * 0.18);
        const offset = Math.min(Math.max(rawOffset, 80), 260);
        const totalScrollWidth = (panels.length - 1) * window.innerWidth;

        const horizontalTween = gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          force3D: true,
        });

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: `top+=${offset} top`,
          end: `+=${totalScrollWidth}`,
          pin: true,
          scrub: 1.2,
          animation: horizontalTween,
          anticipatePin: 1,
          snap: { snapTo: 1 / (panels.length - 1), duration: 0.5, ease: "power2.out" },
          onUpdate: (self) => setActiveIndex(Math.round(self.progress * (panels.length - 1))),
          onEnter: () => setShowDots(true),
          onLeave: () => setShowDots(false),
          onEnterBack: () => setShowDots(true),
          onLeaveBack: () => setShowDots(false),
        });

        ScrollTrigger.refresh();
      }, containerRef);

      return () => {
        try { ctx.revert(); } catch (e) { ScrollTrigger.getAll().forEach((t) => t.kill()); }
      };
    }

    return () => window.removeEventListener("resize", onResize);
  }, [isMobile]);

  return (
    <>
      <section ref={containerRef} className="relative isolate overflow-hidden border-t border-line">
        <AmbientGlow variant="default" />
        <div className="pt-20 md:pt-24 pb-14 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto px-6"
          >
            <h2 className="h2 text-ink">Featured Projects</h2>
            <p className="mt-3 text-muted">Selected works — full stack & real-time.</p>
          </motion.div>
        </div>

        {!isMobile && (
          <div className="flex h-[calc(100vh-220px)] relative z-10">
            {projects.map((project, i) => (
              <div key={i} className="project-panel min-w-full h-full flex items-center justify-center px-10">
                <div className="grid grid-cols-2 gap-12 items-center max-w-6xl w-full">
                  <ProjectContent project={project} />
                  <ProjectImage project={project} />
                </div>
              </div>
            ))}
          </div>
        )}

        {isMobile && (
          <div className="px-5 pb-16 space-y-8 relative z-10">
            {projects.map((project, i) => (
              <MobileCard key={i} project={project} index={i} />
            ))}
          </div>
        )}
      </section>

      {!isMobile && (
        <div
          className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex gap-2 transition-opacity duration-300 ${
            showDots ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {projects.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-8 h-1.5 bg-ink" : "w-1.5 h-1.5 bg-line"
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
};

const ProjectContent = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="space-y-5"
  >
    <span className="text-sm font-semibold text-accent">{project.num}</span>
    <h3 className="text-3xl md:text-4xl font-bold text-ink">{project.title}</h3>
    <p className="text-muted text-base max-w-xl leading-relaxed">{project.description}</p>

    <div className="flex flex-wrap gap-2">
      {project.stack.map((tech, idx) => (
        <span key={idx} className="px-3 py-1 bg-subtle border border-line rounded-full text-xs text-ink">
          {tech}
        </span>
      ))}
    </div>

    <div className="flex gap-3 pt-2">
      <Link href={project.github} target="_blank">
        <Button className="bg-ink hover:bg-ink/90 text-white px-5 py-2.5 rounded-full flex items-center gap-2 text-sm">
          <BsGithub /> GitHub
        </Button>
      </Link>
      <Link href={project.live} target="_blank">
        <Button variant="outline" className="border-line text-ink hover:bg-subtle hover:text-ink/90 px-5 py-2.5 rounded-full flex items-center gap-2 text-sm">
          <BsBoxArrowUpRight /> Live
        </Button>
      </Link>
    </div>
  </motion.div>
);

const ProjectImage = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.97 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative h-[420px] rounded-2xl overflow-hidden bg-subtle border border-line p-3"
  >
    <div className="relative w-full h-full rounded-xl overflow-hidden bg-white">
      <Image src={project.image} alt={project.title} fill className="object-contain" />
    </div>
  </motion.div>
);

const MobileCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="bg-white border border-line rounded-2xl p-5 space-y-4"
  >
    <div className="flex justify-between items-center">
      <span className="text-sm font-semibold text-accent">{project.num}</span>
      <div className="flex gap-2">
        <Link href={project.github} target="_blank">
          <Button size="sm" className="bg-ink px-3 py-2"><BsGithub className="text-sm" /></Button>
        </Link>
        <Link href={project.live} target="_blank">
          <Button size="sm" variant="outline" className="border-line text-ink px-3 py-2"><BsBoxArrowUpRight className="text-sm" /></Button>
        </Link>
      </div>
    </div>

    <h4 className="text-lg font-bold text-ink">{project.title}</h4>
    <p className="text-muted text-sm leading-relaxed">{project.description}</p>

    <div className="flex flex-wrap gap-2">
      {project.stack.map((tech, i) => (
        <span key={i} className="px-2 py-1 bg-subtle border border-line rounded-full text-[10px] text-ink">
          {tech}
        </span>
      ))}
    </div>

    <div className="relative h-44 rounded-xl overflow-hidden bg-white border border-line">
      <Image src={project.image} alt={project.title} fill className="object-contain" />
    </div>
  </motion.article>
);

export default WorkSection;