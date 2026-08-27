# Texture-backed content workflow

This is the contributor workflow for adding or changing SkinCrafter appearance content in `packages/editor`.

The package uses one internal texture-item contract for character content and wardrobe content. Race, Eyes and wardrobe items all resolve through the same model/layer/color-slot validation and the same low-level `TextureInput[]` builder. Hair is already wired into the same registry and currently contains only `None`; adding the first real hair item must not require a new compositor branch.

Runtime code must never infer tinting, layer order or model compatibility from PNG colors, file names or directory names. Those decisions are explicit metadata.

## Source of truth

The current authoring path is deliberately small and typed:

1. `packages/editor/src/assetResolver.ts` maps stable logical `textures/...` paths to package-owned emitted assets and supports `assetBaseUrl` overrides.
2. `packages/editor/src/data/textureLayers.ts` defines ordered tintable layers plus an optional fixed overlay.
3. `packages/editor/src/data/textureItemDefinitions.ts` owns the neutral `TextureItemDefinition` / `TextureItemVariants` contract, validation, model-specific resolution and `buildTextureInputsFromItem()`.
4. Category-specific files add only semantic metadata and option registries:
   - `raceTextureMap.ts` owns race -> available sex/model and skin palettes;
   - `characterTextureDefinitions.ts` owns Eyes and the Hair registry;
   - wardrobe maps such as `hatTextureMap.ts`, `shirtTextureMap.ts` and `pantsTextureMap.ts` expose item definitions. `wardrobeDefinitions.ts` is only a compatibility alias layer over the neutral contract.
5. `appearance.ts` maps semantic controls to their owning visual layer and uses one resolver registry before calling the shared builder.

Do not introduce a second manifest/schema/compositor path for a new texture-backed option.

## Neutral texture item contract

Every real texture-backed item must declare exactly one model:

```ts
defineTextureItem({
  skinModel: 'classic',
  textureLayers: defineTextureLayers({
    tintable: {
      texture: 'textures/example/body.tintable.png',
      colorSlot: 'primary',
    },
    fixed: 'textures/example/detail.fixed.png',
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

The validator enforces the shared rules for Race, Eyes, Hair and wardrobe:

- `skinModel` is mandatory and must be `classic` or `slim`;
- at least one texture layer must exist through `defineTextureLayers()`;
- tintable layers are emitted in declaration order;
- the optional fixed layer is emitted last and is never tinted;
- every tintable layer must reference a declared `colorSlot`;
- every declared slot must be used;
- slot IDs must be unique and non-empty;
- palettes must be non-empty `#RRGGBB` values;
- `defaultColor` must be present in its palette;
- fixed-only items must not declare color slots.

Several tintable layers may share a slot. They receive one selected color and the UI renders one logical palette for that slot. Different slots remain independent.

## Classic and Slim variants

There is no implicit model fallback. If one semantic option supports both models, declare both variants explicitly:

```ts
defineTextureItemVariants({
  classic: defineTextureItem({
    skinModel: 'classic',
    textureLayers: classicLayers,
    colorSlots,
  }),
  slim: defineTextureItem({
    skinModel: 'slim',
    textureLayers: slimLayers,
    colorSlots,
  }),
});
```

A model-independent PNG may be referenced from both definitions only when its UVs are correct for both geometries. If artwork touches model-dependent arm/outer-arm regions, author separate Classic/Slim assets.

Colorable variants of the same semantic item must expose the same color-slot contract. This keeps semantic item state stable when the model changes.

## Character controls and color ownership

Public/runtime appearance fields stay compatible:

```ts
AppearanceState.race
AppearanceState.sex
AppearanceState.skinColor
AppearanceState.eyes
AppearanceState.eyesColor
AppearanceState.hair
AppearanceState.hairColor
```

Internally, color and model controls are mapped declaratively to their visual owner:

- `race`, `sex`, `skinColor` -> `race` visual layer;
- `eyes`, `eyesColor` -> `eyes` visual layer;
- `hair`, `hairColor` -> `hair` visual layer;
- wardrobe item/color edits -> their wardrobe category.

Character color fields are adapters onto texture-item color slots (`skin`, `iris`, `primary`). Do not add a special tint algorithm for a new character option. The selected definition plus slot mapping must be enough for `buildTextureInputsFromItem()`.

The same mapping is used for imported-skin activation, so editing a color/model sub-control activates the complete owning visual layer rather than only an individual source texture.

## UI structure

A texture-backed item and its color control are one logical UI structure.

- Race renders Skin Color inside the Race card when the selected race definition is tintable.
- Eyes renders Eye Color inside the Eyes card.
- Hair renders Hair Color inside the Hair card even while the only option is `None`, so the semantic preference remains visible without inventing a fake hair texture. A future tintable hair definition uses the same `primary` slot metadata for composition.
- Wardrobe keeps its existing contextual palettes inside the selected wardrobe item card.

Do not recreate visual grouping with sibling CSS such as `:has()` when the controls belong to the same logical item.

Public state remains separate for compatibility; the shared UI structure is an internal rendering concern.

## Wardrobe color state

Wardrobe still persists its generic nested slot state separately from `AppearanceState`:

```ts
type WardrobeColorState = Partial<
  Record<TextureLayerCategoryId, Record<string, Record<string, string>>>
>;
```

The path is `category -> item option -> color slot`. Do not add item-specific public fields such as `shirtPrimaryColor`.

Normalization derives known items/slots/defaults from texture-item definitions. Unknown slots/items are removed, invalid palette values fall back deterministically, and colors remain stored per semantic item when another option is selected.

The public serialized schema remains v2. Old states must continue to normalize/migrate through `parseSkinCrafterState()` without a host-side migration for this refactor.

## Adding a new runtime texture asset

1. Author a 64x64 PNG using the Minecraft skin atlas and keep an explicit alpha channel.
2. Split recolorable regions into tintable layer files. Put authored-color details that must stay unchanged in the optional fixed overlay.
3. Add the source file under `packages/editor/src/assets/textures/` in the semantic directory.
4. Register it in `assetResolver.ts` using a stable logical `textures/...` path and a package-owned `?url&no-inline` import. Never use root-relative `/textures/...` paths.
5. Reference the logical path from a `defineTextureLayers()` declaration.
6. Wrap the layers in `defineTextureItem()` and, when appropriate, `defineTextureItemVariants()`.
7. Add the semantic option to the owning Race/Eyes/Hair/wardrobe registry. Do not change the compositor merely because another option was added to an existing category.
8. Add English, Polish and any other currently supported package translations for new labels.
9. Add focused data/UI tests and run the full repository validation.

`textures/preview/default.png` is a preview-only fallback and is not a texture item.

## Adding a new option to an existing category

For an existing texture-backed category, most work should now be declarative:

1. add the stable semantic option ID;
2. add/register assets;
3. define model-specific `TextureItemDefinition` variants;
4. define color slots if the item is tintable;
5. add translations;
6. add tests for model compatibility, layer order, tint/fixed behavior and `assetBaseUrl` resolution.

Adding another Eyes, Hair or wardrobe option must not require another branch in `buildTextureInputs*()`.

Race keeps one additional semantic relationship: race -> available sex/model. Update that metadata in `raceTextureMap.ts` when adding a race.

## Adding a new category

A new category can affect `AppearanceCategoryId`, public state, layer order and persistence, so it is not ordinary content authoring.

Use a focused issue and explicitly review:

1. public/state compatibility;
2. the semantic control(s) and owning visual layer;
3. whether the category is reorderable;
4. the resolver entry in the visual-layer registry;
5. persistence/schema implications;
6. localization, UI, imported-skin activation and generation coverage.

A new category may require compositor registry plumbing. A new option in an existing category should not.

## Asset and atlas requirements

Every runtime skin-layer PNG outside `textures/preview/` must be exactly 64x64 with an explicit alpha channel. `packages/editor/scripts/verify-texture-atlases.mjs` validates this during package verification/build.

Composition is pixel-preserving: do not resize, smooth or resample runtime layers. RGB values do not decide tintability. Source RGB provides shading for tintable pixels while source alpha is preserved; fixed-layer RGB/alpha is preserved unchanged.

## Preview, export and imported-skin parity

There is one composition path:

`TextureItemDefinition` -> resolved texture item -> `buildTextureInputsFromItem()` -> `combineTextures()`.

Generated 64x64 PNG output is authoritative for preview, `onSkinChange` and `onSave`. Do not add a preview-only or imported-skin-only texture compositor.

For imported skins, an edit activates only its owning visual layer. The imported PNG remains the immutable base for all untouched visual layers. Model semantics and stale-async protection must remain unchanged.

## Relevant regression coverage

Important tests include:

- `src/data/textureItemDefinitions.test.ts` for the neutral validator, explicit model behavior and shared builder;
- `src/data/appearance.test.ts` for control -> visual-layer mapping, composition and normalization;
- `src/data/wardrobeDefinitions.test.ts` for the wardrobe compatibility aliases and slot behavior;
- `src/components/wardrobe.texture-layers.test.tsx` for contextual palettes and layer-order behavior;
- `src/components/wardrobe.eye-color-grouping.test.tsx` for real character item/sub-control DOM grouping;
- `src/SkinCrafterEditor.importedSkin.owner-layers.test.tsx` for imported-skin owner activation;
- `src/stateSerialization.test.ts` for persisted-state compatibility;
- `src/utils/combineTextures.layer-composition.test.ts` for pixel composition;
- `tests/e2e/eye-color-grouping.spec.ts` for browser-level grouping/accessibility;
- package verification and `test:consumer` for installed-package behavior.

## Required validation

From the repository root:

```bash
npm audit --omit=dev --audit-level=high
npm run lint
npm test
npm run test:e2e
npm run build
npm run test:consumer
```

CI parity also runs:

```bash
npm audit --audit-level=high
npm run check:dead-code
```

When asset bytes or the asset pipeline materially change, run the applicable performance/content validation documented by the repository.

## Package and release rules

All editor content stays package-owned. The standalone host must not duplicate editor texture definitions, composition logic or assets.

This internal refactor does not change the public package contract and does not authorize a version bump or release. Package version/release changes require an explicit maintainer instruction.

## Merge checklist

Before merging texture-backed content changes, confirm:

- every runtime atlas is valid 64x64 PNG content with explicit alpha;
- every item/variant declares exactly one valid model;
- no Classic/Slim fallback exists;
- every tintable layer references a declared slot and every slot is used;
- tintable layers keep declaration order and fixed stays last/untinted;
- model variants expose compatible slot contracts;
- item color controls render inside their logical owner structure;
- imported-skin control edits activate the correct owning visual layer;
- persisted/public state remains compatible unless a separate breaking change was explicitly approved;
- `assetBaseUrl`, package assets and external-consumer behavior remain valid;
- preview and exported PNG use the same generated result;
- required unit, E2E, build and consumer checks pass;
- no package-version/release change is hidden in routine content work.
