// components/MobileNav.jsx
"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Resume", href: "/resume" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLinkClick = (href) => {
    setOpen(false);
    if (href !== pathname) router.push(href);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="p-2 rounded-lg hover:bg-subtle transition-colors">
        <HiOutlineMenuAlt4 className="text-2xl text-ink" />
      </SheetTrigger>

      <SheetContent side="top" className="h-screen w-full p-0 bg-white border-0">
        <VisuallyHidden>
          <SheetTitle>Navigation</SheetTitle>
        </VisuallyHidden>

        <div className="h-full flex flex-col items-center justify-center gap-10">
          <nav className="flex flex-col items-center gap-6">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <SheetClose asChild>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
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
            <Link href="/contact" onClick={() => handleLinkClick("/contact")}>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="relative overflow-hidden rounded-full px-8 py-4 font-semibold text-white bg-gradient-to-r from-accent to-indigo-600 shadow-[0_8px_24px_rgba(37,99,235,0.35)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Talk
                  <FiArrowRight className="text-base" />
                </span>
              </motion.button>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;