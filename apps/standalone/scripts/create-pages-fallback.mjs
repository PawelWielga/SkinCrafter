import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createPagesFallbackHtml } from './pages-fallback.mjs';

const distDirectory = fileURLToPath(new URL('../dist/', import.meta.url));
const deploymentConfig = JSON.parse(
  await readFile(new URL('../deployment.config.json', import.meta.url), 'utf8')
);
const previewBasePath =
  process.env.SKINCRAFTER_PAGES_PREVIEW_BASE_PATH?.trim() || deploymentConfig.dev.basePath;
const fallbackHtml = createPagesFallbackHtml({
  productionBasePath: deploymentConfig.production.basePath,
  previewBasePath,
});

await writeFile(`${distDirectory}404.html`, fallbackHtml, 'utf8');
