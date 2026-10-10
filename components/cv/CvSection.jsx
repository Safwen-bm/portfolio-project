// components/cv/CvSection.jsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiExternalLink, FiFileText, FiMousePointer } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";
import SectionBackdrop from "@/components/ornaments/SectionBackdrop";
import { Button } from "@/components/ui/button";

const CVS = {
  en: { label: "English CV", file: "/cv/Safwen-Ben-Mabrouk-CV.pdf" },
  fr: { label: "CV Français", file: "/cv/Safwen-Ben-Mabrouk-CV-FR.pdf" },
  it: { label: "CV Italiano", file: "/cv/Safwen-Ben-Mabrouk-CV-IT.pdf" },
};

const CvSection = () => {
  const [lang, setLang] = useState("en"); // English by default
  const [loaded, setLoaded] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [canInline, setCanInline] = useState(true);

  // Phones/tablets (Android Chrome, iOS Safari) can't scroll a PDF inside an iframe -> open button instead
  useEffect(() => {
    const noPdfViewer = typeof navigator !== "undefined" && navigator.pdfViewerEnabled === false;
    const touchOnly = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (noPdfViewer || touchOnly) setCanInline(false);
  }, []);

  const cv = CVS[lang];
  const fileName = cv.file.split("/").pop();
  const src = `${cv.file}#toolbar=0&navpanes=0&view=FitH`;

  const switchLang = (next) => {
    if (next === lang) return;
    setLoaded(false);
    setInteractive(false);
    setLang(next);
  };

  return (
    <section
      id="cv"
      className="relative isolate scroll-mt-24 overflow-hidden bg-ink py-20 md:py-28"
    >
      <SectionBackdrop />

      <div className="container relative mx-auto px-4">
        <SectionHeading index="07" kicker="Live preview" title="My CV" tone="dark" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-ink/80 p-3 shadow-lift ring-1 ring-white/10 backdrop-blur-sm md:p-4"
        >
          <div className="relative">
            {/* toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-1 pb-3 pt-1">
              <div className="flex min-w-0 items-center gap-2">
                <FiFileText className="shrink-0 text-saffron" />
                <span className="truncate font-mono text-xs text-white/70">{fileName}</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex rounded-full bg-white/10 p-1" role="group" aria-label="CV language">
                  {Object.entries(CVS).map(([key, item]) => (
                    <button
                      key={key}
                      type="button"
                      aria-pressed={lang === key}
                      onClick={() => switchLang(key)}
                      className={`rounded-full px-3 py-1.5 font-mono text-xs font-bold transition-colors sm:px-4 ${
                        lang === key
                          ? "bg-saffron text-ink"
                          : "bg-transparent text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <a
                  href={cv.file}
                  download
                  aria-label="Download CV"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <FiDownload />
                </a>
                <a
                  href={cv.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open CV in a new tab"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>

            {/* viewer */}
            <div
              className="relative h-[72svh] max-h-[980px] min-h-[480px] overflow-hidden rounded-2xl bg-primary"
              onMouseLeave={() => setInteractive(false)}
            >
              {canInline ? (
                <>
                  {!loaded && (
                    <div className="absolute inset-0 grid animate-pulse place-items-center font-mono text-sm text-muted">
                      Loading…
                    </div>
                  )}

                  <iframe
                    key={lang}
                    src={src}
                    title={cv.label}
                    loading="lazy"
                    onLoad={() => setLoaded(true)}
                    className={`h-full w-full bg-white ${interactive ? "" : "pointer-events-none"}`}
                  />

                  {/* lets the page keep scrolling over the PDF until you click it */}
                  {!interactive && (
                    <button
                      type="button"
                      onClick={() => setInteractive(true)}
                      aria-label="Enable scrolling inside the CV"
                      className="absolute inset-0 flex cursor-pointer items-end justify-center pb-4"
                    >
                      <span className="inline-flex items-center gap-2 rounded-full bg-ink/90 px-4 py-2 font-mono text-xs font-bold text-white shadow-soft">
                        <FiMousePointer />
                        Click to scroll the CV
                      </span>
                    </button>
                  )}
                </>
              ) : (
                <div className="absolute inset-0 grid place-items-center p-6 text-center">
                  <div>
                    <FiFileText className="mx-auto text-5xl text-accent" />
                    <p className="mt-4 font-mono text-sm text-muted">{fileName}</p>
                    <Button asChild variant="saffron" className="mt-6">
                      <a href={cv.file} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink />
                        Open CV
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CvSection;
