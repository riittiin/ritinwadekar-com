type Variant = "needs-review" | "placeholder";

// Internal review flag — intentionally not rendered to the public site.
// Source inconsistencies are tracked in site/DISCREPANCIES.md and resolved
// before each ship rather than surfaced to visitors as "needs review" pills.
export function NeedsReview(_props: { variant?: Variant; className?: string }) {
  return null;
}
