import Image from "next/image";
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
            <span className="sep" aria-hidden="true">/</span>
            <span>EST. 2026</span>
          </div>

          <h1 className="hero-headline">
            I find where your systems are not optimizing{" "}
            <span className="em">and rebuild them with AI that does.</span>
          </h1>

          <p className="hero-sub">
            I&apos;m <strong style={{ color: "var(--fg)", fontWeight: 500 }}>Ritin Wadekar</strong>, an AI
            Engineer at Onpoint Insights. I shipped an automated medical coding pipeline for a healthcare
            client. It&apos;s a system that turns clinical notes into billing codes approved by the
            government, built on official CMS data so every prediction is defensible. Before that, I built
            multi agent LLM pipelines, RAG systems, NLP, predictive and forecasting models, and
            recommendation engines across healthcare, pharma, and retail.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-primary" href="#work">
              View Selected Work
              <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a className="btn" href="#capabilities">
              Explore Capabilities
            </a>
            <a className="btn" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <aside className="hero-right" aria-label="Portrait">
          <div className="hero-portrait">
            <span className="hero-portrait-halo" aria-hidden="true" />
            <span className="hero-portrait-grid" aria-hidden="true" />
            <div className="hero-portrait-frame">
              <Image
                src="/ritin.jpg"
                alt="Ritin Wadekar"
                width={900}
                height={900}
                priority
                className="hero-portrait-img"
              />
              <span className="hero-portrait-grade" aria-hidden="true" />
              <span className="hero-portrait-scanlines" aria-hidden="true" />
              <span className="hero-portrait-vignette" aria-hidden="true" />
              <span className="hero-portrait-grain" aria-hidden="true" />

              <div className="hero-hud" aria-hidden="true">
                <div className="hud-corner hud-corner--tl">
                  <span className="hud-corner-tick" />
                </div>
                <div className="hud-corner hud-corner--tr">
                  <span className="hud-corner-tick" />
                </div>
                <div className="hud-corner hud-corner--bl">
                  <span className="hud-corner-tick" />
                </div>
                <div className="hud-corner hud-corner--br">
                  <span className="hud-corner-tick" />
                </div>

                <div className="hud-label hud-label--tl">
                  <span>REC · 042 · NORTH MALL</span>
                </div>
                <div className="hud-label hud-label--tr">
                  <span>FOV.35MM · F/2.8</span>
                </div>

                <div className="hud-subject">
                  <span className="hud-subject-label">SUBJECT · 0.994</span>
                  <span className="hud-subject-box">
                    <span className="hud-crosshair" />
                  </span>
                </div>

                <div className="hud-timecode" aria-hidden="true">
                  <span>00:00:42:11</span>
                  <span className="hud-timecode-rule" />
                  <span>ISO 800</span>
                  <span>1/250</span>
                  <span>F 2.8</span>
                  <span className="hud-timecode-rule" />
                  <span>WB 5600K</span>
                </div>

                <div className="hud-label hud-label--bl">
                  <span>32.9858° N · 96.7501° W</span>
                </div>
                <div className="hud-label hud-label--br hud-accent">
                  <span className="hud-dot pulse" />
                  <span>LIVE FEED</span>
                </div>
              </div>
            </div>
            <div className="hero-portrait-caption">
              <span className="hero-portrait-index">01 / 01</span>
              <span className="hero-portrait-rule" aria-hidden="true" />
              <span className="hero-portrait-tag">RITIN WADEKAR</span>
              <span className="hero-portrait-rule" aria-hidden="true" />
              <span className="hero-portrait-sub">M.S., UT DALLAS · 2025</span>
            </div>
          </div>
        </aside>
      </div>

      <div className="shell">
        <HeroMarquee />
      </div>
    </header>
  );
}
