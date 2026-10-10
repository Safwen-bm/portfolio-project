// components/hero/HeroSection.jsx
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Photo from "@/components/hero/Photo";
import CodeMark from "@/components/ornaments/CodeMark";
import ViewCvButton from "@/components/cv/ViewCvButton";
import { SITE } from "@/lib/site";

const socials = [
  { Icon: FiGithub, href: SITE.github, label: "GitHub" },
  { Icon: FiLinkedin, href: SITE.linkedin, label: "LinkedIn" },
  { Icon: FiMail, href: `mailto:${SITE.email}`, label: "Email" },
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center pb-14 pt-28 md:pb-20 md:pt-32">
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* LEFT — INTRO */}
          <div className="mx-auto max-w-2xl animate-fade-up text-center lg:mx-0 lg:text-left">
            <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
              <CodeMark className="h-4 w-4 text-saffron" />
              <span className="kicker text-glow">Full-Stack Software Engineer</span>
            </div>

            <h1 className="font-display text-[42px] font-semibold leading-[1.04] tracking-[-0.02em] text-white sm:text-5xl md:text-[54px] xl:text-[66px]">
              I like turning
              <br />
              complicated ideas
              <br />
              into{" "}
              <span className="relative inline-block bg-gradient-to-r from-glow to-saffron bg-clip-text pr-1 italic text-transparent">
                simple software.
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-saffron"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8 Q 25 0 50 7 T 100 7 T 150 7 T 198 6"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl lg:mx-0">
              I'm Safwen, a developer who turns ideas into real products using{" "}
              <span className="font-semibold text-white">Next.js</span>,{" "}
              <span className="font-semibold text-white">React</span>,{" "}
              <span className="font-semibold text-white">TypeScript</span>, and{" "}
              <span className="font-semibold text-white">NestJS</span>, with AI
              woven in through NLP, RAG, and LLMs when it earns its place.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button asChild variant="glow" className="w-full sm:w-auto">
                <Link href="/work">
                  View My Work
                  <FiArrowRight />
                </Link>
              </Button>
              <ViewCvButton variant="ghost" />
            </div>

            <div className="mt-8 flex justify-center gap-3 lg:justify-start">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-200 hover:-translate-y-1 hover:border-glow hover:bg-glow hover:text-ink"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — PHOTO */}
          <div
            className="flex animate-fade-up items-center justify-center py-6"
            style={{ animationDelay: "0.15s" }}
          >
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
