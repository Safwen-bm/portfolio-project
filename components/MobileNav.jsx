// components/MobileNav.jsx
"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "RESUME", href: "/resume" },
  { name: "WORK", href: "/work" },
  { name: "CONTACT", href: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="p-3">
        <motion.div
          whileHover={{ rotate: 180, scale: 1.3 }}
          whileTap={{ scale: 0.8 }}
          className="relative"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center">
            <span className="text-white text-xl">≡</span>
          </div>
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/50 to-cyan-600/50 blur-xl"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </SheetTrigger>

      <SheetContent
        side="top"
        className="h-screen w-full p-0 bg-black/95 backdrop-blur-3xl border-0"
      >
        <VisuallyHidden>
          <SheetTitle>Cosmic Navigation</SheetTitle>
        </VisuallyHidden>

        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          className="relative h-full flex flex-col items-center justify-center gap-12"
        >
          {/* COSMIC ORBS */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-pink-600/20 rounded-full blur-3xl"
              animate={{ x: [-50, 50, -50], y: [-50, 50, -50] }}
              transition={{ duration: 15, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-cyan-600/30 to-blue-600/20 rounded-full blur-3xl"
              animate={{ x: [50, -50, 50], y: [50, -50, 50] }}
              transition={{ duration: 18, repeat: Infinity }}
            />
          </div>

          {/* LOGO */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              SafOne
            </h1>
          </motion.div>

          {/* LINKS */}
          <nav className="space-y-6">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                <Link
                  href={link.href}
                  className={`block text-4xl font-bold transition-all ${
                    link.href === pathname
                      ? "bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-12 py-6 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold text-xl shadow-2xl"
              >
                ENTER THE PORTAL
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;