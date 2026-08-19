# @pawelwielga/skincrafter-editor

Reusable React/TypeScript editor used by the standalone SkinCrafter website and by external hosts such as VanillaOdyssey Web.

## Install

Pin an explicit released version in the consuming application:

```bash
npm install @pawelwielga/skincrafter-editor@0.1.0 react@18 react-dom@18 three@0.178
```

Import the component and its packaged stylesheet:

```tsx
import {
  SkinCrafterEditor,
  type SkinCrafterError,
  type SkinCrafterGenerationStatus,
  type SkinCrafterSkinOutput,
} from '@pawelwielga/skincrafter-editor';
import '@pawelwielga/skincrafter-editor/styles.css';

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

- `locale`: host-controlled `en` or `pl`. The package does not own a language selector.
- `initialSkin`: initial appearance/layer-order input for uncontrolled use.
- `value` + `onStateChange`: fully host-controlled editor state.
- `persistence`: optional host storage adapter. `load()` returns runtime/legacy initial state and `save()` receives the current versioned serialized state. The package never reads or writes `localStorage` directly.
- `onSkinChange`: receives the current generated PNG as `Blob`, `File`, data URL and metadata after the current semantic state has generated successfully.
- `onSave`: called from the editor save/download action with the same upload-ready output. The action is unavailable while the current state is not `ready`.
- `onStatusChange`: reports generation transitions such as `generating`, `ready` and `error`.
- `onError`: reports structured generation, asset and preview failures without exposing DOM, canvas or Three.js objects as public API.
- `assetBaseUrl`: optional host asset prefix for deployments that provide their own SkinCrafter asset set.
- `className`, `style`, `theme`: host-shell integration without forking package CSS.
- `previewBottomOffset`: lets a host reserve vertical space for its own shell/footer.

The package also exports `SkinPreview` for the standalone `/mcskinview` route and other read-only preview use cases. `SkinPreview` accepts the same `onError` callback for preview texture/WebGL failures. Consumers should import only from the package root, never from `dist` or repository-internal paths.

## Generation status and errors

`SkinCrafterGenerationStatus` is:

```ts
type SkinCrafterGenerationStatus = 'idle' | 'generating' | 'ready' | 'error';
```

A successful output is valid only for the exact semantic editor state that produced it. As soon as appearance, layer order or the asset base changes, the previous output becomes stale and cannot be saved until the new state reaches `ready`. If generation fails, the previous state's file is never reused for save/upload.

`SkinCrafterError` has a stable category/code plus optional asset and cause context:

```ts
interface SkinCrafterError {
  code:
    | 'generation_failed'
    | 'asset_load_failed'
    | 'preview_texture_load_failed'
    | 'preview_webgl_initialization_failed';
  category: 'generation' | 'asset' | 'preview';
  message: string;
  assetUrl?: string;
  cause?: unknown;
}
```

Generation and asset failures move generation status to `error` and keep save disabled. Preview-only failures are reported separately because they do not invalidate an already generated PNG. The editor displays a localized default error message for both generation and preview failures; hosts may additionally use `onError` for telemetry or their own shell-level UI.

Late async completions are ignored when they belong to an obsolete editor state. Hosts should therefore treat `onSkinChange` as the authoritative notification that the current state has produced a new upload-ready skin rather than caching and reusing a previous result after subsequent edits.

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
  };
}
```

The host can append `file` directly to `FormData`. DOM/canvas scraping is not part of the supported contract.

## Persistence and schema compatibility

Persistence storage belongs to the host, while the persisted format and migration rules belong to the package.

The current wire format is `SkinCrafterSerializedStateV1`:

```ts
interface SkinCrafterSerializedStateV1 {
  schemaVersion: 1;
  appearance: AppearanceState;
  layerOrder: TextureLayerCategoryId[];
}
```

Use the exported helpers rather than duplicating parsing, normalization or migrations:

```ts
import {
  parseSkinCrafterState,
  serializeSkinCrafterState,
  type SkinCrafterPersistenceAdapter,
} from '@pawelwielga/skincrafter-editor';

const STORAGE_KEY = 'my-editor-state';

const persistence: SkinCrafterPersistenceAdapter = {
  load: () => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    let value: unknown;
    try {
      value = JSON.parse(raw) as unknown;
    } catch {
      return null;
    }

    const parsed = parseSkinCrafterState(value);
    if (!parsed.success) {
      // In particular, do not reinterpret an unknown future schema as the current format.
      console.error(parsed.error.code, parsed.error.message);
      return null;
    }

    return parsed.state;
  },
  save: (state) => {
    // `state` is already the current SkinCrafterSerializedState.
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  },
};
```

`serializeSkinCrafterState(runtimeState)` is also exported for hosts that persist controlled state outside the component adapter.

`parseSkinCrafterState(value)` returns a discriminated `SkinCrafterStateParseResult`:

- current schema input returns the normalized runtime state and canonical serialized state,
- legacy unversioned state is migrated explicitly,
- schema version `0` is supported as the explicit older migration step into version `1`,
- unknown future versions fail with `unsupported_schema_version` and are never treated as the current schema,
- malformed state fails with `invalid_state`,
- removed/invalid option IDs fall back through the editor's normal option rules and emit `appearance_value_defaulted` migration notices,
- layer order keeps valid known layers in their stored relative order, removes invalid/duplicate entries and appends missing known layers in the package's canonical order; normalization is reported through a `layer_order_normalized` notice.

A successful parse includes `sourceSchemaVersion`, `migrated`, `notices`, the runtime `state`, and the canonical current `serializedState`. Hosts can therefore distinguish a clean current-schema load from a migration or fallback instead of guessing whether a default value was intentional.

When a future release changes the persisted semantic model incompatibly, the package will advance `schemaVersion` and add deterministic migrations. Storage/database selection remains a host concern.

The standalone SkinCrafter site migrates its historical `wardrobeAppearance`, `wardrobeLayerOrder` and older single-value wardrobe keys into the versioned `skincrafterState` entry. After a successful migration it reads the versioned entry on later loads, while current saves keep the old aggregate keys synchronized for backward compatibility with older standalone builds.

## Localization

The editor locale is a prop. An embedding application owns the locale and can coordinate it with its own language selector. The standalone app keeps its persisted `skincrafterLanguage` setting and passes that language into the package.

## Styling and theme hooks

Import `@pawelwielga/skincrafter-editor/styles.css`. Package Tailwind preflight is disabled, and generated utilities plus package-owned selectors are scoped below `.skincrafter-editor`. Importing the stylesheet therefore does not redefine common host classes such as `flex`, `grid`, `container` or `border` outside the editor boundary. Package keyframes use the `skincrafter-` prefix.

The editor root is `.skincrafter-editor`. `className` and `style` are applied to that root. `theme` maps to these CSS variables:

- `--skincrafter-accent`
- `--skincrafter-accent-strong`
- `--skincrafter-surface`
- `--skincrafter-text`
- `--skincrafter-muted`
- `--skincrafter-border`

Editor icons are bundled package-owned inline SVGs. An embedding host does not need Font Awesome or another global icon stylesheet. Layer ordering uses browser-native drag-and-drop inside the editor plus ordinary focusable up/down buttons for keyboard operation; the package does not install compatibility globals on `window`.

## Assets and non-root routes

Default texture assets are bundled by the package build, so `/character`, `/account/character`, or any other host route does not change where the default textures resolve.

If a host intentionally serves a compatible asset set itself, pass `assetBaseUrl`, for example `/character/skincrafter-assets/`. All logical texture paths are then resolved below that prefix instead of assuming `/textures/...` at the application root.

## Release/versioning policy

The package follows SemVer. The version is stored in `packages/editor/package.json`.

1. Update the package version and changelog/release notes.
2. Merge the change to `main` after `npm test`, `npm run test:e2e`, and `npm run build` pass.
3. Create a GitHub release with tag `editor-v<version>`, for example `editor-v0.1.0`.
4. `.github/workflows/publish-editor.yml` verifies that the tag matches the package version, validates the workspace, creates an npm-compatible `.tgz`, and attaches that tarball to the GitHub release.
5. If repository secret `NPM_TOKEN` is configured, the same workflow also publishes `@pawelwielga/skincrafter-editor` to the public npm registry with provenance.
6. Production consumers pin an explicit released package version, from npm when available or from the matching versioned GitHub release artifact. They must not use repository branches, copied source, or local filesystem links.

Breaking public contract changes require a major version bump. Additive public props/types are minor releases. Fixes that preserve the contract are patch releases.
