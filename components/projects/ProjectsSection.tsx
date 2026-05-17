"use client";

import { useEffect, useMemo, useState } from "react";
import { PROJECTS } from "@/lib/data";
import { SectionNum } from "@/components/ui/SectionNum";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const cos = useMemo(
    () => ["All", ...Array.from(new Set(PROJECTS.map((p) => p.co)))],
    []
  );
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.co === filter);

  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent<{ projectId: string }>).detail?.projectId;
      if (!id) return;
      setFilter("All");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.getElementById(`proj-${id}`);
          if (!el) return;
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.classList.add("proj-highlight");
          window.setTimeout(() => el.classList.remove("proj-highlight"), 2000);
        });
      });
    };
    window.addEventListener("jumpToProject", handler);
    return () => window.removeEventListener("jumpToProject", handler);
  }, []);

  return (
    <section id="projects" className="section">
      <div className="shell">
        <SectionNum n="04 / PROJECTS" title="CASE STUDIES" />
        <div className="section-head">
          <h2>
            Ten systems. One pattern:{" "}
            <span className="serif" style={{ color: "var(--accent)" }}>
              find the bottleneck, rebuild it.
            </span>
          </h2>
        </div>

        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}
          role="group"
          aria-label="Filter projects by company"
        >
          {cos.map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className="tech"
                aria-pressed={active}
                style={{
                  cursor: "pointer",
                  borderColor: active ? "var(--accent)" : undefined,
                  color: active ? "var(--accent)" : undefined,
                  background: active ? "color-mix(in oklab, var(--accent) 8%, transparent)" : undefined,
                }}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="proj-grid">
          {visible.map((p, i) => (
            <ProjectCard key={p.id} p={p} ix={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
