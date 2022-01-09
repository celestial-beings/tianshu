# tianshu
天枢 —— 基于vite/vue的前端控制台脚手架

# Tag 0.0.1

- 添加vue-router
- 添加postcss-cssnext插件，支持css嵌套
- 基于vue3 reative, computed, readonly API实现了一套全局状态管理。 API设计参考了vuex，基本能满足基本的全局状态管理需求。

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