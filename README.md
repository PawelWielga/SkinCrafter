# SkinCrafter

SkinCrafter is a small React application for previewing Minecraft skins. The preview uses Three.js and React Router to display the model in 3D across multiple pages.

## Running locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173` by default.
Navigate to `/` for the wardrobe interface or `/mcskinview` to view skins from the Mojang API.

## Loading a Minecraft skin

Open `/mcskinview` to load a skin by entering a Minecraft username. The page contacts the Mojang APIs to retrieve the player's skin and shows it in the 3D preview.

If the user cannot be found or the profile is missing a skin, an error message will be displayed.

## Build

To create a production build run:

```bash
npm run build
```
