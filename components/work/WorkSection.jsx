// components/work/WorkSection.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

// ------------------------------------
// PROJECTS
// ------------------------------------
const projects = [
  {
    num: "01",
    title: "Medical Teleconsultation Platform",
    description:
      "Full-featured app with live video calls, medical record management, appointment scheduling, automated notifications, and doctor dashboard. WebRTC integration with real-time sync.",
    stack: ["React", "Node.js", "Express", "MongoDB", "PeerJS", "SendGrid"],
    image: "/telemed.png",
    github: "https://github.com/Safwen-bm/medical-platform",
    live: "https://medical.safone.tn",
  },
  {
    num: "02",
    title: "Secure Banking System",
    description:
      "Secure web platform for managing rates, transactions, and user roles.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
    image: "/project2.png",
    github: "https://github.com/Safwen-bm/creditwin",
    live: "https://creditwin.safone.tn",
  },
  {
    num: "03",
    title: "LMS E-Learning Platform",
    description:
      "Complete course management system: enrollment, progress tracking, real-time messaging, and admin panel.",
    stack: ["Next.js", "Node.js", "Tailwind", "Prisma", "PostgreSQL"],
    image: "/elearning.png",
    github: "https://github.com/Safwen-bm/E_learning_app",
    live: "https://elearning.safone.tn",
  },
  {
    num: "04",
    title: "MERN Chat Application",
    description:
      "Real-time messaging with typing indicators, online status, and responsive UI.",
    stack: ["MERN", "Socket.IO"],
    image: "/chatapp.png",
    github: "https://github.com/Safwen-bm/fullstack-chat-app",
    live: "https://chat.safone.tn",
  },
  {
    num: "05",
    title: "Coffee Shop Website",
    description:
      "Responsive website for a café with interactive menu, contact form, and smooth design.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/coffee-shop.png",
    github: "https://github.com/Safwen-bm/coffee-shop",
    live: "https://safwen-bm.github.io/coffee-shop",
  },
  {
    num: "06",
    title: "Flower Shop Website",
    description:
      "Responsive flower shop site with product catalog and contact form.",
    stack: ["HTML", "CSS"],
    image: "/flower-shop.png",
    github: "https://github.com/Safwen-bm/flower-shop",
    live: "https://safwen-bm.github.io/flower-shop",
  },
  {
    num: "07",
    title: "Movie Explorer",
    description:
      "Modern app to explore, search, and discover movies with a fluid interface.",
    stack: ["React", "Vite", "TMDB API"],
    image: "/movie-explorer.png",
    github: "https://github.com/Safwen-bm/movie-explorer",
    live: "https://movie-explorer.safone.tn",
  },
  {
    num: "08",
    title: "Task Management Tool",
    description:
      "Task manager with Kanban board, drag & drop, and Firebase authentication.",
    stack: ["React", "Firebase"],
    image: "/task-manager.png",
    github: "https://github.com/Safwen-bm/task-manager",
    live: "https://task-manager.safone.tn",
  },
];

const WorkSection = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDots, setShowDots] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const panels = gsap.utils.toArray(".project-panel");
    if (panels.length === 0) return;

    const totalScrollWidth = (panels.length - 1) * window.innerWidth;

    const horizontalTween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
    });

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${totalScrollWidth}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      animation: horizontalTween,
      snap: {
        snapTo: 1 / (panels.length - 1),
        duration: 0.5,
        ease: "power1.out",
      },
      onUpdate: (self) => {
        const index = Math.round(self.progress * (panels.length - 1));
        setActiveIndex(index);
      },
      onEnter: () => setShowDots(true),
      onLeave: () => setShowDots(false),
      onEnterBack: () => setShowDots(true),
      onLeaveBack: () => setShowDots(false),
    });

    ScrollTrigger.refresh();

    return () => {
      trigger.kill();
      horizontalTween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="relative bg-gradient-to-b from-[#0a0e17] via-[#0b1426] to-[#0a0e17] overflow-hidden"
      >
        {/* FLOATING ORBS */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-32 left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-32 right-32 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        {/* HORIZONTAL SCROLL */}
        <div className="flex h-screen">
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-panel min-w-full h-screen flex items-center justify-center px-6"
            >
              <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* LEFT TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7 }}
                  className="space-y-8"
                >
                  <div className="text-8xl md:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                    {project.num}
                  </div>

                  <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                    {project.title}
                  </h2>

                  <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded-full text-sm backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-5">
                    <Link href={project.github} target="_blank">
                      <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-white font-bold px-8 py-6 rounded-full">
                        <BsGithub className="mr-3 text-xl" /> GitHub
                      </Button>
                    </Link>

                    <Link href={project.live} target="_blank">
                      <Button
                        variant="outline"
                        className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 px-8 py-6 rounded-full"
                      >
                        <BsBoxArrowUpRight className="mr-3 text-xl" /> Live Demo
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7 }}
                  className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 p-3"
                >
                  <div className="relative w-full h-full bg-black/60 rounded-2xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-sm opacity-70">Project {project.num}</p>
                      <p className="text-lg font-bold">{project.title}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRESS DOTS */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2 transition-all duration-500 ${
          showDots ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {projects.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-12 bg-cyan-400 shadow-lg shadow-cyan-400/50"
                : "w-2 bg-gray-600"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default WorkSection;