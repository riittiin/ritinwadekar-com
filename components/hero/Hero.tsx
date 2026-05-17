import { HeroGrid } from "./HeroGrid";
import { HeroMarquee } from "./HeroMarquee";

export function Hero() {
  return (
    <header id="top" className="hero">
      <HeroGrid />
      <div className="shell hero-inner">
        <div className="hero-left">
          <div className="hero-meta">
            <span className="avail">
              <span className="dot" aria-hidden="true" />
              AVAILABLE FOR WORK
            </span>
            <span className="sep" aria-hidden="true">/</span>
            <span>SAN FRANCISCO, CA</span>
          </div>

          <h1 className="hero-headline">
            I find where your systems aren&apos;t optimizing<br />
            <span className="em">and rebuild them with AI that does.</span>
          </h1>

          <p className="hero-sub">
            I&apos;m <strong style={{ color: "var(--fg)", fontWeight: 500 }}>Ritin Wadekar</strong>, an AI Engineer
            at Onpoint Insights. I shipped an automated medical coding pipeline for a healthcare client. It&apos;s a system
            that turns clinical notes into billing codes approved by the government, built on official CMS data so every
            prediction is defensible. Before that, I built multi agent LLM pipelines, RAG systems, NLP,
            predictive and forecasting models, and recommendation engines across healthcare, pharma, and retail.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-primary" href="#work">
              View Selected Work
              <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a className="btn" href="#capabilities">
              See My Skills
            </a>
            <a className="btn" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="shell">
        <HeroMarquee />
      </div>
    </header>
  );
}
