# AGENTS.md

## Project Summary

SkinCrafter is a React + TypeScript Minecraft skin creator. The repository is an npm workspace with one authoritative reusable editor package and a standalone web application that consumes that package.

The key architectural rule is that editor behavior must never be duplicated in the standalone app or in an external host. `packages/editor` is the product surface for the creator and preview; `apps/standalone` is only a host shell.

## Tech Stack

- Node.js 20
- npm workspaces
- Vite 7
- React 18
- TypeScript with `strict: true`
- Tailwind CSS 3
- Three.js
- React Router DOM 6 in the standalone app
- Vitest + Testing Library
- Playwright

## Working Commands

Run these from the repository root:

```bash
npm install
npm run dev
npm run lint
npm test
npm run test:e2e
npm run build
npm run preview
```

Validation should normally include:

- `npm run lint`
- `npm test`
- `npm run test:e2e`
- `npm run build`

## Repository Map

### Reusable package: `packages/editor`

`@pawelwielga/skincrafter-editor` is the authoritative editor implementation and public integration contract.

- `src/SkinCrafterEditor.tsx`: reusable editor component and host-controlled state contract
- `src/SkinPreview.tsx`: reusable read-only Three.js skin preview
- `src/publicTypes.ts`: public props, state, persistence, output and theme types
- `src/skinOutput.ts`: converts generated PNG data into upload-ready `Blob`/`File` output
- `src/assetResolver.ts`: bundled/default texture resolution plus optional host asset prefix
- `src/components/wardrobe.tsx`: customization controls and layer ordering
- `src/components/previewArea.tsx`: preview controls and save/download action
- `src/components/three/*`: Three.js scene, body geometry, UV maps and pose handling
- `src/data/appearance.ts`: appearance model, normalization, option lists and texture composition inputs
- `src/assets/textures/*`: package-owned texture assets
- `src/i18n/translations.ts`: editor translations and public locale helpers
- `src/utils/combineTextures.ts`: pixel-preserving canvas texture composition
- `src/styles/*`: scoped package styling and host theme variables
- `src/index.ts`: the only supported public import surface

### Standalone app: `apps/standalone`

The standalone site consumes the package exactly like an external host.

- `src/pages/App.tsx`: routes `/` and `/mcskinview`; creator route renders `SkinCrafterEditor`
- `src/pages/McSkinView.tsx`: PlayerDB username lookup and packaged `SkinPreview`
- `src/components/appShell.tsx`: standalone navbar/footer shell and persisted language setting
- `src/components/nbar.tsx`: standalone navigation/language selector
- `src/api/fetchSkin.ts`: PlayerDB lookup; networking stays outside the reusable editor
- `src/styles/main.css`: standalone shell styling only
- `public/CNAME`: deployment domain configuration; preserve it unless deployment is intentionally changed

### Root

- `tests/e2e/layout.spec.ts`: desktop/mobile standalone integration tests
- `playwright.config.ts`: e2e configuration
- `.github/workflows/build.yml`: lint/unit/build CI
- `.github/workflows/test.yml`: Playwright CI
- `.github/workflows/gh-pages.yml`: standalone deployment from `apps/standalone/dist`
- `.github/workflows/publish-editor.yml`: versioned editor package release/publish workflow

## Package Boundary Rules

- Do not move editor state, wardrobe controls, texture composition or Three.js implementation back into `apps/standalone`.
- Do not add VanillaOdyssey-specific networking, authentication or routing to `packages/editor`.
- Do not make `localStorage` a package dependency. Persistence must go through `SkinCrafterPersistenceAdapter` or host-controlled state.
- Do not introduce iframe or DOM/canvas scraping as an integration contract.
- External consumers import only from `@pawelwielga/skincrafter-editor`, never repository-internal paths.
- Keep the public API deliberately small and strongly typed.

## Assets

Package texture assets live in `packages/editor/src/assets/textures` and are bundled by Vite. Do not introduce root-relative assumptions such as `/textures/...` into reusable package code.

If a host needs to serve a compatible asset set itself, use the documented `assetBaseUrl` resolver path so embedding under routes such as `/character` remains safe.

## State, Persistence and Locale

The reusable package accepts initial state, controlled state, callbacks and an optional persistence adapter. It does not own browser persistence.

The standalone app currently persists:

- `wardrobeAppearance`
- `wardrobeLayerOrder`
- `skincrafterLanguage`

Legacy wardrobe keys may be read by the standalone migration adapter, but new persistence logic still belongs to the standalone host.

Locale is a package prop. The standalone language selector owns its language state and passes the selected locale into the package.

## Preview and Three.js Guardrails

When changing the viewer:

- preserve `NearestFilter`
- keep mipmaps disabled for Minecraft pixel textures
- preserve transparent second-layer overlays
- preserve geometry/material/texture disposal
- cancel animation frames and remove renderer DOM nodes on teardown
- keep resize handling and device-pixel-ratio clamping
- test classic and slim models when body geometry changes

## Styling

Package CSS must remain scoped under `.skincrafter-editor`; package Tailwind preflight is intentionally disabled so importing the editor does not reset a host application.

Prefer existing CSS variables and semantic package classes before introducing host-specific style forks. The documented variables are the supported theme boundary.

## Release and Versioning

`packages/editor/package.json` is the source of truth for the editor SemVer version. Editor releases use tags `editor-v<version>`.

The release workflow must:

1. verify the release tag matches the package version,
2. run lint/tests/e2e/build,
3. create and attach an npm-compatible `.tgz` package artifact,
4. publish to the public npm registry when `NPM_TOKEN` is configured.

Production consumers must pin a released version. Do not make consumers depend on a workspace symlink, copied source or an unversioned branch.

## Change Guidelines

- Keep changes targeted, but architectural issues may legitimately span both workspaces and root CI/config.
- When adding a dependency, update `package.json` and `package-lock.json` together.
- Preserve `apps/standalone/public/CNAME` unless deployment/domain work explicitly requires otherwise.
- Do not mass-reformat unrelated files.
- When user-visible behavior changes, include a local verification note.
- Add package-level tests for public contract changes and standalone integration/e2e coverage when host behavior changes.
