module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',// 解决import导入问题
    sourceType: 'module',
    ecmaVersion: 2018
  },
  env: {
    browser: true,
    node: true,  // 解决__dirname报错
    es6: true,
    commonjs: true,
  },
  // 检查包括了那些规范，通过这个节点可以配置使用 内置规范 还是 第三方规范
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    process: true // 解决process读取问题
  },
  rules: {
    // "vue/max-attributes-per-line": [2, {
    //   "singleline": 10,
    //   "multiline": {
    //     "max": 1,
    //     "allowFirstLine": false
    //   }
    // }],
    // "vue/singleline-html-element-content-newline": "off",
    // "vue/multiline-html-element-content-newline": "off",
    // "vue/name-property-casing": ["error", "PascalCase"],
    // "vue/no-v-html": "off",
    'accessor-pairs': 2, // 强制getter/setter成对出现在对象中
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }], // 强制箭头函数的箭头前后使用一致的空格,有一个或多个
    'block-spacing': [2, 'always'], // 强制在代码块中开括号前和闭括号后有空格 
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }], // 允许块的开括号和闭括号在 同一行
    camelcase: ["error", { properties: "never", ignoreDestructuring: true }], // 使用驼峰命名，不检查属性名称，不检查解构标识符
    "comma-dangle": ["error", "always-multiline"], // 对象字面量项尾是逗号
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],  // 强制在逗号前后使用一致的空格
    'comma-style': [2, 'last'], // 强制使用一致的逗号风格, 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
    'constructor-super': 2,
    'curly': [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    'eqeqeq': [1, "always", { "null": "ignore" }], // 警告，要求使用 === 和 !==,这里似乎和sonar有点差异
    'generator-star-spacing': [2, {
      'before': false,
      'after': true
    }],
    'handle-callback-err': [2, '^(err|error)$'],
    'indent': [2, 2, {
      'SwitchCase': 1
    }], // 两个空格缩进
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-console': 'off',
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 0,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2, // 禁止属性前有空白
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }], // 要求把换行符放在操作符后面
    'padded-blocks': [2, 'never'], //  禁止块语句和类的开始或末尾有空行

    'quotes': [1, 'double', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }], // 建议使用双引号
    'semi': [1, 'always'], // 建议以分号结尾
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    "no-nested-ternary": "error", // 禁止使用嵌套的三元表达式
    "no-var": "error", // 使用 let 或 const 而不是 var
    'space-before-blocks': [2, 'always'], // 强制在块之前使用一致的空格
    'space-before-function-paren': [2, 'always'], // 强制在 function的左括号之前使用一致的空格
    'space-in-parens': [2, 'never'], // 强制在圆括号内使用一致的空格
    'space-infix-ops': 2, // 要求操作符周围有空格
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }], // 	强制在一元操作符前后使用一致的空格
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }], // 	强制在注释中 // 或 /* 使用一致的空格
    'template-curly-spacing': [2, 'never'], // 要求或禁止在模板标记和它们的字面量之间有空格
    'use-isnan': 2, // 要求使用 isNaN() 检查 NaN
    'valid-typeof': 2, // 强制 typeof 表达式与有效的字符串进行比较
    'wrap-iife': [2, 'any'], // 需要把立即执行的函数包裹起来
    'prefer-const': 2, // 要求使用 const 声明那些声明后不再被修改的变量
    'no-debugger': process.env.NODE_ENV === 'prod' ? 2 : 0,
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: true
    }], // 强制在花括号中使用一致的空格
    'array-bracket-spacing': [2, 'never'] // 禁止在数组括号内出现空格
  },
  overrides: [
    {
      files: [
        'src/views/index.vue',
        'src/views/**/index.vue'
      ],
      rules: {
        'vue/multi-word-component-names': 0
      }
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
