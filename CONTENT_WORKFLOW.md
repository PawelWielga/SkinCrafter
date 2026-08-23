# Wardrobe content workflow

This is the contributor workflow for adding or changing SkinCrafter appearance categories, options and texture assets in `packages/editor`.

The goal is to make content work routine without bypassing package isolation, Minecraft skin correctness, preview/export parity or the performance baseline established in #119. Tintability is always explicit metadata. Runtime code must never infer authoring intent from pixel RGB values or file names.

## Current content contract

SkinCrafter uses two small registries at the current content scale:

1. `packages/editor/src/assetResolver.ts` is the typed logical-path -> packaged-URL manifest. Every package-owned runtime asset used by code must be registered there and imported with `?url&no-inline`.
2. Files below `packages/editor/src/data/` map semantic appearance choices to typed logical paths. Texture-backed wardrobe items use `WardrobeItemDefinition`, which requires one explicit `skinModel: 'classic' | 'slim'` for the whole logical item and may declare color slots used by its tintable layers.

A second schema/manifest system is not justified today. TypeScript definitions, source validators, unit tests, package verification and the external-consumer smoke test provide the required checks while the content set remains small.

If content volume later makes the same metadata drift across many files, create a focused issue before introducing a generated manifest. That issue must define migration, validation and build implications explicitly.

## Asset classes

The source folder is `packages/editor/src/assets/textures/`, but not every PNG below it is a Minecraft skin atlas.

| Asset class | Location today | Dimension contract | Alpha contract | Notes |
| --- | --- | --- | --- | --- |
| Runtime Minecraft skin layer | Every texture PNG outside `textures/preview/` | Exactly 64×64 | PNG must have an explicit alpha channel. Individual pixels may be transparent, translucent or opaque. | Composited pixel-exactly into generated skins. |
| Preview-only fallback | `textures/preview/` | No artificial 64×64 requirement | Alpha is optional. | UI fallback only, never a semantic wardrobe layer. |
| Future non-skin asset | Must have an explicitly documented location/contract before addition | Define for that asset type | Define explicitly | Do not silently put it under the skin-atlas rules. |

`packages/editor/scripts/verify-texture-atlases.mjs` runs from `verify:package` and therefore from the package build. It validates PNG headers, classifies preview assets separately and requires runtime layers to be 64×64 with explicit alpha.

## Ordered tintable and fixed layers

A texture-backed option declares one ordered texture contract:

- zero or more `tintable` layers, emitted strictly in declaration order;
- at most one optional `fixed` layer, always emitted after every tintable layer.

At least one authored layer is required. Valid examples include fixed-only, one tintable layer, many tintable layers, or many tintable layers followed by a fixed overlay.

Do not derive order from directory layout, file names, suffixes or colors. A file named `detail.fixed.png` is still tintable when its declaration says so, and a file named `overlay.tintable.png` is still fixed when it is the `fixed` declaration. Names are authoring hints only.

For non-wardrobe appearance content such as race or eyes, tintable layers may omit `colorSlot` and receive the category's existing color value. For wardrobe content, **every tintable layer must reference a declared logical `colorSlot`**.

Example with two independently colorable regions and one fixed overlay:

```ts
defineWardrobeItem({
  skinModel: 'classic',
  textureLayers: defineTextureLayers({
    tintable: [
      { texture: 'textures/top/example-body.png', colorSlot: 'primary' },
      { texture: 'textures/top/example-trim.png', colorSlot: 'secondary' },
      { texture: 'textures/top/example-logo-shadow.png', colorSlot: 'primary' },
    ],
    fixed: 'textures/top/example-logo.png',
  }),
  colorSlots: [
    {
      id: 'primary',
      labelKey: 'wardrobeColor.primary',
      defaultColor: '#4A6FA5',
      palette: ['#4A6FA5', '#A33A3A', '#2F8F4E'],
    },
    {
      id: 'secondary',
      labelKey: 'wardrobeColor.secondary',
      defaultColor: '#D6B15D',
      palette: ['#D6B15D', '#7047A3'],
    },
  ],
});
```

Several tintable layers may reference the same slot. They then receive exactly the same selected color and the UI renders one palette for that slot, not one palette per layer. Different slots are independent.

Every declared slot must be used by at least one tintable layer. Slot IDs must be unique within the item, palettes must be non-empty `#RRGGBB` values, and `defaultColor` must be present in the palette. A fixed-only wardrobe item must not declare color slots.

The fixed layer is never tinted. Gray, white, black and chromatic pixels may exist in any authored file; RGB has no semantic meaning. If a detail must keep its authored RGB, put it in the fixed layer instead of adding grayscale detection or magic-color heuristics.

All internal layers still belong to one logical wardrobe category. Reordering `shirt`, `pants`, `hat`, `shoes` or `accessory` moves the whole item's internal group together. Internal tintable layers are never independent draggable entries.

## Wardrobe color state

Wardrobe colors live outside `AppearanceState` in the generic nested `WardrobeColorState` contract:

```ts
type WardrobeColorState = Partial<
  Record<
    TextureLayerCategoryId,
    Record<itemId, Record<colorSlot, string>>
  >
>;
```

Conceptually the path is `category -> selected option -> color slot`. Do not add fields such as `shirtPrimaryColor`, `pantsSecondaryColor` or option-specific React state.

The package normalizes this structure from item declarations. Missing known slots receive their declared defaults. Unknown items/slots and unsupported palette values are removed deterministically. Stored colors for an option remain available while another option in the same category is selected, so switching away and back restores the previous choices.

The persisted wire format is schema v2. Schema v1 and older states are migrated through `parseSkinCrafterState()` and receive current slot defaults without special-case host code. Adding a future slot to an existing item therefore requires a stable `defaultColor`; older v2 saves that do not contain the new slot normalize to that default.

## Adding a new texture asset

1. Decide whether the file is a runtime skin atlas or a non-skin asset.
2. For a runtime layer, author a 64×64 PNG using the canonical Minecraft skin UV layout. Keep an explicit alpha channel. Do not resize or smooth the atlas at runtime.
3. Split independently colorable regions into separate tintable layers when they need different logical slots. Put authored-color pixels that must never change into the optional fixed overlay.
4. Put files below `packages/editor/src/assets/textures/` in the appropriate semantic directory.
5. Add `?url&no-inline` imports and stable logical `textures/...` entries to `packages/editor/src/assetResolver.ts`. Never use root-relative `/textures/...` paths.
6. Reference typed logical paths from the data layer. Use `defineTextureLayers()` for ordered tintable/fixed declarations. For wardrobe items wrap the layers in `defineWardrobeItem({ skinModel, textureLayers, colorSlots })` when tintable layers exist. The model is mandatory and has no fallback.
7. If one semantic option supports both models, create one explicit definition per model and group them with `defineWardrobeItemVariants()`. A model-independent PNG may be referenced by both when its UVs are valid for both geometries.
8. Run the package and consumer validation described below.

## Classic and Slim

Every runtime layer uses the full 64×64 Minecraft atlas. If artwork touches UV regions whose geometry differs between Classic and Slim, author the correct model-specific variant rather than resampling or reinterpreting pixels at runtime.

Missing or unsupported model metadata is invalid; runtime definition validation rejects it instead of silently assuming Classic. The wardrobe UI exposes only definitions compatible with the active model, normalization removes incompatible selections after a model change, and the compositor independently filters incompatible definitions as a final correctness boundary.

A content change that affects arms, outer-arm layers or model-dependent UVs must exercise both model paths and preserve the contract in `RENDERER_PARITY.md`. Current packaged `Hoodie` artwork paints model-dependent arm UVs and is explicitly Classic-only. `Duck` and `Pants` each have explicit Classic and Slim definitions that intentionally reuse the same model-independent PNG.

## Adding a new option to an existing category

1. Add the semantic option ID to the owning data source.
2. Register any new asset paths in `assetResolver.ts` and map them through package data. Do not import assets from a host application.
3. Choose the internal layer contract deliberately. Declaration order is render order; the optional fixed overlay is always last.
4. For wardrobe tintable layers, assign a `colorSlot` to every layer and define each unique slot once on the wardrobe item with label, default and palette data.
5. Wrap texture-backed wardrobe items in `defineWardrobeItem()` with the required `classic` or `slim` model. Use explicit variants for both models rather than an implicit `all` value.
6. Add the option label and any new slot labels to both English and Polish translations.
7. Verify appearance and wardrobe-color normalization/default behavior.
8. Add tests for expected layer order, slot sharing/independence, model compatibility, tint behavior and `assetBaseUrl` resolution.
9. If the category is reorderable, confirm all internal layers remain adjacent and move as one logical category entry.

## Adding a new category

A new category is not only an asset addition. `AppearanceCategoryId`, `AppearanceState`, layer order and persisted/public state can all be affected, so category work must be reviewed as an API/schema change.

1. Use a focused issue that explicitly justifies the public-state change and compatibility impact.
2. Update `AppearanceCategoryId`, `appearanceCategories` and `defaultAppearance`.
3. Decide whether the category is a choice or global color control.
4. Implement its option source and compositor mapping in the package data layer.
5. If it is independently reorderable, update `TextureLayerCategoryId`, `textureLayerCategories` and normalization/migration expectations. Internal item layers remain private to the category.
6. Add labels in both `en` and `pl`.
7. Review persisted-state compatibility. Advance the schema and add an explicit migration when current-state normalization cannot preserve old semantics safely.
8. Review exported TypeScript types. Ordinary feature/content work must not bump the package version automatically.
9. Exercise UI, normalization, generation, preview, save output and controlled/persisted state.

Host-specific storage, APIs or routing never belong in this contract.

## Preview and export parity

There is one composition contract. `buildTextureInputs*()` produces ordered logical inputs and `combineTextures()` performs pixel composition. For every wardrobe option, tintable layers are emitted in declaration order and the optional fixed overlay follows them unchanged.

The generated 64×64 PNG is the authoritative output used by `onSkinChange` / `onSave`, and the editor preview displays that same generated output. Do not add a preview-only wardrobe compositor.

Regression coverage relevant to content changes includes:

- `src/data/textureLayers.test.ts` for canonical ordered layer declarations and host URL resolution;
- `src/data/wardrobeDefinitions.test.ts` for required model/color-slot metadata and invalid definitions;
- `src/data/appearance.test.ts` for layer ordering, slot tint mapping, defaults, model filtering and `assetBaseUrl`;
- `src/components/wardrobe.texture-layers.test.tsx` for contextual accessible palettes, model-aware filtering and re-selection behavior;
- `src/stateSerialization.test.ts` for old-state migration and future-slot defaulting;
- `src/utils/combineTextures.layer-composition.test.ts` for no-smoothing tint composition and unchanged fixed overlays;
- `src/SkinCrafterEditor.preview-output.test.tsx` for preview/generated-output parity;
- package verification and `test:consumer` for packed/installed consumption without private imports.

## Reference content

`Human / Male` remains the reference mixed base option: a global skin color tints its declared tintable layer and the fixed layer is drawn afterward unchanged.

`Hoodie` is the first wardrobe color-slot implementation. Its existing Classic atlas is declared as one tintable layer using the `primary` slot. The architecture and tests intentionally support many tintable layers and many slots even though the first production item currently needs one slot. `Duck` and `Pants` remain fixed-only examples and therefore expose no contextual color palette.

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

CI parity additionally includes the full dependency audit and dead-code check configured by repository workflows.

`npm run build` includes `verify:package`, which includes source texture checks and package/consumer type validation.

When a change adds or materially changes asset bytes, also run:

```bash
npm run test:performance
```

Compare it in the same environment with `P3_PERFORMANCE_BASELINE.md`. New content may legitimately increase asset count or package bytes; the delta must be visible rather than hidden behind speculative optimization.

For UV/model-sensitive artwork, include the relevant Classic/Slim renderer-parity checks described in `RENDERER_PARITY.md`.

## Public package and release rules

Content code stays inside `@dihor/skincrafter-editor`; the standalone site is only a host. New content must not require private `dist` imports, host-specific APIs/storage, root-relative SkinCrafter asset URLs, duplicated assets outside the package or a second preview/export implementation.

A content PR does not bump `packages/editor/package.json` automatically. Version/release changes are an explicit owner decision.

## Merge checklist

Before merging a wardrobe-content change, confirm:

- every runtime skin layer is a valid 64×64 PNG with explicit alpha;
- every texture-backed wardrobe item declares exactly one valid `classic` or `slim` model;
- every tintable wardrobe layer references one declared color slot;
- color slots are unique, used, palette-backed and have deterministic defaults;
- tintable layers render in declaration order and the optional fixed layer is last and untinted;
- multiple layers sharing a slot use the same color and render only one contextual palette;
- different slots can change independently without altering unrelated item state;
- `None` and fixed-only items expose no contextual palette;
- all internal layers remain one reorderable logical category;
- no RGB, file-name or directory heuristic decides tintability or order;
- option/slot labels exist in both English and Polish;
- old persisted states migrate safely and missing future slots receive defaults;
- `assetBaseUrl`, non-root routes, cache-safe package assets and `npm pack` remain valid;
- preview and generated/exported PNG use the same composition result;
- Classic/Slim behavior is covered when artwork touches model-dependent UVs;
- required unit, E2E, build and external-consumer validation passes;
- no package-version or release change is hidden inside routine feature/content work.
