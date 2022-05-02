# tianshu
天枢 —— 基于vite/vue的前端控制台脚手架

# Tag 0.0.1

- 添加vue-router
- 添加postcss-cssnext插件，支持css嵌套
- 禁用 'vue/multi-word-component-names' 检查

# Tag 0.0.0

- 支持vue3中使用jsx/tsx
- 配置了完整的eslint自动检查/提示
    - 注意：.txs开始默认没检测到，最后是在vscode中改了eslint配置文件。
    ```
    "eslint.validate": [
        "typescriptreact"
    ]
    ```
- 支持文件保存时自动修复eslint错误
```
"editor.codeActionsOnSave": {
     "source.fixAll.eslint": true
}
```
- 解决eslint错误：'HelloWorld' is declared but its value is never read.Vetur(6133)
```
"vetur.validation.script": false,
```

# 2022-05-02

- 移除 postcss-cssnext 插件
- 新增 postcss-nested、postcss-preset-env 插件（参考 https://www.postcss.com.cn/， https://wenku.baidu.com/view/e3aec0035bfb770bf78a6529647d27284a733756.html）
