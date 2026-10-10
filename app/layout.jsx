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
  description: "Ingénieur en Génie Logiciel | Monastir, Tunisie",
  icons: { icon: "/favicon.png" },
};

export const viewport = {
  themeColor: "#0B1330",
};

// applies the saved theme BEFORE the first paint (no color flash)
const themeInit = `try{var t=localStorage.getItem("theme");if(t){document.documentElement.setAttribute("data-theme",t)}}catch(e){}`;

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
