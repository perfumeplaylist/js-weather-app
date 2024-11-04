module.exports = {
  parser: "@typescript-eslint/parser", // TypeScript 파서 사용
  extends: [
    "eslint:recommended", // 기본 ESLint 권장 설정
    "plugin:@typescript-eslint/recommended", // TypeScript 권장 설정
    "plugin:prettier/recommended", // Prettier와 통합
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    // 추가할 룰들 (예시)
    "no-unused-vars": "off", // JS와 TypeScript에서 동시에 사용할 때 중복 방지
    "@typescript-eslint/no-unused-vars": ["error"], // 사용되지 않는 변수에 대한 TypeScript 오류
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // TypeScript 파일에만 적용할 룰 추가
      rules: {},
    },
  ],
};
