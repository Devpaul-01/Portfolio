# Portfolio — full repo, with Increments 1 & 2 applied

This is your complete project — every existing file — with the homepage
restructure already applied. Unzip over (or in place of) your working
copy, add your `src/assets/` images (not included; see below), run
`npm install`, and you're set.

## What's new or changed (10 files)

- `src/App.tsx` — replaced. Now wires `react-router-dom` instead of
  rendering `Portfolio` directly.
- `src/pages/HomePage.tsx` — new. The portfolio shell (hero, about,
  skills, ownership, contact) plus the new Projects section, in place of
  the three inline project fragments.
- `src/pages/ProjectPage.tsx` — new. Renders one project's full case
  study at its own route (`/projects/kith`, `/projects/studyhub`,
  `/projects/foundersales`), with a back link above and a next-project
  footer + Contact below.
- `src/components/ProjectCard.tsx` — new. The homepage card (featured
  variant for Kith, compact for the other two).
- `src/components/ScrollManager.tsx` — new. Scroll-to-top on route
  change, honors back/forward, scrolls to a `#hash` when present.
- `src/sections/Projects.tsx` — new. Renders the three `ProjectCard`s.
- `src/content/projectsIndexContent.ts` — new. Card copy. Every
  highlight/stat has a `source` comment pointing at the exact field in
  your existing content files it came from.
- `src/content/sectionIds.ts` — new. Your original ~60-entry
  `LedgerRule` tracking array, split into one list per route. Verified:
  every original id/label pair preserved exactly.
- `src/hooks/useDocumentTitle.ts` — new. Sets `document.title` per route.
- `vercel.json` — new, repo root. Rewrite so `/projects/kith` doesn't
  404 on a hard refresh or shared link.

## What's removed

- `src/Portfolio.tsx` — deleted. Fully replaced by `HomePage.tsx` +
  `ProjectPage.tsx`.

## What's unchanged (everything else)

All shared components (`LedgerRule`, `ImageFigure`, `DiagramFigure`,
`Lightbox`, `EngineeringCallout`, `StatRow`, `SectionHeading`), all shell
sections, all Kith/StudyHub/FounderSales section components, all three
`*Project.tsx` fragments (verified byte-identical to your originals),
and all four existing content files. `package.json` /
`package-lock.json` are your originals plus `react-router-dom` (already
added — `npm install` picks it up). `README.md` in this zip is your
original, untouched — these notes live in this separate file instead.

## Assets

`src/assets/` is intentionally empty/absent in this zip — you said you'd
add those yourself. All ~50 image imports across the content files
expect files at the same paths/names they already reference (nothing
renamed).

## Setup

```
npm install
```

(`react-router-dom` is already in `package.json`; this installs it along
with everything else.)

## Verified before packaging

- Assembled this exact tree with stub placeholder assets and ran
  `tsc --noEmit` against your real `tsconfig.app.json`: clean, aside from
  two pre-existing unused-import warnings in your own `studyHubContent.ts`
  that predate this change and aren't touched by it.
- Ran a full `vite build` against this exact tree: succeeds.
- Diffed the new split `sectionIds.ts` against your original array: all
  60 original id/label pairs intact, no duplicates, only addition is the
  new `projects` entry for the homepage section.
- Confirmed all three `*Project.tsx` fragments are byte-identical to
  what you gave me — no section inside them was touched.

## Not done (you said not to worry about it for now)

- Per-route meta description beyond the title `useDocumentTitle` sets
- Retiring `StudyHubDivider.tsx` / `FounderSalesDivider.tsx` — they're no
  longer rendered anywhere (their render sites were removed along with
  `Portfolio.tsx`), but the files are still present in
  `src/sections/studyhub/` and `src/sections/foundersales/`. Harmless to
  leave; delete whenever you like.
