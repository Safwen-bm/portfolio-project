// components/layout/Nav.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/site";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1" aria-label="Main">
      {NAV_LINKS.map((link) => {
        const isActive = link.href === pathname;
        return (
          <Link key={link.href} href={link.href} className="relative px-4 py-2">
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
                className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
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
