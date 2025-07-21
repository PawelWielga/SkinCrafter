import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
  },
  define: {
    'import.meta.env.DEV': mode !== 'production',
    'import.meta.env.PROD': mode === 'production',
  },
}));
