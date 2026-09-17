// components/work/WorkSection.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { projects } from "./projectsData";
import AmbientGlow from "@/components/AmbientGlow";

const WorkSection = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDots, setShowDots] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Track viewport size
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Show dots only while the horizontal section is actually in view
  useEffect(() => {
    if (isMobile || !sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowDots(entry.isIntersecting),
      { threshold: 0.5 },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  // Smooth horizontal scroll via wheel, with a manual rAF lerp
  // so it feels as smooth as Lenis instead of snapping instantly.
  useEffect(() => {
    if (isMobile) return;
    const el = scrollRef.current;
    if (!el) return;

    let target = el.scrollLeft;
    let current = el.scrollLeft;
    let rafId;
    let isAnimating = false;

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      current = lerp(current, target, 0.12); // easing factor — lower = smoother/slower

      if (Math.abs(target - current) < 0.5) {
        current = target;
        el.scrollLeft = current;
        isAnimating = false;
        return;
      }

      el.scrollLeft = current;
      rafId = requestAnimationFrame(animate);
    };

    const startAnimating = () => {
      if (!isAnimating) {
        isAnimating = true;
        rafId = requestAnimationFrame(animate);
      }
    };

    const handleWheel = (e) => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;

      const delta =
        Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      const atStart = target <= 1;
      const atEnd = target >= maxScroll - 1;

      if (delta > 0 && atEnd) return; // let page scroll down
      if (delta < 0 && atStart) return; // let page scroll up

      e.preventDefault();
      e.stopPropagation();

      target += delta;
      target = Math.max(0, Math.min(maxScroll, target));
      startAnimating();
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  // Update active dot as the user scrolls horizontally
  useEffect(() => {
    if (isMobile) return;
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const progress = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
      setActiveIndex(Math.round(progress * (projects.length - 1)));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative isolate overflow-hidden border-t border-line"
      >
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
            <p className="mt-3 text-muted">
              Selected works — full stack & real-time. Scroll here to browse, or
              move your cursor away to keep scrolling the page.
            </p>
          </motion.div>
        </div>

        {!isMobile && (
          <div
            ref={scrollRef}
            className="no-scrollbar flex overflow-x-auto overflow-y-hidden h-[calc(100vh-220px)] relative z-10"
            style={{ scrollBehavior: "auto", willChange: "scroll-position" }}
          >
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
    <p className="text-muted text-base max-w-xl leading-relaxed">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2">
      {project.stack.map((tech, idx) => (
        <span
          key={idx}
          className="px-3 py-1 bg-subtle border border-line rounded-full text-xs text-ink"
        >
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
        <Button
          variant="outline"
          className="border-line text-ink hover:bg-subtle hover:text-ink/90 px-5 py-2.5 rounded-full flex items-center gap-2 text-sm"
        >
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
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-contain"
      />
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
          <Button size="sm" className="bg-ink px-3 py-2">
            <BsGithub className="text-sm" />
          </Button>
        </Link>
        <Link href={project.live} target="_blank">
          <Button
            size="sm"
            variant="outline"
            className="border-line text-ink px-3 py-2"
          >
            <BsBoxArrowUpRight className="text-sm" />
          </Button>
        </Link>
      </div>
    </div>

    <h4 className="text-lg font-bold text-ink">{project.title}</h4>
    <p className="text-muted text-sm leading-relaxed">{project.description}</p>

    <div className="flex flex-wrap gap-2">
      {project.stack.map((tech, i) => (
        <span
          key={i}
          className="px-2 py-1 bg-subtle border border-line rounded-full text-[10px] text-ink"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="relative h-44 rounded-xl overflow-hidden bg-white border border-line">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-contain"
      />
    </div>
  </motion.article>
);

export default WorkSection;
