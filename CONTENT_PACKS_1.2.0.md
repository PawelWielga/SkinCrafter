# SkinCrafter 1.2.0 content packs

> Status: design / roadmap document. None of the behavior described here should be treated as implemented until the corresponding implementation work is completed.

This document captures the agreed direction for custom and community content packs planned for SkinCrafter 1.2.0.

## Governing principle: self-sufficiency

The most important architectural requirement is that the SkinCrafter creator remains self-sufficient.

A clean SkinCrafter deployment must contain everything required to use the creator and all supported Content Pack features, excluding content explicitly supplied by the user.

For Content Packs this means:

- no separate backend is required,
- no external database is required,
- no third-party CDN is required,
- no external service is required to validate, install, manage or render packs,
- Community catalog data and Community pack files are deployed as static SkinCrafter-owned assets,
- Custom packs are processed locally in the browser and never need to be uploaded,
- pack runtime assets cannot depend on remote URLs,
- packs cannot depend on other packs,
- documentation, pack generator and validator are delivered with SkinCrafter,
- maintainer/CI tooling required to ingest Community packs lives in the SkinCrafter repository.

This does not prohibit optional host integrations whose purpose is inherently network-based, such as username lookup through PlayerDB. Such integrations must remain isolated so their failure or disappearance does not break the creator or Content Pack functionality.

Self-sufficiency does not mean every Community texture must be included in the initial JavaScript bundle. Community packs may be lazy-loaded from static files deployed together with SkinCrafter and then cached locally.

## Goal

SkinCrafter should support a portable content-pack format that lets creators add their own appearance elements without modifying application source code.

The same logical pack must support three scenarios:

1. a creator tests the pack locally,
2. a user imports the pack manually,
3. an approved pack is published by SkinCrafter as Community content and can be enabled without manual file import.

The pack format is strictly a data format, not a plugin or code-execution format.

## Product terminology

Use **SkinCrafter Content Pack** as the product-level term rather than limiting the feature to clothing.

Content source is visible in the UI:

- **Built-in**: content shipped as part of SkinCrafter,
- **Community**: third-party content reviewed/approved and published through the SkinCrafter catalog,
- **Custom**: content imported locally by the user.

Imported and Community items should have a subtle source badge or equivalent indication. Pack name and author should be discoverable from the item/pack UI.

Community status is determined by the trusted SkinCrafter catalog, never by a field inside a user-supplied manifest. A Custom pack cannot obtain a Community badge merely by copying an official pack ID or metadata.

## Supported archive formats

SkinCrafter officially accepts both:

- `.zip`, as the simplest format for non-technical creators,
- `.scpack`, as the SkinCrafter-specific pack extension.

Both formats use the same ZIP-compatible archive structure, manifest schema, validation rules and runtime behavior. `.scpack` is only a SkinCrafter-specific extension, not a separate binary format.

Examples:

```text
fantasy-pack.zip
fantasy-pack.scpack
```

The importer, validator, generator, documentation tooling, CLI and Community ingestion tooling must treat both formats equivalently.

The loader should accept both common archive layouts:

```text
manifest.json
textures/
```

and:

```text
fantasy-pack/
  manifest.json
  textures/
```

A single harmless top-level wrapper directory is valid. Archives containing multiple candidate manifests or ambiguous roots must be rejected with a clear error.

## Scope for 1.2.0

The first version extends existing appearance categories rather than allowing packs to invent arbitrary categories.

Initially supported categories:

- `eyes`
- `hair`
- `hat`
- `shirt`
- `pants`
- `shoes`
- `accessory`

Custom races are intentionally out of scope for the first Content Pack release because race definitions interact with base layers, sex/model combinations, skin color and normalization.

Dynamic creation of new editor categories is also out of scope for 1.2.0.

## Rendering and content model

A Content Pack must not introduce a parallel rendering model.

External definitions should normalize into the same SkinCrafter concepts already used by built-in content:

- `classic` / `slim` model compatibility,
- ordered tintable layers,
- optional fixed layer,
- existing wardrobe color-slot behavior,
- existing category colors where applicable,
- existing texture composition pipeline,
- existing preview/export parity guarantees.

Built-in, Community and Custom content must ultimately enter the same compositor and preview pipeline.

### Eyes and hair colors

For 1.2.0, `eyes` and `hair` continue to use the existing category-level color behavior (`eyesColor` / `hairColor`). Pack-provided eyes/hair may use tintable and fixed layers, but they do not introduce independent multi-slot color contracts in the first release.

### Wardrobe colors

`hat`, `shirt`, `pants`, `shoes` and `accessory` may define the same per-item color slots used by built-in wardrobe content, including ordered tintable layers, palettes, deterministic defaults and an optional fixed layer.

## Pack self-containment

Every `.zip` / `.scpack` must be self-contained.

Runtime assets referenced by a pack must exist inside the archive. Packs must not:

- load textures from HTTP/HTTPS URLs,
- load runtime assets from third-party domains,
- depend on another Content Pack,
- require executable scripts or external code.

Metadata such as author homepage or repository URL may be external links, because they are informational and are not required to render the pack.

## Archive structure

Example:

```text
fantasy-pack.scpack
├── manifest.json
└── textures/
    ├── wizard-robe.png
    ├── wizard-robe-slim.png
    ├── jacket-body.png
    ├── jacket-sleeves.png
    └── jacket-logo.png
```

The same structure inside `fantasy-pack.zip` is equally valid.

Only explicitly supported data files are accepted. Arbitrary executable or active content is rejected.

## Manifest direction

The manifest format is versioned independently from SkinCrafter itself.

Conceptual metadata:

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

Rules:

- `formatVersion` describes the pack schema,
- `version` is the pack release version and must use SemVer,
- pack identity and pack version are separate concepts,
- stable pack/item IDs are required for durable selections and upgrades,
- the `skincrafter.*` pack-ID namespace is reserved for SkinCrafter-owned content/tooling.

Optional metadata may later include description, homepage, author URL, repository/source URL and pack icon.

## Names and localization

A creator must be able to provide a simple plain-text `name` without knowing SkinCrafter's internal translation keys.

The manifest may additionally support optional localized labels. If a requested locale is unavailable, SkinCrafter falls back to the base `name`.

Pack-provided labels are plain text only and must never be interpreted as HTML.

The beginner pack generator may initially ask only for the base name and keep localization optional.

## Item definitions

Model-specific content must declare compatibility explicitly. There is no implicit Classic-to-Slim fallback.

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

Tintability, layer order and fixed/tintable meaning come from manifest metadata, not file naming conventions.

Wardrobe items may expose multiple color slots, mapping each tintable layer to a declared slot while preserving the same semantics as built-in content.

The exact JSON schema may be refined during implementation, but these semantic rules are fixed design constraints.

## Namespaced runtime identities

Local item IDs may remain short, for example:

```text
wizard-robe
```

SkinCrafter creates a deterministic runtime identity using pack ID, category and local item ID, conceptually:

```text
custom:someauthor.fantasy:shirt:wizard-robe
```

The exact encoding is an implementation detail. It must prevent collisions between built-in content and different packs while remaining stable across compatible pack upgrades.

Only one active version of a given pack ID may exist at a time.

## Manual import UX

The editor exposes a clear action such as **Import content pack** / **Load pack** and supports file picker plus drag-and-drop for `.zip` and `.scpack`.

After successful import:

- items appear in their normal categories,
- no separate rendering mode is introduced,
- imported items are marked as Custom,
- pack name and author are visible/discoverable,
- model-incompatible items are filtered consistently with built-ins.

Pack management includes:

- enable,
- disable,
- update/replace,
- remove.

`Disable` keeps the pack installed and preserves user state but temporarily removes its items from active content.

`Remove` deletes the stored pack bytes. References from saved state are handled as unresolved rather than silently rewritten, so reinstalling the same compatible pack can restore the selection.

## Missing-pack and unresolved state

This is a required data-integrity rule.

A valid saved reference to external content must not be destroyed merely because the corresponding pack is temporarily unavailable when state is parsed.

Examples include:

- Custom packs not yet restored from IndexedDB,
- disabled Community packs,
- removed packs,
- temporary load/validation failures.

SkinCrafter should preserve such references as unresolved. An unresolved item is not rendered and may behave visually like `None`/fallback while unavailable, but the semantic reference remains intact.

When the matching pack becomes available again, SkinCrafter should resolve the reference automatically when compatible.

The current state parser/normalizer must therefore be adapted so external IDs are not eagerly replaced with built-in defaults before the runtime content registry is available.

## Persistence ownership

The reusable editor package must not directly own browser-specific persistence such as IndexedDB.

Pack parsing, schema validation, normalization, registry behavior and pack-management contracts may belong to the reusable editor package. Storage location remains host-owned.

The public architecture should support a host-agnostic Content Pack storage adapter (exact naming/API to be finalized during implementation). The standalone host supplies an IndexedDB-backed implementation.

Persisted editor state references stable pack/item identities and does not embed PNG/archive bytes directly.

Blob/object URLs are runtime-only and must be recreated from persisted pack blobs after reload.

## Pack updates and downgrades

If `someauthor.fantasy` version `1.0.0` is installed and `1.1.0` is imported/enabled, SkinCrafter recognizes this as an update of the same pack rather than a second unrelated pack.

Stable item IDs preserve selections where the updated definitions remain compatible.

Importing an older version is treated as a deliberate downgrade and should require a clear user-facing warning/confirmation rather than happening silently.

For Community publication, `(packId, version)` is immutable. Once a specific Community version is published, changing its bytes requires publishing a new version.

## Community catalog

Community content is reviewed third-party content distributed as part of the self-sufficient SkinCrafter deployment.

The catalog is a static SkinCrafter-owned asset, not a backend service. A deployment may conceptually contain:

```text
app/
content-packs/
  index.json
  fantasy-1.0.0.scpack
  medieval-2.1.0.scpack
```

Community packs are lazy-loaded when enabled/needed, so they do not need to inflate the initial JavaScript bundle.

The catalog should contain enough trusted metadata to verify what is being installed, including at least pack ID, version, local/static pack path, expected byte size and SHA-256 digest.

After download, SkinCrafter verifies integrity before installing/enabling the pack.

Enabled Community packs should be cached locally so repeat use does not depend on the network when the browser already has valid data.

## Community author workflow

A creator may send the same `.zip` or `.scpack` used for local testing to the maintainer.

Intended flow:

1. creator prepares/tests a pack,
2. creator sends `.zip` or `.scpack`,
3. maintainer reviews artwork, author metadata, license and quality,
4. automated validation checks the archive,
5. the pack is added to the static Community catalog,
6. CI runs the same validation again,
7. approved files are deployed with SkinCrafter,
8. users can enable the pack without manually importing it.

Tooling should minimize manual registry editing. Conceptual commands:

```text
npm run content:validate path/to/fantasy-pack.scpack
npm run content:add path/to/fantasy-pack.scpack
```

The same commands accept `.zip`. Command names are design examples until implemented.

## Beginner-friendly pack creation

Non-technical creators should not be required to write JSON manually.

The Content Packs documentation area should provide a browser-based generator where a creator can:

- enter pack metadata,
- add items,
- choose category,
- choose Classic/Slim compatibility,
- select PNG files,
- configure supported colors/slots,
- validate the result,
- download a ready-to-use ZIP.

Advanced creators may author `manifest.json` manually and use either `.zip` or `.scpack`.

Both paths create the same logical pack format.

## Documentation and public validator

The standalone site should expose a Content Packs guide, for example under `/content-packs` or another suitable docs route.

It should cover:

- what Content Packs are,
- `.zip` and `.scpack`,
- generator workflow,
- example/template download,
- archive layout,
- `manifest.json`,
- PNG requirements,
- Classic vs Slim,
- tintable vs fixed,
- eyes/hair color behavior,
- wardrobe color slots,
- supported categories,
- versioning and stable IDs,
- common errors,
- how to validate before sharing.

The page should expose **Validate my pack** using the same validation core as runtime import and CI.

## Validation requirements

Manual import, generator output, public validator, CLI and Community CI reuse the same core validation rules.

At minimum validation covers:

- accepted archive format,
- unambiguous archive root,
- supported `formatVersion`,
- valid SemVer pack version,
- required pack metadata,
- pack-ID restrictions/reserved namespace,
- unique item IDs,
- supported categories,
- referenced files exist,
- runtime assets are local to the archive,
- no pack dependencies,
- accepted file types,
- required PNG dimensions and alpha behavior,
- valid Classic/Slim definitions,
- valid ordered tintable/fixed layers,
- valid wardrobe color slots,
- valid `#RRGGBB` palettes/defaults,
- color-slot references resolve,
- duplicate/conflicting definitions,
- archive/file/resource limits.

Errors must be actionable and identify the failing file/item whenever possible.

## Security requirements

Content Packs are untrusted data.

The importer must reject arbitrary JavaScript, HTML, CSS, WebAssembly and other executable/active content.

Security controls include at least:

- archive path-traversal protection,
- ZIP bomb/decompression limits,
- maximum compressed archive size,
- maximum unpacked size,
- maximum file count,
- maximum per-file size,
- strict accepted extensions/types,
- rejection of unexpected archive paths,
- malformed PNG handling,
- no script execution,
- no semantic trust in filenames,
- no runtime fetches to pack-provided asset URLs.

SVG or other active document formats require a separate explicit security decision and are not implicitly accepted as generic images.

## Authorship and licensing

Community packs preserve attribution.

The manifest contains author metadata and a license declaration. Before publication, the maintainer must verify that SkinCrafter may redistribute the submitted content under the declared terms.

The application exposes authorship at an appropriate UI level such as pack details or item source metadata.

## Built-in vs Community vs Custom

| Source | Distribution | User action | Trust/source marking |
| --- | --- | --- | --- |
| Built-in | editor/application assets | available automatically | Built-in / normal |
| Community | static SkinCrafter catalog/assets | enable/install | Community + author/pack |
| Custom | local `.zip` / `.scpack` | import | Custom + author/pack |

All three ultimately use one content registry and one rendering pipeline.

## Recommended implementation shape

This should be delivered as focused implementation units rather than one monolithic change:

1. **Pack schema and shared validator**
   - versioned manifest,
   - ZIP/`.scpack` reader,
   - security/resource limits,
   - self-containment checks,
   - normalization into existing content concepts.

2. **Runtime content registry and state compatibility**
   - merge Built-in/Community/Custom sources,
   - deterministic namespaced identities,
   - source/trust metadata,
   - model filtering,
   - color integration,
   - unresolved external references,
   - serialization/normalization changes.

3. **Public pack/storage contract**
   - host-agnostic pack-management/storage interface,
   - no browser persistence owned directly by reusable package.

4. **Manual import and management UX**
   - picker/drop,
   - validation results,
   - Custom badges,
   - enable/disable/update/remove.

5. **Standalone IndexedDB persistence**
   - store Custom and cached Community pack blobs,
   - recreate runtime URLs,
   - restore packs before/alongside state resolution.

6. **Documentation, generator and browser validator**
   - beginner workflow,
   - advanced authoring reference,
   - example/template,
   - shared validation logic.

7. **Static Community catalog and ingestion tooling**
   - static catalog/files in SkinCrafter deployment,
   - SHA-256/size integrity metadata,
   - lazy loading/cache,
   - maintainer CLI and CI validation.

## Non-goals for the first release

The initial Content Pack feature does not provide:

- arbitrary JavaScript/plugin execution,
- arbitrary new editor categories,
- custom rendering engines,
- custom Three.js models,
- custom UI components supplied by packs,
- external runtime texture URLs,
- pack-to-pack dependencies,
- automatic publication of unreviewed packs,
- a public marketplace,
- custom races before their contract is designed separately,
- multi-slot eyes/hair color systems beyond existing category colors.

## Final design invariants

Implementation issues for SkinCrafter 1.2.0 should preserve all of the following:

1. The creator and Content Pack system are self-sufficient and require no external service/backend.
2. `.zip` and `.scpack` are equivalent supported pack containers.
3. Packs are self-contained, data-only and safe to process as untrusted input.
4. Built-in, Community and Custom items use the same runtime/rendering model.
5. Community is a trusted source designation granted by SkinCrafter's static catalog, not by user metadata.
6. Community packs are static deployable assets and may be lazy-loaded/cached rather than bundled eagerly.
7. Custom files stay local to the browser unless a user independently chooses to send/share them.
8. Host-specific storage stays outside the reusable editor package.
9. Missing external content must not silently destroy saved semantic references.
10. Stable pack/item IDs and explicit versions allow safe updates and restoration.
11. The same validator rules drive import, author tooling and CI.
12. A non-technical creator can build a valid pack without manually writing JSON.

This document is the design source of truth for breaking the feature into tracking/implementation issues for SkinCrafter 1.2.0.