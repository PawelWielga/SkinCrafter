import deploymentConfig from '../deployment.config.json';

export type StandaloneDeployment = keyof typeof deploymentConfig;

export interface ResolvedStandaloneDeployment {
  name: StandaloneDeployment;
  basePath: string;
}

export const resolveStandaloneDeployment = (
  deploymentName?: string
): ResolvedStandaloneDeployment => {
  const name = deploymentName?.trim() || 'production';

  if (!Object.hasOwn(deploymentConfig, name)) {
    throw new Error(`Unknown standalone deployment "${name}".`);
  }

  const resolvedName = name as StandaloneDeployment;

  return {
    name: resolvedName,
    basePath: deploymentConfig[resolvedName].basePath,
  };
};
