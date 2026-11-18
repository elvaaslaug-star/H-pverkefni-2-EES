import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: { globals: globals.browser },
  },
  prettier,
  { ignores: ["node_modules/"] },
];
