module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint-config-prettier', 'eslint:recommended', 'plugin:react/recommended'],
  plugins: ['eslint-plugin-prettier', 'react'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/multi-word-component-names': 'warn',
  },
};
