# P3 performance and resource baseline

This document records the reproducible performance/resource baseline established for issue #119. It is a measurement baseline, not a performance budget and not an optimization plan.

## Measured revision

The recorded baseline was measured on:

- Git SHA: `b448f1c6f7f554d4774784e43d6620ca4156c55d`
- editor package metadata: `@dihor/skincrafter-editor@1.0.1`
- baseline identity: **post-P2 unreleased SHA**

The package version is recorded because it is part of the build metadata, but these numbers must not be presented as measurements of the published npm `1.0.1` artifact. The measured SHA contains changes merged after that release plus the benchmark harness from PR #137.

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

GitHub Actions Performance Baseline run #3 measured the baseline with:

| Property | Value |
| --- | --- |
| Git SHA | `b448f1c6f7f554d4774784e43d6620ca4156c55d` |
| Node | `v20.20.2` |
| npm | `10.8.2` |
| Browser | Chrome `151.0.7922.137` |
| Runner OS | Ubuntu 24.04, GitHub Actions Linux x64 |
| Viewport | 1280×720 |
| Device pixel ratio | 1 |

The browser-reported user agent may differ from the Chrome binary version on the hosted runner. The benchmark records both values in the JSON so a later comparison can preserve the exact evidence instead of inferring the environment from one string.

## Timing baseline

All timing scenarios use 10 repetitions and report the median and p95. The raw samples are retained in the JSON artifact.

| Scenario | State | Median | p95 |
| --- | --- | ---: | ---: |
| First render | new browser context per repetition; localhost dev server already running | 459.00 ms | 1868.50 ms |
| Skin generation | warm editor, cached eye assets, sequential option changes | 3.25 ms | 13.20 ms |
| Rapid changes | warm editor, five immediate eye-option changes, measure until the final current state is ready | 73.10 ms | 104.90 ms |

The first-render p95 includes the deliberately retained first sample of 1868.50 ms. The remaining samples were approximately 431–489 ms. No outlier is removed from the baseline; future runs should use the same procedure and compare the full sample set.

The generation scenarios measure the editor's observable `generating -> ready` status window. Rapid changes intentionally exercise stale/overlapping generation behavior and finish only when the final requested state becomes ready.

## Long-session WebGL resources

The long-session scenario warms the relevant eye assets and then performs 100 sequential editor state changes. WebGL calls are instrumented at the browser API boundary for textures, buffers, programs and vertex arrays. Programs serve as the shader/material-side proxy and buffers/vertex arrays cover geometry-side GPU allocation.

Live create/delete accounting remained exactly stable at every 10-change checkpoint:

| Resource | Start | After 100 changes | Delta |
| --- | ---: | ---: | ---: |
| Textures | 9 | 9 | 0 |
| Buffers | 48 | 48 | 0 |
| Programs | 3 | 3 | 0 |
| Vertex arrays | 18 | 18 | 0 |

This gives a repeatable baseline that normal in-place customization does not recreate the renderer or cause unbounded GPU resource growth in the measured scenario.

CPU-side teardown is also covered by the normal `npm test` regression suite. `three-preview-runtime.test.ts` verifies that a disposed preview releases all 12 model `BoxGeometry` instances, all 72 `MeshBasicMaterial` instances, at least the 72 face-map textures plus the source texture, the renderer, pending animation frame, resize observer and window listener. The same suite verifies that a stale asynchronous texture load is disposed instead of being retained or applied. The browser benchmark complements those direct object-lifecycle assertions with real WebGL allocation behavior over a longer session.

## Mount/unmount lifecycle finding

The benchmark also performs 10 `Creator -> /mcskinview -> Creator` route cycles. Both routes intentionally own a Three.js preview canvas. The harness verifies that the previous route's canvas is disconnected and that the next route receives a different canvas.

Buffers, programs and vertex arrays return to the same live create/delete accounting after each mount. Texture accounting, however, grows by 8 for each preview mount, or 16 per complete route cycle:

```text
cycle 1:  viewer 17, editor 25
cycle 2:  viewer 33, editor 41
cycle 3:  viewer 49, editor 57
...
cycle 10: viewer 161, editor 169
```

Final instrumentation totals were:

| Resource | Created | Deleted | Live by create/delete accounting |
| --- | ---: | ---: | ---: |
| Textures | 308 | 139 | 169 |
| Buffers | 1008 | 960 | 48 |
| Programs | 63 | 60 | 3 |
| Vertex arrays | 378 | 360 | 18 |

This finding is tracked separately in #138. The counter alone does not prove that 160 texture allocations remain resident in GPU memory because a browser can release an entire disconnected WebGL context without producing matching `deleteTexture` calls visible to this instrumentation. #138 therefore requires distinguishing a real package leak from renderer/browser context-lifetime behavior before changing production code.

No renderer fix is included in #119. Keeping the baseline PR measurement-focused prevents an unverified optimization from being mixed with the evidence that motivated it.

## Distribution size

The benchmark runs real `npm pack` metadata collection from the same measured SHA rather than comparing workspace source size.

| Artifact | Size |
| --- | ---: |
| npm `.tgz` | 106,942 bytes |
| Unpacked package | 255,530 bytes |
| `dist/index.js` | 68,938 bytes |
| `dist/style.css` | 12,054 bytes |
| 12 emitted package PNG assets combined | 127,163 bytes |

The five largest emitted PNGs in this baseline are:

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

No performance budget is introduced by #119. A future budget should be added only after repeated comparable measurements show a stable threshold that protects a real regression rather than encoding one hosted-runner sample as policy.

## Baseline outcome

- first render, single generation and rapid-change timing now have repeatable 10-run samples with median and p95,
- 100 in-place state changes show no WebGL create/delete growth in the measured resource classes,
- direct unit coverage confirms geometry, material, texture, renderer and stale-async cleanup behavior,
- 10 route remount cycles exposed a texture-lifecycle question tracked by #138,
- packed distribution size is recorded from the same SHA,
- no optimization was introduced without measurement evidence.
