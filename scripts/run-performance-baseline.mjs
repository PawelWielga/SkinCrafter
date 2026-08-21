import { spawnSync } from 'node:child_process';

const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const result = spawnSync(
  npx,
  [
    'playwright',
    'test',
    'tests/e2e/performance-baseline.spec.ts',
    '--project=chromium-desktop',
    '--reporter=line',
  ],
  {
    stdio: 'inherit',
    env: {
      ...process.env,
      SKINCRAFTER_PERFORMANCE_BASELINE: '1',
    },
  }
);

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
