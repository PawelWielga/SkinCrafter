# SkinCrafter texture authoring

Wardrobe/body textures that use a selectable color follow one pixel-level tint contract:

- grayscale pixels are tintable,
- near-grayscale pixels are also tintable when the spread between the darkest and lightest RGB channel is at most `4 / 255`,
- pure black `#000000` is fixed black and is never recolored,
- pure white `#FFFFFF` is fixed white and is never recolored,
- chromatic/colored pixels keep their authored RGB values and are never recolored,
- alpha is preserved exactly, including fully transparent pixels.

Tinted grayscale pixels preserve their source intensity. Conceptually, each selected-color channel is multiplied by the grayscale intensity (`gray / 255`). Darker source gray therefore produces a darker shade of the selected color and lighter gray produces a lighter shade.

Do not add a second mask texture for tinting. The source texture itself is the mask contract: use grayscale only where the user-selected color should apply, and use authored color, pure black or pure white where the pixel must stay fixed.

Keep texture artwork pixel-exact. Do not introduce smoothing or resampling when preparing Minecraft skin PNGs.
