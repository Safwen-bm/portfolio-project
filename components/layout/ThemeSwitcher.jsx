"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiDroplet, FiX } from "react-icons/fi";
import { THEMES, DEFAULT_THEME, syncBarColor } from "@/lib/themes";

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const [pos, setPos] = useState({ top: 0, right: 0 });
  const btnRef = useRef(null);
  const popRef = useRef(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    const id = current && THEMES.some((t) => t.id === current) ? current : DEFAULT_THEME;
    setTheme(id);
    syncBarColor();
  }, []);

  // close on outside click / Escape / scroll / resize
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const onDown = (e) => {
      if (btnRef.current?.contains(e.target) || popRef.current?.contains(e.target)) return;
      close();
    };
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", close, { passive: true });
    window.addEventListener("resize", close);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", close);
      window.removeEventListener("resize", close);
    };
  }, [open]);

  const toggle = () => {
    if (!open && btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      setPos({ top: r.bottom + 10, right: Math.max(8, window.innerWidth - r.right) });
    }
    setOpen((v) => !v);
  };

  const apply = (id) => {
    setTheme(id);
    document.documentElement.setAttribute("data-theme", id);
    syncBarColor();
    try {
      localStorage.setItem("theme", id);
    } catch {}
    window.dispatchEvent(new Event("themechange"));
  };

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        aria-label="Change theme"
        aria-expanded={open}
        onClick={toggle}
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-subtle text-ink transition-all duration-200 hover:scale-105 hover:border-accent hover:text-accent"
      >
        {open ? <FiX size={17} /> : <FiDroplet size={17} />}
      </button>

      {open &&
        createPortal(
          <div
            ref={popRef}
            style={{ top: pos.top, right: pos.right }}
            className="fixed z-[70] flex items-center gap-2 rounded-full border border-line bg-surface/95 p-2 shadow-soft backdrop-blur-md"
          >
            {THEMES.map((t) => (
              <button
                key={t.id}
                type="button"
                title={t.label}
                aria-label={t.label}
                aria-pressed={theme === t.id}
                onClick={() => apply(t.id)}
                className={`h-8 w-8 rounded-full ring-2 transition-all duration-200 ${
                  theme === t.id ? "scale-110 ring-ink" : "ring-transparent hover:ring-ink/40"
                }`}
                style={{
                  background: `linear-gradient(135deg, ${t.swatch[0]} 50%, ${t.swatch[1]} 50%)`,
                }}
              />
            ))}
          </div>,
          document.body
        )}
    </>
  );
}
