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
      className="relative isolate mt-40 py-20 overflow-hidden bg-subtle border-t border-line"
    >
      {/* LIQUID MOUSE GLOW */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(700px circle at ${mouse.elX}px ${mouse.elY}px, rgba(37, 99, 235, 0.14), transparent 40%),
            radial-gradient(900px circle at ${mouse.elX * 0.7}px ${mouse.elY * 1.3}px, rgba(79, 70, 229, 0.09), transparent 50%)
          `,
        }}
      />

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-accent"
            style={{ left: `${15 + i * 6}%`, bottom: `${10 + i * 7}%`, opacity: 0.6 }}
            animate={{ y: [0, 40, 0], opacity: [0.3, 0.9, 0.3], scale: [1, 1.8, 1] }}
            transition={{ duration: 4 + i * 0.3, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>

      {/* PORTAL RING */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: "conic-gradient(from 180deg at 50% 50%, #2563EB, #4F46E5, #0EA5E9, #2563EB)",
          mask: "radial-gradient(transparent 60%, black 61%)",
          opacity: 0.18,
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* ---- LEFT – LOGO ---- */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/" className="flex items-center gap-4 mb-6 group">
              <motion.div
                className="relative w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center bg-ink"
                style={{ boxShadow: "0 6px 24px rgba(15,23,42,0.25)" }}
                animate={{ borderRadius: ["30%", "50%", "30%"], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.span
                  className="text-2xl font-black text-white"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {`</S>`}
                </motion.span>
              </motion.div>

              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl font-black text-ink">SafOne</h3>
                <p className="text-xs text-accent tracking-widest">PORTAL ENGINEER</p>
              </motion.div>
            </Link>

            <p className="text-muted text-sm max-w-xs leading-relaxed">
              Full-Stack Engineer • Monastir, Tunisia
            </p>

            <div className="mt-8 flex gap-4">
              {[
                { Icon: FiMail, href: "mailto:safwenbenmabrouk@gmail.com", label: "Email" },
                { Icon: FiPhone, href: "tel:+21658221658", label: "Phone" },
                { Icon: FiMapPin, href: "https://maps.google.com/?q=Monastir,Tunisia", label: "Location" },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="relative w-12 h-12 rounded-full bg-white border border-line flex items-center justify-center group"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  aria-label={label}
                >
                  <Icon className="text-ink group-hover:text-accent transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ---- CENTER – QUICK LINKS ---- */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg text-ink mb-6">QUICK LINKS</h4>
            <nav className="flex flex-col gap-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Resume", href: "/resume" },
                { label: "Projects", href: "/work" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <motion.div key={link.href} whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href={link.href} className="block text-muted hover:text-ink transition-all duration-300 relative group">
                    <span className="relative z-10">{link.label}</span>
                    <motion.div
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-accent rounded-full opacity-0 group-hover:opacity-100"
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
            <h4 className="font-bold text-lg text-ink mb-6">FOLLOW ME</h4>

            <div className="flex gap-4 mb-10">
              {[
                { Icon: FiGithub, href: "https://github.com/Safwen-bm", label: "GitHub" },
                { Icon: FiLinkedin, href: "https://linkedin.com/in/safwen-ben-mabrouk", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-14 h-14 rounded-full flex items-center justify-center bg-ink group"
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  aria-label={label}
                >
                  <Icon className="text-white text-xl" />
                </motion.a>
              ))}
            </div>

            <p className="text-xs text-muted tracking-widest">
              © {currentYear} SAFWEN BEN MABROUK. ALL RIGHTS RESERVED.
            </p>
          </motion.div>
        </div>

        {/* DIVIDER SHINE */}
        <motion.div
          className="mt-16 h-px relative overflow-hidden"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-line" />
          <motion.div
            className="absolute inset-0 bg-accent"
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