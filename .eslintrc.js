module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: `./tsconfig.json`,
    tsconfigRootDir: "./"
  },
  plugins: [
    "@typescript-eslint",
    "import"
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
  },
  ignorePatterns: ['.eslintrc.js'],
  settings: {
    "import/resolver": {
      "typescript": {}
    }
  },
}