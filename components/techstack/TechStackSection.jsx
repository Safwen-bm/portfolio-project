// components/techstack/TechStackSection.jsx
import TechMarquee from "@/components/techstack/TechMarquee";
import CodeMark from "@/components/ornaments/CodeMark";

export default function TechStackSection() {
  return (
    <section className="relative pb-10 pt-12 md:pb-14 md:pt-16">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center md:mb-8">
          <div className="mb-3 flex items-center justify-center gap-2.5" aria-hidden="true">
            <span className="h-px w-8 bg-saffron/60" />
            <CodeMark className="h-3 w-3 text-saffron" />
            <span className="h-px w-8 bg-saffron/60" />
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-2 text-sm text-muted">
            Full-stack, AI, and DevOps the tools I use daily
          </p>
        </div>
      </div>

      <TechMarquee />
    </section>
  );
}