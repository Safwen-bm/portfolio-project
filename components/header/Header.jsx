// components/layout/Header.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ThemeSwitcher from "./ThemeSwitcher";
import ModeToggle from "./ModeToggle";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // mouse position goes straight into CSS variables: no React re-render on every mouse move
  const handlePointerMove = (e) => {
    const el = headerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-50">
      <motion.div
        ref={headerRef}
        onPointerMove={handlePointerMove}
        className={`pointer-events-auto relative mx-auto overflow-hidden transition-all duration-500 ease-out ${
          scrolled
            ? "mt-4 max-w-[1100px] rounded-full border border-line bg-primary/85 px-6 py-3 shadow-[0_10px_40px_-8px_rgb(var(--c-accent)/0.25)] backdrop-blur-2xl"
            : "mt-0 max-w-full rounded-none border-b border-line bg-primary/90 px-4 py-4 backdrop-blur-xl sm:px-8"
        }`}
      >
        {/* LIQUID MOUSE GLOW — follows the theme */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgb(var(--c-accent) / 0.12), transparent 40%),
              radial-gradient(700px circle at calc(var(--mx, 50%) * 0.8) calc(var(--my, 50%) * 1.2), rgb(var(--c-glow) / 0.1), transparent 50%)
            `,
          }}
        />

        {/* PORTAL RING — theme colors sweep */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-[inherit]"
          style={{
            background: `conic-gradient(from ${scrolled ? 0 : 180}deg at 50% 50%, rgb(var(--c-accent)), rgb(var(--c-glow)), rgb(var(--c-saffron)), rgb(var(--c-accent)))`,
            WebkitMask: "radial-gradient(transparent 68%, black 69%)",
            mask: "radial-gradient(transparent 68%, black 69%)",
            opacity: scrolled ? 0.35 : 0.16,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* ZELLIGE STARS — same pattern as the footer, fading out toward both ends */}
        <div className="pointer-events-none absolute inset-0 -z-20 [-webkit-mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)] [mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]">
          <div
            className="zellige-mask absolute inset-0"
            style={{ "--zellige-color": "var(--c-accent)", "--zellige-alpha": 0.14 }}
          />
        </div>

        {/* FLOATING PARTICLES */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-accent"
              style={{ left: `${8 + i * 8.5}%`, top: `${10 + (i % 3) * 25}%`, opacity: 0.5 }}
              animate={{ y: [0, -14, 0], opacity: [0.15, 0.6, 0.15], scale: [1, 1.4, 1] }}
              transition={{ duration: 3 + i * 0.25, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>

        <div className="relative z-10 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="group relative z-10" aria-label="Home">
            <motion.div
              className="flex items-center gap-4"
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <motion.div
                className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center bg-ink"
                style={{ boxShadow: "0 6px 20px rgb(var(--c-ink) / 0.25)" }}
                animate={{ borderRadius: ["30%", "50%", "30%"], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.span
                  className="text-xl font-black text-primary"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {`<S>`}
                </motion.span>
              </motion.div>

              <div className="hidden lg:block">
                <span className="block text-xl font-black leading-none text-ink">Safwen Ben Mabrouk</span>
                <span className="mt-1 block text-xs font-medium tracking-widest text-accent">
                  PORTAL ENGINEER
                </span>
              </div>
            </motion.div>
          </Link>

          <div className="hidden xl:block">
            <Nav />
          </div>

          {/* RIGHT SIDE: theme button + CTA + mobile menu */}
          <div className="flex items-center gap-3">
            <ModeToggle />
            <ThemeSwitcher />

            <div className="hidden xl:block">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent to-accent-hover px-6 py-3 text-sm font-semibold text-onaccent shadow-lift transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Talk
                  <FiArrowRight className="text-base" />
                </span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/25 to-white/0 transition-transform duration-700 group-hover:translate-x-full" />
              </Link>
            </div>

            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;