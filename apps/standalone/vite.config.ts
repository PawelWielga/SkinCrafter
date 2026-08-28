import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import deploymentConfig from './deployment.config.json';

type StandaloneDeployment = keyof typeof deploymentConfig;

export const resolveStandaloneDeployment = (
  deploymentName = process.env.SKINCRAFTER_DEPLOYMENT
): { name: StandaloneDeployment; basePath: string } => {
  const name = deploymentName?.trim() || 'production';

  if (!(name in deploymentConfig)) {
    throw new Error(`Unknown standalone deployment "${name}".`);
  }

  const resolvedName = name as StandaloneDeployment;

  return {
    name: resolvedName,
    basePath: deploymentConfig[resolvedName].basePath,
  };
};

export const createStandaloneViteConfig = (deploymentName?: string) => {
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
