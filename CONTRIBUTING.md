# Next OJ 贡献指南

感谢所有为 Next OJ 做出贡献的开发者！

## 初始化

1. Fork 本仓库到你的个人 Github 账号下
2. 本地新建一个文件夹，clone 上一步 fork 出来的仓库
3. 执行命令
   ```bash
   $ pnpm bootstrap
   ```


## 目录结构

源代码在 `packages` 文件夹下，一般在 `packages` 文件夹下进行更改。

```js
- packages
  └ shared  // 通用工具
  └ server  // 服务端
  └ web     // 网页端
```

## 提交更改

### 更新日志

当你完成更改，并且测试通过后，运行命令：

```bash
$ pnpm changeset add
```

跟随命令提示，输入必要的信息，完成后即可 commit。

### Commit 规范

参考：[Angular 提交信息规范](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format)。

本项目的 `scope` 有：

- **compiler**：代码编译运行相关
- **problem**：题目系统
- **user**：用户系统
- **contest**：比赛系统
- **discussions**：讨论系统
- 也可以不填

不符合规范的 commit 无法提交。

**Enjoy your coding life!**
