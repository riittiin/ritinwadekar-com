"use client";

import { motion } from "framer-motion";
import type { Role } from "@/lib/types";
import { NeedsReview } from "@/components/ui/NeedsReview";

export function WorkCard({ role }: { role: Role }) {
  return (
    <motion.article
      key={role.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
      className={`work-card ${role.flagship ? "flagship" : ""}`}
    >
      <div className="work-card-head">
        <div>
          <div className="co">
            {role.co}
            {role.flagship && (
              <span style={{ color: "var(--accent)", marginLeft: 10 }}>· FEATURED</span>
            )}
          </div>
          <h3>{role.role}</h3>
        </div>
        <div className="work-card-meta">
          <div className="loc">{role.loc}</div>
          <div>{role.dates}</div>
        </div>
      </div>

      <p className="work-summary">{role.summary}</p>

      <div className="work-stats">
        {role.stats.map((s, i) => (
          <div className="work-stat" key={i}>
            <div className="num">
              <span>{s.num}</span>
              {s.unit && (
                <span style={{ fontSize: "0.55em", color: "var(--fg-3)" }}>{s.unit}</span>
              )}
              {s.needsReview && <NeedsReview className="ml-2" />}
              {s.placeholder && <NeedsReview variant="placeholder" className="ml-2" />}
            </div>
            <div className="label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="work-achievements">
        {role.achievements.map((a, i) => (
          <div className="achv" key={i}>
            <div className="achv-num">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <div className="achv-title">{a.t}</div>
              <div className="achv-body">{a.b}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="tech-row">
        {role.tech.map((t) => (
          <span key={t} className="tech">
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
