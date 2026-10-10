// components/layout/MobileNav.jsx
"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/site";

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="rounded-lg p-2 transition-colors hover:bg-subtle"
      >
        <HiOutlineMenuAlt4 className="text-2xl text-ink" />
      </SheetTrigger>

      <SheetContent side="top" className="h-[100dvh] w-full border-0 bg-primary p-0">
        <VisuallyHidden>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Site navigation menu</SheetDescription>
        </VisuallyHidden>

        {/* soft themed glow so the menu is not a flat sheet */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgb(var(--c-accent)/0.12),transparent_60%)]" />

        <div className="relative flex h-full flex-col items-center justify-center gap-10">
          <nav className="flex flex-col items-center gap-6" aria-label="Mobile">
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <SheetClose asChild>
                  <Link
                    href={link.href}
                    className={`text-3xl font-bold transition-colors ${
                      link.href === pathname ? "text-accent" : "text-ink/70 hover:text-ink"
                    }`}
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              </motion.div>
            ))}
          </nav>

          <SheetClose asChild>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent to-accent-hover px-8 py-4 font-semibold text-white shadow-lift transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              Let's Talk
              <FiArrowRight className="text-base" />
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
