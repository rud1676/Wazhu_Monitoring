module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next/core-web-vitals", // 넥스트에서 제공하는 셋팅
    "eslint:recommended", // eslint에서 추천하는 셋팅
    "plugin:react-hooks/recommended", // 훅스 스타일로 리액트 코드 작성
    "plugin:react/recommended", // 리액트 코드 스타일
    "prettier", // 프리티어 연동

    // "next/babel",
    "plugin:prettier/recommended", // 프리티어 연동
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"], // 리액트 훅스, 리액트
  rules: {
    "react/require-default-props": 0,
    "react/react-in-jsx-scope": 0, // react import해야하는 거 기능 끔
    "import/prefer-default-export": 0, //
    "react/function-component-definition": [
      // arrow function으로 훅스
      2,
      { namedComponents: "arrow-function" },
    ],
    "react/jsx-filename-extension": [
      // tsx파일만 작성권장
      1,
      {
        extensions: [".jsx", ".js"],
      },
    ],
    "import/extensions": 0,
    camelcase: 0,
    "import/no-unresolved": 0,
    "react/forbid-prop-types": 0,
    "no-alert": 0,
    "prettier/prettier": 0,
    "react/prop-types": 0,
    "no-return-assign": 0,
    "no-param-reassign": 0,
    "array-callback-return": 0,
    "no-unused-vars": 0,
  },
};
