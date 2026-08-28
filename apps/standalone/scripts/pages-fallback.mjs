export const createPagesFallbackHtml = ({ productionBasePath, previewBasePath }) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SkinCrafter</title>
  </head>
  <body>
    <script>
      (function (location) {
        var previewBase = ${JSON.stringify(previewBasePath)};
        var base =
          location.pathname.startsWith(previewBase) &&
          location.pathname !== previewBase
            ? previewBase
            : ${JSON.stringify(productionBasePath)};
        var target = location.pathname + location.search + location.hash;

        location.replace(
          base + '?__skincrafter_spa=' + encodeURIComponent(target)
        );
      })(window.location);
    </script>
  </body>
</html>
`;
