import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import { describe, expect, it } from 'vitest';
import { createPagesFallbackHtml } from './pages-fallback.mjs';

const deploymentConfig = JSON.parse(
  await readFile(new URL('../deployment.config.json', import.meta.url), 'utf8')
);

const runFallback = ({ productionBasePath, previewBasePath, pathname, search = '', hash = '' }) => {
  const html = createPagesFallbackHtml({ productionBasePath, previewBasePath });
  const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);

  if (!scriptMatch) {
    throw new Error('Generated Pages fallback does not contain a script.');
  }

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

describe('GitHub Pages SPA fallback', () => {
  it('redirects production nested routes through the configured root base', () => {
    const pathname = '/mcskinview';
    const search = '?name=Alex';
    const hash = '#skin';
    const target = `${pathname}${search}${hash}`;

    expect(
      runFallback({
        productionBasePath: deploymentConfig.production.basePath,
        previewBasePath: deploymentConfig.dev.basePath,
        pathname,
        search,
        hash,
      })
    ).toBe(
      `${deploymentConfig.production.basePath}?__skincrafter_spa=${encodeURIComponent(target)}`
    );
  });

  it('redirects dev nested routes through the configured preview base', () => {
    const pathname = `${deploymentConfig.dev.basePath}mcskinview`;
    const target = pathname;

    expect(
      runFallback({
        productionBasePath: deploymentConfig.production.basePath,
        previewBasePath: deploymentConfig.dev.basePath,
        pathname,
      })
    ).toBe(`${deploymentConfig.dev.basePath}?__skincrafter_spa=${encodeURIComponent(target)}`);
  });

  it('uses a changed preview base without changing the fallback implementation', () => {
    const previewBasePath = '/preview/';
    const pathname = `${previewBasePath}mcskinview`;

    expect(
      runFallback({
        productionBasePath: '/',
        previewBasePath,
        pathname,
      })
    ).toBe(`${previewBasePath}?__skincrafter_spa=${encodeURIComponent(pathname)}`);
  });
});
