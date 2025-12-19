import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";

export default defineConfig([
  js.configs.recommended,
  {
    ignores: ["**/*.test.js", "**/*.test.ts", "eslint.config.js"],
  },
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      }
    },
    rules: {
      "indent": ["error", 2, {
        SwitchCase: 1,
      }],
      "no-await-in-loop": ["warn"],
      "no-use-before-define": ["warn"],
      "no-unreachable-loop": ["warn"],
      "no-duplicate-imports": ["warn"],
      "array-callback-return": ["warn"],
      "eqeqeq": ["error"],
      "yoda": ["warn", "always"],
      "no-new-wrappers": ["warn"],
      "space-before-blocks": ["warn"],
      "no-else-return": ["warn"],
      "no-unneeded-ternary": ["warn"],
      "no-loop-func": ["warn"],
      "no-eval": ["error"],
      "prefer-template": ["warn"],
      "no-array-constructor": ["warn"],
      "prefer-object-spread": ["warn"],
      "no-new-object": ["warn"],
    },
  }
]);
