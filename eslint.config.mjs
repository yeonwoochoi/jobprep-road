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
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // any 타입 쓸수 있게
      '@typescript-eslint/no-unused-vars': 'warn', // 사용하지 않는 변수 있을 때 경고만 표시
      'prefer-const': 'warn', // 재할당 없는 변수는 const로 권장하는 규칙
    }
  }
];

export default eslintConfig;
