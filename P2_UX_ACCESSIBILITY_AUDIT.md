# P2 UX and accessibility audit

This document records the repeatable audit evidence for GitHub issue #118. It complements the issue checklist; it does not replace the manual real-device validation explicitly required by that issue.

## Baseline

- Audit issue: #118
- Roadmap tracker: #112
- Main baseline at the start of this audit pass: `e4d6734d64e1fc9fd0959c934e2f63118f5a3d3a`
- Published editor baseline before the remaining P2 work: `@dihor/skincrafter-editor@1.0.0`
- Automated browser projects: Desktop Chrome at 1280×720 and the Playwright Pixel 5 mobile profile. CI uses the Chrome channel installed on the GitHub-hosted runner.

The automated suite is intentionally a regression detector. Real touch ergonomics, visual focus quality and normal mouse/keyboard usability must still be checked manually before #118 can close.

## Automated evidence matrix

| Area | Evidence | What it proves |
| --- | --- | --- |
| Creator desktop | `tests/e2e/layout.spec.ts` | Editor and real WebGL canvas render at the representative desktop viewport without unexpected page overflow. |
| Creator mobile | `tests/e2e/accessibility.spec.ts`, `tests/e2e/layout.spec.ts`, `tests/e2e/p2-audit.spec.ts` | Mobile controls, preview sizing, locale layout and responsive transitions are exercised in Chromium. |
| Desktop drag and drop | `tests/e2e/p2-audit.spec.ts`, `packages/editor/src/components/wardrobe.test.tsx` | Native browser drag/drop changes the committed layer order; lower-level tests protect preview/drop/cancel behavior. |
| Touch reorder logic | `packages/editor/src/components/wardrobe.test.tsx`, `packages/editor/src/components/wardrobe.touch-regression.test.tsx` | Pointer/touch preview and commit behavior are deterministic. This is not evidence of physical-device ergonomics. |
| Keyboard navigation and focus order | `tests/e2e/layout.spec.ts`, `tests/e2e/p2-audit.spec.ts`, `packages/editor/src/components/wardrobe.test.tsx` | Every visible enabled editor focus target is traversed by Tab in authored DOM order on desktop and mobile, positive `tabindex` overrides are absent, preview actions activate from the keyboard, and layer nudge controls remain keyboard-operable. |
| Focus visibility | `tests/e2e/p2-audit.spec.ts` | Keyboard navigation places `:focus-visible` on the focused layer drag control and Chrome exposes a non-zero outline. |
| Accessible control names | `tests/e2e/accessibility.spec.ts`, `tests/e2e/p2-audit.spec.ts` | Layer controls have explicit accessible names and visible editor buttons in both supported locales are not unnamed. |
| Responsive hidden controls | `tests/e2e/accessibility.spec.ts`, `tests/e2e/layout.spec.ts`, `tests/e2e/p2-audit.spec.ts` | The mobile-hidden drag handle is not visible, is skipped by the keyboard focus sequence and does not appear among the visible Tab targets. |
| Mobile touch targets | `tests/e2e/accessibility.spec.ts` | Visible mobile reorder buttons are at least 24×24 CSS pixels and do not overlap each other or the layer heading. |
| Scroll/resize lifecycle | `tests/e2e/layout.spec.ts` | Repeated scroll → resize → return cycles preserve preview dimensions and the same WebGL canvas. |
| Orientation-style resize | `tests/e2e/p2-audit.spec.ts` | Portrait → landscape → portrait viewport changes preserve a single canvas, recover the original preview fit and avoid horizontal overflow. |
| Repeated preview interaction | `tests/e2e/layout.spec.ts`, `tests/e2e/p2-audit.spec.ts` | Preview controls do not replace the renderer canvas, including a repeated pose-change sequence. |
| Classic/Slim renderer | `packages/editor/src/components/three/three-preview-model-parity.test.ts`, `packages/editor/src/components/three/diagnostic-fixtures.test.ts`, `RENDERER_PARITY.md` | Classic and Slim geometry/UV/model switching are pinned to the audited Minecraft Java renderer contract. |
| Imported skin | `packages/editor/src/SkinCrafterEditor.importedSkin.test.tsx`, `packages/editor/src/importedSkin.test.ts` | Existing 64×64 PNG input is validated, preserves its declared Classic/Slim model and remains editable without replacing unrelated imported pixels. |
| PL/EN | `tests/e2e/p2-audit.spec.ts`, package localization tests | Both supported locales render in the mobile creator without critical horizontal overflow or unnamed visible editor buttons. |
| `/` | `tests/e2e/layout.spec.ts` | The packaged editor renders through the standalone host and browser navigation returns to the creator. |
| `/mcskinview` | `tests/e2e/layout.spec.ts`, standalone PlayerDB/model tests | The packaged preview and username form render on the viewer route; model metadata handling has regression coverage. |

## Previously discovered P2 regression

The audit found #125: mobile layer reorder controls were narrower than the agreed minimum target. PR #126 fixed the public editor styling and added the regression in `tests/e2e/accessibility.spec.ts`. The fix is present in the baseline SHA listed above.

No new product defect is asserted by this documentation. Any new independent defect found while completing the manual pass must receive its own issue unless it is a small, focused correction that can be safely fixed with its own regression coverage.

## Required manual completion pass

Before closing #118, record the exact device/browser/OS and perform all of the following in addition to the automated suite:

### Real touch device

- Open the creator on a physical touch device.
- Reorder several wardrobe layers by touch in both directions and verify the live preview/ghost is understandable and the final order matches the intended drop position.
- Use the visible up/down reorder buttons and verify their targets are comfortable and do not overlap neighboring content.
- Scroll below the preview and return; verify camera/model scale remains usable.
- Rotate portrait ↔ landscape when supported and verify the preview remains usable after returning to portrait.
- Exercise Classic and Slim rendering, imported-skin continuation, PL and EN, and the `/mcskinview` smoke flow.

### Normal desktop browser

- Use a normal desktop browser with mouse and keyboard, not only automation.
- Reorder layers using native drag and drop.
- Navigate the primary editor controls by keyboard and verify the visual focus indicator is clearly noticeable, not merely technically present.
- Verify the automated authored focus order also feels logical against the visible layout and that responsive-hidden controls cannot receive focus.
- Exercise preview controls repeatedly and verify camera/model interaction remains usable.
- Exercise Classic and Slim rendering, imported-skin continuation, PL and EN, and both public routes.

Record any finding with severity/priority. P0/P1 regressions must be resolved before #118 closes; non-critical findings must be represented by explicit backlog issues.

## Release gate after P2

The current published baseline is `@dihor/skincrafter-editor@1.0.0`. PR #126 changed distributed package behavior/styling without changing the public TypeScript API. Under #112 and `AGENTS.md`, that is a contract-compatible patch change.

Therefore #118 must not be treated as fully finished while the real consumer is still verified only against 1.0.0. After the manual audit is complete and any resulting package fixes are merged:

1. choose the final patch version from the actual accumulated compatible changes (currently the next version would be `1.0.1`),
2. prepare and validate the release candidate,
3. create the matching `editor-v<version>` release/tag,
4. publish the exact version to npm,
5. run the public-registry consumer smoke test,
6. re-verify the real external consumer on that released version as required by #112.

Do not publish an intermediate release merely to make this document current if further P2 fixes are still outstanding.
