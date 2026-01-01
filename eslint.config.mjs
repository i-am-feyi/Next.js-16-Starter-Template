import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import checkFile from "eslint-plugin-check-file";
import eslintPluginN from "eslint-plugin-n";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: {
      "check-file": checkFile,
      n: eslintPluginN,
    },
    rules: {
      "prefer-arrow-callback": ["error"],
      semi: ["error"],
      quotes: ["error", "double"],
      "n/no-process-env": ["error"],
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.{ts,tsx}": "KEBAB_CASE",
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          "src/**/!^[": "KEBAB_CASE",
          "./**/!^[": "KEBAB_CASE",
        },
      ],
      // "no-restricted-properties": [
      //   "warn",
      //   {
      //     object: "process",
      //     property: "env",
      //     message: "Use the env object instead of process.env",
      //   },
      // ],
    },
  },
]);

export default eslintConfig;
