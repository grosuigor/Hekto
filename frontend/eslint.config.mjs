import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist", "node_modules"]),
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [["@", "./src"]],
          extensions: [".ts", ".tsx"],
        },
      },
    },
    rules: {
      "react-hooks/exhaustive-deps": "error",

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // React
            ["^react$", "^react-dom", "^react/"],
            // Routing
            ["^react-router"],
            // External packages (clsx, …)
            ["^@?\\w"],
            // Shared domain types / constants
            ["^@/(types|constants|secrets)"],
            // App infrastructure
            ["^@/(services|store|hooks|routing)"],
            // UI
            ["^@/(components|layouts|pages)"],
            // Remaining absolute aliases
            ["^@/"],
            // Relative imports (non-styles)
            ["^\\.(?!.*\\.s?css$)"],
            // Static assets
            ["^@/assets"],
            // Style modules — last
            ["^.+\\.s?css$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },
]);
