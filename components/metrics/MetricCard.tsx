"use client";

import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { animate, useInView } from "framer-motion";
import type { Metric } from "@/lib/types";
import { NeedsReview } from "@/components/ui/NeedsReview";
import { Spark } from "./Spark";
import { PROJECTS } from "@/lib/data";

function jumpToProject(projectId: string) {
  window.dispatchEvent(
    new CustomEvent("jumpToProject", { detail: { projectId } }),
  );
}

export function MetricCard({ m, ix }: { m: Metric; ix: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  const linkedProject = useMemo(
    () => (m.projectId ? PROJECTS.find((p) => p.id === m.projectId) : undefined),
    [m.projectId],
  );
  const isLink = !!linkedProject;

  const handleClick = () => {
    if (m.projectId) jumpToProject(m.projectId);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!m.projectId) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      jumpToProject(m.projectId);
    }
  };

  const target = useMemo(() => parseFloat(String(m.num).replace(/[^0-9.]/g, "")), [m.num]);
  const hasSuffixM = useMemo(() => String(m.num).includes("M"), [m.num]);

  const sourceStr = String(m.num);
  const decimals = useMemo(() => {
    const dotIx = sourceStr.indexOf(".");
    if (dotIx < 0) return 0;
    const suffix = sourceStr.endsWith("M") || sourceStr.endsWith("B") ? 1 : 0;
    return Math.max(1, sourceStr.length - dotIx - 1 - suffix);
  }, [sourceStr]);

  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (Number.isNaN(target)) {
      setVal(target);
      return;
    }
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVal(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.4 + ix * 0.06,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, target, ix]);

  const display = useMemo(() => {
    if (Number.isNaN(target)) return m.num;
    return decimals > 0 ? val.toFixed(decimals) : Math.round(val).toString();
  }, [val, target, decimals, m.num]);

  return (
    <div
      ref={ref}
      className={`metric${isLink ? " metric-link" : ""}`}
      {...(isLink && {
        role: "button",
        tabIndex: 0,
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        "aria-label": `${m.label}: ${m.num}${m.unit ?? ""}. Jump to ${linkedProject!.name} in Projects.`,
      })}
    >
      <div className="mlabel">
        <span>{m.label}</span>
        <span className="ix">{String(ix + 1).padStart(2, "0")}</span>
      </div>
      <div>
        <div className="mnum">
          {m.prefix && (
            <span style={{ color: "var(--fg-3)", fontSize: "0.6em" }}>{m.prefix}</span>
          )}
          <span>{display}</span>
          {hasSuffixM && <span className="unit">M</span>}
          {m.unit && !hasSuffixM && <span className="unit">{m.unit}</span>}
        </div>
        <div className="mdesc">{m.desc}</div>
      </div>
      <Spark dir={m.spark} seed={ix} />
      {isLink && (
        <div className="mjump" aria-hidden="true">
          See project →
        </div>
      )}
      {m.needsReview && (
        <div style={{ marginTop: 8 }}>
          <NeedsReview />
        </div>
      )}
    </div>
  );
}
