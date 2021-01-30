// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    frontend: "/dist",
    "src/_static": { url: "/", static: true, resolve: false },
    ".bridgetown": { url: "/", static: true },
  },
  plugins: [
    "@snowpack/plugin-dotenv",
    [
      "@snowpack/plugin-run-script",
      {
        name: "bridgetown",
        cmd: "bin/bridgetown build",
        watch: "$1 --watch --quiet",
      },
    ],
    "@snowpack/plugin-postcss",
  ],
  devOptions: {
    hmrDelay: 1000,
    open: "none",
  },
  buildOptions: {
    metaUrlPath: "dist/javascript",
  },
  optimize: {
    entrypoints: ["dist/javascript/index.js"],
    preload: false,
    bundle: false,
    splitting: false,
    treeshake: true,
    minify: true,
    manifest: true,
    target: "es2018",
  },
}
