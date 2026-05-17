"use client";

import { motion } from "framer-motion";

const MARQUEE = [
  "RAG ARCHITECTURE",
  "MULTI-AGENT AI",
  "VECTOR RETRIEVAL",
  "CAUSAL INFERENCE",
  "GENERATIVE AI",
  "RECOMMENDATION SYSTEMS",
  "NATURAL LANGUAGE PROCESSING",
  "CHURN MODELING",
  "OCR PIPELINES",
  "FORECASTING",
];

/* Marquee is driven by Framer Motion (Web Animations API) instead of
   CSS @keyframes — WebKit/Safari silently auto-pauses CSS animations when
   macOS "Reduce Motion" is on, but Framer Motion respects the preference
   only when we ask it to (here, never — the marquee is a slow ambient
   element, not a motion-sensitivity issue). */
export function HeroMarquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="hero-marquee" aria-hidden="true">
      <motion.div
        className="hero-marquee-track"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 60,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </motion.div>
    </div>
  );
}
