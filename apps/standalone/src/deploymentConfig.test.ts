import { describe, expect, it } from 'vitest';
import deploymentConfig from '../deployment.config.json';
import { createStandaloneViteConfig, resolveStandaloneDeployment } from '../vite.config';

describe('standalone deployment configuration', () => {
  it('uses the configured production base path by default', () => {
    const config = createStandaloneViteConfig('production');

    expect(config.base).toBe(deploymentConfig.production.basePath);
    expect(config.define['import.meta.env.VITE_SKINCRAFTER_DEPLOYMENT']).toBe(
      JSON.stringify('production')
    );
  });

  it('uses the configured dev base path and exposes an explicit environment signal', () => {
    const config = createStandaloneViteConfig('dev');

    expect(config.base).toBe(deploymentConfig.dev.basePath);
    expect(config.define['import.meta.env.VITE_SKINCRAFTER_DEPLOYMENT']).toBe(JSON.stringify('dev'));
  });

  it('rejects unknown deployment names instead of silently using production settings', () => {
    expect(() => resolveStandaloneDeployment('preview')).toThrow(
      'Unknown standalone deployment "preview".'
    );
  });
});
