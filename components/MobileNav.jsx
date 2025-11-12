"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Resume", href: "/resume" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-2xl text-white/90" />
      </SheetTrigger>

      <SheetContent className="flex flex-col p-6">
        <VisuallyHidden>
          <h2>Mobile navigation</h2>
        </VisuallyHidden>

        <div className="mt-10 mb-8 text-center">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-semibold">
              SafOne <span className="text-[#7fbfff]">&lt;/&gt;</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col items-center gap-6 mt-6">
          {links.map((link, idx) => (
            <Link
              href={link.href}
              key={idx}
              className={`text-xl capitalize ${
                link.href === pathname ? "text-[#7fbfff]" : "text-white/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
