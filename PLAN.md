# Build plan — ritinwadekar.com

## Stack

| Layer        | Choice                              | Why                                                                                  |
| ------------ | ----------------------------------- | ------------------------------------------------------------------------------------ |
| Framework    | Next.js 14 (App Router) + TS strict | Per spec. RSC where safe, `"use client"` only where the prototype actually needs it. |
| Styling      | Tailwind v3 + CSS variables         | All prototype oklch tokens become CSS vars in `globals.css` and Tailwind theme refs. |
| Motion       | Framer Motion 11 (`whileInView`)    | Replaces the 4-tier `useReveal` IntersectionObserver fallback hack.                  |
| Counters     | `useMotionValue` + `animate`        | Replaces `useCountUp`.                                                               |
| Theming      | `next-themes` (class strategy)      | Light/dark toggle; dark is the current design, light inverts surfaces.               |
| Fonts        | `next/font/google`                  | Geist · Geist Mono (we use as JetBrains Mono fallback chain) · Instrument Serif.     |
| Deploy       | Vercel                              | Default — no custom build steps.                                                     |

> **Mono font note:** JetBrains Mono is not on Google Fonts under `next/font/google`. We load Geist Mono via `next/font` and put JetBrains Mono first in the CSS `font-family` stack so machines that already have it installed (most devs) still see it. Could switch to `next/font/local` later if Ritin wants pixel-perfect parity.

## File structure

```
site/
├── app/
│   ├── layout.tsx                # fonts, theme provider, metadata
│   ├── page.tsx                  # single-page composition
│   ├── globals.css               # oklch tokens (dark + light), prototype CSS ported
│   ├── projects/
│   │   └── [slug]/page.tsx       # per-project deep-dive (stub, data-driven)
│   ├── sitemap.ts
│   ├── robots.ts
│   └── opengraph-image.tsx       # dynamic OG (1200x630)
├── components/
│   ├── nav/Nav.tsx
│   ├── hero/Hero.tsx
│   ├── hero/HeroGrid.tsx
│   ├── hero/PipelineGlance.tsx
│   ├── work/WorkSection.tsx
│   ├── work/WorkCard.tsx
│   ├── flagship/FlagshipSection.tsx
│   ├── flagship/PipelineDiagram.tsx
│   ├── metrics/MetricsSection.tsx
│   ├── metrics/MetricCard.tsx
│   ├── metrics/Spark.tsx
│   ├── projects/ProjectsSection.tsx
│   ├── projects/ProjectCard.tsx
│   ├── capabilities/CapabilitiesSection.tsx
│   ├── about/AboutSection.tsx
│   ├── about/JourneyMap.tsx
│   ├── contact/ContactSection.tsx
│   ├── ui/SectionNum.tsx
│   ├── ui/NeedsReview.tsx
│   ├── ui/ThemeProvider.tsx
│   └── ui/ThemeToggle.tsx
├── lib/
│   ├── data.ts                   # typed port of data.jsx (single source of truth)
│   └── types.ts                  # Role, Stat, Achievement, Metric, Project, ...
├── public/
│   └── (favicon, og fallbacks)
├── DISCREPANCIES.md
├── CONTENT.md
├── README.md
├── PLAN.md                       # this file
└── package.json
```

## What gets preserved vs improved

**Preserved verbatim** — same shape, same numbers, same SVGs:
- All ROLES / METRICS / PROJECTS / CAPABILITIES / JOURNEY data.
- The two `needsReview: true` metrics (0%, 0×) — explicitly kept.
- The Conagra `placeholder: true` `$XXK` slot.
- Hero pipeline SVG (8 nodes, packet animation, legend, opacity / glow filter).
- Flagship pipeline SVG (4 lanes, before/after compare, footer notes).
- Cursor-reactive dot grid math (28px gap, 160px radius, oklch glow).
- Journey map SVG (arc, dashed path, three city stops).
- Section ordering: Hero → Work → Flagship → Metrics → Projects → Capabilities → About → Contact.

**Improved** — same output, cleaner mechanism:
- `useReveal` → `motion.div whileInView once viewport={{margin:"-8%"}}`. The 4-tier fallback was a sandbox workaround; in real Next.js IO works the first time.
- `useCountUp` → `useMotionValue` + `animate({onUpdate})` inside `whileInView`.
- React stops touching `window` globals — proper ESM imports.
- Light/dark toggle via `next-themes`; light theme is the same lime accent on inverted surfaces.
- Per-project route `/projects/[slug]` reads from the same `lib/data.ts` — stub today, ready for long-form copy later.
- `prefers-reduced-motion` disables the canvas grid, packet animation, journey arc, count-ups, and marquee.

## Open questions (won't block — defaults noted)

1. **Real Conagra cost-savings figure.** Stays `$XXK` w/ placeholder pill until provided.
2. **0% and 0× metrics.** Kept verbatim w/ "needs review" pill; reconciled list in `DISCREPANCIES.md`.
3. **OG image.** Using a Next.js dynamic OG (text-only on dark + lime accent). Replace with a hand-shot image later if desired.
4. **JetBrains Mono.** Loaded via system + Geist Mono fallback. Easy upgrade to `next/font/local` with the official .woff2 files.
5. **Per-project long-form copy.** Routes exist; bodies pull `problem/built/approach/impact/tech` from `data.ts`. Long-form sections to be added when Ritin writes them.

## Quality bar

Targeting Lighthouse 100/100/100/100, real semantic landmarks (`<header><main><section><nav>`), full keyboard nav on the work-rail, `aria-current="page"` on active rail item, `aria-label` on icon-only controls, focus rings that respect the lime accent, `tabular-nums` on every metric, `<title>` tags inside SVGs for screen reader narration of the pipeline visuals.
