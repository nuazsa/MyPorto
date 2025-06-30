import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Optional: hilangkan larangan penggunaan 'any' saat perlu
      "@typescript-eslint/no-explicit-any": "off",

      // Optional: izinkan karakter `'` dan `"` langsung di JSX
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
