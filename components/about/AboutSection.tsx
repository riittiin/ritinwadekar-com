import { JOURNEY } from "@/lib/data";
import { SectionNum } from "@/components/ui/SectionNum";
import { JourneyMap } from "./JourneyMap";

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <SectionNum n="06 / ABOUT" title="THE THREAD" />
        <div className="section-head">
          <h2>
            From numbers in Pune to{" "}
            <span className="serif" style={{ color: "var(--accent)" }}>
              AI in San Francisco
            </span>
            .
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-body">
            <p style={{ marginBottom: 18 }}>
              It started with numbers. I was the kid who chased harder problems for fun and never
              quite stopped.
            </p>
            <p style={{ marginBottom: 18 }}>
              That pull took me through{" "}
              <strong style={{ color: "var(--fg)", fontWeight: 500 }}>Pune University</strong>{" "}
              with honors in AI and machine learning, then to{" "}
              <strong style={{ color: "var(--fg)", fontWeight: 500 }}>Creative Galileo</strong>{" "}
              for my first production machine-learning work, at an EdTech platform with 10M+
              downloads.
            </p>
            <p style={{ marginBottom: 18 }}>
              From there I crossed the Pacific to{" "}
              <strong style={{ color: "var(--fg)", fontWeight: 500 }}>UT Dallas</strong> for a
              master&apos;s in Business Analytics and AI. I joined{" "}
              <strong style={{ color: "var(--fg)", fontWeight: 500 }}>Onpoint Insights</strong> as
              an intern and never left, working with clients across retail, pharma, and
              healthcare, and now building a government-compliant medical coding pipeline as their
              sole AI Engineer.
            </p>
            <p style={{ marginBottom: 18 }}>
              Every client taught me what AI looks like when it actually has to work.
            </p>
            <p>
              Now I&apos;m in San Francisco, doing what every step prepared me for:{" "}
              <em>
                finding where companies are leaving growth on the table, and rebuilding their
                systems with AI that multiplies it.
              </em>
            </p>
          </div>

          <aside className="journey" aria-label="Career trajectory">
            <div className="journey-head">
              <span className="journey-eyebrow">Trajectory</span>
              <span className="journey-range">2019 — 2026</span>
            </div>
            <JourneyMap />
            <ol className="journey-timeline">
              {JOURNEY.map((j, i) => (
                <li className={`tnode${j.current ? " is-current" : ""}`} key={i}>
                  <span className="tnode-rail" aria-hidden="true" />
                  <span className="tnode-dot" aria-hidden="true" />
                  <div className="tnode-body">
                    <div className="tnode-meta">
                      <span className="tnode-date">{j.yr}</span>
                      {j.current && <span className="tnode-pill">CURRENT</span>}
                    </div>
                    <div className="tnode-org">{j.pl}</div>
                    <div className="tnode-role">{j.ct}</div>
                    <div className="tnode-loc">{j.loc}</div>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </div>

        <div style={{ marginTop: 56 }}>
          <SectionNum n="07 / EDUCATION" title="PUNE TO TEXAS" />
          <div className="edu-grid" style={{ marginTop: 0 }}>
            <div className="edu">
              <div className="school">The University of Texas at Dallas</div>
              <div className="deg">M.S., Business Analytics &amp; Artificial Intelligence</div>
              <div className="meta">
                <span>RICHARDSON, TX</span>
                <span>MAY 2025</span>
              </div>
            </div>
            <div className="edu">
              <div className="school">Pune University</div>
              <div className="deg">
                B.E. (Bachelor of Engineering), Electronics &amp; Telecommunication · Honors in AI / ML
              </div>
              <div className="meta">
                <span>PUNE, IN</span>
                <span>MAY 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
