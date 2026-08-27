# SkinCrafter texture authoring

Every texture-backed appearance option declares its model, layer order and color behavior explicitly. Race, Eyes, Hair and wardrobe items use the same internal `TextureItemDefinition` contract from `src/data/textureItemDefinitions.ts`.

Runtime code must never infer whether pixels are tintable from RGB values, file names or directory names.

## Texture item metadata

A texture-backed item declares exactly one Minecraft player model and one ordered texture-layer contract:

```ts
defineTextureItem({
  skinModel: 'classic', // or 'slim'
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

`skinModel` is mandatory and accepts only `classic` or `slim`. There is no implicit Classic fallback.

If one semantic option supports both models, define two explicit items and group them with `defineTextureItemVariants()`. A model-independent PNG may be referenced by both definitions only when its UVs are valid for both geometries. Model-dependent arm or outer-arm artwork must use the correct Classic/Slim atlas.

Colorable Classic/Slim variants of one semantic item must expose the same color-slot contract.

## Ordered tintable and fixed layers

A logical texture item may contain:

- one or more ordered **tintable** layers;
- an optional **fixed** layer rendered after all tintable layers;
- or only a fixed layer.

At least one authored layer is required.

Every tintable layer must reference a declared `colorSlot`. Several tintable layers may share the same slot and therefore receive the same selected color. Different slots remain independent.

A fixed-only item must not declare color slots.

The validator also requires unique non-empty slot IDs, non-empty `#RRGGBB` palettes, a `defaultColor` contained in its palette, and at least one tintable layer using every declared slot.

## Tintable layers

Tintable PNGs contain the parts intentionally controlled by a SkinCrafter color selector. Every non-transparent pixel belongs to that recolorable layer regardless of whether its authored RGB is gray, black, white or chromatic.

Source RGB intensity supplies shading while the selected slot color supplies the hue. Source alpha is preserved exactly. Black and white have no special semantic meaning.

## Fixed layer

The optional fixed PNG contains details that must keep their authored RGB and alpha. It is composited after every tintable layer and is never tinted.

When one visual item contains both recolorable and authored-color details, split them into complementary transparent PNGs. The files still represent one logical item and move/render together.

Do not add grayscale detection, magic colors or runtime pixel inspection to determine tint intent.

## Character and wardrobe use the same contract

The same item definition is used for:

- Race body layers and the `skin` color slot;
- Eyes and the `iris` color slot;
- future real Hair items and the `primary` color slot;
- wardrobe items and their generic contextual slots.

`wardrobeDefinitions.ts` is a compatibility alias over the neutral item contract; it is not a separate validation/composition system.

Adding another option to an existing texture-backed category should require assets, typed definitions, translations and tests, not a new compositor branch.

## Atlas requirements

- Every runtime skin texture PNG must be exactly **64x64** pixels.
- Keep Minecraft Classic/Slim UV placement pixel-exact.
- Keep an explicit alpha channel on runtime skin atlases.
- Do not resize, smooth or resample runtime texture layers during composition.
- Transparent pixels mean that the layer contributes nothing at that location.
- Add every new runtime layer to the typed asset manifest in `src/assetResolver.ts` so packaged assets and `assetBaseUrl` hosts resolve the same logical `textures/...` path.

`textures/preview/default.png` is a preview-only fallback shown before generated output is available. It is not a texture item and does not define tinting semantics.

See the repository-level `CONTENT_WORKFLOW.md` for the complete contributor flow, model rules, imported-skin ownership mapping, tests and validation commands.
