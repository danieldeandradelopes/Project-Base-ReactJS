module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "airbnb",
    // add
    "prettier",
    // add
    "prettier/react"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  // add
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: [
    "react",
    // add
    "prettier"
  ],
  rules: {
    // add
    "prettier/prettier": "error",
    // add
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
    // add
    "import/prefer-default-exports": "off"
  }
};
