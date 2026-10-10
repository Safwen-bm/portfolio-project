// app/layout.jsx
import { JetBrains_Mono, Fraunces, Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrainsMono",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata = {
  title: "Safwen Ben Mabrouk — Full-Stack Engineer",
  description: "Full-Stack Software Engineer from Tunisia, building modern web applications with Next.js, React, NestJS, and TypeScript. Explore my projects, skills, and experience.",
  icons: { icon: "/favicon.png" },
};

export const viewport = {
  themeColor: "#0B1330",
};

// applies the saved theme + mode BEFORE the first paint (no color flash).
// First visit: the mode follows the visitor's system setting (light / dark).
const themeInit = `try{var d=document.documentElement,t=localStorage.getItem("theme"),m=localStorage.getItem("mode");if(t){d.setAttribute("data-theme",t)}if(m!=="light"&&m!=="dark"){m=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}d.setAttribute("data-mode",m)}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body
        className={`${jetbrainsMono.variable} ${figtree.variable} ${fraunces.variable} bg-primary text-ink antialiased`}
      >
        <Toaster position="top-center" richColors />
        <SmoothScroll />
        <Header />
        <div id="page-container">
          <PageTransition>
            <main className="min-h-screen">{children}</main>
          </PageTransition>
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
