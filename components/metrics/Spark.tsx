import { useMemo } from "react";

export function Spark({ dir = "up", seed = 0 }: { dir?: "up" | "down" | "flat"; seed?: number }) {
  const points = useMemo(() => {
    const N = 18;
    let v = 0.5;
    const pts: number[] = [];
    for (let i = 0; i < N; i++) {
      const s = Math.sin((i + 1) * 12.9898 + seed * 78.233) * 43758.5453;
      const r = s - Math.floor(s);
      v += (r - 0.5) * 0.18;
      v = Math.max(0.05, Math.min(0.95, v));
      pts.push(v);
    }
    return pts.map((p, i) => {
      const k = i / (N - 1);
      if (dir === "up") return Math.min(0.95, p * (1 - k * 0.4) + k * 0.85);
      if (dir === "down") return Math.max(0.05, p * (1 - k * 0.4) + (1 - k) * 0.85);
      return p;
    });
  }, [dir, seed]);

  const W = 120;
  const H = 32;
  const pad = 2;
  const path = points
    .map((p, i) => {
      const x = pad + (i / (points.length - 1)) * (W - pad * 2);
      const y = H - pad - p * (H - pad * 2);
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  const last = points[points.length - 1];
  const lx = W - pad;
  const ly = H - pad - last * (H - pad * 2);

  return (
    <svg className="spark" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
      <path
        d={path}
        stroke="oklch(0.88 0.17 130 / 0.95)"
        strokeWidth="1.4"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx={lx} cy={ly} r="2.2" fill="oklch(0.88 0.17 130)" />
    </svg>
  );
}
