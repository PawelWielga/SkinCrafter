import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolvePagesDestinationDir } from './deployment-path.mjs';

const distDirectory = fileURLToPath(new URL('../dist/', import.meta.url));
const deploymentConfig = JSON.parse(
  await readFile(new URL('../deployment.config.json', import.meta.url), 'utf8')
);
const devBasePath = deploymentConfig.dev?.basePath;
const destinationDir = resolvePagesDestinationDir(devBasePath);
const rootEntries = new Set(await readdir(distDirectory));

if (rootEntries.has(destinationDir)) {
  throw new Error(
    `Dev Pages destination "${devBasePath}" collides with generated root output "${destinationDir}".`
  );
}

console.log(`Verified dev Pages destination ${devBasePath} does not overlap generated root output.`);
