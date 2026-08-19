import { copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const distDirectory = fileURLToPath(new URL('../dist/', import.meta.url));

await copyFile(`${distDirectory}index.html`, `${distDirectory}404.html`);
