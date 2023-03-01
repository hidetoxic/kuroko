const { NODE_ENV } = process.env
const isLocal = NODE_ENV === 'local' || NODE_ENV === undefined

module.exports = {
  /**
  * **基础规范使用Standard**
  * https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  */
  extends: [
    'standard',
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
    './eslintrc-auto-imports.json'
  ],
  plugins: ['vue'],
  rules: {
    curly: [2, 'multi-line'],
    'import/first': 2,
    'import/newline-after-import': 2,
    'import/no-commonjs': 0,
    'import/order': 2,
    'import/prefer-default-export': 0,
    'no-empty-function': 2,
    'no-multi-spaces': 2,
    'no-new': 0,
    'no-var': 2,
    'object-shorthand': 2,
    'padded-blocks': [2, 'never'],
    'prefer-const': 2,
    'vue/max-attributes-per-line': 0,
    'space-before-function-paren': [
      2,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-self-closing': 0,
    'vue/multi-word-component-names': 0,
    // 会把形似v-model:value的报错
    'vue/no-v-model-argument': 0
  },
  overrides: [
    {
      files: ['src/*', 'src/**/*'],
      rules: {
        'no-alert': isLocal ? 0 : 2,
        'no-console': isLocal ? 0 : 2,
        'no-debugger': isLocal ? 0 : 2,
        'no-unused-vars': 1
      }
    },
    // 解决ts文件下，某些定义被校验的问题
    {
      'files': ['*.ts', '*.vue'],
      'rules': {
        'no-undef': 'off'
      }
    },
    {
      'files': ['*.d.ts'],
      'rules': {
        'no-unused-vars': 'off'
      }
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    'parser': '@typescript-eslint/parser'
  },
  globals: {
    Image: true,
    location: true,
    wx: true,
    WeixinJSBridge: true,
    Swiper: true
  }
}
