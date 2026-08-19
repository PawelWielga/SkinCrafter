import {
  existsSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'node:fs';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = fileURLToPath(new URL('..', import.meta.url));
const distRoot = join(packageRoot, 'dist');

function listDeclarationFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) return listDeclarationFiles(entryPath);
    return entry.isFile() && entry.name.endsWith('.d.ts') ? [entryPath] : [];
  });
}

function normalizeRelativeSpecifier(filePath, specifier) {
  if (!specifier.startsWith('.') || extname(specifier)) return specifier;

  const absoluteTarget = resolve(dirname(filePath), specifier);
  if (existsSync(`${absoluteTarget}.d.ts`)) return `${specifier}.js`;
  if (existsSync(join(absoluteTarget, 'index.d.ts'))) {
    return `${specifier.replace(/\/$/, '')}/index.js`;
  }

  throw new Error(
    `Cannot map declaration specifier "${specifier}" from ${filePath} to an emitted declaration file.`
  );
}

function rewriteRelativeSpecifiers(content, filePath) {
  const patterns = [
    /(\bfrom\s+)(['"])(\.{1,2}\/[^'"]+)\2/g,
    /(\bimport\s*\(\s*)(['"])(\.{1,2}\/[^'"]+)\2/g,
    /(\bdeclare\s+module\s+)(['"])(\.{1,2}\/[^'"]+)\2/g,
    /^(\s*import\s+)(['"])(\.{1,2}\/[^'"]+)\2(?=\s*;)/gm,
  ];

  return patterns.reduce(
    (current, pattern) =>
      current.replace(pattern, (_match, prefix, quote, specifier) => {
        const normalized = normalizeRelativeSpecifier(filePath, specifier);
        return `${prefix}${quote}${normalized}${quote}`;
      }),
    content
  );
}

function assertNodeNextSafe(content, filePath) {
  if (/^\s*import\s+['"][^'"]+\.css['"];?\s*$/m.test(content)) {
    throw new Error(`CSS side-effect import remains in declaration output: ${filePath}`);
  }

  const moduleSpecifierPattern =
    /(?:\bfrom\s+|\bimport\s*\(\s*|\bdeclare\s+module\s+)(['"])(\.{1,2}\/[^'"]+)\1/g;

  for (const match of content.matchAll(moduleSpecifierPattern)) {
    if (!extname(match[2])) {
      throw new Error(
        `Extensionless relative ESM specifier "${match[2]}" remains in ${filePath}.`
      );
    }
  }
}

if (!existsSync(distRoot)) {
  throw new Error(`Declaration output directory does not exist: ${distRoot}`);
}

const declarationFiles = listDeclarationFiles(distRoot);
if (declarationFiles.length === 0) {
  throw new Error(`No declaration files were emitted to ${distRoot}.`);
}

for (const filePath of declarationFiles) {
  const source = readFileSync(filePath, 'utf8');
  const withoutCssImports = source.replace(
    /^\s*import\s+(['"])[^'"]+\.css\1;?\s*(?:\r?\n|$)/gm,
    ''
  );
  const normalized = rewriteRelativeSpecifiers(withoutCssImports, filePath);
  assertNodeNextSafe(normalized, filePath);
  writeFileSync(filePath, normalized, 'utf8');
}

console.log(`Normalized ${declarationFiles.length} declaration files for NodeNext ESM consumers.`);
