// components/Nav.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-1 items-center">
      {links.map((link) => {
        const isActive = link.path === pathname;
        return (
          <Link key={link.path} href={link.path} className="relative px-4 py-2">
            <span
              className={`relative z-10 text-sm font-medium transition-colors ${
                isActive ? "text-accent" : "text-muted hover:text-ink"
              }`}
            >
              {link.name}
            </span>
            {isActive && (
              <motion.div
                layoutId="activeNavDot"
                className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1 h-1 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;