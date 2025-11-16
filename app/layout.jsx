// app/layout.jsx
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";
import ClientWrapper from "./ClientWrapper";
import { Toaster } from "sonner";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Safwen Ben Mabrouk — Full-Stack Engineer",
  description: "Ingénieur en Génie Logiciel | Monastir, Tunisie",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head />
      <body className={`${jetbrainsMono.variable} bg-[#03060a] text-white antialiased`}>
        <Toaster position="top-center" richColors />

        <ClientWrapper>
          <Header />
          <StairTransition />

          <div id="page-container">
            <PageTransition>
              <main className="min-h-screen">
                {children}
              </main>
            </PageTransition>
          </div>

          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}