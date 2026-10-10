"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { syncBarColor } from "@/lib/themes";

// Light <-> dark mode. The icon is switched with CSS (dark: variant), so there is no flash.
export default function ModeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-mode") === "dark" ? "light" : "dark";
    root.setAttribute("data-mode", next);
    try {
      localStorage.setItem("mode", next);
    } catch {}
    syncBarColor();
    window.dispatchEvent(new Event("themechange"));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light / dark mode"
      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-subtle text-ink transition-all duration-200 hover:scale-105 hover:border-accent hover:text-accent"
    >
      <FiMoon size={17} className="dark:hidden" />
      <FiSun size={17} className="hidden dark:block" />
    </button>
  );
}
