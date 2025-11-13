// components/Footer.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMouse } from "react-use";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const mouse = useMouse(footerRef);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    mouseX.set(mouse.elX || 0);
    mouseY.set(mouse.elY || 0);
  }, [mouse.elX, mouse.elY, mouseX, mouseY]);

  return (
    <footer
      ref={footerRef}
      className="relative mt-40 py-20 overflow-hidden bg-black/95 backdrop-blur-3xl border-t border-purple-500/30"
      style={{
        boxShadow: "0 -30px 60px rgba(0, 0, 0, 0.6), 0 0 80px rgba(140, 60, 255, 0.3)",
      }}
    >
      {/* LIQUID MOUSE ORB (same as header) */}
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(700px circle at ${mouse.elX}px ${mouse.elY}px, rgba(140, 60, 255, 0.3), transparent 40%),
            radial-gradient(900px circle at ${mouse.elX * 0.7}px ${mouse.elY * 1.3}px, rgba(255, 100, 200, 0.15), transparent 50%),
            radial-gradient(600px circle at ${mouse.elX * 1.2}px ${mouse.elY * 0.8}px, rgba(100, 200, 255, 0.1), transparent 60%)
          `,
        }}
      />

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 -z-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
            style={{
              left: `${15 + (i * 6)}%`,
              bottom: `${10 + (i * 7)}%`,
            }}
            animate={{
              y: [0, 50, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      {/* PORTAL RING (reverse of header) */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: `conic-gradient(from 180deg at 50% 50%, #8B5CF6, #EC4899, #06B6D4, #8B5CF6)`,
          mask: "radial-gradient(transparent 60%, black 61%)",
          opacity: 0.6,
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

          {/* ---- LEFT – PORTAL LOGO ---- */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/" className="flex items-center gap-4 mb-6 group">
              <motion.div
                className="relative w-14 h-14 rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #1a0033, #0a0a1a)",
                  border: "2px solid rgba(140, 60, 255, 0.6)",
                  boxShadow: "0 0 40px rgba(140, 60, 255, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)",
                }}
                animate={{
                  borderRadius: ["30%", "50%", "30%"],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {`</>`}
                  </span>
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-cyan-600/40"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>

              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  SafOne
                </h3>
                <p className="text-xs text-purple-300 tracking-widest">PORTAL ENGINEER</p>
              </motion.div>
            </Link>

            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Full-Stack Engineer • PFE 2026 • Monastir, Tunisia
            </p>

            {/* CONTACT ICONS */}
            <div className="mt-8 flex gap-4">
              {[
                { Icon: FiMail, href: "mailto:safwenbenmabrouk@gmail.com", label: "Email" },
                { Icon: FiPhone, href: "tel:+21655574559", label: "Phone" },
                { Icon: FiMapPin, href: "https://maps.google.com/?q=Monastir,Tunisia", label: "Location" },
              ].map(({ Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 rounded-full bg-white/5 border border-purple-500/30 flex items-center justify-center backdrop-blur-sm group"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  aria-label={label}
                >
                  <Icon className="text-purple-300 group-hover:text-cyan-400 transition" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/50 to-cyan-600/50 blur-xl -z-10 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.5 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ---- CENTER – QUICK LINKS (LIQUID) ---- */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
              QUICK LINKS
            </h4>
            <nav className="flex flex-col gap-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Resume", href: "/resume" },
                { label: "Projects", href: "/work" },
                { label: "Contact", href: "/contact" },
              ].map((link, i) => (
                <motion.div
                  key={link.href}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <motion.div
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* ---- RIGHT – SOCIAL & COPYRIGHT ---- */}
          <motion.div
            className="flex flex-col items-center md:items-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="font-bold text-lg bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              FOLLOW ME
            </h4>

            <div className="flex gap-4 mb-10">
              {[
                { Icon: FiGithub, href: "https://github.com/Safwen-bm", label: "GitHub" },
                { Icon: FiLinkedin, href: "https://linkedin.com/in/safwen-ben-mabrouk", label: "LinkedIn" },
              ].map(({ Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-purple-500/40 flex items-center justify-center backdrop-blur-sm group"
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  aria-label={label}
                >
                  <Icon className="text-purple-300 text-xl group-hover:text-cyan-400 transition" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/60 to-pink-600/60 blur-xl -z-10 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.6 }}
                  />
                </motion.a>
              ))}
            </div>

            <p className="text-xs text-gray-500 tracking-widest">
              © {currentYear} SAFWEN BEN MABROUK. ALL RIGHTS RESERVED.
            </p>
          </motion.div>
        </div>

        {/* PORTAL DIVIDER */}
        <motion.div
          className="mt-16 h-px relative overflow-hidden"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ height: "2px" }}
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;