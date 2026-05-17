"use client";

import { useEffect, useState } from "react";

const PTS = [
  { x: 120, y: 110, label: "PUNE", sub: "IN · 2019" },
  { x: 400, y: 80, label: "DALLAS", sub: "TX · 2023" },
  { x: 700, y: 95, label: "SAN FRANCISCO", sub: "CA · NOW" },
];

export function JourneyMap() {
  const [t, setT] = useState(0);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const t0 = performance.now();
    const tick = () => {
      setT(((performance.now() - t0) / 4500) % 1);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const d = `M ${PTS[0].x} ${PTS[0].y}
             C ${PTS[0].x - 100} ${PTS[0].y - 60}, ${PTS[1].x + 100} ${PTS[1].y - 50}, ${PTS[1].x} ${PTS[1].y}
             S ${PTS[2].x + 80} ${PTS[2].y - 60}, ${PTS[2].x} ${PTS[2].y}`;

  return (
    <svg
      className="journey-map"
      viewBox="0 0 800 180"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-labelledby="journey-map-title"
    >
      <title id="journey-map-title">
        Career trajectory map: Pune, India → Dallas, Texas → San Francisco, California.
      </title>
      <g opacity="0.25" stroke="oklch(0.4 0.01 250 / 0.5)" strokeWidth="0.5">
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={"v" + i} x1={i * 42} y1={0} x2={i * 42} y2={180} />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={"h" + i} x1={0} y1={i * 42} x2={800} y2={i * 42} />
        ))}
      </g>

      <path
        d={d}
        stroke="oklch(0.5 0.012 250 / 0.6)"
        strokeWidth="1.2"
        fill="none"
        strokeDasharray="3 4"
      />
      <path
        d={d}
        stroke="oklch(0.88 0.17 130)"
        strokeWidth="1.6"
        fill="none"
        strokeDasharray="220 1000"
        strokeDashoffset={(1 - t) * 1220}
        style={{ filter: "drop-shadow(0 0 6px oklch(0.88 0.17 130 / 0.6))" }}
      />

      {PTS.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="14" fill="oklch(0.88 0.17 130 / 0.08)" />
          <circle
            cx={p.x}
            cy={p.y}
            r="4"
            fill="oklch(0.88 0.17 130)"
            style={{ filter: "drop-shadow(0 0 6px oklch(0.88 0.17 130))" }}
          />
          <text
            x={p.x}
            y={p.y - 22}
            textAnchor="middle"
            fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
            fontSize="10"
            fill="oklch(0.92 0.004 250)"
            letterSpacing="1.5"
          >
            {p.label}
          </text>
          <text
            x={p.x}
            y={p.y + 30}
            textAnchor="middle"
            fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
            fontSize="9"
            fill="oklch(0.62 0.006 250)"
            letterSpacing="1.2"
          >
            {p.sub}
          </text>
        </g>
      ))}

      <text
        x="780"
        y="170"
        textAnchor="end"
        fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
        fontSize="9"
        fill="oklch(0.46 0.008 250)"
        letterSpacing="1.2"
      >
        2019 ◀ • • • • • ▶ 2026
      </text>
    </svg>
  );
}
