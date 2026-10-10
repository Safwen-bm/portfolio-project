// components/layout/Footer.jsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";
import SectionBackdrop from "@/components/ornaments/SectionBackdrop";
import { SITE } from "@/lib/site";

const contactIcons = [
  { Icon: FiMail, href: `mailto:${SITE.email}`, label: "Email" },
  { Icon: FiPhone, href: SITE.phoneHref, label: "Phone" },
  { Icon: FiMapPin, href: SITE.mapsHref, label: "Location" },
];

const socialIcons = [
  { Icon: FiGithub, href: SITE.github, label: "GitHub" },
  { Icon: FiLinkedin, href: SITE.linkedin, label: "LinkedIn" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Resume", href: "/resume" },
  { label: "Projects", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  // mouse position goes straight into CSS variables: no React re-render on every mouse move
  const handlePointerMove = (e) => {
    const el = footerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <footer
      ref={footerRef}
      onPointerMove={handlePointerMove}
      className="relative isolate overflow-hidden border-t border-line bg-primary py-20 text-ink"
    >
      <SectionBackdrop />

      {/* LIQUID MOUSE GLOW */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(700px circle at var(--mx, 50%) var(--my, 50%), rgb(var(--c-glow) / 0.18), transparent 40%),
            radial-gradient(900px circle at calc(var(--mx, 50%) * 0.7) calc(var(--my, 50%) * 1.3), rgb(var(--c-accent) / 0.12), transparent 50%)
          `,
        }}
      />

      {/* FLOATING PARTICLES */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-accent"
            style={{ left: `${15 + i * 6}%`, bottom: `${10 + i * 7}%`, opacity: 0.6 }}
            animate={{ y: [0, 40, 0], opacity: [0.3, 0.9, 0.3], scale: [1, 1.8, 1] }}
            transition={{ duration: 4 + i * 0.3, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>

      {/* PORTAL RING */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, rgb(var(--c-accent)), rgb(var(--c-glow)), rgb(var(--c-saffron)), rgb(var(--c-accent)))",
          WebkitMask: "radial-gradient(transparent 60%, black 61%)",
          mask: "radial-gradient(transparent 60%, black 61%)",
          opacity: 0.14,
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 text-center md:grid-cols-3 md:text-left">
          {/* ---- LEFT – LOGO ---- */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/" className="group mb-6 flex items-center gap-4" aria-label="Home">
              <motion.div
                className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-ink ring-1 ring-glow/40"
                style={{ boxShadow: "0 6px 24px rgb(var(--c-ink) / 0.25)" }}
                animate={{ borderRadius: ["30%", "50%", "30%"], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.span
                  className="text-2xl font-black text-primary"
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
                <span className="block text-2xl font-black text-ink">SafOne</span>
                <span className="block text-xs tracking-widest text-accent">PORTAL ENGINEER</span>
              </motion.div>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Full-Stack Engineer • Monastir, Tunisia
            </p>

            <div className="mt-8 flex gap-4">
              {contactIcons.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface transition-colors hover:border-accent hover:bg-accent"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  aria-label={label}
                >
                  <Icon className="text-ink transition-colors group-hover:text-onaccent" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ---- CENTER – QUICK LINKS ---- */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="mb-6 text-lg font-bold text-ink">QUICK LINKS</h4>
            <nav className="flex flex-col gap-3 text-sm" aria-label="Footer">
              {quickLinks.map((link) => (
                <motion.div key={link.href} whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href={link.href}
                    className="group relative block text-muted transition-all duration-300 hover:text-ink"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-x-100" />
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
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="mb-6 text-lg font-bold text-ink">FOLLOW ME</h4>

            <div className="mb-10 flex gap-4">
              {socialIcons.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-accent shadow-lift"
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  aria-label={label}
                >
                  <Icon className="text-xl text-onaccent" />
                </motion.a>
              ))}
            </div>

            <p className="text-xs tracking-widest text-muted">
              © {currentYear} SAFWEN BEN MABROUK. ALL RIGHTS RESERVED.
            </p>
          </motion.div>
        </div>

        {/* DIVIDER SHINE */}
        <motion.div
          className="relative mt-16 h-px origin-left overflow-hidden"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
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
