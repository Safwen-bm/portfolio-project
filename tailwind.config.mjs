// tailwind.config.mjs
import animate from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";

// Every theme has a LIGHT and a DARK mode (switched by data-mode="light|dark" on <html>).
// Tokens are semantic, so every component flips automatically:
//   primary / subtle / surface = page, alternate section, card backgrounds
//   ink / muted / line         = text, secondary text, borders
//   accent*, glow, saffron     = brand colors   onaccent = text on accent fills
//   deep                       = always-dark color (text on saffron/glow fills, photo overlays)
const themes = {
  light: {
    light: {
      primary: "255 255 255", subtle: "244 247 251", surface: "255 255 255",
      ink: "15 23 42", muted: "100 116 139", line: "226 232 240",
      accent: "37 99 235", "accent-hover": "29 78 216", "accent-light": "239 246 255",
      onaccent: "255 255 255", glow: "59 130 246", saffron: "217 119 6",
      terracotta: "225 75 80", deep: "17 24 39",
    },
    dark: {
      primary: "11 17 32", subtle: "15 23 42", surface: "22 32 53",
      ink: "241 245 249", muted: "148 163 184", line: "36 48 74",
      accent: "59 130 246", "accent-hover": "96 165 250", "accent-light": "23 37 84",
      onaccent: "255 255 255", glow: "96 165 250", saffron: "251 191 36",
      terracotta: "248 113 113", deep: "5 9 20",
    },
  },
  ivory: {
    light: {
      primary: "250 247 240", subtle: "241 234 223", surface: "255 253 249",
      ink: "43 35 34", muted: "126 111 105", line: "225 214 199",
      accent: "153 59 67", "accent-hover": "125 43 52", "accent-light": "247 230 228",
      onaccent: "255 255 255", glow: "190 100 95", saffron: "180 120 40",
      terracotta: "184 78 58", deep: "43 35 34",
    },
    dark: {
      primary: "26 20 20", subtle: "34 27 26", surface: "44 35 34",
      ink: "247 240 230", muted: "176 160 150", line: "66 52 49",
      accent: "201 96 106", "accent-hover": "220 120 128", "accent-light": "61 30 34",
      onaccent: "255 255 255", glow: "226 150 143", saffron: "224 170 90",
      terracotta: "224 110 85", deep: "15 11 11",
    },
  },
  bab: {
    light: {
      primary: "251 248 241", subtle: "243 235 217", surface: "255 253 247",
      ink: "11 19 48", muted: "91 100 128", line: "228 220 200",
      accent: "36 71 214", "accent-hover": "27 55 174", "accent-light": "232 237 255",
      onaccent: "255 255 255", glow: "80 108 240", saffron: "214 140 20",
      terracotta: "226 85 61", deep: "11 19 48",
    },
    dark: {
      primary: "9 14 36", subtle: "13 21 52", surface: "20 31 72",
      ink: "244 241 232", muted: "160 170 200", line: "38 52 100",
      accent: "92 120 255", "accent-hover": "124 147 255", "accent-light": "24 36 90",
      onaccent: "255 255 255", glow: "124 147 255", saffron: "244 182 63",
      terracotta: "240 110 85", deep: "6 10 26",
    },
  },
  violet: {
    light: {
      primary: "250 247 255", subtle: "241 234 251", surface: "255 253 255",
      ink: "18 10 36", muted: "100 90 128", line: "226 216 244",
      accent: "124 58 237", "accent-hover": "109 40 217", "accent-light": "237 233 254",
      onaccent: "255 255 255", glow: "147 80 240", saffron: "217 119 6",
      terracotta: "225 29 72", deep: "18 10 36",
    },
    dark: {
      primary: "14 8 28", subtle: "22 13 44", surface: "33 20 64",
      ink: "245 240 255", muted: "170 158 200", line: "52 36 92",
      accent: "150 90 250", "accent-hover": "175 125 255", "accent-light": "40 24 80",
      onaccent: "255 255 255", glow: "192 132 252", saffron: "251 175 40",
      terracotta: "251 90 120", deep: "8 4 18",
    },
  },
  emerald: {
    light: {
      primary: "244 251 247", subtle: "230 244 236", surface: "252 255 253",
      ink: "4 21 15", muted: "84 110 100", line: "208 230 218",
      accent: "5 150 105", "accent-hover": "4 120 87", "accent-light": "209 250 229",
      onaccent: "255 255 255", glow: "16 170 120", saffron: "190 140 10",
      terracotta: "220 60 60", deep: "4 21 15",
    },
    dark: {
      primary: "4 16 12", subtle: "7 28 21", surface: "12 44 33",
      ink: "236 253 245", muted: "140 175 160", line: "22 66 50",
      accent: "16 185 129", "accent-hover": "52 211 153", "accent-light": "6 50 36",
      onaccent: "2 10 7", glow: "52 211 153", saffron: "250 204 21",
      terracotta: "248 113 113", deep: "2 10 7",
    },
  },
  ember: {
    light: {
      primary: "255 248 242", subtle: "251 233 218", surface: "255 252 249",
      ink: "26 13 8", muted: "122 98 88", line: "240 214 196",
      accent: "217 72 15", "accent-hover": "194 65 12", "accent-light": "255 237 213",
      onaccent: "255 255 255", glow: "235 110 50", saffron: "200 130 10",
      terracotta: "190 24 93", deep: "26 13 8",
    },
    dark: {
      primary: "20 10 6", subtle: "32 16 10", surface: "46 24 15",
      ink: "255 244 235", muted: "190 160 145", line: "72 42 28",
      accent: "255 122 69", "accent-hover": "255 150 105", "accent-light": "64 30 16",
      onaccent: "12 6 3", glow: "255 138 92", saffron: "255 209 102",
      terracotta: "244 90 150", deep: "12 6 3",
    },
  },
  cyber: {
    light: {
      primary: "243 251 253", subtle: "221 241 246", surface: "250 254 255",
      ink: "6 20 28", muted: "84 110 122", line: "196 228 237",
      accent: "8 145 178", "accent-hover": "14 116 144", "accent-light": "207 250 254",
      onaccent: "255 255 255", glow: "20 170 200", saffron: "219 70 140",
      terracotta: "220 70 90", deep: "6 20 28",
    },
    dark: {
      primary: "4 14 20", subtle: "8 26 36", surface: "12 40 54",
      ink: "232 250 254", muted: "132 170 184", line: "20 64 82",
      accent: "34 211 238", "accent-hover": "103 232 249", "accent-light": "8 52 66",
      onaccent: "3 9 13", glow: "34 211 238", saffron: "244 114 182",
      terracotta: "251 113 133", deep: "3 9 13",
    },
  },
};

const c = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector", '[data-mode="dark"]'],
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
        surface: c("surface"),
        onaccent: c("onaccent"),
        deep: c("deep"),
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

      const rules = {
        ":root": { ...toVars(themes.bab.light), colorScheme: "light" },
        ':root[data-mode="dark"]': { ...toVars(themes.bab.dark), colorScheme: "dark" },
      };
      for (const [name, modes] of Object.entries(themes)) {
        rules[`:root[data-theme="${name}"]`] = { ...toVars(modes.light), colorScheme: "light" };
        rules[`:root[data-theme="${name}"][data-mode="dark"]`] = {
          ...toVars(modes.dark),
          colorScheme: "dark",
        };
      }
      addBase(rules);
    }),
  ],
};
