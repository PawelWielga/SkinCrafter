import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const distDirectory = fileURLToPath(new URL('../dist/', import.meta.url));
const fallbackHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SkinCrafter</title>
  </head>
  <body>
    <script>
      (function (location) {
        var previewBase = '/dev/';
        var base =
          location.pathname === '/dev' || location.pathname.startsWith(previewBase)
            ? previewBase
            : '/';
        var target = location.pathname + location.search + location.hash;

        location.replace(
          base + '?__skincrafter_spa=' + encodeURIComponent(target)
        );
      })(window.location);
    </script>
  </body>
</html>
`;

await writeFile(`${distDirectory}404.html`, fallbackHtml, 'utf8');
