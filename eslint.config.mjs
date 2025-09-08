import next from "eslint-config-next";

// Use Next.js flat config for ESLint v9
export default [
  ...next(),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "dist/**",
      "coverage/**",
    ],
  },
];
