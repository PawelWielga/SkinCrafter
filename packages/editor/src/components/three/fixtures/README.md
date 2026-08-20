# Renderer UV diagnostic skins

These 64×64 PNG fixtures are deterministic Minecraft skin atlases used by the renderer parity tests and manual inspection.

- `uv-diagnostic-classic.png` uses the 4-pixel Classic arm layout.
- `uv-diagnostic-slim.png` uses the 3-pixel Slim arm layout and leaves the Classic-only extra arm columns transparent.

Each canonical face rectangle has its own high-contrast color. The four corners of every face also carry orientation markers:

- top-left: white,
- top-right: red,
- bottom-left: green,
- bottom-right: blue.

Those markers make 90°/180° rotation, mirroring, wrong-face selection, one-pixel offsets and left/right swaps immediately visible. Second-layer faces use partial alpha and contain a transparent center marker so overlay transparency can be checked separately from the base layer.

The atlas rectangles are generated from the same canonical `(u, v, width, height, depth)` cube layout asserted by `skin-maps.test.ts`. The PNG hashes are pinned in `diagnostic-fixtures.test.ts` so accidental fixture changes are explicit.
