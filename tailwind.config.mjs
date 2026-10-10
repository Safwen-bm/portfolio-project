// tailwind.config.mjs
import animate from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";

// Every theme uses the same 12 tokens. "ink" and "night" are ALWAYS the dark pair
// (used by the dark bands: hero, about, roadmap, cv, footer), "primary" / "subtle" are the light pair.
const themes = {
  light: {
    primary: "255 255 255",
    ink: "24 32 48",
    night: "36 48 74",
    muted: "100 116 139",
    subtle: "248 250 252",
    line: "226 232 240",
    accent: "37 99 235",
    "accent-hover": "29 78 216",
    "accent-light": "239 246 255",
    glow: "96 165 250",
    saffron: "217 119 6",
    terracotta: "225 75 80",
  },
  ivory: {
    primary: "250 247 240",
    ink: "43 35 34",
    night: "62 46 45",
    muted: "126 111 105",
    subtle: "241 234 223",
    line: "225 214 199",
    accent: "153 59 67",
    "accent-hover": "125 43 52",
    "accent-light": "247 230 228",
    glow: "211 139 132",
    saffron: "194 139 65",
    terracotta: "184 78 58",
  },
  bab: {
    primary: "251 248 241", ink: "11 19 48", night: "17 29 70",
    muted: "91 100 128", subtle: "243 235 217", line: "228 220 200",
    accent: "36 71 214", "accent-hover": "27 55 174", "accent-light": "232 237 255",
    glow: "124 147 255", saffron: "244 182 63", terracotta: "226 85 61",
  },
  violet: {
    primary: "250 247 255", ink: "18 10 36", night: "32 18 64",
    muted: "100 90 128", subtle: "241 234 251", line: "226 216 244",
    accent: "124 58 237", "accent-hover": "109 40 217", "accent-light": "237 233 254",
    glow: "192 132 252", saffron: "245 158 11", terracotta: "225 29 72",
  },
  emerald: {
    primary: "244 251 247", ink: "4 21 15", night: "8 40 30",
    muted: "84 110 100", subtle: "230 244 236", line: "208 230 218",
    accent: "5 150 105", "accent-hover": "4 120 87", "accent-light": "209 250 229",
    glow: "52 211 153", saffron: "250 204 21", terracotta: "239 68 68",
  },
  ember: {
    primary: "255 248 242", ink: "26 13 8", night: "52 24 14",
    muted: "122 98 88", subtle: "251 233 218", line: "240 214 196",
    accent: "217 72 15", "accent-hover": "194 65 12", "accent-light": "255 237 213",
    glow: "255 138 92", saffron: "255 209 102", terracotta: "190 24 93",
  },
  cyber: {
    primary: "243 251 253", ink: "6 20 28", night: "10 38 52",
    muted: "84 110 122", subtle: "221 241 246", line: "196 228 237",
    accent: "8 145 178", "accent-hover": "14 116 144", "accent-light": "207 250 254",
    glow: "34 211 238", saffron: "244 114 182", terracotta: "251 113 133",
  },
};

const c = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        primary: ["var(--font-figtree)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-jetbrainsMono)", "ui-monospace", "monospace"],
      },
      colors: {
        primary: c("primary"),
        ink: c("ink"),
        night: c("night"),
        muted: c("muted"),
        subtle: c("subtle"),
        line: c("line"),
        glow: c("glow"),
        saffron: c("saffron"),
        terracotta: c("terracotta"),
        accent: {
          DEFAULT: c("accent"),
          hover: c("accent-hover"),
          light: c("accent-light"),
        },
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgb(var(--c-ink) / 0.22)",
        lift: "0 24px 50px -18px rgb(var(--c-accent) / 0.45)",
        glow: "0 0 40px -6px rgb(var(--c-glow) / 0.55)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "page-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scan: {
          "0%": { transform: "translateY(-110%)" },
          "100%": { transform: "translateY(450%)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-14px) rotate(4deg)" },
          "75%": { transform: "translateY(10px) rotate(-4deg)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        "spin-slower": "spin-slow 70s linear infinite",
        "fade-up": "fade-up 0.7s ease-out backwards",
        "page-in": "page-in 0.35s ease-out",
        scan: "scan 4.5s linear infinite",
        drift: "drift 8s ease-in-out infinite",
        bob: "bob 5s ease-in-out infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    animate,
    plugin(({ addBase }) => {
      const toVars = (t) =>
        Object.fromEntries(Object.entries(t).map(([k, v]) => [`--c-${k}`, v]));

      addBase({
        ":root": toVars(themes.bab),
        ...Object.fromEntries(
          Object.entries(themes).map(([name, t]) => [`[data-theme="${name}"]`, toVars(t)])
        ),
      });
    }),
  ],
};
