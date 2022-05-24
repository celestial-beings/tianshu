module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    // solve error 'defineProps' is not defined' in <script setup>
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  parser: 'vue-eslint-parser',
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/comment-directive': 'off',
    '@typescript-eslint/no-explicit-any': ['off']
  }
}
