const path = require(`path`);

const withCSS = require("@zeit/next-css");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

module.exports = withBundleAnalyzer(
  withCSS({
    analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: "static",
        reportFilename: "../../../../bundles/server.html"
      },
      browser: {
        analyzerMode: "static",
        reportFilename: "../../../../bundles/client.html"
      }
    },
    env: {
      API_KEY: process.env.API_KEY,
      STORAGE_PATH:
        "https://firebasestorage.googleapis.com/v0/b/heroes-9c313.appspot.com/o/"
    },
    compress: false,
    poweredByHeader: false,
    target: "serverless",
    webpack(config) {
      config.resolve.modules.push(path.resolve("./src/"));
      return config;
    }
  })
);
