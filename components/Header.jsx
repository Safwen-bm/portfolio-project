"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
import { useMouse } from "react-use";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const mouse = useMouse(headerRef);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <motion.div
        ref={headerRef}
        className={`mx-auto pointer-events-auto relative overflow-hidden transition-all duration-500 ease-out ${
          scrolled
            ? "max-w-[1100px] mt-4 rounded-full border border-line bg-white/85 backdrop-blur-2xl shadow-[0_10px_40px_rgba(37,99,235,0.14)] px-6 py-3"
            : "max-w-full mt-0 rounded-none border-b border-line bg-white/90 backdrop-blur-xl px-4 sm:px-8 py-4"
        }`}
      >
        {/* LIQUID MOUSE GLOW — one color family */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background: `
              radial-gradient(500px circle at ${mouse.elX}px ${mouse.elY}px, rgba(37,99,235,0.10), transparent 40%),
              radial-gradient(700px circle at ${mouse.elX * 0.8}px ${mouse.elY * 1.2}px, rgba(79,70,229,0.07), transparent 50%)
            `,
          }}
        />

        {/* PORTAL RING — monochrome blue sweep */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-[inherit]"
          style={{
            background: `conic-gradient(from ${scrolled ? 0 : 180}deg at 50% 50%, #2563EB, #4F46E5, #0EA5E9, #2563EB)`,
            mask: "radial-gradient(transparent 68%, black 69%)",
            opacity: scrolled ? 0.35 : 0.16,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* FLOATING PARTICLES */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-accent"
              style={{ left: `${8 + i * 8.5}%`, top: `${10 + (i % 3) * 25}%`, opacity: 0.5 }}
              animate={{ y: [0, -14, 0], opacity: [0.15, 0.6, 0.15], scale: [1, 1.4, 1] }}
              transition={{ duration: 3 + i * 0.25, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>

        <div className="flex items-center justify-between relative z-10">
          {/* LOGO — solid, no gradient */}
          <Link href="/" className="relative z-10 group">
            <motion.div className="flex items-center gap-4" whileHover={{ scale: 1.06 }} transition={{ type: "spring", stiffness: 500 }}>
              <motion.div
                className="relative w-12 h-12 flex items-center justify-center flex-shrink-0 bg-ink"
                style={{ boxShadow: "0 6px 20px rgba(15,23,42,0.25)" }}
                animate={{ borderRadius: ["30%", "50%", "30%"], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.span
                  className="text-xl font-black text-white"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {`</>`}
                </motion.span>
              </motion.div>

              <div className="hidden lg:block">
                <h1 className="text-xl font-black text-ink leading-none">Safwen Ben Mabrouk</h1>
                <p className="text-xs text-accent font-medium tracking-widest mt-1">PORTAL ENGINEER</p>
              </div>
            </motion.div>
          </Link>

          <div className="hidden xl:block">
            <Nav />
          </div>

          <div className="hidden xl:block">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden rounded-full px-7 py-3 font-bold text-sm tracking-wide text-white bg-accent hover:bg-accent-hover transition-colors"
              >
                <span className="relative z-10 flex items-center gap-2">
                  ENTER PORTAL
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.7 }}
                />
              </motion.button>
            </Link>
          </div>

          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;