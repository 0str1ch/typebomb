module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  env: {
    browser: true,
    es6: true,
    commonjs: true
  },
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "max-len": ["error", 100],
    semi: ["error", "never"],
    quotes: ["error", "single"],
    "comma-dangle": ["error", "never"],
    "space-before-function-paren": ["error", "always"],
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
    "import/prefer-default-export": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js"]
      }
    ]
  }
};
