import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const distDirectory = fileURLToPath(new URL('../dist/', import.meta.url));
const deploymentConfig = JSON.parse(
  await readFile(new URL('../deployment.config.json', import.meta.url), 'utf8')
);
const devBasePath = deploymentConfig.dev?.basePath;

if (typeof devBasePath !== 'string' || !/^\/[A-Za-z0-9._~-]+\/$/.test(devBasePath)) {
  throw new Error(`Invalid dev Pages base path: ${String(devBasePath)}`);
}

const destinationDir = devBasePath.slice(1, -1);
const rootEntries = new Set(await readdir(distDirectory));

if (rootEntries.has(destinationDir)) {
  throw new Error(
    `Dev Pages destination "${devBasePath}" collides with generated root output "${destinationDir}".`
  );
}

console.log(`Verified dev Pages destination ${devBasePath} does not overlap generated root output.`);
