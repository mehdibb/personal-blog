module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: `./tsconfig.json`
  },
  rules: {
    'react/jsx-props-no-spreading': 'off'
  },
  ignorePatterns: ['.eslintrc.js'],
}