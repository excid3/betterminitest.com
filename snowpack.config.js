// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    _bridgetown: { url: "/", static: true },
    frontend: "/dist",
    "src/_static": { url: "/", static: true, resolve: false },
  },
  plugins: [
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-postcss",
    [
      "@snowpack/plugin-run-script",
      {
        name: "bridgetown",
        cmd: "bin/bridgetown build",
        watch: "$1 --watch --quiet",
      },
    ],
    [
      "snowpack-plugin-minify-html",
      {
        htmlMinifierOptions: {
          // https://github.com/kangax/html-minifier#readme
          collapseWhitespace: true,
          removeComments: true,
          removeEmptyAttributes: true,
          sortAttributes: true,
        },
      },
    ],
  ],
  packageOptions: {
    NODE_ENV: true,
    source: "remote",
  },
  buildOptions: {
    clean: true,
    out: "build",
  },
  devOptions: {
    open: "none",
    hmrDelay: 1100,
  },
  optimize: {
    preload: false,
    bundle: false,
    manifest: true,
    minify: true,
    target: "es2018",
  },
}
