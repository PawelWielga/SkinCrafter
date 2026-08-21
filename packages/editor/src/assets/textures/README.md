# SkinCrafter texture authoring

Every texture-backed appearance option declares its color behavior explicitly. Runtime code must never infer whether a pixel can be recolored from its RGB values.

A logical texture option can contain:

- a **tintable/base** PNG, rendered first and recolored with the selected color,
- a **fixed/overlay** PNG, rendered above it without changing authored RGB or alpha,
- or both layers together.

At least one of these layers is required for every texture-backed option. A definition with neither layer is invalid.

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
