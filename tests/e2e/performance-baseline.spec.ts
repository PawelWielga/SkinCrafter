import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { expect, test, type Browser, type BrowserContext, type Locator, type Page } from '@playwright/test';

type ResourceKey = 'textures' | 'buffers' | 'programs' | 'vertexArrays';

interface ResourceCounter {
  created: number;
  deleted: number;
  live: number;
  peakLive: number;
}

interface StatusTransition {
  at: number;
  status: string;
}

interface PerformanceProbeSnapshot {
  resources: Record<ResourceKey, ResourceCounter>;
  canvasCreations: number;
  canvasRemovals: number;
  statusTransitions: StatusTransition[];
}

interface PackageFileMetadata {
  path: string;
  size: number;
}

interface PackageMetadata {
  name: string;
  version: string;
  size: number;
  unpackedSize: number;
  filename: string;
  files: PackageFileMetadata[];
}

interface Summary {
  samples: number[];
  median: number;
  p95: number;
}

const repetitions = 10;
const longSessionChanges = 100;
const mountCycles = 10;
const viewport = { width: 1280, height: 720 };
const deviceScaleFactor = 1;

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const gitCommand = process.platform === 'win32' ? 'git.exe' : 'git';

function percentile(sorted: number[], percentileValue: number): number {
  const index = Math.max(0, Math.ceil(sorted.length * percentileValue) - 1);
  return sorted[index] ?? 0;
}

function summarize(samples: number[]): Summary {
  const sorted = [...samples].sort((left, right) => left - right);
  const middle = Math.floor(sorted.length / 2);
  const median =
    sorted.length % 2 === 0
      ? ((sorted[middle - 1] ?? 0) + (sorted[middle] ?? 0)) / 2
      : (sorted[middle] ?? 0);

  return {
    samples: samples.map((value) => Number(value.toFixed(2))),
    median: Number(median.toFixed(2)),
    p95: Number(percentile(sorted, 0.95).toFixed(2)),
  };
}

function readCommand(command: string, args: string[]): string {
  return execFileSync(command, args, {
    cwd: process.cwd(),
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim();
}

function measurePackage(): {
  packageName: string;
  version: string;
  tarballBytes: number;
  unpackedBytes: number;
  jsBytes: number;
  cssBytes: number;
  pngAssetCount: number;
  pngAssetBytes: number;
  largestPngAssets: PackageFileMetadata[];
} {
  const destination = mkdtempSync(join(tmpdir(), 'skincrafter-performance-pack-'));

  try {
    const output = readCommand(npmCommand, [
      'pack',
      '--workspace',
      '@dihor/skincrafter-editor',
      '--json',
      '--pack-destination',
      destination,
    ]);
    const packages = JSON.parse(output) as PackageMetadata[];
    const packed = packages[0];
    if (!packed) {
      throw new Error('npm pack did not return package metadata.');
    }

    const jsBytes = packed.files.find((file) => file.path === 'dist/index.js')?.size ?? 0;
    const cssBytes = packed.files.find((file) => file.path === 'dist/style.css')?.size ?? 0;
    const pngAssets = packed.files.filter(
      (file) => file.path.startsWith('dist/assets/') && file.path.endsWith('.png')
    );

    return {
      packageName: packed.name,
      version: packed.version,
      tarballBytes: packed.size,
      unpackedBytes: packed.unpackedSize,
      jsBytes,
      cssBytes,
      pngAssetCount: pngAssets.length,
      pngAssetBytes: pngAssets.reduce((total, file) => total + file.size, 0),
      largestPngAssets: [...pngAssets]
        .sort((left, right) => right.size - left.size)
        .slice(0, 5),
    };
  } finally {
    rmSync(destination, { recursive: true, force: true });
  }
}

async function installPerformanceProbe(context: BrowserContext): Promise<void> {
  await context.addInitScript(() => {
    const resourceKeys = ['textures', 'buffers', 'programs', 'vertexArrays'] as const;
    type BrowserResourceKey = (typeof resourceKeys)[number];
    type BrowserResource = object;

    const state = {
      resources: Object.fromEntries(
        resourceKeys.map((key) => [key, { created: 0, deleted: 0, live: 0, peakLive: 0 }])
      ) as Record<BrowserResourceKey, ResourceCounter>,
      canvasCreations: 0,
      canvasRemovals: 0,
      statusTransitions: [] as StatusTransition[],
    };

    const tracked = Object.fromEntries(
      resourceKeys.map((key) => [key, new WeakSet<BrowserResource>()])
    ) as Record<BrowserResourceKey, WeakSet<BrowserResource>>;

    const globalWindow = window as Window & {
      __skincrafterPerformanceProbe?: PerformanceProbeSnapshot;
    };
    globalWindow.__skincrafterPerformanceProbe = state;

    const patchPair = (
      prototype: object | undefined,
      createName: string,
      deleteName: string,
      key: BrowserResourceKey
    ): void => {
      if (!prototype) return;

      const record = prototype as Record<string, unknown>;
      const originalCreate = record[createName];
      const originalDelete = record[deleteName];
      if (typeof originalCreate !== 'function' || typeof originalDelete !== 'function') return;
      if (Object.prototype.hasOwnProperty.call(originalCreate, '__skincrafterPerformanceWrapped')) {
        return;
      }

      const wrappedCreate = function (this: unknown, ...args: unknown[]): unknown {
        const resource = Reflect.apply(originalCreate, this, args) as BrowserResource | null;
        if (resource && !tracked[key].has(resource)) {
          tracked[key].add(resource);
          const counter = state.resources[key];
          counter.created += 1;
          counter.live += 1;
          counter.peakLive = Math.max(counter.peakLive, counter.live);
        }
        return resource;
      };
      Object.defineProperty(wrappedCreate, '__skincrafterPerformanceWrapped', { value: true });
      record[createName] = wrappedCreate;

      const wrappedDelete = function (this: unknown, resource: BrowserResource | null): unknown {
        if (resource && tracked[key].has(resource)) {
          tracked[key].delete(resource);
          const counter = state.resources[key];
          counter.deleted += 1;
          counter.live -= 1;
        }
        return Reflect.apply(originalDelete, this, [resource]);
      };
      Object.defineProperty(wrappedDelete, '__skincrafterPerformanceWrapped', { value: true });
      record[deleteName] = wrappedDelete;
    };

    const webGlPrototypes = [
      window.WebGLRenderingContext?.prototype,
      window.WebGL2RenderingContext?.prototype,
    ];

    for (const prototype of webGlPrototypes) {
      patchPair(prototype, 'createTexture', 'deleteTexture', 'textures');
      patchPair(prototype, 'createBuffer', 'deleteBuffer', 'buffers');
      patchPair(prototype, 'createProgram', 'deleteProgram', 'programs');
      patchPair(prototype, 'createVertexArray', 'deleteVertexArray', 'vertexArrays');
    }

    const countCanvases = (node: Node): number => {
      if (node instanceof HTMLCanvasElement) return 1;
      if (node instanceof Element) return node.querySelectorAll('canvas').length;
      return 0;
    };

    const recordStatus = (element: Element): void => {
      if (!element.matches('[data-testid="skincrafter-editor"]')) return;
      const status = element.getAttribute('data-skincrafter-generation-status');
      if (!status) return;
      const previous = state.statusTransitions.at(-1);
      if (previous?.status === status) return;
      state.statusTransitions.push({ at: performance.now(), status });
    };

    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === 'attributes' && record.target instanceof Element) {
          recordStatus(record.target);
          continue;
        }

        for (const node of record.addedNodes) {
          state.canvasCreations += countCanvases(node);
          if (node instanceof Element) {
            recordStatus(node);
            node.querySelectorAll('[data-testid="skincrafter-editor"]').forEach(recordStatus);
          }
        }
        for (const node of record.removedNodes) {
          state.canvasRemovals += countCanvases(node);
        }
      }
    });

    observer.observe(document, {
      attributes: true,
      attributeFilter: ['data-skincrafter-generation-status'],
      childList: true,
      subtree: true,
    });
  });
}

async function readProbe(page: Page): Promise<PerformanceProbeSnapshot> {
  return page.evaluate(() => {
    const globalWindow = window as Window & {
      __skincrafterPerformanceProbe?: PerformanceProbeSnapshot;
    };
    const probe = globalWindow.__skincrafterPerformanceProbe;
    if (!probe) throw new Error('Performance probe is not installed.');
    return JSON.parse(JSON.stringify(probe)) as PerformanceProbeSnapshot;
  });
}

async function transitionCount(page: Page): Promise<number> {
  return page.evaluate(() => {
    const globalWindow = window as Window & {
      __skincrafterPerformanceProbe?: PerformanceProbeSnapshot;
    };
    return globalWindow.__skincrafterPerformanceProbe?.statusTransitions.length ?? 0;
  });
}

async function waitForGenerationWindow(page: Page, startIndex: number): Promise<number> {
  await page.waitForFunction((index) => {
    const globalWindow = window as Window & {
      __skincrafterPerformanceProbe?: PerformanceProbeSnapshot;
    };
    const transitions = globalWindow.__skincrafterPerformanceProbe?.statusTransitions.slice(index) ?? [];
    const firstGenerating = transitions.findIndex((transition) => transition.status === 'generating');
    let lastGenerating = -1;
    transitions.forEach((transition, transitionIndex) => {
      if (transition.status === 'generating') lastGenerating = transitionIndex;
    });
    return (
      firstGenerating >= 0 &&
      lastGenerating >= 0 &&
      transitions.slice(lastGenerating + 1).some((transition) => transition.status === 'ready')
    );
  }, startIndex);

  return page.evaluate((index) => {
    const globalWindow = window as Window & {
      __skincrafterPerformanceProbe?: PerformanceProbeSnapshot;
    };
    const transitions = globalWindow.__skincrafterPerformanceProbe?.statusTransitions.slice(index) ?? [];
    const firstGenerating = transitions.find((transition) => transition.status === 'generating');
    let lastGeneratingIndex = -1;
    transitions.forEach((transition, transitionIndex) => {
      if (transition.status === 'generating') lastGeneratingIndex = transitionIndex;
    });
    const ready = transitions
      .slice(lastGeneratingIndex + 1)
      .find((transition) => transition.status === 'ready');
    if (!firstGenerating || !ready) {
      throw new Error('Generation transition window was incomplete.');
    }
    return ready.at - firstGenerating.at;
  }, startIndex);
}

async function measureSingleChange(page: Page, target: Locator): Promise<number> {
  const startIndex = await transitionCount(page);
  await target.click();
  return waitForGenerationWindow(page, startIndex);
}

async function measureRapidChanges(page: Page, targets: Locator[]): Promise<number> {
  const startIndex = await transitionCount(page);
  for (const target of targets) {
    await target.evaluate((element) => (element as HTMLButtonElement).click());
  }
  return waitForGenerationWindow(page, startIndex);
}

async function waitForEditorReady(page: Page): Promise<void> {
  const editor = page.getByTestId('skincrafter-editor');
  await expect(editor).toBeVisible();
  await expect(editor).toHaveAttribute('data-skincrafter-generation-status', 'ready');
  await expect(page.locator('.skincrafter-preview-surface canvas')).toHaveCount(1);
}

async function measureColdFirstRender(browser: Browser): Promise<number[]> {
  const samples: number[] = [];

  for (let iteration = 0; iteration < repetitions; iteration += 1) {
    const context = await browser.newContext({ viewport, deviceScaleFactor });
    const page = await context.newPage();
    await page.goto('/');
    await waitForEditorReady(page);
    samples.push(await page.evaluate(() => performance.now()));
    await context.close();
  }

  return samples;
}

function resourceLive(snapshot: PerformanceProbeSnapshot): Record<ResourceKey, number> {
  return {
    textures: snapshot.resources.textures.live,
    buffers: snapshot.resources.buffers.live,
    programs: snapshot.resources.programs.live,
    vertexArrays: snapshot.resources.vertexArrays.live,
  };
}

function resourceDelta(
  before: PerformanceProbeSnapshot,
  after: PerformanceProbeSnapshot
): Record<ResourceKey, number> {
  const beforeLive = resourceLive(before);
  const afterLive = resourceLive(after);
  return {
    textures: afterLive.textures - beforeLive.textures,
    buffers: afterLive.buffers - beforeLive.buffers,
    programs: afterLive.programs - beforeLive.programs,
    vertexArrays: afterLive.vertexArrays - beforeLive.vertexArrays,
  };
}

test.skip(
  process.env.SKINCRAFTER_PERFORMANCE_BASELINE !== '1',
  'Run explicitly with npm run test:performance.'
);

test('records the reproducible editor performance and resource baseline', async ({ browser }, testInfo) => {
  test.setTimeout(240_000);

  const gitSha = readCommand(gitCommand, ['rev-parse', 'HEAD']);
  const npmVersion = readCommand(npmCommand, ['--version']);
  const packageVersion = (
    JSON.parse(readFileSync('packages/editor/package.json', 'utf8')) as { version: string }
  ).version;
  const firstRender = summarize(await measureColdFirstRender(browser));

  const context = await browser.newContext({ viewport, deviceScaleFactor });
  await installPerformanceProbe(context);
  const page = await context.newPage();
  await page.goto('/');
  await waitForEditorReady(page);

  const userAgent = await page.evaluate(() => navigator.userAgent);
  const browserVersion = browser.version();
  const eyes = page.getByRole('group', { name: 'Eyes' });
  const classic = eyes.getByRole('button', { name: 'Classic' });
  const small = eyes.getByRole('button', { name: 'Small' });
  const big = eyes.getByRole('button', { name: 'Big' });
  const eyeOptions = [classic, small, big];

  const generationSamples: number[] = [];
  for (let iteration = 0; iteration < repetitions; iteration += 1) {
    const target = iteration % 2 === 0 ? small : big;
    generationSamples.push(await measureSingleChange(page, target));
  }

  const rapidSamples: number[] = [];
  for (let iteration = 0; iteration < repetitions; iteration += 1) {
    const sequence =
      iteration % 2 === 0
        ? [classic, small, big, classic, small]
        : [big, classic, small, big, classic];
    rapidSamples.push(await measureRapidChanges(page, sequence));
  }

  for (const option of eyeOptions) {
    if ((await option.getAttribute('aria-pressed')) !== 'true') {
      await measureSingleChange(page, option);
    }
  }
  const longSessionStart = await readProbe(page);
  const longSessionSnapshots: Array<{
    changes: number;
    live: Record<ResourceKey, number>;
  }> = [];

  for (let change = 1; change <= longSessionChanges; change += 1) {
    const selectedIndex = await Promise.all(
      eyeOptions.map(async (option) => (await option.getAttribute('aria-pressed')) === 'true')
    ).then((selected) => selected.findIndex(Boolean));
    const target = eyeOptions[(selectedIndex + 1 + eyeOptions.length) % eyeOptions.length] ?? small;
    await measureSingleChange(page, target);

    if (change % 10 === 0) {
      const snapshot = await readProbe(page);
      longSessionSnapshots.push({ changes: change, live: resourceLive(snapshot) });
    }
  }

  const longSessionEnd = await readProbe(page);

  const mountCycleSnapshots: Array<{
    cycle: number;
    afterUnmount: Record<ResourceKey, number>;
    afterRemount: Record<ResourceKey, number>;
  }> = [];

  for (let cycle = 1; cycle <= mountCycles; cycle += 1) {
    await page.getByRole('link', { name: 'Skin View' }).click();
    await expect(page).toHaveURL(/\/mcskinview$/);
    await expect(page.locator('canvas')).toHaveCount(0);
    const afterUnmount = await readProbe(page);

    await page.getByRole('link', { name: 'Wardrobe' }).click();
    await expect(page).toHaveURL(/\/$/);
    await waitForEditorReady(page);
    const afterRemount = await readProbe(page);

    mountCycleSnapshots.push({
      cycle,
      afterUnmount: resourceLive(afterUnmount),
      afterRemount: resourceLive(afterRemount),
    });
  }

  const finalProbe = await readProbe(page);
  await expect(page.locator('canvas')).toHaveCount(1);
  await context.close();

  const packageSize = measurePackage();
  const result = {
    measuredAt: new Date().toISOString(),
    gitSha,
    packageVersion,
    environment: {
      node: process.version,
      npm: npmVersion,
      browser: `Chrome ${browserVersion}`,
      userAgent,
      os: `${process.platform}/${process.arch}`,
      runner: process.env.GITHUB_ACTIONS
        ? `GitHub Actions ${process.env.RUNNER_OS ?? 'unknown'}/${process.env.RUNNER_ARCH ?? 'unknown'}`
        : 'local',
      viewport,
      devicePixelRatio: deviceScaleFactor,
    },
    scenarios: {
      firstRender: {
        state: 'cold browser context; localhost dev server warm',
        repetitions,
        milliseconds: firstRender,
      },
      skinGeneration: {
        state: 'warm editor; cached eye assets; sequential option changes',
        repetitions,
        milliseconds: summarize(generationSamples),
      },
      rapidChanges: {
        state: 'warm editor; five immediate eye-option changes; final ready state measured',
        repetitions,
        milliseconds: summarize(rapidSamples),
      },
      resources: {
        instrumentation:
          'WebGL textures, buffers, programs (material/shader proxy), vertex arrays (geometry proxy), plus DOM canvas lifecycle',
        longSessionChanges,
        startLive: resourceLive(longSessionStart),
        endLive: resourceLive(longSessionEnd),
        liveDelta: resourceDelta(longSessionStart, longSessionEnd),
        everyTenChanges: longSessionSnapshots,
        mountCycles,
        mountCycleSnapshots,
        finalLive: resourceLive(finalProbe),
        peakLive: {
          textures: finalProbe.resources.textures.peakLive,
          buffers: finalProbe.resources.buffers.peakLive,
          programs: finalProbe.resources.programs.peakLive,
          vertexArrays: finalProbe.resources.vertexArrays.peakLive,
        },
        created: {
          textures: finalProbe.resources.textures.created,
          buffers: finalProbe.resources.buffers.created,
          programs: finalProbe.resources.programs.created,
          vertexArrays: finalProbe.resources.vertexArrays.created,
        },
        deleted: {
          textures: finalProbe.resources.textures.deleted,
          buffers: finalProbe.resources.buffers.deleted,
          programs: finalProbe.resources.programs.deleted,
          vertexArrays: finalProbe.resources.vertexArrays.deleted,
        },
        canvasCreations: finalProbe.canvasCreations,
        canvasRemovals: finalProbe.canvasRemovals,
      },
      packageSize,
    },
  };

  mkdirSync('test-results', { recursive: true });
  const outputPath = 'test-results/performance-baseline.json';
  writeFileSync(outputPath, `${JSON.stringify(result, null, 2)}\n`, 'utf8');
  await testInfo.attach('performance-baseline.json', {
    body: Buffer.from(JSON.stringify(result, null, 2)),
    contentType: 'application/json',
  });

  console.log(`SKINCRAFTER_PERFORMANCE_BASELINE=${JSON.stringify(result)}`);
});
