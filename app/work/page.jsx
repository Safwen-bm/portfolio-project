// app/work/page.jsx
"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    num: "01",
    title: "Plateforme de Téléconsultation Médicale",
    description: "Application complète avec vidéos en direct, gestion de dossiers médicaux, prise de rendez-vous, notifications automatiques et tableau de bord médecin. Intégration WebRTC et synchronisation temps réel.",
    stack: ["React", "Node.js", "Express", "MongoDB", "PeerJS", "SendGrid"],
    image: "/project1.png",
    github: "https://github.com/Safwen-bm/medical-platform"
  },
  {
    num: "02",
    title: "Système Bancaire",
    description: "Plateforme web sécurisée pour la gestion des taux, transactions et rôles utilisateurs. Priorité à la sécurité, performance et intégrité des données.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
    image: "/project2.png",
    github: "https://github.com/Safwen-bm/creditwin"
  },
  {
    num: "03",
    title: "Plateforme LMS (E-Learning)",
    description: "Système complet de gestion de cours : inscription, suivi de progression, messagerie en temps réel et espace administrateur.",
    stack: ["Next.js", "Node.js", "Tailwind", "Prisma", "PostgreSQL"],
    image: "/project3.png",
    github: "https://github.com/Safwen-bm/E_learning_app"
  },
  {
    num: "04",
    title: "Application de Chat Temps Réel",
    description: "Messagerie instantanée avec indicateurs de saisie, statut en ligne et interface responsive.",
    stack: ["MERN", "Socket.IO"],
    image: "/project4.png",
    github: "https://github.com/Safwen-bm/chat-app"
  }
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen py-16 bg-gradient-to-b from-[#0a0e17] to-[#0b1426]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              {project.num}
            </div>
            <h2 className="text-5xl font-bold text-white">{project.title}</h2>
            <p className="text-gray-300 text-lg">{project.description}</p>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech, i) => (
                <span key={i} className="px-4 py-2 bg-cyan-500/10 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-6">
              <Link href={project.github} target="_blank">
                <Button variant="outline" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 rounded-full px-6 py-3">
                  <BsGithub className="mr-2" /> GitHub
                </Button>
              </Link>
            </div>
          </motion.div>

          <div className="relative">
            <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange} className="h-[520px]">
              {projects.map((p, i) => (
                <SwiperSlide key={i}>
                  <div className="h-full rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-2">
                    <div className="relative w-full h-full bg-black/50 rounded-2xl overflow-hidden">
                      <Image src={p.image} alt={p.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns containerStyles="absolute right-6 bottom-6 z-10 flex gap-3" btnStyles="bg-cyan-500 hover:bg-cyan-600 text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;