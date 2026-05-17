import { METRICS } from "@/lib/data";
import { SectionNum } from "@/components/ui/SectionNum";
import { MetricCard } from "./MetricCard";

export function MetricsSection() {
  return (
    <section id="impact" className="section">
      <div className="shell">
        <SectionNum n="03 / IMPACT" title="MEASURED · CLIENT IMPACT" />
        <div className="section-head">
          <h2>Numbers from systems that actually shipped.</h2>
        </div>

        <div className="impact-hint-row">
          <p className="impact-hint">
            <span className="impact-hint-dot" aria-hidden="true" />
            Click any number to jump to the project it came from.
          </p>
        </div>

        <div className="metrics-grid">
          {METRICS.map((m, i) => (
            <MetricCard key={i} m={m} ix={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
