# Renderer parity audit

This document records the Minecraft Java player-model and skin-atlas contract used by SkinCrafter's Three.js preview.

The audit was performed for issue #105. The goal is not to approximate a Minecraft-shaped character, but to keep the preview geometry, UVs, outer layers and texture sampling deterministic enough that the same 64×64 skin maps to the same player surfaces as in Minecraft Java Edition.

## Reference baseline

The implementation was checked against multiple independent references rather than a single screenshot:

1. **Minecraft Java 1.21.11 model source**
   - [`HumanoidModel.createMesh`](https://github.com/H1lkaaaGD/Minecraft_1.21.11_Source/blob/main/net/minecraft/client/model/HumanoidModel.java) defines the 8×8×8 head, 8×12×4 torso, 4×12×4 Classic arms, 4×12×4 legs, shoulder pivots at X ±5 and leg pivots at X ±1.9.
   - [`PlayerModel.createMesh`](https://github.com/H1lkaaaGD/Minecraft_1.21.11_Source/blob/main/net/minecraft/client/model/player/PlayerModel.java) replaces Classic arms with 3×12×4 Slim arms at the same shoulder pivots and defines the independent left/right skin regions and all second layers.
   - This is important for current parity: an older `y=2.5` Slim-arm placement was a snapshot regression, while 1.21.11 uses `y=2.0` for both Classic and Slim.
2. **Canonical Java skin UV implementation**
   - [`bs-community/skinview3d/src/model.ts`](https://github.com/bs-community/skinview3d/blob/master/src/model.ts) is used as an independent implementation-level cross-check for the 64×64 cube atlas formula, independent left/right limb regions, Classic/Slim arm widths and outer-layer dimensions.
3. **Skin loading and alpha rules**
   - [`SkinTextureDownloader`](https://github.com/H1lkaaaGD/Minecraft_1.21.11_Source/blob/main/net/minecraft/client/renderer/texture/SkinTextureDownloader.java) forces the modern base-layer regions opaque while leaving second-layer alpha available.
   - [`RenderPipelines.ENTITY_TRANSLUCENT`](https://github.com/H1lkaaaGD/Minecraft_1.21.11_Source/blob/main/net/minecraft/client/renderer/RenderPipelines.java) uses translucent blending, disables face culling and applies an alpha cutoff of `0.1`.
4. **Texture sampling**
   - [`DynamicTexture`](https://github.com/H1lkaaaGD/Minecraft_1.21.11_Source/blob/main/net/minecraft/client/renderer/texture/DynamicTexture.java) uses a repeating `NEAREST` sampler and a single texture level for downloaded skin pixels.

The references intentionally cover both the model and the atlas. A visually plausible model can still be wrong by one pixel, one face or one pivot, so screenshots alone are not treated as the source of truth.

## Geometry contract

Coordinates below use SkinCrafter's positive-Y-up scene. They are equivalent to Minecraft's player-part geometry after converting from the game's model coordinates.

| Part | Base dimensions | Base center | Outer dimensions | Rotation pivot |
| --- | --- | --- | --- | --- |
| Head | 8×8×8 | (0, 22, 0) | 9×9×9 | head center |
| Torso | 8×12×4 | (0, 12, 0) | 8.5×12.5×4.5 | torso |
| Right arm, Classic | 4×12×4 | (-6, 12, 0) | 4.5×12.5×4.5 | (-5, 16, 0) |
| Left arm, Classic | 4×12×4 | (6, 12, 0) | 4.5×12.5×4.5 | (5, 16, 0) |
| Right arm, Slim | 3×12×4 | (-5.5, 12, 0) | 3.5×12.5×4.5 | (-5, 16, 0) |
| Left arm, Slim | 3×12×4 | (5.5, 12, 0) | 3.5×12.5×4.5 | (5, 16, 0) |
| Right leg | 4×12×4 | (-1.9, 0, 0) | 4.5×12.5×4.5 | (-1.9, 6, 0) |
| Left leg | 4×12×4 | (1.9, 0, 0) | 4.5×12.5×4.5 | (1.9, 6, 0) |

Outer-layer centers stay locked to their matching base meshes. Their larger size comes only from Minecraft's dilation: 0.5 model pixels per side for the hat and 0.25 per side for jacket, sleeves and pants.

### Classic/Slim switching

Only the arm width, arm center and arm UV width change between Classic and Slim. Head, torso and legs remain identical. Switching models rebuilds the 12 model meshes and does not reuse Classic arm geometry with a Slim atlas or vice versa.

## 64×64 UV contract

Every cuboid uses the canonical Minecraft cube layout for `(u, v, width, height, depth)`:

- left: `u .. u+depth`, `v+depth .. v+depth+height`
- front: `u+depth .. u+depth+width`, `v+depth .. v+depth+height`
- right: `u+width+depth .. u+width+2*depth`, `v+depth .. v+depth+height`
- back: `u+width+2*depth .. u+2*width+2*depth`, `v+depth .. v+depth+height`
- top: `u+depth .. u+depth+width`, `v .. v+depth`
- bottom: `u+width+depth .. u+2*width+depth`, `v .. v+depth`

The bottom face has the opposite vertical orientation in Three.js `BoxGeometry`, so `createBox` flips Y for **every** bottom material slot. No other face receives a default flip.

`skin-maps.test.ts` derives all six rectangles from this formula and checks every base/outer map for:

- head,
- torso,
- right and left arms,
- right and left legs,
- Classic and Slim arms,
- hat, jacket, sleeves and pants layers.

`create-box.test.ts` additionally checks the actual texture transform for all six material slots, including the bottom-face inversion. This prevents a correct atlas rectangle from still being rendered mirrored or upside down by the Three.js face orientation.

## Texture sampling, culling and alpha

The preview uses:

- `NearestFilter` for minification and magnification,
- mipmaps disabled,
- repeating texture addressing on the per-face skin maps, matching Java's `DynamicTexture` sampler,
- sRGB texture color space,
- no lighting/tone-mapping modification of skin colors (`MeshBasicMaterial`, `toneMapped: false`),
- double-sided materials, matching `ENTITY_TRANSLUCENT` with culling disabled.

Java's skin loader strips alpha from the base-layer atlas regions before rendering. SkinCrafter gets the same visible result by rendering base-layer materials as opaque: their RGB is preserved while transparent source alpha cannot make the base body disappear.

Outer-layer materials enable blending and use `alphaTest = 0.1`, matching Minecraft's entity translucent alpha cutoff. Fully transparent outer pixels are discarded, opaque pixels remain opaque, and partial alpha above the cutoff remains translucent.

## Diagnostic fixtures

Two deterministic 64×64 skins live in `packages/editor/src/components/three/fixtures/`:

- `uv-diagnostic-classic.png`
- `uv-diagnostic-slim.png`

Every face rectangle has a distinct color and four corner orientation markers. The fixtures make these classes of error obvious during manual inspection:

- wrong face,
- horizontal/vertical mirroring,
- 90°/180° rotation,
- one-pixel atlas shift,
- left/right limb swap,
- Classic/Slim arm-width mismatch,
- missing or misplaced transparent outer layer.

Their dimensions and SHA-256 hashes are regression-tested in `diagnostic-fixtures.test.ts`.

## Findings fixed by this audit

The pre-audit renderer was close, but not 1:1 in several places:

1. **Leg centers used X ±2 instead of Minecraft's X ±1.9.**
   - Fixed in model construction and pose pivots.
2. **The head outer layer was only 8.5×8.5×8.5.**
   - Fixed to 9×9×9, corresponding to Minecraft's 0.5 dilation per side.
3. **Only the head bottom face received Minecraft's bottom-face UV orientation correction.**
   - Fixed centrally in `createBox`, so every base and outer cuboid follows the same six-face rule.
4. **Walking/T-pose rotations were performed around each mesh center and compensated with hand-tuned translations.**
   - Replaced with rotations around the Java shoulder/hip pivots. Classic and Slim arms share the same shoulder pivot while retaining their different half-pixel centers.
5. **Transparent materials did not mirror Java's current alpha cutoff/culling contract.**
   - Outer layers now use the `0.1` cutoff and all player surfaces are double-sided, while base layers remain visibly opaque like Java's preprocessed base atlas.
6. **Per-face wrapping did not explicitly follow Java's current repeating nearest sampler.**
   - Face maps now use `RepeatWrapping`, nearest filters and no mipmaps.

The atlas rectangles themselves were already correct. The audit adds formula-based tests so that fact is now executable rather than implicit.

## Visual regression strategy

A GPU screenshot baseline was deliberately not added. WebGL screenshots are sensitive to browser/GPU rasterization and would make the suite more fragile than the underlying contract warrants.

Instead, parity is protected at the lower level where the relevant errors originate:

- exact cuboid dimensions and centers,
- exact pivot-based transformations,
- exact six-face UV rectangles and transforms,
- exact sampling/wrapping/culling/alpha material configuration,
- deterministic diagnostic PNGs.

The diagnostic skins remain available for manual front/back/left/right/top/bottom inspection. Together these checks are stricter for skin-atlas parity than an antialiased screenshot while remaining stable in CI.
