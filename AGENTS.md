# AGENTS.md

## Project Summary

SkinCrafter is a web application whose main goal is to let the user compose a Minecraft character skin in a simple, readable, and approachable way.

The main page is split into two equal sections:

- the left side shows a live preview of the character
- the right side contains the appearance customization panel

The product should feel similar to character creators known from RPGs and life simulators such as The Sims: the user picks visual elements step by step and immediately sees the result.

The visual language should stay simple, blocky, and game-adjacent so it fits Minecraft and the purpose of creating character screenshots/skins for that world.

From an implementation perspective, the current app is a Vite + React + TypeScript project. The main flow is a wardrobe editor that combines texture layers and renders the result in a rotating 3D preview built with Three.js.

The repository also contains a `McSkinView` route for loading existing Minecraft skins by username. Browser requests do not go directly to Mojang profile APIs because of CORS; `src/api/fetchSkin.ts` uses PlayerDB for the profile lookup and returns a `textures.minecraft.net` skin URL for the preview.

## Tech Stack

- Vite 7
- React 18
- TypeScript with `strict: true`
- Tailwind CSS 3
- Three.js
- React Router DOM 6

## Working Commands

Run these from the repository root:

```bash
npm install
npm run dev
npm test
npm run test:e2e
npm run build
npm run preview
```

## Validation Expectations

Use these commands from the repository root when relevant:

```bash
npm test
npm run test:e2e
npm run build
```

Known gaps in the current repo:

- `README.md` mentions `npm run sitemap`, but `package.json` does not define that script.
- GitHub Actions includes `.github/workflows/test.yml` targeting `master`; treat the branch trigger as stale unless workflow configuration is updated.

When making code changes, prefer to report validation as:

- `unit tests passed` if `npm test` succeeds
- `e2e passed` if `npm run test:e2e` succeeds
- `build passed` if `npm run build` succeeds
- `not run` if dependencies are missing or the task does not justify a full install/build
- `blocked by repo configuration` for known script/workflow mismatches such as the missing sitemap script

## Repository Map

### App Entry

- `src/main.tsx`: mounts the React app and wraps it in `BrowserRouter`
- `src/pages/App.tsx`: defines routes for `/` and `/mcskinview`; the wardrobe route owns wardrobe state and texture composition
- `src/pages/McSkinView.tsx`: route for fetching a player skin by username and showing it in the same two-panel preview layout as the creator

### UI Components

- `src/components/appShell.tsx`: reusable page shell with `NBar`, `MyFooter`, language state/persistence, and footer height measurement for preview sizing
- `src/components/twoPanelLayout.tsx`: reusable responsive two-panel page layout; use this when a page should match the creator/Skin View split screen
- `src/components/panelSection.tsx`: reusable section wrapper with the standard panel heading/icon spacing
- `src/components/optionCard.tsx`: reusable pixel-styled card for option groups, forms, and panel messages; pass `heading` and `icon` when the card needs a floating label
- `src/components/pixelButton.tsx`: reusable pixel-styled button with optional Font Awesome icon; use for action buttons before hand-writing the same class list
- `src/components/previewArea.tsx`: preview panel, pose controls, overlay toggle, download button
- `src/components/wardrobe.tsx`: customization sidebar
- `src/components/wardrobe-sections/*`: section-level controls for race, skin color, hat, and placeholder eye options
- `src/components/nbar.tsx`
- `src/components/myFooter.tsx`

### 3D Preview

- `src/components/three/three-preview.tsx`: Three.js renderer, scene lifecycle, resize logic, animation loop
- `src/components/three/create-box.ts`: mesh creation helper
- `src/components/three/pose-utils.ts`: pose presets and application
- `src/components/three/skin-maps.ts`: UV maps for Minecraft skin parts

### Data and Texture Composition

- `src/data/races.ts`: canonical race list/type
- `src/data/skinColorMap.ts`: available skin colors by race
- `src/data/raceTextureMap.ts`: race base texture URLs
- `src/data/hatTextureMap.ts`: hat options and texture URLs
- `src/data/layerOrder.ts`: source of truth for texture stacking order
- `src/utils/combineTextures.ts`: combines multiple texture images on a canvas and returns a data URL

### Static Assets

- `public/textures/race/*`
- `public/textures/hat/*`
- `public/logo.png`
- `public/CNAME`

### Styles and HTML Shell

- `src/styles/main.css`: Tailwind imports plus project-specific utility classes and layout rules
- `src/styles/variables.css`: currently empty
- `index.html`: includes the Font Awesome CDN stylesheet
- `template3.html`: reference/prototype file, not part of the active Vite app runtime

## Change Guidelines

### Wardrobe and Texture Changes

When adding or changing customization options:

- Keep `src/data/*` as the source of truth for option lists and texture mappings.
- Add new texture assets under `public/textures/...` and update the relevant map file in the same change.
- If the option should appear in the UI, wire it through the appropriate `wardrobe-sections` component and through `src/components/wardrobe.tsx`.
- If layer ordering matters, update `src/data/layerOrder.ts` and verify the result in the 3D preview.

### Preview and Three.js Changes

When modifying the 3D viewer:

- Preserve pixel-art rendering behavior such as `NearestFilter`, disabled mipmaps, and transparent overlays.
- Keep cleanup logic intact. The current preview disposes geometries, materials, textures, animation frames, and renderer DOM nodes on teardown.
- Be careful with layout math involving `footerHeight` and `bottomOffset`; it is there to keep the preview visible across viewport sizes.
- Test both desktop and mobile-sized layouts after UI or sizing changes.

### State and Persistence

The wardrobe currently persists selections in `localStorage` under:

- `wardrobeAppearance`
- `wardrobeRace`
- `wardrobeSkinColor`
- `wardrobeHat`

If you rename or extend persisted settings, update both read and write paths in `src/pages/App.tsx`.

The app language persists in `localStorage` under:

- `skincrafterLanguage`

Language state is owned by `src/components/appShell.tsx` so all routes using `AppShell` share the same navbar language selector and translation helper.

### Routing

`BrowserRouter` is present in `src/main.tsx`, and `src/pages/App.tsx` defines `<Routes>` for:

- `/`: wardrobe creator
- `/mcskinview`: Minecraft username skin loader

If a task requires a new page, add it explicitly to `src/pages/App.tsx` and prefer wrapping the page body in `AppShell`.

### Styling

- Prefer existing Tailwind utility usage and the established Minecraft/pixel UI look.
- Before adding repeated layout/card/button class lists, check the reusable UI components above.
- Put reusable project-specific styles in `src/styles/main.css` instead of scattering large custom CSS blocks across components.
- Font Awesome icons are loaded from `index.html`; if an icon change fails, verify the CDN dependency before changing component code.

## CI and Deployment Notes

- `.github/workflows/build.yml` builds on pushes and pull requests.
- `.github/workflows/gh-pages.yml` deploys `dist/` from the `main` branch.
- `.github/workflows/test.yml` currently targets `master` and calls `npm test`; treat it as stale/incomplete until the scripts and dependencies are aligned.
- Preserve `public/CNAME` unless the task explicitly changes deployment/domain setup.

## Practical Guardrails For Agents

- Make targeted changes. Avoid broad rewrites unless the task clearly requires them.
- Do not "fix" unrelated config drift unless the user asks for it. This repo has a few real mismatches between docs, scripts, and workflows.
- Some source comments already show encoding artifacts. Avoid mass reformatting or re-encoding files unless you are intentionally cleaning that up.
- If you add a new dependency, update `package.json` and the lockfile together.
- If you change user-visible behavior, include a short note about how to verify it locally.
