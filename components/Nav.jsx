"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const Nav = ({ centered = false }) => {
  const pathname = usePathname();

  return (
    <nav
      className={`flex gap-6 items-center ${centered ? "justify-center" : ""}`}
      aria-label="Main navigation"
    >
      {links.map((link, i) => {
        const active = link.path === pathname;
        return (
          <Link
            key={i}
            href={link.path}
            className={`relative text-sm uppercase tracking-widest px-2 py-1 transition-all ${
              active ? "text-white" : "text-white/70 hover:text-white"
            }`}
          >
            {link.name}
            <span
              aria-hidden
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: -8,
                height: 3,
                borderRadius: 999,
                background: active
                  ? "linear-gradient(90deg, rgba(140,200,255,0.95), rgba(50,120,255,0.9))"
                  : "transparent",
                boxShadow: active
                  ? "0 6px 20px rgba(60,140,255,0.28), 0 0 12px rgba(60,140,255,0.22)"
                  : "none",
                transition: "all 220ms ease",
              }}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
