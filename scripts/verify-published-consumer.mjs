import { execFileSync } from 'node:child_process';
import {
  cpSync,
  existsSync,
  lstatSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  realpathSync,
  rmSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { isAbsolute, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const fixtureRoot = join(repositoryRoot, 'tests', 'external-consumer');
const editorPackageJson = JSON.parse(
  readFileSync(join(repositoryRoot, 'packages', 'editor', 'package.json'), 'utf8')
);
const rootPackageLock = JSON.parse(
  readFileSync(join(repositoryRoot, 'package-lock.json'), 'utf8')
);
const npmExecutable = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const packageName = editorPackageJson.name;
const packageVersion = editorPackageJson.version;
const packageSpec = `${packageName}@${packageVersion}`;
const publicRegistry = 'https://registry.npmjs.org/';
const installAttempts = 6;
const retryDelayMs = 5_000;

function fail(message) {
  throw new Error(`[published consumer] ${message}`);
}

function run(command, args, options = {}) {
  console.log(`> ${command} ${args.join(' ')}`);
  execFileSync(command, args, {
    cwd: repositoryRoot,
    stdio: 'inherit',
    ...options,
  });
}

function sleep(milliseconds) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}

function getLockedSpec(name) {
  const lockEntry = rootPackageLock.packages?.[`node_modules/${name}`];
  if (!lockEntry?.version) {
    fail(`package-lock.json must pin ${name} for the registry consumer smoke test.`);
  }
  return `${name}@${lockEntry.version}`;
}

function listFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) return listFiles(entryPath);
    return entry.isFile() ? [entryPath] : [];
  });
}

function verifySupportedImports(consumerRoot) {
  const allowedImports = new Set([packageName, `${packageName}/styles.css`]);
  const sourceFiles = listFiles(join(consumerRoot, 'src')).filter(
    (filePath) => filePath.endsWith('.ts') || filePath.endsWith('.tsx')
  );

  for (const sourceFile of sourceFiles) {
    const source = readFileSync(sourceFile, 'utf8');
    const importMatches = source.matchAll(/(?:from\s+|import\s*)['"]([^'"]+)['"]/g);
    for (const match of importMatches) {
      const importPath = match[1];
      if (importPath.startsWith(packageName) && !allowedImports.has(importPath)) {
        fail(`consumer uses unsupported package import: ${importPath}`);
      }
    }
  }
}

function verifyRegistryInstall(consumerRoot) {
  const installedRoot = join(consumerRoot, 'node_modules', ...packageName.split('/'));
  if (!existsSync(installedRoot)) {
    fail(`installed package is missing at ${installedRoot}`);
  }
  if (lstatSync(installedRoot).isSymbolicLink()) {
    fail('installed package is a symlink; expected files fetched from the npm registry.');
  }

  const installedRealPath = realpathSync(installedRoot);
  const consumerNodeModules = realpathSync(join(consumerRoot, 'node_modules'));
  const relativeToConsumer = relative(consumerNodeModules, installedRealPath);
  if (relativeToConsumer.startsWith('..') || isAbsolute(relativeToConsumer)) {
    fail(`installed package escaped the temporary consumer node_modules: ${installedRealPath}`);
  }

  const relativeToRepository = relative(realpathSync(repositoryRoot), installedRealPath);
  if (!relativeToRepository.startsWith('..') && !isAbsolute(relativeToRepository)) {
    fail('installed package resolves back into the repository/workspace.');
  }

  const installedPackageJson = JSON.parse(
    readFileSync(join(installedRoot, 'package.json'), 'utf8')
  );
  if (installedPackageJson.name !== packageName) {
    fail(`installed package name mismatch: ${installedPackageJson.name}`);
  }
  if (installedPackageJson.version !== packageVersion) {
    fail(
      `installed package version mismatch: ${installedPackageJson.version} !== ${packageVersion}`
    );
  }

  const hiddenLockPath = join(consumerRoot, 'node_modules', '.package-lock.json');
  if (!existsSync(hiddenLockPath)) {
    fail('npm did not create node_modules/.package-lock.json for the clean registry install.');
  }
  const hiddenLock = JSON.parse(readFileSync(hiddenLockPath, 'utf8'));
  const lockEntry = hiddenLock.packages?.[`node_modules/${packageName}`];
  if (!lockEntry || lockEntry.link) {
    fail('npm install metadata does not describe an extracted registry package.');
  }
  if (lockEntry.version !== packageVersion) {
    fail(`registry lock version mismatch: ${lockEntry.version} !== ${packageVersion}`);
  }
  if (
    typeof lockEntry.resolved !== 'string' ||
    !lockEntry.resolved.startsWith(publicRegistry)
  ) {
    fail(`package was not resolved from the public npm registry: ${lockEntry.resolved ?? '(missing)'}`);
  }

  const rootExport = installedPackageJson.exports?.['.'];
  if (!rootExport) {
    fail('published package does not expose the public root entrypoint.');
  }
  if (installedPackageJson.exports?.['./styles.css'] !== './dist/style.css') {
    fail('published package does not expose the supported stylesheet entrypoint.');
  }
}

function installPublishedPackage(consumerRoot) {
  const peerSpecs = Object.keys(editorPackageJson.peerDependencies ?? {}).map(getLockedSpec);
  const toolingSpecs = [
    '@types/react',
    '@types/react-dom',
    '@types/three',
    'typescript',
    'vite',
  ].map(getLockedSpec);
  const installArgs = [
    'install',
    '--ignore-scripts',
    '--no-audit',
    '--no-fund',
    '--no-save',
    `--registry=${publicRegistry}`,
    packageSpec,
    ...peerSpecs,
    ...toolingSpecs,
  ];

  for (let attempt = 1; attempt <= installAttempts; attempt += 1) {
    try {
      run(npmExecutable, installArgs, { cwd: consumerRoot });
      return;
    } catch (error) {
      if (attempt === installAttempts) {
        throw error;
      }
      console.warn(
        `Registry install attempt ${attempt}/${installAttempts} failed; retrying in ${retryDelayMs / 1000}s.`
      );
      sleep(retryDelayMs);
    }
  }
}

const temporaryRoot = mkdtempSync(join(tmpdir(), 'skincrafter-published-consumer-'));
const consumerRoot = join(temporaryRoot, 'consumer');

try {
  cpSync(fixtureRoot, consumerRoot, { recursive: true });
  verifySupportedImports(consumerRoot);
  installPublishedPackage(consumerRoot);
  verifyRegistryInstall(consumerRoot);

  const tscPath = join(consumerRoot, 'node_modules', 'typescript', 'bin', 'tsc');
  run(process.execPath, [tscPath, '-p', 'tsconfig.json'], { cwd: consumerRoot });
  run(process.execPath, [tscPath, '-p', 'tsconfig.nodenext.json'], { cwd: consumerRoot });

  const vitePath = join(consumerRoot, 'node_modules', 'vite', 'bin', 'vite.js');
  run(process.execPath, [vitePath, 'build', '--base', '/character/'], { cwd: consumerRoot });

  console.log(
    `Published consumer smoke test passed for ${packageSpec} installed from ${publicRegistry}.`
  );
} finally {
  rmSync(temporaryRoot, { recursive: true, force: true });
}
