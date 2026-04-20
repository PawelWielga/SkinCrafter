# SkinCrafter

SkinCrafter is a React + TypeScript wardrobe editor for composing a Minecraft-style character skin. The main screen combines texture layers for race, skin color, optional wardrobe categories, and hats, then renders the result in a rotating Three.js preview.

## Running locally

Install dependencies and start the development server. Node 20 is the minimum supported runtime for local development and CI.

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173` by default. Navigate to `/` for the wardrobe editor or `/mcskinview` to load a skin from Mojang APIs. The wardrobe remembers the current appearance and selected language using `localStorage`.

## Loading a Minecraft skin

Open `/mcskinview` to load a skin by entering a Minecraft username. This is a side feature, not the main MVP flow. The page contacts the Mojang APIs to retrieve the player's skin and shows it in the 3D preview.

If the user cannot be found or the profile is missing a skin, an error message will be displayed.

## Build

To run TypeScript checks and create a production build:

```bash
npm run build
```

## Quality Commands

```bash
npm run typecheck
npm run lint
npm test
```

## Architecture

- `src/pages/App.tsx` defines the application routes and the main wardrobe editor.
- `src/pages/McSkinView.tsx` loads skins by Minecraft username through Mojang APIs.
- `src/components/previewArea.tsx` contains preview controls and passes texture/pose state to Three.js.
- `src/components/three/*` owns the Three.js scene, Minecraft body meshes, UV maps, and poses.
- `src/components/wardrobe.tsx` renders customization controls from the shared appearance model.
- `src/data/appearance.ts` is the source of truth for appearance categories, option defaults, layer order, and texture composition inputs.
- `src/data/*TextureMap.ts` keeps texture URLs for currently backed asset categories.
- `src/i18n/translations.ts` keeps UI labels for the supported languages.
- `src/utils/combineTextures.ts` composes visible texture layers into the final preview/download image.

## Adding Appearance Options

For MVP, new options are developer-added. Update `src/data/appearance.ts` first, then add texture URLs to the relevant `src/data/*TextureMap.ts` file if the option has a PNG asset. Optional categories should use `None` as a real no-texture option instead of a blank placeholder image.
