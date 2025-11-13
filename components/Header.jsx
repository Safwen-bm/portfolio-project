// components/Header.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMouse } from "react-use";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const mouse = useMouse(headerRef);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    mouseX.set(mouse.elX || 0);
    mouseY.set(mouse.elY || 0);
  }, [mouse.elX, mouse.elY, mouseX, mouseY]);

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "py-2" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className={`relative mx-auto max-w-[1300px] flex items-center justify-between px-8 py-5 rounded-3xl overflow-hidden transition-all duration-700 ${
            scrolled
              ? "bg-black/90 backdrop-blur-3xl shadow-2xl shadow-purple-500/30 border border-purple-500/40"
              : "bg-black/80 backdrop-blur-2xl border border-purple-500/20"
          }`}
          style={{
            boxShadow: scrolled
              ? "0 30px 60px rgba(0, 0, 0, 0.5), 0 0 80px rgba(140, 60, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
              : "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 60px rgba(140, 60, 255, 0.25)",
          }}
        >
          {/* LIQUID MOUSE ORB */}
          <motion.div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
              background: `
                radial-gradient(600px circle at ${mouse.elX}px ${mouse.elY}px, rgba(140, 60, 255, 0.25), transparent 40%),
                radial-gradient(800px circle at ${mouse.elX * 0.8}px ${mouse.elY * 1.2}px, rgba(100, 200, 255, 0.15), transparent 50%),
                radial-gradient(500px circle at ${mouse.elX * 1.3}px ${mouse.elY * 0.7}px, rgba(255, 100, 200, 0.1), transparent 60%)
              `,
            }}
          />

          {/* FLOATING PARTICLES */}
          <div className="absolute inset-0 -z-20">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                style={{
                  left: `${20 + (i * 7)}%`,
                  top: `${10 + (i * 6)}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* PORTAL RING */}
          <motion.div
            className="absolute inset-0 -z-10 rounded-3xl"
            style={{
              background: `conic-gradient(from ${scrolled ? 0 : 180}deg at 50% 50%, #8B5CF6, #3B82F6, #06B6D4, #8B5CF6)`,
              mask: "radial-gradient(transparent 65%, black 66%)",
              opacity: scrolled ? 0.7 : 0.4,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* LOGO — MORPHING LIQUID */}
          <Link href="/" className="relative z-10 group">
            <motion.div
              className="flex items-center gap-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <motion.div
                className="relative w-14 h-14 rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #1a0033, #0a0a1a)",
                  border: "2px solid rgba(140, 60, 255, 0.6)",
                  boxShadow: "0 0 40px rgba(140, 60, 255, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)",
                }}
                animate={{
                  borderRadius: ["30%", "50%", "30%"],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {`</>`}
                  </span>
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-transparent to-cyan-600/40"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </motion.div>

              <motion.div
                className="hidden lg:block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  SafOne
                </h1>
                <p className="text-xs text-purple-300 tracking-widest">PORTAL ENGINEER</p>
              </motion.div>
            </motion.div>
          </Link>

          {/* NAV — LIQUID LINKS */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden xl:block">
            <Nav />
          </div>

          {/* CTA — HOLOGRAPHIC BUTTON */}
          <div className="hidden xl:block">
            <Link href="/contact">
              <motion.button
                className="relative overflow-hidden rounded-full px-8 py-4 font-bold text-lg tracking-wider bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white shadow-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  ENTER PORTAL
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(140,60,255,0.7)",
                      "0 0 60px rgba(255,100,200,0.9)",
                      "0 0 30px rgba(140,60,255,0.7)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            </Link>
          </div>

          {/* MOBILE */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;