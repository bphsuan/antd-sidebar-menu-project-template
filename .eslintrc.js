module.exports = {
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2021: true,
    jest: true
  },
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true
      }
    ],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'keyword-spacing': ['error', { before: true, after: true }],
    // 'space-before-function-paren': [
    //   'error',
    //   {
    //     anonymous: 'always',
    //     named: 'always'
    //   }
    // ],
    eqeqeq: ['error', 'always'],
    'space-infix-ops': ['error', { int32Hint: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    // 'padding-line-between-statements': ['error', { blankLine: 'never', prev: '*', next: '*' }],
    'one-var': [
      'error',
      {
        var: 'never'
      }
    ],
    camelcase: ['error', { properties: 'always' }],
    'comma-dangle': ['error', 'never'],
    'dot-location': ['error', 'property'],
    'comma-style': ['error', 'last'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'new-cap': ['error', { newIsCap: true }],
    'new-parens': ['error', 'always'],
    'accessor-pairs': ['error', { setWithoutGet: true }],
    'constructor-super': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-class-assign': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],
    'no-extra-parens': ['error', 'functions'],
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipTemplates: true,
        skipComments: true,
        skipRegExps: true
      }
    ],
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-return-assign': 'error',
    'no-self-assign': ['error', { props: true }],
    'no-self-compare': 'error',
    'no-sequences': ['error', { allowInParentheses: false }],
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-tabs': ['error', { allowIndentationTabs: false }],
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false
      }
    ],
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    'padded-blocks': ['error', 'never'],
    'rest-spread-spacing': ['error', 'never'],
    'semi-spacing': ['error', { before: false, after: true }],
    'space-before-blocks': 'error',
    'space-in-parens': ['error', 'never'],
    'space-unary-ops': 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          balanced: true
        }
      }
    ],
    'template-curly-spacing': ['error', 'never'],
    'use-isnan': [
      'error',
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true
      }
    ],
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'wrap-iife': ['error', 'any'],
    'yield-star-spacing': ['error', { before: true, after: true }],
    yoda: 'error',
    semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }]
  }
}
