const path = require(`path`);
const Dotenv = require("dotenv-webpack");

const withCSS = require("@zeit/next-css");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

module.exports = withBundleAnalyzer(
  withCSS({
    analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: "static",
        reportFilename: "../../../../bundles/server.html",
      },
      browser: {
        analyzerMode: "static",
        reportFilename: "../../../../bundles/client.html",
      },
    },
    env: {
      ENDPOINTS_BASE: process.env.ENDPOINTS_BASE,
      ENDPOINTS_API: process.env.ENDPOINTS_API,
      ENDPOINTS_ASSETS: process.env.ENDPOINTS_ASSETS,
    },
    compress: false,
    poweredByHeader: false,
    target: "serverless",
    webpack(config) {
      config.plugins.push(new Dotenv({ silent: true }));
      config.resolve.modules.push(path.resolve("./src/"));
      return config;
    },
  })
);
