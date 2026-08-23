# SkinCrafter texture authoring

Every texture-backed appearance option declares its color behavior explicitly. Runtime code must never infer whether a pixel can be recolored from its RGB values.

A logical texture option can contain:

- a **tintable/base** PNG, rendered first and recolored with the selected color,
- a **fixed/overlay** PNG, rendered above it without changing authored RGB or alpha,
- or both layers together.

At least one of these layers is required for every texture-backed option. A definition with neither layer is invalid.

## Wardrobe skin model metadata

Every texture-backed **wardrobe item** must also declare exactly one Minecraft player model for the whole logical item:

```ts
defineWardrobeItem({
  skinModel: 'classic', // or 'slim'
  textureLayers: defineTextureLayers({
    tintable: 'textures/top/example.tintable.png',
    fixed: 'textures/top/example.fixed.png',
  }),
});
```

`skinModel` is required and accepts only `classic` or `slim`. There is no implicit Classic fallback for a missing or unknown value. The metadata belongs to the logical wardrobe item, not to individual `tintable` / `fixed` layers, so all layers of one item always target the same geometry.

If the same visual design supports both models, author two model-correct wardrobe definitions. They may share fixed artwork only when the referenced pixels are genuinely model-independent; any arm or outer-arm pixels must use the correct Classic/Slim UV layout. Do not mark one atlas as compatible with both models unless it is represented by two explicit definitions whose assets are valid for each geometry. `defineWardrobeItemVariants()` groups those explicit definitions under one semantic wardrobe option while keeping the model declaration on each definition.

The wardrobe UI lists only items compatible with the active model. Normalization removes an incompatible selected item when the model changes, and the compositor independently filters model-incompatible definitions so an invalid host/state value cannot leak into the generated PNG.

Current packaged `Hoodie` artwork paints model-dependent arm UVs and is explicitly Classic-only. `Duck` and `Pants` do not touch model-dependent arm UVs, so each has separate explicit Classic and Slim definitions that intentionally reference the same model-independent PNG.

## Tintable layer

The tintable PNG is the part intentionally controlled by a SkinCrafter color selector. Every non-transparent pixel belongs to that recolorable layer regardless of whether the authored RGB is gray, black, white or chromatic.

The source RGB intensity supplies shading while the selected color supplies the hue. Source alpha is preserved exactly. Pure black therefore remains the darkest possible shade naturally, while pure white becomes the full selected color; neither value has special semantic meaning.

## Fixed layer

The fixed PNG contains details that must keep their authored colors. It is composited after the tintable PNG and its RGB and alpha values are not modified. Gray, black, white and chromatic pixels are all valid here and remain fixed.

## Splitting mixed artwork

When one visual option contains both recolorable and authored-color details, split the artwork into two complementary transparent PNGs. Keep recolorable pixels only in `*.tintable.png` and fixed details only in `*.fixed.png`.

The two files still represent one logical appearance/category layer. Layer reordering moves the pair together: tintable first, fixed second. Do not expose the internal pair as two independently reorderable wardrobe items.

Do not encode tint intent through grayscale ranges, channel tolerances, magic colors or runtime pixel inspection. There is no grayscale-detection contract anymore.

## Atlas requirements

- Every runtime skin texture PNG must be exactly **64x64** pixels.
- Keep Minecraft Classic/Slim UV placement pixel-exact.
- Do not resize, smooth or resample runtime texture layers during composition.
- Transparent pixels mean that the layer contributes nothing at that location.
- Add every new layer path to the typed asset manifest so packaged assets and `assetBaseUrl` hosts resolve the same logical files.

`textures/preview/default.png` is a preview-only fallback shown before generated output is available. It is not an appearance option and does not define tinting semantics.
