# SkinCrafter

SkinCrafter is a React + TypeScript Minecraft skin creator. The repository is now a small npm workspace with one authoritative reusable editor implementation and a standalone website that consumes it.

## Repository layout

```text
SkinCrafter/
├── packages/
│   └── editor/       # @pawelwielga/skincrafter-editor
└── apps/
    └── standalone/   # skincrafter.dihor.pl / GitHub Pages app
```

`packages/editor` owns the wardrobe UI, appearance model, texture composition, packaged texture assets, localization used by the editor, Three.js preview and the versioned state serialization/migration contract. `apps/standalone` owns routing, navbar/footer, persisted language, local wardrobe storage, PlayerDB skin lookup and deployment shell.

There is no second editor implementation in the standalone app.

## Local development

Node 20 is the supported runtime.

```bash
npm install
npm run dev
```

The root `dev` command builds the reusable package first and then starts the standalone Vite app.

## Validation

```bash
npm run lint
npm test
npm run test:e2e
npm run build
npm run test:consumer
```

The root commands validate both workspaces. The e2e suite proves that the standalone creator route renders the packaged editor and that `/mcskinview` uses the packaged preview. The consumer smoke test installs the real packed editor artifact in a clean external project.

## Reusable editor package

The public package is `@pawelwielga/skincrafter-editor`. It exposes `SkinCrafterEditor`, `SkinPreview`, stable appearance/state/output types, versioned state parse/serialize helpers, locale helpers and documented host contracts.

See [`packages/editor/README.md`](packages/editor/README.md) for installation, callbacks, `Blob`/`File` skin output, controlled state, persistence adapters, schema migrations, localization, theming, asset handling and SemVer publishing.

## Standalone routes

- `/`: creator rendered by `SkinCrafterEditor` from the package.
- `/mcskinview`: PlayerDB username lookup rendered with the package `SkinPreview`.

The standalone application persists current wardrobe data under `skincrafterState` using the package's versioned serialization format. Existing `wardrobeAppearance`, `wardrobeLayerOrder` and older single-value wardrobe keys are migrated on load, and the aggregate legacy keys remain synchronized on save for backward compatibility. Storage ownership stays in the standalone host rather than the reusable package.

## Distribution

Editor releases use tags such as `editor-v0.1.0`. `.github/workflows/publish-editor.yml` verifies the tag/package version match, runs validation, attaches an npm-compatible `.tgz` to the GitHub release, and also publishes to npm when `NPM_TOKEN` is configured. Consumers should pin released versions rather than repository source.
