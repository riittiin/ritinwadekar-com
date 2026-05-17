import Link from "next/link";
import type { Project } from "@/lib/types";

export function ProjectCard({ p, ix }: { p: Project; ix: number }) {
  return (
    <Link
      id={`proj-${p.id}`}
      href={`/projects/${p.id}`}
      className={`proj ${p.flagship ? "flagship" : ""}`}
    >
      <div className="ph">
        <span className="num">{String(ix + 1).padStart(2, "0")}</span>
        <span className="co">
          {p.co}
          {p.flagship && (
            <span style={{ color: "var(--accent)", marginLeft: 8 }}>● FEATURED</span>
          )}
        </span>
      </div>
      <div className="pname">{p.name}</div>

      <div className="pgrid">
        <div className="prow">
          <div className="k">Problem</div>
          <div className="v">{p.problem}</div>
        </div>
        <div className="prow">
          <div className="k">Built</div>
          <div className="v">{p.built}</div>
        </div>
        <div className="prow">
          <div className="k">Approach</div>
          <div className="v">{p.approach}</div>
        </div>
      </div>

      <div className="ptech">
        {p.tech.map((t) => (
          <span key={t} className="tech">
            {t}
          </span>
        ))}
      </div>

      <div className="impact">→ {p.impact}</div>
    </Link>
  );
}
