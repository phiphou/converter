module.exports = {
  plugins: [
    "prettier-plugin-tailwindcss",
    "prettier-plugin-multiline-arrays",
  ],
  tailwindConfig: "./tailwind.config.js",
  semi: false,
  singleQuote: false,
  trailingComma: "es5",
  printWidth: 120,
  bracketSameLine: false,
  bracketSpacing: false,
  jsonRecursiveSort: true,
  multilineArraysWrapThreshold: 1,
}
