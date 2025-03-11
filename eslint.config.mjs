import { fixupConfigRules } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...fixupConfigRules(compat.extends(
    "@rocketseat/eslint-config/react",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
)), {
    rules: {
        "prettier/prettier": "error",
        "no-unused-vars": "warn",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-explicit-any": "warn",
    },
}];