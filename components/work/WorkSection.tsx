"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ROLES } from "@/lib/data";
import { SectionNum } from "@/components/ui/SectionNum";
import { WorkCard } from "./WorkCard";

export function WorkSection() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const role = ROLES[active];

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const n = (i + 1) % ROLES.length;
      setActive(n);
      itemRefs.current[n]?.focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const n = (i - 1 + ROLES.length) % ROLES.length;
      setActive(n);
      itemRefs.current[n]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(0);
      itemRefs.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      const last = ROLES.length - 1;
      setActive(last);
      itemRefs.current[last]?.focus();
    }
  };

  return (
    <section id="work" className="section">
      <div className="shell">
        <SectionNum n="01 / WORK" title="2023 TO 2026" />
        <div className="section-head">
          <h2>
            Three companies. Five roles.
            <br />
            One thread:{" "}
            <span className="serif" style={{ color: "var(--accent)" }}>
              I always left the system smarter than I found it.
            </span>
          </h2>
        </div>

        <motion.div
          className="work-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <div className="work-rail" role="tablist" aria-label="Roles" aria-orientation="vertical">
            {ROLES.map((r, i) => (
              <button
                key={r.id}
                ref={(el) => { itemRefs.current[i] = el; }}
                className={`rail-item ${i === active ? "active" : ""} ${r.current ? "current" : ""}`}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                role="tab"
                aria-selected={i === active}
                aria-controls={`role-panel-${r.id}`}
                id={`role-tab-${r.id}`}
                tabIndex={i === active ? 0 : -1}
              >
                <span className="rail-co">{r.co}</span>
                <span className="rail-role">{r.role}</span>
                <span className="rail-date">{r.dates}</span>
              </button>
            ))}
          </div>

          <div
            className="work-panel"
            role="tabpanel"
            id={`role-panel-${role.id}`}
            aria-labelledby={`role-tab-${role.id}`}
          >
            <WorkCard role={role} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
