import { SITE } from "@/lib/data";
import { SectionNum } from "@/components/ui/SectionNum";

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="shell">
        <SectionNum n="08 / CONTACT" title="REACH OUT" />

        <div className="contact-card">
          <div>
            <h2>
              Let&apos;s build a system that{" "}
              <span className="em">finds the bottleneck and rebuilds it</span>.
            </h2>
            <p
              style={{
                marginTop: 18,
                maxWidth: "52ch",
                color: "var(--fg-3)",
                fontSize: 16,
              }}
            >
              I&apos;m open to AI engineering roles, advisory and consulting work, and serious
              technical conversations. Currently in San Francisco.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
              <a className="btn btn-primary" href={`mailto:${SITE.email}`}>
                Email Ritin <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a className="btn" href={SITE.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="contact-list" role="list" aria-label="Contact details">
            <a role="listitem" href={`mailto:${SITE.email}`}>
              <span className="k">EMAIL</span>
              <span className="v">{SITE.email}</span>
            </a>
            <a role="listitem" href="tel:+19728225748">
              <span className="k">PHONE</span>
              <span className="v">{SITE.phone}</span>
            </a>
            <a role="listitem" href={SITE.linkedin} target="_blank" rel="noreferrer">
              <span className="k">LINKEDIN</span>
              <span className="v">www.linkedin.com/in/ritin-wadekar/</span>
            </a>
            <span role="listitem">
              <span className="k">LOCATION</span>
              <span className="v">{SITE.location}</span>
            </span>
            <span role="listitem">
              <span className="k">STATUS</span>
              <span className="v" style={{ color: "var(--accent)" }}>
                ● AVAILABLE FOR WORK
              </span>
            </span>
          </div>
        </div>

        <footer className="footer">
          <span>OPEN TO WORK</span>
        </footer>
      </div>
    </section>
  );
}
