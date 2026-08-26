# SkinCrafter 1.2.0 content packs

> Status: design / roadmap document. None of the behavior described here should be treated as implemented until the corresponding implementation work is completed.

This document captures the agreed direction for custom and community content packs planned for SkinCrafter 1.2.0.

## Goal

SkinCrafter should support a portable content-pack format that lets creators add their own appearance elements without modifying the application source code.

The same pack file should be usable in three scenarios:

1. a creator tests the pack locally in SkinCrafter,
2. a user imports the pack manually,
3. an approved pack is published by SkinCrafter as Community content and can be enabled without manual file import.

The pack format should be a data format, not a plugin/code execution format.

## Product terminology

Use **SkinCrafter Content Pack** as the product-level concept rather than limiting the feature to clothing.

Content should be visibly distinguished by source:

- **Built-in**: content shipped as part of SkinCrafter,
- **Community**: third-party content reviewed/approved and published through the SkinCrafter catalog,
- **Custom**: content imported locally by the user.

Imported/community cards should show a subtle source badge or equivalent indication. Pack name and author should be discoverable from the UI.

## Scope for 1.2.0

The first version should extend existing appearance categories rather than allow packs to invent arbitrary new categories.

Supported pack categories should initially be:

- `eyes`
- `hair`
- `hat`
- `shirt`
- `pants`
- `shoes`
- `accessory`

Custom races are intentionally out of scope for the first version. Race definitions interact with base layers, supported sex/model combinations, skin color behavior and normalization, so they should be designed separately after the core pack mechanism is proven.

Dynamic creation of entirely new editor categories is also out of scope for 1.2.0.

## Architectural principle

A content pack must not introduce a parallel rendering/content model.

The external pack schema should map onto the existing SkinCrafter concepts as directly as practical:

- `classic` / `slim` skin model compatibility,
- ordered tintable layers,
- optional fixed layer,
- color slots,
- palettes and deterministic default colors,
- existing texture composition pipeline,
- existing preview/export parity guarantees.

Pack definitions should be converted into the same internal representation used by built-in content before they reach rendering and editor behavior.

## Proposed file format

A pack should be distributed as a single file such as:

```text
fantasy-pack.skincrafter-pack
```

The file may internally be a ZIP-compatible archive with a SkinCrafter-specific extension.

Example structure:

```text
fantasy-pack.skincrafter-pack
├── manifest.json
└── textures/
    ├── wizard-robe.png
    ├── wizard-robe-slim.png
    ├── jacket-body.png
    ├── jacket-sleeves.png
    └── jacket-logo.png
```

Only explicitly supported data files should be accepted. Arbitrary executable code must never be loaded from a pack.

## Manifest direction

The manifest format must be versioned independently from the SkinCrafter application version.

Example top-level metadata:

```json
{
  "formatVersion": 1,
  "id": "someauthor.fantasy",
  "name": "Fantasy Pack",
  "version": "1.0.0",
  "author": {
    "name": "SomeAuthor"
  },
  "license": "CC-BY-4.0",
  "items": []
}
```

Potential optional metadata for future use:

- description,
- homepage,
- pack icon,
- author URL,
- repository/source URL.

The exact schema should be finalized during implementation and backed by runtime validation and tests.

## Item definitions

### Model-specific variants

Content whose UVs differ between Classic and Slim should be able to define variants explicitly.

Conceptual example:

```json
{
  "id": "wizard-robe",
  "category": "shirt",
  "name": "Wizard Robe",
  "variants": {
    "classic": {
      "fixed": "textures/wizard-robe.png"
    },
    "slim": {
      "fixed": "textures/wizard-robe-slim.png"
    }
  }
}
```

No implicit Classic fallback should be introduced. Missing model support means the item is unavailable for that model.

### Tintable and fixed layers

The pack format should preserve the existing SkinCrafter distinction between tintable and fixed artwork.

Conceptual example:

```json
{
  "id": "red-eyes",
  "category": "eyes",
  "name": "Red Eyes",
  "layers": {
    "tintable": [
      "textures/red-eyes.tintable.png"
    ],
    "fixed": "textures/red-eyes.fixed.png"
  }
}
```

Layer meaning must come from manifest metadata. File names must not be used to infer tintability, ordering or other semantics.

### Multiple color slots

Community/custom content should support the same multi-slot color model as built-in wardrobe content.

Conceptual example:

```json
{
  "id": "varsity-jacket",
  "category": "shirt",
  "name": "Varsity Jacket",
  "skinModel": "classic",
  "layers": {
    "tintable": [
      {
        "texture": "textures/jacket-body.png",
        "colorSlot": "primary"
      },
      {
        "texture": "textures/jacket-sleeves.png",
        "colorSlot": "secondary"
      }
    ],
    "fixed": "textures/jacket-logo.png"
  },
  "colors": [
    {
      "id": "primary",
      "name": "Jacket",
      "default": "#4A6FA5",
      "palette": ["#4A6FA5", "#A33A3A", "#2F8F4E"]
    },
    {
      "id": "secondary",
      "name": "Sleeves",
      "default": "#FFFFFF",
      "palette": ["#FFFFFF", "#111111"]
    }
  ]
}
```

The final schema naming may differ, but it should preserve the existing semantics: ordered layers, declared color slots, palettes and deterministic defaults.

## Namespaced identifiers

Pack content must not be able to collide with built-in content or another pack simply by using the same local item ID.

Authors should be allowed to use a short local ID such as:

```text
wizard-robe
```

SkinCrafter should create an internal namespaced identity based on the pack ID, category and local item ID, conceptually similar to:

```text
custom:someauthor.fantasy:shirt:wizard-robe
```

The exact internal encoding is an implementation detail, but identity must remain deterministic and collision-resistant.

Stable IDs are important for preserving selections when a pack is updated.

## Manual import UX

The editor should expose a clear action such as **Import content pack** / **Load pack**.

After a valid local pack is loaded:

- its items appear in the normal supported categories,
- the user does not enter a separate rendering mode,
- imported items are visibly marked as Custom,
- the pack name and author are available in the UI,
- incompatible model variants are filtered consistently with built-in content.

The UI should eventually support pack-level management such as:

- enable,
- disable,
- replace/update,
- remove.

## Local-only processing

Manual pack import should be processed in the browser by default.

A locally imported pack should not need to be uploaded to a SkinCrafter server in order to work.

Conceptual flow:

```text
user file
  -> browser archive reader
  -> pack validator
  -> normalized SkinCrafter content definitions
  -> existing editor/compositor/preview pipeline
```

Runtime assets can be exposed to the existing renderer through browser-managed URLs such as Blob URLs where appropriate.

## Persistence

Users should not have to choose the same pack file again after every page reload.

For the standalone web application, persistent custom pack bytes/metadata should use a storage mechanism suited to binary content, preferably IndexedDB rather than `localStorage`.

This must respect the existing package boundary:

- the reusable editor package must not directly own browser persistence,
- storage remains host-owned,
- pack parsing/validation/schema logic may belong to the reusable package if it is part of the public editor contract,
- the standalone host may provide the persistence adapter/storage implementation.

If persistence cannot be safely completed in the first implementation slice, manual import may land first, but the public contract should not make durable persistence unnecessarily difficult later.

## Community packs

A creator should be able to send the same `.skincrafter-pack` file they used for local testing to the SkinCrafter maintainer for review.

An approved pack should be publishable as **Community** content without manually rewriting every item into TypeScript registries.

The preferred long-term model is a separately addressable community catalog rather than permanently bundling every third-party texture into the core editor package.

Conceptual hosted layout:

```text
packs/
  index.json
  fantasy-pack/
    manifest.json
    textures/...
  medieval-pack/
    manifest.json
    textures/...
```

The catalog could expose metadata such as:

```json
{
  "packs": [
    {
      "id": "someauthor.fantasy",
      "name": "Fantasy Pack",
      "author": "SomeAuthor",
      "version": "1.2.0",
      "manifest": "./fantasy-pack/manifest.json"
    }
  ]
}
```

The exact hosting/distribution mechanism should be decided during implementation, but the important requirement is that Community content can be discovered and enabled without the user manually locating and importing a local file.

## Why community content should not all live in the core bundle

Keeping the community catalog separately loadable avoids making every SkinCrafter user download every community texture.

This becomes important if the ecosystem grows to dozens of packs and hundreds or thousands of textures.

Built-in SkinCrafter content can remain part of the editor package. Community packs can be downloaded only when enabled/needed.

## Community pack authoring workflow

The intended maintainer workflow should be close to:

1. creator sends a `.skincrafter-pack`,
2. maintainer reviews artwork, metadata, authorship/license and content quality,
3. automated validation checks the archive,
4. the pack is added to the Community catalog,
5. CI performs the same validation again,
6. once published, users can enable it from SkinCrafter without a manual file import.

Tooling should reduce manual registry editing as much as practical.

Possible repository commands:

```text
npm run content:validate path/to/fantasy-pack.skincrafter-pack
npm run content:add path/to/fantasy-pack.skincrafter-pack
```

These command names are design examples, not currently supported commands.

An eventual `content:add` workflow could:

- validate the archive,
- validate all references and texture contracts,
- detect pack/item ID conflicts,
- copy or publish the pack into the community content location,
- update the catalog/registry deterministically,
- run pack/content tests.

## Pack updates

Pack identity and pack version should be separate concepts.

If the user already has:

```text
someauthor.fantasy 1.0.0
```

and imports/enables:

```text
someauthor.fantasy 1.1.0
```

SkinCrafter should recognize this as an update rather than an unrelated second pack.

Stable item IDs should preserve existing selections where the updated pack still contains compatible definitions.

The UI should clearly communicate replacement/update behavior rather than silently keeping multiple conflicting revisions of the same pack ID.

## Validation

Manual import, documentation tooling and Community CI must reuse the same core validation rules rather than implementing separate validators with different behavior.

At minimum validation should cover:

- supported `formatVersion`,
- required pack metadata,
- valid/unique pack and item IDs,
- supported categories,
- referenced files exist,
- only permitted file types are present,
- PNG dimensions required by the SkinCrafter texture contract,
- explicit alpha where required,
- valid Classic/Slim metadata,
- valid ordered tintable/fixed layer definitions,
- valid color slots,
- valid `#RRGGBB` palettes/defaults,
- color slot references resolve correctly,
- duplicate/conflicting definitions,
- archive/file-size limits.

Validation errors should be actionable and reference the failing item/file whenever possible.

## Public pack validator / documentation page

The standalone site should provide a user-facing Content Packs documentation page, for example under a route such as:

```text
/content-packs
```

or another suitable documentation route.

It should explain:

1. what a SkinCrafter Content Pack is,
2. how to download an example pack/template,
3. archive structure,
4. `manifest.json`,
5. texture requirements,
6. Classic vs Slim,
7. tintable vs fixed layers,
8. color slots and palettes,
9. supported categories,
10. common validation errors,
11. how to validate a pack before sharing it.

The page should ideally include a browser-based **Validate my pack** action using the same validator as the editor importer.

Example successful output:

```text
✓ manifest.json
✓ formatVersion 1
✓ 12 items
✓ all required textures are 64×64
✓ alpha requirements satisfied
✓ Classic/Slim definitions valid

Pack is valid.
```

Example error output:

```text
✗ shirt/wizard.png has invalid dimensions
✗ item "armor" references a missing texture
✗ duplicate item id "wizard"
```

## Security requirements

Content packs are data, not executable plugins.

The importer must reject unsupported executable/active content such as arbitrary JavaScript, HTML, CSS or WebAssembly.

Security review should include at least:

- archive path traversal protection,
- ZIP bomb/decompression limits,
- maximum archive size,
- maximum unpacked size,
- maximum file count,
- maximum per-file size,
- strict accepted file extensions/types,
- rejection of unexpected archive paths,
- safe handling of malformed PNGs,
- no execution of pack-provided scripts,
- no trust in file names for semantic decisions.

If SVG or other active document formats are considered in the future, they require a separate security decision and must not be implicitly accepted by a generic image loader.

## Authorship and licensing

Community packs should preserve attribution instead of making third-party artwork appear to be authored by SkinCrafter.

The manifest should therefore have explicit author metadata and a license field or equivalent licensing declaration.

Before a pack is published as Community content, the maintainer workflow should include checking that SkinCrafter is allowed to redistribute the content under the declared terms.

The application should expose authorship at a reasonable UI level, such as pack details or item source metadata.

## Core vs Community vs Custom behavior

All three sources should ultimately enter the same editor/rendering pipeline.

Differences should be primarily around discovery, trust/source metadata and persistence:

| Source | Distribution | User action | Marking |
| --- | --- | --- | --- |
| Built-in | editor package | available automatically | Built-in / normal |
| Community | SkinCrafter catalog | enable/install | Community + author/pack |
| Custom | local user file | import | Custom + author/pack |

The compositor must not contain separate rendering implementations for these sources.

## Compatibility and serialization considerations

Pack support will affect state normalization and persistence semantics because appearance selections may refer to content that is not always available.

The implementation must explicitly define behavior for situations such as:

- a saved state references a Custom pack that is not currently loaded,
- a Community pack is disabled,
- a pack update removes an item,
- a selected item loses compatibility with the current skin model,
- a pack changes a color-slot contract,
- two installed sources attempt to expose colliding logical content.

Persisted editor state must not embed arbitrary asset bytes directly.

Where possible, saved state should reference stable pack/item identities while the host manages installed pack data separately.

Schema/version migration must be deliberate if the public serialized SkinCrafter state needs to change.

## Recommended implementation shape

This is expected to be a feature set rather than one monolithic change. A practical breakdown is:

1. **Pack schema and validator**
   - versioned manifest types,
   - archive validation,
   - texture validation reuse,
   - normalization into existing content definitions,
   - security/resource limits.

2. **Runtime content registry**
   - combine built-in and external items,
   - namespaced identities,
   - source metadata,
   - model filtering,
   - color-slot integration,
   - rendering through the existing compositor.

3. **Manual import UX**
   - file picker/drop handling,
   - validation result/errors,
   - Custom badges/source information,
   - enable/remove behavior.

4. **Host persistence**
   - standalone IndexedDB storage,
   - restored packs on reload,
   - replacement/update behavior.

5. **Content Packs documentation and browser validator**
   - authoring guide,
   - downloadable example/template,
   - shared validation logic.

6. **Community catalog**
   - approved pack hosting/registry,
   - discovery UI,
   - enable/disable/update,
   - CI validation and maintainer ingestion tooling.

Keeping these as focused implementation units should make validation and public API changes easier to review.

## Non-goals for the first release

The initial content-pack feature should not attempt to provide:

- arbitrary JavaScript/plugin execution,
- arbitrary new editor categories,
- custom rendering engines,
- custom Three.js models,
- custom UI components supplied by packs,
- remote third-party script execution,
- automatic publication of unreviewed user packs into the Community catalog,
- a full public marketplace,
- custom races until their additional contract is designed explicitly.

## Future opportunities

A stable format can later support features without changing the fundamental pack concept, for example:

- a larger public Community library,
- pack browsing/search/filtering,
- pack screenshots/icons/descriptions,
- update notifications,
- author pages,
- remote pack installation by URL where safe and appropriate,
- additional appearance categories,
- custom race support after a dedicated design,
- external ecosystem tooling that validates or authors `.skincrafter-pack` files.

The key requirement is that 1.2.0 establishes a durable, versioned and safe data format instead of a one-off local PNG importer.
