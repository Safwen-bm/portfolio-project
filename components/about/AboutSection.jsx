// components/about/AboutSection.jsx
"use client";

import { motion } from "framer-motion";
import AmbientGlow from "@/components/AmbientGlow";

const AboutSection = () => {
  return (
    <section className="relative isolate overflow-hidden py-20 md:py-28">
      <AmbientGlow variant="center" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="h2 text-ink">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto text-center space-y-4"
        >
          <p className="text-muted leading-relaxed text-base md:text-lg">
            Hey, I&apos;m Safwen, a recent Computer Engineering graduate from
            EPI Sousse, Tunisia. I enjoy building web applications from the
            ground up from planning the architecture and database to
            developing the frontend, backend, testing, and deployment.
          </p>
          <p className="text-muted leading-relaxed text-base md:text-lg">
            My main focus is full-stack development with{" "}
            <span className="text-ink font-medium">Next.js</span>,{" "}
            <span className="text-ink font-medium">React</span>,{" "}
            <span className="text-ink font-medium">TypeScript</span>, and{" "}
            <span className="text-ink font-medium">NestJS</span>. I&apos;ve
            also worked with AI, including NLP, machine learning, RAG, and
            LLM-based features.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;