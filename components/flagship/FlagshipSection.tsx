"use client";

import { motion } from "framer-motion";
import { SectionNum } from "@/components/ui/SectionNum";
import { PipelineDiagram } from "./PipelineDiagram";

const BULLETS = [
  {
    t: "End to end ownership",
    b: "Researched, architected, and shipped as the sole AI Engineer on the engagement.",
  },
  {
    t: "Caught the wrong approach early",
    b: "Proved that an off the shelf large language model couldn't pass 70% accuracy on medical codes, before the team built the rest of the system on top of it.",
  },
  {
    t: "Every answer traces back to official government sources",
    b: "Built on top of three authoritative CMS coding manuals (Centers for Medicare & Medicaid Services), so every prediction has a paper trail back to a legally accepted source.",
  },
  {
    t: "Two stage process that mirrors how expert coders work",
    b: "Stage 1 narrows down the list of possible billing codes. Stage 2 picks the right one under tight rules. That's the same mental shortcut human medical coders use, and it tripled accuracy over a one step AI approach.",
  },
  {
    t: "Compliance baked in at the right layers",
    b: "Official CMS coding guidelines anchor every prediction from the start. Medicaid and Medicare payer rules then verify the code holds up under the patient's specific government insurance coverage. Both layers make the predictions defensible to regulators.",
  },
  {
    t: "Built for a market projected to reach $8.4B by 2033",
    b: "Positions the client at the frontier of medical coding automation as the total market grows, the kind of bet that compounds.",
  },
];

export function FlagshipSection() {
  return (
    <section id="flagship" className="flagship-section">
      <div className="shell">
        <SectionNum n="02 / FEATURED" title="AUTOMATED MEDICAL CODING PIPELINE" />

        <motion.div
          className="flagship-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <div className="flagship-header">
            <div>
              <span className="tag">● Live · In Production</span>
              <h2 className="flagship-title">
                A government compliant medical coding pipeline, shipped in 2 months.
              </h2>
              <p className="flagship-sub">
                As the sole AI Engineer on a healthcare client engagement, I researched,
                architected, and shipped a government compliant medical coding pipeline.
                The system turns clinical notes into defensible billing codes, grounded in
                three official CMS sources (Centers for Medicare &amp; Medicaid Services).
              </p>
            </div>
          </div>

          <div className="compare-row">
            <div className="compare-cell good">
              <div className="head">
                <span className="pip" aria-hidden="true" />
                ACCURACY GAIN · VS AI BASELINE
              </div>
              <div className="big">3×</div>
              <div className="cap">more accurate than a single pass LLM · proves the retrieve then rank architecture works for medical codes</div>
            </div>
            <div className="compare-cell good">
              <div className="head">
                <span className="pip" aria-hidden="true" />
                ERROR RATE · VS INDUSTRY STANDARD
              </div>
              <div className="big">7.66%</div>
              <div className="cap">well below the 10–20% manual coding industry standard · every prediction traceable to official CMS sources</div>
            </div>
          </div>

          <div className="pipe-diagram" aria-label="Two stage medical coding pipeline diagram">
            <PipelineDiagram />
          </div>

          <div className="flagship-bullets">
            {BULLETS.map((x, i) => (
              <div className="fbul" key={i}>
                <div className="ix">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <div className="ti">{x.t}</div>
                  <div className="bo">{x.b}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
