# SkinCrafter technical documentation

This document contains development and repository details for contributors and integrators.

For a user-facing introduction to SkinCrafter, see the main [README.md](README.md).

## Repository layout

```text
SkinCrafter/
├── packages/
│   └── editor/       # @dihor/skincrafter-editor
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

Performance/resource measurement is intentionally separate from the normal regression suite:

```bash
npm run test:performance
```

This command runs the reproducible desktop Chrome benchmark for first render, generation, rapid changes, long-session Three.js resources, mount/unmount lifecycle and real `npm pack` distribution size. Results are written to `test-results/performance-baseline.json`. See [`P3_PERFORMANCE_BASELINE.md`](P3_PERFORMANCE_BASELINE.md) for the pinned environment, procedure, current measurements and comparison rules.

## Wardrobe content development

Use [`CONTENT_WORKFLOW.md`](CONTENT_WORKFLOW.md) when adding or changing appearance categories, options or texture assets. It defines the explicit `tintable` + `fixed` authoring model, skin-atlas versus preview-asset validation, alpha rules, Classic/Slim checks, localization requirements, package/`assetBaseUrl` safety, preview/export parity, performance comparison and the required validation sequence.

Routine content changes do not change the editor package version automatically. A public API/schema change or a release still requires a separate explicit compatibility/version decision.

## Renderer parity

The Three.js player preview is validated against the Minecraft Java player geometry and the canonical 64×64 skin atlas, including Classic/Slim arms, independent left/right limb regions, outer-layer dilation, pivot positions, alpha cutoff and pixel-perfect texture sampling.

See [`RENDERER_PARITY.md`](RENDERER_PARITY.md) for the reference baseline, exact geometry/UV contract, diagnostic skins and regression-test strategy.

## Reusable editor package

The public package is `@dihor/skincrafter-editor`. It exposes `SkinCrafterEditor`, `SkinPreview`, stable appearance/state/output types, versioned state parse/serialize helpers, locale helpers and documented host contracts.

See [`packages/editor/README.md`](packages/editor/README.md) for installation, callbacks, `Blob`/`File` skin output, controlled state, persistence adapters, schema migrations, localization, theming, asset handling and SemVer publishing.

## Standalone routes

- `/`: creator rendered by `SkinCrafterEditor` from the package.
- `/mcskinview`: PlayerDB username lookup rendered with the package `SkinPreview`.

The standalone application persists current wardrobe data under `skincrafterState` using the package's versioned serialization format. Existing `wardrobeAppearance`, `wardrobeLayerOrder` and older single-value wardrobe keys are migrated on load, and the aggregate legacy keys remain synchronized on save for backward compatibility. If an older standalone build later changes the synchronized aggregate keys, the next current build detects that valid divergence and migrates those newer user choices forward instead of overwriting them with stale `skincrafterState`. A `skincrafterState` written by an unsupported future schema is preserved byte-for-byte and persistence writes are suppressed until that record is removed or a compatible build is used. Storage ownership stays in the standalone host rather than the reusable package.

## Distribution

Editor releases use tags such as `editor-v0.1.0`. `.github/workflows/publish-editor.yml` verifies the tag/package version match, runs repository validation on the supported Node 20 baseline, attaches an npm-compatible `.tgz` to the GitHub release, and publishes the package to npm. npm Trusted Publishing (GitHub Actions OIDC) is the preferred authentication path and requires the npm package to trust `publish-editor.yml`; an `NPM_TOKEN` repository secret remains an optional fallback. The publication step uses a Trusted-Publishing-capable Node/npm runtime while normal project validation remains on Node 20. Consumers should pin released versions rather than repository source.
