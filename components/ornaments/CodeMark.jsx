const CODE_SHAPE_POINTS =
  "50,4 61,29 78,22 71,39 96,50 71,61 78,78 61,71 50,96 39,71 22,78 29,61 4,50 29,39 22,22 39,29";

export const CODE_MARK_CLIP = `polygon(${CODE_SHAPE_POINTS.split(" ")
  .map((p) =>
    p
      .split(",")
      .map((n) => `${n}%`)
      .join(" ")
  )
  .join(",")})`;

export default function CodeMark({ className = "", ...props }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" {...props}>
      {/* Geometric coding mark */}
      <path
        d="M35 32 L17 50 L35 68"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M65 32 L83 50 L65 68"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M56 25 L44 75" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}
