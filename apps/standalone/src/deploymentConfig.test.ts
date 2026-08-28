import { describe, expect, it } from 'vitest';
import deploymentConfig from '../deployment.config.json';
import { resolveStandaloneDeployment } from './deploymentConfig';

describe('standalone deployment configuration', () => {
  it('uses the configured production deployment by default', () => {
    expect(resolveStandaloneDeployment()).toEqual({
      name: 'production',
      basePath: deploymentConfig.production.basePath,
    });
  });

  it('resolves the configured dev deployment', () => {
    expect(resolveStandaloneDeployment('dev')).toEqual({
      name: 'dev',
      basePath: deploymentConfig.dev.basePath,
    });
  });

  it('rejects unknown and inherited object keys', () => {
    for (const name of ['preview', 'constructor', 'toString', '__proto__']) {
      expect(() => resolveStandaloneDeployment(name)).toThrow(
        `Unknown standalone deployment "${name}".`
      );
    }
  });
});
