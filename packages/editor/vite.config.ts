import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Library asset URLs must stay relative to the emitted module so installed packages work
  // under arbitrary host routes instead of assuming the application is served from `/`.
  base: './',
  experimental: {
    renderBuiltUrl(filename, { hostType, type }) {
      if (hostType === 'js' && type === 'asset' && filename.endsWith('.png')) {
        // Keep Vite's no-inline directive on the URL that an application bundler sees.
        // Without it, a second Vite build of the installed package would re-inline every
        // small wardrobe PNG even though this library build emitted separate files.
        return {
          runtime: `new URL(${JSON.stringify(`./${filename}?no-inline`)}, import.meta.url).href`,
        };
      }

      return { relative: true };
    },
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
      cssFileName: 'style',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom', 'three'],
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.names.some((name) => name.endsWith('.css'))
            ? '[name][extname]'
            : 'assets/[name]-[hash][extname]',
      },
    },
  },
  test: {
    environment: 'jsdom',
    exclude: ['node_modules', 'dist'],
    globals: true,
    setupFiles: './src/setupTests.ts',
  },
});
