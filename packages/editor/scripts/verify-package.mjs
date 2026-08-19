import { execFileSync } from 'node:child_process';
import {
  existsSync,
  readdirSync,
  readFileSync,
} from 'node:fs';
import { extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = fileURLToPath(new URL('..', import.meta.url));
const packageJsonPath = join(packageRoot, 'package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));

function fail(message) {
  throw new Error(`[package verification] ${message}`);
}

function collectStringTargets(value, targets = new Set()) {
  if (typeof value === 'string') {
    targets.add(value);
    return targets;
  }

  if (value && typeof value === 'object') {
    for (const nestedValue of Object.values(value)) {
      collectStringTargets(nestedValue, targets);
    }
  }

  return targets;
}

function listDeclarationFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) return listDeclarationFiles(entryPath);
    return entry.isFile() && entry.name.endsWith('.d.ts') ? [entryPath] : [];
  });
}

if (packageJson.type !== 'module') {
  fail('editor package must remain ESM (package.json type must be "module").');
}

for (const peer of ['react', 'react-dom', 'three']) {
  if (!packageJson.peerDependencies?.[peer]) {
    fail(`${peer} must remain a peer dependency.`);
  }
}

const exportKeys = Object.keys(packageJson.exports ?? {}).sort();
const expectedExportKeys = ['.', './styles.css'];
if (JSON.stringify(exportKeys) !== JSON.stringify(expectedExportKeys)) {
  fail(
    `public package exports changed unexpectedly: ${exportKeys.join(', ') || '(none)'}. ` +
      `Expected only ${expectedExportKeys.join(', ')}.`
  );
}

const exportedTargets = collectStringTargets(packageJson.exports);
for (const field of ['main', 'module', 'types']) {
  const value = packageJson[field];
  if (typeof value !== 'string') fail(`package.json ${field} must be a string path.`);
  exportedTargets.add(value);
}

for (const target of exportedTargets) {
  if (!target.startsWith('./')) {
    fail(`package target must be package-relative: ${target}`);
  }

  const absoluteTarget = resolve(packageRoot, target);
  if (!existsSync(absoluteTarget)) {
    fail(`package target does not exist after build: ${target}`);
  }
}

const declarations = listDeclarationFiles(join(packageRoot, 'dist'));
for (const declarationPath of declarations) {
  const declaration = readFileSync(declarationPath, 'utf8');
  if (/^\s*import\s+['"][^'"]+\.css['"];?\s*$/m.test(declaration)) {
    fail(`declaration references CSS as a side effect: ${declarationPath}`);
  }

  const moduleSpecifierPattern =
    /(?:\bfrom\s+|\bimport\s*\(\s*|\bdeclare\s+module\s+)(['"])(\.{1,2}\/[^'"]+)\1/g;
  for (const match of declaration.matchAll(moduleSpecifierPattern)) {
    if (!extname(match[2])) {
      fail(`extensionless relative declaration specifier ${match[2]} in ${declarationPath}`);
    }
  }
}

const npmExecutable = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const packJson = execFileSync(
  npmExecutable,
  ['pack', '--dry-run', '--json', '--ignore-scripts'],
  { cwd: packageRoot, encoding: 'utf8' }
);
const packResult = JSON.parse(packJson)[0];
if (!packResult?.files) fail('npm pack --dry-run did not return a file manifest.');

const packedPaths = new Set(packResult.files.map((file) => file.path));
for (const target of exportedTargets) {
  const packedPath = target.replace(/^\.\//, '');
  if (!packedPaths.has(packedPath)) {
    fail(`exported target is missing from npm pack output: ${target}`);
  }
}

const allowedTopLevelFiles = /^(?:README(?:\.[^/]+)?|LICEN[CS]E(?:\.[^/]+)?|NOTICE(?:\.[^/]+)?|CHANGELOG(?:\.[^/]+)?|package\.json)$/i;
for (const packedFile of packResult.files) {
  const path = packedFile.path;
  if (path.startsWith('dist/')) continue;
  if (allowedTopLevelFiles.test(path)) continue;
  fail(`unexpected file in npm pack output: ${path}`);
}

console.log(
  `Verified ESM exports, ${declarations.length} declaration files and ${packResult.files.length} packed files.`
);
