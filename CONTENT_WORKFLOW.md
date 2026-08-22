# Wardrobe content workflow

This is the contributor workflow for adding or changing SkinCrafter appearance categories, options and texture assets in `packages/editor`.

The goal is to make content work routine without bypassing package isolation, Minecraft skin correctness, preview/export parity or the performance baseline established in #119. The explicit `tintable` + `fixed` model from #134 is authoritative. Runtime code must never infer authoring intent from pixel RGB values.

## Current content contract

SkinCrafter already has the two small registries needed at the current content scale:

1. `packages/editor/src/assetResolver.ts` is the typed logical-path -> packaged-URL manifest. Every package-owned runtime asset used by code must be registered there and imported with `?url&no-inline`.
2. The files below `packages/editor/src/data/` map semantic appearance choices to those typed logical paths. Texture-backed wardrobe items additionally use `WardrobeItemDefinition`, which requires one explicit `skinModel: 'classic' | 'slim'` for the whole logical item.

A second schema/manifest system is not justified today. It would duplicate the runtime mapping while the content set is still small and statically typed. `verify-texture-atlases.mjs`, TypeScript, unit tests, package verification and the external-consumer smoke test provide the required automated checks without introducing a new architecture.

If content volume later makes the same metadata drift across many files, create a separate focused issue before introducing a generated or declarative manifest. That issue must define migration, validation and build implications instead of growing this workflow implicitly.

## Asset classes

The source folder is `packages/editor/src/assets/textures/`, but not every PNG below it is a Minecraft skin atlas.

| Asset class | Location today | Dimension contract | Alpha contract | Notes |
| --- | --- | --- | --- | --- |
| Runtime Minecraft skin layer | Every texture PNG outside `textures/preview/` | Exactly 64×64 | PNG must have an explicit alpha channel. Individual pixels may be transparent, translucent or opaque. A particular file is not required to contain a transparent pixel. | Composited pixel-exactly into generated skins. |
| Preview-only fallback | `textures/preview/` | No artificial 64×64 requirement | Alpha is optional. Transparent and opaque preview artwork are both valid. | UI fallback only; not a semantic wardrobe layer. |
| Future non-skin asset | Must have an explicitly documented location/contract before addition | Define for that asset type | Define whether transparency is allowed, required or forbidden | Do not silently put it under the skin-atlas rules. |

No current asset class requires every pixel to be opaque. If a future asset type has that requirement, add an explicit validator for that class rather than applying it globally.

`packages/editor/scripts/verify-texture-atlases.mjs` runs from `verify:package` and therefore from the package build. It validates PNG headers, classifies preview assets separately, requires runtime layers to be 64×64 with explicit alpha, and checks paired `*.tintable.png` / `*.fixed.png` definitions for compatible atlas dimensions.

## Tintable and fixed layers

A texture-backed option can have at most two authored layers:

- `tintable`: drawn first and recolored by the selected SkinCrafter color while preserving authored shading/intensity and source alpha;
- `fixed`: drawn second and never recolored. Authored RGB and alpha are preserved.

At least one layer is required. Supported combinations are:

- tintable only;
- fixed only;
- tintable + fixed.

For mixed artwork, prefer matching names such as `item.tintable.png` and `item.fixed.png`. Both files represent one logical option and one reorderable category layer. They are not independent wardrobe items.

For wardrobe content, the `skinModel` metadata is also attached once to that logical item, never independently to its tintable/fixed halves. All authored layers of one wardrobe item therefore target the same Classic or Slim geometry.

Gray, white, black and chromatic pixels may exist in either authored layer. Their RGB value has no semantic meaning. If a gray or black detail must never change color, put it in `fixed`; do not add grayscale detection or magic-color heuristics.

A fixed-only option must not expose an apparently effective color selector. Existing color controls use `isColorControlEffective()` and the presence of a real tintable layer to decide whether the control is useful.

## Adding a new texture asset

1. Decide whether the file is a runtime skin atlas or a non-skin asset.
2. For a runtime layer, author a 64×64 PNG using the canonical Minecraft skin UV layout. Keep an explicit alpha channel. Do not resize or smooth the atlas as part of the runtime pipeline.
3. If the option is mixed, split recolorable and authored-color pixels into complementary `*.tintable.png` and `*.fixed.png` files with the same UV layout.
4. Put the file below `packages/editor/src/assets/textures/` in the appropriate semantic directory.
5. Add a `?url&no-inline` import and stable logical `textures/...` entry to `packages/editor/src/assetResolver.ts`. Never use root-relative `/textures/...` paths.
6. Reference only the typed logical asset path from the appropriate data mapping. Use `defineTextureLayers()` for tintable/fixed definitions. For wardrobe items wrap those layers in `defineWardrobeItem({ skinModel, textureLayers })`; the model is mandatory and has no fallback.
7. Run package validation. The source validator checks the atlas contract before build packaging; `verify-package.mjs` then proves emitted PNG bytes are unchanged, hashed/cache-safe, referenced by the bundle and present in `npm pack` output.
8. Verify the normal package and external-consumer scenarios so the same logical path works with emitted package URLs and with `assetBaseUrl` below a non-root host route.

### Classic and Slim

Every runtime layer uses the full 64×64 Minecraft atlas. If artwork touches UV regions whose geometry differs between Classic and Slim, author the correct model-specific variant rather than resampling or reinterpreting the pixels at runtime.

Every texture-backed wardrobe definition must declare exactly one model for the whole item:

```ts
defineWardrobeItem({
  skinModel: 'classic', // or 'slim'
  textureLayers: defineTextureLayers({
    tintable: 'textures/top/example.tintable.png',
    fixed: 'textures/top/example.fixed.png',
  }),
});
```

Missing or unsupported model metadata is invalid; runtime validation must reject it rather than silently assuming Classic. The wardrobe UI exposes only definitions compatible with the active model, normalization removes incompatible selections after a model change, and the compositor independently filters incompatible definitions as a final correctness boundary.

If one visual design supports both models, create two explicit model-specific wardrobe definitions. Assets that touch arms or outer-arm layers must use the correct Classic/Slim UV positions. A genuinely model-independent fixed asset may be referenced from both definitions, but the compatibility decision still belongs to each whole logical item.

A content change that affects arms, outer arm layers or model-dependent UVs must exercise both model paths and preserve the contract in `RENDERER_PARITY.md`. Existing Human Male/Female race variants demonstrate model-specific base-skin selection. Current packaged `Duck`, `Hoodie` and `Pants` wardrobe assets are explicitly Classic-only.

## Adding a new option to an existing category

1. Add the semantic option ID to the owning data source, for example a category option array/map or an explicit mapping in `appearance.ts`.
2. If it uses artwork, register its asset path(s) in `assetResolver.ts` and map them through the package data layer. Do not import assets from a host application.
3. Choose the layer contract deliberately:
   - `defineTextureLayers({ tintable: ... })` for fully recolorable artwork;
   - `defineTextureLayers({ fixed: ... })` for artwork that never recolors;
   - `defineTextureLayers({ tintable: ..., fixed: ... })` for mixed artwork.
4. For a texture-backed wardrobe item, wrap the layer definition in `defineWardrobeItem()` and set the required whole-item `skinModel` to `classic` or `slim`. Do not attach a model separately to internal tintable/fixed layers and do not add an implicit fallback.
5. Add the option label to both English and Polish translations for choice controls.
6. Verify normalization/default behavior. Removed, unknown or model-incompatible IDs must fall back through the semantic normalization contract.
7. Add or update tests that prove the option resolves the expected layer(s), model compatibility, tint behavior and `assetBaseUrl` path. Model-sensitive content must cover both accepted and rejected models.
8. If the option is reorderable, confirm it remains one logical category entry even when it has two internal texture layers.

Color swatches are data rather than translated choice labels, so the localization completeness test intentionally covers categories/options with `control: 'choice'`.

## Adding a new category

A new category is not only an asset addition. `AppearanceCategoryId` and `AppearanceState` are part of the package's semantic/public state contract, so category work must be reviewed as an API/schema change.

1. Create or use a focused issue that explicitly justifies the public-state change and its compatibility impact. Do not smuggle a new public category through an unrelated content PR.
2. Update `AppearanceCategoryId`, `appearanceCategories` and `defaultAppearance`.
3. Decide whether the category is a choice or color control.
4. Implement its option source in `getOptions()` and its texture input mapping in the package data layer.
5. If it is an independently reorderable wardrobe layer, update `TextureLayerCategoryId`, `textureLayerCategories` and normalization/migration expectations. Internal tintable/fixed halves are never separate reorderable categories.
6. Add `category.<id>` labels in both `en` and `pl`, plus translated choice option labels.
7. Review persisted-state compatibility. If the change cannot be normalized safely inside the current schema contract, advance the versioned schema and add an explicit migration rather than silently changing stored semantics.
8. Review every exported TypeScript type affected by the new required field. Use the appropriate SemVer level when the owner explicitly decides to prepare a release; ordinary content work must not bump the package version automatically.
9. Exercise creator UI, normalization, generation, preview, save output and controlled/persisted state for the new category.

Host-specific storage, APIs or routing never belong in this category contract.

## Preview and export parity

There is one composition contract. `buildTextureInputs*()` produces ordered logical inputs and `combineTextures()` performs the pixel composition. For every logical option, tintable content is emitted immediately before its fixed overlay.

The generated 64×64 PNG is the authoritative output used by `onSkinChange` / `onSave`, and the editor preview must display that same current generated output. Do not add a separate preview-only wardrobe compositor.

Regression coverage relevant to content changes includes:

- `src/data/appearance.test.ts` for logical layer ordering, model filtering/normalization, fixed-only/tintable-only/mixed options and `assetBaseUrl` resolution;
- `src/data/wardrobeDefinitions.test.ts` for required Classic/Slim metadata and rejection of missing/unknown model values;
- `src/components/wardrobe.texture-layers.test.tsx` for model-aware UI filtering and effective color controls;
- `src/data/contentWorkflow.test.ts` for the documented Human/Male reference option and EN/PL choice-label completeness;
- `src/utils/combineTextures.layer-composition.test.ts` for no-smoothing composition, tintable-first ordering and unchanged fixed overlays;
- `src/SkinCrafterEditor.preview-output.test.tsx` for preview/generated-output parity;
- `src/assetResolver.test.ts` for package-owned and host-base URL resolution;
- package verification and `test:consumer` for packed/installed consumption without private imports.

## Reference content: Human / Male

`Human / Male` is the workflow reference for a mixed colorable option:

1. `race/human/male.tintable.png` and `race/human/male.fixed.png` are authored 64×64 runtime atlas layers.
2. Both logical paths are registered by `assetResolver.ts` and therefore work with package-emitted URLs and a host `assetBaseUrl`.
3. `raceTextureMap.ts` declares one mixed option with `defineTextureLayers()`.
4. `contentWorkflow.test.ts` verifies the option resolves both host-relative paths and produces `tintable -> fixed` texture inputs.
5. `combineTextures.layer-composition.test.ts` verifies that the first layer is tinted without smoothing and the fixed overlay is drawn afterward unchanged.
6. `verify-texture-atlases.mjs` verifies source PNG/size/alpha and pair dimensions.
7. `verify-package.mjs` verifies byte-identical cache-safe emitted assets and their inclusion in the packed package.
8. `test:consumer` verifies the packed editor in an external non-root-route consumer.

The existing Bear race additionally covers fixed-only behavior, while Small eyes cover tintable-only behavior.

## Required validation for content PRs

From the repository root, run the normal `AGENTS.md` validation baseline:

```bash
npm audit --omit=dev --audit-level=high
npm run lint
npm test
npm run test:e2e
npm run build
npm run test:consumer
```

`npm run build` includes `verify:package`, which includes the source texture contract check and package/consumer type checks.

When a change adds or materially changes assets, also run the reproducible performance/resource measurement:

```bash
npm run test:performance
```

Compare the result in the same environment with `P3_PERFORMANCE_BASELINE.md`. #119 intentionally established a measurement baseline rather than a hard budget. New content is expected to increase asset count or package bytes when it adds real artwork; the PR must make that delta visible and conscious rather than treating any size increase as a failure or introducing speculative optimization.

For UV/model-sensitive artwork, include the relevant Classic/Slim renderer-parity checks described in `RENDERER_PARITY.md`.

## Public package and release rules

Content code stays inside `@dihor/skincrafter-editor`; the standalone site is only a host. New content must not require:

- imports from private `dist` or repository-internal package paths by consumers;
- host-specific APIs, storage or route handling;
- root-relative SkinCrafter asset URLs;
- duplicated assets outside the package;
- a second preview/export implementation.

A content PR does not bump `packages/editor/package.json` automatically. Version/release changes are an explicit owner decision. If a future category or other content change alters the public API, document the compatibility impact and use the appropriate SemVer level when a release is deliberately prepared.

## Merge checklist

Before merging a wardrobe-content change, confirm all of the following:

- every runtime skin layer is a valid 64×64 PNG with explicit alpha;
- every texture-backed wardrobe item declares exactly one valid `classic` or `slim` model for the whole logical item;
- missing/unknown model metadata is rejected rather than defaulted;
- model-incompatible options are absent from UI choices, normalized out of state after a model change and filtered by composition;
- non-skin assets are governed by their own dimension/alpha contract rather than the atlas rule;
- mixed layers share the same UV layout and remain one logical option;
- no RGB/grayscale heuristic decides tintability;
- choice labels exist in both English and Polish;
- fixed-only options do not present an effective color control;
- `assetBaseUrl`, non-root routes, cache-safe package assets and `npm pack` remain valid;
- preview and generated/exported PNG use the same composition result;
- Classic/Slim behavior is covered when the asset touches model-dependent UVs;
- required unit, E2E, build and external-consumer validation passes;
- performance/package-size impact is measured when assets materially change;
- no public API or package-version change is hidden inside routine content work.
