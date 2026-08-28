import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';
import { createPagesFallbackHtml } from './pages-fallback.mjs';

const deploymentConfig = JSON.parse(
  await readFile(new URL('../deployment.config.json', import.meta.url), 'utf8')
);

const runFallback = ({ productionBasePath, previewBasePath, pathname, search = '', hash = '' }) => {
  const html = createPagesFallbackHtml({ productionBasePath, previewBasePath });
  const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);

  assert.ok(scriptMatch, 'Generated Pages fallback should contain a script.');

  let redirectTarget = null;
  const location = {
    pathname,
    search,
    hash,
    replace: (target) => {
      redirectTarget = target;
    },
  };

  vm.runInNewContext(scriptMatch[1], {
    encodeURIComponent,
    window: { location },
  });

  return redirectTarget;
};

test('deployment config defines a root production base and a valid preview base', () => {
  assert.equal(deploymentConfig.production.basePath, '/');
  assert.match(deploymentConfig.dev.basePath, /^\/(?:[A-Za-z0-9._~-]+\/)+$/);
  assert.notEqual(deploymentConfig.dev.basePath, '/');
});

test('production nested routes redirect through the configured root base', () => {
  const pathname = '/mcskinview';
  const search = '?name=Alex';
  const hash = '#skin';
  const target = `${pathname}${search}${hash}`;

  assert.equal(
    runFallback({
      productionBasePath: deploymentConfig.production.basePath,
      previewBasePath: deploymentConfig.dev.basePath,
      pathname,
      search,
      hash,
    }),
    `${deploymentConfig.production.basePath}?__skincrafter_spa=${encodeURIComponent(target)}`
  );
});

test('dev nested routes redirect through the configured preview base', () => {
  const pathname = `${deploymentConfig.dev.basePath}mcskinview`;

  assert.equal(
    runFallback({
      productionBasePath: deploymentConfig.production.basePath,
      previewBasePath: deploymentConfig.dev.basePath,
      pathname,
    }),
    `${deploymentConfig.dev.basePath}?__skincrafter_spa=${encodeURIComponent(pathname)}`
  );
});

test('fallback routing follows a changed preview base without implementation changes', () => {
  const previewBasePath = '/preview/';
  const pathname = `${previewBasePath}mcskinview`;

  assert.equal(
    runFallback({
      productionBasePath: '/',
      previewBasePath,
      pathname,
    }),
    `${previewBasePath}?__skincrafter_spa=${encodeURIComponent(pathname)}`
  );
});
