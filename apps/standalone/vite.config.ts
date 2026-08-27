import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.VITE_BASE_PATH?.trim() || '/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    exclude: ['node_modules', 'dist'],
    globals: true,
    setupFiles: './src/setupTests.ts',
  },
});
