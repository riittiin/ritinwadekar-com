export function SectionNum({ n, title }: { n: string; title: string }) {
  return (
    <div className="section-num">
      <span className="eyebrow">{n}</span>
      <span className="line" aria-hidden="true" />
      <span className="eyebrow">{title}</span>
    </div>
  );
}
