import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import postcss from 'postcss';
import { JSDOM } from 'jsdom';

const packageRoot = fileURLToPath(new URL('..', import.meta.url));
const css = readFileSync(join(packageRoot, 'dist', 'style.css'), 'utf8');
const javascript = readFileSync(join(packageRoot, 'dist', 'index.js'), 'utf8');

function fail(message) {
  throw new Error(`[style isolation] ${message}`);
}

const stylesheet = postcss.parse(css);
const unexpectedSelectors = new Set();

stylesheet.walkRules((rule) => {
  const parent = rule.parent;
  if (parent?.type === 'atrule' && /keyframes$/i.test(parent.name)) return;

  for (const selector of rule.selectors ?? []) {
    const normalizedSelector = selector.trim();
    if (!normalizedSelector.startsWith('.skincrafter-editor')) {
      unexpectedSelectors.add(normalizedSelector);
    }
  }
});

if (unexpectedSelectors.size > 0) {
  fail(
    `public CSS contains unscoped selectors: ${Array.from(unexpectedSelectors).sort().join(', ')}`
  );
}

stylesheet.walkAtRules((rule) => {
  if (!/keyframes$/i.test(rule.name)) return;
  const keyframeName = rule.params.trim();
  if (!keyframeName.startsWith('skincrafter-')) {
    fail(`public CSS contains an unprefixed keyframe: ${keyframeName}`);
  }
});

if (javascript.includes('window.global')) {
  fail('editor bundle writes or references the window.global compatibility shim.');
}

if (javascript.includes('dragula')) {
  fail('editor bundle still contains Dragula runtime code.');
}

const dom = new JSDOM(`<!doctype html>
<html>
  <head>
    <style>
      .host-probe {
        display: inline-block;
        border: 0 solid transparent;
        background-color: rgb(1, 2, 3);
        font-size: 19px;
      }
    </style>
    <style>${css}</style>
  </head>
  <body>
    <div id="host-probe" class="host-probe flex grid container border bg-white text-xs"></div>
    <div class="skincrafter-editor">
      <div id="editor-probe" class="flex"></div>
    </div>
  </body>
</html>`);

const { window } = dom;
const hostStyles = window.getComputedStyle(window.document.getElementById('host-probe'));
if (hostStyles.display !== 'inline-block') {
  fail(`host .flex/.grid classes were modified (display: ${hostStyles.display}).`);
}
if (hostStyles.borderTopWidth !== '0px') {
  fail(`host .border class was modified (border-top-width: ${hostStyles.borderTopWidth}).`);
}
if (hostStyles.backgroundColor !== 'rgb(1, 2, 3)') {
  fail(`host .bg-white class was modified (background: ${hostStyles.backgroundColor}).`);
}
if (hostStyles.fontSize !== '19px') {
  fail(`host .text-xs class was modified (font-size: ${hostStyles.fontSize}).`);
}

const editorStyles = window.getComputedStyle(window.document.getElementById('editor-probe'));
if (editorStyles.display !== 'flex') {
  fail('scoped Tailwind utilities do not apply inside .skincrafter-editor.');
}

window.close();
console.log('Verified scoped editor selectors, prefixed keyframes, host isolation and runtime globals.');
