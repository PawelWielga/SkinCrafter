const previewBasePathPattern = /^\/(?!(?:\.{1,2}|\.git)\/$)[A-Za-z0-9._~-]+\/$/i;

export const resolvePagesDestinationDir = (basePath) => {
  if (typeof basePath !== 'string' || !previewBasePathPattern.test(basePath)) {
    throw new Error(`Invalid dev Pages base path: ${String(basePath)}`);
  }

  return basePath.slice(1, -1);
};
