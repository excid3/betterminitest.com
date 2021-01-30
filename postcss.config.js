const tailwind = require("tailwindcss")
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")
// const hash = require("postcss-hash")

const plugins =
  process.env.NODE_ENV === "production"
    ? [tailwind, autoprefixer, cssnano]
    : [tailwind]

module.exports = { plugins }
