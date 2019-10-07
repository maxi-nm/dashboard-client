module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jasmine: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    modules: true,
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
      arrowFunctions: true,
      binaryLiterals: true,
      blockBindings: true,
      classes: true,
      defaultParams: true,
      destructuring: true,
      forOf: true,
      generators: true,
      objectLiteralComputedProperties: true,
      objectLiteralDuplicateProperties: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      octalLiterals: true,
      regexUFlag: true,
      regexYFlag: true,
      spread: true,
      superInFunctions: true,
      templateStrings: true,
      unicodeCodePointEscapes: true,
      globalReturn: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'import/first': 'error',
    'prettier/prettier': ['error', {
      singleQuote: true
    }],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    strict: 0,
    'comma-dangle': 'off',
    //"react/jsx-filename-extension": "on",
    '@typescript-eslint/indent': ['error', 2],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx']
      },
    ],
    'implicit-arrow-linebreak': 'off',
    'spaced-comment': [0],
    'class-methods-use-this': 0,
    'arrow-parens': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/img-redundant-alt': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/self-closing-comp': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-deprecated': 1,
    'react/jsx-closing-tag-location': 0,
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0,
    'react/no-array-index-key': 0,
    'react/prop-types': [0],
    'no-eval': 'error',
    'no-console': 'off',
    'no-unreachable': 1,
    'no-extra-boolean-cast': 0,
    'no-restricted-syntax': 0,
    'no-mixed-operators': 0,
    'no-trailing-spaces': 'off',
    'no-underscore-dangle': 1,
    'no-unused-vars': 1,
    'no-return-assign': 0,
    'no-class-assign': 'off',
    'no-case-declarations': 0,
    'space-before-blocks': 0,
    'function-paren-newline': 0,
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'import', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
