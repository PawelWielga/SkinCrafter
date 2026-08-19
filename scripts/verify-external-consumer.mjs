import { execFileSync } from 'node:child_process';
import {
  cpSync,
  existsSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  realpathSync,
  rmSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, isAbsolute, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const editorRoot = join(repositoryRoot, 'packages', 'editor');
const fixtureRoot = join(repositoryRoot, 'tests', 'external-consumer');
const editorPackageJson = JSON.parse(
  readFileSync(join(editorRoot, 'package.json'), 'utf8')
);
const rootPackageJson = JSON.parse(
  readFileSync(join(repositoryRoot, 'package.json'), 'utf8')
);
const npmExecutable = process.platform === 'win32' ? 'npm.cmd' : 'npm';

function fail(message) {
  throw new Error(`[external consumer] ${message}`);
}

function run(command, args, options = {}) {
  console.log(`> ${command} ${args.join(' ')}`);
  execFileSync(command, args, {
    cwd: repositoryRoot,
    stdio: 'inherit',
    ...options,
  });
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

function getToolingSpec(name) {
  const version = rootPackageJson.devDependencies?.[name];
  if (!version) {
    fail(`root devDependency ${name} is required by the consumer smoke test.`);
  }
  return `${name}@${version}`;
}

function verifyInstalledArtifact(consumerRoot, tarballPath, packResult) {
  const packageName = editorPackageJson.name;
  const installedRoot = join(consumerRoot, 'node_modules', ...packageName.split('/'));

  if (!existsSync(installedRoot)) {
    fail(`installed package is missing at ${installedRoot}`);
  }
  if (lstatSync(installedRoot).isSymbolicLink()) {
    fail('installed editor is a symlink; expected files extracted from the packed tarball.');
  }

  const installedRealPath = realpathSync(installedRoot);
  const consumerNodeModules = realpathSync(join(consumerRoot, 'node_modules'));
  const relativeToConsumer = relative(consumerNodeModules, installedRealPath);
  if (relativeToConsumer.startsWith('..') || isAbsolute(relativeToConsumer)) {
    fail(`installed package escaped the temporary consumer node_modules: ${installedRealPath}`);
  }

  const relativeToRepository = relative(realpathSync(repositoryRoot), installedRealPath);
  if (!relativeToRepository.startsWith('..') && !isAbsolute(relativeToRepository)) {
    fail('installed editor resolves back into the repository/workspace.');
  }

  const installedPackageJson = JSON.parse(
    readFileSync(join(installedRoot, 'package.json'), 'utf8')
  );
  if (installedPackageJson.name !== packageName) {
    fail(`installed package name mismatch: ${installedPackageJson.name}`);
  }
  if (installedPackageJson.version !== editorPackageJson.version) {
    fail(
      `installed package version mismatch: ${installedPackageJson.version} !== ${editorPackageJson.version}`
    );
  }

  const hiddenLockPath = join(consumerRoot, 'node_modules', '.package-lock.json');
  if (!existsSync(hiddenLockPath)) {
    fail('npm did not create node_modules/.package-lock.json for the clean consumer install.');
  }
  const hiddenLock = JSON.parse(readFileSync(hiddenLockPath, 'utf8'));
  const lockEntry = hiddenLock.packages?.[`node_modules/${packageName}`];
  if (!lockEntry || lockEntry.link) {
    fail('npm install metadata does not describe an extracted package artifact.');
  }
  const tarballName = basename(tarballPath);
  if (typeof lockEntry.resolved !== 'string' || !lockEntry.resolved.includes(tarballName)) {
    fail(
      `installed package was not resolved from ${tarballName}; got ${lockEntry.resolved ?? '(missing resolved URL)'}.`
    );
  }

  const targets = collectStringTargets(installedPackageJson.exports);
  for (const field of ['main', 'module', 'types']) {
    const value = installedPackageJson[field];
    if (typeof value !== 'string') {
      fail(`installed package.json ${field} must be a string.`);
    }
    targets.add(value);
  }

  for (const target of targets) {
    if (!target.startsWith('./')) {
      fail(`installed package target must be relative: ${target}`);
    }
    if (!existsSync(resolve(installedRoot, target))) {
      fail(`installed package target does not resolve: ${target}`);
    }
  }

  const styleExport = installedPackageJson.exports?.['./styles.css'];
  if (styleExport !== './dist/style.css') {
    fail(`unexpected stylesheet export target: ${JSON.stringify(styleExport)}`);
  }

  for (const packedFile of packResult.files ?? []) {
    if (!packedFile.path.startsWith('dist/')) {
      continue;
    }
    if (!existsSync(join(installedRoot, packedFile.path))) {
      fail(`packed runtime/declaration file is missing after installation: ${packedFile.path}`);
    }
  }
}

function verifyBrowserBuild(consumerRoot) {
  const distRoot = join(consumerRoot, 'dist');
  const indexPath = join(distRoot, 'index.html');
  if (!existsSync(indexPath)) {
    fail('Vite consumer build did not emit dist/index.html.');
  }

  const indexHtml = readFileSync(indexPath, 'utf8');
  const assetPaths = Array.from(
    indexHtml.matchAll(/(?:src|href)=["']((?:\.\/|\/)?assets\/[^"']+)["']/g),
    (match) => match[1]
  );
  if (assetPaths.length === 0) {
    fail('Vite consumer build did not reference any generated JS/CSS assets.');
  }

  for (const assetPath of assetPaths) {
    const normalizedPath = assetPath.replace(/^\.\//, '').replace(/^\//, '');
    const absolutePath = join(distRoot, normalizedPath);
    if (!existsSync(absolutePath)) {
      fail(`Vite consumer output references a missing asset: ${assetPath}`);
    }
  }
}

const temporaryRoot = mkdtempSync(join(tmpdir(), 'skincrafter-consumer-'));
const packRoot = join(temporaryRoot, 'pack');
mkdirSync(packRoot);
const consumerRoot = join(temporaryRoot, 'consumer');

try {
  run(npmExecutable, ['run', 'build', '-w', editorPackageJson.name]);

  cpSync(fixtureRoot, consumerRoot, { recursive: true });

  const packJson = execFileSync(
    npmExecutable,
    ['pack', '--json', '--ignore-scripts', '--pack-destination', packRoot],
    { cwd: editorRoot, encoding: 'utf8' }
  );
  const packResult = JSON.parse(packJson)[0];
  if (!packResult?.filename || !Array.isArray(packResult.files)) {
    fail('npm pack did not return a tarball filename and file manifest.');
  }

  const tarballPath = join(packRoot, packResult.filename);
  if (!existsSync(tarballPath)) {
    fail(`npm pack did not create ${tarballPath}`);
  }

  const peerSpecs = Object.entries(editorPackageJson.peerDependencies ?? {}).map(
    ([name, version]) => `${name}@${version}`
  );
  const toolingSpecs = [
    '@types/react',
    '@types/react-dom',
    '@types/three',
    'typescript',
    'vite',
  ].map(getToolingSpec);

  run(
    npmExecutable,
    [
      'install',
      '--ignore-scripts',
      '--no-audit',
      '--no-fund',
      '--no-save',
      tarballPath,
      ...peerSpecs,
      ...toolingSpecs,
    ],
    { cwd: consumerRoot }
  );

  verifyInstalledArtifact(consumerRoot, tarballPath, packResult);

  const tscPath = join(consumerRoot, 'node_modules', 'typescript', 'bin', 'tsc');
  run(process.execPath, [tscPath, '-p', 'tsconfig.json'], { cwd: consumerRoot });
  run(process.execPath, [tscPath, '-p', 'tsconfig.nodenext.json'], { cwd: consumerRoot });

  const vitePath = join(consumerRoot, 'node_modules', 'vite', 'bin', 'vite.js');
  run(process.execPath, [vitePath, 'build'], { cwd: consumerRoot });
  verifyBrowserBuild(consumerRoot);

  console.log(
    `External consumer smoke test passed for ${editorPackageJson.name}@${editorPackageJson.version} from ${packResult.filename}.`
  );
} finally {
  rmSync(temporaryRoot, { recursive: true, force: true });
}
