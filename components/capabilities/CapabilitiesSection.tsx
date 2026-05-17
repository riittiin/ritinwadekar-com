import { CAPABILITIES } from "@/lib/data";
import { SectionNum } from "@/components/ui/SectionNum";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="section">
      <div className="shell">
        <SectionNum n="05 / CAPABILITIES" title="THE STACK" />
        <div className="section-head">
          <h2>
            A stack built{" "}
            <span className="serif" style={{ color: "var(--accent)" }}>
              to ship
            </span>
            , not to pitch.
          </h2>
        </div>

        <div className="caps-grid">
          {CAPABILITIES.map((cap, i) => (
            <div className="cap-col" key={cap.title}>
              <h4>
                <span className="ix">{String(i + 1).padStart(2, "0")}</span>
                {cap.title}
              </h4>
              <div className="cap-list">
                {cap.items.map((t) => (
                  <span key={t} className="cap-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
