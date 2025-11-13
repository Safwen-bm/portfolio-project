// components/Nav.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { name: "HOME", path: "/" },
  { name: "SERVICES", path: "/services" },
  { name: "RESUME", path: "/resume" },
  { name: "WORK", path: "/work" },
  { name: "CONTACT", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8 items-center">
      {links.map((link) => {
        const isActive = link.path === pathname;

        return (
          <motion.div
            key={link.path}
            className="relative"
            whileHover={{ y: -6, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link
              href={link.path}
              className="relative block px-5 py-3 text-sm font-bold uppercase tracking-widest"
            >
              <motion.span
                className={`relative z-10 bg-gradient-to-r ${
                  isActive
                    ? "from-cyan-400 via-purple-500 to-pink-500"
                    : "from-white/70 to-white/50"
                } bg-clip-text text-transparent transition-all duration-500`}
                animate={{
                  backgroundPosition: isActive ? ["0%", "100%"] : "0%",
                }}
                style={{ backgroundSize: "200%" }}
              >
                {link.name}
              </motion.span>

              {/* LIQUID ACTIVE BLOB */}
              {isActive && (
                <motion.div
                  layoutId="activeBlob"
                  className="absolute inset-0 -z-10 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(140,60,255,0.6), rgba(255,100,200,0.3), transparent)",
                    filter: "blur(20px)",
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              )}

              {/* HOVER LIQUID */}
              <motion.div
                className="absolute inset-0 -z-20 rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(circle at center, rgba(140,60,255,0.4), transparent 70%)",
                  filter: "blur(16px)",
                }}
              />
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
};

export default Nav;