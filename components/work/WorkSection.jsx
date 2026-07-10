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
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: 0.5,
            ease: "power2.out",
          },
          onUpdate: (self) => {
            const idx = Math.round(self.progress * (panels.length - 1));
            setActiveIndex(idx);
          },
          onEnter: () => setShowDots(true),
          onLeave: () => setShowDots(false),
          onEnterBack: () => setShowDots(true),
          onLeaveBack: () => setShowDots(false),
        });

        ScrollTrigger.refresh();
      }, containerRef);

      return () => {
        try {
          ctx.revert();
        } catch (e) {
          ScrollTrigger.getAll().forEach((t) => t.kill());
        }
      };
    }

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [isMobile]);

  return (
    <>
      <section
        ref={containerRef}
        className="relative bg-gradient-to-b from-[#05070c] via-[#0a0f21] to-[#05070c] overflow-hidden"
      >
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-32 left-32 w-[500px] h-[500px] bg-cyan-500/18 rounded-full blur-[160px]" />
          <div className="absolute bottom-32 right-32 w-[460px] h-[460px] bg-purple-500/16 rounded-full blur-[160px]" />
        </div>

        <div className="pt-32 md:pt-39 pb-16 md:pb-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-5xl mx-auto px-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-violet-500 to-rose-600 leading-tight">
              Featured Projects
            </h1>
            <p className="mt-5 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Selected works — full stack & realtime.
            </p>
          </motion.div>
        </div>

        {!isMobile && (
          <div className="flex h-[calc(100vh-200px)]">
            {projects.map((project, i) => (
              <div
                key={i}
                className="project-panel min-w-full h-full flex items-center justify-center px-10"
              >
                <div className="grid grid-cols-2 gap-12 items-center max-w-6xl w-full">
                  <ProjectContent project={project} />
                  <ProjectImage project={project} />
                </div>
              </div>
            ))}
          </div>
        )}

        {isMobile && (
          <div className="px-5 pb-20 space-y-12">
            {projects.map((project, i) => (
              <MobileCard key={i} project={project} index={i} />
            ))}
          </div>
        )}
      </section>

      {!isMobile && (
        <div
          className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex gap-3 transition-all duration-300 ${
            showDots ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {projects.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-14 h-2 bg-cyan-400 shadow-lg shadow-cyan-400/30" : "w-3 h-2 bg-gray-600"
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
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="space-y-6"
  >
    <div className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
      {project.num}
    </div>

    <h3 className="text-4xl md:text-5xl font-extrabold text-white">{project.title}</h3>

    <p className="text-gray-300 text-lg max-w-xl leading-relaxed">{project.description}</p>

    <div className="flex flex-wrap gap-3">
      {project.stack.map((tech, idx) => (
        <span
          key={idx}
          className="px-3 py-1.5 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-full text-sm"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="flex gap-4">
      <Link href={project.github} target="_blank">
        <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-3 rounded-full flex items-center gap-2">
          <BsGithub /> GitHub
        </Button>
      </Link>
      <Link href={project.live} target="_blank">
        <Button variant="outline" className="border-cyan-400 text-cyan-300 px-5 py-3 rounded-full flex items-center gap-2">
          <BsBoxArrowUpRight /> Live
        </Button>
      </Link>
    </div>
  </motion.div>
);

const ProjectImage = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative h-[520px] rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-500/10 to-purple-600/10 p-4 shadow-xl"
  >
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/60">
      <Image src={project.image} alt={project.title} fill className="object-contain transition-transform duration-1000 hover:scale-105" />
      <div className="absolute bottom-6 left-6">
        <p className="text-white/70 text-sm">Project {project.num}</p>
        <p className="text-white text-lg font-bold">{project.title}</p>
      </div>
    </div>
  </motion.div>
);

const MobileCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.05 }}
    className="bg-[#0d1220] border border-white/5 rounded-3xl p-5 shadow-2xl space-y-5"
  >
    <div className="flex justify-between items-center">
      <div className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        {project.num}
      </div>

      <div className="flex gap-2">
        <Link href={project.github} target="_blank">
          <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2">
            <BsGithub className="text-base" />
          </Button>
        </Link>
        <Link href={project.live} target="_blank">
          <Button size="sm" variant="outline" className="border-cyan-400 text-cyan-300 px-3 py-2">
            <BsBoxArrowUpRight className="text-base" />
          </Button>
        </Link>
      </div>
    </div>

    <h4 className="text-xl font-bold text-white leading-tight">
      {project.title}
    </h4>

    <p className="text-gray-300 text-sm leading-relaxed">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2">
      {project.stack.map((tech, i) => (
        <span
          key={i}
          className="px-2 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-full text-[10px]"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="relative h-52 rounded-2xl overflow-hidden bg-black/40 shadow-lg">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-contain transition-transform duration-700 hover:scale-105"
      />
    </div>
  </motion.article>
);

export default WorkSection;
