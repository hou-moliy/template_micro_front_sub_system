module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true, // 解决__dirname报错
    },

    "extends": [ // 检查包括了那些规范，通过这个节点可以配置使用 内置规范 还是 第三方规范
        "eslint:recommended",
        "plugin:vue/essential"
    ],

    "overrides": [
        {
            files: ["src/views/index.vue", "src/views/**/index.vue"],
            rules: {
                "vue/multi-word-component-names": 0,
            },
        },
    ],

    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "process": true // 解决process读取问题
    },

    "parserOptions": {
        "ecmaVersion": 2018,
        "parser": "babel-eslint", // 解决import导入问题
    },

    "plugins": [
        "vue"
    ],

    "rules": {
        // 规则说明：
        // 第一个参数：
        // "off"或0 - 关闭规则
        // "warn"或1 - 将该规则作为警告打开（不影响退出代码）
        // "error"或2 - 将规则作为错误打开（退出代码将为1）
        // 第二个参数
        // always（默认）：举例在语句末尾需要分号
        // never：举例不允许加分号
        // 举例=>  "semi":[2,'never'] 表示不允许有分号，有分号就会报错
        indent: ["error", 2], // 2个空格缩进
        quotes: [1, "double"], // 建议使用双引号
        semi: [1, "always"], // 建议以分号结尾
        "comma-dangle": ["error", "always-multiline"], // 对象字面量项尾是逗号
        "no-var": "error", // 使用 let 或 const 而不是 var
        "no-nested-ternary": "error", // 禁止使用嵌套的三元表达式
        "space-before-function-paren": [2, "always"], // 函数定义时括号前面必须有空格
        eqeqeq: [1, "always"], // 警告，要求使用 === 和 !==,这里似乎和sonar有点差异
        "spaced-comment": ["error", "always"], // 注释后随至少一个空白
        'no-console': process.env.NODE_ENV === 'prod' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'prod' ? 'warn' : 'off',
        camelcase: ["error", { properties: "never", ignoreDestructuring: true }], // 使用驼峰命名，不检查属性名称，不检查解构标识符
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
};
