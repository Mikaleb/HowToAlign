module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: [],
  rules: {
    // no semicolon at end of line
    semi: "off",
    "prettier/prettier": [
      "error",
      {
        semi: false,
      },
    ],
  },
  extends: ["@nuxt/eslint-config", "plugin:prettier/recommended"],
}
