const Sitemap = require("react-router-sitemap").default;
const path = require("path");

const sitemap = new Sitemap(path.resolve(__dirname, "./src/App.jsx"))
  .build("https://skincrafter.dihor.pl")
  .save(path.resolve(__dirname, "./public/sitemap.xml"));
