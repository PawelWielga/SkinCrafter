# Wardrobe content workflow

This is the contributor workflow for adding or changing SkinCrafter appearance categories, options and texture assets in `packages/editor`.

The goal is to make content work routine without bypassing package isolation, Minecraft skin correctness, preview/export parity or the performance baseline established in #119. Tintability is always explicit metadata. Runtime code must never infer authoring intent from pixel RGB values or file names.

## Current content contract

SkinCrafter uses two small registries at the current content scale:

1. `packages/editor/src/assetResolver.ts` is the typed logical-path -> packaged-URL manifest. Every package-owned runtime asset used by code must be registered there and imported with `?url&no-inline`.
2. Files below `packages/editor/src/data/` map semantic appearance choices to typed logical paths. Texture-backed wardrobe items use `WardrobeItemDefinition`, which requires one explicit `skinModel: 'classic' | 'slim'` for the whole logical item and may declare color slots used by its tintable layers.

A second schema/manifest system is not justified today. TypeScript definitions, source validators, unit tests, package verification and the external-consumer smoke test provide the required checks while the content set remains small.

If content volume later makes the same metadata drift across many files, create a focused issue before introducing a generated manifest. That issue must define migration, validation and build implications explicitly.

## Quick reference: where content lives today

Use this section as the first stop when adding production content. It describes the current `main` layout, not a hypothetical future content system. Update this table whenever category ownership moves.

Every package-owned appearance asset passes through these common files:

- runtime PNG files live under `packages/editor/src/assets/textures/`;
- `packages/editor/src/assets/textures/README.md` contains the lower-level texture-authoring subset of this workflow and must stay consistent with this document;
- every runtime asset is imported and assigned a stable logical `textures/...` path in `packages/editor/src/assetResolver.ts`;
- semantic options are owned by `packages/editor/src/data/` and exposed through `packages/editor/src/data/appearance.ts`;
- user-visible editor labels live in `packages/editor/src/i18n/translations.ts` and must exist in both English and Polish;
- preview and generated/exported output share the same composition path, so content must never be implemented only in the preview.

| UI category | Texture location today | Owning data source today | Current production options | Notes for the next option |
| --- | --- | --- | --- | --- |
| Race | `src/assets/textures/race/<race>/` | `src/data/races.ts` + `src/data/raceTextureMap.ts` | Human, Bear, Orc, Zombie, Template | Add the stable race ID to `races.ts`, then add explicit Classic/Slim variants supported by that race. |
| Sex | No independent texture folder | Derived from model variants in `src/data/raceTextureMap.ts` | Male, Female, None where supported | Sex availability follows the selected race/model variant. Do not create a disconnected sex texture registry. |
| Skin color | No independent texture asset | `src/data/skinColorMap.ts` | Per-race palettes | Applies to tintable race layers. |
| Eyes | `src/assets/textures/eyes/` | `src/data/appearance.ts` (`eyeTextureLayers`) | Classic, Small, Big | Uses the existing global eye color rather than wardrobe color slots. |
| Eye color | No texture asset | `src/data/appearance.ts` | Blue, green, brown palettes | Color control only. |
| Hair | No production hair texture yet | `src/data/appearance.ts` currently returns only `None` | None | The first real hair option must add editor-owned package data and wire it into `getOptions('hair', ...)`; hair tint uses the existing `hairColor` control, not wardrobe slots. |
| Hair color | No texture asset | `src/data/appearance.ts` | Brown, blond, black palettes | Color control only. |
| Hat | `src/assets/textures/hat/` | `src/data/hatTextureMap.ts` | None, Duck | `Duck` has explicit Classic and Slim definitions reusing one model-independent PNG. |
| Shirt | `src/assets/textures/top/` | `src/data/shirtTextureMap.ts` | None, Hoodie | `Hoodie` is colorable through the `primary` wardrobe slot and is currently Classic-only. |
| Pants | `src/assets/textures/bottom/` | `src/data/pantsTextureMap.ts` | None, Pants | `Pants` has explicit Classic and Slim definitions reusing one model-independent PNG. |
| Shoes | No production shoe texture yet | `src/data/appearance.ts` currently returns only `None` | None | The first real option must add an editor-owned wardrobe data source and an explicit `getOptions('shoes', ...)` branch. |
| Accessory | No production accessory texture yet | `src/data/appearance.ts` currently returns only `None` | None | The first real option must add an editor-owned wardrobe data source and an explicit `getOptions('accessory', ...)` branch. |

For the first real `hair`, `shoes` or `accessory` content, prefer the same focused source pattern already used by hats, shirts and pants when it keeps ownership clear, for example `hairTextureMap.ts`, `shoesTextureMap.ts` or `accessoryTextureMap.ts`. Those files do **not** exist on current `main`; creating them is part of implementing the first option in that category, not a prerequisite that contributors should assume already exists.

`AppearanceCategoryId` already contains all categories shown above. The reorderable wardrobe subset is `hat`, `shirt`, `pants`, `shoes` and `accessory`; `race`, `eyes` and `hair` participate in composition but are not draggable wardrobe entries.

## Decide the item shape before drawing PNGs

Choose the content contract first. This avoids authoring one flattened texture and later discovering that the UI needs independent colors or model-specific UVs.

| Desired behavior | Authoring shape | Definition shape |
| --- | --- | --- |
| Fixed authored colors only | One 64x64 PNG | `defineTextureLayers({ fixed: ... })`; no color slots. |
| One user-selectable color | One tintable PNG, optional fixed overlay | One tintable layer with one `colorSlot`, one matching slot definition, optional `fixed`. |
| Two or more independent user colors | Separate tintable PNG layers for regions that must change independently, optional fixed overlay | Multiple tintable layers mapped to one or more declared slots. |
| Several layers share one selected color | Separate tintable PNG layers may all reference the same slot | One palette is rendered for that shared slot. |
| Same artwork is valid for Classic and Slim | One PNG may be reused | Still declare separate `classic` and `slim` variants explicitly. |
| Artwork touches model-dependent arm/outer-arm UVs | Author model-specific PNGs | Separate Classic and Slim definitions referencing the correct assets. |
| Race/eyes/hair uses an existing category color control | Tintable layer without wardrobe `colorSlot` | The category color is supplied by `appearance.ts`. |
| No visual content | No authored layer | Use the semantic `None` option; do not add empty PNGs. |

The semantic option ID is persisted inside `AppearanceState`. Treat option IDs as durable data identifiers, not display labels. Renaming an existing ID can cause persisted values to normalize away unless an explicit compatibility/migration plan handles the old value. User-facing wording belongs in translations and may change independently.

## End-to-end recipe: add one wardrobe option

For a normal new hat, shirt, pants, shoe or accessory, use this sequence.

1. **Choose a stable semantic ID.** Example: `Cap`. Keep the ID suitable for persisted state and derive the translation key from it, such as `option.hat.Cap`.
2. **Choose supported skin models before authoring.** Decide whether the option is Classic-only, Slim-only or supports both. If both models use identical pixels, verify the UVs are genuinely valid for both rather than assuming they are interchangeable.
3. **Choose fixed vs tintable regions.** Decide whether the item has authored colors only, one color slot, several slots, or a mix of tintable layers plus a fixed overlay.
4. **Author the PNG layer(s).** Runtime layers must be canonical Minecraft 64x64 atlases with explicit alpha. Keep the pixels at authored resolution; do not rely on runtime resampling.
5. **Place the files in the semantic texture directory.** Use an existing category directory when one exists. For the first content in a category that has no production texture directory yet, create a clear package-owned directory below `src/assets/textures/` rather than placing assets in the standalone host.
6. **Register every PNG in `src/assetResolver.ts`.** Add a `?url&no-inline` import and a stable logical `textures/...` key. Code and data must reference the logical key, never a root-relative application URL.
7. **Add the option to its owning data source.** Extend the category's semantic option list and add its `defineWardrobeItemVariants()` entry. For `shoes` or `accessory`, the first implementation also needs a new editor-owned source and a matching branch in `appearance.ts` because those categories currently expose only `None`.
8. **Declare the model explicitly.** Every texture-backed wardrobe variant uses `defineWardrobeItem({ skinModel, textureLayers, ... })`, including fixed-only items. There is no `all` model and no Classic fallback.
9. **Declare color slots when tintable.** Every tintable wardrobe layer references a declared `colorSlot`; every declared slot is used, has a non-empty `#RRGGBB` palette and has a deterministic `defaultColor` present in that palette. Fixed-only items omit `colorSlots`.
10. **Add English and Polish labels.** Add the option label and any new color-slot labels to `src/i18n/translations.ts`.
11. **Update regression coverage.** Test logical asset resolution, layer order, model filtering, tint/fixed behavior, slot defaults/sharing/independence and UI selection for the new option as applicable.
12. **Validate the packed-package path.** Run the content validation described later in this document. If PNG bytes were added or materially changed, also run the performance baseline check.

A fixed-only dual-model item whose one PNG is genuinely valid for both geometries follows the current `Duck`/`Pants` pattern:

```ts
const itemDefinitions = {
  Cap: defineWardrobeItemVariants({
    classic: defineWardrobeItem({
      skinModel: 'classic',
      textureLayers: defineTextureLayers({ fixed: 'textures/hat/cap.png' }),
    }),
    slim: defineWardrobeItem({
      skinModel: 'slim',
      textureLayers: defineTextureLayers({ fixed: 'textures/hat/cap.png' }),
    }),
  }),
};
```

A one-color item with authored-color details keeps the recolorable pixels separate from the fixed pixels:

```ts
defineWardrobeItem({
  skinModel: 'classic',
  textureLayers: defineTextureLayers({
    tintable: [
      { texture: 'textures/top/jacket-body.png', colorSlot: 'primary' },
    ],
    fixed: 'textures/top/jacket-details.png',
  }),
  colorSlots: [
    {
      id: 'primary',
      labelKey: 'wardrobeColor.primary',
      defaultColor: '#4A6FA5',
      palette: ['#4A6FA5', '#A33A3A', '#2F8F4E'],
    },
  ],
});
```

## Adding the first real option to a currently empty category

`hair`, `shoes` and `accessory` already exist in the public appearance/category model, but current production content exposes only `None`. Do not confuse "the category exists" with "the category already has a content registry".

### Hair

Hair is a non-wardrobe appearance layer. `buildTextureInputsForLayer()` already knows how to tint the selected hair option with `appearance.hairColor`, but `getOptions('hair', ...)` currently returns only `None`.

The first real hair implementation therefore needs to:

1. add one or more runtime hair assets under `src/assets/textures/`;
2. register them in `assetResolver.ts`;
3. establish an editor-owned hair option data source and expose the options through `getOptions('hair', ...)`;
4. use `defineTextureLayers()` with tintable/fixed layers as appropriate, without wardrobe `colorSlot` metadata;
5. add English and Polish option labels;
6. test hair option normalization, hair-color tinting, asset resolution and generated/preview parity.

### Shoes and accessory

`shoes` and `accessory` are already `TextureLayerCategoryId` values, so ordering, persisted layer order and generic wardrobe color normalization already know about those categories. What is missing is real option enumeration/definitions.

For the first option in either category:

1. add package-owned assets and register them in `assetResolver.ts`;
2. add a focused wardrobe data source using the same `defineWardrobeItem()` / `defineWardrobeItemVariants()` contract as hats, shirts and pants;
3. add a category branch in `getOptions()` that returns `None` plus model-compatible real options;
4. if colorable, declare generic wardrobe slots rather than adding category-specific React or persisted fields;
5. add translations and model/color/order tests;
6. verify that the new layer moves as one logical category even when the item has several internal texture layers.

Adding the first option to these categories does not require adding a new `AppearanceCategoryId`, changing `TextureLayerCategoryId`, or bumping the persistence schema solely because the existing category gains content.

## What a routine content option should not change

A normal new option inside an existing category should not require any of the following unless the task intentionally changes a broader contract:

- `apps/standalone` copies of editor textures or wardrobe logic;
- new host APIs, routes, storage fields or networking;
- new option-specific fields in `AppearanceState` or `WardrobeColorState`;
- a second preview-only compositor;
- imports from package-private `src`/`dist` paths by consumers;
- package SemVer changes or a release;
- changes to public package exports merely to make package-owned content work.

If adding one item appears to require one of those changes, re-check the package/content architecture before proceeding.

## Asset naming and contributor handoff

Asset file names are for maintainability only; runtime semantics come from declarations. New assets should use clear, stable, lowercase names where practical. Suffixes such as `.tintable.png` and `.fixed.png` are useful authoring hints for split layers, but they are not parsed and do not change behavior. Existing assets do not need to be renamed merely to match a new naming preference.

When an artist or maintainer hands off new content for implementation, capture these facts before wiring it in:

- target category and stable semantic option name;
- supported model(s): Classic, Slim or both;
- whether one PNG is intentionally valid for both models;
- which regions are fixed authored colors;
- which regions are user-tintable and which logical slot each uses;
- default color and allowed palette for every wardrobe slot;
- English and Polish display labels when they differ from an obvious translation;
- any UV-sensitive areas that need explicit renderer-parity inspection.

If these facts are known, the remaining work is mechanical: asset registration, typed definition wiring, translations, tests and validation.

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

Tinting preserves source alpha exactly. The authored RGB intensity supplies shading while the selected color supplies the user-controlled hue: pure black stays the darkest shade and pure white receives the full selected color. Do not flatten details that must keep their authored RGB into a tintable layer; place those pixels in the fixed layer instead.

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
6. Reference typed logical paths from the data layer. Use `defineTextureLayers()` for ordered tintable/fixed declarations. For every texture-backed wardrobe item, wrap the layers in `defineWardrobeItem({ skinModel, textureLayers, ... })`; add `colorSlots` only when tintable layers require them. The model is mandatory and has no fallback.
7. If one semantic option supports both models, create one explicit definition per model and group them with `defineWardrobeItemVariants()`. A model-independent PNG may be referenced by both when its UVs are valid for both geometries.
8. Run the package and consumer validation described below.

## Classic and Slim

Every runtime layer uses the full 64×64 Minecraft atlas. If artwork touches UV regions whose geometry differs between Classic and Slim, author the correct model-specific variant rather than resampling or reinterpreting pixels at runtime.

Missing or unsupported model metadata is invalid; runtime definition validation rejects it instead of silently assuming Classic. The wardrobe UI exposes only definitions compatible with the active model, normalization removes incompatible selections after a model change, and the compositor independently filters incompatible definitions as a final correctness boundary.

`WardrobeColorState` is keyed by semantic item rather than skin model. If both Classic and Slim variants of one item are colorable, they must therefore declare the same ordered color-slot contract, including IDs, labels, defaults and palettes. A fixed-only variant may coexist with a colorable variant because only the colorable model contributes slot state.

A content change that affects arms, outer-arm layers or model-dependent UVs must exercise both model paths and preserve the contract in `RENDERER_PARITY.md`. Current packaged `Hoodie` artwork paints model-dependent arm UVs and is explicitly Classic-only. `Duck` and `Pants` each have explicit Classic and Slim definitions that intentionally reuse the same model-independent PNG.

## Adding a new option to an existing category

1. Add the semantic option ID to the owning data source.
2. Register any new asset paths in `assetResolver.ts` and map them through package data. Do not import assets from a host application.
3. Choose the internal layer contract deliberately. Declaration order is render order; the optional fixed overlay is always last.
4. For wardrobe tintable layers, assign a `colorSlot` to every layer and define each unique slot once on the wardrobe item with label, default and palette data.
5. Wrap every texture-backed wardrobe variant in `defineWardrobeItem()` with the required `classic` or `slim` model, whether the item is fixed-only or tintable. Use explicit variants for both models rather than an implicit `all` value.
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
