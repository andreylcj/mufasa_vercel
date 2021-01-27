module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'consistent-return': 'off',
    'react/prop-types': 'off',
    'import/no-cycle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'off',
  },
};
