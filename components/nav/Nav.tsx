export function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-inner">
        <a href="#top" className="nav-brand" aria-label="Ritin Wadekar — home">
          <span className="dot" aria-hidden="true" />
          <span>Ritin Wadekar</span>
        </a>
        <a className="nav-link hide-sm" href="#work">
          Work
        </a>
        <a className="nav-link hide-sm" href="#flagship">
          Featured
        </a>
        <a className="nav-link hide-sm" href="#impact">
          Impact
        </a>
        <a className="nav-link hide-sm" href="#projects">
          Projects
        </a>
        <a className="nav-link hide-sm" href="#capabilities">
          Skills
        </a>
        <a className="nav-link hide-sm" href="#about">
          About
        </a>
        <a className="nav-cta" href="#contact">
          Contact →
        </a>
      </div>
    </nav>
  );
}
