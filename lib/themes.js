// Color families. Each one has a light AND a dark mode (see tailwind.config.mjs).
// `swatch` = the two colors shown in the theme picker.
export const THEMES = [
  { id: "light", label: "Light", swatch: ["#2563EB", "#E2E8F0"] },
  { id: "ivory", label: "Ivory", swatch: ["#993B43", "#FAF7F0"] },
  { id: "bab", label: "Bab", swatch: ["#2447D6", "#F4B63F"] },
  { id: "violet", label: "Violet", swatch: ["#7C3AED", "#F59E0B"] },
  { id: "emerald", label: "Emerald", swatch: ["#059669", "#FACC15"] },
  { id: "ember", label: "Ember", swatch: ["#D9480F", "#FFD166"] },
  { id: "cyber", label: "Cyber", swatch: ["#0891B2", "#F472B6"] },
];

export const DEFAULT_THEME = "bab";

// colors the mobile browser bar like the page background of the active theme + mode
export const syncBarColor = () => {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--c-primary").trim();
  const parts = raw.split(/\s+/);
  if (parts.length !== 3) return;
  let meta = document.querySelector("meta[name=theme-color]");
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", `rgb(${parts.join(",")})`);
};
