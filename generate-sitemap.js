const Sitemap = require("react-router-sitemap").default;
const path = require("path");

// Write the generated sitemap to the `public` folder so Vite copies it to the
// site root during the build step.
const sitemapOutput = path.resolve(__dirname, "public", "sitemap.xml");

const sitemap = new Sitemap(path.resolve(__dirname, "./src/App.tsx"))
  .build("https://skincrafter.dihor.pl")
  .save(sitemapOutput);
