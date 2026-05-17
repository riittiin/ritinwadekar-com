# ritinwadekar.com

Personal site for Ritin Wadekar — AI Engineer, San Francisco.

## Stack

- **Next.js 14** (App Router) + **TypeScript** strict
- **Tailwind CSS** — design tokens kept as CSS custom properties (oklch) so the prototype's color science survives untouched
- **Framer Motion** — `whileInView` reveals + counter animations (replaces the prototype's IntersectionObserver fallback + `useCountUp` hand-roll)
- **next-themes** — dark default, light toggle
- **next/font/google** — Geist · Geist Mono · Instrument Serif. JetBrains Mono is preferred in the CSS stack and falls back to Geist Mono on machines that don't have it installed.
- **Vercel-ready** — no custom build, no env vars required to ship

## Scripts

```bash
pnpm install
pnpm dev        # localhost:3000
pnpm build      # production build, exit 0 on no TS/ESLint errors
pnpm start      # serve the production build
pnpm lint       # next lint
pnpm typecheck  # tsc --noEmit
```

## Project layout

```
app/
├── layout.tsx              # fonts, theme provider, root metadata
├── page.tsx                # single-page composition: Hero → Work → Flagship → Metrics → Projects → Capabilities → About → Contact
├── globals.css             # design tokens (dark + light) + section styles ported from the prototype
├── projects/[slug]/page.tsx# per-project deep-dive (stub today; reads from lib/data.ts)
├── sitemap.ts · robots.ts  # SEO
├── opengraph-image.tsx     # dynamic 1200×630 OG
└── icon.tsx                # generated favicon

components/
├── nav/Nav.tsx
├── hero/Hero.tsx + HeroGrid.tsx (cursor-reactive canvas) + PipelineGlance.tsx (SVG)
├── work/WorkSection.tsx + WorkCard.tsx
├── flagship/FlagshipSection.tsx + PipelineDiagram.tsx (SVG)
├── metrics/MetricsSection.tsx + MetricCard.tsx + Spark.tsx
├── projects/ProjectsSection.tsx + ProjectCard.tsx
├── capabilities/CapabilitiesSection.tsx
├── about/AboutSection.tsx + JourneyMap.tsx (SVG)
├── contact/ContactSection.tsx
└── ui/SectionNum.tsx · NeedsReview.tsx · ThemeProvider.tsx · ThemeToggle.tsx

lib/
├── data.ts                 # the single source of truth (ROLES, METRICS, PROJECTS, CAPABILITIES, JOURNEY, SITE)
└── types.ts                # TS shapes for all of the above
```

## Editing content

All site content lives in **`lib/data.ts`**. The components are presentation only — they import from `data.ts` and render. No content is hard-coded inside components.

| Want to change…                          | Edit                                                        |
| ---------------------------------------- | ----------------------------------------------------------- |
| A role title, dates, summary, or stack   | `lib/data.ts` → `ROLES[i]`                                  |
| A stat or achievement inside a role      | `lib/data.ts` → `ROLES[i].stats[j]` / `.achievements[j]`    |
| A project case-study card                | `lib/data.ts` → `PROJECTS[i]`                               |
| The Impact-section metric grid           | `lib/data.ts` → `METRICS`                                   |
| The capability columns / skill tags      | `lib/data.ts` → `CAPABILITIES`                              |
| The trajectory list (right side, About)  | `lib/data.ts` → `JOURNEY`                                   |
| Email / phone / LinkedIn / location      | `lib/data.ts` → `SITE`                                      |
| Headline copy / hero subhead             | `components/hero/Hero.tsx`                                  |
| About body copy                          | `components/about/AboutSection.tsx`                         |
| Contact section copy                     | `components/contact/ContactSection.tsx`                     |
| Flagship bullets                         | `components/flagship/FlagshipSection.tsx` → `BULLETS`       |
| Hero marquee tags                        | `components/hero/Hero.tsx` → `MARQUEE`                      |
| Color tokens (oklch values, accent hue)  | `app/globals.css` — under `:root, .dark` and `.light`       |

### Adding a project deep-dive

1. Add the project to `lib/data.ts` (it'll appear in the grid and at `/projects/<id>`).
2. The per-project route already renders Problem / Built / Approach / Impact / Stack from that data.
3. To add long-form copy, edit `app/projects/[slug]/page.tsx` — the "Long-form write-up" block is a stub waiting for content. Either inline the copy keyed by slug, or add a new field to `Project` in `lib/types.ts` and read it from `data.ts`.

### `needsReview` and `placeholder`

See **CONTENT.md** for the full flag system. Short version: any stat with `needsReview: true` renders a small "needs review" pill; any stat with `placeholder: true` renders a "placeholder" pill. Both can be dropped by removing the flag from `lib/data.ts` once a real figure is provided.

## Deploy (Vercel)

1. Push the repo to GitHub.
2. In Vercel: **New Project → import the repo → Framework = Next.js → Root Directory = `site`** (or whatever you've named the folder containing this `package.json`).
3. No env vars needed.
4. `pnpm install && pnpm build` is the default; nothing to override.
5. After the first deploy, set the production domain to **ritinwadekar.com** in **Settings → Domains**. The `SITE.url` constant in `lib/data.ts` should match (used for OG, sitemap, canonical, Twitter card).

## Accessibility & motion

- Real semantic landmarks (`<nav>`, `<header>`, `<main>`, `<section>`, `<aside>`, `<footer>`).
- Work-section rail is a proper `role="tablist"` with arrow / Home / End keyboard navigation and `aria-selected` / `aria-controls` wiring.
- SVG visuals (Hero pipeline, Flagship pipeline, Journey map) carry `<title>` so screen readers narrate them.
- `prefers-reduced-motion: reduce` disables the cursor-reactive canvas, the flowing-packet animation, the journey-map arc, count-up animation, and the marquee transitions.
- Focus rings use the lime accent; `:focus-visible` only.

## Performance

- Lighthouse target: 100 / 100 / 100 / 100.
- Fonts via `next/font/google` (zero CLS).
- All SVGs are inline — no extra round-trips.
- Cursor-reactive canvas only animates while visible and uses `requestAnimationFrame`.
- No external scripts. No analytics by default. Add `@vercel/analytics` if Ritin wants it.

## Open content questions

See **DISCREPANCIES.md** for the running list of source inconsistencies that have been preserved verbatim with a "needs review" pill rather than silently resolved.
