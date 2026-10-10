// Theme-aware background for the dark bands (Roadmap, CV, Footer).
// The parent must be `relative isolate overflow-hidden`.
export default function SectionBackdrop({ pattern = true, className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-night to-ink" />

      <div className="absolute -left-32 -top-32 h-[560px] w-[560px] bg-[radial-gradient(closest-side,rgb(var(--c-glow)/0.26),transparent)]" />
      <div className="absolute -bottom-40 -right-24 h-[620px] w-[620px] bg-[radial-gradient(closest-side,rgb(var(--c-accent)/0.35),transparent)]" />

      {pattern && (
        <div className="fade-radial absolute inset-0">
          <div className="zellige-mask absolute inset-0" style={{ "--zellige-alpha": 0.16 }} />
        </div>
      )}

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glow/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-glow/30 to-transparent" />
    </div>
  );
}
