# Content guide — needsReview & placeholder flags

The site treats `lib/data.ts` as the **single source of truth**. Two flags exist on stats and metrics to handle source content that's known-incomplete or known-inconsistent.

## `needsReview: true`

Use when the source markdown (`ritinwadekar.md`) contains a number that is verifiably inconsistent with another number in the same document, *and you want to ship the site without silently picking one*. The UI renders a small dashed amber "**needs review**" pill next to the stat.

**Currently flagged** (see `DISCREPANCIES.md` for the long version):

| File location                          | Stat                              | Source value | Conflicts with                |
| -------------------------------------- | --------------------------------- | ------------ | ----------------------------- |
| `ROLES[0].stats[0]` (AI Engineer)      | "Coding error rate"               | `0%`         | Achievement 03 says `<7.66%`  |
| `ROLES[0].stats[1]` (AI Engineer)      | "More accurate than LLM baseline" | `0×`         | Achievement 04 says `3×`      |
| `METRICS[0]` ("Coding Error Rate")     | —                                 | `0%`         | Same issue as `ROLES[0].stats[0]` |
| `METRICS[1]` ("Accuracy vs LLM Baseline") | —                              | `0×`         | Same issue as `ROLES[0].stats[1]` |

## `placeholder: true`

Use when the source contains a literal placeholder string (e.g. `$XXK`) that's waiting on a real figure. The UI renders a "**placeholder**" pill.

**Currently flagged:**

| File location                       | Stat              | Source value |
| ----------------------------------- | ----------------- | ------------ |
| `ROLES[3].stats[2]` (Conagra Brands) | "Cost savings"    | `$XXK`       |

## Resolving a flag

1. Open `lib/data.ts`.
2. Find the stat/metric entry.
3. Update the `num` field with the resolved value.
4. **Remove** the `needsReview: true` or `placeholder: true` field entirely. (Don't set it to `false` — the type is optional.)
5. `pnpm build` — the pill disappears.
6. Optionally cross out the resolved row in `DISCREPANCIES.md`.

## Adding a new `needsReview` flag

If a future copy update introduces another inconsistency you don't want to silently resolve:

```ts
{ num: "12.5%", label: "...", needsReview: true }
```

That's it. Both the work-card and the metrics-grid card pick up the flag automatically.

## Why this exists

The brief was strict: "Do not silently 'fix'" inconsistencies in the source. Flagging instead of editing keeps the markdown authoritative *and* makes the open questions visible on the rendered page — so the next editorial review can resolve them without anyone having to remember they exist.
