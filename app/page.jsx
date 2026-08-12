// app/page.jsx
"use client";

import { Button } from "@/components/ui/button";
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";
import Link from "next/link";

import ServicesSection from "@/components/services/ServicesSection";
import WorkSection from "@/components/work/WorkSection";
import ResumeSection from "@/components/resume/ResumeSection";
import ContactSection from "@/components/contact/ContactSection";
import AmbientGlow from "@/components/AmbientGlow";
import TechMarquee from "@/components/TechMarquee";

const techStack = [
  { name: "React" }, { name: "Next.js" }, { name: "Node.js" }, { name: "NestJS" },
  { name: "TypeScript" }, { name: "PostgreSQL" }, { name: "MongoDB" }, { name: "Prisma" },
  { name: "Python" }, { name: "Docker" }, { name: "Git" }, { name: "Tailwind" },
];

const Home = () => {
  return (
    <div className="bg-primary text-ink">
     {/* ==================== HERO ==================== */}
<section className="relative isolate overflow-hidden min-h-[calc(100vh-80px)] flex items-center pt-24 pb-16 md:pt-28 md:pb-20">
  {/* Ambient background */}
  <AmbientGlow variant="default" />

  <div className="container mx-auto px-4 relative z-10">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

      {/* ==================== LEFT — INTRO ==================== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
      >
        {/* Label */}
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
          <span className="h-px w-8 bg-accent" />

          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-accent">
            Full-Stack Software Engineer
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-[48px] xl:text-[52px] font-bold leading-[1.08] tracking-tight text-ink">
          I like turning
          <br />
          complicated ideas
          <br />
          into{" "}
          <span className="text-accent">simple software.</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-base md:text-lg text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
          I'm Safwen, a Full-Stack Software Engineer focused on building
          reliable web applications. I work across the stack with{" "}
          <span className="font-medium text-ink">Next.js</span>,{" "}
          <span className="font-medium text-ink">React</span>,{" "}
          <span className="font-medium text-ink">TypeScript</span>, and{" "}
          <span className="font-medium text-ink">NestJS</span> from
          database design and APIs to the final interface.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-7">
          <Link href="/work">
            <Button
              className="
                w-full sm:w-auto
                bg-ink hover:bg-ink/90
                text-white
                font-semibold
                text-base
                px-7 py-5
                rounded-xl
                transition-all duration-200
                hover:-translate-y-0.5
              "
            >
              View My Work
              <FiArrowRight className="ml-2" />
            </Button>
          </Link>

          <a href="/Safwen-Ben-Mabrouk-CV.pdf" download>
            <Button
              variant="outline"
              className="
                w-full sm:w-auto
                border-line
                text-ink
                hover:bg-subtle
                hover:text-ink/90
                font-semibold
                text-base
                px-7 py-5
                rounded-xl
                transition-all duration-200
                hover:-translate-y-0.5
              "
            >
              <FiDownload className="mr-2" />
              Download CV
            </Button>
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-3 justify-center lg:justify-start mt-5">
          {[
            {
              Icon: FiGithub,
              href: "https://github.com/Safwen-bm",
              label: "GitHub",
            },
            {
              Icon: FiLinkedin,
              href: "https://linkedin.com/in/safwen-ben-mabrouk",
              label: "LinkedIn",
            },
            {
              Icon: FiMail,
              href: "mailto:safwenbenmabrouk@gmail.com",
              label: "Email",
            },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={
                href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={label}
              className="
                w-10 h-10
                rounded-full
                border border-line
                flex items-center justify-center
                text-muted
                hover:text-ink
                hover:border-ink
                hover:-translate-y-0.5
                transition-all duration-200
              "
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* ==================== RIGHT — PHOTO ==================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex items-center justify-center"
      >
        <div className="relative w-full h-[360px] sm:h-[410px] md:h-[450px] flex items-center justify-center">
          <Photo />
        </div>
      </motion.div>

    </div>
  </div>
</section>

{/* ==================== STATS ==================== */}
<section className="relative border-y border-line bg-subtle/40 py-10 md:py-12">
  <div className="container mx-auto px-4">
    <Stats />
  </div>
</section>

      {/* ==================== TECH STACK ==================== */}
      <section className="relative isolate overflow-hidden py-20 md:py-28">
        <AmbientGlow variant="left" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h2 className="h2 text-ink">Tech Stack</h2>
              <p className="text-muted mt-2">Full-stack, AI, and DevOps the tools I use daily</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <TechMarquee />
          </motion.div>
        </div>
      </section>

      {/* ==================== QUOTE ==================== */}
      <section className="relative isolate overflow-hidden py-10 md:py-16">
        <AmbientGlow variant="center" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="max-w-3xl mx-auto border-l-4 border-accent pl-6 md:pl-8 text-left">
              <p className="text-xl md:text-2xl font-medium text-ink leading-relaxed">
                I don't just write code I build systems that scale, stay secure, and solve real problems.
              </p>
              <p className="mt-4 text-muted">— Safwen Ben Mabrouk</p>
            </div>
          </motion.div>
        </div>
      </section>

      <ResumeSection />
      <ServicesSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
};

export default Home;