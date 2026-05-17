type NodeProps = {
  x: number;
  y: number;
  w: number;
  label: string;
  sub: string;
  accent?: boolean;
  strong?: boolean;
};

function Node({ x, y, w, label, sub, accent, strong }: NodeProps) {
  const stroke = accent ? "oklch(0.88 0.17 130 / 0.8)" : "oklch(0.4 0.01 250)";
  const fill = strong ? "oklch(0.88 0.17 130 / 0.08)" : "oklch(0.19 0.008 250)";
  const labelColor = accent || strong ? "oklch(0.88 0.17 130)" : "oklch(0.92 0.004 250)";
  return (
    <g>
      <rect
        x={x - w / 2}
        y={y - 22}
        width={w}
        height={44}
        rx="6"
        fill={fill}
        stroke={stroke}
        strokeWidth={strong ? "1.5" : "1"}
      />
      <text
        x={x}
        y={y - 3}
        textAnchor="middle"
        fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
        fontSize="11"
        letterSpacing="1.2"
        fill={labelColor}
        fontWeight="600"
      >
        {label}
      </text>
      <text
        x={x}
        y={y + 13}
        textAnchor="middle"
        fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
        fontSize="9"
        letterSpacing="1"
        fill="oklch(0.62 0.006 250)"
      >
        {sub}
      </text>
    </g>
  );
}

function Edge({ a, b, dash }: { a: [number, number]; b: [number, number]; dash?: boolean }) {
  const mid: [number, number] = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  return (
    <path
      d={`M ${a[0]} ${a[1]} C ${mid[0]} ${a[1]}, ${mid[0]} ${b[1]}, ${b[0]} ${b[1]}`}
      stroke="oklch(0.4 0.012 250 / 0.7)"
      strokeWidth="1"
      fill="none"
      strokeDasharray={dash ? "3 3" : undefined}
    />
  );
}

export function PipelineDiagram() {
  return (
    <svg
      viewBox="0 0 1080 360"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-labelledby="flagship-pipeline-title"
    >
      <title id="flagship-pipeline-title">
        Diagram of the four step medical coding system. Step 1: receive the clinical note
        (a patient&apos;s medical record). Step 2: look up matching billing codes in three official
        government sources from CMS, the Centers for Medicare and Medicaid Services. Step 3: a
        two stage AI pipeline narrows candidates then picks the right code. Step 4: check
        Medicaid and Medicare compliance rules and output the final code, with an error rate
        under 7.66%.
      </title>
      <defs>
        <linearGradient id="edgeFlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="oklch(0.88 0.17 130 / 0)" />
          <stop offset="0.5" stopColor="oklch(0.88 0.17 130 / 0.9)" />
          <stop offset="1" stopColor="oklch(0.88 0.17 130 / 0)" />
        </linearGradient>
        <filter id="g2" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g opacity="0.18" stroke="oklch(0.4 0.01 250 / 0.5)" strokeWidth="0.5">
        {Array.from({ length: 27 }).map((_, i) => (
          <line key={"v" + i} x1={i * 40} y1={0} x2={i * 40} y2={360} />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={"h" + i} x1={0} y1={i * 40} x2={1080} y2={i * 40} />
        ))}
      </g>

      <Node x={70} y={180} w={140} label="CLINICAL NOTE" sub="ICD 10 / CPT" />

      <Node x={310} y={110} w={180} label="CMS · ICD 10 SOURCE" sub="authoritative" />
      <Node x={310} y={180} w={180} label="CMS · CPT SOURCE" sub="authoritative" />
      <Node x={310} y={250} w={180} label="CMS · GUIDELINES" sub="authoritative" />

      <Node x={600} y={140} w={160} label="STAGE 1" sub="candidate narrow" accent />
      <Node x={600} y={220} w={160} label="STAGE 2" sub="constrained classify" accent />

      <Node x={840} y={140} w={160} label="MEDICAID RULES" sub="payer compliance" />
      <Node x={840} y={220} w={160} label="MEDICARE RULES" sub="payer compliance" />

      <Node x={1020} y={180} w={120} label="GROUNDED CODE" sub="< 7.66% err" accent strong />

      <Edge a={[140, 180]} b={[310, 110]} />
      <Edge a={[140, 180]} b={[310, 180]} />
      <Edge a={[140, 180]} b={[310, 250]} />

      <Edge a={[400, 110]} b={[600, 140]} />
      <Edge a={[400, 180]} b={[600, 140]} />
      <Edge a={[400, 250]} b={[600, 220]} />

      <Edge a={[680, 140]} b={[680, 220]} dash />

      <Edge a={[680, 140]} b={[840, 140]} />
      <Edge a={[680, 220]} b={[840, 220]} />

      <Edge a={[920, 140]} b={[1020, 180]} />
      <Edge a={[920, 220]} b={[1020, 180]} />

    </svg>
  );
}
