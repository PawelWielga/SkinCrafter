import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolveStandaloneDeployment } from './src/deploymentConfig';

export const createStandaloneViteConfig = (deploymentName = process.env.SKINCRAFTER_DEPLOYMENT) => {
  const deployment = resolveStandaloneDeployment(deploymentName);

  return {
    base: deployment.basePath,
    define: {
      'import.meta.env.VITE_SKINCRAFTER_DEPLOYMENT': JSON.stringify(deployment.name),
    },
    plugins: [react()],
    test: {
      environment: 'jsdom',
      exclude: ['node_modules', 'dist'],
      globals: true,
      setupFiles: './src/setupTests.ts',
    },
  };
};

export default defineConfig(createStandaloneViteConfig());
