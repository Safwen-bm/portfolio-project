// components/work/WorkSection.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "./projectsData";

// Tracks which project is centered in a horizontal scroller.
// With `wheel`, the mouse wheel / trackpad scrolls it sideways (smooth lerp) and hands the
// scroll back to the page once the first or last project is reached.
const useHorizontalScroller = (ref, setActiveIndex, { wheel = false } = {}) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let target = el.scrollLeft;
    let current = el.scrollLeft;
    let rafId = 0;
    let animating = false;

    const tick = () => {
      current += (target - current) * 0.12;

      if (Math.abs(target - current) < 0.5) {
        current = target;
        el.scrollLeft = current;
        animating = false;
        return;
      }

      el.scrollLeft = current;
      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!animating) {
        animating = true;
        rafId = requestAnimationFrame(tick);
      }
    };

    const onWheel = (e) => {
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;

      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

      if (delta > 0 && target >= max - 1) return; // let the page scroll down
      if (delta < 0 && target <= 1) return; // let the page scroll up

      e.preventDefault();
      e.stopPropagation();

      target = Math.max(0, Math.min(max, target + delta));
      start();
    };

    const onScroll = () => {
      if (!animating) {
        target = el.scrollLeft;
        current = el.scrollLeft;
      }
      const max = el.scrollWidth - el.clientWidth;
      const progress = max > 0 ? el.scrollLeft / max : 0;
      setActiveIndex(Math.round(progress * (projects.length - 1)));
    };

    if (wheel) el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (wheel) el.removeEventListener("wheel", onWheel);
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [ref, setActiveIndex, wheel]);
};

const Dots = ({ activeIndex, className = "" }) => (
  <div
    className={`items-center gap-2 rounded-full bg-primary/90 px-3 py-2 shadow-soft ring-1 ring-line backdrop-blur ${className}`}
    aria-hidden="true"
  >
    {projects.map((_, i) => (
      <div
        key={i}
        className={`h-2 rounded-full transition-all duration-300 ${
          activeIndex === i ? "w-8 bg-accent" : "w-2 bg-ink/20"
        }`}
      />
    ))}
  </div>
);

const WorkSection = () => {
  const sectionRef = useRef(null);
  const desktopRef = useRef(null);
  const touchRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDots, setShowDots] = useState(false);

  // Show the floating dots only while the section is in view
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowDots(entry.isIntersecting),
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useHorizontalScroller(desktopRef, setActiveIndex, { wheel: true });
  useHorizontalScroller(touchRef, setActiveIndex);

  return (
    <>
      <section ref={sectionRef} id="work" className="relative isolate overflow-hidden bg-primary">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-dots fade-radial absolute inset-0" />
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgb(var(--c-accent)/0.1),transparent)]" />
        </div>

        <div className="container mx-auto px-4 pt-16 md:pt-20">
          <SectionHeading
            index="04"
            title="Featured Projects"
            subtitle="Selected works — full stack & real-time."
          />
        </div>

        {/* DESKTOP — horizontal scroll with the wheel */}
        <div
          ref={desktopRef}
          className="no-scrollbar relative hidden h-[calc(100svh-200px)] min-h-[520px] overflow-x-auto overflow-y-hidden overscroll-x-contain lg:flex"
          style={{ scrollBehavior: "auto" }}
        >
          {projects.map((project) => (
            <div
              key={project.num}
              className="flex h-full min-w-full items-center justify-center px-10"
            >
              <div className="grid w-full max-w-6xl grid-cols-2 items-center gap-14">
                <ProjectContent project={project} />
                <ProjectImage project={project} />
              </div>
            </div>
          ))}
        </div>

        {/* TABLET / MOBILE — horizontal swipe, one card at a time (the next one peeks in) */}
        <div className="lg:hidden">
          <div
            ref={touchRef}
            className="no-scrollbar flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto overscroll-x-contain scroll-pl-5 px-5 pb-6 pt-2"
          >
            {projects.map((project) => (
              <MobileCard key={project.num} project={project} />
            ))}
          </div>

          <div className="flex justify-center pb-14">
            <Dots activeIndex={activeIndex} className="flex" />
          </div>
        </div>
      </section>

      {/* floating progress dots (desktop) */}
      <Dots
        activeIndex={activeIndex}
        className={`fixed bottom-10 left-1/2 z-50 hidden -translate-x-1/2 transition-opacity duration-300 lg:flex ${
          showDots ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
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
    <span className="block select-none font-display text-[96px] font-semibold leading-none text-accent/15 xl:text-[130px]">
      {project.num}
    </span>

    <h3 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
      {project.title}
    </h3>
    <p className="max-w-xl text-base leading-relaxed text-muted">{project.description}</p>

    <div className="flex flex-wrap gap-2">
      {project.stack.map((tech, idx) => (
        <span
          key={idx}
          className="rounded-full bg-accent-light px-3 py-1 font-mono text-xs font-bold text-accent"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="flex gap-4 pt-2">
      {project.github && (
        <Button asChild size="sm">
          <Link href={project.github} target="_blank" rel="noopener noreferrer">
            <BsGithub /> GitHub
          </Link>
        </Button>
      )}
      {project.live && (
        <Button asChild variant="outline" size="sm">
          <Link href={project.live} target="_blank" rel="noopener noreferrer">
            <BsBoxArrowUpRight /> Live
          </Link>
        </Button>
      )}
    </div>
  </motion.div>
);

// browser-like frame around the screenshot, with the same gradient edge as the hero photo
const Frame = ({ children }) => (
  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-glow via-accent to-saffron p-[2px] shadow-lift">
    <div className="relative overflow-hidden rounded-[22px] bg-primary">
      <div className="flex h-8 items-center gap-1.5 border-b border-line bg-subtle px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-saffron" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
      </div>
      {children}
    </div>
  </div>
);

const ProjectImage = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.97 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <Frame>
      <div className="relative h-[clamp(240px,42svh,400px)] bg-primary">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 960px) 560px, 100vw"
          className="object-contain"
        />
      </div>
    </Frame>
  </motion.div>
);

const MobileCard = ({ project }) => (
  <article
    className="flex w-[86%] shrink-0 snap-start flex-col gap-4 rounded-3xl border border-line bg-subtle p-5 shadow-soft sm:w-[60%]"
  >
    <div className="flex items-center justify-between">
      <span className="font-display text-2xl font-semibold text-accent">{project.num}</span>
      <div className="flex gap-2">
        {project.github && (
          <Button asChild size="sm" className="h-10 px-3" aria-label="GitHub">
            <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <BsGithub className="text-sm" />
            </Link>
          </Button>
        )}
        {project.live && (
          <Button asChild size="sm" variant="outline" className="h-10 px-3" aria-label="Live">
            <Link href={project.live} target="_blank" rel="noopener noreferrer">
              <BsBoxArrowUpRight className="text-sm" />
            </Link>
          </Button>
        )}
      </div>
    </div>

    <h4 className="font-display text-xl font-semibold text-ink">{project.title}</h4>
    <p className="text-sm leading-relaxed text-muted">{project.description}</p>

    <div className="flex flex-wrap gap-2">
      {project.stack.map((tech, i) => (
        <span
          key={i}
          className="rounded-full bg-accent-light px-2.5 py-1 font-mono text-[10px] font-bold text-accent"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="mt-auto">
      <Frame>
        <div className="relative h-44 bg-primary">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 86vw, 60vw"
            className="object-contain"
          />
        </div>
      </Frame>
    </div>
  </article>
);

export default WorkSection;
