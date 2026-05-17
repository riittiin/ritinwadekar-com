import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, SITE } from "@/lib/data";
import { Nav } from "@/components/nav/Nav";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = PROJECTS.find((x) => x.id === params.slug);
  if (!p) return {};
  return {
    title: p.name,
    description: `${p.name} — ${p.impact}. Built by ${SITE.name}.`,
    alternates: { canonical: `/projects/${p.id}` },
    openGraph: {
      type: "article",
      url: `${SITE.url}/projects/${p.id}`,
      title: `${p.name} — ${SITE.name}`,
      description: `${p.impact}. ${p.problem}`,
    },
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const p = PROJECTS.find((x) => x.id === params.slug);
  if (!p) notFound();

  return (
    <>
      <Nav />
      <main className="project-detail">
        <div className="shell">
          <Link href="/#projects" className="back">
            ← BACK TO PROJECTS
          </Link>

          <div className="mono" style={{ color: "var(--fg-4)", letterSpacing: "0.14em", marginBottom: 14, fontSize: 11, textTransform: "uppercase" }}>
            {p.co}
            {p.flagship && <span style={{ color: "var(--accent)", marginLeft: 10 }}>● FEATURED</span>}
          </div>

          <h1>{p.name}</h1>

          <p className="lede">{p.problem}</p>

          <div className="impact-bar">→ {p.impact}</div>

          <div className="grid">
            <div className="k">Built</div>
            <div className="v">{p.built}</div>
          </div>
          <div className="grid">
            <div className="k">Approach</div>
            <div className="v">{p.approach}</div>
          </div>
          <div className="grid">
            <div className="k">Impact</div>
            <div className="v">{p.impact}</div>
          </div>
          <div className="grid">
            <div className="k">Skills</div>
            <div className="v">
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tech.map((t) => (
                  <span key={t} className="tech">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
