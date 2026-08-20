# AGENTS.md

This file is the operating contract for AI agents working in the SkinCrafter repository. Read it before changing code, documentation, CI, dependencies, issues, or releases.

The goal is not only to make a requested change compile. Work should leave the repository in a production-ready state, preserve the architectural boundaries described below, add regression protection where appropriate, and be delivered through the normal GitHub workflow.

## 1. Project identity and architectural intent

SkinCrafter is a React + TypeScript Minecraft skin creator organized as an npm workspace.

There is exactly one authoritative editor implementation:

- `packages/editor` contains the reusable product surface.
- `apps/standalone` is a host application that consumes the reusable package.
- External applications, especially VanillaOdyssey Web, are expected to consume the released package in the same way as any other host.

The most important architectural invariant is:

> Editor behavior must never be duplicated in the standalone app or in an external host.

`@dihor/skincrafter-editor` owns skin editing, appearance state, texture composition, editor localization, editor UI, package-owned assets, generated skin output, and Three.js preview behavior. Hosts own application-specific routing, authentication, persistence location, networking, navigation, page chrome, and backend integration.

Do not solve integration problems by copying source code, scraping editor DOM/canvas state, using iframes as the application contract, or making a consumer depend on an unreleased repository branch.

## 2. Always do this before starting work

Repository state changes frequently. Never rely only on an old conversation, previous agent report, issue checklist, or remembered repository state.

At the beginning of every implementation task:

1. Read this `AGENTS.md` from the current default branch.
2. Read the root `README.md`.
3. Read `packages/editor/README.md` when the editor package, its public API, assets, persistence, styling, output, or release behavior may be affected.
4. Read the relevant `package.json` files and relevant workflow/configuration files instead of assuming dependency versions or commands.
5. Inspect the current open GitHub Issues and open Pull Requests.
6. Inspect recently merged PRs when they may have changed the area being worked on.
7. Read the complete issue, its comments, dependencies, linked issues, and Acceptance Criteria before implementing it.
8. Inspect the existing implementation and tests before deciding on a solution.

Treat GitHub and the current repository contents as the source of truth for transient state.

Do not hard-code the current open-issue list, current PR list, or temporary roadmap progress into this file. Those must be refreshed from GitHub at the start of each task.

## 3. Selecting an issue autonomously

When asked to choose the next issue yourself, do not simply pick the oldest or easiest issue.

An eligible implementation issue must:

- still be open,
- not be blocked by another unfinished issue,
- not already be implemented by an existing open PR,
- not be only a tracking/meta issue when an actionable child issue exists,
- have enough information to implement safely from the repository and issue context.

Prefer work in this order when multiple issues are eligible:

1. correctness, security, data integrity, runtime lifecycle, and production regressions,
2. blockers for the reusable editor/public package contract,
3. CI/release guarantees that protect the package and external consumers,
4. host-isolation and reliability foundations,
5. durable persistence/data compatibility,
6. performance/scalability foundations,
7. feature expansion and polish.

Respect explicit dependency ordering from tracking issues. A tracking issue is a planning artifact, not usually the implementation unit.

Before starting implementation, search open PRs again for the issue number and key terms. Do not create duplicate work.

## 4. Current technology baseline

The repository currently uses:

- Node.js 20 as the project runtime baseline,
- npm workspaces,
- Vite 7,
- React 18,
- TypeScript with strict type checking,
- Tailwind CSS 3,
- Three.js,
- React Router 7 in the standalone app,
- Vitest + Testing Library,
- Playwright.

Exact versions in `package.json` and `package-lock.json` are authoritative. Do not update this file merely because a patch version changes unless the architectural/runtime baseline changes.

## 5. Repository map

### `packages/editor`

Package name: `@dihor/skincrafter-editor`.

This is the authoritative reusable implementation and public integration boundary.

Important areas include:

- `src/SkinCrafterEditor.tsx`: reusable editor component and host-controlled state contract,
- `src/SkinPreview.tsx`: reusable read-only skin preview,
- `src/publicTypes.ts`: public state, props, persistence, output and theme types,
- `src/skinOutput.ts`: generated PNG converted to upload-ready `Blob`/`File` output,
- `src/assetResolver.ts`: package/default asset resolution and host asset override,
- `src/components/wardrobe.tsx`: customization controls and layer ordering,
- `src/components/previewArea.tsx`: preview controls and save/download behavior,
- `src/components/three/*`: renderer lifecycle, model geometry, UV mapping, materials and poses,
- `src/data/appearance.ts`: appearance model, normalization and texture inputs,
- `src/assets/textures/*`: SkinCrafter-owned texture assets,
- `src/i18n/translations.ts`: editor translations and locale helpers,
- `src/utils/combineTextures.ts`: pixel-preserving skin composition,
- `src/styles/*`: package styling and supported theme variables,
- `src/index.ts`: the only supported public import surface,
- `scripts/*`: declaration/package verification used by the package build.

### `apps/standalone`

The standalone site intentionally behaves like an external consumer of the editor package.

Important areas include:

- `src/pages/App.tsx`: application routes and creator host,
- `src/pages/McSkinView.tsx`: PlayerDB username lookup using packaged `SkinPreview`,
- `src/components/appShell.tsx`: page shell and persisted standalone language,
- `src/components/nbar.tsx`: standalone navigation/language UI,
- `src/api/fetchSkin.ts`: PlayerDB networking,
- `src/styles/main.css`: standalone shell styling only,
- `scripts/create-pages-fallback.mjs`: GitHub Pages SPA fallback generation,
- `public/CNAME`: production domain configuration.

### Root and CI

Important root files include:

- `tests/e2e/*`: standalone integration/e2e coverage,
- `playwright.config.ts`: Playwright configuration,
- `scripts/verify-external-consumer.mjs`: verifies the real packed editor artifact in a clean external project,
- `.github/workflows/build.yml`: install, production audit, lint, unit tests, build, external-consumer smoke test,
- `.github/workflows/test.yml`: Playwright CI,
- `.github/workflows/gh-pages.yml`: standalone deployment,
- `.github/workflows/publish-editor.yml`: editor release/package publication.

## 6. Package boundary rules

These rules are architectural constraints, not suggestions.

- Do not move editor state, wardrobe behavior, texture composition, skin generation, or Three.js implementation into `apps/standalone`.
- Do not add VanillaOdyssey-specific APIs, authentication, database models, routing, or backend networking to `packages/editor`.
- The reusable package must not directly own browser persistence such as `localStorage`. Persistence is supplied by a host adapter or host-controlled state.
- External consumers import only from `@dihor/skincrafter-editor` and its documented exports. Never require imports from `src`, `dist`, or repository-internal paths.
- Keep the public API small, typed, host-agnostic, and intentional.
- Do not expose DOM nodes, canvas internals, Three.js implementation objects, or temporary internal data structures as stable public API unless the issue explicitly requires a designed contract.
- The standalone app should exercise the same public integration path expected from VanillaOdyssey or another external host.

When a change is useful only to one host, prefer a host-owned adapter/callback rather than making the editor aware of the host.

## 7. Public API and package compatibility

The editor is a released reusable package, not just code shared inside a monorepo.

When changing package exports or public types:

- preserve ESM package correctness,
- preserve compatibility with supported TypeScript Bundler and NodeNext consumers,
- update `src/index.ts` intentionally,
- do not make consumers import private files,
- update `packages/editor/README.md` for user-facing contract changes,
- add package-level contract tests,
- run the real external-consumer smoke test.

The packed `.tgz` is the artifact that matters. Workspace symlink success is not sufficient proof that the published package works.

Breaking public API changes require a major SemVer release. Additive public API normally requires a minor release. Contract-preserving fixes normally require a patch release.

Do not bump package version merely because implementation work touched the package unless the task includes preparing a release/version change.

## 8. State and persistence

The package supports host-owned initial/controlled state and optional persistence adapters. The package does not decide where state is stored.

The standalone application owns its browser persistence. Existing/legacy persisted user state must not be silently broken by refactors.

When touching state behavior:

- distinguish semantic state changes from object/callback identity changes,
- avoid React feedback loops caused by host callbacks updating state,
- protect against stale asynchronous generation results overwriting newer state,
- preserve the exact state snapshot associated with generated output,
- do not silently discard known valid persisted values.

If serialized-state schema/versioning exists or is introduced, migration/parsing logic belongs in the package while the storage location still belongs to the host.

## 9. Skin generation correctness

Generated skins are Minecraft pixel textures. Correctness is more important than visual browser smoothing.

When changing composition/output:

- preserve pixel-exact dimensions and layer ordering,
- preserve transparency,
- avoid image smoothing that alters texture pixels,
- make asynchronous composition race-safe,
- make saved/uploaded output correspond to the current semantic editor state,
- add regression fixtures/tests when composition behavior changes.

The supported output contract should remain upload-ready. Hosts should not need to reconstruct PNG files from DOM/canvas internals.

## 10. Three.js and preview guardrails

The preview has resource-lifecycle requirements that must be preserved.

For normal state/control changes, keep one persistent mounted WebGL renderer lifecycle rather than rebuilding renderer infrastructure unnecessarily.

When touching the preview:

- preserve `NearestFilter` for Minecraft textures,
- keep mipmaps disabled where required for pixel textures,
- preserve transparent second-layer overlays,
- dispose replaced textures, materials, geometries and renderer-owned resources,
- cancel animation frames on teardown,
- remove renderer DOM nodes/listeners/observers on teardown,
- ignore/dispose stale asynchronous texture loads,
- preserve resize handling and device-pixel-ratio clamping,
- preserve camera/rotation state across changes that should not recreate the scene,
- test both classic and slim models when geometry/model behavior changes.

Do not accept a visually working preview if it leaks WebGL resources or recreates the renderer on ordinary controls.

## 11. Assets

SkinCrafter-owned texture assets live under `packages/editor/src/assets/textures` and are distributed as part of the editor package/build pipeline.

Reusable package code must not assume assets are served from application-root paths such as `/textures/...`.

When changing asset handling:

- keep logical asset resolution host-route-safe,
- preserve the documented `assetBaseUrl` override behavior,
- verify installed/packed package behavior rather than only workspace development behavior,
- keep texture composition pixel-correct,
- avoid duplicate asset ownership between SkinCrafter and VanillaOdyssey.

If the asset pipeline changes, test package contents and real consumer resolution explicitly.

## 12. Styling and host isolation

The editor is embeddable inside unrelated applications. Importing its stylesheet must not unexpectedly restyle the host.

- Keep editor-owned styling isolated to package-owned selectors/boundaries.
- Do not intentionally add host-global CSS resets or global utility behavior from the package.
- Package Tailwind preflight remains disabled unless an explicit architecture change replaces the styling strategy.
- Prefer semantic package classes and documented CSS variables over host-specific style forks.
- Do not require undeclared global host CSS/icon dependencies as part of the reusable editor contract.
- Standalone navbar/footer/site-shell styling belongs in `apps/standalone`, not the package.

When fixing style isolation, add regression coverage that embeds host elements beside the editor.

## 13. Localization

The package locale is host-controlled. The standalone application owns its language selector and persisted language choice.

When adding editor-visible text:

- add translations for all supported editor locales, currently English and Polish,
- keep translation keys inside the package localization system,
- do not make the package inspect standalone/browser language persistence directly.

Standalone-only shell text may remain in the standalone application.

## 14. Standalone and GitHub Pages behavior

The standalone app is both the public SkinCrafter site and the reference external-host integration.

Preserve unless an issue intentionally changes them:

- `/` creator behavior,
- `/mcskinview` behavior,
- browser navigation/deep linking,
- GitHub Pages SPA fallback generation,
- `apps/standalone/public/CNAME`,
- separation between package UI and standalone navbar/footer/shell.

Networking such as PlayerDB lookup belongs in the standalone host, not the editor package.

## 15. Dependencies and security

When adding or changing npm dependencies:

- update `package.json` and `package-lock.json` together,
- prefer supported direct-dependency upgrades over transitive hacks,
- do not use `npm audit fix --force` as a shortcut,
- do not add `overrides` merely to hide an advisory without demonstrating compatibility,
- do not downgrade to unsupported versions to silence audit output,
- keep production high/critical vulnerability checks green.

Security/tooling issues must document unavoidable advisories and dependency chains when no safe upstream fix exists.

Do not combine unrelated dependency modernization with a feature/fix PR unless required by that task.

## 16. Implementation style

Implement the requested end state, not a temporary bridge that knowingly needs replacement in the next issue.

Prefer:

- simple, explicit solutions,
- existing project patterns,
- strongly typed public contracts,
- narrow internal abstractions with clear ownership,
- regression tests that reproduce the actual failure mode,
- deterministic behavior around async state and resources.

Avoid:

- duplicated implementations,
- speculative abstractions with no current use,
- broad unrelated refactors,
- mass formatting of untouched files,
- suppressing TypeScript/lint errors instead of fixing them,
- `any` in public contracts unless unavoidable and justified,
- hidden behavior that hosts cannot observe when reliability requires an explicit contract,
- TODO-based partial implementations presented as complete.

If Acceptance Criteria are sufficiently clear, make reasonable implementation decisions without stopping for unnecessary clarification.

If you discover a separate bug or architectural problem that is not necessary to complete the current issue, keep the current PR focused and create/report a separate issue instead of silently expanding scope.

## 17. Tests and regression protection

Tests are part of implementation, not an optional follow-up.

Choose the lowest level that proves the behavior, and add higher-level coverage where the integration boundary matters:

- pure/unit tests for normalization, composition, utilities and deterministic logic,
- React/Testing Library tests for component/public-contract behavior,
- Three.js lifecycle/resource tests for preview internals,
- standalone tests for host behavior,
- Playwright for real browser interaction/layout/navigation/WebGL integration,
- `test:consumer` for published-package/export/install/consumer compatibility.

Every bug fix should normally include a regression test that fails for the old behavior and passes for the fix.

Do not weaken/delete a meaningful test merely to make a change pass unless the underlying requirement intentionally changed and replacement coverage exists.

## 18. Validation commands

Run commands from the repository root unless a task explicitly requires workspace-specific diagnosis.

### Install/development

```bash
npm install
npm run dev
```

For reproducible validation or CI-like verification, prefer a clean:

```bash
npm ci
```

### Default code-change validation baseline

A code-changing PR should normally pass all of the following:

```bash
npm audit --omit=dev --audit-level=high
npm run lint
npm test
npm run test:e2e
npm run build
npm run test:consumer
```

`npm run build` includes package validation/type-consumer checks defined by the workspaces. Do not duplicate commands in the final report just to make the report look longer.

Run additional issue-specific tests/checks required by the Acceptance Criteria.

For dependency/security work, also run the audit command(s) explicitly required by the issue, including full `npm audit` where applicable.

For documentation-only changes that cannot affect runtime/build behavior, full browser/build validation is not mandatory. Verify every referenced path, command, architectural statement and workflow against the repository instead, and clearly report that tests were not run because the change is documentation-only.

Never claim a command passed if it was not actually executed. If local execution is impossible, use CI where available and state exactly where validation ran.

## 19. Git and Pull Request workflow

Unless the user explicitly requests a direct commit to `main`, implementation work should use a branch and Pull Request.

### Before editing

- start from the latest `main`,
- confirm there is no existing PR for the same issue,
- create one focused branch.

Recommended branch naming:

- `fix/<issue>-short-description`
- `feat/<issue>-short-description`
- `chore/<issue>-short-description`
- `docs/<short-description>` for documentation work not tied to an issue.

One implementation issue should normally map to one PR.

### Pull Request body

Use a concise structure containing:

```text
## Summary
- what changed
- important architectural/correctness decisions

## Validation
- exact commands/checks and results

Closes #<issue>
```

Use `Closes #...` only when the PR fully satisfies that issue. Do not close a tracking issue from a child implementation PR.

If validation was performed by GitHub Actions rather than locally, say so explicitly.

Do not merge the PR unless the user asks to merge or the current task explicitly includes merging.

### When asked to merge

Before merging:

- verify the PR is still the intended one,
- check CI/status checks,
- inspect unresolved review feedback where available,
- do not merge known failing/incomplete work unless the user explicitly accepts the exception.

Prefer the repository's established merge method. Do not force-update protected/shared branches merely to make a merge happen.

## 20. Documentation responsibilities

Update documentation whenever the supported behavior or contract changes.

- Root architecture/setup/commands: update `README.md` and this file when appropriate.
- Public editor API, installation, output, persistence, theming, assets, releases: update `packages/editor/README.md`.
- CI/release behavior: keep workflow descriptions accurate.
- User-visible behavior changes: include a short verification note in the PR/report.

Do not document a future implementation as though it already exists. Roadmap intent belongs in issues/tracking documents until implemented.

## 21. Release and distribution

`packages/editor/package.json` is the source of truth for the editor SemVer version.

Editor release tags use:

```text
editor-v<version>
```

The release process must preserve these guarantees:

1. release tag matches the package version,
2. repository validation passes,
3. the real package artifact is created and externally consumable,
4. an npm-compatible `.tgz` is attached/published as configured,
5. production consumers pin a released version.

VanillaOdyssey and other production consumers must not depend on copied SkinCrafter source, workspace symlinks, or an unversioned branch.

## 22. Definition of done

An implementation issue is complete only when all applicable items are true:

- the current Acceptance Criteria are implemented completely,
- relevant architecture boundaries are preserved,
- regression/integration tests were added where appropriate,
- required documentation is updated,
- repository validation passes or any external blocker is precisely reported,
- the implementation is committed on a focused branch,
- a PR is opened with a useful summary and validation evidence,
- the PR references/closes the correct implementation issue.

Passing the existing test suite alone does not prove completion when the issue requires new behavior or new regression protection.

## 23. Final agent report

At the end of an implementation task, report only concrete results. Use this structure:

```text
## Final agent report

### Selected issue
#<number> — <title>
Why it was the correct eligible next issue.

### Implemented
- concise list of completed behavior/architecture changes

### Tests
- new or changed regression/integration coverage

### Validation
- exact commands/checks with pass/fail status
- CI status if used

### Pull Request
#<number> — <title>
<branch> -> main

### Notes
- only real limitations, follow-up issues, or environment constraints
```

Omit `Selected issue` when the user directly requested a specific non-issue task. Omit `Notes` when there is nothing useful to report.

Do not pad the report with implementation narration already obvious from the diff.