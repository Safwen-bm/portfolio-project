"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiEye } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function ViewCvButton({ className = "", variant = "outline" }) {
  const pathname = usePathname();

  const handleClick = (e) => {
    if (pathname !== "/") return; // other pages: normal navigation to /#cv
    const target = document.getElementById("cv");
    if (!target) return;
    e.preventDefault();
    if (window.__lenis) {
      window.__lenis.scrollTo(target, { offset: -80 });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Button asChild variant={variant} className={`w-full sm:w-auto ${className}`}>
      <Link href="/#cv" onClick={handleClick}>
        <FiEye />
        View CV
      </Link>
    </Button>
  );
}
