// components/resume/KnowledgeNetworkBg.jsx
// Floating code symbols behind the Resume. Colors come from the theme tokens.
const symbols = [
  { symbol: "</>", left: "7%", top: "14%", size: "text-5xl md:text-7xl", color: "text-accent/[0.17]", duration: 7, delay: 0 },
  { symbol: "TS", left: "78%", top: "10%", size: "text-4xl md:text-6xl", color: "text-accent/[0.16]", duration: 8, delay: 1 },
  { symbol: "{ API }", left: "87%", top: "43%", size: "text-2xl md:text-4xl", color: "text-glow/[0.28]", duration: 9, delay: 0.5 },
  { symbol: "AI", left: "13%", top: "60%", size: "text-5xl md:text-6xl", color: "text-saffron/[0.22]", duration: 8, delay: 1.5 },
  { symbol: "SQL", left: "70%", top: "76%", size: "text-3xl md:text-5xl", color: "text-accent/[0.15]", duration: 10, delay: 0.8 },
  { symbol: "git push", left: "38%", top: "12%", size: "text-lg md:text-2xl", color: "text-glow/[0.26]", duration: 7.5, delay: 2 },
  { symbol: "const {}", left: "43%", top: "75%", size: "text-2xl md:text-3xl", color: "text-accent/[0.14]", duration: 9, delay: 1.2 },
  { symbol: "RAG", left: "91%", top: "82%", size: "text-2xl md:text-4xl", color: "text-saffron/[0.2]", duration: 8.5, delay: 0.4 },
  { symbol: "npm run build", left: "4%", top: "39%", size: "text-sm md:text-lg", color: "text-glow/[0.26]", duration: 9.5, delay: 1.7 },
  { symbol: "↔", left: "58%", top: "43%", size: "text-4xl md:text-5xl", color: "text-saffron/[0.18]", duration: 8, delay: 0.9 },
  { symbol: "async ()", left: "28%", top: "87%", size: "text-lg md:text-2xl", color: "text-accent/[0.15]", duration: 10, delay: 1.4 },
  { symbol: "☁", left: "94%", top: "20%", size: "text-3xl md:text-5xl", color: "text-glow/[0.26]", duration: 8.5, delay: 0.7 },
];

export default function KnowledgeNetworkBg() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {symbols.map((item) => (
        <span
          key={item.symbol}
          className={`absolute animate-drift select-none font-mono font-bold ${item.size} ${item.color}`}
          style={{
            left: item.left,
            top: item.top,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {item.symbol}
        </span>
      ))}
    </div>
  );
}
