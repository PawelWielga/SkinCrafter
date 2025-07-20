import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    host: true,
  },
  define: {
    'import.meta.env.DEV': mode !== 'production',
    'import.meta.env.PROD': mode === 'production',
  },
}));
