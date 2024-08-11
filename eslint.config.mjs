import globals from "globals";


export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      
      "react/prop-types": 0,
      "no-unused-vars": ["error", { "args": "none", "ignoreRestSiblings": true }]
    },
  },
];