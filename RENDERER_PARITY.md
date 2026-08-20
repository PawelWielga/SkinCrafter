# Renderer parity audit

This document records the Minecraft Java player-model and skin-atlas contract used by SkinCrafter's Three.js preview.

The audit was performed for issue #105. The goal is not to approximate a Minecraft-shaped character, but to keep the preview geometry, UVs, outer layers and texture sampling deterministic enough that the same 64×64 skin maps to the same player surfaces as in Minecraft Java Edition.

## Reference baseline

The implementation was checked against multiple independent references rather than a single screenshot:

1. **Minecraft Java model contract**
   - [mappings.dev: `net.minecraft.client.model.PlayerModel` for Java 1.21](https://mappings.dev/1.21/net/minecraft/client/model/PlayerModel.html) confirms the current `PlayerModel`/`HumanoidModel` model split and the Classic/Slim (`thinArms`) contract.
   - The established Java player geometry uses 8×8×8 head, 8×12×4 torso, 4×12×4 Classic arms, 3×12×4 Slim arms and 4×12×4 legs, with shoulder pivots at X ±5 and hip pivots at X ±1.9.
2. **Canonical Java skin UV implementation**
   - [`bs-community/skinview3d/src/model.ts`](https://github.com/bs-community/skinview3d/blob/master/src/model.ts) is used as a second, implementation-level reference for the 64×64 cube atlas formula, independent left/right limb regions, Classic/Slim arm widths and model proportions.
3. **Skin-format and layer rules**
   - [Minecraft Wiki's skin-format reference](https://minecraft.fandom.com/wiki/Skin) documents 4-pixel Classic arms, 3-pixel Slim arms, the modern 64×64 layered atlas and transparent second layers.
   - The same reference documents second-layer dilation of 0.25 model pixels on torso/arms/legs and 0.5 model pixels on the head.
4. **Java alpha cutout**
   - The current Java shader family keeps Minecraft's alpha `0.1` cutout; for example the [1.21.11 `rendertype_item_entity_translucent_cull` shader](https://mcasset.cloud/1.21.11-rc3/assets/minecraft/shaders/core/rendertype_item_entity_translucent_cull.fsh) discards fragments below `0.1`.
   - The preview mirrors that threshold for transparent outer-layer materials while retaining higher partial alpha values.

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

Outer-layer centers stay locked to their matching base meshes. Their larger size comes only from Minecraft's dilation, not from an additional positional offset.

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

This also prevents a regression where both limbs accidentally point at the same legacy atlas region.

## Texture sampling and alpha

The preview uses:

- `NearestFilter` for minification and magnification,
- mipmaps disabled,
- sRGB texture color space,
- `ClampToEdgeWrapping` for per-face atlas crops,
- no lighting/tone-mapping modification of skin colors (`MeshBasicMaterial`, `toneMapped: false`).

Base-layer materials are opaque. Outer-layer materials enable blending and use `alphaTest = 0.1`, matching Minecraft's entity translucent alpha cutoff. Fully transparent outer pixels are therefore discarded instead of writing invisible depth, opaque pixels remain opaque, and partial alpha above the cutoff remains translucent.

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

The pre-audit renderer was close, but not 1:1 in four places:

1. **Leg centers used X ±2 instead of Minecraft's X ±1.9.**
   - Fixed in model construction and pose pivots.
2. **The head outer layer was only 8.5×8.5×8.5.**
   - Fixed to 9×9×9, corresponding to Minecraft's 0.5 dilation per side.
3. **Only the head bottom face received Minecraft's bottom-face UV orientation correction.**
   - Fixed centrally in `createBox`, so every base and outer cuboid follows the same six-face rule.
4. **Walking/T-pose rotations were performed around each mesh center and compensated with hand-tuned translations.**
   - Replaced with rotations around the Java shoulder/hip pivots. Classic and Slim arms share the same shoulder pivot while retaining their different half-pixel centers.

The atlas rectangles themselves were already correct. The audit adds formula-based tests so that fact is now executable rather than implicit.

## Visual regression strategy

A GPU screenshot baseline was deliberately not added. WebGL screenshots are sensitive to browser/GPU rasterization and would make the suite more fragile than the underlying contract warrants.

Instead, parity is protected at the lower level where the relevant errors originate:

- exact cuboid dimensions and centers,
- exact pivot-based transformations,
- exact six-face UV rectangles,
- exact default bottom-face transform,
- exact sampling/wrapping/alpha material configuration,
- deterministic diagnostic PNGs.

Together these checks are stricter for skin-atlas parity than an antialiased screenshot while remaining stable in CI.
