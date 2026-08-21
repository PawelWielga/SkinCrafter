# P3 performance and resource baseline

This document records the reproducible performance/resource baseline established for issue #119 and the WebGL lifecycle investigation completed in issue #138. It is a measurement baseline, not a performance budget and not an optimization plan.

## Measured revision

The original #119 baseline was measured on:

- Git SHA: `b448f1c6f7f554d4774784e43d6620ca4156c55d`
- editor package metadata: `@dihor/skincrafter-editor@1.0.1`
- baseline identity: **post-P2 unreleased SHA**

The #138 lifecycle investigation was verified on:

- Git SHA: `e760b8561829d4197519d9d1141f7b2bee0c2e2e`
- editor package metadata: `@dihor/skincrafter-editor@1.0.1`
- GitHub Actions Performance Baseline run #14

The package version is recorded because it is part of the build metadata, but these numbers must not be presented as measurements of the published npm `1.0.1` artifact. Both measured SHAs contain changes merged after that release. No package version was changed as part of either benchmark task.

## Reproducing the measurement

Use Node 20 from the repository root:

```bash
npm ci
npm run test:performance
```

`npm run test:performance` builds the editor package and runs only `tests/e2e/performance-baseline.spec.ts` in the desktop Chrome Playwright project. The benchmark is skipped by normal `npm run test:e2e`; it is intentionally opt-in because it performs repeated timing and lifecycle scenarios rather than acting as a normal regression test.

The machine-readable result is written to:

```text
test-results/performance-baseline.json
```

`.github/workflows/performance-baseline.yml` provides the canonical GitHub-hosted environment. On pull requests it explicitly checks out the PR head SHA before measuring, so the JSON `gitSha` identifies the code that was actually executed rather than GitHub's temporary merge commit. The workflow also uploads the JSON as the `performance-baseline` artifact.

For useful comparisons, keep the viewport, DPR, scenario, browser/runner class and repetition count the same. CI timing is runner-dependent, so numbers from a different machine should be treated as a separate environment rather than directly mixed into this baseline.

## Environment

The original #119 GitHub Actions Performance Baseline run #3 used:

| Property | Value |
| --- | --- |
| Git SHA | `b448f1c6f7f554d4774784e43d6620ca4156c55d` |
| Node | `v20.20.2` |
| npm | `10.8.2` |
| Browser | Chrome `151.0.7922.137` |
| Runner OS | Ubuntu 24.04, GitHub Actions Linux x64 |
| Viewport | 1280×720 |
| Device pixel ratio | 1 |

The final #138 run used the same Node/npm/browser class, viewport and DPR on GitHub Actions Linux x64. Its exact measured SHA is `e760b8561829d4197519d9d1141f7b2bee0c2e2e`.

The browser-reported user agent may differ from the Chrome binary version on the hosted runner. The benchmark records both values in the JSON so a later comparison can preserve the exact evidence instead of inferring the environment from one string.

## Timing baseline

All timing scenarios use 10 repetitions and report the median and p95. The raw samples are retained in the JSON artifact.

The original #119 timing baseline was:

| Scenario | State | Median | p95 |
| --- | --- | ---: | ---: |
| First render | new browser context per repetition; localhost dev server already running | 459.00 ms | 1868.50 ms |
| Skin generation | warm editor, cached eye assets, sequential option changes | 3.25 ms | 13.20 ms |
| Rapid changes | warm editor, five immediate eye-option changes, measure until the final current state is ready | 73.10 ms | 104.90 ms |

The #138 lifecycle verification recorded 553.00 ms / 1581.70 ms for first-render median/p95, 4.05 ms / 15.60 ms for sequential generation, and 119.55 ms / 381.00 ms for the rapid-change scenario. These timing differences are retained as runner evidence, not treated as a performance regression by #138 because the issue changes teardown instrumentation rather than the normal editor update path.

The generation scenarios measure the editor's observable `generating -> ready` status window. Rapid changes intentionally exercise stale/overlapping generation behavior and finish only when the final requested state becomes ready.

## Long-session WebGL resources

The long-session scenario warms the relevant eye assets and then performs 100 sequential editor state changes. WebGL calls are instrumented at the browser API boundary for textures, buffers, programs and vertex arrays. Programs serve as the shader/material-side proxy and buffers/vertex arrays cover geometry-side GPU allocation.

The original #119 global `create - delete` accounting remained exactly stable at every 10-change checkpoint:

| Resource | Start | After 100 changes | Delta |
| --- | ---: | ---: | ---: |
| Textures | 9 | 9 | 0 |
| Buffers | 48 | 48 | 0 |
| Programs | 3 | 3 | 0 |
| Vertex arrays | 18 | 18 | 0 |

Issue #138 refined the probe so resources belonging to already-retired preview contexts are separated from resources owned by the currently active preview. Under that accounting, the active context was also exactly stable through all 100 changes:

| Active-context resource | Start | After 100 changes | Delta |
| --- | ---: | ---: | ---: |
| Textures | 5 | 5 | 0 |
| Buffers | 48 | 48 | 0 |
| Programs | 3 | 3 | 0 |
| Vertex arrays | 18 | 18 | 0 |

This proves the normal in-place customization path keeps one persistent renderer and does not cause unbounded GPU resource growth in the measured scenario.

CPU-side teardown is also covered by the normal `npm test` regression suite. `three-preview-runtime.test.ts` verifies that a disposed preview releases all 12 model `BoxGeometry` instances, all 72 `MeshBasicMaterial` instances, at least the 72 face-map textures plus the source texture, the renderer, pending animation frame, resize observer and window listener. The suite also verifies `WebGLRenderer.forceContextLoss()` is requested on permanent teardown and that a stale asynchronous texture load is disposed instead of being retained or applied. The browser benchmark complements those direct object-lifecycle assertions with real WebGL allocation behavior over a longer session.

## Mount/unmount lifecycle finding

Issue #138 resolved the texture-lifecycle question exposed by #119. The raw residual is not evidence that SkinCrafter retains an ever-growing set of active GPU textures.

### Why the raw counter grows by exactly eight per route transition

The project currently uses Three.js `0.178.x`. During `WebGLState` initialization Three.js creates four one-pixel fallback WebGL textures for the four texture targets it may need when no application texture is bound:

1. `TEXTURE_2D`,
2. `TEXTURE_CUBE_MAP`,
3. `TEXTURE_2D_ARRAY`,
4. `TEXTURE_3D`.

Those are renderer/context-local fallback objects, not SkinCrafter `THREE.Texture` clones. They are intentionally usable for the lifetime of that WebGL context and are not individually deleted by the normal package texture-disposal path.

The standalone application is also intentionally rendered inside `React.StrictMode`. In the development build used by the benchmark, React exercises an additional setup/cleanup cycle for newly mounted effects. As a result:

- initial page startup creates two preview contexts, retires/loses one, and leaves one active,
- each route transition retires the previously active preview context,
- the newly mounted route also gets one provisional StrictMode preview context that is immediately retired,
- the final preview context for the new route remains active.

Therefore every stable route transition retires **two** WebGL contexts. Each retired context owns the same **four** Three.js fallback textures, producing the exact raw residual observed by #119:

```text
2 retired contexts × 4 Three.js fallback textures = 8 raw textures per route transition
```

A full `Creator -> /mcskinview -> Creator` cycle contains two route transitions, so raw texture accounting grows by 16 per complete cycle even though the active preview stays constant.

### Teardown behavior

`ThreePreviewRuntime.dispose()` now performs the teardown in explicit stages:

1. cancel the animation frame and detach listeners/observers,
2. dispose pending/current package textures, all model texture clones, materials and geometries,
3. call `WebGLRenderer.dispose()` to release Three.js-managed renderer resources,
4. call `WebGLRenderer.forceContextLoss()` for the permanently retired renderer,
5. remove its canvas from the preview container.

`forceContextLoss()` is a best-effort Three.js API backed by the browser's `WEBGL_lose_context` extension. Normal in-place editor changes never use this permanent teardown path and continue to reuse the same renderer/context.

### Refined resource probe

The #138 probe retains the original raw `create - delete` counters for historical comparison, but also attributes every tracked WebGL object to the preview context that created it. When a preview canvas is removed from the DOM, that context is classified as **retired** and its still-outstanding raw objects are moved out of the active-context totals. Browser `webglcontextlost` events are tracked independently as confirmation that the retired context was actually lost.

This avoids treating renderer-local allocations attached to a retired/lost context as resources still owned by the currently active preview.

The 10-cycle regression asserts after every route transition that:

- exactly one preview context remains active,
- active textures/buffers/programs/vertex arrays return to the one-preview baseline,
- retired contexts increase by the expected StrictMode lifecycle count,
- retired buffers, programs and vertex arrays are zero after explicit renderer cleanup,
- the only remaining raw objects attributed to retired contexts are the four known Three.js fallback textures per context,
- the raw texture residual advances by exactly eight per route transition.

### Final #138 measurements

GitHub Actions Performance Baseline run #14 on `e760b8561829d4197519d9d1141f7b2bee0c2e2e` produced:

| Context metric | Value |
| --- | ---: |
| Created contexts | 42 |
| Retired contexts | 41 |
| Browser-reported lost contexts | 41 |
| `webglcontextlost` events | 41 |
| Active contexts at end | 1 |
| Peak transient active contexts | 3 |

Every retired context in the canonical run also emitted a browser context-loss event. This confirms the production teardown requested context loss successfully in the measured Chrome environment.

Active resources stayed constant throughout all 10 route cycles:

| Resource | Active baseline | Active after 10 cycles | Delta |
| --- | ---: | ---: | ---: |
| Textures | 5 | 5 | 0 |
| Buffers | 48 | 48 | 0 |
| Programs | 3 | 3 | 0 |
| Vertex arrays | 18 | 18 | 0 |

Raw texture accounting still follows the sequence originally observed by #119:

```text
cycle 1:  viewer 17, editor 25
cycle 2:  viewer 33, editor 41
cycle 3:  viewer 49, editor 57
...
cycle 10: viewer 161, editor 169
```

The refined accounting explains that final `169` exactly:

```text
5 textures owned by the one active preview
+ 41 retired/lost contexts × 4 Three.js fallback textures
= 169 raw create-delete residual
```

The final retired-context outstanding counts were:

| Resource | Raw objects attributed to retired contexts |
| --- | ---: |
| Textures | 164 |
| Buffers | 0 |
| Programs | 0 |
| Vertex arrays | 0 |

This is the key #138 result: the apparent `+8` per transition is deterministic Three.js context-local fallback bookkeeping amplified by React StrictMode's development lifecycle, not unbounded growth of resources owned by the active SkinCrafter preview. SkinCrafter-owned textures, geometries and materials remain explicitly disposed, and the retired WebGL contexts are explicitly lost in the canonical browser run.

The regression intentionally pins the four fallback textures to the current Three.js `0.178.x` implementation because explaining the exact #138 residual is part of its purpose. A future Three.js upgrade that changes its fallback texture strategy should update this expectation consciously together with a new comparable measurement.

## Distribution size

The benchmark runs real `npm pack` metadata collection from the same measured SHA rather than comparing workspace source size.

The original #119 baseline recorded:

| Artifact | Size |
| --- | ---: |
| npm `.tgz` | 106,942 bytes |
| Unpacked package | 255,530 bytes |
| `dist/index.js` | 68,938 bytes |
| `dist/style.css` | 12,054 bytes |
| 12 emitted package PNG assets combined | 127,163 bytes |

The #138 run recorded a 106,955-byte `.tgz`, 255,564 unpacked bytes, 68,972 bytes for `dist/index.js`, and the same 12,054-byte CSS / 127,163-byte PNG totals. The small JavaScript/package difference reflects the lifecycle fix and is retained as measurement evidence rather than a budget.

The five largest emitted PNGs remain:

| Asset | Size |
| --- | ---: |
| `dist/assets/none-CbOwHiBU.png` | 113,935 bytes |
| `dist/assets/hoodie-C1a1is5P.png` | 2,027 bytes |
| `dist/assets/male-Kk_GEnn7.png` | 1,842 bytes |
| `dist/assets/male-CCp8Ivtz.png` | 1,798 bytes |
| `dist/assets/male-Df8EQiYb.png` | 1,763 bytes |

Hashed filenames are build artifacts and may change when asset bytes change. Comparisons should use file role/count/size rather than treating the hash as a stable public name.

## Future content pressure

The current asset pipeline already emits wardrobe PNGs as separate cache-safe package assets instead of embedding all image bytes in `dist/index.js`. At the measured scale of 12 PNGs, the JavaScript bundle is therefore not growing linearly with the binary bytes of every texture.

Adding content will still increase packed/unpacked size and the number/total size of emitted assets. The current baseline does not justify speculative bundling, lazy-loading or budget changes. The more useful comparison after #134 and during #120 is to rerun this same procedure and check whether the explicit `tintable` + `fixed` model causes an unacceptable increase in package asset count/bytes or runtime resource behavior.

No performance budget is introduced by #119 or #138. A future budget should be added only after repeated comparable measurements show a stable threshold that protects a real regression rather than encoding one hosted-runner sample as policy.

## Baseline outcome

- first render, single generation and rapid-change timing have repeatable 10-run samples with median and p95,
- 100 in-place state changes show zero active-context growth in textures, buffers, programs and vertex arrays,
- direct unit coverage confirms geometry, material, texture, renderer, context-loss request and stale-async cleanup behavior,
- 10 route remount cycles keep exactly one stable active preview while retiring/lossing the previous StrictMode contexts,
- the original `+8` raw texture residual is fully explained as `2 StrictMode-retired contexts × 4 Three.js fallback textures`,
- all 41 retired contexts in the canonical #138 run also emitted `webglcontextlost`,
- no retired buffers, programs or vertex arrays remain in raw accounting,
- packed distribution size is recorded from the same SHA,
- no speculative optimization was introduced without measurement evidence.
