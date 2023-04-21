module.exports = {
  extends: [
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': ['error', 'stroustrup'],
    'comma-dangle': ['error', 'never'],
    'func-names': ['error', 'as-needed'],
    'guard-for-in': 'off',
    'import/prefer-default-export': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': ["error", { allowForLoopAfterthoughts: true }],
    'no-tabs': ['error', {
      allowIndentationTabs: true
    }],
    'no-unused-expressions': 'off',
    'no-unused-vars': ['error', {
      args: 'after-used',
      args: 'after-used',
      ignoreRestSiblings: true
    }],
    'object-curly-newline': ['error', {
      multiline: true,
      consistent: true
    }],
    semi: ['error', 'never'],
    'template-curly-spacing': ['warn', 'always'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      registeredComponentsOnly: false
    }],
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style']
    }],
    'vue/html-comment-content-newline': ['error', {
      singleline: 'never',
      multiline: 'always'
    }],
    'vue/html-comment-content-spacing': ['error', 'always'],
    'vue/html-comment-indent': ['error', 2],
    'vue/html-indent': ['error', 2],
    'vue/no-empty-component-block': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/no-extra-parens': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-restricted-props': ['error',
      {
        name: "value",
        message: "If you intend a prop for v-model, it should be 'modelValue' in Vue 3.",
        suggest: "modelValue"
      }
    ],
    'vue/no-sparse-arrays': 'error',
    'vue/no-static-inline-styles': ['error', {
      allowBinding: true
    }],
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-concat': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/object-curly-spacing': ['warn', 'always'],
    'vue/padding-line-between-blocks': ['warn', 'always'],
    'vue/prefer-template': 'error',
    'vue/require-name-property': 'error',
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      switchCase: 1
    }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/template-curly-spacing': ['warn', 'always'],
    'vue/v-on-event-hyphenation': ['error', 'always']
  }
}
