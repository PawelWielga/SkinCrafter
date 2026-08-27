# @dihor/skincrafter-editor

Reusable React/TypeScript editor used by the standalone SkinCrafter website and by external hosts such as VanillaOdyssey Web.

## Install

Pin an explicit released version in the consuming application:

```bash
npm install @dihor/skincrafter-editor@1.1.0 react@18 react-dom@18 three@0.178
```

Import the component and its packaged stylesheet:

```tsx
import {
  SkinCrafterEditor,
  type SkinCrafterError,
  type SkinCrafterGenerationStatus,
  type SkinCrafterSkinOutput,
} from '@dihor/skincrafter-editor';
import '@dihor/skincrafter-editor/styles.css';

function CharacterEditor() {
  const handleSave = (skin: SkinCrafterSkinOutput) => {
    const body = new FormData();
    body.append('skin', skin.file);
    // The host decides where/how to upload. The editor never calls VanillaOdyssey APIs.
  };

  const handleStatus = (status: SkinCrafterGenerationStatus) => {
    console.log('Skin generation:', status);
  };

  const handleError = (error: SkinCrafterError) => {
    console.error(error.code, error.assetUrl, error.cause);
  };

  return (
    <SkinCrafterEditor
      locale="pl"
      initialSkin={{ appearance: { race: 'Human', sex: 'Male' } }}
      onSkinChange={(skin) => console.log(skin.metadata)}
      onStatusChange={handleStatus}
      onError={handleError}
      onSave={handleSave}
    />
  );
}
```

## Public contract

`SkinCrafterEditor` supports:

- `locale`: host-controlled `en`, `pl` or `pt-BR`. The package does not own a language selector.
- `initialSkin`: initial semantic appearance/layer-order/wardrobe-color input, or an existing 64x64 Minecraft PNG supplied as `Blob` with explicit `classic`/`slim` model metadata.
- `value` + `onStateChange`: fully host-controlled semantic editor state.
- `persistence`: optional host storage adapter for semantic appearance, layer-order and wardrobe-color state. `load()` may explicitly report `loaded`, `empty` or `incompatible`; `incompatible` keeps the editor usable in memory while suppressing persistence writes for that mount. Exceptions from `load()` or `save()` are isolated from the editor lifecycle, reported through `onError`, and disable persistence for the remainder of that editor mount. `save()` receives the current versioned serialized state. The package never reads or writes `localStorage` directly.
- `onSkinChange`: receives the current generated PNG as `Blob`, `File`, data URL and metadata after the current semantic/imported state has generated successfully.
- `onSave`: called from the editor save/download action with the same upload-ready output. The action is unavailable while the current state is not `ready`.
- `onStatusChange`: reports generation/import transitions such as `generating`, `ready` and `error`.
- `onError`: reports structured initial-input, generation, asset, preview and persistence failures without exposing DOM, canvas or Three.js objects as public API.
- `assetBaseUrl`: optional host asset prefix for deployments that provide their own SkinCrafter asset set.
- `className`, `style`, `theme`: host-shell integration without forking package CSS.
- `previewBottomOffset`: lets a host reserve vertical space for its own shell/footer.

The package also exports `SkinPreview` for the standalone `/mcskinview` route and other read-only preview use cases. `SkinPreview` accepts the same `onError` callback for preview texture/WebGL failures. A transient texture-load failure exposes a localized retry action that retries the same URL through the existing mounted Three.js runtime instead of recreating the renderer. Consumers should import only from the package root, never from `dist` or repository-internal paths.

### Wardrobe color state

Color choices for wardrobe items are generic and data-driven. They are not added to `AppearanceState` as fields such as `shirtPrimaryColor`.

```ts
type WardrobeColorState = Partial<
  Record<
    TextureLayerCategoryId,
    Record<string, Record<string, string>>
  >
>;

interface SkinCrafterState {
  appearance: AppearanceState;
  layerOrder: TextureLayerCategoryId[];
  wardrobeColors?: WardrobeColorState;
}
```

The nested path is `category -> item option -> color slot`. `wardrobeColors` remains optional on the runtime public input for source compatibility with existing controlled hosts, but the editor normalizes it internally. Known missing slots receive defaults from the wardrobe item definition, unknown items/slots are discarded, and invalid palette values fall back deterministically.

Colors are stored per item rather than only for the current selection. Switching from a colorable item to `None` or another option and later reselecting the item restores its previous slot colors. Multiple tintable texture layers may share the same slot; they receive the same color and the UI exposes one palette for that slot. Different slots remain independent.

### Controlled and uncontrolled state lifecycle

A mounted `SkinCrafterEditor` may move between controlled and uncontrolled usage. While `value` is present, its normalized semantic state is authoritative and edits are reported through `onStateChange` for the host to apply. The editor also keeps that latest controlled snapshot as its in-memory continuation point.

If the host later removes `value`, the editor continues from the last normalized controlled state that was actually rendered. It does not restore an older local snapshot from before controlled mode. Switching modes by itself does not call `onStateChange`, and a semantically unchanged state does not trigger a new skin composition just because the object identity or control mode changed.

Persistence remains inactive while `value` is supplied. When the editor returns to uncontrolled mode, the persistence adapter is checked using the normal compatibility/error rules before writing, and any first save uses the preserved last controlled state rather than historical internal state.

## Initialize from an existing Minecraft skin

A host that already owns the authoritative Minecraft skin can pass the fetched binary directly. The editor does not fetch remote URLs and does not require the PNG to have been generated by SkinCrafter:

```tsx
import {
  SkinCrafterEditor,
  type SkinCrafterSkinOutput,
} from '@dihor/skincrafter-editor';

function ExistingSkinEditor({ existingSkin }: { existingSkin: Blob }) {
  const save = (skin: SkinCrafterSkinOutput) => {
    // Upload skin.file through the host's own API.
  };

  return (
    <SkinCrafterEditor
      initialSkin={{
        image: existingSkin,
        model: 'slim',
      }}
      onSave={save}
    />
  );
}
```

Imported-skin behavior is intentionally deterministic:

- Only decodable PNG input with Minecraft's supported 64x64 dimensions is accepted. `image/png` is required when the `Blob` declares a MIME type.
- `model` is required for binary input and is never guessed. Use `classic` or `slim` according to the authoritative skin metadata owned by the host.
- The imported PNG is an immutable visual base. SkinCrafter does not reverse-engineer its pixels into race, clothing, hair or other wardrobe option IDs.
- Before any supported editor category is changed, generated output uses the imported PNG bytes unchanged and the Three.js preview displays that same texture.
- Once a category is explicitly edited, only the SkinCrafter texture layer controlled by that category is composed over the imported base. For example, changing a hat overlays the selected hat without first replacing the imported body, eyes or clothing with SkinCrafter defaults.
- Related color/model controls activate their owning texture layer: `race`/`sex`/`skinColor` control the body layer, `eyes`/`eyesColor` control the eye layer, and `hair`/`hairColor` control the hair layer. A wardrobe slot-color edit activates its owning wardrobe category. Active wardrobe layers still respect the normal layer-order contract.
- The imported model stays `classic` or `slim` until `sex` is explicitly edited. An explicit sex edit switches subsequent output/preview model using the normal SkinCrafter sex-to-model rule and, when the body layer is active, composes the matching body texture. Merely opening a slim skin whose semantic defaults say `Male` therefore does not silently reinterpret its arm geometry as classic.
- Replacing the imported image is race-safe. A late completion from an older import cannot overwrite a newer one. Re-supplying byte-identical input with the same model is recognized semantically and does not emit a duplicate skin generation.
- Removing the binary `image` input returns the editor to normal SkinCrafter semantic generation using the current appearance/layer-order/wardrobe-color state.

The binary base is deliberately **not** embedded into `SkinCrafterSerializedStateV2`. Hosts normally already persist that authoritative PNG/file separately from editor wardrobe preferences, so serializing the image again would duplicate binary ownership and bloat the semantic state record. If a host needs the imported base across sessions, persist/re-fetch the PNG in host-owned storage and pass it back through `initialSkin.image`; use the versioned SkinCrafter state helpers for semantic appearance, layer order and wardrobe colors. Any future package-owned persisted representation of imported binary state must advance the versioned schema and use the same migration contract rather than creating a parallel format.

## Generation status and errors

`SkinCrafterGenerationStatus` is:

```ts
type SkinCrafterGenerationStatus = 'idle' | 'generating' | 'ready' | 'error';
```

A successful output is valid only for the exact semantic/imported editor state that produced it. As soon as appearance, wardrobe colors, layer order, imported image/model or the asset base changes, the previous output becomes stale and cannot be saved until the current state reaches `ready`. If generation or imported-image validation fails, the previous state's file is never reused for save/upload.

`SkinCrafterError` has a stable category/code plus optional asset and cause context:

```ts
interface SkinCrafterError {
  code:
    | 'generation_failed'
    | 'asset_load_failed'
    | 'invalid_initial_skin'
    | 'preview_texture_load_failed'
    | 'preview_webgl_initialization_failed'
    | 'persistence_load_failed'
    | 'persistence_save_failed';
  category: 'generation' | 'asset' | 'input' | 'preview' | 'persistence';
  message: string;
  assetUrl?: string;
  cause?: unknown;
}
```

`invalid_initial_skin` reports malformed, unsupported-dimension or undecodable imported input through category `input`. Generation, asset and input failures move generation status to `error` and keep save disabled. Preview-only failures are reported separately because they do not invalidate an already generated PNG. Texture-load failures can be retried for the same URL from the localized preview action while preserving the mounted renderer and stale-request protection. Persistence failures are also reported separately: they disable persistence for the current editor mount but do not change a successful skin generation to `error`, invalidate a valid PNG or disable the editor's in-memory state. The editor displays a localized default error message for generation/input failures; hosts may additionally use `onError` for telemetry or their own shell-level UI.

Late async completions are ignored when they belong to an obsolete editor/import state. Hosts should therefore treat `onSkinChange` as the authoritative notification that the current state has produced a new upload-ready skin rather than caching and reusing a previous result after subsequent edits.

## Skin output

`SkinCrafterSkinOutput` contains:

```ts
{
  blob: Blob;
  file: File; // skincrafter-skin.png
  dataUrl: string;
  metadata: {
    width: 64;
    height: 64;
    mimeType: 'image/png';
    model: 'classic' | 'slim';
    appearance: AppearanceState;
    layerOrder: TextureLayerCategoryId[];
    wardrobeColors: WardrobeColorState;
  };
}
```

The host can append `file` directly to `FormData`. DOM/canvas scraping is not part of the supported contract.

## Persistence and schema compatibility

Persistence storage belongs to the host, while the persisted semantic format, migration rules and safe compatibility signal belong to the package.

The current wire format is `SkinCrafterSerializedStateV2`:

```ts
interface SkinCrafterSerializedStateV2 {
  schemaVersion: 2;
  appearance: AppearanceState;
  layerOrder: TextureLayerCategoryId[];
  wardrobeColors: WardrobeColorState;
}
```

`SkinCrafterSerializedStateV1` remains exported as the historical v1 shape for migration-aware hosts, but `SkinCrafterSerializedState` aliases the current v2 wire contract.

For versioned storage, return the explicit `SkinCrafterPersistenceLoadResult` from `load()`:

- `{ status: 'loaded', state }` means a compatible runtime/legacy state was loaded and persistence writes are allowed,
- `{ status: 'empty' }` means there is no usable saved state; the editor starts from defaults and persistence writes are allowed,
- `{ status: 'incompatible' }` means a record exists but must not be replaced by this package version. The editor starts from defaults in memory and suppresses all calls to this adapter's `save()` for the lifetime of that mounted editor.

Legacy adapters that return a semantic state directly or `null` remain supported for compatibility, but hosts that parse versioned records should use the explicit result so an unsupported future schema cannot be confused with a missing record. `SkinCrafterEditor` may call `save()` after mount for writable `loaded`/`empty` results, so `incompatible` is the required signal when the original record must be preserved. If the host later removes or upgrades the incompatible record, remount the editor so persistence compatibility is evaluated again.

Persistence adapter failures are fail-safe and deterministic:

- if `load()` throws, the editor reports `persistence_load_failed` through `onError`, keeps an explicit `initialSkin` when one was supplied (otherwise it uses normalized defaults), and continues entirely in memory,
- a failed `load()` blocks persistence for the remainder of that editor mount because the editor cannot prove what record may already exist and must not overwrite unreadable or future data,
- if `save()` throws, the current editor state and generated PNG remain valid; the editor reports `persistence_save_failed` and disables persistence for the remainder of that editor mount,
- changing only the `persistence` prop identity after a persistence exception does not retry the adapter. This prevents host `onError` state updates from recreating an adapter and causing a reporting loop. Remount the editor to retry persistence explicitly,
- before any persistence exception has occurred, replacing the adapter still re-evaluates its compatibility before saving,
- exceptions thrown by the host's `onError` callback are also isolated and cannot turn a persistence problem into an editor crash.

Persistence failures do not emit generation status `error`. `onStatusChange` continues to describe PNG/import generation, while `onError` is the structured channel for persistence telemetry.

Use the exported helpers rather than duplicating parsing, normalization or migrations:

```ts
import {
  parseSkinCrafterState,
  serializeSkinCrafterState,
  type SkinCrafterPersistenceAdapter,
} from '@dihor/skincrafter-editor';

const STORAGE_KEY = 'my-editor-state';

const persistence: SkinCrafterPersistenceAdapter = {
  load: () => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { status: 'empty' };

    let value: unknown;
    try {
      value = JSON.parse(raw) as unknown;
    } catch {
      return { status: 'empty' };
    }

    const parsed = parseSkinCrafterState(value);
    if (!parsed.success) {
      console.error(parsed.error.code, parsed.error.message);
      return parsed.error.code === 'unsupported_schema_version'
        ? { status: 'incompatible' }
        : { status: 'empty' };
    }

    return { status: 'loaded', state: parsed.state };
  },
  save: (state) => {
    // `state` is already the current SkinCrafterSerializedState.
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  },
};
```

`serializeSkinCrafterState(runtimeState)` is also exported for hosts that persist controlled state outside the component adapter. `normalizeWardrobeColors(value)` is exported when hosts need the same canonical color-slot normalization independently.

`parseSkinCrafterState(value)` returns a discriminated `SkinCrafterStateParseResult`:

- current schema input returns normalized runtime state and canonical serialized state,
- legacy unversioned state is migrated explicitly,
- schema version `0` migrates to v1 and v1 migrates to current v2,
- v1 and older states receive current wardrobe slot defaults during migration,
- current/older records missing newly introduced known slots receive those slots' declared defaults and emit `wardrobe_colors_normalized`,
- unknown wardrobe items/slots or invalid palette values are removed/defaulted deterministically,
- unknown future versions fail with `unsupported_schema_version` and are never treated as the current schema,
- malformed state fails with `invalid_state`,
- removed/invalid option IDs fall back through the editor's normal option rules and emit `appearance_value_defaulted`,
- layer order keeps valid known layers in stored relative order, removes invalid/duplicate entries and appends missing known layers in canonical order; normalization emits `layer_order_normalized`.

A successful parse includes `sourceSchemaVersion`, `migrated`, `notices`, the runtime `state`, and the canonical current `serializedState`. Hosts can therefore distinguish a clean current-schema load from a migration or fallback instead of guessing whether a default value was intentional.

When a future release changes the persisted semantic model incompatibly, the package will advance `schemaVersion` and add deterministic migrations. Storage/database selection remains a host concern. Hosts that encounter `unsupported_schema_version` should return `incompatible` and preserve the original record rather than replacing it with defaults from an older package release.

The standalone SkinCrafter site migrates its historical `wardrobeAppearance`, `wardrobeLayerOrder` and older single-value wardrobe keys into the versioned `skincrafterState` entry. Current saves keep the aggregate legacy keys synchronized for backward compatibility with older standalone builds. If those valid aggregate keys later diverge from `skincrafterState`, the standalone treats the divergence as a newer edit made by an older compatible build and migrates those user choices forward into the current schema. If `skincrafterState` uses an unsupported future schema, the standalone returns the package-defined `incompatible` result, renders with normal in-memory defaults and relies on the editor's public persistence contract to suppress writes for that mount, preventing an older build from downgrading newer persisted data.

## Localization

The editor locale is a prop. An embedding application owns the locale and can coordinate it with its own language selector. The standalone app keeps its persisted `skincrafterLanguage` setting and passes that language into the package.

## Styling and theme hooks

Import `@dihor/skincrafter-editor/styles.css`. Package Tailwind preflight is disabled, and generated utilities plus package-owned selectors are scoped below `.skincrafter-editor`. Importing the stylesheet therefore does not redefine common host classes such as `flex`, `grid`, `container` or `border` outside the editor boundary. Package keyframes use the `skincrafter-` prefix.

The editor root is `.skincrafter-editor`. `className` and `style` are applied to that root. `theme` maps to these CSS variables:

- `--skincrafter-accent`
- `--skincrafter-accent-strong`
- `--skincrafter-surface`
- `--skincrafter-text`
- `--skincrafter-muted`
- `--skincrafter-border`

Editor icons are bundled package-owned inline SVGs. An embedding host does not need Font Awesome or another global icon stylesheet. Layer ordering uses browser-native drag-and-drop inside the editor plus ordinary focusable up/down buttons for keyboard operation; the package does not install compatibility globals on `window`.

## Internal texture-backed content

Contributors use one internal texture-item path for Race, Eyes, future real Hair items and wardrobe content. `src/data/textureItemDefinitions.ts` owns the neutral `TextureItemDefinition` / `TextureItemVariants` contract, validates explicit `classic`/`slim` model metadata and color slots, resolves assets, and builds ordered `TextureInput[]` through `buildTextureInputsFromItem()`.

Character fields such as `skinColor`, `eyesColor` and `hairColor` remain in the public `AppearanceState` for source/wire compatibility. Internally they are adapters onto color slots owned by the selected Race/Eyes/Hair texture item. The same declarative control -> visual-layer ownership mapping drives imported-skin activation, so a color/model edit activates its complete logical visual layer without a separate tint/compositor algorithm.

Wardrobe definition helpers remain available internally as compatibility aliases over the neutral contract; they are not a second schema. Adding a new option to an existing texture-backed category should normally be asset + typed definition + translations + tests, without another compositor branch.

See the repository-level `CONTENT_WORKFLOW.md` and `src/assets/textures/README.md` for the authoring contract, Classic/Slim rules, tintable/fixed layer ordering and validation checklist.

## Assets and non-root routes

SkinCrafter-owned texture PNGs are part of the package artifact, but they are emitted as separate cache-safe hashed files rather than embedded as base64 payloads in `dist/index.js`. The editor JavaScript therefore grows with logical asset references, not with the binary size of every texture, and the browser only requests texture files that are actually used by preview/composition or option thumbnails.

Default package asset URLs are relative to the emitted editor module. A normal bundler such as Vite can therefore carry the installed package assets into an application served from `/character`, `/account/character`, or another non-root base without SkinCrafter assuming `/textures/...` or `/assets/...` at the application root. The packed `.tgz` includes the emitted PNG files under `dist/assets/`; their hashed filenames are intentionally cacheable as immutable build artifacts and may change when the underlying texture bytes change.

If a host intentionally serves a compatible asset set itself, pass `assetBaseUrl`, for example `/character/skincrafter-assets/` or an absolute CDN prefix. All logical texture paths are then resolved below that prefix instead of using the package-emitted URL. The override must mirror the logical `textures/...` layout used by SkinCrafter. Package assets remain available in the distributable artifact as the default fallback, but their bytes are not duplicated inside the JavaScript bundle.

When adding a new texture-backed option, add its PNG layers to `packages/editor/src/assets/textures`, register the typed logical paths in `src/assetResolver.ts`, and define the item through the shared texture-item contract. Keep logical paths stable unless the owning semantic mapping is intentionally changed. Package verification checks that runtime PNGs are emitted as separate hashed files, referenced by the runtime bundle, included by `npm pack`, and never reintroduced as inline PNG data URLs. The external-consumer smoke test also builds the packed package below `/character/` so route-relative asset regressions fail CI.

## Release/versioning policy

The package follows SemVer. The version is stored in `packages/editor/package.json`.

1. Update the package version and keep the standalone dependency on `@dihor/skincrafter-editor` aligned with that version; refresh `package-lock.json` in the same change.
2. Merge the release preparation to `main` after repository validation, including `npm test`, `npm run test:e2e`, `npm run build`, and `npm run test:consumer`, passes.
3. Create a GitHub release with tag `editor-v<version>`, for example `editor-v0.1.0`.
4. `.github/workflows/publish-editor.yml` verifies that the tag matches the package version, validates the workspace on the supported Node 20 baseline, creates an npm-compatible `.tgz`, and attaches that tarball to the GitHub release.
5. The workflow publishes `@dihor/skincrafter-editor` to the public npm registry with provenance. npm Trusted Publishing through GitHub Actions OIDC is the preferred authentication method; configure the npm package to trust repository `PawelWielga/SkinCrafter` and workflow `publish-editor.yml`. Repository secret `NPM_TOKEN` remains an optional fallback.
6. Trusted Publishing requires the package to already exist on npm, so the initial package version is published manually before the trusted publisher relationship is configured. Future releases are published automatically when the matching GitHub release is published.
7. Production consumers pin an explicit released package version, from npm when available or from the matching versioned GitHub release artifact. They must not use repository branches, copied source, or local filesystem links.

Breaking public contract changes require a major version bump. Additive public props/types are minor releases. Fixes that preserve the contract are patch releases.
