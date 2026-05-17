# Discrepancies between sources

Source of truth: `ritinwadekar.md`. Cross-checked against the prototype's `src/data.jsx` and the resume PDF.
Each row preserved verbatim per project instruction — flagged here so Ritin can resolve before the next ship.

---

## 1. AI Engineer · "0% Coding error rate" vs "7.66%" (internal to the markdown)

| Where in markdown                                              | Value                          |
| -------------------------------------------------------------- | ------------------------------ |
| `## 01 – Selected Work · Key Stats`                            | **0%** coding error rate       |
| `AI Engineer · Stats`                                          | **0%** coding error rate       |
| `AI Engineer · Achievement 03` ("achieving 7.66% error rate")  | **7.66%** error rate           |
| `Achievement 03` body ("Achieved an error rate under 7.66%")   | **<7.66%** error rate          |

Two different numbers for the same metric, in the same document.
**Likely intent:** the achievement copy is authoritative — `<7.66%`. The `0%` in the Stats blocks looks like a typo / placeholder that wasn't filled in.

**Action when Ritin confirms:** flip both `AI Engineer · stats[0]` and `METRICS["Coding Error Rate"]` to `7.66%`, drop the `needsReview` flag.

Currently rendered with a "needs review" pill.

---

## 2. AI Engineer · "0× More accurate" vs "3×" (internal to the markdown)

| Where in markdown                                                                                    | Value                |
| ---------------------------------------------------------------------------------------------------- | -------------------- |
| `## 01 – Selected Work · Key Stats`                                                                  | **0×** more accurate |
| `AI Engineer · Stats`                                                                                | **0×** more accurate |
| `AI Engineer · Achievement 04` ("outperforming standard LLM baselines by over 3× in prediction…")    | **3×** more accurate |

Same pattern as above. Likely intent: `3×`.

**Action when Ritin confirms:** flip both `AI Engineer · stats[1]` and `METRICS["Accuracy Lift"]` (which is already `3×`) — keep only one and drop the duplicate.

Currently rendered with a "needs review" pill.

---

## 3. Conagra · "$XXK cost savings"

| Where in markdown               | Value     |
| ------------------------------- | --------- |
| `Conagra Brands · Stats`        | **$XXK**  |

Explicit placeholder per Ritin's instruction. Resume PDF cross-check: same placeholder language ("driving cost savings" — no figure).

**Action when Ritin provides the figure:** drop `placeholder: true` from `Conagra.stats[2]`, set `num` to e.g. `$120K`.

Currently rendered with a "placeholder" pill.

---

## 4. Timing of the medical coding pipeline

| Source                                            | Value                            |
| ------------------------------------------------- | -------------------------------- |
| `AI Engineer` role dates                          | **Jan 2026 – Present**           |
| `AI Engineer` achievement 01                      | "Delivered… in **2 months**"     |
| Today (build date)                                | 2026-05-15                       |

Not strictly inconsistent — the 2-month delivery could have been Jan–Mar 2026 with the role continuing post-ship. Flagging in case the "in 2 months" copy ages out and should become "in Q1 2026" once Ritin moves to the next phase.

No data change. Tracked for future copy maintenance.

---

## 5. Roles count phrasing

`ritinwadekar.md` says "Onpoint Insights — 3 Roles · May 2024 – Present". The data confirms 3 roles (Intern → DS → AI Eng) on Onpoint, plus Conagra and Galileo — total 5 roles across 3 companies. The hero subhead "Three companies. Five roles." matches; no action.

---

## Resolution workflow

Once a real number is in hand:

1. Edit `lib/data.ts` — change `num` and remove the `needsReview` (or `placeholder`) field on that stat / metric.
2. Run `pnpm build` — no other file changes needed; the pill disappears automatically.
3. Optionally edit this file to strike through the resolved row.
