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
  type SkinCrafterSkinOutput,
} from '@pawelwielga/skincrafter-editor';
import '@pawelwielga/skincrafter-editor/styles.css';

function CharacterEditor() {
  const handleSave = (skin: SkinCrafterSkinOutput) => {
    const body = new FormData();
    body.append('skin', skin.file);
    // The host decides where/how to upload. The editor never calls VanillaOdyssey APIs.
  };

  return (
    <SkinCrafterEditor
      locale="pl"
      initialSkin={{ appearance: { race: 'Human', sex: 'Male' } }}
      onSkinChange={(skin) => console.log(skin.metadata)}
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
- `persistence`: optional adapter with `load()` and `save()`. The package never reads or writes `localStorage` directly.
- `onSkinChange`: receives the current generated PNG as `Blob`, `File`, data URL and metadata.
- `onSave`: called from the editor save/download action with the same upload-ready output.
- `assetBaseUrl`: optional host asset prefix for deployments that provide their own SkinCrafter asset set.
- `className`, `style`, `theme`: host-shell integration without forking package CSS.
- `previewBottomOffset`: lets a host reserve vertical space for its own shell/footer.

The package also exports `SkinPreview` for the standalone `/mcskinview` route and other read-only preview use cases. Consumers should import only from the package root, never from `dist` or repository-internal paths.

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

## Persistence

Persistence belongs to the host. Example:

```ts
const persistence = {
  load: () => JSON.parse(localStorage.getItem('my-editor-state') ?? 'null'),
  save: (state) => localStorage.setItem('my-editor-state', JSON.stringify(state)),
};
```

The standalone SkinCrafter app uses this pattern and keeps its legacy wardrobe keys compatible.

## Localization

The editor locale is a prop. An embedding application owns the locale and can coordinate it with its own language selector. The standalone app keeps its persisted `skincrafterLanguage` setting and passes that language into the package.

## Styling and theme hooks

Import `@pawelwielga/skincrafter-editor/styles.css`. Package Tailwind preflight is disabled so importing editor styles does not reset the host application.

The editor root is `.skincrafter-editor`. `className` and `style` are applied to that root. `theme` maps to these CSS variables:

- `--skincrafter-accent`
- `--skincrafter-accent-strong`
- `--skincrafter-surface`
- `--skincrafter-text`
- `--skincrafter-muted`
- `--skincrafter-border`

The standalone site still loads Font Awesome for its current icon set. Hosts may load Font Awesome as well; missing icons do not affect editor behavior or skin generation.

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
