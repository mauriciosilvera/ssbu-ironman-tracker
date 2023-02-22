module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-console': 'off',
    'max-len': 'off',
  },
};
